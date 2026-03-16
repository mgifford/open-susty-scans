const AUDIT_TO_WSG = {
  "largest-contentful-paint": "https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact",
  "speed-index": "https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact",
  "unused-javascript": "https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance",
  "unused-css-rules": "https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information",
  "modern-image-formats": "https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use",
  "uses-optimized-images": "https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use",
  "offscreen-images": "https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components",
  "render-blocking-resources": "https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service",
  "uses-text-compression": "https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information",
  "uses-rel-preconnect": "https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service",
  "server-response-time": "https://www.w3.org/TR/web-sustainability-guidelines/#ensure-infrastructure-fits-project-requirements",
  "total-byte-weight": "https://www.w3.org/TR/web-sustainability-guidelines/#define-performance-and-environmental-budgets",
  "dom-size": "https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information"
};

const REDUNDANCY_AUDITS = [
  "unused-css-rules",
  "unused-javascript",
  "duplicated-javascript"
];

const MODULARIZATION_WSG_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components";
const DEAD_CODE_WSG_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code";
const NON_CRITICAL_WSG_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#defer-the-loading-of-non-critical-resources";

const REDUNDANCY_RELATED_AUDITS = [
  ...REDUNDANCY_AUDITS,
  "dom-size",
  "uses-text-compression",
  "unminified-css",
  "unminified-javascript"
];

export function mapAuditToWsg(auditId) {
  return AUDIT_TO_WSG[auditId] || null;
}

export function prioritizedFindingsFromLighthouse(lhr, wsgIndex) {
  const relevantAuditIds = Object.keys(AUDIT_TO_WSG);
  const findings = [];

  for (const auditId of relevantAuditIds) {
    const audit = lhr.audits?.[auditId];
    if (!audit) {
      continue;
    }

    const score = typeof audit.score === "number" ? audit.score : null;
    if (score !== null && score >= 0.9) {
      continue;
    }

    const impact = score === null ? "investigate" : score < 0.5 ? "high" : "medium";
    const wsgUrl = mapAuditToWsg(auditId);
    const wsg = wsgUrl ? wsgIndex.get(wsgUrl) : null;

    findings.push({
      auditId,
      title: audit.title,
      description: audit.description || "",
      score,
      displayValue: audit.displayValue || "",
      impact,
      wsg,
      issueTemplate: buildIssueTemplate(auditId, audit, wsg)
    });
  }

  findings.sort((a, b) => severityRank(a.impact) - severityRank(b.impact));
  return findings;
}

export function analyzeRedundancyFromLighthouse(lhr, wsgIndex) {
  const audits = lhr.audits || {};
  const transferBytes = extractTransferBytes(audits);

  const wasteByAudit = REDUNDANCY_AUDITS.map((auditId) => {
    const audit = audits[auditId];
    const savingsBytes = getSavingsBytes(audit);
    return {
      auditId,
      title: audit?.title || auditId,
      savingsBytes,
      displayValue: audit?.displayValue || ""
    };
  }).filter((entry) => entry.savingsBytes > 0);

  const totalRedundantBytes = wasteByAudit.reduce((sum, item) => sum + item.savingsBytes, 0);
  const redundancyRatio = transferBytes > 0 ? Math.min(totalRedundantBytes / transferBytes, 1) : 0;

  const domPenalty = scorePenalty(audits["dom-size"]);
  const compressionPenalty = scorePenalty(audits["uses-text-compression"]);
  const minificationPenalty = average([
    scorePenalty(audits["unminified-css"]),
    scorePenalty(audits["unminified-javascript"])
  ]);

  const weighted = (0.55 * redundancyRatio) + (0.2 * domPenalty) + (0.15 * compressionPenalty) + (0.1 * minificationPenalty);
  const score = Math.round(weighted * 100);
  const urgency = redundancyUrgency(score, totalRedundantBytes);
  const wsgUrl = "https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information";
  const wsg = wsgIndex.get(wsgUrl) || null;

  return {
    score,
    urgency,
    transferBytes,
    estimatedRedundantBytes: totalRedundantBytes,
    redundancyRatio,
    relatedAuditIds: REDUNDANCY_RELATED_AUDITS.filter((auditId) => audits[auditId]),
    wasteByAudit,
    recommendations: buildRedundancyRecommendations(wasteByAudit, audits, wsg),
    wsg
  };
}

