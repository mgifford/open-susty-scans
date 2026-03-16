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
