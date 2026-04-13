# Sustainability Scan Report: Verification: WSG Best Practices

- Generated at: 2026-04-13T15:37:22.273Z
- URLs requested: 1
- URLs scanned: 1
- Distinct sites scanned: 1
- Scan errors: 0
- Average performance score: 68/100
- Total transfer: 741.91 KB
- Estimated CO2: 0.2910 g
- Average transfer per page: 741.91 KB
- Average CO2 per page: 0.2910 g
- Average redundancy score: 23/100
- Pages with high redundancy urgency: 0
- Average modularization score: 37/100
- Pages with high modularization urgency: 0
- Average dead-code score: 19/100
- Pages with high dead-code urgency: 1
- Average non-critical resources score: 12/100
- Pages with high non-critical resource urgency: 0
- Average form validation score: 55/100
- Pages with high form validation urgency: 0
- Average metadata score: 45/100
- Pages with high metadata urgency: 0
- Average layout adaptation score: 28/100
- Pages with high layout urgency: 0
- Average lightweight security score: 54/100
- Pages with high security urgency: 0
- Average dependency maintenance score: 2/100
- Pages with high dependency maintenance urgency: 0
- Average expected-files score: 10/100
- Pages with high expected-files urgency: 0
- Average compression score: 0/100
- Pages with high compression urgency: 0
- Average optimization score: 100/100
- Pages with high optimization urgency: 1
- Average offline support score: 90/100
- Pages with high offline support urgency: 1
- Average media hints score: 30/100
- Pages with high media hints urgency: 0
- Average language version score: 0/100
- Pages with high language version urgency: 0

## WSG Form Validation and Tooling

