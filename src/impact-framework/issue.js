function normalizeCandidateUrl(candidate) {
  const trimmed = String(candidate || "").trim().replace(/[),.;:'"\]>]+$/g, "");
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    const isHttp = parsed.protocol === "http:" || parsed.protocol === "https:";
    return isHttp && parsed.hostname.includes(".") ? parsed.href : null;
  } catch {
    return null;
  }
}

export function extractFirstIssueUrl(body) {
  const regex = /https?:\/\/[^\s<>"'`)\]]+/gi;
  for (const match of String(body || "").matchAll(regex)) {
    const normalized = normalizeCandidateUrl(match[0]);
    if (normalized) {
      return normalized;
    }
  }
  return null;
}

export function extractIssueContextFromEvent(eventPayload) {
  const issue = eventPayload?.issue;
  if (!issue) {
    throw new Error("GitHub issue event payload is missing an issue object.");
  }

  return {
    issueNumber: issue.number,
    issueTitle: issue.title || "",
    issueHtmlUrl: issue.html_url || "",
    scanUrl: extractFirstIssueUrl(issue.body || ""),
    labels: Array.isArray(issue.labels) ? issue.labels.map((label) => label.name).filter(Boolean) : []
  };
}
