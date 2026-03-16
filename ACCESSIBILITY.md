# Accessibility Commitment (ACCESSIBILITY.md)

## 1. Our Commitment

Accessibility is a core quality requirement for this project.

We aim for WCAG 2.2 AA-aligned output for user-facing artifacts we generate and publish, including:
- `report.html` pages produced by the scanner
- `reports/index.html` and `reports.html` publishing surfaces

When trade-offs are required, prefer changes that preserve or improve keyboard, screen reader, and low-vision usability.

## 2. Accessibility Health Signals

| Metric | Status / Value |
| :--- | :--- |
| Accessibility issues | Track in GitHub issues with the `accessibility` label |
| Generated report semantics | Must include meaningful headings, table headers, labels, and focus-visible controls |
| Keyboard support | Interactive report controls (for example copy buttons) must be keyboard operable |
| Color and contrast | Avoid low-contrast combinations in generated report themes |

## 3. Contributor Requirements (Guardrails)

When you change report generation, templates, or publishing pages, you must:

- Keep semantic document structure intact (`h1` to `h3`, landmark regions, table header cells)
- Preserve accessible labels for interactive controls (for example copy buttons and textareas)
- Ensure focus-visible styling remains present for keyboard users
- Avoid conveying meaning by color alone
- Keep generated pages readable at browser zoom levels up to 200%
- Avoid introducing motion that cannot be reduced or disabled

## 4. Reporting and Severity Taxonomy

Please report accessibility issues via GitHub issues:
- New issue link: <https://github.com/mgifford/open-susty-scans/issues/new>
- Existing request template: `.github/ISSUE_TEMPLATE/sustainability-scan.yml`

Severity levels:
- Critical: blocker for keyboard or assistive technology users on core report tasks
- High: substantial barrier that can cause misinterpretation or task failure
- Medium: notable usability or comprehension issue with workaround
- Low: minor issue, wording, or cosmetic improvement

## 5. Automated and Manual Check Coverage

This repository does not currently run a dedicated accessibility test suite in CI.

Minimum validation expectations for relevant changes:
- Run a scan and open generated `report.html`
- Verify keyboard access to interactive elements
- Verify headings and table structure are logical and ordered
- Verify link text and control labels are descriptive
- Verify focus states are visible and not removed

If automation is added later, document commands and workflow location in this file.

## 6. Browser and Assistive Technology Expectations

Target browser support for generated reports:
- Current and previous major versions of Chromium-based browsers
- Current and previous major versions of Firefox
- Current and previous major versions of Safari/WebKit where practical

Recommended manual assistive checks before merging substantial UI/report markup changes:
- Keyboard-only navigation
- Screen reader spot checks (NVDA, VoiceOver, or equivalent)
- Zoom and reflow checks at 200%

## 7. Machine-Readable and AI Guidance

This project is designed for issue-driven, machine-readable sustainability reporting.

Accessibility guidance should remain:
- Explicit in generated output structure
- Documented in stable project files (`README.md`, `AGENTS.md`, `ACCESSIBILITY.md`)
- Safe for agent consumption without requiring hidden assumptions

When adding new report sections in `src/report/generate.js`, ensure accessibility considerations are carried through JSON, Markdown, and HTML renderers.

## 8. Known Limitations

Current limitations include:
- No dedicated automated accessibility CI checks yet
- Accessibility outcomes are inferred from generated markup quality and manual validation
- Third-party scanned pages may contain inaccessible content outside this project's control

## 9. Getting Help

- Questions and requests: <https://github.com/mgifford/open-susty-scans/issues>
- Project documentation: `README.md`
- Workflow behavior: `.github/workflows/scan-and-publish.yml`

## 10. Continuous Improvement

We continuously improve accessibility by:
- Updating report templates when barriers are identified
- Prioritizing accessibility issues during scanner/report evolution
- Keeping language clear, inclusive, and plain
- Improving keyboard and screen reader support as new UI/report features are added

Last updated: 2026-03-16