import { readFileSync } from "node:fs";

export function parseUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => {
      // Fast path: the whole trimmed value is already a valid URL.
      if (isValidHttpUrl(value)) return value;
      // Slow path: try to extract an embedded http/https URL from the line
      // (handles list markers, markdown links, URLs with trailing descriptions).
      const match = value.match(/https?:\/\/\S+/);
      if (!match) return null;
      // Strip common trailing punctuation that is unlikely to be part of a URL.
      const candidate = match[0].replace(/[.,!?;:'")\]>]+$/, "");
      return isValidHttpUrl(candidate) ? candidate : null;
    })
    .filter(Boolean);
}

function isValidHttpUrl(value) {
  try {
    const url = new URL(value);
    // Require a dotted hostname to reject clearly non-routable single-label values
    // (e.g. "https://not") while still allowing all public domain URLs.
    return (url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

export function extractSection(body, sectionName) {
  const pattern = new RegExp(`^#{1,6}\\s+${escapeRegex(sectionName)}\\s*$`, "im");
  const match = body.match(pattern);
  if (!match || match.index === undefined) {
    return "";
  }

  const start = match.index + match[0].length;
  const rest = body.slice(start);
  const nextHeadingMatch = rest.match(/^#{1,6}\s+/m);
  const end = nextHeadingMatch && nextHeadingMatch.index !== undefined ? nextHeadingMatch.index : rest.length;
  return rest.slice(0, end).trim();
}

export function parseIssueBodyForUrls(body) {
  const urlsSection = extractSection(body, "URLs");
  const sectionUrls = parseUrls(urlsSection);
  if (sectionUrls.length > 0) {
    return sectionUrls;
  }
  return parseUrls(body);
}

export function loadUrlsFromFile(filePath) {
  const raw = readFileSync(filePath, "utf8");
  return dedupeUrls(parseUrls(raw));
}

export function loadUrlsFromIssueBodyFile(filePath) {
  const raw = readFileSync(filePath, "utf8");
  return dedupeUrls(parseIssueBodyForUrls(raw));
}

export function dedupeUrls(urls) {
  const seen = new Set();
  const result = [];
  for (const url of urls) {
    if (!seen.has(url)) {
      seen.add(url);
      result.push(url);
    }
  }
  return result;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
