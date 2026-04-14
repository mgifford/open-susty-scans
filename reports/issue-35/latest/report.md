# Sustainability Scan Report: SCAN: CA.gov

- Issue number: #35
- Generated at: 2026-04-14T00:38:14.458Z
- URLs requested: 100
- URLs scanned: 100
- Distinct sites scanned: 1
- Scan errors: 0
- Average performance score: 83/100
- Total transfer: 65.98 MB
- Estimated CO2: 26.5015 g
- Average transfer per page: 675.58 KB
- Average CO2 per page: 0.2650 g
- Average redundancy score: 20/100
- Pages with high redundancy urgency: 0
- Average modularization score: 41/100
- Pages with high modularization urgency: 0
- Average dead-code score: 15/100
- Pages with high dead-code urgency: 2
- Average non-critical resources score: 11/100
- Pages with high non-critical resource urgency: 2
- Average form validation score: 54/100
- Pages with high form validation urgency: 0
- Average metadata score: 11/100
- Pages with high metadata urgency: 0
- Average layout adaptation score: 31/100
- Pages with high layout urgency: 2
- Average lightweight security score: 31/100
- Pages with high security urgency: 0
- Average dependency maintenance score: 2/100
- Pages with high dependency maintenance urgency: 0
- Average expected-files score: 30/100
- Pages with high expected-files urgency: 0
- Average compression score: 0/100
- Pages with high compression urgency: 0
- Average optimization score: 100/100
- Pages with high optimization urgency: 100
- Average offline support score: 91/100
- Pages with high offline support urgency: 100
- Average media hints score: 26/100
- Pages with high media hints urgency: 0
- Average language version score: 0/100
- Pages with high language version urgency: 0

## WSG Form Validation and Tooling

