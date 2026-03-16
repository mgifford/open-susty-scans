#!/usr/bin/env node
import { resolve } from "node:path";
import { loadUrlsFromFile, loadUrlsFromIssueBodyFile } from "./intake/urls.js";
import { fetchWsgGuidelines, indexGuidelinesByUrl } from "./wsg/client.js";
import { scanUrls } from "./scan/lighthouse.js";
import { buildReportBundle, writeReports } from "./report/generate.js";

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const scanTitle = args.title || "WSG Sustainability Scan";
  const outputDir = resolve(args.output || "./reports/latest");

  const urls = args.issueFile
    ? loadUrlsFromIssueBodyFile(resolve(args.issueFile))
    : args.urlsFile
      ? loadUrlsFromFile(resolve(args.urlsFile))
      : [];

  if (urls.length === 0) {
    throw new Error("No URLs were found. Use --urls-file or --issue-file.");
  }

  const wsgData = await fetchWsgGuidelines();
  const wsgIndex = indexGuidelinesByUrl(wsgData);
  const scanResults = await scanUrls(urls);

  const report = buildReportBundle({
    scanTitle,
    issueNumber: args.issueNumber || null,
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
  console.log(`Usage:\n  npm run scan -- --urls-file urls.txt --title "My Scan"\n  npm run scan -- --issue-file issue.md --issue-number 12 --title "SCAN: Gov site"\n\nOptions:\n  --urls-file <path>     Text file with URLs, one per line (or comma separated)\n  --issue-file <path>    Markdown issue body file containing a # URLs section\n  --issue-number <n>     Optional issue number to include in report metadata\n  --title <text>         Scan title\n  --output <dir>         Output folder (default: ./reports/latest)\n  --help                 Show help\n`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
