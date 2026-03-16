# open-susty-scans

Issue-driven sustainability scanning for the Web Sustainability Guidelines (WSG), using:
- Lighthouse (performance and best-practices categories)
- CO2.js for per-page and aggregate emissions estimates
- The Green Web Foundation API for green hosting checks
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

Directly from a GitHub issue URL:

```bash
npm run scan -- --issue-url https://github.com/mgifford/open-susty-scans/issues/1 --title "SCAN: Spain"
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

Automated publishing is available through GitHub Actions:
- Each scan run can publish the report to GitHub Pages under `reports/issue-<number>/<run-id>/`
- A stable latest link is kept at `reports/issue-<number>/latest/`
- A repository-wide index page is published at `reports.html` (similar to open-scans style listing)
- The source issue gets an updated bot comment with report links (HTML, Markdown, JSON, and index)

Reports now separate guidance into:
- Site-wide guidance grouped by origin (shared recommendations that can often be fixed once at template/platform level)
- Page-specific guidance (exceptions and page-level follow-up items)

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

Reports also include third-party JavaScript assessment aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment
- Per-page third-party JS risk score and urgency
- Cross-scan view of third-party script providers by pages affected, request count, and transfer size
- Provider hosting status via the Green Web Foundation dataset to support sustainability-aware vendor review
- Dedicated cross-page summary of recurring non-green (and unknown) external providers to highlight highest hosting risk dependencies

Reports also include green hosting checks using the Green Web Foundation dataset:
- Whether each submitted URL host is identified as powered by green energy
- Whether external stylesheet and JavaScript origins are identified as powered by green energy
- Provider names where available
- Aggregate counts for green, not confirmed green, and unknown hosts

Reports also include dead-code analysis aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code
- Per-page dead-code score and urgency
- Recommendations covering unused CSS, unused/duplicated JavaScript, and excessive HTML complexity

Reports also include non-critical resource defer-loading analysis aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#defer-the-loading-of-non-critical-resources
- Per-page non-critical resource score and urgency
- Candidate resources to defer (offscreen media, non-critical scripts/styles, render-blocking assets, and heavy likely-deferrable requests)

Reports also include metadata machine-readability analysis aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#structure-metadata-for-machine-readability
- Per-page metadata score and urgency
- Checks for html lang, meta description, canonical URL, Open Graph tags, Twitter card tags, and JSON-LD validity
- Cross-page summary of recurring metadata gaps to prioritize shared template fixes

Reports also include multi-device layout support analysis aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#ensure-layouts-work-for-different-devices-and-requirements
- Per-page layout adaptation score and urgency for mobile and tablet viewports
- Detects horizontal overflow, fixed-width components, undersized tap targets, and oversized media
- Cross-page totals to prioritize responsive template and component fixes

Reports also include a lightweight security review aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-your-code-is-secure
- Per-page lightweight security score and urgency
- Flags common, easy-to-find issues such as vulnerable JavaScript library findings, missing security headers (CSP, HSTS, etc.), and external scripts without SRI
- Scope is non-invasive and does not perform penetration testing

Reports also include dependency maintenance review aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance
- Per-page dependency maintenance score and urgency
- Highlights vulnerable JavaScript library findings by page and recurring vulnerable dependencies across the scan set
- Includes dependency integrity hygiene signal (external scripts without SRI)

Reports also include expected and beneficial files review aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#include-expected-and-beneficial-files
- Per-page expected-files score and urgency
- Checks for common root-level files such as robots.txt, sitemap.xml, .well-known/security.txt, manifest.webmanifest, and favicon.ico
- Cross-page summary of recurring missing files to prioritize platform-level fixes

Reports also include optimization opportunities aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service
- Per-page optimization score and urgency
- Highlights easy bloat-removal opportunities such as oversized images, missing text compression, unused CSS/JS, non-minified assets, and render-blocking resources
- Cross-page recurring optimization patterns and aggregate potential savings (bytes and render-blocking time)

Reports also include dedicated compression opportunities aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#reduce-data-transfer-with-compression
- Per-page compression score and urgency
- Highlights text compression (Brotli/gzip), modern image formats, image re-encoding, and compression-friendly minification opportunities
- Cross-page recurring compression patterns and aggregate potential byte savings

Reports also include latest stable language version guidance aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-latest-stable-language-version
- Per-page language/runtime version score and urgency
- Detects externally visible runtime or language version signals from response headers (for example Node.js or PHP) and flags likely outdated baselines
- Summarizes recurring outdated runtime/language signatures across pages and origins to support platform-level upgrades
- Includes guidance to pair dependency upgrades with runtime/language baseline updates

Reports also include offline access and caching support guidance aligned with WSG guidance:
- WSG reference: https://www.w3.org/TR/web-sustainability-guidelines/#optimize-caching-and-support-offline-access
- Per-page offline support score and urgency
- Uses Lighthouse signals for service worker availability, offline behavior, installable manifest/start URL support, and long cache TTL effectiveness
- Provides recurring cross-page and site-level offline/caching opportunities for platform-level fixes

## Actionable Triage Flow

1. Open report.html.
2. Review high-impact findings at the top of each page result.
3. Use "Copy issue text" to copy ready-to-paste issue content.
4. Paste into your GitHub issue queue and assign owners.
5. Re-run after fixes and compare key metrics (transfer size, CO2, performance score).

## GitHub Automation

Workflow path:
- `.github/workflows/scan-and-publish.yml`

Triggers:
- `issues` events (`opened`, `edited`, `reopened`) for issue-driven scans
- `workflow_dispatch` with an `issue_url` input for manual runs

What it does:
- Runs the scanner using the GitHub issue URL intake
- Publishes reports to the `gh-pages` branch
- Generates/updates `reports.html` index on GitHub Pages
- Upserts a single report comment on the issue with direct links

GitHub Pages URL pattern:
- `https://<owner>.github.io/<repo>/reports.html`

For this repository, expected URL:
- `https://mgifford.github.io/open-susty-scans/reports.html`

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