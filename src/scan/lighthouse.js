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
            greenWeb
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
