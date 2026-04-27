#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];
    switch (key) {
      case "--feed":
        out.feed = value;
        i += 1;
        break;
      case "--output":
        out.output = value;
        i += 1;
        break;
      case "--repo":
        out.repo = value;
        i += 1;
        break;
      default:
        break;
    }
  }
  return out;
}

function ensureArg(name, value) {
  if (!value) {
    throw new Error(`Missing required argument: ${name}`);
  }
}

function htmlEscape(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeReadJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return { version: 1, updatedAt: null, items: [] };
  }
}

function buildImpactFrameworkHtml(items, baseUrl, updatedAt) {
  const rows = items.map((item) => {
    const issueLabel = item.issueNumber ? `#${item.issueNumber}` : "n/a";
    const runPath = item.issueNumber && item.runId
      ? `${baseUrl}reports/impact-framework/issue-${item.issueNumber}/${item.runId}/`
      : null;
    const summaryUrl = runPath ? `${runPath}summary.json` : null;
    const manifestUrl = runPath ? `${runPath}manifest.yml` : null;
    const resultUrl = runPath ? `${runPath}result.yml` : null;

    return `
      <tr data-date="${htmlEscape(item.scannedAt)}" data-issue="${htmlEscape(String(item.issueNumber || 0))}" data-carbon="${htmlEscape(String(item.normalizedCarbonGrams || 0))}">
        <td>${htmlEscape(issueLabel)}</td>
        <td><a href="${htmlEscape(item.issueUrl || "#")}">${htmlEscape(item.issueTitle || issueLabel)}</a></td>
        <td><a href="${htmlEscape(item.url || "#")}">${htmlEscape(item.url || "n/a")}</a></td>
        <td><time class="scan-date" datetime="${htmlEscape(item.scannedAt || "")}" tabindex="0">${htmlEscape(item.scannedAt || "n/a")}</time></td>
        <td>${typeof item.normalizedCarbonGrams === "number" ? htmlEscape(`${item.normalizedCarbonGrams.toFixed(6)} gCO2e`) : "n/a"}</td>
        <td>${typeof item.sciScore === "number" ? htmlEscape(`${item.sciScore.toFixed(6)} gCO2e`) : "n/a"}</td>
        <td>${typeof item.transferBytes === "number" ? htmlEscape(formatBytes(item.transferBytes)) : "n/a"}</td>
        <td>${item.greenWebHost === null || item.greenWebHost === undefined ? "n/a" : (item.greenWebHost ? "Yes" : "No")}</td>
        <td>${summaryUrl ? `<a href="${htmlEscape(summaryUrl)}">Summary</a> <a href="${htmlEscape(manifestUrl)}">Manifest</a> <a href="${htmlEscape(resultUrl)}">Result</a>` : "n/a"}</td>
      </tr>
    `;
  }).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Open Susty Scans – Impact Framework Reports</title>
  <style>
    :root {
      --bg: #f4f2ec;
      --surface: #ffffff;
      --ink: #1f2d2a;
      --muted: #5b6a66;
      --accent: #0d6b52;
      --accent-dark: #09503d;
      --border: #d4ddd8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: radial-gradient(circle at top right, #e7efe9 0%, var(--bg) 45%);
      color: var(--ink);
      font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
      line-height: 1.6;
      padding: 2rem;
    }
    .container { max-width: 1280px; margin: 0 auto; background: var(--surface); padding: 2rem; border-radius: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
    h1 { color: var(--accent); margin-bottom: 0.5rem; font-size: 2rem; }
    .subtitle, .meta { color: var(--muted); margin-bottom: 1rem; }
    nav.topnav { margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
    nav.topnav a { color: var(--accent); text-decoration: none; margin-right: 1.5rem; font-weight: 600; }
    nav.topnav a:hover { text-decoration: underline; }
    .table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    table { width: 100%; border-collapse: collapse; min-width: 1120px; }
    th, td { text-align: left; padding: 0.6rem 0.55rem; border-bottom: 1px solid var(--border); vertical-align: top; }
    th { background: var(--bg); color: #2a3a36; }
    tbody tr:hover { background: #f0f7f4; }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .sort-btn {
      background: none; border: none; font: inherit; font-weight: 600;
      color: #2a3a36; cursor: pointer; padding: 0;
      display: inline-flex; align-items: center; gap: 0.25rem; white-space: nowrap;
    }
    .sort-btn:hover { color: var(--accent); }
    .sort-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px; }
    .sort-icon { font-size: 0.75rem; opacity: 0.5; }
    .table-info { color: var(--muted); font-size: 0.875rem; margin-top: 0.75rem; }
    .scan-date { position: relative; cursor: default; border-bottom: 1px dotted var(--muted); }
    .scan-date[title]:hover::after,
    .scan-date[title]:focus-visible::after {
      content: attr(title);
      position: absolute;
      bottom: calc(100% + 0.375rem);
      left: 50%;
      transform: translateX(-50%);
      background: var(--ink);
      color: #fff;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
    }
    .scan-date:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px; }
    @media (max-width: 740px) {
      body { padding: 0.75rem; }
      .container { padding: 1rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="topnav" aria-label="Site navigation">
      <a href="${htmlEscape(baseUrl)}">Submit Scan</a>
      <a href="${htmlEscape(baseUrl)}reports/">All Reports</a>
      <a href="${htmlEscape(baseUrl)}reports/impact-framework/">Impact Framework</a>
    </nav>
    <h1>Impact Framework Reports</h1>
    <p class="subtitle">Green Software Foundation Impact Framework runs published from issue-driven scans.</p>
    <p class="meta">Normalized to gCO2e per page load. When direct SCI output is unavailable, the page uses operational carbon as the SCI-compatible value with embodied carbon treated as 0.</p>
    <p class="meta">Last updated: ${htmlEscape(updatedAt || "n/a")}</p>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th scope="col"><button class="sort-btn" data-col="issue">Issue <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col">Issue</th>
            <th scope="col">URL</th>
            <th scope="col"><button class="sort-btn" data-col="date">Date <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col"><button class="sort-btn" data-col="carbon">Carbon <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col">SCI</th>
            <th scope="col">Transfer</th>
            <th scope="col">Green Host</th>
            <th scope="col">Artifacts</th>
          </tr>
        </thead>
        <tbody>
          ${rows || `<tr><td colspan="9">No Impact Framework reports published yet.</td></tr>`}
        </tbody>
      </table>
    </div>
    <p class="table-info" id="table-info" aria-live="polite"></p>
  </div>
  <script>
  (function () {
    document.querySelectorAll('time.scan-date').forEach(function (el) {
      var iso = el.getAttribute('datetime');
      if (!iso) return;
      var d = new Date(iso);
      if (isNaN(d.getTime())) return;
      el.textContent = d.toLocaleDateString();
      el.setAttribute('title', d.toLocaleString());
    });
  }());

  (function () {
    var sortCol = 'date';
    var sortDir = 'desc';
    var tbody = document.querySelector('tbody');
    var tableInfoEl = document.getElementById('table-info');
    if (!tbody) return;

    function getRows() {
      return Array.from(tbody.querySelectorAll('tr'));
    }

    function compareValues(a, b) {
      var valA;
      var valB;
      if (sortCol === 'issue') {
        valA = parseInt(a.dataset.issue, 10) || 0;
        valB = parseInt(b.dataset.issue, 10) || 0;
      } else if (sortCol === 'carbon') {
        valA = parseFloat(a.dataset.carbon || '0');
        valB = parseFloat(b.dataset.carbon || '0');
      } else {
        valA = a.dataset.date || '';
        valB = b.dataset.date || '';
      }
      var cmp = valA < valB ? -1 : valA > valB ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    }

    function sortRows() {
      var rows = getRows();
      rows.sort(compareValues);
      rows.forEach(function (row) { tbody.appendChild(row); });
      if (tableInfoEl) {
        tableInfoEl.textContent = rows.length > 0 ? 'Showing ' + rows.length + ' Impact Framework reports' : '';
      }
    }

    document.querySelectorAll('.sort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var col = this.dataset.col;
        if (col === sortCol) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          sortCol = col;
          sortDir = col === 'date' || col === 'carbon' ? 'desc' : 'asc';
        }
        sortRows();
      });
    });

    sortRows();
  }());
  </script>
</body>
</html>`;
}

function formatBytes(bytes) {
  if (typeof bytes !== "number" || Number.isNaN(bytes)) return "n/a";
  const units = ["B", "KB", "MB", "GB"];
  let current = bytes;
  let idx = 0;
  while (current >= 1024 && idx < units.length - 1) {
    current /= 1024;
    idx += 1;
  }
  return `${current.toFixed(2)} ${units[idx]}`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  ensureArg("--feed", args.feed);
  ensureArg("--output", args.output);
  ensureArg("--repo", args.repo);

  const [owner, repoName] = String(args.repo).split("/");
  if (!owner || !repoName) {
    throw new Error("--repo must be in owner/repo format");
  }

  const feed = safeReadJson(args.feed);
  const items = Array.isArray(feed.items) ? feed.items : [];
  const baseUrl = `https://${owner}.github.io/${repoName}/`;
  const html = buildImpactFrameworkHtml(items, baseUrl, feed.updatedAt);

  mkdirSync(dirname(args.output), { recursive: true });
  writeFileSync(args.output, html, "utf8");

  console.log(JSON.stringify({ ok: true, items: items.length, output: args.output }, null, 2));
}

main();
