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
      const hasPrintStyles = Array.from(document.styleSheets).some(sheet => {
        try {
          return Array.from(sheet.cssRules).some(rule => rule.media && rule.media.mediaText.includes("print"));
        } catch {
          // Cross-origin stylesheets might throw security errors
          return false;
        }
      }) || !!document.querySelector("link[media='print']");

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

      return {
        hasPrintStyles,
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
        example: "@media print {\n  /* Hide non-critical navigation and backgrounds */\n  nav, .ads, header, footer { display: none; }\n  body { font-size: 12pt; color: #000; background: #fff; }\n  a::after { content: \" (\" attr(href) \") \"; } /* Show URLs */\n}"
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
        example: "<!-- Replace heavy trackers with lightweight alternatives -->\n<script defer data-domain=\"yourdomain.com\" src=\"https://plausible.io/js/script.js\"></script>"
      });
    }

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
