#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { buildImpactFrameworkManifest, renderImpactFrameworkManifest } from "./manifest.js";
import { extractIssueContextFromEvent } from "./issue.js";
import { parseImpactFrameworkResult, renderImpactFrameworkIssueComment, updateImpactDataFeed } from "./result.js";

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const args = { _: command };

  for (let i = 0; i < rest.length; i += 1) {
    const key = rest[i];
    const value = rest[i + 1];
    switch (key) {
      case "--event-path":
        args.eventPath = value;
        i += 1;
        break;
      case "--output":
        args.output = value;
        i += 1;
        break;
      case "--github-output":
        args.githubOutput = value;
        i += 1;
        break;
      case "--url":
        args.url = value;
        i += 1;
        break;
      case "--result":
        args.result = value;
        i += 1;
        break;
      case "--feed":
        args.feed = value;
        i += 1;
        break;
      case "--summary-out":
        args.summaryOut = value;
        i += 1;
        break;
      case "--comment-out":
        args.commentOut = value;
        i += 1;
        break;
      case "--issue-number":
        args.issueNumber = Number(value);
        i += 1;
        break;
      case "--issue-title":
        args.issueTitle = value;
        i += 1;
        break;
      case "--issue-url":
        args.issueUrl = value;
        i += 1;
        break;
      case "--run-id":
        args.runId = value;
        i += 1;
        break;
      case "--manifest-url":
        args.manifestUrl = value;
        i += 1;
        break;
      case "--result-url":
        args.resultUrl = value;
        i += 1;
        break;
      case "--summary-url":
        args.summaryUrl = value;
        i += 1;
        break;
      case "--feed-url":
        args.feedUrl = value;
        i += 1;
        break;
      default:
        break;
    }
  }

  return args;
}

function ensureArg(name, value) {
  if (!value && value !== 0) {
    throw new Error(`Missing required argument: ${name}`);
  }
}

function writeFile(path, contents) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents, "utf8");
}

function appendGithubOutputs(path, values) {
  const lines = Object.entries(values).map(([key, value]) => `${key}=${value ?? ""}`);
  writeFileSync(path, `${lines.join("\n")}\n`, { encoding: "utf8", flag: "a" });
}

function commandExtractContext(args) {
  ensureArg("--event-path", args.eventPath);
  const event = JSON.parse(readFileSync(resolve(args.eventPath), "utf8"));
  const context = extractIssueContextFromEvent(event);

  if (args.output) {
    writeFile(resolve(args.output), JSON.stringify(context, null, 2) + "\n");
  }

  if (args.githubOutput) {
    appendGithubOutputs(resolve(args.githubOutput), {
      issue_number: context.issueNumber,
      issue_title: context.issueTitle,
      issue_html_url: context.issueHtmlUrl,
      scan_url: context.scanUrl || "",
      labels: context.labels.join(",")
    });
  }

  console.log(JSON.stringify(context, null, 2));
}

function commandWriteManifest(args) {
  ensureArg("--url", args.url);
  ensureArg("--output", args.output);

  const manifest = buildImpactFrameworkManifest({ url: args.url });
  const rendered = renderImpactFrameworkManifest(manifest);
  writeFile(resolve(args.output), rendered);
  console.log(rendered);
}

function commandParseResult(args) {
  ensureArg("--result", args.result);
  ensureArg("--feed", args.feed);
  ensureArg("--summary-out", args.summaryOut);

  const rawYaml = readFileSync(resolve(args.result), "utf8");
  const summary = parseImpactFrameworkResult(rawYaml, {
    url: args.url,
    issueNumber: args.issueNumber,
    issueTitle: args.issueTitle,
    issueUrl: args.issueUrl,
    runId: args.runId
  });

  updateImpactDataFeed(resolve(args.feed), summary);
  writeFile(resolve(args.summaryOut), JSON.stringify(summary, null, 2) + "\n");

  if (args.commentOut) {
    const comment = renderImpactFrameworkIssueComment(summary, {
      manifestUrl: args.manifestUrl,
      resultUrl: args.resultUrl,
      summaryUrl: args.summaryUrl,
      feedUrl: args.feedUrl
    });
    writeFile(resolve(args.commentOut), `${comment}\n`);
  }

  console.log(JSON.stringify(summary, null, 2));
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  switch (args._) {
    case "extract-context":
      commandExtractContext(args);
      break;
    case "write-manifest":
      commandWriteManifest(args);
      break;
    case "parse-result":
      commandParseResult(args);
      break;
    default:
      throw new Error("Usage: node src/impact-framework/cli.js <extract-context|write-manifest|parse-result> [...]");
  }
}

main();
