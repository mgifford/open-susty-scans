# open-susty-scans

Issue-driven sustainability scanning for the Web Sustainability Guidelines (WSG), using:
- Lighthouse (performance and best-practices categories)
- CO2.js for per-page and aggregate emissions estimates
- WSG guideline mapping for actionable remediation
- Sustainable Web Design rating comparisons for budget guidance

## What This Project Does

Given a list of public URLs, this project generates:
- A machine-readable JSON report
- A human-focused Markdown report
- An accessible HTML report with copy buttons for issue-ready remediation text

It is designed to support WSG SC 3.1:
- Set goals based on performance and energy impact
- https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact

## Prerequisites

- Node.js 20+
- npm 10+
- Linux dependencies needed for headless Chromium (already installed in many CI/dev containers)

## Intake Workflow

Use GitHub Issues as the URL intake queue.

1. Create an issue using the Sustainability Scan Request template.
2. Add URLs in the URLs field (one per line).
3. Save the issue body markdown to a local file (for now, local CLI run).
4. Run the scanner with --issue-file.

The parser follows the same style used in open-scans: it extracts URLs from a # URLs section when present.

Issue template path:
- .github/ISSUE_TEMPLATE/sustainability-scan.yml

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

Show CLI help:

```bash
npm run scan -- --help
```

## Outputs

Each run writes:
- report.json: machine-readable structured results
- report.md: human-focused summary and prioritized recommendations
- report.html: accessible, actionable report with copy buttons for issue snippets

Reports also include a budgetGuidance section aligned with WSG SC 3.1:
- Average transfer bytes per page
- Average CO2 grams per page
- Suggested budget target (rating B) and stretch target (rating A)
- Required reduction percentage to meet target budgets
- Comparison against Sustainable Web Design Digital Carbon Ratings

Reports also include redundancy analysis aligned with WSG SC 3.2:
- Per-page redundancy score (0 to 100)
- Per-page urgency (low, medium, high)
- Estimated redundant bytes per page
- Top redundancy recommendations based on Lighthouse waste audits

Reports also include modularization analysis aligned with WSG guidance for bandwidth-heavy components:
- Per-page modularization score (0 to 100)
- Per-page urgency (low, medium, high)
- Heavy initial-load request counts and bytes
- On-demand modularization candidates for scripts, images, styles, fonts, and media
- Strategies such as lazy loading, route-level code splitting, and deferred initialization

## Actionable Triage Flow

1. Open report.html.
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

Current benchmark thresholds used by the report (from Sustainable Web Design):

| Rating | Transfer Size Per Page | CO2 Per Page |
|---|---:|---:|
| A+ | 272.51 KB | 0.040 g |
| A | 531.15 KB | 0.079 g |
| B | 975.85 KB | 0.145 g |
| C | 1410.39 KB | 0.209 g |
| D | 1875.01 KB | 0.278 g |
| E | 2419.56 KB | 0.359 g |
| F | >= 2419.57 KB | >= 0.360 g |

Default recommendation:
- Team budget target: Rating B or better
- Stretch target: Rating A or better

## Redundancy Scoring (WSG SC 3.2)

WSG reference:
- https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information

This project estimates redundancy using Lighthouse indicators such as:
- Unused CSS and JavaScript
- Duplicated JavaScript modules
- DOM size pressure
- Text compression and minification signals

Scoring model:
- 0 to 100 scale where higher means more redundant bytes or structure
- Urgency bands:
  - High: score >= 60 or estimated redundant transfer >= 512 KB
  - Medium: score >= 30 or estimated redundant transfer >= 128 KB
  - Low: below medium thresholds

  ## Modularization Analysis

  WSG reference:
  - https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components

  This project looks for opportunities to break heavier applications into modules that are only loaded when needed. It does this by examining:
  - Heavy initial-load requests from Lighthouse network data
  - Offscreen images that should be lazy-loaded
  - Unused JavaScript that should be code-split
  - Render-blocking resources that should be deferred
  - Heavy assets grouped by type and origin

  Typical recommendations include:
  - Lazy-load offscreen media and gallery assets
  - Split JavaScript by route or interaction
  - Defer non-critical UI modules until after first render
  - Move large media, fonts, or styles behind explicit user actions or route boundaries

## Notes

- Ratings are based on average page values from the scanned URL set.
- For governance, set pass/fail policy gates in CI around the recommended budget.
- For portfolio-level reporting, scan representative templates and key user journeys.