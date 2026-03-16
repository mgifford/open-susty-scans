# SUSTAINABILITY.md

Practical sustainability policy for this repository's engineering, accessibility, and AI usage.

## Status and ownership

- Status: Active
- Sustainability lead: Repository maintainer
- Engineering owner: Repository maintainer
- Design owner: Repository maintainer
- Last updated: 2026-03-16
- Review cadence: Quarterly

## Team commitment

We commit to reducing digital waste and emissions by making sustainability part of normal delivery work.
We optimize for measurable improvement over perfection and treat sustainability as a quality attribute alongside reliability, security, performance, and accessibility.

## Scope

This policy applies to:

- Repository: open-susty-scans
- Products and services: CLI scanning, report generation, issue-comment publishing, and GitHub Pages report index
- Build and deployment workflows: GitHub Actions workflows in .github/workflows
- Third-party services and scripts: Lighthouse, Puppeteer, CO2.js, Green Web Foundation API, GitHub API

Out of scope for now:

- Sustainability behavior of scanned target websites themselves
- Organization-wide infrastructure policy outside this repository

## Sustainability in early ideation

Aligned with WSG 2.8: Integrate sustainability into every stage of ideation.
Reference: https://www.w3.org/TR/web-sustainability-guidelines/#integrate-sustainability-into-every-stage-of-the-ideation-process

Questions to ask before building:

- Is this feature genuinely needed and what is the cost of not shipping it?
- Can a simpler and lower-footprint approach satisfy the requirement?
- Does this introduce new third-party dependencies or external requests?
- Can this change reduce transfer bytes, compute, or repeated scans?

Questions to ask before merging:

- Does this regress report size, page weight, request count, or CI compute time?
- Does it increase scanning frequency without clear user value?
- Is AI assistance disclosed and justified?
- Are new third-party scripts or services reviewed and justified?

For AI agents (WSG 2.8):

- Propose the simplest implementation that satisfies the requirement.
- Prefer deterministic tooling over AI for repetitive or predictable tasks.
- State expected sustainability impact in PR notes: improves, neutral, or regresses.

## Baseline metrics

| Metric | Baseline | Target | Owner | Check cadence |
| :--- | :--- | :--- | :--- | :--- |
| Average transfer per scanned page | Report-derived | Downward trend | Maintainer | Per scan run |
| Average CO2 per scanned page | Report-derived | Downward trend | Maintainer | Per scan run |
| CI run count per issue | Event-driven | Avoid unnecessary reruns | Maintainer | Monthly |
| Published report footprint | Report-derived | Keep stable and justified | Maintainer | Per release |
| Third-party external origins in reports | Report-derived | Reduce recurring non-green origins | Maintainer | Per scan run |
| AI calls per PR | Manual tracking | Minimize and justify | Maintainer | Monthly |

## Pull request requirements

All pull requests should include:

- Sustainability impact summary
- Accessibility impact summary
- Third-party impact summary
- AI assistance disclosure when used

Recommended PR fields:

- Sustainability impact:
- Accessibility checks run:
- Third-party impact:
- AI tools used (if any):

## Accessibility as code (required checks)

Minimum expectations for changes to report or pages output:

- Keep semantic heading and table structure intact
- Keep keyboard operability and visible focus for interactive controls
- Preserve descriptive labels, link text, and control names
- Avoid introducing known critical accessibility regressions

Reference: ACCESSIBILITY.md

## Sustainability as code (required checks)

Minimum expectations for each relevant pull request:

- Verify no unintended page-weight/report-size regressions
- Verify no unnecessary increase in scan frequency or duplicate processing
- Verify third-party additions are reviewed and justified
- Verify media and assets in generated pages are optimized and minimal
- Verify workflow changes do not add wasteful always-on jobs

Suggested policy:

- Block merge when agreed sustainability thresholds regress without justification
- Require explicit approval for threshold or policy changes

## AI usage policy

Default decision order:

1. Deterministic code first
2. Existing tooling and libraries
3. Caching and reuse
4. Reduced execution frequency
5. Human action when cheaper and clearer
6. AI only when justified

Allowed uses:

- Refactoring analysis and migration planning
- Drafting summaries or policy text when deterministic tooling is not suitable
- Triage support for multi-file change planning

Restricted uses:

- No always-on AI generation in CI for routine deterministic tasks
- No AI use where local scripting or existing tooling can produce equivalent output
- No automatic runtime AI behavior in generated report pages

AI controls:

- Keep prompts scoped and avoid unnecessary retries
- Reuse outputs and avoid recomputation where possible
- Prefer smaller context and direct tooling when adequate

## AI disclosure

Document actual AI usage in PR descriptions and relevant issues:

- Build-time usage: code drafting, analysis, refactoring assistance
- Runtime usage: none in generated report pages unless explicitly added and documented
- CI usage: only when justified and documented

## Time and space shifting

Time shift:

- Prefer event-driven workflows over scheduled always-on scans
- Run costly scans only when issues are opened, edited, reopened, or manually triggered

Space shift:

- Prefer infrastructure and services with transparent sustainability posture where practical
- Track recurring non-green external providers identified by scans and prioritize alternatives

## Governance and exceptions

- Recommended labels: sustainability, accessibility, performance-budget, ai-usage, third-party-impact
- Decision owners: repository maintainers

Exception process:

1. Open an issue with rationale
2. Assign an owner and expiry date
3. Document mitigation plan
4. Revalidate before expiry

## Release gate criteria

Before release or major workflow updates, confirm:

- [ ] Report generation completes with expected artifacts
- [ ] No unjustified increase in workflow compute or run frequency
- [ ] Third-party and external origin changes are reviewed
- [ ] Accessibility expectations remain satisfied
- [ ] AI usage is disclosed when applicable

Temporary exceptions require an open issue with owner, rationale, and expiry date.

## Known limitations

- The project measures and reports sustainability signals but cannot directly enforce target-site implementation changes.
- Automated sustainability policy checks are partially manual and should be strengthened over time.
- External datasets and APIs can change independently of this repository.