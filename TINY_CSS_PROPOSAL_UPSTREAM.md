# Proposal: Minimal and Efficient CSS Principles

This proposal suggests adding a new section to the core `SUSTAINABILITY.md` policy to provide implementation-level guidance for front-end development, specifically for small or minimalist projects. This aligns with modern browser capabilities and the "Tiny CSS" sustainability principles.

---

## Minimal and efficient CSS

Aligned with the "Tiny CSS" sustainability principles for small or minimalist projects. Trust the browser instead of fighting it to reduce data transfer and compute.

- **Trust the browser**: Avoid heavy CSS resets. Let the browser handle base font sizes (defaulting to 100%) and default colors to respect user accessibility settings.
- **Use logical properties**: Prefer `margin-inline`, `padding-block`, and `inline-size` over physical `left`/`right`/`top`/`bottom`/`width` properties to support internationalization with zero extra CSS logic.
- **Respect user preferences**: Use `color-scheme: light dark;` to support system themes automatically. Honor `prefers-reduced-motion` for scroll behavior and animations.
- **Efficient text wrapping**: Use `text-wrap: balance;` for headings and `text-wrap: pretty;` for body text to improve readability without manual line breaks or extra markup.
- **Responsive media**: Use `:where(img, svg, video, iframe) { max-inline-size: 100%; block-size: auto; }` for lean, responsive media scaling.
- **Interaction affordance**: Use `accent-color` for standard form controls and `cursor: pointer` for interactive elements to improve usability with minimal decorative CSS.

## Dependency selection and software longevity

Aligned with WSG 3.14 (Software Longevity) and 4.10 (Third-Party Assessment). Manage the software supply chain as a sustainability liability.

- **Modern runtimes**: Standardize on the latest Active LTS or Current version of Node.js. Staying current ensures access to engine-level performance improvements and reduces security debt.
- **Mindful selection**: Every line of code, first or third-party, carries a carbon cost. Before adding a library, ask:
    - **Necessity**: Can this be achieved with native platform features (e.g., Web API `fetch`, logical properties)?
    - **Efficiency**: Is the library lightweight and purposeful? (Target: prefer micro-libraries or utilities over large frameworks).
    - **Vitality**: Is the library actively maintained? Avoid "popular but stale" libraries that increase maintenance burden.
- **Regular audits**: Review dependencies quarterly or every major release, whichever comes first. Prune unused packages and evaluate whether older dependencies should be replaced by more modern, efficient alternatives.

---

### Rationale

- **Performance**: Reducing the volume of CSS and JavaScript transmitted over the wire directly reduces energy consumption and improves load times.
- **Maintainability**: Logical properties reduce the need for RTL-specific stylesheets. Staying current with platform standards reduces long-term maintenance costs.
- **Accessibility**: Relying on browser defaults for font sizes and colors ensures that user-level accessibility overrides are respected.
- **Security & Longevity**: Keeping the software supply chain modern and lean reduces the risk of security vulnerabilities and extends the useful life of the software environment.
