#!/usr/bin/env node
import { mkdirSync, readdirSync, readFileSync, writeFileSync, cpSync, existsSync } from "node:fs";
import { join, relative, basename } from "node:path";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];
    switch (key) {
      case "--site-dir":
        out.siteDir = value;
        i += 1;
        break;
      case "--report-dir":
        out.reportDir = value;
        i += 1;
        break;
      case "--issue-number":
        out.issueNumber = Number(value);
        i += 1;
        break;
      case "--run-id":
        out.runId = value;
        i += 1;
        break;
      case "--repo":
        out.repo = value;
        i += 1;
        break;
      case "--metadata-out":
        out.metadataOut = value;
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

function isoNowCompact() {
  return new Date().toISOString().replace(/[:-]/g, "").replace(/\..+/, "").replace("T", "-");
}

function walkJsonReports(rootDir) {
  if (!existsSync(rootDir)) return [];
  const out = [];

  const stack = [rootDir];
  while (stack.length > 0) {
    const dir = stack.pop();
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (entry.isFile() && entry.name === "report.json") {
        out.push(full);
      }
    }
  }

  return out;
}

function safeReadJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
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

function buildReportsHtml(rows, baseUrl) {
  const tableRows = rows
    .map((row) => `
      <tr data-date="${htmlEscape(row.generatedAt)}" data-issue="${htmlEscape(String(row.issueNumber))}" data-title="${htmlEscape(row.scanTitle)}" data-urls="${htmlEscape(String(row.urlsRequested))}">
        <td>${htmlEscape(row.issueLabel)}</td>
        <td><a href="${htmlEscape(row.htmlUrl)}">${htmlEscape(row.scanTitle)}</a></td>
        <td><time class="scan-date" datetime="${htmlEscape(row.generatedAt)}" tabindex="0">${htmlEscape(row.generatedAt)}</time></td>
        <td>${htmlEscape(String(row.urlsRequested))}</td>
        <td>${htmlEscape(String(row.urlsScanned))}</td>
        <td>${htmlEscape(row.totalTransfer)}</td>
        <td>${htmlEscape(row.totalCo2)}</td>
      </tr>
    `)
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Open Susty Scans – Reports</title>
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
    .container { max-width: 1120px; margin: 0 auto; background: var(--surface); padding: 2rem; border-radius: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
    h1 { color: var(--accent); margin-bottom: 0.5rem; font-size: 2rem; }
    .subtitle { color: var(--muted); margin-bottom: 2rem; }
    nav.topnav { margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
    nav.topnav a { color: var(--accent); text-decoration: none; margin-right: 1.5rem; font-weight: 600; }
    nav.topnav a:hover { text-decoration: underline; }
    .table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    table { width: 100%; border-collapse: collapse; min-width: 820px; }
    th, td { text-align: left; padding: 0.6rem 0.55rem; border-bottom: 1px solid var(--border); }
    th { background: var(--bg); color: #2a3a36; }
    tbody tr:hover { background: #f0f7f4; }
    a { color: var(--accent); text-decoration: none; margin-right: 0.5rem; }
    a:hover { text-decoration: underline; }
    .sort-btn {
      background: none; border: none; font: inherit; font-weight: 600;
      color: #2a3a36; cursor: pointer; padding: 0;
      display: inline-flex; align-items: center; gap: 0.25rem; white-space: nowrap;
    }
    .sort-btn:hover { color: var(--accent); }
    .sort-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px; }
    .sort-icon { font-size: 0.75rem; opacity: 0.5; }
    .sort-btn:hover .sort-icon { opacity: 1; }
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
    .pagination-nav { display: flex; align-items: center; gap: 0.375rem; flex-wrap: wrap; margin-top: 1.25rem; }
    .page-info { color: var(--muted); font-size: 0.875rem; margin-right: 0.5rem; }
    .page-btn {
      padding: 0.375rem 0.75rem; border: 1px solid var(--border); border-radius: 6px;
      background: var(--surface); color: var(--accent); cursor: pointer; font-size: 0.875rem; line-height: 1.4;
    }
    .page-btn:hover { background: #f0f7f4; }
    .page-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .page-btn-active { background: var(--accent); color: #fff; border-color: var(--accent); }
    .page-btn-active:hover { background: var(--accent-dark); }
    .page-ellipsis { color: var(--muted); padding: 0 0.25rem; }
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
    </nav>
    <h1>Sustainability Scan Reports</h1>
    <p class="subtitle">Published scan reports for this repository.</p>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th scope="col"><button class="sort-btn" data-col="issue">Issue <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col"><button class="sort-btn" data-col="title">Scan Title <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col"><button class="sort-btn" data-col="date">Date <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col"><button class="sort-btn" data-col="urls">URLs Requested <span class="sort-icon" aria-hidden="true">↕</span></button></th>
            <th scope="col">URLs Scanned</th>
            <th scope="col">Total Transfer</th>
            <th scope="col">Total CO2</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows || `<tr><td colspan="7">No reports published yet.</td></tr>`}
        </tbody>
      </table>
    </div>
    <p class="table-info" id="table-info" aria-live="polite"></p>
    <div id="pagination"></div>
  </div>
  <script>
  (function () {
    // Format scan dates to user's locale date, with full datetime as tooltip
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
    var PAGE_SIZE = 50;
    var currentPage = 1;
    var sortCol = 'date';
    var sortDir = 'desc';

    var tbody = document.querySelector('tbody');
    var tableEl = document.querySelector('table');
    var paginationEl = document.getElementById('pagination');
    var tableInfoEl = document.getElementById('table-info');

    if (!tbody) return;

    function getRows() {
      return Array.from(tbody.querySelectorAll('tr'));
    }

    function compareValues(a, b) {
      var valA, valB;
      if (sortCol === 'issue' || sortCol === 'urls') {
        valA = parseInt(a.dataset[sortCol], 10) || 0;
        valB = parseInt(b.dataset[sortCol], 10) || 0;
      } else if (sortCol === 'date') {
        valA = a.dataset.date || '';
        valB = b.dataset.date || '';
      } else {
        valA = (a.dataset.title || '').toLowerCase();
        valB = (b.dataset.title || '').toLowerCase();
      }
      var cmp = valA < valB ? -1 : valA > valB ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    }

    function sortRows() {
      var rows = getRows();
      rows.sort(compareValues);
      rows.forEach(function (row) { tbody.appendChild(row); });
    }

    function renderPage() {
      var rows = getRows();
      var total = rows.length;
      var totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;
      var start = (currentPage - 1) * PAGE_SIZE;
      var end = start + PAGE_SIZE;

      rows.forEach(function (row, i) {
        row.style.display = (i >= start && i < end) ? '' : 'none';
      });

      if (tableInfoEl) {
        var showing = Math.min(end, total);
        tableInfoEl.textContent = total > 0
          ? 'Showing ' + (start + 1) + ' to ' + showing + ' of ' + total + ' reports'
          : '';
      }

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      if (!paginationEl) return;
      if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
      }

      var html = '<nav class="pagination-nav" aria-label="Report pages">';
      html += '<span class="page-info">Page ' + currentPage + ' of ' + totalPages + '</span>';

      if (currentPage > 1) {
        html += '<button class="page-btn" data-page="' + (currentPage - 1) + '">Previous</button>';
      }

      var pages = [];
      for (var i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
          pages.push(i);
        }
      }

      var prev = 0;
      pages.forEach(function (page) {
        if (prev && page - prev > 1) {
          html += '<span class="page-ellipsis" aria-hidden="true">\u2026</span>';
        }
        var isActive = page === currentPage;
        html += '<button class="page-btn' + (isActive ? ' page-btn-active' : '') + '" data-page="' + page + '"' +
          (isActive ? ' aria-current="page"' : '') + '>' + page + '</button>';
        prev = page;
      });

      if (currentPage < totalPages) {
        html += '<button class="page-btn" data-page="' + (currentPage + 1) + '">Next</button>';
      }

      html += '</nav>';
      paginationEl.innerHTML = html;

      paginationEl.querySelectorAll('.page-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          currentPage = parseInt(this.dataset.page, 10);
          renderPage();
          if (tableEl) {
            var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            tableEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
          }
        });
      });
    }

    function updateSortIcons() {
      document.querySelectorAll('.sort-btn').forEach(function (btn) {
        var icon = btn.querySelector('.sort-icon');
        var th = btn.closest('th');
        if (btn.dataset.col === sortCol) {
          icon.textContent = sortDir === 'asc' ? '\u2191' : '\u2193';
          if (th) th.setAttribute('aria-sort', sortDir === 'asc' ? 'ascending' : 'descending');
        } else {
          icon.textContent = '\u2195';
          if (th) th.removeAttribute('aria-sort');
        }
      });
    }

    document.querySelectorAll('.sort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var col = this.dataset.col;
        if (col === sortCol) {
          sortDir = sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          sortCol = col;
          sortDir = col === 'date' ? 'desc' : 'asc';
        }
        currentPage = 1;
        sortRows();
        updateSortIcons();
        renderPage();
      });
    });

    updateSortIcons();
    renderPage();
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
  ensureArg("--site-dir", args.siteDir);
  ensureArg("--report-dir", args.reportDir);
  ensureArg("--issue-number", args.issueNumber);
  ensureArg("--repo", args.repo);
  ensureArg("--metadata-out", args.metadataOut);

  const [owner, repoName] = String(args.repo).split("/");
  if (!owner || !repoName) {
    throw new Error("--repo must be in owner/repo format");
  }

  const runId = args.runId || isoNowCompact();
  const siteDir = args.siteDir;
  const reportDir = args.reportDir;
  const issueNumber = Number(args.issueNumber);

  const issueBaseDir = join(siteDir, "reports", `issue-${issueNumber}`);
  const versionDir = join(issueBaseDir, runId);
  const latestDir = join(issueBaseDir, "latest");

  mkdirSync(versionDir, { recursive: true });
  mkdirSync(latestDir, { recursive: true });

  cpSync(reportDir, versionDir, { recursive: true, force: true });
  cpSync(reportDir, latestDir, { recursive: true, force: true });

  writeFileSync(join(siteDir, ".nojekyll"), "\n", "utf8");

  const projectBase = `https://${owner}.github.io/${repoName}/`;
  const reportJsons = walkJsonReports(join(siteDir, "reports"));

  const rows = [];
  for (const reportJsonPath of reportJsons) {
    const rel = relative(siteDir, reportJsonPath).replaceAll("\\", "/");
    if (rel.includes("/latest/")) {
      continue;
    }

    const report = safeReadJson(reportJsonPath);
    if (!report) continue;

    const reportDirRel = rel.replace(/\/report\.json$/, "");
    const htmlRel = `${reportDirRel}/report.html`;
    const mdRel = `${reportDirRel}/report.md`;
    const issueLabel = report.issueNumber ? `#${report.issueNumber}` : "n/a";

    rows.push({
      issueLabel,
      issueNumber: report.issueNumber || 0,
      scanTitle: report.scanTitle || "Sustainability Scan",
      generatedAt: report.generatedAt || "n/a",
      urlsRequested: report.requestedUrls?.length || 0,
      urlsScanned: report.summary?.okCount || 0,
      totalTransfer: formatBytes(report.summary?.totalTransferBytes),
      totalCo2: typeof report.summary?.totalCo2Grams === "number" ? `${report.summary.totalCo2Grams.toFixed(4)} g` : "n/a",
      htmlUrl: `${projectBase}${htmlRel}`,
      mdUrl: `${projectBase}${mdRel}`,
      jsonUrl: `${projectBase}${rel}`
    });
  }

  rows.sort((a, b) => String(b.generatedAt).localeCompare(String(a.generatedAt)));

  const reportsHtml = buildReportsHtml(rows, projectBase);
  writeFileSync(join(siteDir, "reports.html"), reportsHtml, "utf8");
  mkdirSync(join(siteDir, "reports"), { recursive: true });
  writeFileSync(join(siteDir, "reports", "index.html"), reportsHtml, "utf8");

  const currentHtml = `${projectBase}reports/issue-${issueNumber}/${runId}/report.html`;
  const currentMd = `${projectBase}reports/issue-${issueNumber}/${runId}/report.md`;
  const currentJson = `${projectBase}reports/issue-${issueNumber}/${runId}/report.json`;
  const latestHtml = `${projectBase}reports/issue-${issueNumber}/latest/report.html`;
  const reportsIndex = `${projectBase}reports/`;

  const currentReportJson = safeReadJson(join(reportDir, "report.json")) || {};
  const metadata = {
    issueNumber,
    runId,
    links: {
      reportsIndex,
      currentHtml,
      currentMd,
      currentJson,
      latestHtml
    },
    summary: {
      scanTitle: currentReportJson.scanTitle || "Sustainability Scan",
      generatedAt: currentReportJson.generatedAt || new Date().toISOString(),
      urlsRequested: currentReportJson.requestedUrls?.length || 0,
      urlsScanned: currentReportJson.summary?.okCount || 0,
      scanErrors: currentReportJson.summary?.errorCount || 0,
      totalTransferBytes: currentReportJson.summary?.totalTransferBytes || 0,
      totalCo2Grams: currentReportJson.summary?.totalCo2Grams || 0
    }
  };

  writeFileSync(args.metadataOut, JSON.stringify(metadata, null, 2) + "\n", "utf8");
  console.log(JSON.stringify({ ok: true, metadata }, null, 2));
}

main();