- WSG reference: Validate form errors and account for tooling requirements (https://www.w3.org/TR/web-sustainability-guidelines/#validate-form-errors-and-account-for-tooling-requirements)
- Unique form element signatures assessed: 5
- Total form element occurrences observed: 538
- Reused assessments (not re-scanned repeats): 247

### Recurring Form Elements (Assessed Once, Reused Across Pages)

- search (q): appears on 99 page(s), risk 60/100, urgency HIGH
- textarea (add-feedback): appears on 99 page(s), risk 50/100, urgency MEDIUM
- checkbox (agencytags): appears on 27 page(s), risk 50/100, urgency MEDIUM
- search: appears on 25 page(s), risk 60/100, urgency HIGH
- search (q): appears on 2 page(s), risk 60/100, urgency HIGH

### Recurring Search Controls

- Search controls often appear on every page. These signatures are assessed once and reused:
  - search (q): 99 page(s), urgency HIGH

## WSG Metadata for Machine Readability

- WSG reference: Structure metadata for machine readability (https://www.w3.org/TR/web-sustainability-guidelines/#structure-metadata-for-machine-readability)
- Assessed pages: 100
- Average metadata score: 11/100
- Pages with high urgency: 0
- Missing metadata across pages:
  - Missing html lang: 0
  - Missing meta description: 99
  - Missing canonical URL: 14
  - Missing Open Graph core tags: 0
  - Missing twitter:card: 1
  - Invalid or missing JSON-LD: 0

## WSG Multi-Device Layout Support

- WSG reference: Ensure layouts work for different devices and requirements (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-layouts-work-for-different-devices-and-requirements)
- Assessed pages: 100
- Average layout adaptation score: 31/100
- High urgency pages: 2
- Pages with mobile overflow: 2
- Pages with tablet overflow: 0
- Total small tap targets on mobile: 6746
- Total small tap targets on tablet: 7346
- Total fixed-width offenders: 0

## WSG Lightweight Security Review

- WSG reference: Ensure that your code is secure (https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-your-code-is-secure)
- Assessed pages: 100
- Average lightweight security score: 31/100
- High urgency pages: 0
- Pages missing Content-Security-Policy: 1
- HTTPS pages missing Strict-Transport-Security: 100
- Pages with vulnerable JS library findings: 0
- External scripts missing SRI (total): 102

## WSG Dependency Maintenance Review

- WSG reference: Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- Assessed pages: 100
- Average dependency maintenance score: 2/100
- High urgency pages: 0
- Pages with vulnerable dependencies: 0
- Total vulnerable dependency findings: 0

## WSG Expected and Beneficial Files

- WSG reference: Include expected and beneficial files (https://www.w3.org/TR/web-sustainability-guidelines/#include-expected-and-beneficial-files)
- Assessed pages: 100
- Average expected-files score: 30/100
- High urgency pages: 0
- Missing files across pages:
  - robots.txt missing: 0
  - sitemap.xml missing: 100
  - .well-known/security.txt missing: 0
  - manifest.webmanifest missing: 100
  - favicon.ico missing: 0

## WSG Reduce Data Transfer With Compression

- WSG reference: Reduce data transfer with compression (https://www.w3.org/TR/web-sustainability-guidelines/#reduce-data-transfer-with-compression)
- Assessed pages: 100
- Average compression score: 0/100
- High urgency pages: 0
- Pages missing effective text compression: 0
- Aggregate potential compression savings: 327.20 KB

## WSG Efficient Solution Optimization Opportunities

- WSG reference: Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- Assessed pages: 100
- Average optimization score: 100/100
- High urgency pages: 100
- Aggregate potential byte savings: 22.32 MB
- Aggregate render-blocking reduction potential: 6293 ms
- Recurring optimization opportunities:
  - Remove unused JavaScript: appears on 100 page(s), est. 21.34 MB total savings
  - Eliminate render-blocking resources: appears on 18 page(s), est. 6293 ms unblock
  - Lazy-load offscreen images: appears on 4 page(s), est. 392.46 KB total savings
  - Right-size images for viewport: appears on 4 page(s), est. 187.16 KB total savings
  - Remove unused CSS: appears on 2 page(s), est. 96.32 KB total savings

## WSG Offline Access and Caching Support

- WSG reference: Optimize caching and support offline access (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-caching-and-support-offline-access)
- Assessed pages: 100
- Average offline support score: 91/100
- High urgency pages: 100
- Pages without service worker support: 100
- Pages without offline support: 100
- Pages with weak cache TTL signals: 5
- Recurring offline/caching opportunities:
  - Add service worker support: appears on 100 page(s), urgency HIGH
  - Ensure critical routes work offline: appears on 100 page(s), urgency HIGH
  - Improve web app manifest support: appears on 100 page(s), urgency MEDIUM
  - Support offline start URL behavior: appears on 100 page(s), urgency MEDIUM
  - Strengthen static asset cache TTL: appears on 5 page(s), urgency MEDIUM

## WSG Latest Stable Language Version

- WSG reference: Use the latest stable language version (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-latest-stable-language-version)
- Assessed pages: 100
- Average language-version score: 0/100
- High urgency pages: 0
- Pages exposing runtime/language version signals: 100
- Pages with outdated runtime/language signals: 0

## WSG Media Sustainability Hints

- WSG reference: Optimize media to reduce resource use (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)
- Assessed pages: 100
- Average media hints score: 26/100
- High urgency pages: 0
- Pages with autoplay media: 0
- Pages with unmuted autoplay: 0
- Pages without dark mode support: 100
- Pages with lazy loading gap (< 50% of images lazy): 44

## WSG Success Criteria & Best Practices

- Assessed pages: 100
- Average WSG compliance score: 70/100

### [MEDIUM] [SCRIPT] Incomplete media lazy loading
Only 8/10 images use loading="lazy". Global lazy loading reduces initial data transfer and energy consumption.
- Recurs on 100 page(s).

**Best Practice Example:**
```javascript
<picture> 
  <source type="image/avif" srcset="image.avif">
  <source type="image/webp" srcset="image.webp">
  <img width="100px" height="100px" src="image.jpg" alt="" loading="lazy"/>
</picture>
```
- [WSG Guideline 11](https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)

### [MEDIUM] [SCRIPT] Multiple tracking scripts detected
Found 3 commercial tracking scripts. Consider lightweight, privacy-focused alternatives like Plausible or Fathom to reduce JS weight and energy footprint.
- Recurs on 100 page(s).

**Best Practice Example:**
```javascript
// Implementation details in documentation
```
- [WSG Guideline 7](https://www.w3.org/TR/web-sustainability-guidelines/#avoid-being-manipulative-or-deceptive)

### [INVESTIGATE] [HUMAN] Review User Journey Efficiency
Have a human walk through the main user journeys and verify they require the fewest steps possible. Unnecessary steps waste user time and device energy. Look for redundant confirmations, forced account creation, and non-essential interstitials.
- Recurs on 100 page(s).
- [WSG 2.4 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#minimize-non-essential-content-interactivity-or-journeys)

### [INVESTIGATE] [HUMAN] Check for Engagement Traps
Manually review the page for patterns that artificially prolong engagement: infinite scroll, autoplay carousels, sticky overlays, and notification permission prompts. These waste user attention and device energy.
- Recurs on 100 page(s).
- [WSG 2.6 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#design-to-assist-and-not-to-distract)

### [INVESTIGATE] [HUMAN] Audit for Deceptive Design Patterns
Have a human identify dark patterns: misleading consent dialogs, hidden unsubscribe links, forced continuity, and bait-and-switch flows. Deceptive patterns waste user time and undermine trust.
- Recurs on 100 page(s).
- [WSG 2.7 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#avoid-being-manipulative-or-deceptive)

### [INVESTIGATE] [HUMAN] Verify Accessible Alternatives for All Media
Manually check that every video has captions, every audio file has a transcript, every image has meaningful alt text, and every PDF has an accessible HTML alternative. Alternatives let assistive technology users avoid re-downloading heavy formats.
- Recurs on 100 page(s).
- [WSG 2.14 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#offer-suitable-alternatives-for-every-format-used)

### [INVESTIGATE] [HUMAN] Confirm User Research Was Conducted
Verify that genuine user research or usability testing has informed the design. Research-driven design reduces wasted iterations, removes unnecessary features, and ensures the product meets real needs efficiently.
- Recurs on 100 page(s).
- [WSG 2.18 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#involve-users-early-in-the-project)

### [INVESTIGATE] [AI] Review Content Conciseness
Use a Large Language Model (e.g. locally or via API) to evaluate page text for conciseness and clarity. Removing superfluous text reduces payload, reading time, and inference energy for search engines indexing this content.
- Recurs on 100 page(s).
- [WSG 2.10 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#provide-clear-inclusive-content-with-purpose)

### [INVESTIGATE] [HUMAN] Verify Error Pages and Redirects Are Configured
Have a human check that custom 404 and 500 error pages exist and that there are no redirect chains longer than one hop. Broken links force wasted round-trips. Redirect chains multiply transfer costs.
- Recurs on 100 page(s).
- [WSG 4.4 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#setup-necessary-error-pages-and-redirection-links)

### [INVESTIGATE] [HUMAN] Review CDN Usage and Geographic Distribution
Confirm that static assets are served from a CDN and that the CDN edge nodes are geographically close to the primary audience. CDN misuse—or absence—increases last-mile transfer distance and the associated energy cost of data delivery.
- Recurs on 100 page(s).
- [WSG 4.10 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#use-content-delivery-networks-cdns-appropriately)

### [INVESTIGATE] [HUMAN] Confirm a Sustainability Advocate Is Assigned
Verify that someone on the team has explicit responsibility for web sustainability. Without a designated advocate, sustainability improvements tend to be deprioritized and never reach the backlog.
- Recurs on 100 page(s).
- [WSG 5.2 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#assign-a-sustainability-advocate)

### [INVESTIGATE] [HUMAN] Check for a Public Sustainability Statement
Look for a publicly accessible sustainability statement, disclosure page, or environmental policy. Mandatory disclosure requirements are growing globally and transparency builds user trust. The statement should include measurable targets and dates.
- Recurs on 100 page(s).
- [WSG 5.8 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#support-mandatory-disclosures-and-reporting)

### [MEDIUM] [SCRIPT] Missing explicit navigation structure
No <nav> or role="navigation" tags found. Proper wayfinding helps users find content efficiently and reduces unnecessary page loads.
- Recurs on 1 page(s).
- [WSG 2.5 Reference](https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-navigation-and-wayfinding-are-well-structured)

## WSG Third-Party JavaScript Assessment

- WSG reference: Give third parties the same priority as first parties during assessment (https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment)
- Average third-party JS risk score: 63/100
- Pages with high urgency: 100
- Distinct third-party script providers: 7

### Top Third-Party Script Providers

- www.googletagmanager.com: GREEN (Google Cloud); on 100 page(s), 300 request(s), 41.20 MB
- alert.cdt.ca.gov: NOT GREEN; on 99 page(s), 99 request(s), 27.82 KB
- cdn.cdt.ca.gov: NOT GREEN; on 2 page(s), 2 request(s), 60.44 KB
- translate.googleapis.com: GREEN (Google Cloud); on 1 page(s), 1 request(s), 118.50 KB
- tableau.cnra.ca.gov: NOT GREEN; on 1 page(s), 1 request(s), 59.65 KB
- translate.google.com: GREEN (Google Cloud); on 1 page(s), 1 request(s), 27.71 KB
- translate-pa.googleapis.com: GREEN (Google Cloud); on 1 page(s), 1 request(s), 3.18 KB

## Cross-Page Hosting Risk (Non-Green Providers)

- Focus: recurring external CSS/JS providers with non-green or unknown hosting status.

### Recurring Non-Green Providers

- alert.cdt.ca.gov: on 99 page(s), 99 request(s), 27.82 KB total; types script
- cdn.cdt.ca.gov: on 2 page(s), 4 request(s), 183.80 KB total; types script, stylesheet

## Green Hosting Checks

- Source: https://www.thegreenwebfoundation.org/tools/green-web-dataset/
- Submitted URL hosts checked: 100
- Submitted URL hosts on green energy: 0
- Submitted URL hosts not confirmed green: 100
- Submitted URL hosts unknown: 0
- External CSS/JS origins checked: 9
- External CSS/JS origins on green energy: 6
- External CSS/JS origins not confirmed green: 3
- External CSS/JS origins unknown: 0

## WSG SC 3.1 Budget Guidance

- WSG reference: Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- Sustainable Web Design benchmark: https://sustainablewebdesign.org/digital-carbon-ratings/
- Current transfer rating: B
- Current CO2 rating: D
- Recommended budget target: rating B
- Budget max transfer/page: 975.85 KB
- Budget max CO2/page: 0.1450 g
- Transfer reduction needed: none (already within target budget)
- CO2 reduction needed: 0.1200 g (45.3%)
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

- This same heavy script pattern appears on 100 pages. Fix it once in the shared template, CMS block, or design system component to reduce load across the whole site.
- These 1 script bundles are recurring modularization targets. Move the fix to the shared bundle or component boundary so every affected page gets lighter at once.
- These 3 modularization targets recur across multiple pages. Centralize the fix at the component or bundle level instead of treating each page separately.
- Heavy assets from www.googletagmanager.com recur across 100 pages. Review whether that dependency should be deferred, optimized, or loaded conditionally.

### Recurring Heavy Assets

- script assets from www.googletagmanager.com/gtag appears on 100 pages (29.17 MB total)
- script assets from www.googletagmanager.com/gtm.js appears on 100 pages (12.03 MB total)
- font assets from www.ca.gov/fonts appears on 98 pages (8.31 MB total)
- font assets from cdn.cdt.ca.gov/cdt appears on 2 pages (180.34 KB total)
- stylesheet assets from cdn.cdt.ca.gov/cdt appears on 2 pages (123.37 KB total)

### Recurring Modularization Targets

- Split JavaScript by route or interaction affects 100 pages (est. 21.34 MB aggregate savings)
- Modularize heavy script asset from www.googletagmanager.com affects 100 pages (est. 14.91 MB aggregate savings)
- Defer non-critical UI modules until after first render affects 18 pages
- Lazy-load offscreen images and media galleries affects 3 pages (est. 377.23 KB aggregate savings)

### Recurring Heavy Origins

- www.googletagmanager.com is a recurring heavy source on 100 pages (41.20 MB total)
- www.ca.gov is a recurring heavy source on 98 pages (8.45 MB total)
- cdn.cdt.ca.gov is a recurring heavy source on 2 pages (303.71 KB total)

## Site-Wide Guidance

- This scan appears to target a single site. Shared recommendations below should typically be fixed once at platform/template level.

### https://www.ca.gov
- Sampled pages: 100
- Shared recommendations:
  - [MEDIUM] Add sitemap.xml at site origin
    - sitemap.xml is missing for all sampled pages on https://www.ca.gov.
  - [MEDIUM] Enable Strict-Transport-Security site-wide
    - HSTS is missing across all sampled HTTPS pages on https://www.ca.gov.
  - [HIGH] Introduce service worker support
    - No sampled pages on https://www.ca.gov indicate service worker support for offline resilience.
  - [HIGH] Support offline fallback behavior
    - Offline page behavior was not detected across sampled pages on https://www.ca.gov.
  - [MEDIUM] Fix recurring optimization bloat at shared layer
    - Remove unused JavaScript recurs across 100 pages on https://www.ca.gov (est. 21.34 MB aggregate savings).
  - [HIGH] Prioritize recurring offline/caching improvements
    - Add service worker support is needed across 100 pages on https://www.ca.gov.
- Recurring offline/caching opportunities:
  - Add service worker support: 100 page(s), urgency HIGH
  - Ensure critical routes work offline: 100 page(s), urgency HIGH
  - Improve web app manifest support: 100 page(s), urgency MEDIUM
  - Support offline start URL behavior: 100 page(s), urgency MEDIUM
  - Strengthen static asset cache TTL: 5 page(s), urgency MEDIUM
- Recurring optimization opportunities:
  - Remove unused JavaScript: 100 page(s), est. 21.34 MB total savings
  - Eliminate render-blocking resources: 18 page(s), est. 6293 ms unblock
  - Lazy-load offscreen images: 4 page(s), est. 392.46 KB total savings
  - Right-size images for viewport: 4 page(s), est. 187.16 KB total savings
  - Remove unused CSS: 2 page(s), est. 96.32 KB total savings

## Page-Specific Guidance

- Use this section for page-level exceptions after site-wide/platform fixes are planned.

### https://www.ca.gov
- https://ca.gov/immigration/
  - Combined urgency: HIGH
  - Compression score: 33/100, optimization score: 100/100, offline score: 90/100, dependency score: 2/100, language score: 0/100, security score: 31/100, expected-files score: 30/100
  - [HIGH] Use modern image compression formats
  - [MEDIUM] Improve image encoding quality/size
  - [HIGH] Serve images in next-gen formats
- https://ca.gov/LAfires/
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 90/100, dependency score: 2/100, language score: 0/100, security score: 59/100, expected-files score: 30/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [MEDIUM] Remove unused CSS
- https://ca.gov/gasfacts/
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 100/100, dependency score: 4/100, language score: 0/100, security score: 33/100, expected-files score: 30/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [HIGH] Eliminate render-blocking resources
- https://ca.gov/about-california/
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 90/100, dependency score: 2/100, language score: 0/100, security score: 31/100, expected-files score: 30/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [MEDIUM] Lazy-load offscreen images
- https://ca.gov/support/maternal-health-resources.html
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 90/100, dependency score: 2/100, language score: 0/100, security score: 31/100, expected-files score: 30/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [HIGH] Add service worker support
- https://ca.gov/services/all/?q=vehicle+
  - Combined urgency: HIGH
  - Compression score: 0/100, optimization score: 100/100, offline score: 100/100, dependency score: 2/100, language score: 0/100, security score: 31/100, expected-files score: 30/100
  - [LOW] No major compression opportunity detected
  - [HIGH] Remove unused JavaScript
  - [HIGH] Add service worker support

## Priority Improvements

### https://ca.gov/
- Performance: 92/100
- Transfer: 663.65 KB
- CO2 estimate: 0.2603 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 41/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 216.79 KB (32.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 216.79 KB savings)
- Heavy initial-load requests: 4 (509.16 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 216.79 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.70 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.33 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 216.79 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 216.79 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.70 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 42 small targets on mobile and 36 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 216.79 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 2.8 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/translate/
- Performance: 87/100
- Transfer: 772.59 KB
- CO2 estimate: 0.3031 g
- Page host green energy status: NOT GREEN
- Redundancy score: 22/100
- Redundancy urgency: MEDIUM
- Modularization score: 46/100
- Modularization urgency: MEDIUM
- Dead-code score: 18/100
- Dead-code urgency: HIGH
- Non-critical resources score: 12/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 33/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 4/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 72/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 310.95 KB (40.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 310.95 KB savings)
- Heavy initial-load requests: 5 (627.06 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 310.95 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT translate.googleapis.com: GREEN (Google Cloud); 1 request(s), 118.50 KB
  - SCRIPT translate.google.com: GREEN (Google Cloud); 1 request(s), 27.71 KB
  - STYLESHEET www.gstatic.com: GREEN (Google Cloud); 1 request(s), 4.09 KB
  - SCRIPT translate-pa.googleapis.com: GREEN (Google Cloud); 1 request(s), 3.18 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 5 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 310.95 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 310.95 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy script from translate.googleapis.com (est. 118.50 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 29 small targets on mobile and 28 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
  - [MEDIUM] Add SRI to external scripts
    - 2 external script tag(s) are missing integrity attributes.
- Dependency maintenance recommendations:
  - [MEDIUM] Add integrity attributes for external dependencies
    - 2 external script dependency URL(s) are missing SRI integrity attributes.
- Language/runtime version recommendations:
  - [LOW] No obvious outdated runtime version disclosed
    - No clearly outdated runtime version signals were exposed in sampled HTTP headers. Verify language/runtime versions in source and CI since backend versions are not always externally visible.
- Expected-files recommendations:
  - [LOW] Add beneficial discoverability and maintenance files
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 310.95 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 311 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/services/
- Performance: 83/100
- Transfer: 612.71 KB
- CO2 estimate: 0.2404 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.46 KB (35.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.46 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.46 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.46 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.46 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 44 small targets on mobile and 36 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.46 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/
- Performance: 84/100
- Transfer: 613.40 KB
- CO2 estimate: 0.2406 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.26 KB (35.6% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.26 KB savings)
- Heavy initial-load requests: 4 (508.55 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.26 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.26 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.26 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 30 small targets on mobile and 29 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.26 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/about-california/
- Performance: 92/100
- Transfer: 840.42 KB
- CO2 estimate: 0.3297 g
- Page host green energy status: NOT GREEN
- Redundancy score: 14/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 12/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 14/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 46/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.21 KB (26.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.21 KB savings)
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Lazy-load offscreen images and media galleries (est. 140.46 KB)
    - Load imagery only when it enters the viewport or when a user opens the relevant section.
  - [HIGH] Split JavaScript by route or interaction (est. 218.21 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.61 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.78 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.21 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [MEDIUM] Lazy-load offscreen images (est. 140.46 KB deferrable)
    - Load below-the-fold images only when they approach the viewport.
  - [HIGH] Defer non-critical JavaScript (est. 218.21 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.61 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 49 small targets on mobile and 39 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.21 KB.
  - [MEDIUM] Lazy-load offscreen images
    - Defer below-the-fold imagery until it is likely to be viewed. Estimated byte savings: 140.46 KB.
  - [LOW] Right-size images for viewport
    - Avoid sending larger images than the rendered size needs. Estimated byte savings: 18.17 KB.
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
  - [HIGH] Add loading="lazy" to images
    - 14 of 15 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Defer offscreen images
  - Current value: Est savings of 140 KiB
  - WSG: 3 Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/support/
- Performance: 84/100
- Transfer: 642.15 KB
- CO2 estimate: 0.2519 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 16/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.92 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.92 KB savings)
- Heavy initial-load requests: 4 (508.56 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.92 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.92 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.92 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 616 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 49 small targets on mobile and 49 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.92 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 616 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 620 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/topics/disaster-recovery/
- Performance: 64/100
- Transfer: 679.71 KB
- CO2 estimate: 0.2666 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 40/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.33 KB (32.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.33 KB savings)
- Heavy initial-load requests: 4 (509.07 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.33 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.70 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.24 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.33 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.33 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 76 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.70 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 70 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.33 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 76 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 80 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)

### https://ca.gov/departments/220/services/1194/
- Performance: 85/100
- Transfer: 642.49 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 16/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.04 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.04 KB savings)
- Heavy initial-load requests: 4 (508.56 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.04 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.04 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.04 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 616 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 62 small targets on mobile and 61 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.04 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 616 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 620 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/departments/176/services/52/
- Performance: 84/100
- Transfer: 644.19 KB
- CO2 estimate: 0.2527 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 19/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 866 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 51 small targets on mobile and 53 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 866 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 870 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/departments/236/services/33/
- Performance: 89/100
- Transfer: 642.13 KB
- CO2 estimate: 0.2519 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.66 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.66 KB savings)
- Heavy initial-load requests: 4 (508.55 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.66 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.61 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.66 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.66 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.61 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 46 small targets on mobile and 44 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.66 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/193/services/15/
- Performance: 90/100
- Transfer: 644.15 KB
- CO2 estimate: 0.2527 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.09 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.09 KB savings)
- Heavy initial-load requests: 4 (508.56 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.09 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.09 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.09 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 42 small targets on mobile and 42 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.09 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/287/services/25/
- Performance: 89/100
- Transfer: 654.58 KB
- CO2 estimate: 0.2568 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.04 KB (33.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.04 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.04 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.04 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.04 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 41 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.04 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/287/services/26/
- Performance: 85/100
- Transfer: 644.14 KB
- CO2 estimate: 0.2527 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 16/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
- Heavy initial-load requests: 4 (508.54 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.61 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.78 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 616 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.61 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 41 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 616 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 620 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/topics/dmv-auto/
- Performance: 65/100
- Transfer: 719.64 KB
- CO2 estimate: 0.2823 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.08 KB (30.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.08 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.08 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.08 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.08 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 75 small targets on mobile and 76 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.08 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.5 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/personal-records/
- Performance: 66/100
- Transfer: 709.67 KB
- CO2 estimate: 0.2784 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 39/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.08 KB (30.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.08 KB savings)
- Heavy initial-load requests: 4 (509.61 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.08 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.94 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.78 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.08 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.08 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.94 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 73 small targets on mobile and 74 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.08 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/businesses/
- Performance: 66/100
- Transfer: 709.13 KB
- CO2 estimate: 0.2782 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 39/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.26 KB (30.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.26 KB savings)
- Heavy initial-load requests: 4 (509.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.26 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.94 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.78 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.26 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.26 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.94 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 72 small targets on mobile and 80 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.26 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/jobs/
- Performance: 65/100
- Transfer: 694.38 KB
- CO2 estimate: 0.2724 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 40/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.69 KB (31.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.69 KB savings)
- Heavy initial-load requests: 4 (508.61 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.69 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.61 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.78 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.69 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.69 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.61 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 74 small targets on mobile and 77 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.69 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/assistance/
- Performance: 85/100
- Transfer: 709.28 KB
- CO2 estimate: 0.2782 g
- Page host green energy status: NOT GREEN
- Redundancy score: 37/100
- Redundancy urgency: MEDIUM
- Modularization score: 39/100
- Modularization urgency: MEDIUM
- Dead-code score: 19/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (30.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.55 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 108 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 99 small targets on mobile and 110 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 108 ms.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 110 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [HIGH] Avoid an excessive DOM size
  - Current value: 1,019 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.6 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)

### https://ca.gov/topics/taxes/
- Performance: 75/100
- Transfer: 722.25 KB
- CO2 estimate: 0.2833 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.17 KB (30.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.17 KB savings)
- Heavy initial-load requests: 4 (508.56 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.17 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.17 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.17 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 60 small targets on mobile and 60 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.17 KB.
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
- [HIGH] Largest Contentful Paint
  - Current value: 6.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/
- Performance: 83/100
- Transfer: 612.49 KB
- CO2 estimate: 0.2403 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.27 KB (35.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.27 KB savings)
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.27 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.80 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.27 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.27 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 45 small targets on mobile and 37 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.27 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/about/about-this-website/
- Performance: 89/100
- Transfer: 613.07 KB
- CO2 estimate: 0.2405 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.66 KB (35.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.66 KB savings)
- Heavy initial-load requests: 4 (508.55 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.66 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.61 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.79 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.66 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.66 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.61 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 29 small targets on mobile and 29 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.66 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/support/technical-help/
- Performance: 89/100
- Transfer: 613.56 KB
- CO2 estimate: 0.2407 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.65 KB (35.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.65 KB savings)
- Heavy initial-load requests: 4 (508.57 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.65 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.65 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.65 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.75 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 31 small targets on mobile and 30 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.65 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/contact/
- Performance: 90/100
- Transfer: 613.11 KB
- CO2 estimate: 0.2405 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.25 KB (35.6% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.25 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.25 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.25 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.25 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 33 small targets on mobile and 32 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.25 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/website-accessibility-certification.html
- Performance: 89/100
- Transfer: 614.44 KB
- CO2 estimate: 0.2410 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 219.32 KB (35.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 219.32 KB savings)
- Heavy initial-load requests: 4 (509.57 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 219.32 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.95 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.81 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 219.32 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 219.32 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.95 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 33 small targets on mobile and 33 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 219.32 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/legal/conditions-of-use/
- Performance: 90/100
- Transfer: 617.94 KB
- CO2 estimate: 0.2424 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.29 KB (35.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.29 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.29 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.29 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.29 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 43 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.29 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/legal/privacy-policy/
- Performance: 89/100
- Transfer: 616.56 KB
- CO2 estimate: 0.2419 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.29 KB (35.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.29 KB savings)
- Heavy initial-load requests: 4 (508.66 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.29 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.29 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.29 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 31 small targets on mobile and 31 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.29 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/legal/accessibility/
- Performance: 90/100
- Transfer: 613.40 KB
- CO2 estimate: 0.2406 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.27 KB (35.6% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.27 KB savings)
- Heavy initial-load requests: 4 (508.57 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.27 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.27 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.27 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.75 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 38 small targets on mobile and 43 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.27 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/about/sitemap/
- Performance: 89/100
- Transfer: 613.42 KB
- CO2 estimate: 0.2406 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.02 KB (35.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.02 KB savings)
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.02 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.02 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.02 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 58 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.02 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/services/all/
- Performance: 72/100
- Transfer: 768.21 KB
- CO2 estimate: 0.3013 g
- Page host green energy status: NOT GREEN
- Redundancy score: 36/100
- Redundancy urgency: MEDIUM
- Modularization score: 36/100
- Modularization urgency: MEDIUM
- Dead-code score: 18/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.03 KB (28.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.03 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.03 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.03 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.03 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 642 small targets on mobile and 774 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.03 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.8 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/services/list/
- Performance: 78/100
- Transfer: 677.39 KB
- CO2 estimate: 0.2657 g
- Page host green energy status: NOT GREEN
- Redundancy score: 28/100
- Redundancy urgency: MEDIUM
- Modularization score: 40/100
- Modularization urgency: MEDIUM
- Dead-code score: 17/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.07 KB (32.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.07 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.59 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.07 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.07 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.07 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 271 small targets on mobile and 302 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.07 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.6 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 900 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/departments/178/services/60/
- Performance: 87/100
- Transfer: 644.28 KB
- CO2 estimate: 0.2527 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.79 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.79 KB savings)
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.79 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.79 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.79 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 56 small targets on mobile and 56 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.79 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/217/services/37/
- Performance: 92/100
- Transfer: 645.09 KB
- CO2 estimate: 0.2531 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.06 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.06 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.06 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 289.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.06 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.06 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 50 small targets on mobile and 50 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.06 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 2.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/155/services/42/
- Performance: 88/100
- Transfer: 644.33 KB
- CO2 estimate: 0.2528 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.46 KB (33.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.46 KB savings)
- Heavy initial-load requests: 4 (508.59 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.46 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.46 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.46 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 58 small targets on mobile and 63 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.46 KB.
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
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/education/
- Performance: 66/100
- Transfer: 716.09 KB
- CO2 estimate: 0.2809 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 39/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.73 KB (30.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.73 KB savings)
- Heavy initial-load requests: 4 (509.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.73 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.95 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.81 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.73 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.73 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.95 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 58 small targets on mobile and 65 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.73 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/health/
- Performance: 64/100
- Transfer: 721.84 KB
- CO2 estimate: 0.2832 g
- Page host green energy status: NOT GREEN
- Redundancy score: 27/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.71 KB (30.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.71 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.71 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.71 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.71 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 229 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 83 small targets on mobile and 92 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.71 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 229 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 230 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.5 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 822 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/topics/housing/
- Performance: 66/100
- Transfer: 716.82 KB
- CO2 estimate: 0.2812 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.67 KB (30.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.67 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.67 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.67 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.67 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 56 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.67 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/topics/immigration/
- Performance: 66/100
- Transfer: 734.98 KB
- CO2 estimate: 0.2883 g
- Page host green energy status: NOT GREEN
- Redundancy score: 16/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 13/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.09 KB (29.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.09 KB savings)
- Heavy initial-load requests: 4 (508.66 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.09 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.09 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.09 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 86 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 75 small targets on mobile and 84 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.09 KB.
  - [LOW] Right-size images for viewport
    - Avoid sending larger images than the rendered size needs. Estimated byte savings: 15.34 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 86 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 90 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/topics/safety/
- Performance: 64/100
- Transfer: 719.06 KB
- CO2 estimate: 0.2821 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.71 KB (30.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.71 KB savings)
- Heavy initial-load requests: 4 (508.66 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.71 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.71 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.71 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 82 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 77 small targets on mobile and 82 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.71 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 82 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 80 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/topics/laws-info/
- Performance: 66/100
- Transfer: 706.58 KB
- CO2 estimate: 0.2772 g
- Page host green energy status: NOT GREEN
- Redundancy score: 17/100
- Redundancy urgency: MEDIUM
- Modularization score: 39/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.71 KB (31.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.71 KB savings)
- Heavy initial-load requests: 4 (509.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.71 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.94 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.81 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.71 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.71 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 190 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.94 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 80 small targets on mobile and 90 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.71 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 190 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 190 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/topics/recreation/
- Performance: 66/100
- Transfer: 736.84 KB
- CO2 estimate: 0.2890 g
- Page host green energy status: NOT GREEN
- Redundancy score: 16/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 13/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.70 KB (29.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.70 KB savings)
- Heavy initial-load requests: 4 (508.66 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.70 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.70 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.70 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 47 small targets on mobile and 46 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.70 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/all/
- Performance: 80/100
- Transfer: 820.91 KB
- CO2 estimate: 0.3220 g
- Page host green energy status: NOT GREEN
- Redundancy score: 25/100
- Redundancy urgency: MEDIUM
- Modularization score: 34/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 8/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.06 KB (26.6% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.06 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.06 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.06 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.06 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 299 small targets on mobile and 568 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.06 KB.
  - [LOW] Right-size images for viewport
    - Avoid sending larger images than the rendered size needs. Estimated byte savings: 26.10 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.8 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 2,933 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/departments/list/
- Performance: 84/100
- Transfer: 678.08 KB
- CO2 estimate: 0.2660 g
- Page host green energy status: NOT GREEN
- Redundancy score: 28/100
- Redundancy urgency: MEDIUM
- Modularization score: 40/100
- Modularization urgency: MEDIUM
- Dead-code score: 17/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.67 KB (32.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.67 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.67 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.67 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.67 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 212 small targets on mobile and 276 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.67 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 846 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/departments/220/
- Performance: 90/100
- Transfer: 649.21 KB
- CO2 estimate: 0.2547 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.06 KB (33.6% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.06 KB savings)
- Heavy initial-load requests: 4 (508.59 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.06 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.06 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.06 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 52 small targets on mobile and 55 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.06 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/
- Performance: 89/100
- Transfer: 646.61 KB
- CO2 estimate: 0.2536 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.07 KB (33.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.07 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.07 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.07 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.07 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 47 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.07 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/236/
- Performance: 90/100
- Transfer: 656.26 KB
- CO2 estimate: 0.2574 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.88 KB (33.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.88 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.88 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.88 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.88 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 41 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.88 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/229/
- Performance: 90/100
- Transfer: 648.51 KB
- CO2 estimate: 0.2544 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 219.10 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 219.10 KB savings)
- Heavy initial-load requests: 4 (509.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 219.10 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.95 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.81 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 219.10 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 219.10 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.95 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 46 small targets on mobile and 47 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 219.10 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/287/
- Performance: 89/100
- Transfer: 654.93 KB
- CO2 estimate: 0.2569 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (33.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 42 small targets on mobile and 45 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/215/
- Performance: 90/100
- Transfer: 660.19 KB
- CO2 estimate: 0.2590 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 41/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.08 KB (33.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.08 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.08 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.08 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.08 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 38 small targets on mobile and 38 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.08 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/175/
- Performance: 88/100
- Transfer: 656.82 KB
- CO2 estimate: 0.2577 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.43 KB (33.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.43 KB savings)
- Heavy initial-load requests: 4 (508.60 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.43 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.43 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.43 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 38 small targets on mobile and 37 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.43 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/171/
- Performance: 90/100
- Transfer: 652.39 KB
- CO2 estimate: 0.2559 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.74 KB (33.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.74 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.74 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.74 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.74 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 36 small targets on mobile and 37 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.74 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/178/
- Performance: 89/100
- Transfer: 652.23 KB
- CO2 estimate: 0.2559 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.47 KB (33.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.47 KB savings)
- Heavy initial-load requests: 4 (508.59 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.47 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.47 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.47 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 49 small targets on mobile and 51 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.47 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/299/
- Performance: 90/100
- Transfer: 662.18 KB
- CO2 estimate: 0.2598 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 225.96 KB (34.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 225.96 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 225.96 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 225.96 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 225.96 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 37 small targets on mobile and 37 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 225.96 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 226 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/89/
- Performance: 90/100
- Transfer: 649.55 KB
- CO2 estimate: 0.2548 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.44 KB (33.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.44 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.44 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.44 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.44 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 40 small targets on mobile and 42 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.44 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/217/
- Performance: 86/100
- Transfer: 655.83 KB
- CO2 estimate: 0.2573 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 65/100
- Layout adaptation urgency: HIGH
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 35/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.04 KB (33.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.04 KB savings)
- Heavy initial-load requests: 4 (509.56 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.04 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.94 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.80 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.04 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.04 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 91 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.94 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Prevent horizontal overflow across breakpoints
    - Use fluid widths, max-width constraints, and avoid fixed pixel containers that exceed mobile or tablet viewports.
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 58 small targets on mobile and 65 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.04 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 91 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 3 of 4 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 90 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)

### https://ca.gov/LAfires/
- Performance: 91/100
- Transfer: 674.06 KB
- CO2 estimate: 0.2644 g
- Page host green energy status: NOT GREEN
- Redundancy score: 20/100
- Redundancy urgency: MEDIUM
- Modularization score: 45/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 18/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 59/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 40/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 248.04 KB (36.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 215.64 KB savings)
  - [MEDIUM] Reduce unused css (est. 32.40 KB savings)
- Heavy initial-load requests: 5 (565.53 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 215.64 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - STYLESHEET cdn.cdt.ca.gov: NOT GREEN; 1 request(s), 56.83 KB
  - SCRIPT cdn.cdt.ca.gov: NOT GREEN; 1 request(s), 30.34 KB
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [MEDIUM] Remove unused CSS selectors and component styles (est. 32.40 KB savings)
    - Trim styles that never match rendered markup and split component CSS so only used styles are shipped.
  - [HIGH] Remove unused JavaScript and feature bundles (est. 215.64 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [MEDIUM] Lazy-load offscreen images (est. 15.22 KB deferrable)
    - Load below-the-fold images only when they approach the viewport.
  - [HIGH] Defer non-critical JavaScript (est. 215.64 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Inline critical CSS and defer remainder (est. 32.40 KB deferrable)
    - Ship only above-the-fold CSS in initial render path and defer non-critical styles.
  - [MEDIUM] Eliminate render-blocking resources (est. 664 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 42 small targets on mobile and 40 on tablet.
- Lightweight security recommendations:
  - [HIGH] Add a Content-Security-Policy header
    - Add an appropriate CSP to reduce script injection and resource loading risk.
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [MEDIUM] Set X-Content-Type-Options: nosniff
    - Prevent MIME type sniffing by adding the nosniff response header.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 215.64 KB.
  - [MEDIUM] Remove unused CSS
    - Trim unused selectors and split CSS so only needed styles are shipped. Estimated byte savings: 32.40 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 664 ms.
  - [LOW] Lazy-load offscreen images
    - Defer below-the-fold imagery until it is likely to be viewed. Estimated byte savings: 15.22 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 5 of 6 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 216 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Reduce unused CSS
  - Current value: Est savings of 32 KiB
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 660 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 2.8 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Defer offscreen images
  - Current value: Est savings of 15 KiB
  - WSG: 3 Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)

### https://ca.gov/gasfacts/
- Performance: 78/100
- Transfer: 877.65 KB
- CO2 estimate: 0.3443 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 14/100
- Dead-code urgency: HIGH
- Non-critical resources score: 24/100
- Non-critical resources urgency: HIGH
- Form validation score: 0/100
- Form validation urgency: LOW
- Metadata score: 5/100
- Metadata urgency: LOW
- Layout adaptation score: 23/100
- Layout adaptation urgency: LOW
- Lightweight security score: 33/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 4/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 100/100
- Offline support urgency: HIGH
- Media hints score: 50/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 84/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 281.82 KB (32.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.89 KB savings)
  - [MEDIUM] Reduce unused css (est. 63.93 KB savings)
- Heavy initial-load requests: 5 (580.42 KB total)
- On-demand modularization candidates:
  - [MEDIUM] Lazy-load offscreen images and media galleries (est. 40.90 KB)
    - Load imagery only when it enters the viewport or when a user opens the relevant section.
  - [HIGH] Split JavaScript by route or interaction (est. 217.89 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [HIGH] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 156.56 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 420.42 KB
  - STYLESHEET cdn.cdt.ca.gov: NOT GREEN; 1 request(s), 66.54 KB
  - SCRIPT tableau.cnra.ca.gov: NOT GREEN; 1 request(s), 59.65 KB
  - SCRIPT cdn.cdt.ca.gov: NOT GREEN; 1 request(s), 30.09 KB
  - STYLESHEET fonts.googleapis.com: GREEN (Google Cloud); 1 request(s), 999.00 B
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 4 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 3 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [MEDIUM] Remove unused CSS selectors and component styles (est. 63.93 KB savings)
    - Trim styles that never match rendered markup and split component CSS so only used styles are shipped.
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.89 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [MEDIUM] Lazy-load offscreen images (est. 40.90 KB deferrable)
    - Load below-the-fold images only when they approach the viewport.
  - [HIGH] Defer non-critical JavaScript (est. 217.89 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Inline critical CSS and defer remainder (est. 63.93 KB deferrable)
    - Ship only above-the-fold CSS in initial render path and defer non-critical styles.
  - [HIGH] Eliminate render-blocking resources (est. 1329 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 156.56 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [LOW] No major form validation risks detected
    - Continue testing form flows to ensure error handling remains clear across templates.
- Metadata recommendations:
  - [LOW] Add twitter:card metadata
    - Include twitter card metadata to improve cross-platform machine-readable previews.
- Layout adaptation recommendations:
  - [MEDIUM] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 8 small targets on mobile and 10 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
  - [MEDIUM] Add SRI to external scripts
    - 2 external script tag(s) are missing integrity attributes.
- Dependency maintenance recommendations:
  - [MEDIUM] Add integrity attributes for external dependencies
    - 2 external script dependency URL(s) are missing SRI integrity attributes.
- Language/runtime version recommendations:
  - [LOW] No obvious outdated runtime version disclosed
    - No clearly outdated runtime version signals were exposed in sampled HTTP headers. Verify language/runtime versions in source and CI since backend versions are not always externally visible.
- Expected-files recommendations:
  - [LOW] Add beneficial discoverability and maintenance files
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.89 KB.
  - [HIGH] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 1329 ms.
  - [MEDIUM] Right-size images for viewport
    - Avoid sending larger images than the rendered size needs. Estimated byte savings: 127.56 KB.
  - [MEDIUM] Remove unused CSS
    - Trim unused selectors and split CSS so only needed styles are shipped. Estimated byte savings: 63.93 KB.
  - [MEDIUM] Lazy-load offscreen images
    - Defer below-the-fold imagery until it is likely to be viewed. Estimated byte savings: 40.90 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
  - [MEDIUM] Strengthen static asset cache TTL
    - Improve long-lived cache headers for immutable static assets (estimated savings opportunity: 59.65 KB).
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
  - [MEDIUM] Add loading="lazy" to images
    - 5 of 5 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Largest Contentful Paint
  - Current value: 4.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Reduce unused CSS
  - Current value: Est savings of 64 KiB
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 1,330 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Defer offscreen images
  - Current value: Est savings of 41 KiB
  - WSG: 3 Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)

### https://ca.gov/immigration/
- Performance: 87/100
- Transfer: 981.85 KB
- CO2 estimate: 0.3852 g
- Page host green energy status: NOT GREEN
- Redundancy score: 12/100
- Redundancy urgency: MEDIUM
- Modularization score: 40/100
- Modularization urgency: MEDIUM
- Dead-code score: 10/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 14/100
- Non-critical resources urgency: HIGH
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 65/100
- Layout adaptation urgency: HIGH
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 33/100
- Compression urgency: MEDIUM
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 45/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.92 KB (22.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.92 KB savings)
- Heavy initial-load requests: 5 (651.96 KB total)
- On-demand modularization candidates:
  - [HIGH] Lazy-load offscreen images and media galleries (est. 195.88 KB)
    - Load imagery only when it enters the viewport or when a user opens the relevant section.
  - [HIGH] Split JavaScript by route or interaction (est. 217.92 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
  - [MEDIUM] Modularize heavy image asset from www.ca.gov (est. 143.31 KB)
    - Serve a smaller placeholder first and load this asset only when the user scrolls to or requests the component.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 289.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.92 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [MEDIUM] Lazy-load offscreen images (est. 195.88 KB deferrable)
    - Load below-the-fold images only when they approach the viewport.
  - [HIGH] Defer non-critical JavaScript (est. 217.92 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy image from www.ca.gov (est. 143.31 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Prevent horizontal overflow across breakpoints
    - Use fluid widths, max-width constraints, and avoid fixed pixel containers that exceed mobile or tablet viewports.
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 64 small targets on mobile and 69 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [HIGH] Use modern image compression formats
    - Prefer AVIF/WebP over legacy formats where possible to reduce transfer size. Estimated savings: 223.36 KB.
  - [MEDIUM] Improve image encoding quality/size
    - Re-encode oversized images and tune compression quality for significant byte savings. Estimated savings: 103.84 KB.
- Optimization recommendations:
  - [HIGH] Serve images in next-gen formats
    - Convert high-byte images to more efficient formats such as AVIF or WebP. Estimated byte savings: 223.36 KB.
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.92 KB.
  - [MEDIUM] Lazy-load offscreen images
    - Defer below-the-fold imagery until it is likely to be viewed. Estimated byte savings: 195.88 KB.
  - [MEDIUM] Compress oversized image assets
    - Re-encode large images to reduce transfer weight without visible quality loss. Estimated byte savings: 103.84 KB.
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
  - [HIGH] Add loading="lazy" to images
    - 11 of 12 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Serve images in next-gen formats
  - Current value: Est savings of 223 KiB
  - WSG: 11 Optimize media to reduce resource use (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)
- [HIGH] Defer offscreen images
  - Current value: Est savings of 196 KiB
  - WSG: 3 Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Efficiently encode images
  - Current value: Est savings of 104 KiB
  - WSG: 11 Optimize media to reduce resource use (https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/support/maternal-health-resources.html
- Performance: 88/100
- Transfer: 618.88 KB
- CO2 estimate: 0.2428 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 44/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 41/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.24 KB (35.3% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.24 KB savings)
- Heavy initial-load requests: 4 (508.58 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.24 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.24 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.24 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 41 small targets on mobile and 39 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.24 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 6 of 7 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/240/services/74/
- Performance: 89/100
- Transfer: 643.39 KB
- CO2 estimate: 0.2524 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.60 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.60 KB savings)
- Heavy initial-load requests: 4 (508.64 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.60 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.60 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.60 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.82 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 40 small targets on mobile and 40 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.60 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/259/services/49/
- Performance: 89/100
- Transfer: 644.56 KB
- CO2 estimate: 0.2528 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.44 KB (33.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.44 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.44 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.83 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.44 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.44 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 50 small targets on mobile and 49 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.44 KB.
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
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/47/
- Performance: 89/100
- Transfer: 644.06 KB
- CO2 estimate: 0.2526 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 219.08 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 219.08 KB savings)
- Heavy initial-load requests: 4 (509.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 219.08 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.95 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 219.08 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 219.08 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.95 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 64 small targets on mobile and 61 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 219.08 KB.
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
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/48/
- Performance: 89/100
- Transfer: 642.80 KB
- CO2 estimate: 0.2522 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
- Heavy initial-load requests: 4 (508.65 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.62 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.82 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.62 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 67 small targets on mobile and 65 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1202/
- Performance: 89/100
- Transfer: 643.82 KB
- CO2 estimate: 0.2526 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.61 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.61 KB savings)
- Heavy initial-load requests: 4 (508.67 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.61 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.84 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.61 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.61 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 56 small targets on mobile and 55 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.61 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1221/
- Performance: 88/100
- Transfer: 642.47 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 100/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.20 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.20 KB savings)
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.20 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.85 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.20 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.20 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 54 small targets on mobile and 53 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.20 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
  - [MEDIUM] Strengthen static asset cache TTL
    - Improve long-lived cache headers for immutable static assets (estimated savings opportunity: 15.00 B).
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1225/
- Performance: 88/100
- Transfer: 642.72 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.30 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.30 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.30 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.30 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.30 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 58 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.30 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/46/
- Performance: 89/100
- Transfer: 642.67 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.07 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.07 KB savings)
- Heavy initial-load requests: 4 (508.70 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.07 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.07 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.07 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 65 small targets on mobile and 67 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.07 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1197/
- Performance: 89/100
- Transfer: 643.68 KB
- CO2 estimate: 0.2525 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.08 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.08 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.08 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.08 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.08 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 56 small targets on mobile and 55 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.08 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1219/
- Performance: 88/100
- Transfer: 642.24 KB
- CO2 estimate: 0.2519 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.57 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.57 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.57 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.57 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.57 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 59 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.57 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1222/
- Performance: 91/100
- Transfer: 642.64 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 216.48 KB (33.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 216.48 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 216.48 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 216.48 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 216.48 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 55 small targets on mobile and 54 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 216.48 KB.
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
  - Current value: Est savings of 216 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1215/
- Performance: 89/100
- Transfer: 642.78 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.25 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.25 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.25 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.25 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.25 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 54 small targets on mobile and 53 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.25 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1121/
- Performance: 89/100
- Transfer: 643.75 KB
- CO2 estimate: 0.2525 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 219.33 KB (34.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 219.33 KB savings)
- Heavy initial-load requests: 4 (509.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 219.33 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.96 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.85 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 219.33 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 219.33 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.96 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 58 small targets on mobile and 57 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 219.33 KB.
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
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/43/
- Performance: 89/100
- Transfer: 642.62 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 100/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 216.58 KB (33.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 216.58 KB savings)
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 216.58 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 216.58 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 216.58 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 60 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 216.58 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
  - [MEDIUM] Strengthen static asset cache TTL
    - Improve long-lived cache headers for immutable static assets (estimated savings opportunity: 18.00 B).
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/44/
- Performance: 88/100
- Transfer: 642.32 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.34 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.34 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.34 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.34 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.34 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 62 small targets on mobile and 61 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.34 KB.
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
  - Current value: Est savings of 217 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/45/
- Performance: 89/100
- Transfer: 653.10 KB
- CO2 estimate: 0.2562 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.06 KB (33.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.06 KB savings)
- Heavy initial-load requests: 4 (508.70 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.06 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.06 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.06 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 62 small targets on mobile and 61 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.06 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1200/
- Performance: 89/100
- Transfer: 642.61 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.87 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.87 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.87 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.87 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.87 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 55 small targets on mobile and 54 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.87 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1211/
- Performance: 93/100
- Transfer: 643.24 KB
- CO2 estimate: 0.2523 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.65 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.65 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.65 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.65 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.65 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 54 small targets on mobile and 54 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.65 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 2.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1218/
- Performance: 89/100
- Transfer: 644.07 KB
- CO2 estimate: 0.2527 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.53 KB (33.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.53 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.53 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.53 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.53 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 56 small targets on mobile and 55 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.53 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1217/
- Performance: 89/100
- Transfer: 643.10 KB
- CO2 estimate: 0.2523 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.06 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.06 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.06 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.06 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.06 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 55 small targets on mobile and 54 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.06 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/220/services/1220/
- Performance: 90/100
- Transfer: 643.44 KB
- CO2 estimate: 0.2524 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 219.32 KB (34.1% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 219.32 KB savings)
- Heavy initial-load requests: 4 (509.61 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 219.32 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.96 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 422.85 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 219.32 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 219.32 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.96 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 53 small targets on mobile and 52 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 219.32 KB.
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
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/services/all/?q=car+
- Performance: 74/100
- Transfer: 768.33 KB
- CO2 estimate: 0.3014 g
- Page host green energy status: NOT GREEN
- Redundancy score: 25/100
- Redundancy urgency: MEDIUM
- Modularization score: 36/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 8/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.96 KB (27.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.96 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.96 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.96 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.96 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 62 small targets on mobile and 62 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.96 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.9 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=dmv+
- Performance: 73/100
- Transfer: 743.56 KB
- CO2 estimate: 0.2917 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.53 KB (28.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.53 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.53 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.53 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.53 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 44 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 136 small targets on mobile and 144 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.53 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 44 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 40 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.9 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=drive+
- Performance: 60/100
- Transfer: 768.26 KB
- CO2 estimate: 0.3014 g
- Page host green energy status: NOT GREEN
- Redundancy score: 25/100
- Redundancy urgency: MEDIUM
- Modularization score: 36/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 8/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.88 KB (27.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.88 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.88 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.88 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.88 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.82 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 59 small targets on mobile and 58 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.88 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.5 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=driver&
- Performance: 58/100
- Transfer: 751.73 KB
- CO2 estimate: 0.2949 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.97 KB (28.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.97 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.70 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.97 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.97 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.97 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 84 small targets on mobile and 86 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.97 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=id+
- Performance: 58/100
- Transfer: 726.94 KB
- CO2 estimate: 0.2852 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 38/100
- Modularization urgency: MEDIUM
- Dead-code score: 16/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.89 KB (29.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.89 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.89 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.89 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.89 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 81 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 123 small targets on mobile and 137 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.89 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 81 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 80 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=transportation+
- Performance: 75/100
- Transfer: 751.65 KB
- CO2 estimate: 0.2949 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.96 KB (28.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.96 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.96 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.96 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.96 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 64 small targets on mobile and 65 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.96 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=vehicle+
- Performance: 72/100
- Transfer: 751.89 KB
- CO2 estimate: 0.2949 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 8/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 100/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 212.13 KB (28.2% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 212.13 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.70 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 212.13 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 212.13 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 212.13 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.84 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 105 small targets on mobile and 109 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 212.13 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
  - [MEDIUM] Strengthen static asset cache TTL
    - Improve long-lived cache headers for immutable static assets (estimated savings opportunity: 95.00 B).
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 212 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.7 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=records+
- Performance: 72/100
- Transfer: 778.64 KB
- CO2 estimate: 0.3054 g
- Page host green energy status: NOT GREEN
- Redundancy score: 25/100
- Redundancy urgency: MEDIUM
- Modularization score: 36/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 8/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.53 KB (27.4% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.53 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.53 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.53 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.53 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 161 small targets on mobile and 177 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.53 KB.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 4.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/departments/176/services/53/
- Performance: 89/100
- Transfer: 644.83 KB
- CO2 estimate: 0.2529 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.45 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.45 KB savings)
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.45 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.45 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.45 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 50 small targets on mobile and 52 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.45 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/51/
- Performance: 84/100
- Transfer: 643.91 KB
- CO2 estimate: 0.2526 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 11/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.05 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.05 KB savings)
- Heavy initial-load requests: 4 (508.62 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.05 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.05 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.05 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 99 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 51 small targets on mobile and 52 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.05 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 99 ms.
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
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 100 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.4 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)

### https://ca.gov/departments/176/services/1297/
- Performance: 89/100
- Transfer: 642.41 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.65 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.65 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.65 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.65 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.65 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 48 small targets on mobile and 48 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.65 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1298/
- Performance: 90/100
- Transfer: 642.37 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.28 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.28 KB savings)
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.28 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.28 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.28 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 47 small targets on mobile and 47 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.28 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.1 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1295/
- Performance: 90/100
- Transfer: 642.61 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 18/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 100/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 215.28 KB (33.5% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 215.28 KB savings)
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 215.28 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 215.28 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 215.28 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 51 small targets on mobile and 51 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 215.28 KB.
- Offline/caching recommendations:
  - [HIGH] Add service worker support
    - Register a service worker to support resilient caching and offline behavior for key routes.
  - [HIGH] Ensure critical routes work offline
    - Provide an offline fallback strategy for key pages and shell assets.
  - [MEDIUM] Improve web app manifest support
    - Complete manifest fields so clients can install and run an app-like experience.
  - [MEDIUM] Support offline start URL behavior
    - Ensure start URL and shell routing can load in disconnected conditions.
  - [MEDIUM] Strengthen static asset cache TTL
    - Improve long-lived cache headers for immutable static assets (estimated savings opportunity: 95.00 B).
- Media sustainability recommendations:
  - [MEDIUM] Add dark mode support
    - No prefers-color-scheme: dark media query or color-scheme meta tag was found. Dark mode reduces energy use on OLED screens and improves user choice.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 215 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1292/
- Performance: 89/100
- Transfer: 642.42 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.62 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.62 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.62 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.62 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.62 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 48 small targets on mobile and 48 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.62 KB.
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
  - Current value: Est savings of 219 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1299/
- Performance: 90/100
- Transfer: 642.58 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.28 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.28 KB savings)
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.28 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.63 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.28 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.28 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.63 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 48 small targets on mobile and 49 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.28 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1177/
- Performance: 89/100
- Transfer: 642.66 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 217.81 KB (33.9% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 217.81 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 217.81 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 217.81 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 217.81 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 50 small targets on mobile and 50 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 217.81 KB.
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
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.0 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Reduce unused JavaScript
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1296/
- Performance: 89/100
- Transfer: 642.52 KB
- CO2 estimate: 0.2520 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.29 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.29 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.29 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.29 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.29 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 49 small targets on mobile and 49 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.29 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1210/
- Performance: 88/100
- Transfer: 642.55 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.27 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.27 KB savings)
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.27 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.86 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.27 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.27 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.77 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 48 small targets on mobile and 48 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.27 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.3 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/departments/176/services/1174/
- Performance: 88/100
- Transfer: 642.75 KB
- CO2 estimate: 0.2521 g
- Page host green energy status: NOT GREEN
- Redundancy score: 19/100
- Redundancy urgency: MEDIUM
- Modularization score: 42/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 10/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 10/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 20/100
- Media hints urgency: LOW
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 218.29 KB (34.0% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 218.29 KB savings)
- Heavy initial-load requests: 4 (508.69 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 218.29 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 218.29 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 218.29 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.83 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 2 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 1 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 45 small targets on mobile and 45 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 218.29 KB.
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
  - Current value: Est savings of 218 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.2 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Eliminate render-blocking resources
  - Current value: Est savings of 0 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)

### https://ca.gov/services/all/?q=birth+
- Performance: 57/100
- Transfer: 768.19 KB
- CO2 estimate: 0.3013 g
- Page host green energy status: NOT GREEN
- Redundancy score: 25/100
- Redundancy urgency: MEDIUM
- Modularization score: 36/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 13/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.41 KB (27.8% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.41 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.63 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.41 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 287.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.41 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.41 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 417 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.76 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 57 small targets on mobile and 58 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.41 KB.
  - [MEDIUM] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 417 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 213 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 420 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.6 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

### https://ca.gov/services/all/?q=birth+certificate+
- Performance: 58/100
- Transfer: 745.27 KB
- CO2 estimate: 0.2924 g
- Page host green energy status: NOT GREEN
- Redundancy score: 26/100
- Redundancy urgency: MEDIUM
- Modularization score: 37/100
- Modularization urgency: MEDIUM
- Dead-code score: 15/100
- Dead-code urgency: MEDIUM
- Non-critical resources score: 9/100
- Non-critical resources urgency: MEDIUM
- Form validation score: 55/100
- Form validation urgency: MEDIUM
- Metadata score: 20/100
- Metadata urgency: LOW
- Layout adaptation score: 30/100
- Layout adaptation urgency: MEDIUM
- Lightweight security score: 31/100
- Lightweight security urgency: MEDIUM
- Dependency maintenance score: 2/100
- Dependency maintenance urgency: MEDIUM
- Expected-files score: 30/100
- Expected-files urgency: MEDIUM
- Compression score: 0/100
- Compression urgency: LOW
- Optimization score: 100/100
- Optimization urgency: HIGH
- Offline support score: 90/100
- Offline support urgency: HIGH
- Media hints score: 30/100
- Media hints urgency: MEDIUM
- Third-party JS risk score: 63/100
- Third-party JS urgency: HIGH
- Estimated redundant transfer: 213.88 KB (28.7% of transfer)
- Redundancy recommendations:
  - [HIGH] Reduce unused javascript (est. 213.88 KB savings)
  - [MEDIUM] Reduce DOM complexity and redundant markup
- Heavy initial-load requests: 4 (508.68 KB total)
- On-demand modularization candidates:
  - [HIGH] Split JavaScript by route or interaction (est. 213.88 KB)
    - Move non-critical bundles behind route-level or event-driven imports so they are only fetched on demand.
  - [MEDIUM] Defer non-critical UI modules until after first render
    - Keep only above-the-fold resources in the initial path; hydrate or import secondary modules later.
  - [MEDIUM] Modularize heavy script asset from www.googletagmanager.com (est. 152.64 KB)
    - Load this script only on pages or interactions that require it; prefer dynamic import and feature-level bundles.
- External CSS/JS hosting checks:
  - SCRIPT www.googletagmanager.com: GREEN (Google Cloud); 3 request(s), 421.87 KB
  - SCRIPT alert.cdt.ca.gov: NOT GREEN; 1 request(s), 288.00 B
- Third-party JS recommendations:
  - [HIGH] Maintain a third-party JavaScript inventory
    - Track 2 third-party script origin(s) and assign an owner plus business justification for each.
  - [HIGH] Reduce third-party script payload and requests
    - Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction.
  - [HIGH] Prioritize greener alternatives for third-party providers
    - 1 third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.
- Dead-code recommendations:
  - [HIGH] Remove unused JavaScript and feature bundles (est. 213.88 KB savings)
    - Drop unused packages and feature code, or move them behind route-level or interaction-triggered imports.
- Non-critical loading candidates:
  - [HIGH] Defer non-critical JavaScript (est. 213.88 KB deferrable)
    - Split bundles and load feature code on interaction or route transition.
  - [MEDIUM] Eliminate render-blocking resources (est. 83 ms unblock)
    - Defer scripts/styles not required for first paint and preload only truly critical assets.
  - [MEDIUM] Evaluate deferred loading for heavy script from www.googletagmanager.com (est. 152.64 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
  - [MEDIUM] Evaluate deferred loading for heavy font from www.ca.gov (est. 86.82 KB deferrable)
    - Confirm this asset is required for first paint; defer or lazy-load if not critical.
- Form validation recommendations:
  - [MEDIUM] No explicit validation rule
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] No error messaging hook
    - 4 unique form control signature(s) on this page include this issue.
  - [MEDIUM] Missing autocomplete for tooling support
    - 2 unique form control signature(s) on this page include this issue.
- Metadata recommendations:
  - [MEDIUM] Add canonical URL metadata
    - Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling.
  - [MEDIUM] Add meta description
    - Provide a concise description to improve machine interpretation and preview quality.
- Layout adaptation recommendations:
  - [HIGH] Increase touch target sizes
    - Ensure interactive controls are at least 44x44 CSS px. Detected 49 small targets on mobile and 48 on tablet.
- Lightweight security recommendations:
  - [MEDIUM] Enable Strict-Transport-Security
    - Set a Strict-Transport-Security header to enforce HTTPS on repeat visits.
  - [LOW] Define a Referrer-Policy
    - Set a referrer policy to reduce unnecessary URL data leakage.
  - [LOW] Define a Permissions-Policy
    - Restrict browser capabilities to only what the application needs.
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
    - Missing beneficial file(s): /sitemap.xml, /manifest.webmanifest.
- Compression recommendations:
  - [LOW] No major compression opportunity detected
    - Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD.
- Optimization recommendations:
  - [HIGH] Remove unused JavaScript
    - Reduce dead JS and split bundles to avoid shipping non-critical code. Estimated byte savings: 213.88 KB.
  - [LOW] Eliminate render-blocking resources
    - Inline critical assets and defer non-critical scripts/styles for faster rendering. Estimated render unblocking: 83 ms.
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
  - [MEDIUM] Add loading="lazy" to images
    - 2 of 3 image(s) lack an explicit loading="lazy" attribute. Lazy loading defers below-fold images and reduces initial page weight.
- [HIGH] Reduce unused JavaScript
  - Current value: Est savings of 214 KiB
  - WSG: 16 Use dependencies appropriately and ensure maintenance (https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance)
- [HIGH] Eliminate render-blocking resources
  - Current value: Est savings of 80 ms
  - WSG: 18 Use the most efficient solution for your service (https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service)
- [MEDIUM] Largest Contentful Paint
  - Current value: 3.6 s
  - WSG: 1 Set goals based on performance and energy impact (https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact)
- [MEDIUM] Avoid an excessive DOM size
  - Current value: 4,339 elements
  - WSG: 2 Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)

## Copy/Paste Issue Snippets

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 2.8 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 311 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Defer offscreen images

- Lighthouse audit: offscreen-images
- Current value: Est savings of 140 KiB
- WSG guideline: 3 Modularize bandwidth-heavy components
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components

### Why this matters
Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 620 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 80 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 620 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 870 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 620 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.5 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 110 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Avoid an excessive DOM size

- Lighthouse audit: dom-size
- Current value: 1,019 elements
- WSG guideline: 2 Remove unnecessary or redundant information
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information

### Why this matters
A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 6.2 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Avoid an excessive DOM size

- Lighthouse audit: dom-size
- Current value: 4,339 elements
- WSG guideline: 2 Remove unnecessary or redundant information
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information

### Why this matters
A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.8 s
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
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.6 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 2.7 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
- Current value: Est savings of 219 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 230 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.5 s
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
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 90 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 80 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 190 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.8 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 219 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 226 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 90 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 216 KiB
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

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 660 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 4.3 s
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
- Current value: Est savings of 218 KiB
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
- Current value: Est savings of 64 KiB
- WSG guideline: 2 Remove unnecessary or redundant information
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information

### Why this matters
Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Serve images in next-gen formats

- Lighthouse audit: modern-image-formats
- Current value: Est savings of 223 KiB
- WSG guideline: 11 Optimize media to reduce resource use
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#optimize-media-to-reduce-resource-use

### Why this matters
Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Defer offscreen images

- Lighthouse audit: offscreen-images
- Current value: Est savings of 196 KiB
- WSG guideline: 3 Modularize bandwidth-heavy components
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components

### Why this matters
Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 216 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 217 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 2.7 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 214 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.9 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 214 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 40 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.9 s
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.5 s
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
- Current value: Est savings of 214 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 214 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.7 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 80 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.7 s
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
- Current value: Est savings of 214 KiB
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
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 214 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.7 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 212 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.7 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 214 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 4.0 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 100 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.4 s
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
- Current value: Est savings of 218 KiB
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
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.1 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 215 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 219 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.0 s
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
- Current value: Est savings of 218 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.3 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 218 KiB
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
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.2 s
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 0 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Reduce unused JavaScript

- Lighthouse audit: unused-javascript
- Current value: Est savings of 213 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 420 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.6 s
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
- Current value: Est savings of 214 KiB
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
## Improve Eliminate render-blocking resources

- Lighthouse audit: render-blocking-resources
- Current value: Est savings of 80 ms
- WSG guideline: 18 Use the most efficient solution for your service
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service

### Why this matters
Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

```md
## Improve Largest Contentful Paint

- Lighthouse audit: largest-contentful-paint
- Current value: 3.6 s
- WSG guideline: 1 Set goals based on performance and energy impact
- WSG link: https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact

### Why this matters
Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

### Definition of done
- [ ] Metric improves in Lighthouse on key templates
- [ ] Changes documented in release notes
- [ ] Re-scan confirms improvement
```