export function analyzeModularizationFromLighthouse(lhr, wsgIndex) {
  const audits = lhr.audits || {};
  const networkItems = audits["network-requests"]?.details?.items || [];
  const totalTransferBytes = extractTransferBytes(audits);
  const heavyRequests = networkItems
    .map((item) => normalizeRequest(item))
    .filter((item) => item.transferSize >= heavyThresholdForType(item.resourceType))
    .sort((a, b) => b.transferSize - a.transferSize);

  const groupedByType = groupHeavyRequestsByType(heavyRequests);
  const groupedByOrigin = groupHeavyRequestsByOrigin(heavyRequests);
  const offscreenImageSavings = getSavingsBytes(audits["offscreen-images"]);
  const unusedJavascriptSavings = getSavingsBytes(audits["unused-javascript"]);
  const renderBlockingSavings = getSavingsBytes(audits["render-blocking-resources"]);

  const heavyBytes = heavyRequests.reduce((sum, item) => sum + item.transferSize, 0);
  const heavyRatio = totalTransferBytes > 0 ? Math.min(heavyBytes / totalTransferBytes, 1) : 0;
  const lazyMediaRatio = totalTransferBytes > 0 ? Math.min(offscreenImageSavings / totalTransferBytes, 1) : 0;
  const codeSplitRatio = totalTransferBytes > 0 ? Math.min(unusedJavascriptSavings / totalTransferBytes, 1) : 0;
  const renderBlockingRatio = totalTransferBytes > 0 ? Math.min(renderBlockingSavings / totalTransferBytes, 1) : 0;
  const requestDensityPenalty = Math.min(heavyRequests.length / 10, 1);

  const weighted = (0.4 * heavyRatio) + (0.2 * lazyMediaRatio) + (0.2 * codeSplitRatio) + (0.1 * renderBlockingRatio) + (0.1 * requestDensityPenalty);
  const score = Math.round(weighted * 100);
  const urgency = modularizationUrgency(score, heavyBytes, heavyRequests.length);
  const wsg = wsgIndex.get(MODULARIZATION_WSG_URL) || null;

  return {
    score,
    urgency,
    totalTransferBytes,
    heavyRequestCount: heavyRequests.length,
    heavyBytes,
    heavyRatio,
    heavyRequests: heavyRequests.slice(0, 20),
    groupedByType,
    groupedByOrigin,
    onDemandCandidates: buildModularizationCandidates({
      heavyRequests,
      offscreenImageSavings,
      unusedJavascriptSavings,
      renderBlockingSavings,
      wsg
    }),
    wsg
  };
}

export function analyzeDeadCodeFromLighthouse(lhr, wsgIndex) {
  const audits = lhr.audits || {};
  const transferBytes = extractTransferBytes(audits);

  const cssUnusedBytes = getSavingsBytes(audits["unused-css-rules"]);
  const jsUnusedBytes = getSavingsBytes(audits["unused-javascript"]);
  const duplicatedJsBytes = getSavingsBytes(audits["duplicated-javascript"]);
  const domStats = extractDomStats(audits["dom-size"]);

  const cssRatio = transferBytes > 0 ? Math.min(cssUnusedBytes / transferBytes, 1) : 0;
  const jsRatio = transferBytes > 0 ? Math.min((jsUnusedBytes + duplicatedJsBytes) / transferBytes, 1) : 0;
  const htmlPenalty = htmlPenaltyFromDomStats(domStats, audits["dom-size"]);

  const weighted = (0.35 * cssRatio) + (0.45 * jsRatio) + (0.2 * htmlPenalty);
  const score = Math.round(weighted * 100);
  const urgency = deadCodeUrgency(score, cssUnusedBytes + jsUnusedBytes + duplicatedJsBytes, domStats.totalBodyElements);
  const wsg = wsgIndex.get(DEAD_CODE_WSG_URL) || null;

  return {
    score,
    urgency,
    transferBytes,
    css: {
      unusedBytes: cssUnusedBytes,
      ratio: cssRatio,
      auditId: "unused-css-rules"
    },
    javascript: {
      unusedBytes: jsUnusedBytes,
      duplicatedBytes: duplicatedJsBytes,
      ratio: jsRatio,
      auditIds: ["unused-javascript", "duplicated-javascript"]
    },
    html: {
      estimatedPenalty: htmlPenalty,
      totalBodyElements: domStats.totalBodyElements,
      maxDepth: domStats.maxDepth,
      maxChildElements: domStats.maxChildElements,
      note: "HTML dead code cannot be measured directly from Lighthouse. This score estimates unnecessary markup from DOM size and complexity signals."
    },
    recommendations: buildDeadCodeRecommendations({
      cssUnusedBytes,
      jsUnusedBytes,
      duplicatedJsBytes,
      domStats,
      wsg
    }),
    wsg
  };
}

