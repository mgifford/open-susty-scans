import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import yaml from "js-yaml";

const SCI_METHODOLOGY_URL = "https://grnsft.org/sci";

function asNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function collectObservationCandidates(value, acc = []) {
  if (Array.isArray(value)) {
    for (const item of value) {
      collectObservationCandidates(item, acc);
    }
    return acc;
  }

  if (!value || typeof value !== "object") {
    return acc;
  }

  if (
    Object.prototype.hasOwnProperty.call(value, "estimated-carbon")
    || Object.prototype.hasOwnProperty.call(value, "operational-carbon")
    || Object.prototype.hasOwnProperty.call(value, "network/data/bytes")
  ) {
    acc.push(value);
  }

  for (const child of Object.values(value)) {
    collectObservationCandidates(child, acc);
  }

  return acc;
}

function pickBestObservation(document) {
  const candidates = collectObservationCandidates(document);
  return candidates.find((candidate) =>
    Object.prototype.hasOwnProperty.call(candidate, "estimated-carbon")
    || Object.prototype.hasOwnProperty.call(candidate, "operational-carbon")
  ) || candidates[0] || null;
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

function readJson(path, fallback) {
  if (!existsSync(path)) {
    return fallback;
  }

  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return fallback;
  }
}

export function parseImpactFrameworkResult(rawYaml, context = {}) {
  const document = yaml.load(rawYaml);
  const observation = pickBestObservation(document);

  if (!observation) {
    throw new Error("Unable to locate an IF output observation with carbon data.");
  }

  const transferBytes = asNumber(observation["network/data/bytes"]);
  const estimatedCarbonGrams = asNumber(observation["estimated-carbon"]);
  const operationalCarbonGrams = asNumber(observation["operational-carbon"]) ?? estimatedCarbonGrams;
  const directSciScore = asNumber(observation.sci);
  const normalizedSciScore = directSciScore ?? operationalCarbonGrams;

  if (operationalCarbonGrams === null) {
    throw new Error("Unable to extract an operational carbon value from IF output.");
  }

  return {
    issueNumber: context.issueNumber ?? null,
    issueTitle: context.issueTitle ?? null,
    issueUrl: context.issueUrl ?? null,
    runId: context.runId ?? null,
    url: observation.url || context.url || null,
    scannedAt: observation.timestamp || context.scannedAt || new Date().toISOString(),
    duration: asNumber(observation.duration) ?? context.duration ?? 1,
    transferBytes,
    transferDisplay: formatBytes(transferBytes),
    operationalCarbonGrams,
    estimatedCarbonGrams,
    operationalCarbonDisplay: `${operationalCarbonGrams.toFixed(6)} gCO2e`,
    normalizedCarbonGrams: operationalCarbonGrams,
    normalizedCarbonDisplay: `${operationalCarbonGrams.toFixed(6)} gCO2e/page load`,
    sciScore: normalizedSciScore,
    sciDisplay: normalizedSciScore !== null ? `${normalizedSciScore.toFixed(6)} gCO2e/page load` : "n/a",
    usedDirectSciValue: directSciScore !== null,
    normalizationNote: directSciScore !== null
      ? "Reported from IF output."
      : "Inferred as operational carbon per page load with embodied carbon treated as 0.",
    greenWebHost: typeof observation["green-web-host"] === "boolean" ? observation["green-web-host"] : null,
    sourceFields: {
      estimatedCarbonField: estimatedCarbonGrams,
      operationalCarbonField: asNumber(observation["operational-carbon"]),
      sciField: directSciScore
    }
  };
}

export function updateImpactDataFeed(feedPath, summary) {
  const existing = readJson(feedPath, { version: 1, items: [] });
  const items = Array.isArray(existing.items) ? existing.items : [];
  const nextItem = {
    issueNumber: summary.issueNumber,
    issueTitle: summary.issueTitle,
    issueUrl: summary.issueUrl,
    runId: summary.runId,
    url: summary.url,
    scannedAt: summary.scannedAt,
    transferBytes: summary.transferBytes,
    operationalCarbonGrams: summary.operationalCarbonGrams,
    sciScore: summary.sciScore,
    normalizedCarbonGrams: summary.normalizedCarbonGrams,
    greenWebHost: summary.greenWebHost,
    normalizationNote: summary.normalizationNote
  };

  const deduped = items.filter((item) => !(item.issueNumber === nextItem.issueNumber && item.runId === nextItem.runId));
  deduped.push(nextItem);
  deduped.sort((a, b) => String(b.scannedAt || "").localeCompare(String(a.scannedAt || "")));

  const payload = {
    version: 1,
    updatedAt: new Date().toISOString(),
    items: deduped
  };

  mkdirSync(dirname(feedPath), { recursive: true });
  writeFileSync(feedPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
  return payload;
}

export function renderImpactFrameworkIssueComment(summary, links = {}) {
  const rows = [
    ["URL", summary.url || "n/a"],
    ["Estimated Carbon", summary.normalizedCarbonDisplay],
    ["SCI Score", summary.sciDisplay],
    ["Transfer Size", summary.transferDisplay],
    ["Green Hosting", summary.greenWebHost === null ? "n/a" : (summary.greenWebHost ? "Yes" : "No")]
  ];

  const details = [
    "## Impact Framework Scan Result",
    "",
    "| Metric | Value |",
    "| --- | --- |",
    ...rows.map(([metric, value]) => `| ${metric} | ${value} |`),
    "",
    `SCI methodology: ${SCI_METHODOLOGY_URL}`,
    `Normalization note: ${summary.normalizationNote}`
  ];

  if (links.manifestUrl || links.resultUrl || links.summaryUrl || links.feedUrl) {
    details.push("");
    details.push("### Reproducibility");
    if (links.manifestUrl) details.push(`- Manifest: ${links.manifestUrl}`);
    if (links.resultUrl) details.push(`- IF output: ${links.resultUrl}`);
    if (links.summaryUrl) details.push(`- Parsed summary: ${links.summaryUrl}`);
    if (links.feedUrl) details.push(`- JSON feed: ${links.feedUrl}`);
  }

  return details.join("\n");
}
