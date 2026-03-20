/**
 * URL discovery helpers.
 *
 * When a scan issue has no explicit URL list, this module attempts to discover
 * pages automatically:
 *   1. Parse "Number:" / "Pages:" from the issue body to get a count hint.
 *   2. Try to fetch sitemap.xml (respecting robots.txt Sitemap: directives).
 *   3. If the sitemap has fewer than `limit` HTML URLs, crawl the site for more.
 *   4. Randomly sample down to `limit`.
 *
 * Only HTML page URLs are returned — PDFs, Word docs, XML feeds, media files,
 * and other non-HTML assets are filtered out.
 */

const DEFAULT_LIMIT = 100;
const MAX_LIMIT = 500;
const FETCH_TIMEOUT_MS = 15000;

/** File extensions that are never HTML pages. */
const NON_HTML_EXTS = new Set([
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
  "zip", "gz", "tar", "rar", "7z",
  "xml", "rss", "atom",
  "json", "csv", "txt",
  "mp3", "mp4", "avi", "mov", "wmv", "webm",
  "jpg", "jpeg", "png", "gif", "svg", "ico", "webp", "avif",
  "woff", "woff2", "ttf", "eot",
  "css", "js", "mjs",
]);

/**
 * Returns true if the URL looks like an HTML page rather than a downloadable
 * file, feed, or other non-HTML asset.
 */
export function isHtmlUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const lastSegment = pathname.split("/").pop() || "";
    const dotIdx = lastSegment.lastIndexOf(".");
    if (dotIdx === -1) return true; // no extension — likely an HTML page
    const ext = lastSegment.slice(dotIdx + 1).toLowerCase().split("?")[0];
    return !NON_HTML_EXTS.has(ext);
  } catch {
    return false;
  }
}

function isSameOrigin(url, origin) {
  try {
    return new URL(url).origin === origin;
  } catch {
    return false;
  }
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "user-agent": "open-susty-scans/0.1" },
      redirect: "follow",
    });
    if (!response.ok) return null;
    const ct = response.headers.get("content-type") || "";
    // Accept text/*, application/xhtml+xml, and XML variants (for sitemaps)
    if (
      !ct.includes("text/") &&
      !ct.includes("application/xhtml") &&
      !ct.includes("application/xml") &&
      !ct.includes("+xml")
    ) return null;
    return response.text();
  } catch {
    return null;
  }
}

/**
 * Parse a page-count hint from an issue body.
 * Recognises lines like "Number: 50" or "Pages: 200" (case-insensitive).
 * Returns null when no hint is found. The returned value is capped at MAX_LIMIT.
 */
export function parseCountHint(body) {
  if (!body) return null;
  const match = body.match(/^\s*(?:Number|Pages)\s*:\s*(\d+)\s*$/im);
  if (!match) return null;
  const n = Number(match[1]);
  return Math.min(n, MAX_LIMIT);
}

/**
 * Extract the first http/https URL from a string such as
 * "SCAN: https://www.gsa.gov/".  Returns the origin + "/" or null.
 */
