# Copilot Instructions

This file helps GitHub Copilot and other AI coding agents work efficiently in this repository.

## Primary agent instructions

The canonical instructions for coding agents are in **[`AGENTS.md`](../AGENTS.md)** at the repository root. Read it first. It covers:

- Project overview and purpose
- Setup and CLI commands
- Build and report commands
- Testing and validation expectations
- Code style and editing conventions
- Workflow and publishing conventions
- Security and operational guardrails
- Pull request guidance for agents

## Accessibility requirements

All user-facing output (generated HTML reports, published pages) must follow the policy in **[`ACCESSIBILITY.md`](../ACCESSIBILITY.md)**. Key points:

- Target WCAG 2.2 AA for all generated and published HTML artifacts.
- Keep semantic document structure (`h1`–`h3`, landmark regions, table headers) intact.
- Preserve keyboard operability and visible focus for interactive controls.
- Do not convey meaning by color alone.
- If `AGENTS.md` conflicts with `ACCESSIBILITY.md`, treat `ACCESSIBILITY.md` as the source of truth.

## Sustainability requirements

All architecture, CI, reporting, and AI-usage decisions must follow the policy in **[`SUSTAINABILITY.md`](../SUSTAINABILITY.md)**. Key points:

- Prefer event-driven workflows; avoid always-on scheduled scans.
- Keep external requests minimal and explicit.
- Prefer deterministic tooling over AI for repetitive or predictable tasks.
- Include a sustainability impact note (`improves`, `neutral`, or `regresses`) in every PR that touches scan or report logic.
- If `AGENTS.md` conflicts with `SUSTAINABILITY.md`, treat `SUSTAINABILITY.md` as the source of truth.

## Quick-start summary

1. `npm ci` — install dependencies
2. `npm run scan -- --help` — show CLI options
3. Run a scan and verify JSON, Markdown, and HTML outputs are produced.
4. Keep changes scoped; update `README.md` when behavior or commands change.
5. Include sustainability and accessibility impact notes in PR descriptions.
