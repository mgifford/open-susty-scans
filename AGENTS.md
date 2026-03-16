# AGENTS.md

Agent-facing instructions for working in this repository.

## Accessibility-first policy

- Follow the repository accessibility policy in `ACCESSIBILITY.md` for all user-facing output, including generated HTML reports and pages content.
- If guidance in this file conflicts with `ACCESSIBILITY.md`, treat `ACCESSIBILITY.md` as the source of truth for accessibility requirements.

## Sustainability-first policy

- Follow the repository sustainability policy in `SUSTAINABILITY.md` for architecture, CI, reporting, and AI-usage decisions.
- For scan/report changes, include expected sustainability impact in PR notes (improves, neutral, or regresses).
- If guidance in this file conflicts with `SUSTAINABILITY.md`, treat `SUSTAINABILITY.md` as the source of truth for sustainability requirements.

## Project overview

- This project scans URL sets for sustainability signals using Lighthouse, CO2.js, and WSG-aligned analysis.
- Primary entrypoint is the CLI in `src/cli.js`.
- Reports are generated as JSON, Markdown, and HTML artifacts.
- GitHub automation scans issue URLs and publishes reports to GitHub Pages.

## Setup commands

- Install dependencies: `npm ci`
- Show CLI help: `npm run scan -- --help`
- Scan from URL list: `npm run scan -- --urls-file ./urls.txt --title "SCAN: My Batch"`
- Scan from issue body file: `npm run scan -- --issue-file ./issue-body.md --issue-number 42 --title "SCAN: Example"`
- Scan from issue URL: `npm run scan -- --issue-url https://github.com/<owner>/<repo>/issues/<number>`

## Build and report commands

- Build/update pages artifacts from a report run: `npm run pages:build -- --site-dir ./.tmp/site --report-dir ./.tmp/current-report --issue-number 1 --run-id local --repo mgifford/open-susty-scans`
- Post or update report issue comment (requires env vars in workflow): `npm run issue:comment`

## Testing and validation

- There is no dedicated unit test suite yet.
- After code edits, run at least one realistic CLI scan and confirm all report outputs are produced.
- For workflow changes, validate `.github/workflows/scan-and-publish.yml` logic and required environment variables.
- Use focused checks on touched files before finishing, for example lint/type diagnostics if available in the editor.

## Code style and editing conventions

- Use ESM JavaScript style consistent with existing `src` modules.
- Prefer small, composable pure functions for analysis and rendering logic.
- Keep report text deterministic and concise; avoid unnecessary wording churn that creates noisy diffs.
- Preserve existing report schema fields unless a change explicitly requires schema evolution.
- When adding report sections, update all three outputs: JSON structure, Markdown section, and HTML section.

## Workflow and publishing conventions

- Canonical workflow is `.github/workflows/scan-and-publish.yml`.
- GitHub Pages artifacts are committed on `main` under `reports/` plus root `reports.html`.
- Keep `reports/issue-<number>/latest/` behavior stable when changing pages build logic.
- Do not switch publishing back to `gh-pages` unless explicitly requested.

## Security and operational guardrails

- Scan only publicly reachable URLs; do not add logic that probes authenticated or private targets.
- Do not hardcode tokens or secrets. Use `GITHUB_TOKEN`/workflow secrets.
- Keep external requests minimal and explicit (Lighthouse target URLs, Green Web checks, GitHub issue intake).
- Avoid destructive git operations in automation and local instructions.

## Pull request guidance for agents

- Keep changes scoped to the requested task.
- Update `README.md` when behavior or commands change.
- Include a short validation note in PR descriptions with exact commands run.
- Prefer follow-up TODO notes over speculative refactors unrelated to the request.