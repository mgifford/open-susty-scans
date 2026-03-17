#!/usr/bin/env node
/**
 * scripts/build-energy-report.js
 *
 * Builds an accessible HTML + JSON energy report from:
 *   - Eco CI step output JSON (energy/CO2 estimates from GitHub Actions runner)
 *   - scan-site.js output JSON (per-URL timing and transfer metrics)
 *
 * Optionally compares against a stored baseline and flags regressions.
 * When --update-baseline is set, the baseline file is updated after a
 * successful run so the next run can compare against the latest good values.
 *
 * Usage:
 *   node scripts/build-energy-report.js \
 *     --eco-ci /tmp/eco-ci/total-data.json \
 *     --scan-metrics .tmp/energy/scan-metrics.json \
 *     --out-dir reports/energy/latest \
 *     [--baseline reports/energy/baseline.json] \
 *     [--update-baseline]
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const args = parseArgs(process.argv.slice(2));

const ecoData = args.ecoCI ? readJSON(resolve(args.ecoCI)) : null;
const scanData = args.scanMetrics ? readJSON(resolve(args.scanMetrics)) : null;
const baselinePath = args.baseline ? resolve(args.baseline) : null;
const baseline =
  baselinePath && existsSync(baselinePath) ? readJSON(baselinePath) : null;

const outDir = resolve(args.outDir || 'reports/energy/latest');
mkdirSync(outDir, { recursive: true });

const report = buildReport({ ecoData, scanData, baseline });

writeFileSync(resolve(outDir, 'report.json'), JSON.stringify(report, null, 2), 'utf8');
writeFileSync(resolve(outDir, 'index.html'), buildHTML(report), 'utf8');

// ── Regression check ─────────────────────────────────────────────────────────
if (report.baselineComparison) {
  const { changePercent, isRegression, baselineJoules, currentJoules } =
    report.baselineComparison;
  if (isRegression) {
    console.warn(
      `\n⚠ Energy regression: +${changePercent}% over baseline ` +
        `(${baselineJoules.toFixed(4)} J → ${currentJoules.toFixed(4)} J)`,
    );
    process.exitCode = 1;
  } else {
    const sign = changePercent > 0 ? '+' : '';
    const status = changePercent <= 0 ? ' (improvement ✓)' : ' (within tolerance)';
    console.log(`Energy vs baseline: ${sign}${changePercent}%${status}`);
  }
}

// ── Update baseline ───────────────────────────────────────────────────────────
if (args.updateBaseline && baselinePath && report.energy.totalJoules != null) {
  mkdirSync(dirname(baselinePath), { recursive: true });
  writeFileSync(
    baselinePath,
    JSON.stringify(
      { energy: report.energy, urls: report.urls, updatedAt: report.generatedAt },
      null,
      2,
    ),
    'utf8',
  );
  console.log(`Baseline updated: ${baselinePath}`);
}

console.log(`\nEnergy report written to: ${outDir}`);

// ── builder functions ─────────────────────────────────────────────────────────

function buildReport({ ecoData, scanData, baseline: base }) {
  const now = new Date().toISOString();
  const urls = scanData?.results?.map((r) => r.url) ?? [];

  // Eco CI v5 total-data.json field names (defensive — try multiple candidates).
  const totalJoules = extractJoules(ecoData);
  const co2Grams = ecoData?.co2_value ?? ecoData?.co2 ?? null;
  const cpuAvg = ecoData?.cpu_avg ?? null;

  const baselineComparison =
    base?.energy?.totalJoules != null && totalJoules != null
      ? {
          baselineJoules: base.energy.totalJoules,
          currentJoules: totalJoules,
          changePercent: Number(
            (
              ((totalJoules - base.energy.totalJoules) / base.energy.totalJoules) *
              100
            ).toFixed(1),
          ),
          isRegression: totalJoules > base.energy.totalJoules * 1.2,
        }
      : null;

  return {
    generatedAt: now,
    urls,
    energy: {
      totalJoules,
      co2Grams,
      cpuAvgPercent: cpuAvg,
      source: ecoData ? 'eco-ci' : null,
      note:
        'Energy estimates are derived from CPU utilisation on GitHub-hosted runners ' +
        'and reflect CI compute cost, not end-user device energy.',
    },
    scanMetrics: scanData?.results ?? [],
    baselineComparison,
    ecoRaw: ecoData ?? null,
  };
}

/** Extract total joules from the Eco CI JSON, handling multiple field-name variants. */
function extractJoules(data) {
  if (!data) return null;
  // v5 uses energy_value in mJ; earlier versions may use joules or energy_joules.
  if (data.energy_value != null) return data.energy_value / 1000; // mJ → J
  if (data.joules != null) return data.joules;
  if (data.energy_joules != null) return data.energy_joules;
  if (data.energy != null) return data.energy;
  return null;
}

