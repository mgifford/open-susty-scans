const { chromium } = require('playwright');

(async () => {
  const targetUrl = process.argv[2] || 'https://example.com';
  
  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Starting energy scan for: ${targetUrl}`);

  try {
    // 1. Visit the site and wait for the network to be idle
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 60000 });

    // 2. "Human-like" scrolling to trigger lazy-loading and JS execution
    // This is where most energy is often spent on modern sites.
    const scrollStep = 500; // pixels
    const scrollDelay = 300; // ms
    
    let currentPosition = 0;
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);

    while (currentPosition < totalHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), currentPosition);
      await page.waitForTimeout(scrollDelay);
      currentPosition += scrollStep;
    }

    // 3. Optional: Wait a few seconds at the bottom to capture "idle" CPU usage
    await page.waitForTimeout(2000);

    console.log(`Scan completed successfully.`);
  } catch (error) {
    console.error(`Scan failed: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
