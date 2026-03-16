import lighthouse from "lighthouse";
import { co2 as co2Factory } from "@tgwf/co2";
import puppeteer from "puppeteer";

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
        const transferBytes = lhr.audits?.["network-requests"]?.details?.items?.reduce((sum, item) => sum + (item.transferSize || 0), 0) || 0;
        const grams = co2Model.perByte(transferBytes);

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
            co2Milligrams: grams * 1000
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
