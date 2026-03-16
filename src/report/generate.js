import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { analyzeDeadCodeFromLighthouse, analyzeModularizationFromLighthouse, analyzeRedundancyFromLighthouse, prioritizedFindingsFromLighthouse } from "../wsg/mapping.js";

const WSG_PERFORMANCE_ENERGY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact";
const WSG_THIRD_PARTY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment";
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
    const deadCode = analyzeDeadCodeFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const thirdPartyJs = analyzeThirdPartyJs({
      finalUrl: result.lighthouse.finalUrl,
      greenWeb: result.sustainability.greenWeb
    });
    return {
      url: result.url,
      status: "ok",
      finalUrl: result.lighthouse.finalUrl,
      performanceScore: result.lighthouse.categories.performance,
      bestPracticesScore: result.lighthouse.categories.bestPractices,
      transferBytes: result.sustainability.transferBytes,
      co2Grams: result.sustainability.co2Grams,
      greenWeb: result.sustainability.greenWeb,
      deadCode,
      thirdPartyJs,
      redundancy,
      modularization,
      findings
    };
  });

  const summary = buildSummary(perUrl);
  const budgetGuidance = buildBudgetGuidance(summary);
  const crossPagePatterns = buildCrossPagePatterns(perUrl);
  const thirdPartyJsSummary = buildThirdPartyJsSummary(perUrl);
  const externalProviderRiskSummary = buildExternalProviderRiskSummary(perUrl);

  return {
    version: "0.1.0",
    scanTitle,
    issueNumber,
    generatedAt,
    requestedUrls: urls,
    summary,
    budgetGuidance,
    thirdPartyJsSummary,
    externalProviderRiskSummary,
    crossPagePatterns,
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
  const averageDeadCodeScore = average(ok.map((item) => item.deadCode?.score));
  const highUrgencyDeadCodeCount = ok.filter((item) => item.deadCode?.urgency === "high").length;
  const greenWeb = buildGreenWebSummary(ok);

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
    highUrgencyModularizationCount,
    averageDeadCodeScore,
    highUrgencyDeadCodeCount,
    greenWeb
  };
}

function buildExternalProviderRiskSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const providerMap = new Map();

  for (const entry of okEntries) {
    for (const asset of entry.greenWeb?.externalAssets || []) {
      const status = asset.greenCheck?.status || "unknown";
      const current = providerMap.get(asset.hostname) || {
        hostname: asset.hostname,
        status,
        hostedBy: asset.greenCheck?.hostedBy || null,
        pageCount: 0,
        requestCount: 0,
        transferBytes: 0,
        resourceTypes: new Set(),
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.requestCount += asset.requestCount || 0;
      current.transferBytes += asset.transferBytes || 0;
      current.resourceTypes.add(asset.resourceType);
      providerMap.set(asset.hostname, current);
    }
  }

  const providers = Array.from(providerMap.values())
    .map(({ pages, resourceTypes, ...rest }) => ({
      ...rest,
      resourceTypes: Array.from(resourceTypes).sort(),
      riskScore: externalProviderRiskScore(rest)
    }))
    .sort((a, b) => b.riskScore - a.riskScore || b.pageCount - a.pageCount || b.transferBytes - a.transferBytes);

  return {
    recurringNonGreenProviders: providers.filter((item) => item.status === "not-green" && item.pageCount > 1).slice(0, 10),
    nonGreenProviders: providers.filter((item) => item.status === "not-green").slice(0, 15),
    recurringUnknownProviders: providers.filter((item) => item.status === "unknown" && item.pageCount > 1).slice(0, 10)
  };
}

function externalProviderRiskScore({ status, pageCount, requestCount, transferBytes }) {
  const statusWeight = status === "not-green" ? 35 : status === "unknown" ? 20 : 0;
  const pageWeight = Math.min(35, pageCount * 8);
  const requestWeight = Math.min(15, Math.round((requestCount / 8) * 15));
  const transferWeight = Math.min(15, Math.round((transferBytes / (500 * 1024)) * 15));
  return statusWeight + pageWeight + requestWeight + transferWeight;
}

