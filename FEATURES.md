# Features

A comprehensive reference for all capabilities, checks, and measurements included in **Open Susty Scans** — an issue-driven, automated web sustainability auditing platform.

---

## Table of Contents

1. [Overview](#1-overview)
2. [CLI Interface](#2-cli-interface)
3. [URL Intake & Discovery](#3-url-intake--discovery)
4. [Sustainability Analysis](#4-sustainability-analysis)
   - 4.1 [Redundancy Detection](#41-redundancy-detection)
   - 4.2 [Modularization Opportunities](#42-modularization-opportunities)
   - 4.3 [Dead Code Detection](#43-dead-code-detection)
   - 4.4 [Non-Critical Resource Deferral](#44-non-critical-resource-deferral)
   - 4.5 [Carbon Emissions Estimation (CO2.js)](#45-carbon-emissions-estimation-co2js)
   - 4.6 [Green Hosting Check](#46-green-hosting-check)
   - 4.7 [Form Validation & Accessibility](#47-form-validation--accessibility)
   - 4.8 [Metadata Completeness](#48-metadata-completeness)
   - 4.9 [Layout Adaptation (Responsive Design)](#49-layout-adaptation-responsive-design)
   - 4.10 [Lightweight Security Assessment](#410-lightweight-security-assessment)
   - 4.11 [Expected & Beneficial Files](#411-expected--beneficial-files)
   - 4.12 [Third-Party JavaScript Analysis](#412-third-party-javascript-analysis)
   - 4.13 [Media Sustainability Hints](#413-media-sustainability-hints)
   - 4.14 [Grid-Aware Websites Detection](#414-grid-aware-websites-detection)
5. [Lighthouse Integration](#5-lighthouse-integration)
6. [Cross-Page Pattern Analysis](#6-cross-page-pattern-analysis)
7. [Report Generation](#7-report-generation)
   - 7.1 [JSON Report](#71-json-report)
   - 7.2 [Markdown Report](#72-markdown-report)
   - 7.3 [HTML Report](#73-html-report)
8. [GitHub Automation](#8-github-automation)
   - 8.1 [Scan & Publish Workflow](#81-scan--publish-workflow)
   - 8.2 [Issue Queue Workflow](#82-issue-queue-workflow)
   - 8.3 [Energy Audit Workflow](#83-energy-audit-workflow)
9. [Pages Build & Publishing](#9-pages-build--publishing)
10. [Caching & Performance Optimizations](#10-caching--performance-optimizations)
11. [Scoring & Urgency Framework](#11-scoring--urgency-framework)
12. [Third-Party Integrations & External APIs](#12-third-party-integrations--external-apis)
13. [Sustainability Governance](#13-sustainability-governance)

---

## 1. Overview

Open Susty Scans is an **event-driven sustainability auditing platform** built for GitHub. It scans public websites for sustainability signals — carbon emissions, green hosting, code redundancy, security posture, and alignment with the W3C Web Sustainability Guidelines (WSG 2.1) — then publishes multi-format reports (JSON, Markdown, HTML) to GitHub Pages and posts a summary comment back to the triggering issue.

**Design principles:**
- Triggered by GitHub issues — no always-on polling.
- Deterministic, reproducible scans with no runtime AI.
- Outputs machine-readable JSON alongside human-readable Markdown and HTML.
- Mapped to W3C WSG 2.1 for standardised, actionable recommendations.

---

## 2. CLI Interface

The scanner is run via `npm run scan` with the following flags:

| Flag | Type | Description |
|---|---|---|
| `--urls-file <path>` | String | Text file with one URL per line, or comma-separated URLs |
| `--issue-file <path>` | String | Local Markdown file with a `# URLs` section (for testing without GitHub) |
| `--issue-url <url>` | String | Full GitHub issue URL; the issue body is fetched and parsed for URLs |
| `--issue-number <n>` | Number | Issue number embedded in report metadata |
| `--title <text>` | String | Scan title (auto-derived from issue title when `--issue-url` is used) |
| `--output <dir>` | String | Output directory for reports (default: `./reports/latest`) |
| `--help`, `-h` | Flag | Display help text and exit |

**Example invocations:**

```bash
# Scan from a plain URL list
npm run scan -- --urls-file ./urls.txt --title "SCAN: My Batch"

# Scan from a local issue-body file (testing)
npm run scan -- --issue-file ./issue-body.md --issue-number 42 --title "SCAN: Example"

# Scan from a live GitHub issue
npm run scan -- --issue-url https://github.com/owner/repo/issues/1
```

---

## 3. URL Intake & Discovery

### Input methods

1. **URL file** — plain text, one URL per line or comma-separated.
2. **Issue file** — Markdown with a `# URLs` section; other sections are ignored.
3. **GitHub issue** — the issue body is fetched via the GitHub API and parsed for URLs. The issue title, body, owner, repo, and issue number are all extracted.

### URL validation & deduplication

- Each candidate URL is fully parsed (using the URL constructor) and validated by a regex extractor that strips trailing punctuation.
- Only URLs whose hostname contains a dot (`.`) are accepted, rejecting non-routable labels.
- A Set-based deduplication pass removes duplicates before scanning begins.

### Automatic URL discovery

When a GitHub issue with a title starting `SCAN:` contains no explicit URLs, the scanner auto-discovers pages from the target site:

1. **Count hint** — the issue body may contain `Number: N` or `Pages: N` (default 100, max 500).
2. **Robots.txt** — read for `Sitemap:` directives; those sitemaps are prioritised.
3. **Sitemap** — `/sitemap.xml` is fetched and parsed. Sitemap indices are followed up to 10 child sitemaps and 3 levels of depth.
4. **BFS crawl** — if the sitemap returns fewer pages than the requested limit, a breadth-first crawl of the base URL fills the remainder.
5. **Random sampling** — if more pages are found than the limit, a random sample is taken.

**HTML-only filtering** — pages with the following extensions are excluded from discovery results:

`pdf`, `doc*`, `xls*`, `ppt*`, `zip`, `gz`, `tar`, `rar`, `7z`, `xml`, `rss`, `atom`, `json`, `csv`, `txt`, `mp3`, `mp4`, `avi`, `mov`, `wmv`, `webm`, `jpg`, `jpeg`, `png`, `gif`, `svg`, `ico`, `webp`, `avif`, `woff*`, `ttf`, `eot`, `css`, `js`, `mjs`

Each fetch in the discovery phase has a **15-second timeout**.

---

## 4. Sustainability Analysis

All analysis categories produce a **score (0–100)**, an **urgency level** (high / medium / low), a set of **observed data points**, and one or more **WSG-mapped recommendations**.

### 4.1 Redundancy Detection

**What it checks:**
- Unused CSS bytes (Lighthouse `unused-css-rules` audit)
- Unused JavaScript bytes (`unused-javascript`)
- Duplicated JavaScript bytes (`duplicated-javascript`)
- DOM size / body-element count (`dom-size`)
- Text-compression coverage (`uses-text-compression`)
- Minification of CSS and JS (`unminified-css`, `unminified-javascript`)

**How it scores:**

| Component | Weight |
|---|---|
| Redundancy ratio (unused + duplicated bytes ÷ transfer bytes) | 55% |
| DOM complexity penalty (element count, depth, children) | 20% |
| Text compression gap | 15% |
| Minification gap | 10% |

**Urgency thresholds:**
- **High** — score ≥ 60, or redundant bytes ≥ 256 KB, or > 1 500 body elements
- **Medium** — score ≥ 30, or redundant bytes ≥ 64 KB, or > 800 body elements
- **Low** — otherwise

---

### 4.2 Modularization Opportunities

**What it checks:**
- Heavy requests by resource type (scripts, stylesheets, fonts, images)
- Heavy requests by origin (external vs. first-party)
- Offscreen images not deferred (`offscreen-images`)
- Unused JavaScript that could be code-split or deferred (`unused-javascript`)
- Render-blocking resources (`render-blocking-resources`)

**How it scores:**

| Component | Weight |
|---|---|
| Heavy-request ratio | 40% |
| Lazy-media opportunity | 20% |
| Code-split / defer opportunity | 20% |
| Render-blocking penalty | 10% |
| Request-density penalty | 10% |

**Urgency threshold:** High if score ≥ 60, or heavy bytes ≥ 5 MB, or > 20 heavy requests.

---

### 4.3 Dead Code Detection

**What it checks:**
- Unused CSS bytes as a ratio of total CSS transfer
- Unused JavaScript bytes as a ratio of total JS transfer
- Duplicated JavaScript bytes
- HTML/DOM complexity (estimated from body-element count, nesting depth, child counts)

**How it scores:**

| Component | Weight |
|---|---|
| Unused CSS ratio | 35% |
| Unused JS ratio | 45% |
| HTML/DOM complexity penalty | 20% |

**HTML penalty sub-components:**
- > 1 500 body elements (35% of HTML penalty)
- > 40 nesting depth (25%)
- > 60 child elements (15%)
- Lighthouse `dom-size` audit score (25%)

---

### 4.4 Non-Critical Resource Deferral

**What it checks:**
- Offscreen images not deferred (`offscreen-images`)
- Unused JavaScript (`unused-javascript`)
- Unused CSS (`unused-css-rules`)
- Render-blocking delay in milliseconds (`render-blocking-resources`)

**How it scores:**

| Component | Weight |
|---|---|
| Deferrable image ratio | 35% |
| Deferrable JS ratio | 30% |
| Deferrable CSS ratio | 20% |
| Render-blocking milliseconds | 15% |

**Urgency threshold:** High if score ≥ 60, or deferrable bytes ≥ 400 KB, or render-blocking ≥ 1 000 ms.

---

### 4.5 Carbon Emissions Estimation (CO2.js)

**What it checks:**
- Total network transfer bytes for the page (from Lighthouse `network-requests`)
- CO2 equivalent in grams and milligrams, calculated using the **Sustainable Web Design (SWD) model** from CO2.js

**Rating scale** (standard SWD thresholds):

| Rating | Transfer threshold | CO2 threshold |
|---|---|---|
| A+ | ≤ 272.51 KB | ≤ 0.040 g |
| A  | ≤ 531.15 KB | ≤ 0.079 g |
| B  | ≤ 975.85 KB | ≤ 0.145 g |
| C  | ≤ 1 410.39 KB | ≤ 0.209 g |
| D  | ≤ 1 875.01 KB | ≤ 0.278 g |
| E  | ≤ 2 419.56 KB | ≤ 0.359 g |
| F  | Everything else | — |

---

### 4.6 Green Hosting Check

**What it checks:**
- Whether the **page's hosting provider** is powered by renewable energy (via Green Web Foundation)
- Whether the origins of **external CSS and JS** resources use green hosting
- Hosting provider name, partner status, and supporting documentation links

**Data source:** `https://api.thegreenwebfoundation.org/api/v3/greencheck` (10-second timeout per hostname)

**Summary output:** Counts of green, not-green, and unknown origins; per-origin details including hosted_by name and supporting documents.

---

### 4.7 Form Validation & Accessibility

**What it checks per form control (via Puppeteer):**
- Presence of an associated label (`<label>`, `aria-label`, `aria-labelledby`)
- Validation rules (`required`, `pattern`, `min`/`max`, semantic input type)
- Error messaging hooks (`aria-errormessage`, `aria-describedby`)
- Autocomplete support (`autocomplete` attribute on password/email/text fields)

**Scoring — cumulative penalty:**

| Missing element | Penalty points |
|---|---|
| No label | 40 |
| No validation rule | 30 |
| No error-messaging hook | 20 |
| No autocomplete attribute | 10 |
| **Maximum possible score** | **100** |

**Caching:** Form controls are fingerprinted by a signature (`context|tag|type|name|autocomplete|required|pattern|minlength`). Identical controls seen on subsequent pages within the same scan reuse the cached assessment.

**Urgency:** High if score ≥ 60; Medium if ≥ 30; Low otherwise.

---

### 4.8 Metadata Completeness

**What it checks (via Puppeteer):**
- Document `<title>`, `lang` attribute, `charset`, `viewport` meta tag
- Meta `description`, `robots` directive, canonical `<link>`
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`
- Twitter Card tags
- Structured data: JSON-LD blocks (validity count)

**Scoring — cumulative missing penalties:**

| Missing element | Penalty |
|---|---|
| `<title>` | 20 pt |
| `lang` attribute | 15 pt |
| Meta description | 10 pt |
| Canonical URL | 10 pt |
| Open Graph core tags | 15 pt |
| Twitter Card | 5 pt |
| `viewport` meta | 5 pt |
| `charset` | 5 pt |
| Structured data (JSON-LD) | 10 pt |
| Invalid JSON-LD | 10 pt |

---

### 4.9 Layout Adaptation (Responsive Design)

**What it checks (via Puppeteer, two viewports):**

| Device | Viewport |
|---|---|
| Mobile | 390 × 844 px @ 2× DPR |
| Tablet | 820 × 1 180 px @ 2× DPR |

Per device:
- Horizontal overflow (content wider than the viewport)
- Small tap targets (< 44 × 44 CSS px)
- Fixed-width element offenders
- Oversized media elements

**Scoring — cumulative penalties:**
- Mobile overflow: 35 pt
- Tablet overflow: 25 pt
- Tap target deficiencies: ~15 pt
- Each fixed-width offender: 2 pt
- Each oversized media element: 2 pt

**Urgency:** High if combined mobile/tablet score ≥ 60.

---

### 4.10 Lightweight Security Assessment

**HTTP / TLS checks (via Puppeteer response headers):**

| Issue | Penalty |
|---|---|
| No HTTPS | 40 pt |
| HTTPS but no `Strict-Transport-Security` | 15 pt |
| No `Content-Security-Policy` | 20 pt |
| No `X-Content-Type-Options: nosniff` | 8 pt |
| No `Referrer-Policy` | 5 pt |
| No `Permissions-Policy` / `Feature-Policy` | 5 pt |
| `Server` or `X-Powered-By` header exposed | 4 pt |

**Script integrity & dependency checks:**

| Issue | Penalty |
|---|---|
| External script without Subresource Integrity (SRI) | 2 pt each (max 10 pt) |
| Vulnerable libraries detected (Lighthouse `no-vulnerable-libraries`) | 40 pt |

---

### 4.11 Expected & Beneficial Files

**What it checks** — HTTP HEAD requests to standard paths:

| File | Category | Penalty if absent |
|---|---|---|
| `/robots.txt` | Expected | 30 pt |
| `/sitemap.xml` | Beneficial | 20 pt |
| `/.well-known/security.txt` | Beneficial | 15 pt |
| `/manifest.webmanifest` | Beneficial | 10 pt |
| `/favicon.ico` | Beneficial | 5 pt |

**Urgency:** High if score ≥ 60 (i.e., `robots.txt` is absent).

---

### 4.12 Third-Party JavaScript Analysis

**What it checks:**
- External script origins (hostname extracted from `network-requests`)
- Green Web Foundation status per provider
- Aggregated request count and total transfer size per provider
- Hosting provider metadata (hosted_by, partner status)

**Summary output:** Ranked list of third-party origins with byte totals, request counts, and green-hosting status.

---

### 4.13 Media Sustainability Hints

**What it checks:**
- **Autoplay media** — detects `<video autoplay>` and `<audio autoplay>` elements; flags unmuted autoplay separately as it consumes bandwidth without user consent
- **Dark mode support** — checks for `prefers-color-scheme: dark` CSS media rules plus `color-scheme` signals; also flags likely partial dark mode implementations when dark-mode signals exist but style overrides are sparse
- **Image lazy loading** — counts images with and without an explicit `loading="lazy"` attribute; pages where fewer than 50% of images are lazy-loaded are flagged

**WSG reference:** [Optimize media to reduce resource use](https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)

**Inspiration:** [Web Sustainability Index](https://websustainabilityindex.com/about)

**Summary output:** Cross-page counts for pages with autoplay, unmuted autoplay, missing dark mode, likely partial dark mode, and lazy loading gaps.

---

### 4.14 Grid-Aware Websites Detection

**What it checks:**

Grid-aware websites adapt their content or behaviour based on the carbon intensity of the visitor's local electricity grid — serving lighter experiences when the grid runs on more carbon-intensive energy sources. This check looks for evidence that a site has implemented this approach using the [Green Web Foundation's grid-aware websites library](https://www.thegreenwebfoundation.org/tools/grid-aware-websites/).

Detected signals include:

- **`data-grid-aware` attribute on `<html>`** — the primary DOM signal set by the HTMLRewriter in the Cloudflare Workers and Netlify Edge plugins when grid-aware changes are applied
- **GAW info bar element** — elements with `id="gaw-info-bar"` or matching `[id*='grid-aware']`, `[class*='gaw-']`, or `[data-gaw]`
- **Script references** — inline scripts or `<script src>` attributes referencing `grid-aware-websites`, `@greenweb/gaw`, `gaw-plugin-cloudflare`, or `gaw-plugin-netlify`
- **Response headers** — response headers containing `gaw`, `grid-aware`, or `x-grid`
- **Electricity Maps API requests** — network requests to `electricitymaps.com` visible in the Lighthouse network log

**Reference demos:**
- [Cloudflare Workers demo](https://gaw.greenweb.org) — source: [github.com/thegreenwebfoundation/grid-aware-websites-demo-cloudflare](https://github.com/thegreenwebfoundation/grid-aware-websites-demo-cloudflare)
- [Netlify Edge Functions demo](https://grid-aware-demo.netlify.app/) — source: [github.com/thegreenwebfoundation/grid-aware-websites-demo-netlify](https://github.com/thegreenwebfoundation/grid-aware-websites-demo-netlify)

**Output:** Per-page detection status with signal breakdown; summary count of pages where grid-aware signals are found. Pages with no signals receive an "investigate" recommendation pointing to the library and demos.

---

## 5. Lighthouse Integration

Lighthouse is run in **headless Chromium** (via `chrome-launcher`) for each URL with the following categories:

- `performance`
- `best-practices`

### Audits mapped to W3C WSG guidelines

| Lighthouse Audit | WSG Mapping |
|---|---|
| `largest-contentful-paint` | Set goals based on performance & energy |
| `speed-index` | Set goals based on performance & energy |
| `unused-javascript` | Use dependencies appropriately |
| `unused-css-rules` | Remove unnecessary information |
| `modern-image-formats` | Optimize media |
| `uses-optimized-images` | Optimize media |
| `offscreen-images` | Modularise bandwidth-heavy elements |
| `render-blocking-resources` | Use an efficient solution |
| `uses-text-compression` | Remove unnecessary information |
| `uses-rel-preconnect` | Use an efficient solution |
| `server-response-time` | Ensure infrastructure fits needs |
| `total-byte-weight` | Define performance budgets |
| `dom-size` | Remove unnecessary information |

### Additional audits extracted

- `network-requests` — transfer bytes, resource types, origins (used for CO2, modularisation, third-party analysis)
- `no-vulnerable-libraries` — known CVE-affected JavaScript libraries
- `service-worker`, `works-offline`, `installable-manifest`, `offline-start-url` — offline/PWA support signals
- `uses-long-cache-ttl` — caching header effectiveness
- `duplicated-javascript`, `unminified-css`, `unminified-javascript` — code quality signals

---

## 6. Cross-Page Pattern Analysis

After scanning all URLs in a batch, the scanner identifies **patterns that recur across pages** and surfaces them as site-wide findings:

| Pattern type | What is identified |
|---|---|
| Heavy asset patterns | Same file or origin loaded on multiple pages |
| Modularisation targets | Lazy-load or defer opportunities on multiple pages |
| Heavy origins | Third-party origins with the highest total transfer bytes |
| Vulnerable dependencies | Same library version appearing on multiple pages |
| Compression opportunities | Same text-compression or image-format gap recurring |
| Optimization opportunities | Same Lighthouse opportunity recurring across pages |
| Offline / caching gaps | Service worker or cache headers absent across pages |
| Runtime version signals | Same outdated software version string appearing |
| Metadata gaps | Same missing meta tags across pages |
| Security issues | Same CSP, HSTS, or vulnerable-library issue recurring |

Results are grouped by origin and presented as **site-wide guidance** distinct from per-URL findings.

---

## 7. Report Generation

All three formats are written to the configured output directory on every scan run.

### 7.1 JSON Report

File: `report.json`

**Top-level structure:**

| Field | Description |
|---|---|
| `version` | Schema version (currently `"0.1.0"`) |
| `scanTitle` | Title of the scan |
| `issueNumber` | GitHub issue number |
| `generatedAt` | ISO 8601 timestamp |
| `requestedUrls` | Input URL array |
| `summary` | Cross-page aggregates (totals, averages, high-urgency counts) |
| `budgetGuidance` | SWD carbon-rating guidance table |
| `thirdPartyJsSummary` | External script origin analysis |
| `externalProviderRiskSummary` | Non-green provider aggregation |
| `formValidationSummary` | Aggregated form-check findings |
| `metadataSummary` | Aggregated metadata findings |
| `layoutSupportSummary` | Aggregated responsive-design findings |
| `crossPagePatterns` | Recurring heavy assets, origins, and opportunities |
| `siteGuidance` | Per-origin shared recommendations |
| `results` | Per-URL detailed results (see below) |

**Per-URL result fields:**

- Lighthouse performance and best-practices scores
- Transfer bytes and CO2 estimate
- Green hosting status (page origin + external origins)
- Per-category assessment objects (score, urgency, checks, recommendations)
- Raw Lighthouse audit data for key audits

### 7.2 Markdown Report

File: `report.md`

Human-readable report with:
- Scan summary table
- Per-URL breakdowns with Lighthouse scores, CO2 estimates, and SWD ratings
- Cross-page pattern summaries
- Site-wide guidance grouped by origin
- Green Web Foundation hosting status
- Form validation recurring issues
- Security and dependency findings
- Carbon budget guidance table

### 7.3 HTML Report

File: `report.html`

Accessible, self-contained HTML with:
- Semantic heading structure (`h1`–`h3`) and landmark regions
- Tables for all numeric data with proper `<th>` headers
- Copy-to-clipboard buttons for URLs
- Inline CSS only (no external stylesheets or CDN dependencies)
- Mobile-responsive layout, tested at 200% zoom
- Keyboard-operable interactive controls
- No meaning conveyed by colour alone

---

## 8. GitHub Automation

### 8.1 Scan & Publish Workflow

**File:** `.github/workflows/scan-and-publish.yml`

**Triggers:**
- Issue opened, edited, or reopened with a title beginning `SCAN:`
- Manual `workflow_dispatch` (with an issue URL as input)

**Concurrency:** Single workflow group; new runs cancel in-progress runs for the same group, preventing git conflicts on the Pages commit.

**Key steps:**

1. Check out the `main` branch
2. Set up Node.js 24 with npm cache
3. Install dependencies (`npm ci`)
4. **Eco CI energy measurement** (Green Coding Solutions) — records runner energy consumption for install, scan, and reporting phases
5. Resolve issue context (issue number and URL)
6. Run the scan: `npm run scan -- --issue-url <url> --issue-number <n> --output ./.tmp/current-report`
7. Build the Pages site (index, report archive, metadata)
8. Commit artifacts to `main` (`reports/`, `reports.html`, `index.html`, `.nojekyll`) with `git pull --rebase` before push to handle concurrent scans
9. Post or update a report summary comment on the issue (idempotent via HTML comment marker `<!-- open-susty-scans-report -->`)
10. Close the issue with `gh issue close`

### 8.2 Issue Queue Workflow

**File:** `.github/workflows/scan-issue-queue.yml`

**Triggers:**
- Daily at **00:00 UTC** (cron schedule)
- Manual `workflow_dispatch`

**Purpose:** Catches any `SCAN:` issues that were not processed automatically (e.g., because the primary workflow was paused or failed).

**Key behaviours:**
- Fetches all open issues with titles starting `SCAN:` via GitHub Script
- Processes each sequentially to avoid git conflicts
- **Retry logic on git push:** 3 attempts with exponential backoff (2 s, 4 s)
- Continues processing remaining issues even if one scan fails (error logged as a warning)
- Posts a report comment and closes each issue on success

### 8.3 Energy Audit Workflow

**File:** `.github/workflows/energy.yml`

**Trigger:** Manual `workflow_dispatch`

**Inputs:**

| Input | Description |
|---|---|
| `url` | Single URL to measure (default: `https://green-coding.io`) |
| `urls_file` | Path to a URLs file (overrides `url`) |
| `send_data` | Boolean — submit results to Green Coding API for a public badge |

**What it measures:**
- GitHub Actions runner energy consumption via **Eco CI** (Green Coding Solutions)
- Energy is captured in laps (install phase, scan phase, report phase)
- Results are written to `reports/energy/latest/report.json` and committed back to `main`
- An artifact is uploaded with 7-day retention

**Note:** This workflow measures _CI runner energy consumption_, not page-level carbon emissions.

---

## 9. Pages Build & Publishing

**Script:** `src/report/build-pages-site.js`

**CLI arguments:**

| Argument | Description |
|---|---|
| `--site-dir` | Staging directory for the published site |
| `--report-dir` | Directory containing the latest scan outputs |
| `--issue-number` | Issue number for this scan |
| `--run-id` | GitHub Actions run ID |
| `--repo` | Repository name (`owner/repo`) |
| `--metadata-out` | Path to write a JSON metadata summary |

**What it builds:**

1. **Report archive index** (`reports.html`) — sortable, filterable table of all historical scans with columns: issue number, scan title, date, URLs requested/scanned, total transfer, total CO2.
2. **Landing page** (`index.html`)
3. **Per-issue directories:**
   - `reports/issue-{N}/latest/report.{json,md,html}` — always points to the most recent scan
   - `reports/issue-{N}/{timestamp}/report.{json,md,html}` — timestamped archive copy
4. **`.nojekyll`** — disables Jekyll processing on GitHub Pages
5. **Metadata JSON** (`--metadata-out`) — machine-readable summary of the latest scan including links to all published report formats

---

## 10. Caching & Performance Optimizations

### In-process caches (per scan run)

| Cache | Mechanism | Purpose |
|---|---|---|
| Form-control signatures | `Map<signature, assessment>` | Deduplicates identical form controls across multiple pages in the same scan |
| WSG guideline index | `Map<guidelineUrl, guideline>` | Fetched once from W3C; O(1) lookup for all per-URL finding mappings |

### API request reduction

- **Green Web Foundation hostnames** are deduplicated before API calls: each unique hostname is queried at most once per scan.
- Concurrent hostname checks use `Promise.all()` to minimise wall-clock time.

### Error resilience

| Failure mode | Handling |
|---|---|
| Lighthouse error on a URL | Page marked with `error` status; scan continues to the next URL |
| Form-validation Puppeteer error | Score 0 returned with a recommendation note; scan continues |
| Green Web Foundation timeout | Hostname marked as unknown; scan continues |
| Discovery fetch timeout | Failed URL skipped; BFS continues |
| Issue-queue git push failure | 3 retries with exponential backoff; remaining issues still processed |
| Eco CI measurement error | `continue-on-error: true`; non-blocking |

---

## 11. Scoring & Urgency Framework

All analysis categories follow a consistent pattern:

| Concept | Description |
|---|---|
| **Score** | 0–100 integer; higher = more problematic |
| **Urgency** | `high`, `medium`, or `low` based on score and absolute byte/time thresholds |
| **WSG mapping** | Each finding links to one or more W3C WSG 2.1 guideline URLs |
| **Recommendations** | Concise, actionable text generated deterministically (no runtime AI) |

Urgency thresholds use **both relative scores and absolute byte/millisecond thresholds** so that large pages are flagged even when their ratios appear acceptable.

---

## 12. Third-Party Integrations & External APIs

| Integration | Version | Role |
|---|---|---|
| **Lighthouse** | ^12.x | Performance/best-practices audits, network-request data, vulnerable-library detection |
| **Puppeteer** | ^24.x | Headless Chromium for form validation, metadata extraction, layout testing, security headers |
| **CO2.js (`@tgwf/co2`)** | ^0.16.x | Sustainable Web Design emissions model (grams CO2 per byte transferred) |
| **chrome-launcher** | ^1.x | Manages the Chrome process for Lighthouse runs |
| **Green Web Foundation API** | v3 | Renewable-energy hosting status per hostname |
| **W3C WSG JSON** | Latest | Guideline definitions fetched at scan time for recommendation mapping |
| **GitHub API** | REST v3 | Issue intake (GET), comment post/update (POST/PATCH) |
| **Eco CI** (Green Coding Solutions) | v5 | GitHub Actions runner energy measurement |

---

## 13. Sustainability Governance

The project operates under a documented sustainability policy (`SUSTAINABILITY.md`) with the following commitments:

### Metrics tracked over time

- Average transfer bytes per scanned page (target: downward trend)
- Average CO2 per scanned page (target: downward trend)
- CI run count per issue (target: avoid unnecessary reruns)
- Published report footprint (target: keep stable)
- Third-party external origins in reports (target: reduce non-green)
- AI calls per pull request (target: minimise and justify)

### AI usage policy

The project defaults to deterministic tooling over AI:

> Deterministic code → existing tooling → caching/reuse → reduced frequency → human action → AI

**Prohibited:** Always-on AI in CI, AI where scripting suffices, runtime AI embedded in reports.
**Permitted:** Refactoring assistance, summaries, triage support — disclosed in `README.md`.

### PR gate criteria

Every pull request that touches scan or report logic must include:
- Sustainability impact note (`improves`, `neutral`, or `regresses`)
- Accessibility impact note
- Third-party/external origin change summary
- AI assistance disclosure

### Event-driven architecture

All scans are triggered by GitHub issue events or manual dispatch — there are no always-on polling loops or scheduled scans running more frequently than necessary. The issue-queue daily catch-up run is the sole scheduled workflow, and it exits early if there are no open `SCAN:` issues.