export function analyzeNonCriticalResourcesFromLighthouse(lhr, wsgIndex) {
  const audits = lhr.audits || {};
  const transferBytes = extractTransferBytes(audits);
  const networkItems = audits["network-requests"]?.details?.items || [];

  const offscreenImageSavings = getSavingsBytes(audits["offscreen-images"]);
  const unusedJavascriptSavings = getSavingsBytes(audits["unused-javascript"]);
  const unusedCssSavings = getSavingsBytes(audits["unused-css-rules"]);
  const renderBlockingMs = typeof audits["render-blocking-resources"]?.numericValue === "number"
    ? Math.max(0, audits["render-blocking-resources"].numericValue)
    : 0;

  const imageRatio = transferBytes > 0 ? Math.min(offscreenImageSavings / transferBytes, 1) : 0;
  const jsRatio = transferBytes > 0 ? Math.min(unusedJavascriptSavings / transferBytes, 1) : 0;
  const cssRatio = transferBytes > 0 ? Math.min(unusedCssSavings / transferBytes, 1) : 0;
  const renderBlockingPenalty = Math.min(renderBlockingMs / 1500, 1);

  const weighted = (0.35 * imageRatio) + (0.3 * jsRatio) + (0.2 * cssRatio) + (0.15 * renderBlockingPenalty);
  const score = Math.round(weighted * 100);
  const urgency = nonCriticalUrgency({ score, deferrableBytes: offscreenImageSavings + unusedJavascriptSavings + unusedCssSavings, renderBlockingMs });
  const wsg = wsgIndex.get(NON_CRITICAL_WSG_URL) || null;

  return {
    score,
    urgency,
    transferBytes,
    estimatedDeferrableBytes: offscreenImageSavings + unusedJavascriptSavings + unusedCssSavings,
    renderBlockingMs,
    breakdown: {
      offscreenImageSavings,
      unusedJavascriptSavings,
      unusedCssSavings
    },
    candidates: buildNonCriticalCandidates({
      networkItems,
      offscreenImageSavings,
      unusedJavascriptSavings,
      unusedCssSavings,
      renderBlockingMs,
      wsg
    }),
    wsg
  };
}

function severityRank(value) {
  if (value === "high") return 0;
  if (value === "medium") return 1;
  return 2;
}

function scorePenalty(audit) {
  const score = typeof audit?.score === "number" ? audit.score : 1;
  return Math.max(0, Math.min(1, 1 - score));
}

function getSavingsBytes(audit) {
  if (!audit) return 0;
  const fromDetails = audit.details?.overallSavingsBytes;
  if (typeof fromDetails === "number" && fromDetails > 0) {
    return fromDetails;
  }
  const numericValue = typeof audit.numericValue === "number" ? audit.numericValue : 0;
  return numericValue > 0 ? numericValue : 0;
}

function extractTransferBytes(audits) {
  const networkItems = audits["network-requests"]?.details?.items || [];
  return networkItems.reduce((sum, item) => sum + (item.transferSize || 0), 0);
}

