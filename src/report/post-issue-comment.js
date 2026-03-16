#!/usr/bin/env node
import { readFileSync } from "node:fs";

function mustEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function ghRequest({ method, path, token, body }) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      "accept": "application/vnd.github+json",
      "authorization": `Bearer ${token}`,
      "user-agent": "open-susty-scans"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${method} ${path} failed: ${response.status} ${response.statusText} ${text}`);
  }

  return response.status === 204 ? null : response.json();
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

function buildComment(metadata) {
  const marker = "<!-- open-susty-scans-report -->";
  const summary = metadata.summary || {};
  const links = metadata.links || {};

  return `${marker}
## Sustainability Scan Report Published

- Scan title: ${summary.scanTitle || "Sustainability Scan"}
- Generated at: ${summary.generatedAt || "n/a"}
- URLs requested: ${summary.urlsRequested || 0}
- URLs scanned: ${summary.urlsScanned || 0}
- Scan errors: ${summary.scanErrors || 0}
- Total transfer: ${formatBytes(summary.totalTransferBytes)}
- Total CO2: ${typeof summary.totalCo2Grams === "number" ? `${summary.totalCo2Grams.toFixed(4)} g` : "n/a"}

### Reports

- HTML report (latest for this issue): ${links.latestHtml}
- HTML report (this run): ${links.currentHtml}
- Markdown report: ${links.currentMd}
- JSON report: ${links.currentJson}
- Reports index: ${links.reportsIndex}

_This comment is updated automatically on new scan runs._`;
}

async function main() {
  const token = mustEnv("GITHUB_TOKEN");
  const repository = mustEnv("GITHUB_REPOSITORY");
  const issueNumber = Number(mustEnv("ISSUE_NUMBER"));
  const metadataPath = mustEnv("REPORT_METADATA_PATH");

  const [owner, repo] = repository.split("/");
  if (!owner || !repo) {
    throw new Error("GITHUB_REPOSITORY must be owner/repo");
  }

  const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
  const body = buildComment(metadata);
  const marker = "<!-- open-susty-scans-report -->";

  const comments = await ghRequest({
    method: "GET",
    path: `/repos/${owner}/${repo}/issues/${issueNumber}/comments?per_page=100`,
    token
  });

  const existing = (comments || []).find((comment) =>
    typeof comment.body === "string" && comment.body.includes(marker)
  );

  if (existing) {
    await ghRequest({
      method: "PATCH",
      path: `/repos/${owner}/${repo}/issues/comments/${existing.id}`,
      token,
      body: { body }
    });
  } else {
    await ghRequest({
      method: "POST",
      path: `/repos/${owner}/${repo}/issues/${issueNumber}/comments`,
      token,
      body: { body }
    });
  }

  console.log(JSON.stringify({ ok: true, issueNumber, updated: Boolean(existing) }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
