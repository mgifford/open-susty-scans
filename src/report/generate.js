import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { prioritizedFindingsFromLighthouse } from "../wsg/mapping.js";

export function buildReportBundle({ scanTitle, issueNumber, urls, results, wsgIndex }) {
  const generatedAt = new Date().toISOString();

  const perUrl = results.map((result) => {
    if (result.status !== "ok") {
      return {
        url: result.url,
        status: result.status,
        error: result.error,
        findings: []
      };
    }

    const findings = prioritizedFindingsFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    return {
      url: result.url,
      status: "ok",
      finalUrl: result.lighthouse.finalUrl,
      performanceScore: result.lighthouse.categories.performance,
      bestPracticesScore: result.lighthouse.categories.bestPractices,
      transferBytes: result.sustainability.transferBytes,
      co2Grams: result.sustainability.co2Grams,
      findings
    };
  });

  const summary = buildSummary(perUrl);

  return {
    version: "0.1.0",
    scanTitle,
    issueNumber,
    generatedAt,
    requestedUrls: urls,
    summary,
    results: perUrl
  };
}

function buildSummary(perUrl) {
  const ok = perUrl.filter((item) => item.status === "ok");
  const errors = perUrl.filter((item) => item.status !== "ok");

  const avgPerformance = average(ok.map((item) => item.performanceScore));
  const avgBestPractices = average(ok.map((item) => item.bestPracticesScore));
  const totalBytes = ok.reduce((sum, item) => sum + (item.transferBytes || 0), 0);
  const totalCo2 = ok.reduce((sum, item) => sum + (item.co2Grams || 0), 0);

  return {
    okCount: ok.length,
    errorCount: errors.length,
    averagePerformanceScore: avgPerformance,
    averageBestPracticesScore: avgBestPractices,
    totalTransferBytes: totalBytes,
    totalCo2Grams: totalCo2
  };
}

function average(values) {
  if (values.length === 0) return null;
  const sum = values.reduce((a, b) => a + (typeof b === "number" ? b : 0), 0);
  return sum / values.length;
}

export function renderMarkdown(report) {
  const lines = [];
  lines.push(`# Sustainability Scan Report: ${report.scanTitle}`);
  lines.push("");
  if (report.issueNumber) {
    lines.push(`- Issue number: #${report.issueNumber}`);
  }
  lines.push(`- Generated at: ${report.generatedAt}`);
  lines.push(`- URLs requested: ${report.requestedUrls.length}`);
  lines.push(`- URLs scanned: ${report.summary.okCount}`);
  lines.push(`- Scan errors: ${report.summary.errorCount}`);
  lines.push(`- Average performance score: ${formatScore(report.summary.averagePerformanceScore)}`);
  lines.push(`- Total transfer: ${formatBytes(report.summary.totalTransferBytes)}`);
  lines.push(`- Estimated CO2: ${report.summary.totalCo2Grams.toFixed(4)} g`);
  lines.push("");
  lines.push("## Priority Improvements");
  lines.push("");

  for (const entry of report.results) {
    if (entry.status !== "ok") {
      lines.push(`### ${entry.url}`);
      lines.push(`- Status: error`);
      lines.push(`- Error: ${entry.error}`);
      lines.push("");
      continue;
    }

    lines.push(`### ${entry.url}`);
    lines.push(`- Performance: ${formatScore(entry.performanceScore)}`);
    lines.push(`- Transfer: ${formatBytes(entry.transferBytes)}`);
    lines.push(`- CO2 estimate: ${entry.co2Grams.toFixed(4)} g`);

    if (entry.findings.length === 0) {
      lines.push("- No high-priority issues flagged by current mapping.");
      lines.push("");
      continue;
    }

    for (const finding of entry.findings.slice(0, 6)) {
      lines.push(`- [${finding.impact.toUpperCase()}] ${finding.title}`);
      if (finding.displayValue) {
        lines.push(`  - Current value: ${finding.displayValue}`);
      }
      if (finding.wsg) {
        lines.push(`  - WSG: ${finding.wsg.id} ${finding.wsg.title} (${finding.wsg.url})`);
      }
    }

    lines.push("");
  }

  lines.push("## Copy/Paste Issue Snippets");
  lines.push("");
  for (const entry of report.results) {
    if (entry.status !== "ok") continue;
    for (const finding of entry.findings.slice(0, 3)) {
      lines.push("```md");
      lines.push(finding.issueTemplate);
      lines.push("```\n");
    }
  }

  return lines.join("\n");
}

