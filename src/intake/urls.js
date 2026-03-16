import { readFileSync } from "node:fs";

export function parseUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => value.startsWith("http://") || value.startsWith("https://"));
}

export function extractSection(body, sectionName) {
  const pattern = new RegExp(`^#{1,6}\\s+${escapeRegex(sectionName)}\\s*$`, "im");
  const match = body.match(pattern);
  if (!match || match.index === undefined) {
    return "";
  }

  const start = match.index + match[0].length;
  const rest = body.slice(start);
  const nextHeadingMatch = rest.match(/^#{1,6}\s+/m);
  const end = nextHeadingMatch && nextHeadingMatch.index !== undefined ? nextHeadingMatch.index : rest.length;
  return rest.slice(0, end).trim();
}

export function parseIssueBodyForUrls(body) {
  const urlsSection = extractSection(body, "URLs");
  const sectionUrls = parseUrls(urlsSection);
  if (sectionUrls.length > 0) {
    return sectionUrls;
  }
  return parseUrls(body);
}

export function loadUrlsFromFile(filePath) {
  const raw = readFileSync(filePath, "utf8");
  return dedupeUrls(parseUrls(raw));
}

export function loadUrlsFromIssueBodyFile(filePath) {
  const raw = readFileSync(filePath, "utf8");
  return dedupeUrls(parseIssueBodyForUrls(raw));
}

export function dedupeUrls(urls) {
  const seen = new Set();
  const result = [];
  for (const url of urls) {
    if (!seen.has(url)) {
      seen.add(url);
      result.push(url);
    }
  }
  return result;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