function extractDomStats(audit) {
  const stats = audit?.details?.items?.[0] || {};
  return {
    totalBodyElements: typeof stats.totalBodyElements === "number" ? stats.totalBodyElements : 0,
    maxDepth: typeof stats.maxDepth === "number" ? stats.maxDepth : 0,
    maxChildElements: typeof stats.maxChildElements === "number" ? stats.maxChildElements : 0
  };
}

function htmlPenaltyFromDomStats(domStats, domAudit) {
  const totalPenalty = Math.min(domStats.totalBodyElements / 1500, 1);
  const depthPenalty = Math.min(domStats.maxDepth / 40, 1);
  const childPenalty = Math.min(domStats.maxChildElements / 60, 1);
  const auditPenalty = scorePenalty(domAudit);
  return Math.min((0.35 * totalPenalty) + (0.25 * depthPenalty) + (0.15 * childPenalty) + (0.25 * auditPenalty), 1);
}

function deadCodeUrgency(score, deadBytes, totalBodyElements) {
  if (score >= 60 || deadBytes >= 256 * 1024 || totalBodyElements >= 1500) return "high";
  if (score >= 30 || deadBytes >= 64 * 1024 || totalBodyElements >= 800) return "medium";
  return "low";
}

function buildDeadCodeRecommendations({ cssUnusedBytes, jsUnusedBytes, duplicatedJsBytes, domStats, wsg }) {
  const recommendations = [];

  if (cssUnusedBytes > 0) {
    recommendations.push({
      area: "css",
      title: "Remove unused CSS selectors and component styles",
      urgency: cssUnusedBytes >= 64 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: cssUnusedBytes,
      strategy: "Trim styles that never match rendered markup and split component CSS so only used styles are shipped.",
      wsg
    });
  }

  if (jsUnusedBytes > 0) {
    recommendations.push({
      area: "javascript",
      title: "Remove unused JavaScript and feature bundles",
      urgency: jsUnusedBytes >= 64 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: jsUnusedBytes,
      strategy: "Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.",
      wsg
    });
  }

  if (duplicatedJsBytes > 0) {
    recommendations.push({
      area: "javascript",
      title: "Deduplicate repeated JavaScript modules",
      urgency: duplicatedJsBytes >= 32 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: duplicatedJsBytes,
      strategy: "Consolidate repeated modules in the build graph so the browser does not download duplicate code.",
      wsg
    });
  }

  if (domStats.totalBodyElements >= 800 || domStats.maxDepth >= 32 || domStats.maxChildElements >= 60) {
    recommendations.push({
      area: "html",
      title: "Reduce unnecessary HTML wrappers and markup depth",
      urgency: domStats.totalBodyElements >= 1500 ? "high" : "medium",
      estimatedSavingsBytes: 0,
      strategy: "Audit template wrappers, hidden blocks, repeated utility containers, and CMS-generated markup that does not support the rendered experience.",
      wsg
    });
  }

  return recommendations.slice(0, 6);
}

function nonCriticalUrgency({ score, deferrableBytes, renderBlockingMs }) {
  if (score >= 60 || deferrableBytes >= 400 * 1024 || renderBlockingMs >= 1000) return "high";
  if (score >= 30 || deferrableBytes >= 120 * 1024 || renderBlockingMs >= 250) return "medium";
  return "low";
}

