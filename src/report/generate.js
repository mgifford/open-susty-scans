import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { analyzeModularizationFromLighthouse, analyzeRedundancyFromLighthouse, prioritizedFindingsFromLighthouse } from "../wsg/mapping.js";

const WSG_PERFORMANCE_ENERGY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact";
const SWD_RATING_SOURCE_URL = "https://sustainablewebdesign.org/digital-carbon-ratings/";

const SWD_RATINGS = [
  { rating: "A+", maxTransferBytes: kbToBytes(272.51), maxCo2Grams: 0.040 },
  { rating: "A", maxTransferBytes: kbToBytes(531.15), maxCo2Grams: 0.079 },
  { rating: "B", maxTransferBytes: kbToBytes(975.85), maxCo2Grams: 0.145 },
  { rating: "C", maxTransferBytes: kbToBytes(1410.39), maxCo2Grams: 0.209 },
  { rating: "D", maxTransferBytes: kbToBytes(1875.01), maxCo2Grams: 0.278 },
  { rating: "E", maxTransferBytes: kbToBytes(2419.56), maxCo2Grams: 0.359 },
  { rating: "F", maxTransferBytes: Number.POSITIVE_INFINITY, maxCo2Grams: Number.POSITIVE_INFINITY }
];

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
    const redundancy = analyzeRedundancyFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const modularization = analyzeModularizationFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    return {
      url: result.url,
      status: "ok",
      finalUrl: result.lighthouse.finalUrl,
      performanceScore: result.lighthouse.categories.performance,
      bestPracticesScore: result.lighthouse.categories.bestPractices,
      transferBytes: result.sustainability.transferBytes,
      co2Grams: result.sustainability.co2Grams,
      redundancy,
      modularization,
      findings
    };
  });

  const summary = buildSummary(perUrl);
  const budgetGuidance = buildBudgetGuidance(summary);

  return {
    version: "0.1.0",
    scanTitle,
    issueNumber,
    generatedAt,
    requestedUrls: urls,
    summary,
    budgetGuidance,
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
  const averageTransferBytes = ok.length > 0 ? totalBytes / ok.length : null;
  const averageCo2GramsPerPage = ok.length > 0 ? totalCo2 / ok.length : null;
  const averageRedundancyScore = average(ok.map((item) => item.redundancy?.score));
  const highUrgencyRedundancyCount = ok.filter((item) => item.redundancy?.urgency === "high").length;
  const averageModularizationScore = average(ok.map((item) => item.modularization?.score));
  const highUrgencyModularizationCount = ok.filter((item) => item.modularization?.urgency === "high").length;

  return {
    okCount: ok.length,
    errorCount: errors.length,
    averagePerformanceScore: avgPerformance,
    averageBestPracticesScore: avgBestPractices,
    totalTransferBytes: totalBytes,
    totalCo2Grams: totalCo2,
    averageTransferBytes,
    averageCo2GramsPerPage,
    averageRedundancyScore,
    highUrgencyRedundancyCount,
    averageModularizationScore,
    highUrgencyModularizationCount
  };
}

function buildBudgetGuidance(summary) {
  const avgBytes = summary.averageTransferBytes;
  const avgCo2 = summary.averageCo2GramsPerPage;
  const currentTransferRating = typeof avgBytes === "number" ? ratingForTransferBytes(avgBytes) : null;
  const currentCo2Rating = typeof avgCo2 === "number" ? ratingForCo2(avgCo2) : null;
  const target = SWD_RATINGS.find((entry) => entry.rating === "B");

  return {
    wsgReference: {
      id: "3.1",
      title: "Set goals based on performance and energy impact",
      url: WSG_PERFORMANCE_ENERGY_URL
    },
    benchmarkReference: {
      name: "Sustainable Web Design Digital Carbon Ratings",
      url: SWD_RATING_SOURCE_URL
    },
    current: {
      averageTransferBytes: avgBytes,
      averageCo2GramsPerPage: avgCo2,
      transferRating: currentTransferRating,
      co2Rating: currentCo2Rating
    },
    recommendedBudget: {
      targetRating: "B",
      maxTransferBytesPerPage: target.maxTransferBytes,
      maxCo2GramsPerPage: target.maxCo2Grams
    },
    reductionsNeeded: {
      transferBytesPerPage: computeReduction(avgBytes, target.maxTransferBytes),
      co2GramsPerPage: computeReduction(avgCo2, target.maxCo2Grams)
    },
    stretchBudget: {
      targetRating: "A",
      maxTransferBytesPerPage: SWD_RATINGS.find((entry) => entry.rating === "A").maxTransferBytes,
      maxCo2GramsPerPage: SWD_RATINGS.find((entry) => entry.rating === "A").maxCo2Grams
    }
  };
}

