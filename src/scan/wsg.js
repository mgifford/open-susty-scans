import { co2 as co2Factory } from "@tgwf/co2";

const co2Model = new co2Factory({ model: "swd" });

export async function buildWsgCustomAssessment({ browser, pageUrl, lighthouseAudits }) {
  let page;
  try {
    page = await browser.newPage();
    // Use a longer timeout for potentially heavy pages
    await page.goto(pageUrl, { waitUntil: "networkidle2", timeout: 60000 });

    const wsgData = await page.evaluate(() => {
      // 1. Check for Print Styles
      let printMediaRuleCount = 0;
      let printStyleRuleCount = 0;
      let printDeclarationCount = 0;
      let hasPrintOptimizationRule = false;
      let hasPrintColorAdjustRule = false;
      const MIN_MEANINGFUL_PRINT_RULES = 2;
      const MIN_MEANINGFUL_PRINT_DECLARATIONS = 4;
      const normalizeCssValue = (value) => String(value || "").toLowerCase().replace(/\s+/g, "");
      const isBlackInkValue = (value) => {
        const normalized = normalizeCssValue(value);
        return normalized === "black"
          || normalized === "#000"
          || normalized === "#000000"
          || normalized === "rgb(0,0,0)"
          || normalized === "rgba(0,0,0,1)"
          || /^rgba\(0,0,0,1\.0+\)$/.test(normalized);
      };

      Array.from(document.styleSheets).forEach(sheet => {
        try {
          Array.from(sheet.cssRules || []).forEach(rule => {
            if (rule.constructor.name !== "CSSMediaRule") return;
            const mediaText = String(rule.conditionText || rule.media?.mediaText || "").toLowerCase();
            if (!mediaText.includes("print")) return;
            printMediaRuleCount += 1;

            Array.from(rule.cssRules || []).forEach(nestedRule => {
              if (nestedRule.constructor.name !== "CSSStyleRule") return;
              printStyleRuleCount += 1;
              const style = nestedRule.style;
              if (!style) return;

              printDeclarationCount += style.length || 0;
              const displayValue = String(style.getPropertyValue("display") || "").toLowerCase();
              const backgroundValue = normalizeCssValue(style.getPropertyValue("background") || style.getPropertyValue("background-color"));
              const colorValue = normalizeCssValue(style.getPropertyValue("color"));
              const printColorAdjust = String(
                style.getPropertyValue("print-color-adjust")
                || style.getPropertyValue("-webkit-print-color-adjust")
                || ""
              ).toLowerCase();

              if (
                displayValue.includes("none")
                || backgroundValue.includes("none")
                || isBlackInkValue(backgroundValue)
                || isBlackInkValue(colorValue)
              ) {
                hasPrintOptimizationRule = true;
              }
              if (printColorAdjust.length > 0) {
                hasPrintColorAdjustRule = true;
              }
            });
          });
        } catch {
          // Cross-origin stylesheets might throw security errors
          return;
        }
      });

      const hasPrintStylesheetLink = !!document.querySelector("link[media='print']");
      const hasPrintStyles = printMediaRuleCount > 0 || hasPrintStylesheetLink;
      const hasMeaningfulPrintStyles = (
        printStyleRuleCount >= MIN_MEANINGFUL_PRINT_RULES
        || printDeclarationCount >= MIN_MEANINGFUL_PRINT_DECLARATIONS
        || hasPrintOptimizationRule
        || hasPrintColorAdjustRule
      );
      const hasPrintStylesheetLinkOnly = hasPrintStylesheetLink && printMediaRuleCount === 0;
      const hasPartialPrintStyles = hasPrintStyles && !hasPrintStylesheetLinkOnly && !hasMeaningfulPrintStyles;

      // 2. Check for Reduced Motion support in CSS
      const hasReducedMotion = Array.from(document.styleSheets).some(sheet => {
        try {
          return Array.from(sheet.cssRules).some(rule => rule.media && rule.media.mediaText.includes("prefers-reduced-motion"));
        } catch {
          return false;
        }
      });

      // 3. Media Lazy Loading
      const images = Array.from(document.querySelectorAll("img"));
      const lazyImages = images.filter(img => img.getAttribute("loading") === "lazy").length;
      const iframes = Array.from(document.querySelectorAll("iframe"));
      const lazyIframes = iframes.filter(f => f.getAttribute("loading") === "lazy").length;

      // 4. System Fonts Check (Look at computed style of body/primary content)
      const bodyFont = window.getComputedStyle(document.body).fontFamily;
      const usesSystemFont = /(-apple-system|BlinkMacSystemFont|segoe ui|helvetica|arial|sans-serif|system-ui)/i.test(bodyFont);

      // 5. Tracking Detection (Simple regex on script sources)
      const scripts = Array.from(document.querySelectorAll("script[src]")).map(s => s.src);
      const trackingPatterns = [
        "google-analytics.com",
        "googletagmanager.com",
        "facebook.net",
        "hotjar.com",
        "mixpanel.com",
        "segment.com"
      ];
      const trackingScripts = scripts.filter(src => trackingPatterns.some(p => src.includes(p)));

      // 6. Navigation and Wayfinding (Check for basic landmark coverage)
      const hasNavigation = !!document.querySelector("nav") || !!document.querySelector("[role='navigation']");

      // 7. HTML Semantics (Check for basic document structure)
      const hasMainContent = !!document.querySelector("main") || !!document.querySelector("[role='main']");

      return {
        hasPrintStyles,
        hasPartialPrintStyles,
        hasPrintStylesheetLinkOnly,
        printMediaRuleCount,
        printStyleRuleCount,
        printDeclarationCount,
        hasPrintOptimizationRule,
        hasPrintColorAdjustRule,
        hasReducedMotion,
        media: {
          totalImages: images.length,
          lazyImages,
          totalIframes: iframes.length,
          lazyIframes
        },
        typography: {
          primaryFont: bodyFont,
          usesSystemFont
        },
        tracking: {
          count: trackingScripts.length,
          scripts: trackingScripts
        },
        semantics: {
          hasNavigation,
          hasMainContent
        }
      };
    });

    const recommendations = [];
    let score = 100;

    if (!wsgData.hasPrintStyles) {
      score -= 10;
      recommendations.push({
        guideline: "17.1",
        title: "Missing print style sheet",
        urgency: "low",
        detail: "Add a @media print stylesheet to ensure the page is optimized for paper-saving printing.",
        wsid: "17.printed documents",
        assessor: "script",
        example: "@media print {\n  /* Hide non-critical navigation and backgrounds */\n  nav, .ads, header, footer { display: none; }\n  body { font-size: 12pt; color: #000; background: #fff; }\n  a::after { content: \" (\" attr(href) \") \"; } /* Show URLs */\n}"
      });
    } else if (wsgData.hasPartialPrintStyles) {
      score -= 5;
      recommendations.push({
        guideline: "17.1",
        title: "Print stylesheet likely incomplete",
        urgency: "low",
        detail: "Print CSS was detected, but only minimal print-specific rules were found. Add practical print overrides (for example hiding non-essential UI and improving contrast/ink usage) so printing is consistently lightweight.",
        wsid: "17.printed documents",
        assessor: "script",
        example: "@media print {\n  nav, header, footer, .ads { display: none !important; }\n  body { background: #fff !important; color: #000 !important; }\n  img, svg { max-width: 100% !important; }\n}"
      });
    }

    if (!wsgData.hasReducedMotion) {
      score -= 5;
      recommendations.push({
        guideline: "12.3",
        title: "No reduced motion support",
        urgency: "low",
        detail: "Implement prefers-reduced-motion to allow users to disable animations, reducing compute and improving accessibility.",
        wsid: "12.control animation",
        assessor: "script",
        example: "@media (prefers-reduced-motion: reduce) {\n  *, ::before, ::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}"
      });
    }

    if (wsgData.media.totalImages > 0 && wsgData.media.lazyImages < wsgData.media.totalImages) {
      score -= 15;
      recommendations.push({
        guideline: "11.3",
        title: "Incomplete media lazy loading",
        urgency: "medium",
        detail: `Only ${wsgData.media.lazyImages}/${wsgData.media.totalImages} images use loading="lazy". Global lazy loading reduces initial data transfer and energy consumption.`,
        wsid: "11.lazy loading",
        assessor: "script",
        example: "<img src=\"image.webp\" alt=\"Description\" loading=\"lazy\" width=\"800\" height=\"600\">\n<!-- Works for iframes too -->\n<iframe src=\"video.html\" loading=\"lazy\"></iframe>"
      });
    }

    if (!wsgData.typography.usesSystemFont) {
      score -= 10;
      recommendations.push({
        guideline: "13.1",
        title: "Missing system font fallback",
        urgency: "medium",
        detail: `Primary font "${wsgData.typography.primaryFont}" does not appear to use a system font stack fallback. System fonts reduce network requests and improve rendering performance.`,
        wsid: "13.pre-installed typefaces",
        assessor: "script",
        example: "body {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n}"
      });
    }

    if (wsgData.tracking.count > 0) {
      score -= Math.min(20, wsgData.tracking.count * 5);
      recommendations.push({
        guideline: "7.3",
        title: "Multiple tracking scripts detected",
        urgency: "medium",
        detail: `Found ${wsgData.tracking.count} commercial tracking scripts. Consider lightweight, privacy-focused alternatives like Plausible or Fathom to reduce JS weight and energy footprint.`,
        wsid: "7.analytics and tracking",
        assessor: "script",
        example: "<!-- Replace heavy trackers with lightweight alternatives -->\n<script defer data-domain=\"yourdomain.com\" src=\"https://plausible.io/js/script.js\"></script>"
      });
    }

    if (!wsgData.semantics.hasNavigation) {
      score -= 10;
      recommendations.push({
        guideline: "2.5",
        title: "Missing explicit navigation structure",
        urgency: "medium",
        detail: "No <nav> or role=\"navigation\" tags found. Proper wayfinding helps users find content efficiently and reduces unnecessary page loads.",
        wsid: "2.navigation wayfinding",
        wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-navigation-and-wayfinding-are-well-structured",
        assessor: "script",
        example: "<nav aria-label=\"Primary\">\n  <ul>\n    <li><a href=\"/\">Home</a></li>\n  </ul>\n</nav>"
      });
    }

    if (!wsgData.semantics.hasMainContent) {
      score -= 5;
      recommendations.push({
        guideline: "3.7",
        title: "Missing main content landmark",
        urgency: "medium",
        detail: "No <main> or role=\"main\" tags found. Semantic HTML reduces code bloat and allows both assistive technology and web crawlers to parse content more efficiently.",
        wsid: "3.ensure code follows good semantic practices",
        wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#ensure-code-follows-good-semantic-practices",
        assessor: "script",
        example: "<main>\n  <article>\n    <h1>Page Title</h1>\n    <p>Content goes here.</p>\n  </article>\n</main>"
      });
    }

    // --- Human review hints: UX -------------------------------------------------
    recommendations.push({
      guideline: "2.4",
      title: "Review User Journey Efficiency",
      urgency: "investigate",
      detail: "Have a human walk through the main user journeys and verify they require the fewest steps possible. Unnecessary steps waste user time and device energy. Look for redundant confirmations, forced account creation, and non-essential interstitials.",
      wsid: "2.minimize non-essential content",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#minimize-non-essential-content-interactivity-or-journeys",
      assessor: "human"
    });

    recommendations.push({
      guideline: "2.6",
      title: "Check for Engagement Traps",
      urgency: "investigate",
      detail: "Manually review the page for patterns that artificially prolong engagement: infinite scroll, autoplay carousels, sticky overlays, and notification permission prompts. These waste user attention and device energy.",
      wsid: "2.design to assist not distract",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#design-to-assist-and-not-to-distract",
      assessor: "human"
    });

    recommendations.push({
      guideline: "2.7",
      title: "Audit for Deceptive Design Patterns",
      urgency: "investigate",
      detail: "Have a human identify dark patterns: misleading consent dialogs, hidden unsubscribe links, forced continuity, and bait-and-switch flows. Deceptive patterns waste user time and undermine trust.",
      wsid: "2.avoid manipulative deceptive",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#avoid-being-manipulative-or-deceptive",
      assessor: "human"
    });

    recommendations.push({
      guideline: "2.14",
      title: "Verify Accessible Alternatives for All Media",
      urgency: "investigate",
      detail: "Manually check that every video has captions, every audio file has a transcript, every image has meaningful alt text, and every PDF has an accessible HTML alternative. Alternatives let assistive technology users avoid re-downloading heavy formats.",
      wsid: "2.offer suitable alternatives",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#offer-suitable-alternatives-for-every-format-used",
      assessor: "human"
    });

    recommendations.push({
      guideline: "2.18",
      title: "Confirm User Research Was Conducted",
      urgency: "investigate",
      detail: "Verify that genuine user research or usability testing has informed the design. Research-driven design reduces wasted iterations, removes unnecessary features, and ensures the product meets real needs efficiently.",
      wsid: "2.involve users early",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#involve-users-early-in-the-project",
      assessor: "human"
    });

    // --- AI review hints: UX & Content -----------------------------------------
    recommendations.push({
      guideline: "2.10",
      title: "Review Content Conciseness",
      urgency: "investigate",
      detail: "Use a Large Language Model (e.g. locally or via API) to evaluate page text for conciseness and clarity. Removing superfluous text reduces payload, reading time, and inference energy for search engines indexing this content.",
      wsid: "2.provide clear inclusive content",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#provide-clear-inclusive-content-with-purpose",
      assessor: "ai"
    });

    // --- Human review hints: Infrastructure & Business -------------------------
    recommendations.push({
      guideline: "4.4",
      title: "Verify Error Pages and Redirects Are Configured",
      urgency: "investigate",
      detail: "Have a human check that custom 404 and 500 error pages exist and that there are no redirect chains longer than one hop. Broken links force wasted round-trips. Redirect chains multiply transfer costs.",
      wsid: "4.error pages redirection",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#setup-necessary-error-pages-and-redirection-links",
      assessor: "human"
    });

    recommendations.push({
      guideline: "4.10",
      title: "Review CDN Usage and Geographic Distribution",
      urgency: "investigate",
      detail: "Confirm that static assets are served from a CDN and that the CDN edge nodes are geographically close to the primary audience. CDN misuse—or absence—increases last-mile transfer distance and the associated energy cost of data delivery.",
      wsid: "4.content delivery networks",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#use-content-delivery-networks-cdns-appropriately",
      assessor: "human"
    });

    recommendations.push({
      guideline: "5.2",
      title: "Confirm a Sustainability Advocate Is Assigned",
      urgency: "investigate",
      detail: "Verify that someone on the team has explicit responsibility for web sustainability. Without a designated advocate, sustainability improvements tend to be deprioritized and never reach the backlog.",
      wsid: "5.assign sustainability advocate",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#assign-a-sustainability-advocate",
      assessor: "human"
    });

    recommendations.push({
      guideline: "5.8",
      title: "Check for a Public Sustainability Statement",
      urgency: "investigate",
      detail: "Look for a publicly accessible sustainability statement, disclosure page, or environmental policy. Mandatory disclosure requirements are growing globally and transparency builds user trust. The statement should include measurable targets and dates.",
      wsid: "5.support mandatory disclosures",
      wsgUrl: "https://www.w3.org/TR/web-sustainability-guidelines/#support-mandatory-disclosures-and-reporting",
      assessor: "human"
    });

    return {

      score: Math.max(0, score),
      urgency: score <= 60 ? "high" : (score <= 85 ? "medium" : "low"),
      data: wsgData,
      recommendations
    };

  } catch (error) {
    return {
      score: 0,
      urgency: "low",
      error: error.message,
      recommendations: []
    };
  } finally {
    if (page) await page.close();
  }
}
