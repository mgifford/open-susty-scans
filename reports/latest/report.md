# Sustainability Scan Report: Verify: AI+Human WSG Catalog

- Generated at: 2026-04-13T20:14:12.067Z
- URLs requested: 1
- URLs scanned: 1
- Distinct sites scanned: 1
- Scan errors: 0
- Average performance score: 77/100
- Total transfer: 192.11 KB
- Estimated CO2: 0.0754 g
- Average transfer per page: 192.11 KB
- Average CO2 per page: 0.0754 g
- Average redundancy score: 17/100
- Pages with high redundancy urgency: 0
- Average modularization score: 3/100
- Pages with high modularization urgency: 0
- Average dead-code score: 12/100
- Pages with high dead-code urgency: 0
- Average non-critical resources score: 7/100
- Pages with high non-critical resource urgency: 0
- Average form validation score: 43/100
- Pages with high form validation urgency: 0
- Average metadata score: 20/100
- Pages with high metadata urgency: 0
- Average layout adaptation score: 30/100
- Pages with high layout urgency: 0
- Average lightweight security score: 19/100
- Pages with high security urgency: 0
- Average dependency maintenance score: 0/100
- Pages with high dependency maintenance urgency: 0
- Average expected-files score: 10/100
- Pages with high expected-files urgency: 0
- Average compression score: 0/100
- Pages with high compression urgency: 0
- Average optimization score: 100/100
- Pages with high optimization urgency: 1
- Average offline support score: 90/100
- Pages with high offline support urgency: 1
- Average media hints score: 20/100
- Pages with high media hints urgency: 0
- Average language version score: 0/100
- Pages with high language version urgency: 0

## WSG Form Validation and Tooling

