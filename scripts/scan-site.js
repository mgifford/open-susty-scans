#!/usr/bin/env node
/**
 * scripts/scan-site.js
 *
 * Playwright-based visit-and-scroll energy scan.
 * Simulates realistic user behaviour (page load, incremental scroll, idle pause)
 * so that Eco CI energy estimates reflect actual rendering and scripting cost.
 *
 * Usage:
 *   node scripts/scan-site.js --url https://example.com [--output ./out.json]
 *   node scripts/scan-site.js --urls-file ./urls.txt   [--output ./out.json]
 *
 * Legacy positional form (still accepted for backwards compatibility):
 *   node scripts/scan-site.js https://example.com
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const args = parseArgs(process.argv.slice(2));
const urls = resolveUrls(args);

if (urls.length === 0) {
  console.error('No URLs to scan. Use --url <url> or --urls-file <file>.');
  process.exit(1);
}

const outputFile = args.output ? resolve(args.output) : null;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const url of urls) {
    console.log(`\nScanning: ${url}`);
    const result = await visitAndScroll(browser, url);
    results.push(result);
    if (result.status !== 'ok') process.exitCode = 1;
  }

  await browser.close();

  const report = {
    scannedAt: new Date().toISOString(),
    urlCount: urls.length,
    results,
  };

  if (outputFile) {
    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, JSON.stringify(report, null, 2), 'utf8');
    console.log(`\nScan metrics written to: ${outputFile}`);
  } else {
    console.log('\n--- Scan Summary ---');
    console.log(JSON.stringify(report, null, 2));
  }
})();

/**
 * Simulates a realistic page visit:
 *   1. Navigate and wait for network idle
 *   2. Collect browser-reported navigation timing
 *   3. Incrementally scroll to trigger lazy-load and JS execution
 *   4. Pause at the bottom to capture idle/deferred-script CPU cost
 *   5. Scroll back to the top
 */
async function visitAndScroll(browser, url) {
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();

  // Track approximate transfer bytes via response Content-Length headers.
  let transferBytes = 0;
  let requestCount = 0;
  page.on('response', (response) => {
    requestCount += 1;
    const cl = response.headers()['content-length'];
    if (cl) transferBytes += parseInt(cl, 10);
  });

  const startTime = Date.now();

  try {
    // 1. Navigate – wait for the network to go quiet.
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

    // 2. Collect browser-reported navigation timing.
    const navTiming = await page.evaluate(() => {
      const [nav] = performance.getEntriesByType('navigation');
      return nav
        ? {
            domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
            loadComplete: Math.round(nav.loadEventEnd),
            ttfb: Math.round(nav.responseStart - nav.requestStart),
          }
        : null;
    });

    // 3. Incremental scroll (300 px steps, 250 ms pause — "reading" cadence).
    const scrollStep = 300;
    const scrollDelay = 250;
    let currentY = 0;
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);

    while (currentY < pageHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), currentY);
      await page.waitForTimeout(scrollDelay);
      currentY += scrollStep;
    }

    // 4. Pause at the bottom to capture idle/deferred-script CPU cost.
    await page.waitForTimeout(2_000);

    // 5. Scroll back to the top (simulates the user returning focus).
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    const durationMs = Date.now() - startTime;
    const title = await page.title();

    console.log(
      `  ✓ ${title} — ${(durationMs / 1000).toFixed(1)}s, ` +
        `~${(transferBytes / 1024).toFixed(0)} KB, ${requestCount} requests`,
    );

    return {
      url,
      title,
      status: 'ok',
      durationMs,
      transferBytes,
      requestCount,
      navTiming,
    };
  } catch (error) {
    const durationMs = Date.now() - startTime;
    console.error(`  ✗ ${url} — ${error.message}`);
    return {
      url,
      status: 'error',
      error: error.message,
      durationMs,
      transferBytes,
      requestCount,
    };
  } finally {
    await context.close();
  }
}

function resolveUrls(parsedArgs) {
  if (parsedArgs.url) return [parsedArgs.url];
  if (parsedArgs.urlsFile) {
    return readFileSync(resolve(parsedArgs.urlsFile), 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'));
  }
  return [];
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const val = i + 1 < argv.length ? argv[i + 1] : undefined;
    switch (key) {
      case '--url':
        out.url = val;
        i += 1;
        break;
      case '--urls-file':
        out.urlsFile = val;
        i += 1;
        break;
      case '--output':
        out.output = val;
        i += 1;
        break;
      default:
        // Legacy: first positional argument is treated as a single URL.
        if (!key.startsWith('--') && !out.url) out.url = key;
        break;
    }
  }
  return out;
}
