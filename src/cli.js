#!/usr/bin/env node
import { resolve } from "node:path";
import { dedupeUrls, loadUrlsFromFile, loadUrlsFromIssueBodyFile, parseIssueBodyForUrls } from "./intake/urls.js";
import { fetchIssueBodyFromGitHubUrl } from "./intake/github.js";
import { fetchWsgGuidelines, indexGuidelinesByUrl } from "./wsg/client.js";
import { scanUrls } from "./scan/lighthouse.js";
import { buildReportBundle, writeReports } from "./report/generate.js";

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  let scanTitle = args.title || null;
  const outputDir = resolve(args.output || "./reports/latest");

  let issueNumber = args.issueNumber;
  let issueDerivedTitle = null;

  let urls = [];
  if (args.issueUrl) {
    const issue = await fetchIssueBodyFromGitHubUrl(args.issueUrl);
    urls = loadUrlsFromIssueBodyText(issue.body);
    issueNumber = issueNumber || issue.issueNumber;
    issueDerivedTitle = issue.title;
  } else if (args.issueFile) {
    urls = loadUrlsFromIssueBodyFile(resolve(args.issueFile));
  } else if (args.urlsFile) {
    urls = loadUrlsFromFile(resolve(args.urlsFile));
  }

  scanTitle = scanTitle || issueDerivedTitle || "WSG Sustainability Scan";

  if (urls.length === 0) {
    throw new Error("No URLs were found. Use --urls-file, --issue-file, or --issue-url.");
  }

  const wsgData = await fetchWsgGuidelines();
  const wsgIndex = indexGuidelinesByUrl(wsgData);
  const scanResults = await scanUrls(urls);

  const report = buildReportBundle({
    scanTitle,
    issueNumber: issueNumber || null,
    urls,
    results: scanResults,
    wsgIndex
  });

  const paths = writeReports(report, outputDir);

  console.log(JSON.stringify({
    ok: true,
    scanTitle,
    outputDir,
    urls: urls.length,
    files: paths
  }, null, 2));
}

function parseArgs(args) {
  const out = {};
  for (let i = 0; i < args.length; i += 1) {
    const key = args[i];
    const value = args[i + 1];
    switch (key) {
      case "--help":
      case "-h":
        out.help = true;
        break;
      case "--urls-file":
        out.urlsFile = value;
        i += 1;
        break;
      case "--issue-file":
        out.issueFile = value;
        i += 1;
        break;
      case "--issue-url":
        out.issueUrl = value;
        i += 1;
        break;
      case "--title":
        out.title = value;
        i += 1;
        break;
      case "--output":
        out.output = value;
        i += 1;
        break;
      case "--issue-number":
        out.issueNumber = Number(value);
        i += 1;
        break;
      default:
        break;
    }
  }
  return out;
}

function printHelp() {
  console.log(`Usage:\n  npm run scan -- --urls-file urls.txt --title "My Scan"\n  npm run scan -- --issue-file issue.md --issue-number 12 --title "SCAN: Gov site"\n  npm run scan -- --issue-url https://github.com/owner/repo/issues/1 --title "SCAN: Gov site"\n\nOptions:\n  --urls-file <path>     Text file with URLs, one per line (or comma separated)\n  --issue-file <path>    Markdown issue body file containing a # URLs section\n  --issue-url <url>      GitHub issue URL to fetch and parse for URLs\n  --issue-number <n>     Optional issue number to include in report metadata\n  --title <text>         Scan title\n  --output <dir>         Output folder (default: ./reports/latest)\n  --help                 Show help\n`);
}

function loadUrlsFromIssueBodyText(rawIssueBody) {
  return dedupeUrls(parseIssueBodyForUrls(rawIssueBody || ""));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
