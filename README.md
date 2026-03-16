# open-susty-scans

Issue-driven sustainability scanning with:
- Lighthouse (performance-focused)
- CO2.js emissions estimates
- WSG (Web Sustainability Guidelines) mapping

## Intake Workflow

Use GitHub Issues as the URL intake queue.

1. Create an issue using the Sustainability Scan Request template.
2. Add URLs in the `URLs` field (one per line).
3. Save the issue body markdown to a local file (for now, local CLI run).
4. Run the scanner with `--issue-file`.

The parser follows the same style used in open-scans: it extracts URLs from a `# URLs` section when present.

## Install

```bash
npm install
```

## Run

From a plain URL list file:

```bash
npm run scan -- --urls-file ./urls.txt --title "SCAN: My Sustainability Batch"
```

From an issue body markdown file:

```bash
npm run scan -- --issue-file ./issue-body.md --issue-number 42 --title "SCAN: Government Services"
```

Optional output directory:

```bash
npm run scan -- --issue-file ./issue-body.md --output ./reports/issue-42
```

## Outputs

Each run writes:
- `report.json`: machine-readable structured results
- `report.md`: human-focused summary and prioritized recommendations
- `report.html`: accessible, actionable report with copy buttons for issue snippets

Reports now also include a `budgetGuidance` section aligned with WSG SC 3.1:
- Average transfer bytes per page
- Average CO2 grams per page
- Suggested budget target (rating `B`) and stretch target (rating `A`)
- Required reduction percentage to meet target budgets
- Comparison against Sustainable Web Design Digital Carbon Ratings

## Actionable Triage Flow

1. Open `report.html`.
2. Review high-impact findings at the top of each page result.
3. Use "Copy issue text" to copy ready-to-paste issue content.
4. Paste into your GitHub issue queue and assign owners.
5. Re-run after fixes and compare key metrics (transfer size, CO2, performance score).

## Scope

This project intentionally avoids accessibility-engine output and starts with performance/sustainability indicators, as requested.

## Budget Benchmarks

For page-level budget guidance, this project compares scan averages against:
- WSG: Set goals based on performance and energy impact
- Sustainable Web Design Digital Carbon Ratings:
	- https://sustainablewebdesign.org/digital-carbon-ratings/

Default recommendation:
- Team budget target: Rating B or better
- Stretch target: Rating A or better