function buildNonCriticalCandidates({ networkItems, offscreenImageSavings, unusedJavascriptSavings, unusedCssSavings, renderBlockingMs, wsg }) {
  const candidates = [];

  if (offscreenImageSavings > 0) {
    candidates.push({
      title: "Lazy-load offscreen images",
      area: "image",
      urgency: offscreenImageSavings >= 250 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: offscreenImageSavings,
      strategy: "Load below-the-fold images only when they approach the viewport.",
      wsg
    });
  }

  if (unusedJavascriptSavings > 0) {
    candidates.push({
      title: "Defer non-critical JavaScript",
      area: "javascript",
      urgency: unusedJavascriptSavings >= 120 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: unusedJavascriptSavings,
      strategy: "Split bundles and load feature code on interaction or route transition.",
      wsg
    });
  }

  if (unusedCssSavings > 0) {
    candidates.push({
      title: "Inline critical CSS and defer remainder",
      area: "stylesheet",
      urgency: unusedCssSavings >= 80 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: unusedCssSavings,
      strategy: "Ship only above-the-fold CSS in initial render path and defer non-critical styles.",
      wsg
    });
  }

  if (renderBlockingMs > 0) {
    candidates.push({
      title: "Eliminate render-blocking resources",
      area: "render-path",
      urgency: renderBlockingMs >= 1000 ? "high" : "medium",
      estimatedSavingsBytes: 0,
      estimatedBlockingMs: renderBlockingMs,
      strategy: "Defer scripts/styles not required for first paint and preload only truly critical assets.",
      wsg
    });
  }

  const heavyDeferrableRequests = (networkItems || [])
    .map((item) => normalizeRequest(item))
    .filter((item) => ["script", "stylesheet", "font", "image"].includes(item.resourceType) && item.transferSize >= 60 * 1024)
    .sort((a, b) => b.transferSize - a.transferSize)
    .slice(0, 4);

  for (const request of heavyDeferrableRequests) {
    candidates.push({
      title: `Evaluate deferred loading for heavy ${request.resourceType} from ${request.domain}`,
      area: request.resourceType,
      urgency: request.transferSize >= 180 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: request.transferSize,
      url: request.url,
      strategy: "Confirm this asset is required for first paint; defer or lazy-load if not critical.",
      wsg
    });
  }

  return dedupeCandidates(candidates).slice(0, 8);
}

function normalizeRequest(item) {
  return {
    url: item.url || "",
    transferSize: item.transferSize || 0,
    resourceType: String(item.resourceType || "other").toLowerCase(),
    mimeType: item.mimeType || "",
    domain: safeDomain(item.url)
  };
}

function safeDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "unknown";
  }
}

function heavyThresholdForType(resourceType) {
  switch (resourceType) {
    case "image":
      return 100 * 1024;
    case "script":
      return 70 * 1024;
    case "font":
      return 50 * 1024;
    case "media":
      return 150 * 1024;
    case "stylesheet":
      return 40 * 1024;
    default:
      return 100 * 1024;
  }
}

function groupHeavyRequestsByType(requests) {
  const groups = new Map();
  for (const request of requests) {
    const current = groups.get(request.resourceType) || { resourceType: request.resourceType, count: 0, transferBytes: 0 };
    current.count += 1;
    current.transferBytes += request.transferSize;
    groups.set(request.resourceType, current);
  }
  return Array.from(groups.values()).sort((a, b) => b.transferBytes - a.transferBytes);
}

function groupHeavyRequestsByOrigin(requests) {
  const groups = new Map();
  for (const request of requests) {
    const current = groups.get(request.domain) || { domain: request.domain, count: 0, transferBytes: 0 };
    current.count += 1;
    current.transferBytes += request.transferSize;
    groups.set(request.domain, current);
  }
  return Array.from(groups.values()).sort((a, b) => b.transferBytes - a.transferBytes).slice(0, 8);
}

function modularizationUrgency(score, heavyBytes, heavyCount) {
  if (score >= 60 || heavyBytes >= 1024 * 1024 || heavyCount >= 8) return "high";
  if (score >= 30 || heavyBytes >= 256 * 1024 || heavyCount >= 4) return "medium";
  return "low";
}

function buildModularizationCandidates({ heavyRequests, offscreenImageSavings, unusedJavascriptSavings, renderBlockingSavings, wsg }) {
  const candidates = [];

  if (offscreenImageSavings > 32 * 1024) {
    candidates.push({
      title: "Lazy-load offscreen images and media galleries",
      urgency: offscreenImageSavings >= 128 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: offscreenImageSavings,
      strategy: "Load imagery only when it enters the viewport or when a user opens the relevant section.",
      wsg
    });
  }

  if (unusedJavascriptSavings > 32 * 1024) {
    candidates.push({
      title: "Split JavaScript by route or interaction",
      urgency: unusedJavascriptSavings >= 128 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: unusedJavascriptSavings,
      strategy: "Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.",
      wsg
    });
  }

  if (renderBlockingSavings > 0) {
    candidates.push({
      title: "Defer non-critical UI modules until after first render",
      urgency: renderBlockingSavings >= 1000 ? "high" : "medium",
      estimatedSavingsBytes: 0,
      strategy: "Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.",
      wsg
    });
  }

  for (const request of heavyRequests.slice(0, 3)) {
    candidates.push({
      title: `Modularize heavy ${request.resourceType} asset from ${request.domain}`,
      urgency: request.transferSize >= 256 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: request.transferSize,
      strategy: buildRequestStrategy(request),
      url: request.url,
      wsg
    });
  }

  return dedupeCandidates(candidates).slice(0, 6);
}