- WSG reference: Validate form errors and account for tooling requirements (https://www.w3.org/TR/web-sustainability-guidelines/#validate-form-errors-and-account-for-tooling-requirements)
- Unique form element signatures assessed: 4
- Total form element occurrences observed: 5
- Reused assessments (not re-scanned repeats): 0

## WSG Metadata for Machine Readability

- WSG reference: Structure metadata for machine readability (https://www.w3.org/TR/web-sustainability-guidelines/#structure-metadata-for-machine-readability)
- Assessed pages: 1
- Average metadata score: 20/100
- Pages with high urgency: 0
- Missing metadata across pages:
  - Missing html lang: 0
  - Missing meta description: 0
  - Missing canonical URL: 0
  - Missing Open Graph core tags: 1
  - Missing twitter:card: 1
  - Invalid or missing JSON-LD: 0

## WSG Multi-Device Layout Support

- WSG reference: Ensure layouts work for different devices and requirements (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-layouts-work-for-different-devices-and-requirements)
- Assessed pages: 1
- Average layout adaptation score: 30/100
- High urgency pages: 0
- Pages with mobile overflow: 0
- Pages with tablet overflow: 0
- Total small tap targets on mobile: 80
- Total small tap targets on tablet: 66
- Total fixed-width offenders: 0

## WSG Lightweight Security Review

- WSG reference: Ensure that your code is secure (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-your-code-is-secure)
- Assessed pages: 1
- Average lightweight security score: 19/100
- High urgency pages: 0
- Pages missing Content-Security-Policy: 0
- HTTPS pages missing Strict-Transport-Security: 1
- Pages with vulnerable JS library findings: 0
- External scripts missing SRI (total): 0

## WSG Dependency Maintenance Review

- WSG reference: Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- Assessed pages: 1
- Average dependency maintenance score: 0/100
- High urgency pages: 0
- Pages with vulnerable dependencies: 0
- Total vulnerable dependency findings: 0

## WSG Expected and Beneficial Files

- WSG reference: Include expected and beneficial files (https://www.w3.org/TR/web-sustainability-guidelines/#include-expected-and-beneficial-files)
- Assessed pages: 1
- Average expected-files score: 10/100
- High urgency pages: 0
- Missing files across pages:
  - robots.txt missing: 0
  - sitemap.xml missing: 0
  - .well-known/security.txt missing: 0
  - manifest.webmanifest missing: 1
  - favicon.ico missing: 0

## WSG Reduce Data Transfer With Compression

- WSG reference: Reduce data transfer with compression (https://www.w3.org/TR/web-sustainability-guidelines/#reduce-data-transfer-with-compression)
- Assessed pages: 1
- Average compression score: 0/100
- High urgency pages: 0
- Pages missing effective text compression: 0
- Aggregate potential compression savings: 0.00 B

## WSG Efficient Solution Optimization Opportunities

- WSG reference: Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- Assessed pages: 1
- Average optimization score: 100/100
- High urgency pages: 1
- Aggregate potential byte savings: 57.86 KB
- Aggregate render-blocking reduction potential: 0 ms

## WSG Offline Access and Caching Support

- WSG reference: Optimize caching and support offline access (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-caching-and-support-offline-access)
- Assessed pages: 1
- Average offline support score: 90/100
- High urgency pages: 1
- Pages without service worker support: 1
- Pages without offline support: 1
- Pages with weak cache TTL signals: 0

## WSG Latest Stable Language Version

- WSG reference: Use the latest stable language version (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-latest-stable-language-version)
- Assessed pages: 1
- Average language-version score: 0/100
- High urgency pages: 0
- Pages exposing runtime/language version signals: 0
- Pages with outdated runtime/language signals: 0

## WSG Media Sustainability Hints

- WSG reference: Optimize media to reduce resource use (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)
- Assessed pages: 1
- Average media hints score: 20/100
- High urgency pages: 0
- Pages with autoplay media: 0
- Pages with unmuted autoplay: 0
- Pages without dark mode support: 1
- Pages with lazy loading gap (< 50% of images lazy): 0

## WSG Success Criteria & Best Practices

- Assessed pages: 1
- Average WSG compliance score: 95/100

### [LOW] [SCRIPT] No reduced motion support
Implement prefers-reduced-motion to allow users to disable animations, reducing compute and improving accessibility.
- Recurs on 1 page(s).

**Best Practice Example:**
```javascript
@media (prefers-reduced-motion: reduce) {
	body *,
	body *::before,
	body *::after {
		animation-delay: -1ms !important;
		animation-duration: 1ms !important;
		animation-iteration-count: 1 !important;
		background-attachment: initial !important;
		transition-duration: 1ms !important;
		transition-delay: -1ms !important;
		scroll-behavior: auto !important;
	}
}
```
- [WSG Guideline 12](https://www.w3.org/TR/web-sustainability-guidelines/#ensure-animation-is-proportionate-and-easy-to-control)

### [INVESTIGATE] [HUMAN] Review User Journey Efficiency
Have a human walk through the main user journeys and verify they require the fewest steps possible. Unnecessary steps waste user time and device energy. Look for redundant confirmations, forced account creation, and non-essential interstitials.
- Recurs on 1 page(s).
- [WSG 2.4 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#minimize-non-essential-content-interactivity-or-journeys)

### [INVESTIGATE] [HUMAN] Check for Engagement Traps
Manually review the page for patterns that artificially prolong engagement: infinite scroll, autoplay carousels, sticky overlays, and notification permission prompts. These waste user attention and device energy.
- Recurs on 1 page(s).
- [WSG 2.6 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#design-to-assist-and-not-to-distract)

### [INVESTIGATE] [HUMAN] Audit for Deceptive Design Patterns
Have a human identify dark patterns: misleading consent dialogs, hidden unsubscribe links, forced continuity, and bait-and-switch flows. Deceptive patterns waste user time and undermine trust.
- Recurs on 1 page(s).
- [WSG 2.7 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#avoid-being-manipulative-or-deceptive)

### [INVESTIGATE] [HUMAN] Verify Accessible Alternatives for All Media
Manually check that every video has captions, every audio file has a transcript, every image has meaningful alt text, and every PDF has an accessible HTML alternative. Alternatives let assistive technology users avoid re-downloading heavy formats.
- Recurs on 1 page(s).
- [WSG 2.14 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#offer-suitable-alternatives-for-every-format-used)

### [INVESTIGATE] [HUMAN] Confirm User Research Was Conducted
Verify that genuine user research or usability testing has informed the design. Research-driven design reduces wasted iterations, removes unnecessary features, and ensures the product meets real needs efficiently.
- Recurs on 1 page(s).
- [WSG 2.18 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#involve-users-early-in-the-project)

### [INVESTIGATE] [AI] Review Content Conciseness
Use a Large Language Model to evaluate page text for conciseness and clarity. Removing superfluous text reduces payload, reading time, and inference energy for search engines and AI crawlers indexing this content.
- Recurs on 1 page(s).
- [WSG 2.10 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#provide-clear-inclusive-content-with-purpose)

### [INVESTIGATE] [AI] Evaluate Navigation and Wayfinding Quality
Ask an LLM to assess whether the navigation labels, headings, and page hierarchy allow a user to locate content in as few steps as possible. Poor information architecture forces repeat page loads and increases server and user energy costs.
- Recurs on 1 page(s).
- [WSG 2.5 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-navigation-and-wayfinding-are-well-structured)

### [INVESTIGATE] [AI] Evaluate HTML Semantic Correctness
Use an LLM or structured analysis tool to verify that HTML uses semantic elements (article, nav, main, section, aside) correctly. Proper semantics reduces duplicate markup, improves accessibility, and allows browsers and crawlers to process pages more efficiently.
- Recurs on 1 page(s).
- [WSG 3.7 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#ensure-code-follows-good-semantic-practices)

### [INVESTIGATE] [HUMAN] Verify Error Pages and Redirects Are Configured
Have a human check that custom 404 and 500 error pages exist and that there are no redirect chains longer than one hop. Broken links force wasted round-trips. Redirect chains multiply transfer costs.
- Recurs on 1 page(s).
- [WSG 4.4 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#setup-necessary-error-pages-and-redirection-links)

### [INVESTIGATE] [HUMAN] Review CDN Usage and Geographic Distribution
Confirm that static assets are served from a CDN and that the CDN edge nodes are geographically close to the primary audience. CDN misuse—or absence—increases last-mile transfer distance and the associated energy cost of data delivery.
- Recurs on 1 page(s).
- [WSG 4.10 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#use-content-delivery-networks-cdns-appropriately)

### [INVESTIGATE] [HUMAN] Confirm a Sustainability Advocate Is Assigned
Verify that someone on the team has explicit responsibility for web sustainability. Without a designated advocate, sustainability improvements tend to be deprioritized and never reach the backlog.
- Recurs on 1 page(s).
- [WSG 5.2 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#assign-a-sustainability-advocate)

### [INVESTIGATE] [HUMAN] Check for a Public Sustainability Statement
Look for a publicly accessible sustainability statement, disclosure page, or environmental policy. Mandatory disclosure requirements are growing globally and transparency builds user trust. The statement should include measurable targets and dates.
- Recurs on 1 page(s).
- [WSG 5.8 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#support-mandatory-disclosures-and-reporting)

## WSG Third-Party JavaScript Assessment

- WSG reference: Give third parties the same priority as first parties during assessment (https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment)
- Average third-party JS risk score: 0/100
- Pages with high urgency: 0
- Distinct third-party script providers: 0

## Cross-Page Hosting Risk (Non-Green Providers)

- Focus: recurring external CSS/JS providers with non-green or unknown hosting status.
- No non-green external providers were detected in this scan.

## Green Hosting Checks

- Source: https://www.thegreenwebfoundation.org/tools/green-web-dataset/
- Submitted URL hosts checked: 1
- Submitted URL hosts on green energy: 0
- Submitted URL hosts not confirmed green: 1
- Submitted URL hosts unknown: 0
- External CSS/JS origins checked: 0
- External CSS/JS origins on green energy: 0
- External CSS/JS origins not confirmed green: 0
- External CSS/JS origins unknown: 0

## WSG SC 3.1 Budget Guidance

- WSG reference: Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- Sustainable Web Design benchmark: https://sustainablewebdesign.org/digital-carbon-ratings/
- Current transfer rating: A+
- Current CO2 rating: A
- Recommended budget target: rating B
- Budget max transfer/page: 975.85 KB
- Budget max CO2/page: 0.1450 g
- Transfer reduction needed: none (already within target budget)
- CO2 reduction needed: none (already within target budget)
- Stretch budget (rating A): 531.15 KB and 0.0790 g per page

## WSG SC 3.2 Redundancy Analysis

- WSG reference: Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)
- Redundancy score: 0 (low redundancy) to 100 (high redundancy)
- Urgency levels: low, medium, high

## WSG Remove Unnecessary Code Analysis

- WSG reference: Remove unnecessary code (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code)
- Dead-code score: 0 (low unnecessary code) to 100 (high unnecessary code)
- Includes unused CSS/JS, duplicated JS, and HTML complexity heuristics

## WSG Defer Non-Critical Resources Analysis

- WSG reference: Defer the loading of non-critical resources (https://www.w3.org/TR/web-sustainability-guidelines/#defer-the-loading-of-non-critical-resources)
- Non-critical score: 0 (few defer opportunities) to 100 (many deferrable resources)
- Uses offscreen image savings, unused CSS/JS, render-blocking delay, and heavy likely-non-critical assets

## WSG Modularization Analysis

- WSG reference: Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)
- Modularization score: 0 (few obvious on-demand opportunities) to 100 (many heavy initial-load components)
- This analysis looks for heavy scripts, images, styles, fonts, and media that should be split or loaded on demand.

## Cross-Page Patterns

- No strong cross-page modularization patterns were detected in this scan. Focus on page-level opportunities first.

## Site-Wide Guidance

- This scan appears to target a single site. Shared recommendations below should typically be fixed once at platform/template level.

### https://www.gov.uk
- Sampled pages: 1
- Shared recommendations:
  - [MEDIUM] Enable Strict-Transport-Security site-wide
    - HSTS is missing across all sampled HTTPS pages on https://www.gov.uk.
  - [HIGH] Introduce service worker support
    - No sampled pages on https://www.gov.uk indicate service worker support for offline resilience.
  - [HIGH] Support offline fallback behavior
    - Offline page behavior was not detected across sampled pages on https://www.gov.uk.

## Page-Specific Guidance

- Use this section for page-level exceptions after site-wide/platform fixes are planned.

### https://www.gov.uk
- https://www.gov.uk
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 90/100, dependency score: 0/100, language score: 0/100, security score: 19/100, expected-files score: 10/100
  - [LOW] No major compression opportunity detected
  - [MEDIUM] Remove unused CSS
  - [LOW] Remove unused JavaScript

## Priority Improvements

### https://www.gov.uk
- Performance: 77/100
- Transfer: 192.11 KB
- CO2 estimate: 0.0754 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: LOW
- Modularization score: 3/100
- Modularization urgency: LOW
- Dead-code score: 12/100
- Dead-code urgency: LOW
- Non-critical resources score: 7/100
- Non-critical resources urgency: LOW
- Form validation score: 43/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 19/100
- Lightweight security urgency: LOW
- Dependency maintenance score: 0/100
- Dependency maintenance urgency: LOW
- Expected-files score: 10/100
- Expected-files urgency: LOW
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 0/100
- Third-party JS urgency: LOW
- Estimated redundant transfer: 57.86 KB (30.1% of transfer)
- Redundancy recommendations:
  - [MEDIUM] Reduce unused css (est. 31.91 KB savings)
  - [MEDIUM] Reduce unused javascript (est. 25.96 KB savings)
- Third-party JS recommendations:
  - [LOW] No major third-party JavaScript risk signals
    - Continue periodic reviews so third-party additions are assessed with the same rigor as first-party code.
- Dead-code recommendations:
  - [MEDIUM] Remove unused CSS selectors and component styles (est. 31.91 KB savings)
    - Trim styles that never match rendered markup and split component CSS so only used styles are shipped.
  - [MEDIUM] Remove unused JavaScript and feature bundles (est. 25.96 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [MEDIUM] Defer non-critical JavaScript (est. 25.96 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Inline critical CSS and defer remainder (est. 31.91 KB deferrable)
    - Ship only above-the-fold CSS in initial render path and defer non-critical styles.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 3 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 3 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Complete Open Graph metadata
    - Include og:title, og:description, og:type, and og:url for robust machine-readable sharing metadata.
  - [LOW] Add twitter:card metadata
    - Include twitter card metadata to improve cross-platform machine-readable previews.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 80 small targets on mobile and 66 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
- Dependency maintenance recommendations:
  - [LOW] No dependency maintenance warnings detected
    - No vulnerable dependency flags were found for this page in the current lightweight checks.
- Language/runtime version recommendations:
  - [LOW] No obvious outdated runtime version disclosed
    - No clearly outdated runtime version signals were exposed in sampled HTTP headers. Verify language/runtime versions in source and CI since backend versions are not always externally visible.
- Expected-files recommendations:
  - [LOW] Add beneficial discoverability and maintenance files
    - Missing beneficial file(s): /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [MEDIUM] Remove unused CSS
    - Trim unused selectors and split CSS so only needed styles are shipped. Estimated byte savings: 31.91 KB.
  - [LOW] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 25.96 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 26 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Reduce unused CSS
  - Current value: Est savings of 32 KiB
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

## Copy/Paste Issue Snippets

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 26 KiB
- WSG guideline: 16 Use dependencies appropriately and ensure maintenance
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance

### Why this matters
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused CSS

- Lighthouse audit: unused-css-rules
- Current value: Est savings of 32 KiB
- WSG guideline: 2 Remove unnecessary or redundant information
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information

### Why this matters
Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