- WSG reference: Validate form errors and account for tooling requirements (https://www.w3.org/TR/web-sustainability-guidelines/#validate-form-errors-and-account-for-tooling-requirements)
- Unique form element signatures assessed: 2
- Total form element occurrences observed: 2
- Reused assessments (not re-scanned repeats): 0

## WSG Metadata for Machine Readability

- WSG reference: Structure metadata for machine readability (https://www.w3.org/TR/web-sustainability-guidelines/#structure-metadata-for-machine-readability)
- Assessed pages: 1
- Average metadata score: 45/100
- Pages with high urgency: 0
- Missing metadata across pages:
  - Missing html lang: 0
  - Missing meta description: 1
  - Missing canonical URL: 1
  - Missing Open Graph core tags: 1
  - Missing twitter:card: 1
  - Invalid or missing JSON-LD: 0

## WSG Multi-Device Layout Support

- WSG reference: Ensure layouts work for different devices and requirements (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-layouts-work-for-different-devices-and-requirements)
- Assessed pages: 1
- Average layout adaptation score: 28/100
- High urgency pages: 0
- Pages with mobile overflow: 0
- Pages with tablet overflow: 0
- Total small tap targets on mobile: 11
- Total small tap targets on tablet: 11
- Total fixed-width offenders: 0

## WSG Lightweight Security Review

- WSG reference: Ensure that your code is secure (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-your-code-is-secure)
- Assessed pages: 1
- Average lightweight security score: 54/100
- High urgency pages: 0
- Pages missing Content-Security-Policy: 1
- HTTPS pages missing Strict-Transport-Security: 1
- Pages with vulnerable JS library findings: 0
- External scripts missing SRI (total): 1

## WSG Dependency Maintenance Review

- WSG reference: Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- Assessed pages: 1
- Average dependency maintenance score: 2/100
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
- Aggregate potential byte savings: 309.35 KB
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
- Average media hints score: 30/100
- High urgency pages: 0
- Pages with autoplay media: 0
- Pages with unmuted autoplay: 0
- Pages without dark mode support: 0
- Pages with lazy loading gap (< 50% of images lazy): 1

## WSG Success Criteria & Best Practices

- Assessed pages: 1
- Average WSG compliance score: 70/100

### [LOW] Missing print style sheet
Add a @media print stylesheet to ensure the page is optimized for paper-saving printing.
- Recurs on 1 page(s).

**Best Practice Example:**
```javascript
// Implementation details in documentation
```
- [WSG Guideline 17](https://www.w3.org/TR/web-sustainability-guidelines/#reduce-the-impact-of-downloadable-and-physical-documents)

### [LOW] No reduced motion support
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

### [MEDIUM] Incomplete media lazy loading
Only 0/9 images use loading="lazy". Global lazy loading reduces initial data transfer and energy consumption.
- Recurs on 1 page(s).

**Best Practice Example:**
```javascript
<picture> 
  <source type="image/avif" srcset="image.avif">
  <source type="image/webp" srcset="image.webp">
  <img width="100px" height="100px" src="image.jpg" alt="" loading="lazy"/>
</picture>
```
- [WSG Guideline 11](https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)

## WSG Third-Party JavaScript Assessment

- WSG reference: Give third parties the same priority as first parties during assessment (https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment)
- Average third-party JS risk score: 11/100
- Pages with high urgency: 0
- Distinct third-party script providers: 1

### Top Third-Party Script Providers

- www.gstatic.com: GREEN (Google Cloud); on 1 page(s), 1 request(s), 81.02 KB

## Cross-Page Hosting Risk (Non-Green Providers)

- Focus: recurring external CSS/JS providers with non-green or unknown hosting status.
- No non-green external providers were detected in this scan.

## Green Hosting Checks

- Source: https://www.thegreenwebfoundation.org/tools/green-web-dataset/
- Submitted URL hosts checked: 1
- Submitted URL hosts on green energy: 1
- Submitted URL hosts not confirmed green: 0
- Submitted URL hosts unknown: 0
- External CSS/JS origins checked: 1
- External CSS/JS origins on green energy: 1
- External CSS/JS origins not confirmed green: 0
- External CSS/JS origins unknown: 0

## WSG SC 3.1 Budget Guidance

- WSG reference: Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- Sustainable Web Design benchmark: https://sustainablewebdesign.org/digital-carbon-ratings/
- Current transfer rating: B
- Current CO2 rating: E
- Recommended budget target: rating B
- Budget max transfer/page: 975.85 KB
- Budget max CO2/page: 0.1450 g
- Transfer reduction needed: none (already within target budget)
- CO2 reduction needed: 0.1460 g (50.2%)
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

### https://www.google.com
- Sampled pages: 1
- Shared recommendations:
  - [HIGH] Apply Content-Security-Policy site-wide
    - CSP is absent across all sampled pages on https://www.google.com.
  - [MEDIUM] Enable Strict-Transport-Security site-wide
    - HSTS is missing across all sampled HTTPS pages on https://www.google.com.
  - [HIGH] Introduce service worker support
    - No sampled pages on https://www.google.com indicate service worker support for offline resilience.
  - [HIGH] Support offline fallback behavior
    - Offline page behavior was not detected across sampled pages on https://www.google.com.

## Page-Specific Guidance

- Use this section for page-level exceptions after site-wide/platform fixes are planned.

### https://www.google.com
- https://google.com
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 90/100, dependency score: 2/100, language score: 0/100, security score: 54/100, expected-files score: 10/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [LOW] Remove unused CSS

## Priority Improvements

### https://google.com
- Performance: 68/100
- Transfer: 741.91 KB
- CO2 estimate: 0.2910 g
- Page host green energy status: GREEN (Google Cloud)
- Redundancy score: 23/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 19/100
- Dead-code urgency: HIGH
- Non-critical resources score: 12/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 45/100
- Metadata urgency: MEDIUM
- Layout adaptation score: 28/100
- Layout adaptation urgency: LOW
- Lightweight security score: 54/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 10/100
- Expected-files urgency: LOW
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 11/100
- Third-party JS urgency: LOW
- Estimated redundant transfer: 309.35 KB (41.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 299.00 KB savings)
  - [MEDIUM] Reduce unused css (est. 10.36 KB savings)
- Heavy initial-load requests: 3 (490.13 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 299.00 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [HIGH] Modularize heavy script asset from www.google.com (est. 336.20 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
  - [MEDIUM] Modularize heavy script asset from www.gstatic.com (est. 81.02 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.gstatic.com: GREEN (Google Cloud); 1 request(s), 81.02 KB
  - STYLESHEET www.gstatic.com: GREEN (Google Cloud); 1 request(s), 3.30 KB
- Third-party JS recommendations:
  - [LOW] Maintain a third-party JavaScript inventory
    - Track 1 third-party script origin(s) and assign an owner plus business justification for each.
- Dead-code recommendations:
  - [MEDIUM] Remove unused CSS selectors and component styles (est. 10.36 KB savings)
    - Trim styles that never match rendered markup and split component CSS so only used styles are shipped.
  - [HIGH] Remove unused JavaScript and feature bundles (est. 299.00 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 299.00 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Inline critical CSS and defer remainder (est. 10.36 KB deferrable)
    - Ship only above-the-fold CSS in initial render path and defer non-critical styles.
  - [HIGH] Evaluate deferred loading for heavy script from www.google.com (est. 336.20 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.gstatic.com (est. 81.02 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [HIGH] Missing associated label
    - 1 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No explicit validation rule
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
  - [MEDIUM] Complete Open Graph metadata
    - Include og:title, og:description, og:type, and og:url for robust machine-readable sharing metadata.
  - [LOW] Add twitter:card metadata
    - Include twitter card metadata to improve cross-platform machine-readable previews.
- Layout adaptation recommendations:
  - [MEDIUM] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 11 small targets on mobile and 11 on tablet.
- Lightweight security recommendations:
  - [HIGH] Add a Content-Security-Policy header
    - Add an appropriate CSP to reduce script injection and resource loading risk.
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [MEDIUM] Set X-Content-Type-Options: nosniff
    - Prevent MIME type sniffing by adding the nosniff response header.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [MEDIUM] Add SRI to external scripts
    - 1 external script tag(s) are missing integrity attributes.
- Dependency maintenance recommendations:
  - [MEDIUM] Add integrity attributes for external dependencies
    - 1 external script dependency URL(s) are missing SRI integrity attributes.
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
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 299.00 KB.
  - [LOW] Remove unused CSS
    - Trim unused selectors and split CSS so only needed styles are shipped. Estimated byte savings: 10.36 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 9 of 9 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Largest Contentful Paint
  - Current value: 7.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 299 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Preconnect to required origins
  - Current value: Est savings of 310 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Speed Index
  - Current value: 4.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused CSS
  - Current value: Est savings of 10 KiB
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

## Copy/Paste Issue Snippets

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 7.0 s
- WSG guideline: 1 Set goals based on performance and energy impact
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact

### Why this matters
Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 299 KiB
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
## Improve Preconnect to required origins

- Lighthouse audit: uses-rel-preconnect
- Current value: Est savings of 310 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