export function extractBaseUrlFromTitle(title) {
  if (!title) return null;
  const match = title.match(/https?:\/\/\S+/);
  if (!match) return null;
  const candidate = match[0].replace(/[.,!?;:'")\]>]+$/, "");
  try {
    const u = new URL(candidate);
    return `${u.origin}/`;
  } catch {
    return null;
  }
}

function parseSitemapLocs(xml) {
  const locs = [];
  const re = /<loc>\s*(https?:\/\/[^<\s]+)\s*<\/loc>/gi;
  for (const m of xml.matchAll(re)) {
    locs.push(m[1].trim());
  }
  return locs;
}

/**
 * Fetch HTML page URLs from a site's sitemap.xml (or sitemap index).
 * Checks robots.txt for a Sitemap: directive first.
 */
export async function fetchSitemapUrls(baseUrl, { maxSubSitemaps = 10 } = {}) {
  const origin = new URL(baseUrl).origin;
  const candidates = [`${origin}/sitemap.xml`];

  // Supplement with sitemap URLs advertised in robots.txt
  const robotsTxt = await fetchText(`${origin}/robots.txt`);
  if (robotsTxt) {
    for (const m of robotsTxt.matchAll(/^Sitemap:\s*(https?:\/\/\S+)/gim)) {
      const loc = m[1].trim();
      if (!candidates.includes(loc)) candidates.unshift(loc);
    }
  }

  const visited = new Set();
  const htmlUrls = [];

  async function processSitemap(url, depth) {
    if (depth > 3 || visited.has(url)) return;
    visited.add(url);
    const xml = await fetchText(url);
    if (!xml) return;
    const locs = parseSitemapLocs(xml);
    if (/<sitemapindex/i.test(xml)) {
      // Each <loc> points to a child sitemap, not a page
      let count = 0;
      for (const loc of locs) {
        if (count >= maxSubSitemaps) break;
        await processSitemap(loc, depth + 1);
        count += 1;
      }
    } else {
      // Each <loc> is a page URL
      for (const loc of locs) {
        if (isSameOrigin(loc, origin) && isHtmlUrl(loc)) {
          htmlUrls.push(loc);
        }
      }
    }
  }

  for (const candidate of candidates) {
    await processSitemap(candidate, 0);
    if (htmlUrls.length > 0) break;
  }
  return htmlUrls;
}

/**
 * Lightweight BFS crawler.  Fetches pages, extracts <a href> links that are
 * same-origin HTML URLs, and continues until `limit` pages are collected.
 */
export async function crawlSiteUrls(baseUrl, limit = DEFAULT_LIMIT) {
  const origin = new URL(baseUrl).origin;
  const visited = new Set();
  const queue = [baseUrl];
  const found = [];

  while (queue.length > 0 && found.length < limit) {
    const raw = queue.shift();
    let url;
    try {
      const u = new URL(raw);
      u.hash = "";
      url = u.href;
    } catch {
      continue;
    }

    if (visited.has(url)) continue;
    visited.add(url);

    if (!isSameOrigin(url, origin) || !isHtmlUrl(url)) continue;
    found.push(url);

    const html = await fetchText(url);
    if (!html) continue;

    for (const m of html.matchAll(/href=["']([^"'#][^"']*?)["']/gi)) {
      const href = m[1].trim();
      if (
        !href ||
        href.startsWith("mailto:") ||
        href.startsWith("javascript:") ||
        href.startsWith("data:") ||
        href.startsWith("vbscript:") ||
        href.startsWith("tel:")
      ) continue;
      try {
        const abs = new URL(href, url);
        abs.hash = "";
        const clean = abs.href;
        if (!visited.has(clean) && isSameOrigin(clean, origin) && isHtmlUrl(clean)) {
          queue.push(clean);
        }
      } catch {
        // skip invalid hrefs
      }
    }
  }

  return found;
}

function randomSample(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

/**
 * Top-level discovery orchestrator.
 *
 * @param {string} baseUrl    Root URL of the site to discover (e.g. "https://www.gsa.gov/").
 * @param {string} issueBody  Raw issue body text (used to extract a count hint).
 * @param {number} [defaultLimit=100]  Fall-back page count when no hint in issue body.
 * @returns {Promise<string[]>}  Up to `limit` HTML page URLs.
 */
export async function discoverUrls(baseUrl, issueBody = "", defaultLimit = DEFAULT_LIMIT) {
  const limit = parseCountHint(issueBody) ?? defaultLimit;
  console.error(
    `[discover] No URLs in issue. Discovering from ${baseUrl} (target: ${limit} pages)`
  );

  // Step 1: sitemap
  let discovered = [];
  try {
    discovered = await fetchSitemapUrls(baseUrl);
    console.error(`[discover] Sitemap returned ${discovered.length} HTML URLs`);
  } catch (err) {
    console.error(`[discover] Sitemap error: ${err.message}`);
  }

  // Step 2: crawl if sitemap didn't provide enough pages
  if (discovered.length < limit) {
    console.error(
      `[discover] Sitemap has ${discovered.length} URLs, crawling for more…`
    );
    try {
      const crawled = await crawlSiteUrls(baseUrl, limit);
      console.error(`[discover] Crawl found ${crawled.length} URLs`);
      // Merge, preserving sitemap order and deduplicating
      const seen = new Set(discovered);
      for (const u of crawled) {
        if (!seen.has(u)) {
          seen.add(u);
          discovered.push(u);
        }
      }
    } catch (err) {
      console.error(`[discover] Crawl error: ${err.message}`);
    }
  }

  if (discovered.length > limit) {
    discovered = randomSample(discovered, limit);
  }

  console.error(`[discover] Returning ${discovered.length} URLs`);
  return discovered;
}