function buildRequestStrategy(request) {
  switch (request.resourceType) {
    case "script":
      return "Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.";
    case "image":
      return "Serve a smaller placeholder first and load this asset only when the user scrolls to or requests the component.";
    case "font":
      return "Subset or defer this font so full font payloads are only fetched when needed.";
    case "stylesheet":
      return "Split this stylesheet so component-specific CSS is delivered only when the component is rendered.";
    case "media":
      return "Do not preload this media by default; load it when the user chooses playback or opens the module.";
    default:
      return "Move this asset behind an explicit interaction, route boundary, or lazy-loading trigger.";
  }
}

function dedupeCandidates(candidates) {
  const seen = new Set();
  const result = [];
  for (const candidate of candidates) {
    const key = `${candidate.title}|${candidate.strategy}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(candidate);
    }
  }
  return result;
}

function average(values) {
  const valid = values.filter((value) => typeof value === "number" && !Number.isNaN(value));
  if (valid.length === 0) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function redundancyUrgency(score, redundantBytes) {
  if (score >= 60 || redundantBytes >= 512 * 1024) return "high";
  if (score >= 30 || redundantBytes >= 128 * 1024) return "medium";
  return "low";
}

function buildRedundancyRecommendations(wasteByAudit, audits, wsg) {
  const recommendations = [];

  for (const waste of wasteByAudit.sort((a, b) => b.savingsBytes - a.savingsBytes)) {
    const baseTitle = waste.title.replace(/^\s*reduce\s+/i, "").trim().toLowerCase();
    const normalizedTitle = baseTitle.length > 0 ? `Reduce ${baseTitle}` : waste.title;
    recommendations.push({
      title: normalizedTitle,
      urgency: waste.savingsBytes >= 128 * 1024 ? "high" : "medium",
      estimatedSavingsBytes: waste.savingsBytes,
      auditId: waste.auditId,
      wsg
    });
  }

  if (scorePenalty(audits["uses-text-compression"]) > 0.1) {
    recommendations.push({
      title: "Enable and verify text compression",
      urgency: "medium",
      estimatedSavingsBytes: getSavingsBytes(audits["uses-text-compression"]),
      auditId: "uses-text-compression",
      wsg
    });
  }

  if (scorePenalty(audits["dom-size"]) > 0.2) {
    recommendations.push({
      title: "Reduce DOM complexity and redundant markup",
      urgency: "medium",
      estimatedSavingsBytes: 0,
      auditId: "dom-size",
      wsg
    });
  }

  return recommendations.slice(0, 6);
}

function buildIssueTemplate(auditId, audit, wsg) {
  const lines = [];
  lines.push(`## Improve ${audit.title}`);
  lines.push("");
  lines.push(`- Lighthouse audit: ${auditId}`);
  if (audit.displayValue) {
    lines.push(`- Current value: ${audit.displayValue}`);
  }
  if (wsg) {
    lines.push(`- WSG guideline: ${wsg.id} ${wsg.title}`);
    lines.push(`- WSG link: ${wsg.url}`);
  }
  lines.push("");
  lines.push("### Why this matters");
  lines.push(audit.description || "Review and optimize this area to reduce data transfer and runtime energy.");
  lines.push("");
  lines.push("### Definition of done");
  lines.push("- [ ] Metric improves in Lighthouse on key templates");
  lines.push("- [ ] Changes documented in release notes");
  lines.push("- [ ] Re-scan confirms improvement");
  return lines.join("\n");
}
