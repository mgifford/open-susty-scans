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
      <tr>
        <td>${htmlEscape(row.issueLabel)}</td>
        <td>${htmlEscape(row.scanTitle)}</td>
        <td>${htmlEscape(row.generatedAt)}</td>
        <td>${row.urlsRequested}</td>
        <td>${row.urlsScanned}</td>
        <td>${htmlEscape(row.totalTransfer)}</td>
        <td>${htmlEscape(row.totalCo2)}</td>
        <td>
          <a href="${htmlEscape(row.htmlUrl)}">HTML</a>
          <a href="${htmlEscape(row.mdUrl)}">MD</a>
          <a href="${htmlEscape(row.jsonUrl)}">JSON</a>
        </td>
      </tr>
    `)
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Open Susty Scans Reports</title>
  <style>
    :root {
      --bg: #f4f2ec;
      --surface: #ffffff;
      --ink: #1f2d2a;
      --muted: #5b6a66;
      --accent: #0d6b52;
      --border: #d4ddd8;
    }
    body {
      margin: 0;
      background: radial-gradient(circle at top right, #e7efe9 0%, var(--bg) 45%);
      color: var(--ink);
      font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
    }
    main { max-width: 1120px; margin: 0 auto; padding: 1.2rem; }
    h1 { margin-bottom: 0.2rem; }
    p.meta { color: var(--muted); margin-top: 0; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1rem;
      overflow-x: auto;
    }
    table { width: 100%; border-collapse: collapse; min-width: 820px; }
    th, td { text-align: left; padding: 0.55rem; border-bottom: 1px solid var(--border); }
    th { color: #2a3a36; }
    a { color: var(--accent); margin-right: 0.5rem; }
    .toplinks a { margin-right: 1rem; }
    @media (max-width: 740px) {
      main { padding: 0.8rem; }
    }
  </style>
</head>
<body>
  <main>
    <h1>Open Susty Scans Reports</h1>
    <p class="meta">Published scan reports for this repository. Mirrors the open-scans style list for quick triage.</p>
    <p class="meta toplinks">
      <a href="${htmlEscape(baseUrl)}">Home</a>
    </p>
    <section class="card" aria-label="Report list">
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Scan Title</th>
            <th>Generated</th>
            <th>URLs Requested</th>
            <th>URLs Scanned</th>
            <th>Total Transfer</th>
            <th>Total CO2</th>
            <th>Report Links</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows || `<tr><td colspan="8">No reports published yet.</td></tr>`}
        </tbody>
      </table>
    </section>
  </main>
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
  writeFileSync(join(siteDir, "index.html"), reportsHtml, "utf8");
  mkdirSync(join(siteDir, "reports"), { recursive: true });
  writeFileSync(join(siteDir, "reports", "index.html"), reportsHtml, "utf8");

  const currentHtml = `${projectBase}reports/issue-${issueNumber}/${runId}/report.html`;
  const currentMd = `${projectBase}reports/issue-${issueNumber}/${runId}/report.md`;
  const currentJson = `${projectBase}reports/issue-${issueNumber}/${runId}/report.json`;
  const latestHtml = `${projectBase}reports/issue-${issueNumber}/latest/report.html`;
  const reportsIndex = `${projectBase}reports.html`;

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