function buildHTML(report) {
  const { generatedAt, urls, energy, scanMetrics, baselineComparison } = report;

  const transferRows = scanMetrics
    .map((r) => {
      const kb =
        r.transferBytes != null ? (r.transferBytes / 1024).toFixed(0) : 'N/A';
      const sec =
        r.durationMs != null ? (r.durationMs / 1000).toFixed(1) : 'N/A';
      const statusIcon = r.status === 'ok' ? '✓' : '✗';
      return `<tr>
        <td><a href="${escHtml(r.url)}" rel="noopener noreferrer">${escHtml(r.url)}</a></td>
        <td>${statusIcon}</td>
        <td>${sec}s</td>
        <td>${kb} KB</td>
        <td>${r.requestCount ?? 'N/A'}</td>
      </tr>`;
    })
    .join('\n');

  const energySection =
    energy.totalJoules != null
      ? `<dl>
          <dt>Total energy (CI runner)</dt><dd>${energy.totalJoules.toFixed(4)} J</dd>
          <dt>Estimated CO₂</dt><dd>${energy.co2Grams != null ? energy.co2Grams.toFixed(6) + ' g' : 'N/A'}</dd>
          ${energy.cpuAvgPercent != null ? `<dt>Average CPU</dt><dd>${energy.cpuAvgPercent.toFixed(1)}%</dd>` : ''}
        </dl>
        <p class="note">${escHtml(energy.note)}</p>`
      : '<p>Energy data not available for this run.</p>';

  const regressionSection = baselineComparison
    ? `<section aria-labelledby="regression-heading">
        <h2 id="regression-heading">Regression Check</h2>
        ${
          baselineComparison.isRegression
            ? `<p class="warning">⚠ Energy regression detected: ` +
              `${baselineComparison.changePercent}% increase over baseline ` +
              `(${baselineComparison.baselineJoules.toFixed(4)} J → ` +
              `${baselineComparison.currentJoules.toFixed(4)} J). ` +
              `Consider auditing JavaScript bundles, images, or third-party scripts added since the last run.</p>`
            : `<p class="ok">✓ No regression: ${baselineComparison.changePercent > 0 ? '+' : ''}` +
              `${baselineComparison.changePercent}% vs baseline.</p>`
        }
      </section>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Energy Audit Report — open-susty-scans</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; color: #222; line-height: 1.5; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; margin-top: 2rem; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 0.4rem 0.6rem; text-align: left; }
    th { background: #f4f4f4; }
    dl { display: grid; grid-template-columns: max-content auto; gap: 0.25rem 1rem; }
    dt { font-weight: bold; }
    .note { color: #555; font-size: 0.9rem; font-style: italic; }
    .warning { color: #c00; font-weight: bold; border-left: 4px solid #c00; padding-left: 0.75rem; }
    .ok { color: #080; border-left: 4px solid #080; padding-left: 0.75rem; }
    a { color: #005ea2; }
    a:focus { outline: 3px solid #005ea2; outline-offset: 2px; }
  </style>
</head>
<body>
  <h1>Energy Audit Report</h1>
  <p>Generated: <time datetime="${escHtml(generatedAt)}">${escHtml(generatedAt)}</time> — ${urls.length} URL(s) scanned</p>

  <section aria-labelledby="energy-heading">
    <h2 id="energy-heading">Energy Estimate (CI Runner)</h2>
    ${energySection}
  </section>

  ${regressionSection}

  <section aria-labelledby="scan-heading">
    <h2 id="scan-heading">Page Scan Metrics</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">URL</th>
          <th scope="col">Status</th>
          <th scope="col">Duration</th>
          <th scope="col">Transfer</th>
          <th scope="col">Requests</th>
        </tr>
      </thead>
      <tbody>
        ${transferRows || '<tr><td colspan="5">No scan data available.</td></tr>'}
      </tbody>
    </table>
  </section>

  <section aria-labelledby="info-heading">
    <h2 id="info-heading">About This Report</h2>
    <p>
      Energy measurement is provided by
      <a href="https://github.com/marketplace/actions/eco-ci-energy-estimation" rel="noopener noreferrer">Eco CI</a>
      by <a href="https://www.green-coding.io/" rel="noopener noreferrer">Green Coding Solutions</a>.
      Page behaviour is simulated with
      <a href="https://playwright.dev/" rel="noopener noreferrer">Playwright</a>
      (navigate → wait for network idle → scroll through → idle pause) to reflect
      realistic rendering and scripting energy cost.
    </p>
    <p>
      For deeper accuracy with controlled infrastructure, consider
      <a href="https://github.com/green-coding-solutions/website-tester" rel="noopener noreferrer">website-tester</a>
      and a <code>usage_scenario.yml</code> with the
      <a href="https://docs.green-coding.io/" rel="noopener noreferrer">Green Metrics Tool</a>.
    </p>
    <p>
      Badge URL (after sending data to metrics.green-coding.io via Eco CI):
      <code>https://api.green-coding.io/v1/ci/badge/get?repo=${encodeURIComponent(process.env.GITHUB_REPOSITORY || '<owner/repo>')}&amp;branch=main</code>
    </p>
  </section>
</body>
</html>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function readJSON(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    console.warn(`Could not read ${path}`);
    return null;
  }
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const val = i + 1 < argv.length ? argv[i + 1] : undefined;
    switch (key) {
      case '--eco-ci':
        out.ecoCI = val;
        i += 1;
        break;
      case '--scan-metrics':
        out.scanMetrics = val;
        i += 1;
        break;
      case '--out-dir':
        out.outDir = val;
        i += 1;
        break;
      case '--baseline':
        out.baseline = val;
        i += 1;
        break;
      case '--update-baseline':
        out.updateBaseline = true;
        break;
      default:
        break;
    }
  }
  return out;
}