function analyzeThirdPartyJs({ finalUrl, greenWeb }) {
  const firstPartyHostname = safeHostname(finalUrl);
  const scripts = (greenWeb?.externalAssets || []).filter((asset) => asset.resourceType === "script" && asset.hostname !== firstPartyHostname);
  const transferBytes = scripts.reduce((sum, script) => sum + (script.transferBytes || 0), 0);
  const requestCount = scripts.reduce((sum, script) => sum + (script.requestCount || 0), 0);
  const notGreenCount = scripts.filter((script) => script.greenCheck?.status === "not-green").length;
  const unknownCount = scripts.filter((script) => script.greenCheck?.status === "unknown").length;
  const score = thirdPartyRiskScore({ transferBytes, requestCount, notGreenCount, unknownCount });
  const urgency = thirdPartyUrgency(score);

  return {
    wsgReference: {
      title: "Give third parties the same priority as first parties during assessment",
      url: WSG_THIRD_PARTY_URL
    },
    score,
    urgency,
    providerCount: scripts.length,
    requestCount,
    transferBytes,
    notGreenCount,
    unknownCount,
    scripts,
    recommendations: buildThirdPartyRecommendations({ scripts, requestCount, transferBytes, notGreenCount, unknownCount, urgency })
  };
}

function thirdPartyRiskScore({ transferBytes, requestCount, notGreenCount, unknownCount }) {
  let score = 0;
  score += Math.min(40, Math.round((transferBytes / (400 * 1024)) * 40));
  score += Math.min(25, Math.round((requestCount / 8) * 25));
  score += Math.min(25, notGreenCount * 10);
  score += Math.min(10, unknownCount * 4);
  return Math.min(score, 100);
}

function thirdPartyUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