function computeReduction(currentValue, targetValue) {
  if (typeof currentValue !== "number") {
    return { absolute: null, percent: null, needsReduction: false };
  }
  const absolute = currentValue - targetValue;
  const needsReduction = absolute > 0;
  const percent = needsReduction ? (absolute / currentValue) * 100 : 0;
  return { absolute: needsReduction ? absolute : 0, percent, needsReduction };
}

function ratingForTransferBytes(bytes) {
  for (const item of SWD_RATINGS) {
    if (bytes <= item.maxTransferBytes) {
      return item.rating;
    }
  }
  return "F";
}

function ratingForCo2(co2Grams) {
  for (const item of SWD_RATINGS) {
    if (co2Grams <= item.maxCo2Grams) {
      return item.rating;
    }
  }
  return "F";
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
  lines.push(`- Average transfer per page: ${formatBytes(report.summary.averageTransferBytes)}`);
  lines.push(`- Average CO2 per page: ${formatGrams(report.summary.averageCo2GramsPerPage)}`);
  lines.push(`- Average redundancy score: ${formatPercentScore(report.summary.averageRedundancyScore)}`);
  lines.push(`- Pages with high redundancy urgency: ${report.summary.highUrgencyRedundancyCount}`);
  lines.push(`- Average modularization score: ${formatPercentScore(report.summary.averageModularizationScore)}`);
  lines.push(`- Pages with high modularization urgency: ${report.summary.highUrgencyModularizationCount}`);
  lines.push("");
  lines.push("## WSG SC 3.1 Budget Guidance");
  lines.push("");
  lines.push(`- WSG reference: ${report.budgetGuidance.wsgReference.title} (${report.budgetGuidance.wsgReference.url})`);
  lines.push(`- Sustainable Web Design benchmark: ${report.budgetGuidance.benchmarkReference.url}`);
  lines.push(`- Current transfer rating: ${report.budgetGuidance.current.transferRating || "n/a"}`);
  lines.push(`- Current CO2 rating: ${report.budgetGuidance.current.co2Rating || "n/a"}`);
  lines.push(`- Recommended budget target: rating ${report.budgetGuidance.recommendedBudget.targetRating}`);
  lines.push(`- Budget max transfer/page: ${formatBytes(report.budgetGuidance.recommendedBudget.maxTransferBytesPerPage)}`);
  lines.push(`- Budget max CO2/page: ${formatGrams(report.budgetGuidance.recommendedBudget.maxCo2GramsPerPage)}`);

  if (report.budgetGuidance.reductionsNeeded.transferBytesPerPage.needsReduction) {
    lines.push(`- Transfer reduction needed: ${formatBytes(report.budgetGuidance.reductionsNeeded.transferBytesPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.percent.toFixed(1)}%)`);
  } else {
    lines.push("- Transfer reduction needed: none (already within target budget)");
  }

  if (report.budgetGuidance.reductionsNeeded.co2GramsPerPage.needsReduction) {
    lines.push(`- CO2 reduction needed: ${formatGrams(report.budgetGuidance.reductionsNeeded.co2GramsPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.percent.toFixed(1)}%)`);
  } else {
    lines.push("- CO2 reduction needed: none (already within target budget)");
  }

  lines.push(`- Stretch budget (rating ${report.budgetGuidance.stretchBudget.targetRating}): ${formatBytes(report.budgetGuidance.stretchBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.stretchBudget.maxCo2GramsPerPage)} per page`);
  lines.push("");
  lines.push("## WSG SC 3.2 Redundancy Analysis");
  lines.push("");
  lines.push("- WSG reference: Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)");
  lines.push("- Redundancy score: 0 (low redundancy) to 100 (high redundancy)");
  lines.push("- Urgency levels: low, medium, high");
  lines.push("");
  lines.push("## WSG Modularization Analysis");
  lines.push("");
  lines.push("- WSG reference: Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)");
  lines.push("- Modularization score: 0 (few obvious on-demand opportunities) to 100 (many heavy initial-load components)");
  lines.push("- This analysis looks for heavy scripts, images, styles, fonts, and media that should be split or loaded on demand.");
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
    lines.push(`- Redundancy score: ${formatPercentScore(entry.redundancy?.score)}`);
    lines.push(`- Redundancy urgency: ${(entry.redundancy?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Modularization score: ${formatPercentScore(entry.modularization?.score)}`);
    lines.push(`- Modularization urgency: ${(entry.modularization?.urgency || "n/a").toUpperCase()}`);

    if (entry.redundancy?.estimatedRedundantBytes > 0) {
      lines.push(`- Estimated redundant transfer: ${formatBytes(entry.redundancy.estimatedRedundantBytes)} (${(entry.redundancy.redundancyRatio * 100).toFixed(1)}% of transfer)`);
    }

    if (entry.redundancy?.recommendations?.length > 0) {
      lines.push("- Redundancy recommendations:");
      for (const recommendation of entry.redundancy.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}${recommendation.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(recommendation.estimatedSavingsBytes)} savings)` : ""}`);
      }
    }

    if (entry.modularization?.heavyRequestCount > 0) {
      lines.push(`- Heavy initial-load requests: ${entry.modularization.heavyRequestCount} (${formatBytes(entry.modularization.heavyBytes)} total)`);
    }

    if (entry.modularization?.onDemandCandidates?.length > 0) {
      lines.push("- On-demand modularization candidates:");
      for (const candidate of entry.modularization.onDemandCandidates.slice(0, 4)) {
        lines.push(`  - [${candidate.urgency.toUpperCase()}] ${candidate.title}${candidate.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(candidate.estimatedSavingsBytes)})` : ""}`);
        lines.push(`    - ${candidate.strategy}`);
      }
    }

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
        <li><strong>Average redundancy score:</strong> ${formatPercentScore(report.summary.averageRedundancyScore)}</li>
        <li><strong>Average modularization score:</strong> ${formatPercentScore(report.summary.averageModularizationScore)}</li>
      </ul>
    </header>

    <section class="card" aria-labelledby="modularization-heading">
      <h2 id="modularization-heading">WSG Modularization Overview</h2>
      <p class="muted">Finds bandwidth-heavy components that should be split, deferred, or loaded only on demand.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components">Modularize bandwidth-heavy components</a></li>
        <li><strong>Average modularization score:</strong> ${formatPercentScore(report.summary.averageModularizationScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyModularizationCount}</li>
      </ul>
      <p>Use this to identify candidates for route-level splitting, interaction-triggered imports, lazy media loading, and deferring heavy third-party or feature bundles.</p>
    </section>

    <section class="card" aria-labelledby="redundancy-heading">
      <h2 id="redundancy-heading">WSG 3.2 Redundancy Overview</h2>
      <p class="muted">Checks unnecessary or redundant information using Lighthouse waste signals.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information">3.2 Remove unnecessary or redundant information</a></li>
        <li><strong>Average redundancy score:</strong> ${formatPercentScore(report.summary.averageRedundancyScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyRedundancyCount}</li>
      </ul>
      <p>Urgency is based on estimated redundant transfer and failed redundancy-related audits, helping teams prioritize fixes that reduce unnecessary bytes first.</p>
    </section>

    <section class="card" aria-labelledby="budget-heading">
      <h2 id="budget-heading">WSG 3.1 Performance and Energy Budget</h2>
      <p class="muted">Benchmark comparison using Sustainable Web Design Digital Carbon Ratings.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.budgetGuidance.wsgReference.url)}">${escapeHtml(report.budgetGuidance.wsgReference.id)} ${escapeHtml(report.budgetGuidance.wsgReference.title)}</a></li>
        <li><strong>Benchmark source:</strong> <a href="${escapeAttr(report.budgetGuidance.benchmarkReference.url)}">Sustainable Web Design ratings</a></li>
        <li><strong>Current average transfer/page:</strong> ${formatBytes(report.summary.averageTransferBytes)} (rating ${escapeHtml(report.budgetGuidance.current.transferRating || "n/a")})</li>
        <li><strong>Current average CO2/page:</strong> ${formatGrams(report.summary.averageCo2GramsPerPage)} (rating ${escapeHtml(report.budgetGuidance.current.co2Rating || "n/a")})</li>
        <li><strong>Recommended budget target:</strong> Rating ${escapeHtml(report.budgetGuidance.recommendedBudget.targetRating)} = max ${formatBytes(report.budgetGuidance.recommendedBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.recommendedBudget.maxCo2GramsPerPage)} per page</li>
      </ul>
      <p><strong>Reduction needed:</strong>
      Transfer ${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.needsReduction ? `${formatBytes(report.budgetGuidance.reductionsNeeded.transferBytesPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.percent.toFixed(1)}%)` : "none"},
      CO2 ${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.needsReduction ? `${formatGrams(report.budgetGuidance.reductionsNeeded.co2GramsPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.percent.toFixed(1)}%)` : "none"}.
      </p>
      <p><strong>Stretch target:</strong> Rating ${escapeHtml(report.budgetGuidance.stretchBudget.targetRating)} = ${formatBytes(report.budgetGuidance.stretchBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.stretchBudget.maxCo2GramsPerPage)} per page.</p>
    </section>

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

function formatGrams(grams) {
  if (typeof grams !== "number" || Number.isNaN(grams)) return "n/a";
  return `${grams.toFixed(4)} g`;
}

function formatPercentScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return "n/a";
  return `${Math.round(score)}/100`;
}

function kbToBytes(kb) {
  return kb * 1024;
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
