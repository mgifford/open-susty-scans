import lighthouse from "lighthouse";
import { co2 as co2Factory } from "@tgwf/co2";
import puppeteer from "puppeteer";
import { checkGreenWebHostnames } from "../greenweb/client.js";

const co2Model = new co2Factory({ model: "swd" });

export async function scanUrls(urls) {
  const browser = await puppeteer.launch({
    executablePath: puppeteer.executablePath(),
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"]
  });
  const browserEndpoint = new URL(browser.wsEndpoint());
  const port = Number(browserEndpoint.port);
  const results = [];
  const formValidationCache = new Map();

  try {
    for (const url of urls) {
      const startedAt = new Date().toISOString();
      try {
        const runnerResult = await lighthouse(
          url,
          {
            logLevel: "error",
            output: "json",
            onlyCategories: ["performance", "best-practices"],
            port
          },
          undefined
        );

        const lhr = runnerResult.lhr;
        const networkRequests = lhr.audits?.["network-requests"]?.details?.items || [];
        const transferBytes = networkRequests.reduce((sum, item) => sum + (item.transferSize || 0), 0);
        const grams = co2Model.perByte(transferBytes);
        const greenWeb = await buildGreenWebAssessment({
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url,
          networkRequests
        });
        const formValidation = await buildFormValidationAssessment({
          browser,
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url,
          cache: formValidationCache
        });
        const metadata = await buildMetadataAssessment({
          browser,
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url
        });
        const layoutAdaptation = await buildLayoutAssessment({
          browser,
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url
        });
        const securityLight = await buildSecurityLightAssessment({
          browser,
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url,
          audits: lhr.audits
        });
        const expectedFiles = await buildExpectedFilesAssessment({
          pageUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url
        });

        results.push({
          url,
          startedAt,
          status: "ok",
          lighthouse: {
            fetchTime: lhr.fetchTime,
            finalUrl: lhr.finalDisplayedUrl || lhr.finalUrl || url,
            categories: {
              performance: lhr.categories?.performance?.score ?? null,
              bestPractices: lhr.categories?.["best-practices"]?.score ?? null
            },
            audits: lhr.audits,
            userAgent: lhr.userAgent,
            requestedUrl: lhr.requestedUrl,
            mainDocumentUrl: lhr.mainDocumentUrl
          },
          sustainability: {
            transferBytes,
            co2Grams: grams,
            co2Milligrams: grams * 1000,
            greenWeb,
            formValidation,
            metadata,
            layoutAdaptation,
            securityLight,
            expectedFiles
          }
        });
      } catch (error) {
        results.push({
          url,
          startedAt,
          status: "error",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  } finally {
    await browser.close();
  }

  return results;
}

async function buildFormValidationAssessment({ browser, pageUrl, cache }) {
  let page;
  try {
    page = await browser.newPage();
    await page.goto(pageUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

    const elements = await page.evaluate(() => {
      const controls = Array.from(document.querySelectorAll("input, textarea, select"));

      function sanitize(value) {
        return String(value || "").trim().toLowerCase();
      }

      function formContext(formEl) {
        if (!formEl) return "no-form";
        const action = sanitize(formEl.getAttribute("action"));
        const role = sanitize(formEl.getAttribute("role"));
        const method = sanitize(formEl.getAttribute("method") || "get");
        const asSearch = role === "search" || action.includes("search");
        const contextRole = asSearch ? "search" : (role || "form");
        const actionPath = action.replace(/^https?:\/\/[^/]+/, "") || "self";
        return `${contextRole}|${method}|${actionPath}`;
      }

      function hasAssociatedLabel(el) {
        if (el.labels && el.labels.length > 0) return true;
        if (sanitize(el.getAttribute("aria-label"))) return true;
        if (sanitize(el.getAttribute("aria-labelledby"))) return true;
        return false;
      }

      function hasValidationRule(el, type) {
        const semanticTypes = ["email", "url", "number", "date", "datetime-local", "tel", "time"];
        return el.hasAttribute("required")
          || el.hasAttribute("pattern")
          || el.hasAttribute("min")
          || el.hasAttribute("max")
          || el.hasAttribute("step")
          || el.hasAttribute("minlength")
          || el.hasAttribute("maxlength")
          || semanticTypes.includes(type);
      }

      function hasErrorMessagingHook(el, formEl) {
        if (sanitize(el.getAttribute("aria-errormessage"))) return true;

        const describedBy = sanitize(el.getAttribute("aria-describedby"));
        if (describedBy) {
          const tokens = describedBy.split(/\s+/).filter(Boolean);
          for (const token of tokens) {
            if (token.includes("error") || token.includes("invalid") || token.includes("hint") || token.includes("help")) {
              return true;
            }
          }
        }

        if (formEl && formEl.querySelector("[role='alert'], [aria-live]")) return true;
        return false;
      }

      function toolingFriendly(el, type) {
        const needsAutocomplete = ["text", "search", "email", "tel", "password", "url"].includes(type);
        if (!needsAutocomplete) return true;
        const autocomplete = sanitize(el.getAttribute("autocomplete"));
        return autocomplete !== "" && autocomplete !== "off";
      }

      return controls
        .map((el) => {
          const tag = sanitize(el.tagName);
          const type = tag === "input" ? sanitize(el.getAttribute("type") || "text") : tag;
          if (["hidden", "submit", "button", "reset", "image"].includes(type)) {
            return null;
          }

          const formEl = el.closest("form");
          const context = formContext(formEl);
          const name = sanitize(el.getAttribute("name"));
          const autocomplete = sanitize(el.getAttribute("autocomplete"));
          const signature = [
            context,
            tag,
            type,
            name || "anonymous",
            autocomplete || "no-autocomplete",
            el.hasAttribute("required") ? "required" : "optional",
            el.hasAttribute("pattern") ? "pattern" : "no-pattern",
            el.hasAttribute("minlength") ? "minlength" : "no-minlength"
          ].join("|");

          const role = context.startsWith("search|") ? "search" : "form";

          return {
            signature,
            role,
            controlType: type,
            fieldName: name || null,
            formContext: context,
            hasLabel: hasAssociatedLabel(el),
            hasValidationRule: hasValidationRule(el, type),
            hasErrorMessagingHook: hasErrorMessagingHook(el, formEl),
            toolingFriendly: toolingFriendly(el, type)
          };
        })
        .filter(Boolean);
    });

    const unique = new Map();
    for (const element of elements) {
      if (!unique.has(element.signature)) {
        unique.set(element.signature, element);
      }
    }

    const components = [];
    let reusedCount = 0;

    for (const element of unique.values()) {
      if (cache.has(element.signature)) {
        reusedCount += 1;
        components.push({ ...element, assessment: cache.get(element.signature), reusedFromCache: true });
        continue;
      }

      const assessment = assessFormElement(element);
      cache.set(element.signature, assessment);
      components.push({ ...element, assessment, reusedFromCache: false });
    }

    const averageScore = average(components.map((item) => item.assessment.score));
    const urgency = formValidationUrgency(averageScore);

    return {
      score: averageScore,
      urgency,
      pageElementOccurrences: elements.length,
      uniqueElementsAssessed: components.length,
      reusedFromCacheCount: reusedCount,
      components,
      recommendations: summarizeFormRecommendations(components)
    };
  } catch (error) {
    return {
      score: 0,
      urgency: "low",
      pageElementOccurrences: 0,
      uniqueElementsAssessed: 0,
      reusedFromCacheCount: 0,
      components: [],
      recommendations: [
        {
          title: "Form validation scan could not complete",
          urgency: "medium",
          detail: error instanceof Error ? error.message : String(error)
        }
      ]
    };
  } finally {
    if (page) {
      await page.close();
    }
  }
}

function assessFormElement(element) {
  let score = 0;
  const issues = [];

  if (!element.hasLabel) {
    score += 40;
    issues.push("Missing associated label");
  }

  if (!element.hasValidationRule) {
    score += 30;
    issues.push("No explicit validation rule");
  }

  if (!element.hasErrorMessagingHook) {
    score += 20;
    issues.push("No error messaging hook");
  }

  if (!element.toolingFriendly) {
    score += 10;
    issues.push("Missing autocomplete for tooling support");
  }

  return {
    score: Math.min(score, 100),
    urgency: formValidationUrgency(score),
    issues,
    recommendations: buildElementRecommendations(element, issues)
  };
}

function buildElementRecommendations(element, issues) {
  const recommendations = [];
  if (issues.includes("Missing associated label")) {
    recommendations.push("Add a programmatic label using <label>, aria-label, or aria-labelledby.");
  }
  if (issues.includes("No explicit validation rule")) {
    recommendations.push("Define validation constraints (required, pattern, min/max, or semantic input type).");
  }
  if (issues.includes("No error messaging hook")) {
    recommendations.push("Add aria-errormessage/aria-describedby and a visible error region for invalid input.");
  }
  if (issues.includes("Missing autocomplete for tooling support")) {
    recommendations.push("Provide meaningful autocomplete values to support browsers and assistive tooling.");
  }

  if (recommendations.length === 0) {
    recommendations.push("No obvious validation or tooling gaps detected for this form control signature.");
  }

  return recommendations;
}

function summarizeFormRecommendations(components) {
  const totals = new Map();

  for (const component of components) {
    for (const issue of component.assessment.issues) {
      const current = totals.get(issue) || 0;
      totals.set(issue, current + 1);
    }
  }

  if (totals.size === 0) {
    return [
      {
        title: "No major form validation risks detected",
        urgency: "low",
        detail: "Continue testing form flows to ensure error handling remains clear across templates."
      }
    ];
  }

  return Array.from(totals.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([issue, count]) => ({
      title: issue,
      urgency: issue === "Missing associated label" ? "high" : "medium",
      detail: `${count} unique form control signature(s) on this page include this issue.`
    }));
}

function formValidationUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

function average(values) {
  if (!values || values.length === 0) return 0;
  return values.reduce((sum, value) => sum + (typeof value === "number" ? value : 0), 0) / values.length;
}

async function buildGreenWebAssessment({ pageUrl, networkRequests }) {
  const pageHostname = safeHostname(pageUrl);
  const externalAssets = collectExternalCssAndJs({ pageHostname, networkRequests });
  const hostnamesToCheck = [pageHostname, ...externalAssets.map((asset) => asset.hostname)].filter(Boolean);
  const checks = await checkGreenWebHostnames(hostnamesToCheck);

  const page = checks.get(pageHostname) || null;
  const externalOriginDetails = externalAssets.map((asset) => ({
    ...asset,
    greenCheck: checks.get(asset.hostname) || null
  }));

  return {
    page,
    externalAssets: externalOriginDetails,
    summary: summarizeGreenChecks(page, externalOriginDetails)
  };
}

function collectExternalCssAndJs({ pageHostname, networkRequests }) {
  const byHostnameAndType = new Map();

  for (const item of networkRequests) {
    const resourceType = normalizeResourceType(item.resourceType);
    if (resourceType !== "script" && resourceType !== "stylesheet") {
      continue;
    }

    const hostname = safeHostname(item.url);
    if (!hostname || hostname === pageHostname) {
      continue;
    }

    const key = `${resourceType}|${hostname}`;
    const current = byHostnameAndType.get(key) || {
      hostname,
      resourceType,
      requestCount: 0,
      transferBytes: 0,
      sampleUrl: item.url
    };

    current.requestCount += 1;
    current.transferBytes += item.transferSize || 0;
    byHostnameAndType.set(key, current);
  }

  return Array.from(byHostnameAndType.values()).sort((a, b) => b.transferBytes - a.transferBytes);
}

function summarizeGreenChecks(page, externalAssets) {
  const allChecks = [page, ...externalAssets.map((asset) => asset.greenCheck)].filter(Boolean);
  return {
    pageStatus: page?.status || "unknown",
    externalOriginCount: externalAssets.length,
    greenCount: allChecks.filter((item) => item.status === "green").length,
    notGreenCount: allChecks.filter((item) => item.status === "not-green").length,
    unknownCount: allChecks.filter((item) => item.status === "unknown").length
  };
}

function safeHostname(value) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function normalizeResourceType(resourceType) {
  return String(resourceType || "").trim().toLowerCase();
}

async function buildMetadataAssessment({ browser, pageUrl }) {
  let page;
  try {
    page = await browser.newPage();
    await page.goto(pageUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

    const metadata = await page.evaluate(() => {
      function clean(value) {
        return String(value || "").trim();
      }

      function metaByName(name) {
        const el = document.querySelector(`meta[name='${name}']`);
        return clean(el?.getAttribute("content"));
      }

      function metaByProperty(property) {
        const el = document.querySelector(`meta[property='${property}']`);
        return clean(el?.getAttribute("content"));
      }

      const ldJsonBlocks = Array.from(document.querySelectorAll("script[type='application/ld+json']"));
      let validLdJsonCount = 0;
      let invalidLdJsonCount = 0;

      for (const block of ldJsonBlocks) {
        const text = clean(block.textContent);
        if (!text) {
          continue;
        }
        try {
          JSON.parse(text);
          validLdJsonCount += 1;
        } catch {
          invalidLdJsonCount += 1;
        }
      }

      return {
        title: clean(document.querySelector("title")?.textContent),
        lang: clean(document.documentElement.getAttribute("lang")),
        charset: clean(document.querySelector("meta[charset]")?.getAttribute("charset")),
        viewport: clean(document.querySelector("meta[name='viewport']")?.getAttribute("content")),
        description: metaByName("description"),
        robots: metaByName("robots"),
        canonical: clean(document.querySelector("link[rel='canonical']")?.getAttribute("href")),
        ogTitle: metaByProperty("og:title"),
        ogDescription: metaByProperty("og:description"),
        ogType: metaByProperty("og:type"),
        ogUrl: metaByProperty("og:url"),
        twitterCard: metaByName("twitter:card"),
        ldJsonCount: ldJsonBlocks.length,
        validLdJsonCount,
        invalidLdJsonCount
      };
    });

    return scoreMetadata(metadata);
  } catch (error) {
    return {
      score: 0,
      urgency: "low",
      checks: {},
      recommendations: [
        {
          title: "Metadata scan could not complete",
          urgency: "medium",
          detail: error instanceof Error ? error.message : String(error)
        }
      ]
    };
  } finally {
    if (page) {
      await page.close();
    }
  }
}

function scoreMetadata(metadata) {
  const checks = {
    hasTitle: Boolean(metadata.title),
    hasLang: Boolean(metadata.lang),
    hasDescription: Boolean(metadata.description),
    hasCanonical: Boolean(metadata.canonical),
    hasOpenGraphCore: Boolean(metadata.ogTitle && metadata.ogDescription && metadata.ogType && metadata.ogUrl),
    hasTwitterCard: Boolean(metadata.twitterCard),
    hasViewport: Boolean(metadata.viewport),
    hasCharset: Boolean(metadata.charset),
    hasValidStructuredData: metadata.validLdJsonCount > 0 || metadata.ldJsonCount === 0,
    hasInvalidStructuredData: metadata.invalidLdJsonCount > 0
  };

  let score = 0;
  if (!checks.hasTitle) score += 20;
  if (!checks.hasLang) score += 15;
  if (!checks.hasDescription) score += 10;
  if (!checks.hasCanonical) score += 10;
  if (!checks.hasOpenGraphCore) score += 15;
  if (!checks.hasTwitterCard) score += 5;
  if (!checks.hasViewport) score += 5;
  if (!checks.hasCharset) score += 5;
  if (!checks.hasValidStructuredData) score += 10;
  if (checks.hasInvalidStructuredData) score += 10;
  score = Math.min(100, score);

  const recommendations = [];
  if (!checks.hasLang) recommendations.push({ title: "Add document language metadata", urgency: "high", detail: "Set the html lang attribute for machine readability and localization tooling." });
  if (!checks.hasCanonical) recommendations.push({ title: "Add canonical URL metadata", urgency: "medium", detail: "Use rel=canonical to reduce duplicate URL ambiguity for crawlers and tooling." });
  if (!checks.hasDescription) recommendations.push({ title: "Add meta description", urgency: "medium", detail: "Provide a concise description to improve machine interpretation and preview quality." });
  if (!checks.hasOpenGraphCore) recommendations.push({ title: "Complete Open Graph metadata", urgency: "medium", detail: "Include og:title, og:description, og:type, and og:url for robust machine-readable sharing metadata." });
  if (!checks.hasTwitterCard) recommendations.push({ title: "Add twitter:card metadata", urgency: "low", detail: "Include twitter card metadata to improve cross-platform machine-readable previews." });
  if (!checks.hasValidStructuredData || checks.hasInvalidStructuredData) recommendations.push({ title: "Validate JSON-LD structured data", urgency: "high", detail: "Ensure JSON-LD blocks are syntactically valid and match schema expectations." });

  if (recommendations.length === 0) {
    recommendations.push({ title: "Metadata structure looks healthy", urgency: "low", detail: "Core machine-readable metadata is present and no structural issues were detected." });
  }

  return {
    score,
    urgency: metadataUrgency(score),
    checks,
    observed: metadata,
    recommendations
  };
}

function metadataUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

async function buildLayoutAssessment({ browser, pageUrl }) {
  const devices = [
    { name: "mobile", width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
    { name: "tablet", width: 820, height: 1180, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  ];

  const outcomes = [];

  for (const device of devices) {
    let page;
    try {
      page = await browser.newPage();
      await page.setViewport(device);
      await page.goto(pageUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

      const result = await page.evaluate((deviceName) => {
        function isVisible(el) {
          const style = window.getComputedStyle(el);
          if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity || "1") === 0) {
            return false;
          }
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        }

        const viewportWidth = window.innerWidth;
        const doc = document.documentElement;
        const body = document.body;
        const contentWidth = Math.max(
          doc?.scrollWidth || 0,
          body?.scrollWidth || 0,
          doc?.offsetWidth || 0,
          body?.offsetWidth || 0
        );
        const horizontalOverflowPx = Math.max(0, contentWidth - viewportWidth);
        const hasHorizontalOverflow = horizontalOverflowPx > 1;

        let fixedWidthOffenders = 0;
        for (const el of document.querySelectorAll("body *")) {
          if (!isVisible(el)) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width > viewportWidth + 1) {
            fixedWidthOffenders += 1;
          }
        }

        let smallTapTargets = 0;
        const tapTargetSelectors = "a[href], button, input:not([type='hidden']), select, textarea, [role='button'], [tabindex]";
        for (const el of document.querySelectorAll(tapTargetSelectors)) {
          if (!isVisible(el)) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {
            smallTapTargets += 1;
          }
        }

        let oversizedMedia = 0;
        for (const el of document.querySelectorAll("img, video, iframe")) {
          if (!isVisible(el)) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width > viewportWidth + 1) {
            oversizedMedia += 1;
          }
        }

        return {
          device: deviceName,
          viewportWidth,
          viewportHeight: window.innerHeight,
          contentWidth,
          horizontalOverflowPx,
          hasHorizontalOverflow,
          fixedWidthOffenders,
          smallTapTargets,
          oversizedMedia
        };
      }, device.name);

      outcomes.push(result);
    } catch (error) {
      outcomes.push({
        device: device.name,
        error: error instanceof Error ? error.message : String(error)
      });
    } finally {
      if (page) {
        await page.close();
      }
    }
  }

  return scoreLayoutAssessment(outcomes);
}

function scoreLayoutAssessment(outcomes) {
  const checks = {
    testedMobile: outcomes.some((item) => item.device === "mobile" && !item.error),
    testedTablet: outcomes.some((item) => item.device === "tablet" && !item.error),
    horizontalOverflowOnMobile: false,
    horizontalOverflowOnTablet: false,
    mobileSmallTapTargets: 0,
    tabletSmallTapTargets: 0,
    fixedWidthOffenders: 0,
    oversizedMedia: 0,
    scanErrors: outcomes.filter((item) => item.error).length
  };

  let score = 0;

  for (const outcome of outcomes) {
    if (outcome.error) {
      score += 15;
      continue;
    }

    const isMobile = outcome.device === "mobile";
    const isTablet = outcome.device === "tablet";

    if (outcome.hasHorizontalOverflow) {
      score += isMobile ? 35 : 25;
      if (isMobile) checks.horizontalOverflowOnMobile = true;
      if (isTablet) checks.horizontalOverflowOnTablet = true;
    }

    const tapPenalty = Math.min(15, Math.round((outcome.smallTapTargets / 12) * 15));
    score += tapPenalty;
    if (isMobile) checks.mobileSmallTapTargets = outcome.smallTapTargets;
    if (isTablet) checks.tabletSmallTapTargets = outcome.smallTapTargets;

    score += Math.min(15, outcome.fixedWidthOffenders * 2);
    score += Math.min(10, outcome.oversizedMedia * 2);
    checks.fixedWidthOffenders += outcome.fixedWidthOffenders;
    checks.oversizedMedia += outcome.oversizedMedia;
  }

  score = Math.min(100, score);
  const recommendations = buildLayoutRecommendations({ checks, outcomes, score });

  return {
    score,
    urgency: layoutUrgency(score),
    checks,
    perDevice: outcomes,
    recommendations
  };
}

function buildLayoutRecommendations({ checks, score }) {
  const recommendations = [];

  if (checks.horizontalOverflowOnMobile || checks.horizontalOverflowOnTablet) {
    recommendations.push({
      title: "Prevent horizontal overflow across breakpoints",
      urgency: "high",
      detail: "Use fluid widths, max-width constraints, and avoid fixed pixel containers that exceed mobile or tablet viewports."
    });
  }

  if (checks.mobileSmallTapTargets > 0 || checks.tabletSmallTapTargets > 0) {
    recommendations.push({
      title: "Increase touch target sizes",
      urgency: checks.mobileSmallTapTargets > 20 ? "high" : "medium",
      detail: `Ensure interactive controls are at least 44x44 CSS px. Detected ${checks.mobileSmallTapTargets} small targets on mobile and ${checks.tabletSmallTapTargets} on tablet.`
    });
  }

  if (checks.fixedWidthOffenders > 0) {
    recommendations.push({
      title: "Refactor fixed-width components",
      urgency: checks.fixedWidthOffenders > 8 ? "high" : "medium",
      detail: `${checks.fixedWidthOffenders} element(s) exceeded viewport width in tested layouts; use responsive component constraints.`
    });
  }

  if (checks.oversizedMedia > 0) {
    recommendations.push({
      title: "Constrain media dimensions",
      urgency: "medium",
      detail: `${checks.oversizedMedia} media element(s) exceeded viewport width. Apply max-width: 100% and responsive media patterns.`
    });
  }

  if (checks.scanErrors > 0) {
    recommendations.push({
      title: "Stabilize layout checks for all devices",
      urgency: "medium",
      detail: `${checks.scanErrors} device layout check(s) did not complete. Ensure pages can be rendered consistently under mobile and tablet viewports.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Layout adaptation looks healthy",
      urgency: "low",
      detail: "No major mobile or tablet layout issues were detected in this sample."
    });
  }

  if (score >= 70 && recommendations[0]?.urgency !== "high") {
    recommendations[0].urgency = "high";
  }

  return recommendations;
}

function layoutUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

async function buildSecurityLightAssessment({ browser, pageUrl, audits }) {
  let page;
  try {
    page = await browser.newPage();
    const response = await page.goto(pageUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
    const headers = normalizeHeaders(response?.headers() || {});

    const sriDetails = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll("script[src]"));
      let externalScriptCount = 0;
      let externalScriptsWithoutIntegrity = 0;

      for (const script of scripts) {
        const src = script.getAttribute("src");
        if (!src) continue;

        try {
          const scriptUrl = new URL(src, window.location.href);
          if (scriptUrl.origin !== window.location.origin) {
            externalScriptCount += 1;
            if (!script.getAttribute("integrity")) {
              externalScriptsWithoutIntegrity += 1;
            }
          }
        } catch {
          continue;
        }
      }

      return {
        externalScriptCount,
        externalScriptsWithoutIntegrity
      };
    });

    const vulnerableLibrariesAudit = audits?.["no-vulnerable-libraries"];
    const vulnerableLibraries = extractVulnerableLibraries(vulnerableLibrariesAudit);
    const vulnerableLibraryCount = vulnerableLibraries.length;

    const checks = {
      isHttps: pageUrl.startsWith("https://"),
      hasHsts: Boolean(headers["strict-transport-security"]),
      hasCsp: Boolean(headers["content-security-policy"]),
      hasXContentTypeOptions: String(headers["x-content-type-options"] || "").toLowerCase().includes("nosniff"),
      hasReferrerPolicy: Boolean(headers["referrer-policy"]),
      hasPermissionsPolicy: Boolean(headers["permissions-policy"] || headers["feature-policy"]),
      exposesServerFingerprint: Boolean(headers.server || headers["x-powered-by"]),
      externalScriptCount: sriDetails.externalScriptCount,
      externalScriptsWithoutIntegrity: sriDetails.externalScriptsWithoutIntegrity,
      vulnerableLibraryCount
    };

    let score = 0;
    if (!checks.isHttps) score += 40;
    if (checks.isHttps && !checks.hasHsts) score += 15;
    if (!checks.hasCsp) score += 20;
    if (!checks.hasXContentTypeOptions) score += 8;
    if (!checks.hasReferrerPolicy) score += 5;
    if (!checks.hasPermissionsPolicy) score += 5;
    if (checks.exposesServerFingerprint) score += 4;
    if (checks.externalScriptsWithoutIntegrity > 0) {
      score += Math.min(10, checks.externalScriptsWithoutIntegrity * 2);
    }
    if (checks.vulnerableLibraryCount > 0) {
      score += 40;
    }
    score = Math.min(100, score);

    const recommendations = [];

    if (checks.vulnerableLibraryCount > 0) {
      recommendations.push({
        title: "Update vulnerable JavaScript libraries",
        urgency: "high",
        detail: `${checks.vulnerableLibraryCount} vulnerable library finding(s) reported by Lighthouse. Update or remove affected packages.`
      });
    }

    if (!checks.isHttps) {
      recommendations.push({
        title: "Enforce HTTPS",
        urgency: "high",
        detail: "Serve all pages over HTTPS and redirect HTTP requests permanently."
      });
    }

    if (!checks.hasCsp) {
      recommendations.push({
        title: "Add a Content-Security-Policy header",
        urgency: "high",
        detail: "Add an appropriate CSP to reduce script injection and resource loading risk."
      });
    }

    if (checks.isHttps && !checks.hasHsts) {
      recommendations.push({
        title: "Enable Strict-Transport-Security",
        urgency: "medium",
        detail: "Set a Strict-Transport-Security header to enforce HTTPS on repeat visits."
      });
    }

    if (!checks.hasXContentTypeOptions) {
      recommendations.push({
        title: "Set X-Content-Type-Options: nosniff",
        urgency: "medium",
        detail: "Prevent MIME type sniffing by adding the nosniff response header."
      });
    }

    if (!checks.hasReferrerPolicy) {
      recommendations.push({
        title: "Define a Referrer-Policy",
        urgency: "low",
        detail: "Set a referrer policy to reduce unnecessary URL data leakage."
      });
    }

    if (!checks.hasPermissionsPolicy) {
      recommendations.push({
        title: "Define a Permissions-Policy",
        urgency: "low",
        detail: "Restrict browser capabilities to only what the application needs."
      });
    }

    if (checks.externalScriptsWithoutIntegrity > 0) {
      recommendations.push({
        title: "Add SRI to external scripts",
        urgency: "medium",
        detail: `${checks.externalScriptsWithoutIntegrity} external script tag(s) are missing integrity attributes.`
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        title: "No major lightweight security flags detected",
        urgency: "low",
        detail: "Keep dependencies and response headers reviewed regularly as part of release checks."
      });
    }

    return {
      score,
      urgency: securityUrgency(score),
      checks,
      observed: {
        headers,
        vulnerableLibrariesAuditScore: typeof vulnerableLibrariesAudit?.score === "number" ? vulnerableLibrariesAudit.score : null,
        vulnerableLibraries
      },
      recommendations
    };
  } catch (error) {
    return {
      score: 0,
      urgency: "low",
      checks: {},
      observed: {},
      recommendations: [
        {
          title: "Lightweight security scan could not complete",
          urgency: "medium",
          detail: error instanceof Error ? error.message : String(error)
        }
      ]
    };
  } finally {
    if (page) {
      await page.close();
    }
  }
}

function normalizeHeaders(headers) {
  const out = {};
  for (const [key, value] of Object.entries(headers || {})) {
    out[String(key).toLowerCase()] = String(value || "").trim();
  }
  return out;
}

function extractVulnerableLibraries(audit) {
  const items = Array.isArray(audit?.details?.items) ? audit.details.items : [];
  return items.map((item) => {
    const library = item?.library || item?.detectedLib || item?.name || "unknown";
    const version = item?.version || item?.detectedVersion || item?.npmVersion || null;
    const vulnerabilities = Array.isArray(item?.vulnerabilities) ? item.vulnerabilities.length : null;
    const highestSeverity = item?.severity || item?.highestSeverity || null;
    return {
      library: String(library),
      version: version ? String(version) : null,
      vulnerabilities,
      severity: highestSeverity ? String(highestSeverity) : null
    };
  });
}

function securityUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

async function buildExpectedFilesAssessment({ pageUrl }) {
  const origin = safeOrigin(pageUrl);
  if (!origin) {
    return {
      score: 0,
      urgency: "low",
      origin: null,
      checks: [],
      recommendations: [
        {
          title: "Expected files check could not run",
          urgency: "medium",
          detail: "Could not determine a valid page origin for this URL."
        }
      ]
    };
  }

  const candidates = [
    { path: "/robots.txt", kind: "expected", weight: 30 },
    { path: "/sitemap.xml", kind: "beneficial", weight: 20 },
    { path: "/.well-known/security.txt", kind: "beneficial", weight: 15 },
    { path: "/manifest.webmanifest", kind: "beneficial", weight: 10 },
    { path: "/favicon.ico", kind: "beneficial", weight: 5 }
  ];

  const checks = [];
  let score = 0;

  for (const candidate of candidates) {
    const target = `${origin}${candidate.path}`;
    const result = await checkFileAvailability(target);
    const found = result.ok && result.status >= 200 && result.status < 400;

    if (!found) {
      score += candidate.weight;
    }

    checks.push({
      path: candidate.path,
      kind: candidate.kind,
      url: target,
      found,
      status: result.status,
      contentType: result.contentType
    });
  }

  score = Math.min(100, score);
  const recommendations = [];

  const missingExpected = checks.filter((item) => item.kind === "expected" && !item.found);
  const missingBeneficial = checks.filter((item) => item.kind === "beneficial" && !item.found);

  if (missingExpected.length > 0) {
    recommendations.push({
      title: "Add missing expected site files",
      urgency: "high",
      detail: `Missing expected file(s): ${missingExpected.map((item) => item.path).join(", ")}.`
    });
  }

  if (missingBeneficial.length > 0) {
    recommendations.push({
      title: "Add beneficial discoverability and maintenance files",
      urgency: missingBeneficial.length >= 3 ? "medium" : "low",
      detail: `Missing beneficial file(s): ${missingBeneficial.map((item) => item.path).join(", ")}.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Expected and beneficial files look healthy",
      urgency: "low",
      detail: "Core discoverability and maintenance support files were found at the site origin."
    });
  }

  return {
    score,
    urgency: expectedFilesUrgency(score),
    origin,
    checks,
    recommendations
  };
}

async function checkFileAvailability(url) {
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (response.status === 405 || response.status === 501) {
      response = await fetch(url, { method: "GET", redirect: "follow" });
    }

    return {
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type") || null
    };
  } catch {
    return {
      ok: false,
      status: null,
      contentType: null
    };
  }
}

function safeOrigin(value) {
  try {
    const url = new URL(value);
    return url.origin;
  } catch {
    return null;
  }
}

function expectedFilesUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}