export function renderHtml(report, markdownText) {
  const rows = report.results
    .map((entry) => {
      if (entry.status !== "ok") {
        return `<tr><td>${escapeHtml(entry.url)}</td><td>Error</td><td colspan=\"4\">${escapeHtml(entry.error || "Unknown error")}</td></tr>`;
      }

      return `<tr>
        <td><a href=\"${escapeAttr(entry.url)}\">${escapeHtml(entry.url)}</a></td>
        <td>${formatScore(entry.performanceScore)}</td>
        <td>${formatBytes(entry.transferBytes)}</td>
        <td>${entry.co2Grams.toFixed(4)} g</td>
        <td>${entry.findings.length}</td>
        <td>${entry.findings.slice(0, 2).map((f) => escapeHtml(f.title)).join("; ") || "None"}</td>
      </tr>`;
    })
    .join("\n");

  const snippets = report.results
    .filter((entry) => entry.status === "ok")
    .flatMap((entry) => entry.findings.slice(0, 3))
    .map((finding, idx) => {
      const snippetId = `snippet-${idx + 1}`;
      return `<section class=\"snippet\">
        <h3>${escapeHtml(finding.title)}</h3>
        <p><strong>Impact:</strong> ${escapeHtml(finding.impact)}</p>
        <textarea id=\"${snippetId}\" readonly aria-label=\"Issue snippet ${idx + 1}\">${escapeHtml(finding.issueTemplate)}</textarea>
        <button type=\"button\" class=\"copy-btn\" data-target=\"${snippetId}\">Copy issue text</button>
      </section>`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sustainability Report - ${escapeHtml(report.scanTitle)}</title>
  <style>
    :root {
      --bg: #f7f8f4;
      --surface: #ffffff;
      --ink: #1d2a2a;
      --muted: #536363;
      --accent: #0b6e4f;
      --warning: #8a4b08;
      --border: #d9e1dd;
    }
    body { margin: 0; font-family: "IBM Plex Sans", "Segoe UI", sans-serif; background: linear-gradient(180deg, #edf5ef, var(--bg)); color: var(--ink); }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 1rem; }
    h1, h2, h3 { line-height: 1.2; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin: 1rem 0; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.55rem; border-bottom: 1px solid var(--border); vertical-align: top; }
    a { color: var(--accent); }
    .snippet textarea { width: 100%; min-height: 180px; font-family: ui-monospace, Menlo, monospace; }
    .copy-btn { margin-top: 0.5rem; padding: 0.45rem 0.7rem; border: 1px solid var(--accent); background: var(--accent); color: #fff; border-radius: 8px; cursor: pointer; }
    .copy-btn:focus, a:focus { outline: 3px solid #ffd166; outline-offset: 2px; }
    .muted { color: var(--muted); }
    @media (max-width: 700px) {
      th:nth-child(3), td:nth-child(3), th:nth-child(6), td:nth-child(6) { display: none; }
      .snippet textarea { min-height: 220px; }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <header class="card">
      <h1>Sustainability Scan Report</h1>
      <p class="muted">Actionable Lighthouse + CO2.js findings mapped to WSG guidance.</p>
      <ul>
        <li><strong>Scan title:</strong> ${escapeHtml(report.scanTitle)}</li>
        <li><strong>Generated:</strong> ${escapeHtml(report.generatedAt)}</li>
        <li><strong>Scanned URLs:</strong> ${report.summary.okCount} / ${report.requestedUrls.length}</li>
        <li><strong>Estimated CO2:</strong> ${report.summary.totalCo2Grams.toFixed(4)} g</li>
      </ul>
    </header>

    <section class="card" aria-labelledby="overview-heading">
      <h2 id="overview-heading">Overview Table</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">URL</th>
            <th scope="col">Performance</th>
            <th scope="col">Transfer</th>
            <th scope="col">CO2</th>
            <th scope="col">Findings</th>
            <th scope="col">Top Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>

    <section class="card" aria-labelledby="snippets-heading">
      <h2 id="snippets-heading">Copy/Paste GitHub Issue Snippets</h2>
      <p class="muted">Use these blocks to open targeted implementation issues in your queue.</p>
      ${snippets || "<p>No issue snippets generated.</p>"}
    </section>

    <section class="card" aria-labelledby="md-heading">
      <h2 id="md-heading">Markdown Version</h2>
      <details>
        <summary>Show report markdown</summary>
        <pre>${escapeHtml(markdownText)}</pre>
      </details>
    </section>
  </main>
  <script>
    for (const button of document.querySelectorAll('.copy-btn')) {
      button.addEventListener('click', async () => {
        const target = document.getElementById(button.dataset.target);
        if (!target) return;
        await navigator.clipboard.writeText(target.value);
        const old = button.textContent;
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = old; }, 1200);
      });
    }
  </script>
</body>
</html>`;
}

export function writeReports(report, outputDir) {
  mkdirSync(outputDir, { recursive: true });
  const jsonPath = join(outputDir, "report.json");
  const mdPath = join(outputDir, "report.md");
  const htmlPath = join(outputDir, "report.html");

  const markdown = renderMarkdown(report);
  const html = renderHtml(report, markdown);

  writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n", "utf8");
  writeFileSync(mdPath, markdown + "\n", "utf8");
  writeFileSync(htmlPath, html, "utf8");

  return { jsonPath, mdPath, htmlPath };
}

function formatScore(value) {
  if (typeof value !== "number") return "n/a";
  return `${Math.round(value * 100)}/100`;
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
