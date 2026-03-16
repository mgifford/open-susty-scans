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

function severityRank(value) {
  if (value === "high") return 0;
  if (value === "medium") return 1;
  return 2;
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