function buildThirdPartyRecommendations({ scripts, requestCount, transferBytes, notGreenCount, unknownCount, urgency }) {
  const recommendations = [];

  if (scripts.length > 0) {
    recommendations.push({
      title: "Maintain a third-party JavaScript inventory",
      urgency,
      detail: `Track ${scripts.length} third-party script origin(s) and assign an owner plus business justification for each.`
    });
  }

  if (transferBytes >= 150 * 1024 || requestCount >= 4) {
    recommendations.push({
      title: "Reduce third-party script payload and requests",
      urgency: transferBytes >= 300 * 1024 || requestCount >= 8 ? "high" : "medium",
      detail: "Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction."
    });
  }

  if (notGreenCount > 0) {
    recommendations.push({
      title: "Prioritize greener alternatives for third-party providers",
      urgency: "high",
      detail: `${notGreenCount} third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.`
    });
  }

  if (unknownCount > 0) {
    recommendations.push({
      title: "Request sustainability disclosures from unknown providers",
      urgency: "medium",
      detail: `${unknownCount} third-party script origin(s) have unknown hosting status; ask providers for verifiable energy sourcing evidence.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No major third-party JavaScript risk signals",
      urgency: "low",
      detail: "Continue periodic reviews so third-party additions are assessed with the same rigor as first-party code."
    });
  }

  return recommendations.slice(0, 5);
}

function buildThirdPartyJsSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const avgScore = average(okEntries.map((item) => item.thirdPartyJs?.score));
  const highUrgencyPages = okEntries.filter((item) => item.thirdPartyJs?.urgency === "high").length;

  const providerMap = new Map();
  for (const entry of okEntries) {
    for (const script of entry.thirdPartyJs?.scripts || []) {
      const current = providerMap.get(script.hostname) || {
        hostname: script.hostname,
        pageCount: 0,
        transferBytes: 0,
        requestCount: 0,
        status: script.greenCheck?.status || "unknown",
        hostedBy: script.greenCheck?.hostedBy || null,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.transferBytes += script.transferBytes || 0;
      current.requestCount += script.requestCount || 0;
      providerMap.set(script.hostname, current);
    }
  }

  const providers = Array.from(providerMap.values())
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || b.transferBytes - a.transferBytes)
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Give third parties the same priority as first parties during assessment",
      url: WSG_THIRD_PARTY_URL
    },
    averageScore: avgScore,
    highUrgencyPages,
    assessedPages: okEntries.length,
    providers
  };
}

function safeHostname(value) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function buildGreenWebSummary(okEntries) {
  const pageChecks = okEntries.map((item) => item.greenWeb?.page).filter(Boolean);
  const externalChecks = dedupeGreenChecks(
    okEntries
      .flatMap((item) => item.greenWeb?.externalAssets || [])
      .map((item) => item.greenCheck)
      .filter(Boolean)
  );

  return {
    pageHostsChecked: pageChecks.length,
    pageHostsGreen: pageChecks.filter((item) => item.status === "green").length,
    pageHostsNotGreen: pageChecks.filter((item) => item.status === "not-green").length,
    pageHostsUnknown: pageChecks.filter((item) => item.status === "unknown").length,
    externalOriginsChecked: externalChecks.length,
    externalOriginsGreen: externalChecks.filter((item) => item.status === "green").length,
    externalOriginsNotGreen: externalChecks.filter((item) => item.status === "not-green").length,
    externalOriginsUnknown: externalChecks.filter((item) => item.status === "unknown").length
  };
}

function dedupeGreenChecks(checks) {
  const byHostname = new Map();

  for (const check of checks) {
    if (!check?.hostname) {
      continue;
    }

    byHostname.set(check.hostname, check);
  }

  return Array.from(byHostname.values());
}

function buildCrossPagePatterns(perUrl) {
  const ok = perUrl.filter((item) => item.status === "ok");
  const heavyAssetPatterns = collectRecurringHeavyAssets(ok);
  const recurringTargets = collectRecurringModularizationTargets(ok);
  const recurringOrigins = collectRecurringHeavyOrigins(ok);

  return {
    heavyAssetPatterns,
    recurringTargets,
    recurringOrigins,
    designSystemGuidance: buildDesignSystemGuidance({ heavyAssetPatterns, recurringTargets, recurringOrigins })
  };
}

function collectRecurringHeavyAssets(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const request of entry.modularization?.heavyRequests || []) {
      const assetKey = buildAssetKey(request);
      const current = groups.get(assetKey) || {
        key: assetKey,
        label: requestLabel(request),
        resourceType: request.resourceType,
        domain: request.domain,
        pageCount: 0,
        totalTransferBytes: 0,
        exampleUrl: request.url,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalTransferBytes += request.transferSize;
      groups.set(assetKey, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalTransferBytes - a.totalTransferBytes)
    .slice(0, 10);
}

function collectRecurringModularizationTargets(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const candidate of entry.modularization?.onDemandCandidates || []) {
      const current = groups.get(candidate.title) || {
        title: candidate.title,
        urgency: candidate.urgency,
        pageCount: 0,
        totalEstimatedSavingsBytes: 0,
        strategy: candidate.strategy,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalEstimatedSavingsBytes += candidate.estimatedSavingsBytes || 0;
      current.urgency = maxUrgency(current.urgency, candidate.urgency);
      groups.set(candidate.title, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes)
    .slice(0, 10);
}

function collectRecurringHeavyOrigins(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const origin of entry.modularization?.groupedByOrigin || []) {
      const current = groups.get(origin.domain) || {
        domain: origin.domain,
        pageCount: 0,
        totalTransferBytes: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalTransferBytes += origin.transferBytes;
      groups.set(origin.domain, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalTransferBytes - a.totalTransferBytes)
    .slice(0, 8);
}

function buildDesignSystemGuidance({ heavyAssetPatterns, recurringTargets, recurringOrigins }) {
  const guidance = [];
  const recurringImageTarget = recurringTargets.find((target) => target.title.toLowerCase().includes("heavy image asset"));
  const recurringScriptTargets = recurringTargets.filter((target) => target.title.toLowerCase().includes("heavy script asset"));

  if (recurringImageTarget) {
    guidance.push(`This same heavy image pattern appears on ${recurringImageTarget.pageCount} pages. Fix it once in the shared template, CMS block, or design system component to reduce load across the whole site.`);
  } else if (heavyAssetPatterns.length > 0) {
    const top = heavyAssetPatterns[0];
    guidance.push(`This same heavy ${top.resourceType} pattern appears on ${top.pageCount} pages. Fix it once in the shared template, CMS block, or design system component to reduce load across the whole site.`);
  }

  if (recurringScriptTargets.length > 0) {
    guidance.push(`These ${Math.min(recurringScriptTargets.length, 3)} script bundles are recurring modularization targets. Move the fix to the shared bundle or component boundary so every affected page gets lighter at once.`);
  }

  if (recurringTargets.length > 0) {
    const count = Math.min(recurringTargets.length, 3);
    guidance.push(`These ${count} modularization targets recur across multiple pages. Centralize the fix at the component or bundle level instead of treating each page separately.`);
  }

  if (recurringOrigins.length > 0) {
    const origin = recurringOrigins[0];
    guidance.push(`Heavy assets from ${origin.domain} recur across ${origin.pageCount} pages. Review whether that dependency should be deferred, optimized, or loaded conditionally.`);
  }

  if (guidance.length === 0) {
    guidance.push("No strong cross-page modularization patterns were detected in this scan. Focus on page-level opportunities first.");
  }

  return guidance;
}

function buildAssetKey(request) {
  const scope = requestPathScope(request.url);
  return `${request.resourceType}|${request.domain}|${scope}`;
}

function requestLabel(request) {
  const scope = requestPathScope(request.url);
  if (scope === "/") {
    return `${request.resourceType} assets from ${request.domain}`;
  }

  return `${request.resourceType} assets from ${request.domain}${scope}`;
}

function stripSet(item) {
  const { pages, ...rest } = item;
  return rest;
}

function maxUrgency(left, right) {
  const rank = { low: 0, medium: 1, high: 2 };
  return (rank[right] || 0) > (rank[left] || 0) ? right : left;
}

function requestPathScope(url) {
  try {
    const pathname = new URL(url).pathname || "/";
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return "/";
    }

    return `/${segments[0]}`;
  } catch {
    return "/";
  }
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
  lines.push(`- Average dead-code score: ${formatPercentScore(report.summary.averageDeadCodeScore)}`);
  lines.push(`- Pages with high dead-code urgency: ${report.summary.highUrgencyDeadCodeCount}`);
  lines.push("");
  lines.push("## WSG Third-Party JavaScript Assessment");
  lines.push("");
  lines.push(`- WSG reference: ${report.thirdPartyJsSummary.wsgReference.title} (${report.thirdPartyJsSummary.wsgReference.url})`);
  lines.push(`- Average third-party JS risk score: ${formatPercentScore(report.thirdPartyJsSummary.averageScore)}`);
  lines.push(`- Pages with high urgency: ${report.thirdPartyJsSummary.highUrgencyPages}`);
  lines.push(`- Distinct third-party script providers: ${report.thirdPartyJsSummary.providers.length}`);

  if (report.thirdPartyJsSummary.providers.length > 0) {
    lines.push("");
    lines.push("### Top Third-Party Script Providers");
    lines.push("");
    for (const provider of report.thirdPartyJsSummary.providers.slice(0, 8)) {
      lines.push(`- ${provider.hostname}: ${formatGreenStatus(provider.status)}${provider.hostedBy ? ` (${provider.hostedBy})` : ""}; on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)}`);
    }
  }

  lines.push("");
  lines.push("## Cross-Page Hosting Risk (Non-Green Providers)");
  lines.push("");
  lines.push("- Focus: recurring external CSS/JS providers with non-green or unknown hosting status.");

  if (report.externalProviderRiskSummary.recurringNonGreenProviders.length > 0) {
    lines.push("");
    lines.push("### Recurring Non-Green Providers");
    lines.push("");
    for (const provider of report.externalProviderRiskSummary.recurringNonGreenProviders.slice(0, 8)) {
      lines.push(`- ${provider.hostname}${provider.hostedBy ? ` (${provider.hostedBy})` : ""}: on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)} total; types ${provider.resourceTypes.join(", ")}`);
    }
  } else if (report.externalProviderRiskSummary.nonGreenProviders.length > 0) {
    lines.push("- Non-green providers were found, but none recur across multiple pages in this scan.");
  } else {
    lines.push("- No non-green external providers were detected in this scan.");
  }

  if (report.externalProviderRiskSummary.recurringUnknownProviders.length > 0) {
    lines.push("");
    lines.push("### Recurring Unknown-Status Providers");
    lines.push("");
    for (const provider of report.externalProviderRiskSummary.recurringUnknownProviders.slice(0, 6)) {
      lines.push(`- ${provider.hostname}: on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)} total; types ${provider.resourceTypes.join(", ")}`);
    }
  }

  lines.push("");
  lines.push("## Green Hosting Checks");
  lines.push("");
  lines.push("- Source: https://www.thegreenwebfoundation.org/tools/green-web-dataset/");
  lines.push(`- Submitted URL hosts checked: ${report.summary.greenWeb.pageHostsChecked}`);
  lines.push(`- Submitted URL hosts on green energy: ${report.summary.greenWeb.pageHostsGreen}`);
  lines.push(`- Submitted URL hosts not confirmed green: ${report.summary.greenWeb.pageHostsNotGreen}`);
  lines.push(`- Submitted URL hosts unknown: ${report.summary.greenWeb.pageHostsUnknown}`);
  lines.push(`- External CSS/JS origins checked: ${report.summary.greenWeb.externalOriginsChecked}`);
  lines.push(`- External CSS/JS origins on green energy: ${report.summary.greenWeb.externalOriginsGreen}`);
  lines.push(`- External CSS/JS origins not confirmed green: ${report.summary.greenWeb.externalOriginsNotGreen}`);
  lines.push(`- External CSS/JS origins unknown: ${report.summary.greenWeb.externalOriginsUnknown}`);
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
  lines.push("## WSG Remove Unnecessary Code Analysis");
  lines.push("");
  lines.push("- WSG reference: Remove unnecessary code (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code)");
  lines.push("- Dead-code score: 0 (low unnecessary code) to 100 (high unnecessary code)");
  lines.push("- Includes unused CSS/JS, duplicated JS, and HTML complexity heuristics");
  lines.push("");
  lines.push("## WSG Modularization Analysis");
  lines.push("");
  lines.push("- WSG reference: Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)");
  lines.push("- Modularization score: 0 (few obvious on-demand opportunities) to 100 (many heavy initial-load components)");
  lines.push("- This analysis looks for heavy scripts, images, styles, fonts, and media that should be split or loaded on demand.");
  lines.push("");
  lines.push("## Cross-Page Patterns");
  lines.push("");
  for (const message of report.crossPagePatterns.designSystemGuidance) {
    lines.push(`- ${message}`);
  }

  if (report.crossPagePatterns.heavyAssetPatterns.length > 0) {
    lines.push("");
    lines.push("### Recurring Heavy Assets");
    lines.push("");
    for (const pattern of report.crossPagePatterns.heavyAssetPatterns.slice(0, 5)) {
      lines.push(`- ${pattern.label} appears on ${pattern.pageCount} pages (${formatBytes(pattern.totalTransferBytes)} total)`);
    }
  }

  if (report.crossPagePatterns.recurringTargets.length > 0) {
    lines.push("");
    lines.push("### Recurring Modularization Targets");
    lines.push("");
    for (const target of report.crossPagePatterns.recurringTargets.slice(0, 5)) {
      lines.push(`- ${target.title} affects ${target.pageCount} pages${target.totalEstimatedSavingsBytes > 0 ? ` (est. ${formatBytes(target.totalEstimatedSavingsBytes)} aggregate savings)` : ""}`);
    }
  }

  if (report.crossPagePatterns.recurringOrigins.length > 0) {
    lines.push("");
    lines.push("### Recurring Heavy Origins");
    lines.push("");
    for (const origin of report.crossPagePatterns.recurringOrigins.slice(0, 5)) {
      lines.push(`- ${origin.domain} is a recurring heavy source on ${origin.pageCount} pages (${formatBytes(origin.totalTransferBytes)} total)`);
    }
  }

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
    if (entry.greenWeb?.page) {
      lines.push(`- Page host green energy status: ${formatGreenStatus(entry.greenWeb.page.status)}${entry.greenWeb.page.hostedBy ? ` (${entry.greenWeb.page.hostedBy})` : ""}`);
    }
    lines.push(`- Redundancy score: ${formatPercentScore(entry.redundancy?.score)}`);
    lines.push(`- Redundancy urgency: ${(entry.redundancy?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Modularization score: ${formatPercentScore(entry.modularization?.score)}`);
    lines.push(`- Modularization urgency: ${(entry.modularization?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Dead-code score: ${formatPercentScore(entry.deadCode?.score)}`);
    lines.push(`- Dead-code urgency: ${(entry.deadCode?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Third-party JS risk score: ${formatPercentScore(entry.thirdPartyJs?.score)}`);
    lines.push(`- Third-party JS urgency: ${(entry.thirdPartyJs?.urgency || "n/a").toUpperCase()}`);

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

    if ((entry.greenWeb?.externalAssets || []).length > 0) {
      lines.push("- External CSS/JS hosting checks:");
      for (const asset of entry.greenWeb.externalAssets.slice(0, 6)) {
        lines.push(`  - ${asset.resourceType.toUpperCase()} ${asset.hostname}: ${formatGreenStatus(asset.greenCheck?.status)}${asset.greenCheck?.hostedBy ? ` (${asset.greenCheck.hostedBy})` : ""}; ${asset.requestCount} request(s), ${formatBytes(asset.transferBytes)}`);
      }
    }

    if ((entry.thirdPartyJs?.recommendations || []).length > 0) {
      lines.push("- Third-party JS recommendations:");
      for (const recommendation of entry.thirdPartyJs.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.deadCode?.recommendations || []).length > 0) {
      lines.push("- Dead-code recommendations:");
      for (const recommendation of entry.deadCode.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}${recommendation.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(recommendation.estimatedSavingsBytes)} savings)` : ""}`);
        lines.push(`    - ${recommendation.strategy}`);
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
        <li><strong>Green page hosts:</strong> ${report.summary.greenWeb.pageHostsGreen} / ${report.summary.greenWeb.pageHostsChecked}</li>
        <li><strong>Average redundancy score:</strong> ${formatPercentScore(report.summary.averageRedundancyScore)}</li>
        <li><strong>Average modularization score:</strong> ${formatPercentScore(report.summary.averageModularizationScore)}</li>
        <li><strong>Average dead-code score:</strong> ${formatPercentScore(report.summary.averageDeadCodeScore)}</li>
      </ul>
    </header>

    <section class="card" aria-labelledby="green-hosting-heading">
      <h2 id="green-hosting-heading">Green Hosting Checks</h2>
      <p class="muted">Hosting status for the submitted URL hosts and any external script or stylesheet origins, using the Green Web Foundation dataset.</p>
      <ul>
        <li><strong>Dataset:</strong> <a href="https://www.thegreenwebfoundation.org/tools/green-web-dataset/">Green Web Foundation</a></li>
        <li><strong>Submitted URL hosts on green energy:</strong> ${report.summary.greenWeb.pageHostsGreen} / ${report.summary.greenWeb.pageHostsChecked}</li>
        <li><strong>Submitted URL hosts not confirmed green:</strong> ${report.summary.greenWeb.pageHostsNotGreen}</li>
        <li><strong>Submitted URL hosts unknown:</strong> ${report.summary.greenWeb.pageHostsUnknown}</li>
        <li><strong>External CSS/JS origins on green energy:</strong> ${report.summary.greenWeb.externalOriginsGreen} / ${report.summary.greenWeb.externalOriginsChecked}</li>
        <li><strong>External CSS/JS origins not confirmed green:</strong> ${report.summary.greenWeb.externalOriginsNotGreen}</li>
        <li><strong>External CSS/JS origins unknown:</strong> ${report.summary.greenWeb.externalOriginsUnknown}</li>
      </ul>
    </section>

    <section class="card" aria-labelledby="third-party-heading">
      <h2 id="third-party-heading">Third-Party JavaScript Assessment</h2>
      <p class="muted">Evaluates third-party script providers with the same priority as first-party code by combining payload, request volume, and hosting status.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.thirdPartyJsSummary.wsgReference.url)}">${escapeHtml(report.thirdPartyJsSummary.wsgReference.title)}</a></li>
        <li><strong>Average risk score:</strong> ${formatPercentScore(report.thirdPartyJsSummary.averageScore)}</li>
        <li><strong>High urgency pages:</strong> ${report.thirdPartyJsSummary.highUrgencyPages}</li>
        <li><strong>Distinct providers:</strong> ${report.thirdPartyJsSummary.providers.length}</li>
      </ul>
      ${renderThirdPartyProviders(report.thirdPartyJsSummary.providers)}
    </section>

    <section class="card" aria-labelledby="provider-risk-heading">
      <h2 id="provider-risk-heading">Cross-Page Hosting Risk</h2>
      <p class="muted">Recurring external providers with non-green or unknown hosting status across the scanned URL set.</p>
      ${renderExternalProviderRiskSummary(report.externalProviderRiskSummary)}
    </section>

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

    <section class="card" aria-labelledby="dead-code-heading">
      <h2 id="dead-code-heading">WSG Remove Unnecessary Code Overview</h2>
      <p class="muted">Uses Lighthouse signals to estimate unused CSS/JS, duplicated JS, and unnecessary HTML complexity.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code">Remove unnecessary code</a></li>
        <li><strong>Average dead-code score:</strong> ${formatPercentScore(report.summary.averageDeadCodeScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyDeadCodeCount}</li>
      </ul>
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
      <h2 id="cross-page-heading">Cross-Page Patterns</h2>
      <p class="muted">Recurring component and bundle opportunities that can often be fixed once in templates, CMS blocks, or the design system.</p>
      <ul>
        ${report.crossPagePatterns.designSystemGuidance.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}
      </ul>
      ${renderCrossPagePatternBlocks(report.crossPagePatterns)}
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

    <section class="card" aria-labelledby="green-details-heading">
      <h2 id="green-details-heading">Per-Page Green Hosting Details</h2>
      <p class="muted">Checks the submitted page host plus any external script and stylesheet origins discovered by Lighthouse.</p>
      ${renderGreenWebDetails(report.results)}
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

function formatGreenStatus(status) {
  if (status === "green") return "GREEN";
  if (status === "not-green") return "NOT GREEN";
  return "UNKNOWN";
}

function renderCrossPagePatternBlocks(crossPagePatterns) {
  const sections = [];

  if (crossPagePatterns.heavyAssetPatterns.length > 0) {
    sections.push(`
      <h3>Recurring Heavy Assets</h3>
      <ul>
        ${crossPagePatterns.heavyAssetPatterns.slice(0, 5).map((pattern) => `<li>${escapeHtml(pattern.label)} appears on ${pattern.pageCount} pages (${escapeHtml(formatBytes(pattern.totalTransferBytes))} total)</li>`).join("")}
      </ul>
    `);
  }

  if (crossPagePatterns.recurringTargets.length > 0) {
    sections.push(`
      <h3>Recurring Modularization Targets</h3>
      <ul>
        ${crossPagePatterns.recurringTargets.slice(0, 5).map((target) => `<li>${escapeHtml(target.title)} affects ${target.pageCount} pages${target.totalEstimatedSavingsBytes > 0 ? ` (est. ${escapeHtml(formatBytes(target.totalEstimatedSavingsBytes))} aggregate savings)` : ""}</li>`).join("")}
      </ul>
    `);
  }

  if (crossPagePatterns.recurringOrigins.length > 0) {
    sections.push(`
      <h3>Recurring Heavy Origins</h3>
      <ul>
        ${crossPagePatterns.recurringOrigins.slice(0, 5).map((origin) => `<li>${escapeHtml(origin.domain)} is a recurring heavy source on ${origin.pageCount} pages (${escapeHtml(formatBytes(origin.totalTransferBytes))} total)</li>`).join("")}
      </ul>
    `);
  }

  return sections.join("") || "<p>No recurring cross-page patterns detected.</p>";
}

function renderGreenWebDetails(results) {
  const sections = results.map((entry) => {
    if (entry.status !== "ok") {
      return `<section><h3>${escapeHtml(entry.url)}</h3><p>Status unavailable because the page scan failed.</p></section>`;
    }

    const page = entry.greenWeb?.page;
    const externalAssets = entry.greenWeb?.externalAssets || [];

    return `<section>
      <h3>${escapeHtml(entry.url)}</h3>
      <p><strong>Page host:</strong> ${page ? `${escapeHtml(page.hostname)}: ${escapeHtml(formatGreenStatus(page.status))}${page.hostedBy ? ` (${escapeHtml(page.hostedBy)})` : ""}` : "Unknown"}</p>
      ${externalAssets.length > 0 ? `
        <ul>
          ${externalAssets.slice(0, 8).map((asset) => `<li><strong>${escapeHtml(asset.resourceType.toUpperCase())}</strong> ${escapeHtml(asset.hostname)}: ${escapeHtml(formatGreenStatus(asset.greenCheck?.status))}${asset.greenCheck?.hostedBy ? ` (${escapeHtml(asset.greenCheck.hostedBy)})` : ""}, ${asset.requestCount} request(s), ${escapeHtml(formatBytes(asset.transferBytes))}</li>`).join("")}
        </ul>
      ` : "<p>No external stylesheet or script origins were detected.</p>"}
    </section>`;
  });

  return sections.join("") || "<p>No green hosting data available.</p>";
}

function renderThirdPartyProviders(providers) {
  if (providers.length === 0) {
    return "<p>No third-party JavaScript providers were detected in this scan.</p>";
  }

  return `
    <h3>Top Third-Party Script Providers</h3>
    <ul>
      ${providers.slice(0, 10).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>: ${escapeHtml(formatGreenStatus(provider.status))}${provider.hostedBy ? ` (${escapeHtml(provider.hostedBy)})` : ""}; ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}</li>`).join("")}
    </ul>
  `;
}

function renderExternalProviderRiskSummary(summary) {
  const recurringNonGreen = summary?.recurringNonGreenProviders || [];
  const recurringUnknown = summary?.recurringUnknownProviders || [];
  const nonGreenProviders = summary?.nonGreenProviders || [];

  if (recurringNonGreen.length === 0 && recurringUnknown.length === 0 && nonGreenProviders.length === 0) {
    return "<p>No non-green or unknown recurring external providers were detected.</p>";
  }

  const blocks = [];

  if (recurringNonGreen.length > 0) {
    blocks.push(`
      <h3>Recurring Non-Green Providers</h3>
      <ul>
        ${recurringNonGreen.slice(0, 10).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>${provider.hostedBy ? ` (${escapeHtml(provider.hostedBy)})` : ""}: ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}; types ${escapeHtml(provider.resourceTypes.join(", "))}</li>`).join("")}
      </ul>
    `);
  } else if (nonGreenProviders.length > 0) {
    blocks.push("<p>Non-green providers were detected, but none recur across multiple pages in this scan.</p>");
  }

  if (recurringUnknown.length > 0) {
    blocks.push(`
      <h3>Recurring Unknown-Status Providers</h3>
      <ul>
        ${recurringUnknown.slice(0, 8).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>: ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}; types ${escapeHtml(provider.resourceTypes.join(", "))}</li>`).join("")}
      </ul>
    `);
  }

  return blocks.join("");
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
