import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { analyzeDeadCodeFromLighthouse, analyzeModularizationFromLighthouse, analyzeNonCriticalResourcesFromLighthouse, analyzeRedundancyFromLighthouse, prioritizedFindingsFromLighthouse } from "../wsg/mapping.js";

const WSG_PERFORMANCE_ENERGY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#set-goals-based-on-performance-and-energy-impact";
const WSG_THIRD_PARTY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#give-third-parties-the-same-priority-as-first-parties-during-assessment";
const WSG_LAYOUT_SUPPORT_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#ensure-layouts-work-for-different-devices-and-requirements";
const WSG_SECURITY_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#ensure-that-your-code-is-secure";
const WSG_DEPENDENCY_MAINTENANCE_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#use-dependencies-appropriately-and-ensure-maintenance";
const WSG_EXPECTED_FILES_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#include-expected-and-beneficial-files";
const WSG_EFFICIENT_SOLUTION_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#use-the-most-efficient-solution-for-your-service";
const WSG_REDUCE_DATA_TRANSFER_COMPRESSION_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#reduce-data-transfer-with-compression";
const WSG_LATEST_STABLE_LANGUAGE_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#use-the-latest-stable-language-version";
const WSG_OFFLINE_ACCESS_URL = "https://www.w3.org/TR/web-sustainability-guidelines/#optimize-caching-and-support-offline-access";
const SWD_RATING_SOURCE_URL = "https://sustainablewebdesign.org/digital-carbon-ratings/";

const SWD_RATINGS = [
  { rating: "A+", maxTransferBytes: kbToBytes(272.51), maxCo2Grams: 0.040 },
  { rating: "A", maxTransferBytes: kbToBytes(531.15), maxCo2Grams: 0.079 },
  { rating: "B", maxTransferBytes: kbToBytes(975.85), maxCo2Grams: 0.145 },
  { rating: "C", maxTransferBytes: kbToBytes(1410.39), maxCo2Grams: 0.209 },
  { rating: "D", maxTransferBytes: kbToBytes(1875.01), maxCo2Grams: 0.278 },
  { rating: "E", maxTransferBytes: kbToBytes(2419.56), maxCo2Grams: 0.359 },
  { rating: "F", maxTransferBytes: Number.POSITIVE_INFINITY, maxCo2Grams: Number.POSITIVE_INFINITY }
];

export function buildReportBundle({ scanTitle, issueNumber, urls, results, wsgIndex }) {
  const generatedAt = new Date().toISOString();

  const perUrl = results.map((result) => {
    if (result.status !== "ok") {
      return {
        url: result.url,
        status: result.status,
        error: result.error,
        findings: []
      };
    }

    const findings = prioritizedFindingsFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const redundancy = analyzeRedundancyFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const modularization = analyzeModularizationFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const deadCode = analyzeDeadCodeFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const nonCriticalResources = analyzeNonCriticalResourcesFromLighthouse({ audits: result.lighthouse.audits }, wsgIndex);
    const thirdPartyJs = analyzeThirdPartyJs({
      finalUrl: result.lighthouse.finalUrl,
      greenWeb: result.sustainability.greenWeb
    });
    const compressionOpportunities = analyzeCompressionOpportunities({ audits: result.lighthouse.audits });
    const optimizationOpportunities = analyzeOptimizationOpportunities({ audits: result.lighthouse.audits });
    const dependencyMaintenance = analyzeDependencyMaintenance(result.sustainability.securityLight);
    const offlineSupport = analyzeOfflineSupport({ audits: result.lighthouse.audits });
    const languageVersionGuidance = analyzeLanguageVersionGuidance({
      securityLight: result.sustainability.securityLight,
      dependencyMaintenance
    });
    return {
      url: result.url,
      status: "ok",
      finalUrl: result.lighthouse.finalUrl,
      performanceScore: result.lighthouse.categories.performance,
      bestPracticesScore: result.lighthouse.categories.bestPractices,
      transferBytes: result.sustainability.transferBytes,
      co2Grams: result.sustainability.co2Grams,
      greenWeb: result.sustainability.greenWeb,
      formValidation: result.sustainability.formValidation,
      metadata: result.sustainability.metadata,
      layoutAdaptation: result.sustainability.layoutAdaptation,
      securityLight: result.sustainability.securityLight,
      expectedFiles: result.sustainability.expectedFiles,
      compressionOpportunities,
      optimizationOpportunities,
      dependencyMaintenance,
      offlineSupport,
      languageVersionGuidance,
      deadCode,
      nonCriticalResources,
      thirdPartyJs,
      redundancy,
      modularization,
      findings
    };
  });

  const summary = buildSummary(perUrl);
  const budgetGuidance = buildBudgetGuidance(summary);
  const crossPagePatterns = buildCrossPagePatterns(perUrl);
  const thirdPartyJsSummary = buildThirdPartyJsSummary(perUrl);
  const externalProviderRiskSummary = buildExternalProviderRiskSummary(perUrl);
  const formValidationSummary = buildFormValidationSummary(perUrl);
  const metadataSummary = buildMetadataSummary(perUrl);
  const layoutSupportSummary = buildLayoutSupportSummary(perUrl);
  const securityLightSummary = buildSecurityLightSummary(perUrl);
  const dependencyMaintenanceSummary = buildDependencyMaintenanceSummary(perUrl);
  const expectedFilesSummary = buildExpectedFilesSummary(perUrl);
  const compressionSummary = buildCompressionSummary(perUrl);
  const optimizationSummary = buildOptimizationSummary(perUrl);
  const offlineSupportSummary = buildOfflineSupportSummary(perUrl);
  const languageVersionSummary = buildLanguageVersionSummary(perUrl);
  const siteGuidance = buildSiteGuidance(perUrl);

  return {
    version: "0.1.0",
    scanTitle,
    issueNumber,
    generatedAt,
    requestedUrls: urls,
    summary,
    budgetGuidance,
    thirdPartyJsSummary,
    externalProviderRiskSummary,
    formValidationSummary,
    metadataSummary,
    layoutSupportSummary,
    securityLightSummary,
    dependencyMaintenanceSummary,
    expectedFilesSummary,
    compressionSummary,
    optimizationSummary,
    offlineSupportSummary,
    languageVersionSummary,
    siteGuidance,
    crossPagePatterns,
    results: perUrl
  };
}

function buildSummary(perUrl) {
  const ok = perUrl.filter((item) => item.status === "ok");
  const errors = perUrl.filter((item) => item.status !== "ok");

  const avgPerformance = average(ok.map((item) => item.performanceScore));
  const avgBestPractices = average(ok.map((item) => item.bestPracticesScore));
  const totalBytes = ok.reduce((sum, item) => sum + (item.transferBytes || 0), 0);
  const totalCo2 = ok.reduce((sum, item) => sum + (item.co2Grams || 0), 0);
  const averageTransferBytes = ok.length > 0 ? totalBytes / ok.length : null;
  const averageCo2GramsPerPage = ok.length > 0 ? totalCo2 / ok.length : null;
  const averageRedundancyScore = average(ok.map((item) => item.redundancy?.score));
  const highUrgencyRedundancyCount = ok.filter((item) => item.redundancy?.urgency === "high").length;
  const averageModularizationScore = average(ok.map((item) => item.modularization?.score));
  const highUrgencyModularizationCount = ok.filter((item) => item.modularization?.urgency === "high").length;
  const averageDeadCodeScore = average(ok.map((item) => item.deadCode?.score));
  const highUrgencyDeadCodeCount = ok.filter((item) => item.deadCode?.urgency === "high").length;
  const averageNonCriticalResourcesScore = average(ok.map((item) => item.nonCriticalResources?.score));
  const highUrgencyNonCriticalResourcesCount = ok.filter((item) => item.nonCriticalResources?.urgency === "high").length;
  const averageFormValidationScore = average(ok.map((item) => item.formValidation?.score));
  const highUrgencyFormValidationCount = ok.filter((item) => item.formValidation?.urgency === "high").length;
  const averageMetadataScore = average(ok.map((item) => item.metadata?.score));
  const highUrgencyMetadataCount = ok.filter((item) => item.metadata?.urgency === "high").length;
  const averageLayoutAdaptationScore = average(ok.map((item) => item.layoutAdaptation?.score));
  const highUrgencyLayoutAdaptationCount = ok.filter((item) => item.layoutAdaptation?.urgency === "high").length;
  const averageSecurityLightScore = average(ok.map((item) => item.securityLight?.score));
  const highUrgencySecurityLightCount = ok.filter((item) => item.securityLight?.urgency === "high").length;
  const averageDependencyMaintenanceScore = average(ok.map((item) => item.dependencyMaintenance?.score));
  const highUrgencyDependencyMaintenanceCount = ok.filter((item) => item.dependencyMaintenance?.urgency === "high").length;
  const averageExpectedFilesScore = average(ok.map((item) => item.expectedFiles?.score));
  const highUrgencyExpectedFilesCount = ok.filter((item) => item.expectedFiles?.urgency === "high").length;
  const averageCompressionScore = average(ok.map((item) => item.compressionOpportunities?.score));
  const highUrgencyCompressionCount = ok.filter((item) => item.compressionOpportunities?.urgency === "high").length;
  const averageOptimizationScore = average(ok.map((item) => item.optimizationOpportunities?.score));
  const highUrgencyOptimizationCount = ok.filter((item) => item.optimizationOpportunities?.urgency === "high").length;
  const averageOfflineSupportScore = average(ok.map((item) => item.offlineSupport?.score));
  const highUrgencyOfflineSupportCount = ok.filter((item) => item.offlineSupport?.urgency === "high").length;
  const averageLanguageVersionScore = average(ok.map((item) => item.languageVersionGuidance?.score));
  const highUrgencyLanguageVersionCount = ok.filter((item) => item.languageVersionGuidance?.urgency === "high").length;
  const siteOrigins = Array.from(new Set(ok.map((item) => safeOrigin(item.finalUrl || item.url)).filter(Boolean)));
  const greenWeb = buildGreenWebSummary(ok);

  return {
    okCount: ok.length,
    errorCount: errors.length,
    averagePerformanceScore: avgPerformance,
    averageBestPracticesScore: avgBestPractices,
    totalTransferBytes: totalBytes,
    totalCo2Grams: totalCo2,
    averageTransferBytes,
    averageCo2GramsPerPage,
    averageRedundancyScore,
    highUrgencyRedundancyCount,
    averageModularizationScore,
    highUrgencyModularizationCount,
    averageDeadCodeScore,
    highUrgencyDeadCodeCount,
    averageNonCriticalResourcesScore,
    highUrgencyNonCriticalResourcesCount,
    averageFormValidationScore,
    highUrgencyFormValidationCount,
    averageMetadataScore,
    highUrgencyMetadataCount,
    averageLayoutAdaptationScore,
    highUrgencyLayoutAdaptationCount,
    averageSecurityLightScore,
    highUrgencySecurityLightCount,
    averageDependencyMaintenanceScore,
    highUrgencyDependencyMaintenanceCount,
    averageExpectedFilesScore,
    highUrgencyExpectedFilesCount,
    averageCompressionScore,
    highUrgencyCompressionCount,
    averageOptimizationScore,
    highUrgencyOptimizationCount,
    averageOfflineSupportScore,
    highUrgencyOfflineSupportCount,
    averageLanguageVersionScore,
    highUrgencyLanguageVersionCount,
    distinctSiteCount: siteOrigins.length,
    singleSiteScan: siteOrigins.length <= 1,
    greenWeb
  };
}

function buildSiteGuidance(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const byOrigin = new Map();

  for (const entry of okEntries) {
    const origin = safeOrigin(entry.finalUrl || entry.url);
    if (!origin) continue;
    const group = byOrigin.get(origin) || [];
    group.push(entry);
    byOrigin.set(origin, group);
  }

  const sites = Array.from(byOrigin.entries()).map(([origin, entries]) => {
    const sharedRecommendations = [];
    const pageCount = entries.length;

    const expectedMissingCount = (path) => entries.filter((entry) => !entry.expectedFiles?.checks?.find((item) => item.path === path)?.found).length;

    const robotsMissing = expectedMissingCount("/robots.txt");
    if (robotsMissing === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "expected-files",
        urgency: "high",
        title: "Add robots.txt at site origin",
        detail: `robots.txt is missing for all sampled pages on ${origin}.`
      });
    }

    const sitemapMissing = expectedMissingCount("/sitemap.xml");
    if (sitemapMissing === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "expected-files",
        urgency: "medium",
        title: "Add sitemap.xml at site origin",
        detail: `sitemap.xml is missing for all sampled pages on ${origin}.`
      });
    }

    const securityTxtMissing = expectedMissingCount("/.well-known/security.txt");
    if (securityTxtMissing === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "expected-files",
        urgency: "low",
        title: "Publish .well-known/security.txt",
        detail: `.well-known/security.txt is missing for all sampled pages on ${origin}.`
      });
    }

    const pagesWithoutCsp = entries.filter((entry) => !entry.securityLight?.checks?.hasCsp).length;
    if (pagesWithoutCsp === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "security-headers",
        urgency: "high",
        title: "Apply Content-Security-Policy site-wide",
        detail: `CSP is absent across all sampled pages on ${origin}.`
      });
    }

    const pagesWithoutHsts = entries.filter((entry) => entry.securityLight?.checks?.isHttps && !entry.securityLight?.checks?.hasHsts).length;
    if (pagesWithoutHsts === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "security-headers",
        urgency: "medium",
        title: "Enable Strict-Transport-Security site-wide",
        detail: `HSTS is missing across all sampled HTTPS pages on ${origin}.`
      });
    }

    const pagesWithoutServiceWorker = entries.filter((entry) => !entry.offlineSupport?.checks?.hasServiceWorker).length;
    if (pagesWithoutServiceWorker === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "offline-support",
        urgency: "high",
        title: "Introduce service worker support",
        detail: `No sampled pages on ${origin} indicate service worker support for offline resilience.`
      });
    }

    const pagesWithoutOfflineSupport = entries.filter((entry) => !entry.offlineSupport?.checks?.worksOffline).length;
    if (pagesWithoutOfflineSupport === pageCount && pageCount > 0) {
      sharedRecommendations.push({
        area: "offline-support",
        urgency: "high",
        title: "Support offline fallback behavior",
        detail: `Offline page behavior was not detected across sampled pages on ${origin}.`
      });
    }

    const recurringOptimization = new Map();
    for (const entry of entries) {
      for (const opportunity of entry.optimizationOpportunities?.opportunities || []) {
        const key = opportunity.id;
        const current = recurringOptimization.get(key) || {
          id: opportunity.id,
          title: opportunity.title,
          pageCount: 0,
          totalEstimatedSavingsBytes: 0,
          totalEstimatedBlockingMs: 0,
          pages: new Set()
        };
        if (!current.pages.has(entry.url)) {
          current.pages.add(entry.url);
          current.pageCount += 1;
        }
        current.totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
        current.totalEstimatedBlockingMs += opportunity.estimatedBlockingMs || 0;
        recurringOptimization.set(key, current);
      }
    }

    const recurringOptimizationItems = Array.from(recurringOptimization.values())
      .filter((item) => item.pageCount > 1)
      .map(({ pages, ...rest }) => rest)
      .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes);

    if (recurringOptimizationItems.length > 0) {
      const top = recurringOptimizationItems[0];
      sharedRecommendations.push({
        area: "optimization",
        urgency: "medium",
        title: "Fix recurring optimization bloat at shared layer",
        detail: `${top.title} recurs across ${top.pageCount} pages on ${origin}${top.totalEstimatedSavingsBytes > 0 ? ` (est. ${formatBytes(top.totalEstimatedSavingsBytes)} aggregate savings)` : ""}.`
      });
    }

    const recurringCompressionMap = new Map();
    for (const entry of entries) {
      for (const opportunity of entry.compressionOpportunities?.opportunities || []) {
        const key = opportunity.id;
        const current = recurringCompressionMap.get(key) || {
          id: opportunity.id,
          title: opportunity.title,
          urgency: opportunity.urgency || "medium",
          pageCount: 0,
          totalEstimatedSavingsBytes: 0,
          pages: new Set()
        };

        if (!current.pages.has(entry.url)) {
          current.pages.add(entry.url);
          current.pageCount += 1;
        }

        current.totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
        current.urgency = maxUrgency(current.urgency, opportunity.urgency || "medium");
        recurringCompressionMap.set(key, current);
      }
    }

    const recurringCompression = Array.from(recurringCompressionMap.values())
      .filter((item) => item.pageCount > 1)
      .map(({ pages, ...rest }) => rest)
      .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes);

    if (recurringCompression.length > 0) {
      const top = recurringCompression[0];
      sharedRecommendations.push({
        area: "compression",
        urgency: top.urgency,
        title: "Prioritize recurring compression fixes",
        detail: `${top.title} recurs across ${top.pageCount} pages on ${origin}${top.totalEstimatedSavingsBytes > 0 ? ` (est. ${formatBytes(top.totalEstimatedSavingsBytes)} aggregate savings)` : ""}.`
      });
    }

    const recurringOfflineMap = new Map();
    for (const entry of entries) {
      for (const opportunity of entry.offlineSupport?.opportunities || []) {
        const key = opportunity.id;
        const current = recurringOfflineMap.get(key) || {
          id: opportunity.id,
          title: opportunity.title,
          urgency: opportunity.urgency || "medium",
          pageCount: 0,
          pages: new Set()
        };

        if (!current.pages.has(entry.url)) {
          current.pages.add(entry.url);
          current.pageCount += 1;
        }

        current.urgency = maxUrgency(current.urgency, opportunity.urgency || "medium");
        recurringOfflineMap.set(key, current);
      }
    }

    const recurringOfflineOpportunities = Array.from(recurringOfflineMap.values())
      .filter((item) => item.pageCount > 1)
      .map(({ pages, ...rest }) => rest)
      .sort((a, b) => b.pageCount - a.pageCount || String(a.title).localeCompare(String(b.title)));

    if (recurringOfflineOpportunities.length > 0) {
      const top = recurringOfflineOpportunities[0];
      sharedRecommendations.push({
        area: "offline-support",
        urgency: top.urgency,
        title: "Prioritize recurring offline/caching improvements",
        detail: `${top.title} is needed across ${top.pageCount} pages on ${origin}.`
      });
    }

    const recurringDependencyMap = new Map();
    for (const entry of entries) {
      for (const dependency of entry.dependencyMaintenance?.vulnerableLibraries || []) {
        const key = `${dependency.library}|${dependency.version || "unknown"}`;
        const current = recurringDependencyMap.get(key) || {
          library: dependency.library,
          version: dependency.version || null,
          pageCount: 0,
          pages: new Set(),
          severity: dependency.severity || null
        };
        if (!current.pages.has(entry.url)) {
          current.pages.add(entry.url);
          current.pageCount += 1;
        }
        recurringDependencyMap.set(key, current);
      }
    }

    const recurringDependencies = Array.from(recurringDependencyMap.values())
      .filter((item) => item.pageCount > 1)
      .map(({ pages, ...rest }) => rest)
      .sort((a, b) => b.pageCount - a.pageCount || String(a.library).localeCompare(String(b.library)));

    if (recurringDependencies.length > 0) {
      const top = recurringDependencies[0];
      sharedRecommendations.push({
        area: "dependency-maintenance",
        urgency: "high",
        title: "Prioritize recurring vulnerable dependencies",
        detail: `${top.library}${top.version ? `@${top.version}` : ""} appears as vulnerable across ${top.pageCount} pages on ${origin}.`
      });
    }

    const recurringRuntimeMap = new Map();
    for (const entry of entries) {
      for (const signal of entry.languageVersionGuidance?.outdatedTechnologies || []) {
        const key = `${signal.family}|${signal.version || "unknown"}|${signal.recommendedBaseline || ""}`;
        const current = recurringRuntimeMap.get(key) || {
          family: signal.family,
          version: signal.version || null,
          recommendedBaseline: signal.recommendedBaseline || null,
          urgency: signal.urgency || "medium",
          pageCount: 0,
          pages: new Set()
        };

        if (!current.pages.has(entry.url)) {
          current.pages.add(entry.url);
          current.pageCount += 1;
        }

        current.urgency = maxUrgency(current.urgency, signal.urgency || "medium");
        recurringRuntimeMap.set(key, current);
      }
    }

    const recurringRuntimeSignals = Array.from(recurringRuntimeMap.values())
      .filter((item) => item.pageCount > 1)
      .map(({ pages, ...rest }) => rest)
      .sort((a, b) => b.pageCount - a.pageCount || String(a.family).localeCompare(String(b.family)));

    if (recurringRuntimeSignals.length > 0) {
      const top = recurringRuntimeSignals[0];
      sharedRecommendations.push({
        area: "language-version",
        urgency: top.urgency || "medium",
        title: "Modernize recurring runtime/language versions",
        detail: `${top.family}${top.version ? ` ${top.version}` : ""} appears outdated across ${top.pageCount} pages on ${origin}${top.recommendedBaseline ? ` (baseline ${top.recommendedBaseline}+).` : "."}`
      });
    }

    const pageSpecific = entries
      .map((entry) => ({
        url: entry.url,
        securityScore: entry.securityLight?.score || 0,
        dependencyScore: entry.dependencyMaintenance?.score || 0,
        expectedFilesScore: entry.expectedFiles?.score || 0,
        compressionScore: entry.compressionOpportunities?.score || 0,
        optimizationScore: entry.optimizationOpportunities?.score || 0,
        offlineScore: entry.offlineSupport?.score || 0,
        languageScore: entry.languageVersionGuidance?.score || 0,
        urgency: highestUrgency([
          entry.securityLight?.urgency,
          entry.dependencyMaintenance?.urgency,
          entry.expectedFiles?.urgency,
          entry.compressionOpportunities?.urgency,
          entry.optimizationOpportunities?.urgency,
          entry.offlineSupport?.urgency,
          entry.languageVersionGuidance?.urgency
        ]),
        topRecommendations: [
          ...(entry.compressionOpportunities?.recommendations || []),
          ...(entry.optimizationOpportunities?.recommendations || []),
          ...(entry.offlineSupport?.recommendations || []),
          ...(entry.dependencyMaintenance?.recommendations || []),
          ...(entry.languageVersionGuidance?.recommendations || []),
          ...(entry.securityLight?.recommendations || []),
          ...(entry.expectedFiles?.recommendations || [])
        ].slice(0, 4)
      }))
      .sort((a, b) => (b.compressionScore + b.optimizationScore + b.offlineScore + b.dependencyScore + b.languageScore + b.securityScore + b.expectedFilesScore) - (a.compressionScore + a.optimizationScore + a.offlineScore + a.dependencyScore + a.languageScore + a.securityScore + a.expectedFilesScore));

    return {
      origin,
      pageCount,
      sharedRecommendations,
      recurringCompression: recurringCompression.slice(0, 10),
      recurringOptimization: recurringOptimizationItems.slice(0, 10),
      recurringOfflineOpportunities: recurringOfflineOpportunities.slice(0, 10),
      recurringDependencies: recurringDependencies.slice(0, 10),
      recurringRuntimeSignals: recurringRuntimeSignals.slice(0, 10),
      pageSpecific
    };
  }).sort((a, b) => b.pageCount - a.pageCount || String(a.origin).localeCompare(String(b.origin)));

  return {
    siteCount: sites.length,
    singleSiteScan: sites.length <= 1,
    sites
  };
}

function buildExpectedFilesSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const missing = {
    robotsTxt: 0,
    sitemapXml: 0,
    securityTxt: 0,
    webManifest: 0,
    favicon: 0
  };

  for (const entry of okEntries) {
    const checks = entry.expectedFiles?.checks || [];
    if (!checks.find((item) => item.path === "/robots.txt")?.found) missing.robotsTxt += 1;
    if (!checks.find((item) => item.path === "/sitemap.xml")?.found) missing.sitemapXml += 1;
    if (!checks.find((item) => item.path === "/.well-known/security.txt")?.found) missing.securityTxt += 1;
    if (!checks.find((item) => item.path === "/manifest.webmanifest")?.found) missing.webManifest += 1;
    if (!checks.find((item) => item.path === "/favicon.ico")?.found) missing.favicon += 1;
  }

  return {
    wsgReference: {
      title: "Include expected and beneficial files",
      url: WSG_EXPECTED_FILES_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.expectedFiles?.score)),
    highUrgencyPages: okEntries.filter((item) => item.expectedFiles?.urgency === "high").length,
    missing
  };
}

function buildOptimizationSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const recurringMap = new Map();
  let totalEstimatedSavingsBytes = 0;
  let totalEstimatedBlockingMs = 0;

  for (const entry of okEntries) {
    const opportunities = entry.optimizationOpportunities?.opportunities || [];
    for (const opportunity of opportunities) {
      const current = recurringMap.get(opportunity.id) || {
        id: opportunity.id,
        title: opportunity.title,
        pageCount: 0,
        totalEstimatedSavingsBytes: 0,
        totalEstimatedBlockingMs: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
      current.totalEstimatedBlockingMs += opportunity.estimatedBlockingMs || 0;
      totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
      totalEstimatedBlockingMs += opportunity.estimatedBlockingMs || 0;

      recurringMap.set(opportunity.id, current);
    }
  }

  const recurringOpportunities = Array.from(recurringMap.values())
    .filter((item) => item.pageCount > 1)
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes)
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Use the most efficient solution for your service",
      url: WSG_EFFICIENT_SOLUTION_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.optimizationOpportunities?.score)),
    highUrgencyPages: okEntries.filter((item) => item.optimizationOpportunities?.urgency === "high").length,
    totalEstimatedSavingsBytes,
    totalEstimatedBlockingMs,
    recurringOpportunities
  };
}

function buildCompressionSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const recurringMap = new Map();
  let totalEstimatedSavingsBytes = 0;
  let pagesMissingTextCompression = 0;

  for (const entry of okEntries) {
    const checks = entry.compressionOpportunities?.checks || {};
    if (!checks.hasEffectiveTextCompression) {
      pagesMissingTextCompression += 1;
    }

    for (const opportunity of entry.compressionOpportunities?.opportunities || []) {
      const current = recurringMap.get(opportunity.id) || {
        id: opportunity.id,
        title: opportunity.title,
        urgency: opportunity.urgency || "medium",
        pageCount: 0,
        totalEstimatedSavingsBytes: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
      current.urgency = maxUrgency(current.urgency, opportunity.urgency || "medium");
      recurringMap.set(opportunity.id, current);
      totalEstimatedSavingsBytes += opportunity.estimatedSavingsBytes || 0;
    }
  }

  const recurringOpportunities = Array.from(recurringMap.values())
    .filter((item) => item.pageCount > 1)
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes)
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Reduce data transfer with compression",
      url: WSG_REDUCE_DATA_TRANSFER_COMPRESSION_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.compressionOpportunities?.score)),
    highUrgencyPages: okEntries.filter((item) => item.compressionOpportunities?.urgency === "high").length,
    pagesMissingTextCompression,
    totalEstimatedSavingsBytes,
    recurringOpportunities
  };
}

function analyzeCompressionOpportunities({ audits }) {
  const transferBytes = extractTransferBytesFromNetworkRequests(audits);
  const opportunities = [];

  const textCompressionAudit = audits?.["uses-text-compression"];
  const textCompressionSavings = getSavingsBytes(textCompressionAudit);
  if (textCompressionSavings > 0) {
    opportunities.push({
      id: "uses-text-compression",
      title: "Enable Brotli/gzip for text assets",
      urgency: textCompressionSavings >= 120 * 1024 ? "high" : textCompressionSavings >= 30 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: textCompressionSavings,
      detail: "Compress HTML, CSS, JS, JSON, SVG, and XML responses with Brotli or gzip."
    });
  }

  const imageFormatSavings = getSavingsBytes(audits?.["modern-image-formats"]);
  if (imageFormatSavings > 0) {
    opportunities.push({
      id: "modern-image-formats",
      title: "Use modern image compression formats",
      urgency: imageFormatSavings >= 200 * 1024 ? "high" : imageFormatSavings >= 50 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: imageFormatSavings,
      detail: "Prefer AVIF/WebP over legacy formats where possible to reduce transfer size."
    });
  }

  const imageEncodingSavings = getSavingsBytes(audits?.["uses-optimized-images"]);
  if (imageEncodingSavings > 0) {
    opportunities.push({
      id: "uses-optimized-images",
      title: "Improve image encoding quality/size",
      urgency: imageEncodingSavings >= 160 * 1024 ? "high" : imageEncodingSavings >= 40 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: imageEncodingSavings,
      detail: "Re-encode oversized images and tune compression quality for significant byte savings."
    });
  }

  const cssMinSavings = getSavingsBytes(audits?.["unminified-css"]);
  if (cssMinSavings > 0) {
    opportunities.push({
      id: "unminified-css",
      title: "Minify CSS before transfer",
      urgency: cssMinSavings >= 80 * 1024 ? "high" : cssMinSavings >= 20 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: cssMinSavings,
      detail: "Minification amplifies compression efficiency and reduces payload size."
    });
  }

  const jsMinSavings = getSavingsBytes(audits?.["unminified-javascript"]);
  if (jsMinSavings > 0) {
    opportunities.push({
      id: "unminified-javascript",
      title: "Minify JavaScript before transfer",
      urgency: jsMinSavings >= 80 * 1024 ? "high" : jsMinSavings >= 20 * 1024 ? "medium" : "low",
      estimatedSavingsBytes: jsMinSavings,
      detail: "Minify JS bundles so transport compression produces better results with fewer bytes."
    });
  }

  const totalEstimatedSavingsBytes = opportunities.reduce((sum, item) => sum + (item.estimatedSavingsBytes || 0), 0);
  const savingsRatio = transferBytes > 0 ? Math.min(1, totalEstimatedSavingsBytes / transferBytes) : 0;
  const score = Math.min(100, Math.round(savingsRatio * 100));
  const urgency = score >= 60 ? "high" : score >= 30 ? "medium" : "low";

  const sorted = opportunities.sort((a, b) => {
    const rank = { high: 2, medium: 1, low: 0 };
    const delta = (rank[b.urgency] || 0) - (rank[a.urgency] || 0);
    if (delta !== 0) return delta;
    return (b.estimatedSavingsBytes || 0) - (a.estimatedSavingsBytes || 0);
  });

  const recommendations = sorted.slice(0, 6).map((item) => ({
    title: item.title,
    urgency: item.urgency,
    detail: `${item.detail}${item.estimatedSavingsBytes > 0 ? ` Estimated savings: ${formatBytes(item.estimatedSavingsBytes)}.` : ""}`
  }));

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No major compression opportunity detected",
      urgency: "low",
      detail: "Compression signals look healthy in current Lighthouse audits; continue enforcing compression and asset encoding in CI/CD."
    });
  }

  return {
    wsgReference: {
      title: "Reduce data transfer with compression",
      url: WSG_REDUCE_DATA_TRANSFER_COMPRESSION_URL
    },
    score,
    urgency,
    totalEstimatedSavingsBytes,
    checks: {
      hasEffectiveTextCompression: textCompressionSavings <= 0
    },
    opportunities: sorted,
    recommendations
  };
}

function buildOfflineSupportSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const recurringMap = new Map();
  let pagesWithoutServiceWorker = 0;
  let pagesWithoutOfflineSupport = 0;
  let pagesWithWeakCacheTtl = 0;

  for (const entry of okEntries) {
    const checks = entry.offlineSupport?.checks || {};
    if (!checks.hasServiceWorker) pagesWithoutServiceWorker += 1;
    if (!checks.worksOffline) pagesWithoutOfflineSupport += 1;
    if ((checks.longCacheTtlScore ?? 1) < 0.9) pagesWithWeakCacheTtl += 1;

    for (const opportunity of entry.offlineSupport?.opportunities || []) {
      const current = recurringMap.get(opportunity.id) || {
        id: opportunity.id,
        title: opportunity.title,
        urgency: opportunity.urgency || "medium",
        pageCount: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.urgency = maxUrgency(current.urgency, opportunity.urgency || "medium");
      recurringMap.set(opportunity.id, current);
    }
  }

  const recurringOpportunities = Array.from(recurringMap.values())
    .filter((item) => item.pageCount > 1)
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || String(a.title).localeCompare(String(b.title)))
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Optimize caching and support offline access",
      url: WSG_OFFLINE_ACCESS_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.offlineSupport?.score)),
    highUrgencyPages: okEntries.filter((item) => item.offlineSupport?.urgency === "high").length,
    pagesWithoutServiceWorker,
    pagesWithoutOfflineSupport,
    pagesWithWeakCacheTtl,
    recurringOpportunities
  };
}

function analyzeOfflineSupport({ audits }) {
  const serviceWorkerAudit = audits?.["service-worker"];
  const worksOfflineAudit = audits?.["works-offline"];
  const installableManifestAudit = audits?.["installable-manifest"];
  const offlineStartUrlAudit = audits?.["offline-start-url"];
  const longCacheTtlAudit = audits?.["uses-long-cache-ttl"];

  const checks = {
    hasServiceWorker: isPassingAudit(serviceWorkerAudit),
    worksOffline: isPassingAudit(worksOfflineAudit),
    hasInstallableManifest: isPassingAudit(installableManifestAudit),
    hasOfflineStartUrl: isPassingAudit(offlineStartUrlAudit),
    longCacheTtlScore: normalizeAuditScore(longCacheTtlAudit),
    cacheSavingsBytes: getSavingsBytes(longCacheTtlAudit)
  };

  let score = 0;
  if (!checks.hasServiceWorker) score += 40;
  if (!checks.worksOffline) score += 30;
  if (!checks.hasInstallableManifest) score += 10;
  if (!checks.hasOfflineStartUrl) score += 10;
  score += Math.round((1 - checks.longCacheTtlScore) * 20);
  score = Math.min(100, Math.max(0, score));

  const urgency = score >= 60 ? "high" : score >= 30 ? "medium" : "low";
  const opportunities = [];

  if (!checks.hasServiceWorker) {
    opportunities.push({
      id: "service-worker",
      title: "Add service worker support",
      urgency: "high",
      detail: "Register a service worker to support resilient caching and offline behavior for key routes."
    });
  }

  if (!checks.worksOffline) {
    opportunities.push({
      id: "works-offline",
      title: "Ensure critical routes work offline",
      urgency: "high",
      detail: "Provide an offline fallback strategy for key pages and shell assets."
    });
  }

  if (!checks.hasInstallableManifest) {
    opportunities.push({
      id: "installable-manifest",
      title: "Improve web app manifest support",
      urgency: "medium",
      detail: "Complete manifest fields so clients can install and run an app-like experience."
    });
  }

  if (!checks.hasOfflineStartUrl) {
    opportunities.push({
      id: "offline-start-url",
      title: "Support offline start URL behavior",
      urgency: "medium",
      detail: "Ensure start URL and shell routing can load in disconnected conditions."
    });
  }

  if (checks.longCacheTtlScore < 0.9) {
    opportunities.push({
      id: "uses-long-cache-ttl",
      title: "Strengthen static asset cache TTL",
      urgency: checks.longCacheTtlScore < 0.5 ? "high" : "medium",
      detail: `Improve long-lived cache headers for immutable static assets${checks.cacheSavingsBytes > 0 ? ` (estimated savings opportunity: ${formatBytes(checks.cacheSavingsBytes)})` : ""}.`
    });
  }

  const recommendations = opportunities.map((item) => ({
    title: item.title,
    urgency: item.urgency,
    detail: item.detail
  }));

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Offline and caching support looks healthy",
      urgency: "low",
      detail: "Current Lighthouse signals indicate good support for caching and offline access in the sampled page."
    });
  }

  return {
    wsgReference: {
      title: "Optimize caching and support offline access",
      url: WSG_OFFLINE_ACCESS_URL
    },
    score,
    urgency,
    checks,
    opportunities,
    recommendations
  };
}

function isPassingAudit(audit) {
  return normalizeAuditScore(audit) >= 0.9;
}

function normalizeAuditScore(audit) {
  if (!audit || typeof audit !== "object") return 0;
  if (typeof audit.score === "number" && Number.isFinite(audit.score)) {
    return Math.max(0, Math.min(1, audit.score));
  }
  return 0;
}

function analyzeOptimizationOpportunities({ audits }) {
  const transferBytes = extractTransferBytesFromNetworkRequests(audits);
  const opportunities = [];

  const candidateConfigs = [
    {
      id: "modern-image-formats",
      title: "Serve images in next-gen formats",
      detail: "Convert high-byte images to more efficient formats such as AVIF or WebP.",
      sourceAuditId: "modern-image-formats",
      urgencyThresholds: { high: 200 * 1024, medium: 50 * 1024 }
    },
    {
      id: "uses-optimized-images",
      title: "Compress oversized image assets",
      detail: "Re-encode large images to reduce transfer weight without visible quality loss.",
      sourceAuditId: "uses-optimized-images",
      urgencyThresholds: { high: 200 * 1024, medium: 50 * 1024 }
    },
    {
      id: "uses-responsive-images",
      title: "Right-size images for viewport",
      detail: "Avoid sending larger images than the rendered size needs.",
      sourceAuditId: "uses-responsive-images",
      urgencyThresholds: { high: 150 * 1024, medium: 40 * 1024 }
    },
    {
      id: "offscreen-images",
      title: "Lazy-load offscreen images",
      detail: "Defer below-the-fold imagery until it is likely to be viewed.",
      sourceAuditId: "offscreen-images",
      urgencyThresholds: { high: 200 * 1024, medium: 40 * 1024 }
    },
    {
      id: "uses-text-compression",
      title: "Enable text compression",
      detail: "Serve text assets with Brotli or gzip to remove avoidable transfer bloat.",
      sourceAuditId: "uses-text-compression",
      urgencyThresholds: { high: 120 * 1024, medium: 30 * 1024 }
    },
    {
      id: "unused-css-rules",
      title: "Remove unused CSS",
      detail: "Trim unused selectors and split CSS so only needed styles are shipped.",
      sourceAuditId: "unused-css-rules",
      urgencyThresholds: { high: 120 * 1024, medium: 30 * 1024 }
    },
    {
      id: "unused-javascript",
      title: "Remove unused JavaScript",
      detail: "Reduce dead JS and split bundles to avoid shipping non-critical code.",
      sourceAuditId: "unused-javascript",
      urgencyThresholds: { high: 180 * 1024, medium: 40 * 1024 }
    },
    {
      id: "unminified-css",
      title: "Minify CSS",
      detail: "Use minified production CSS output to reduce bytes in transit.",
      sourceAuditId: "unminified-css",
      urgencyThresholds: { high: 80 * 1024, medium: 20 * 1024 }
    },
    {
      id: "unminified-javascript",
      title: "Minify JavaScript",
      detail: "Use minified production JS output to reduce payload size.",
      sourceAuditId: "unminified-javascript",
      urgencyThresholds: { high: 80 * 1024, medium: 20 * 1024 }
    }
  ];

  for (const config of candidateConfigs) {
    const audit = audits?.[config.sourceAuditId];
    const estimatedSavingsBytes = getSavingsBytes(audit);
    if (estimatedSavingsBytes <= 0) {
      continue;
    }

    const urgency = estimatedSavingsBytes >= config.urgencyThresholds.high
      ? "high"
      : estimatedSavingsBytes >= config.urgencyThresholds.medium
        ? "medium"
        : "low";

    opportunities.push({
      id: config.id,
      title: config.title,
      detail: config.detail,
      estimatedSavingsBytes,
      estimatedBlockingMs: 0,
      displayValue: audit?.displayValue || null,
      urgency,
      sourceAuditId: config.sourceAuditId
    });
  }

  const renderBlockingAudit = audits?.["render-blocking-resources"];
  const renderBlockingMs = typeof renderBlockingAudit?.numericValue === "number"
    ? Math.max(0, renderBlockingAudit.numericValue)
    : 0;
  if (renderBlockingMs > 0) {
    opportunities.push({
      id: "render-blocking-resources",
      title: "Eliminate render-blocking resources",
      detail: "Inline critical assets and defer non-critical scripts/styles for faster rendering.",
      estimatedSavingsBytes: 0,
      estimatedBlockingMs: renderBlockingMs,
      displayValue: renderBlockingAudit?.displayValue || null,
      urgency: renderBlockingMs >= 1000 ? "high" : renderBlockingMs >= 300 ? "medium" : "low",
      sourceAuditId: "render-blocking-resources"
    });
  }

  const totalEstimatedSavingsBytes = opportunities.reduce((sum, item) => sum + (item.estimatedSavingsBytes || 0), 0);
  const totalEstimatedBlockingMs = opportunities.reduce((sum, item) => sum + (item.estimatedBlockingMs || 0), 0);

  const bytesPenalty = transferBytes > 0 ? Math.min(1, totalEstimatedSavingsBytes / transferBytes) : 0;
  const blockingPenalty = Math.min(1, totalEstimatedBlockingMs / 1500);
  const score = Math.min(100, Math.round((bytesPenalty * 80 + blockingPenalty * 20) * 100));
  const urgency = score >= 60 ? "high" : score >= 30 ? "medium" : "low";

  const sorted = opportunities.sort((a, b) => {
    const severityRank = { high: 2, medium: 1, low: 0 };
    const urgencyDelta = (severityRank[b.urgency] || 0) - (severityRank[a.urgency] || 0);
    if (urgencyDelta !== 0) return urgencyDelta;
    return (b.estimatedSavingsBytes || 0) - (a.estimatedSavingsBytes || 0);
  });

  const recommendations = sorted.slice(0, 6).map((item) => ({
    title: item.title,
    urgency: item.urgency,
    detail: `${item.detail}${item.estimatedSavingsBytes > 0 ? ` Estimated byte savings: ${formatBytes(item.estimatedSavingsBytes)}.` : ""}${item.estimatedBlockingMs > 0 ? ` Estimated render unblocking: ${Math.round(item.estimatedBlockingMs)} ms.` : ""}`
  }));

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No obvious optimization bloat signals",
      urgency: "low",
      detail: "No major easy-win optimization opportunities were detected from current Lighthouse signals."
    });
  }

  return {
    wsgReference: {
      title: "Use the most efficient solution for your service",
      url: WSG_EFFICIENT_SOLUTION_URL
    },
    score,
    urgency,
    totalEstimatedSavingsBytes,
    totalEstimatedBlockingMs,
    opportunities: sorted,
    recommendations
  };
}

function getSavingsBytes(audit) {
  if (!audit || typeof audit !== "object") return 0;
  const direct = audit.details?.overallSavingsBytes;
  if (typeof direct === "number" && Number.isFinite(direct)) {
    return Math.max(0, direct);
  }

  const detailsItems = Array.isArray(audit.details?.items) ? audit.details.items : [];
  const itemSavings = detailsItems.reduce((sum, item) => {
    const value = item?.wastedBytes || item?.totalBytes || item?.resourceSize || 0;
    return sum + (typeof value === "number" ? Math.max(0, value) : 0);
  }, 0);

  if (itemSavings > 0) return itemSavings;

  const numeric = audit.numericValue;
  if (typeof numeric === "number" && Number.isFinite(numeric)) {
    return Math.max(0, numeric);
  }

  return 0;
}

function extractTransferBytesFromNetworkRequests(audits) {
  const items = audits?.["network-requests"]?.details?.items || [];
  return items.reduce((sum, item) => sum + (item.transferSize || 0), 0);
}

function analyzeDependencyMaintenance(securityLight) {
  const vulnerableLibraries = securityLight?.observed?.vulnerableLibraries || [];
  const externalScriptsWithoutIntegrity = securityLight?.checks?.externalScriptsWithoutIntegrity || 0;

  let score = 0;
  if (vulnerableLibraries.length > 0) {
    score += Math.min(90, vulnerableLibraries.length * 35);
  }
  if (externalScriptsWithoutIntegrity > 0) {
    score += Math.min(10, externalScriptsWithoutIntegrity * 2);
  }
  score = Math.min(100, score);

  const urgency = vulnerableLibraries.length > 0
    ? "high"
    : externalScriptsWithoutIntegrity > 0
      ? "medium"
      : "low";

  const recommendations = [];
  if (vulnerableLibraries.length > 0) {
    recommendations.push({
      title: "Upgrade vulnerable dependencies",
      urgency: "high",
      detail: `${vulnerableLibraries.length} vulnerable library finding(s) detected by Lighthouse.`
    });
  }

  if (externalScriptsWithoutIntegrity > 0) {
    recommendations.push({
      title: "Add integrity attributes for external dependencies",
      urgency: "medium",
      detail: `${externalScriptsWithoutIntegrity} external script dependency URL(s) are missing SRI integrity attributes.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No dependency maintenance warnings detected",
      urgency: "low",
      detail: "No vulnerable dependency flags were found for this page in the current lightweight checks."
    });
  }

  return {
    wsgReference: {
      title: "Use dependencies appropriately and ensure maintenance",
      url: WSG_DEPENDENCY_MAINTENANCE_URL
    },
    score,
    urgency,
    vulnerableLibraryCount: vulnerableLibraries.length,
    vulnerableLibraries,
    externalScriptsWithoutIntegrity,
    recommendations
  };
}

function buildDependencyMaintenanceSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const recurringLibraries = new Map();

  for (const entry of okEntries) {
    const libs = entry.dependencyMaintenance?.vulnerableLibraries || [];
    for (const lib of libs) {
      const key = `${lib.library}|${lib.version || "unknown"}`;
      const current = recurringLibraries.get(key) || {
        library: lib.library,
        version: lib.version || null,
        severity: lib.severity || null,
        vulnerabilities: lib.vulnerabilities,
        pageCount: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      recurringLibraries.set(key, current);
    }
  }

  const topRecurringLibraries = Array.from(recurringLibraries.values())
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || String(a.library).localeCompare(String(b.library)))
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Use dependencies appropriately and ensure maintenance",
      url: WSG_DEPENDENCY_MAINTENANCE_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.dependencyMaintenance?.score)),
    highUrgencyPages: okEntries.filter((item) => item.dependencyMaintenance?.urgency === "high").length,
    pagesWithVulnerableDependencies: okEntries.filter((item) => (item.dependencyMaintenance?.vulnerableLibraryCount || 0) > 0).length,
    totalVulnerableDependencies: okEntries.reduce((sum, item) => sum + (item.dependencyMaintenance?.vulnerableLibraryCount || 0), 0),
    topRecurringLibraries
  };
}

function buildLanguageVersionSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const recurringSignals = new Map();
  let pagesWithOutdatedRuntimeSignals = 0;
  let pagesWithVersionDisclosure = 0;

  for (const entry of okEntries) {
    const guidance = entry.languageVersionGuidance || {};
    const outdated = guidance.outdatedTechnologies || [];
    const observed = guidance.observedTechnologies || [];

    if (outdated.length > 0) {
      pagesWithOutdatedRuntimeSignals += 1;
    }
    if (observed.length > 0) {
      pagesWithVersionDisclosure += 1;
    }

    for (const item of outdated) {
      const key = `${item.family}|${item.version || "unknown"}|${item.recommendedBaseline || ""}`;
      const current = recurringSignals.get(key) || {
        family: item.family,
        version: item.version || null,
        recommendedBaseline: item.recommendedBaseline || null,
        urgency: item.urgency || "medium",
        pageCount: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.urgency = maxUrgency(current.urgency, item.urgency || "medium");
      recurringSignals.set(key, current);
    }
  }

  const topOutdatedSignals = Array.from(recurringSignals.values())
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || String(a.family).localeCompare(String(b.family)))
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Use the latest stable language version",
      url: WSG_LATEST_STABLE_LANGUAGE_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.languageVersionGuidance?.score)),
    highUrgencyPages: okEntries.filter((item) => item.languageVersionGuidance?.urgency === "high").length,
    pagesWithOutdatedRuntimeSignals,
    pagesWithVersionDisclosure,
    topOutdatedSignals
  };
}

function analyzeLanguageVersionGuidance({ securityLight, dependencyMaintenance }) {
  const headers = securityLight?.observed?.headers || {};
  const observedTechnologies = detectRuntimeTechnologies(headers);
  const outdatedTechnologies = observedTechnologies.filter((item) => item.outdated);
  const vulnerableLibraries = dependencyMaintenance?.vulnerableLibraries || [];

  let score = 0;
  for (const signal of outdatedTechnologies) {
    score += signal.urgency === "high" ? 30 : signal.urgency === "medium" ? 18 : 10;
  }
  if (vulnerableLibraries.length > 0) {
    score += Math.min(40, vulnerableLibraries.length * 8);
  }
  score = Math.min(100, score);

  const urgency = score >= 60 ? "high" : score >= 30 ? "medium" : "low";
  const recommendations = [];

  for (const signal of outdatedTechnologies.slice(0, 4)) {
    recommendations.push({
      title: `Upgrade ${signal.family} runtime baseline`,
      urgency: signal.urgency,
      detail: `Observed ${signal.family}${signal.version ? ` ${signal.version}` : ""} in ${signal.sourceHeader}. Align with a recent stable baseline${signal.recommendedBaseline ? ` (target ${signal.recommendedBaseline}+)` : ""}.`
    });
  }

  if (vulnerableLibraries.length > 0) {
    recommendations.push({
      title: "Pair dependency upgrades with runtime/language baseline updates",
      urgency: "medium",
      detail: `${vulnerableLibraries.length} vulnerable library finding(s) suggest dependency drift. Confirm the runtime/language baseline in CI and upgrade dependencies against the latest stable language ecosystem.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No obvious outdated runtime version disclosed",
      urgency: "low",
      detail: "No clearly outdated runtime version signals were exposed in sampled HTTP headers. Verify language/runtime versions in source and CI since backend versions are not always externally visible."
    });
  }

  return {
    wsgReference: {
      title: "Use the latest stable language version",
      url: WSG_LATEST_STABLE_LANGUAGE_URL
    },
    score,
    urgency,
    observedTechnologies,
    outdatedTechnologies,
    vulnerableLibraryCount: vulnerableLibraries.length,
    recommendations
  };
}

function detectRuntimeTechnologies(headers) {
  const values = [
    { sourceHeader: "x-powered-by", value: headers["x-powered-by"] },
    { sourceHeader: "server", value: headers.server }
  ].filter((item) => typeof item.value === "string" && item.value.trim().length > 0);

  const signals = [];

  for (const entry of values) {
    const raw = entry.value;

    const patterns = [
      { family: "Node.js", regex: /node(?:\.js)?\/?\s*v?(\d+(?:\.\d+){0,2})?/i, baseline: 20 },
      { family: "PHP", regex: /php\/?\s*(\d+(?:\.\d+){0,2})?/i, baseline: 8 },
      { family: "ASP.NET", regex: /asp\.net\/?\s*(\d+(?:\.\d+){0,2})?/i, baseline: 8 },
      { family: "Ruby", regex: /ruby\/?\s*(\d+(?:\.\d+){0,2})?/i, baseline: 3 },
      { family: "Python", regex: /python\/?\s*(\d+(?:\.\d+){0,2})?/i, baseline: 3 }
    ];

    for (const pattern of patterns) {
      const match = raw.match(pattern.regex);
      if (!match) continue;

      const version = match[1] || null;
      const major = version ? parseMajor(version) : null;
      const outdated = typeof major === "number" && major < pattern.baseline;
      const urgency = outdated
        ? major <= pattern.baseline - 2
          ? "high"
          : "medium"
        : "low";

      signals.push({
        family: pattern.family,
        version,
        sourceHeader: entry.sourceHeader,
        observedValue: raw,
        major,
        recommendedBaseline: String(pattern.baseline),
        outdated,
        urgency
      });
    }
  }

  const deduped = new Map();
  for (const signal of signals) {
    const key = `${signal.family}|${signal.version || "unknown"}|${signal.sourceHeader}`;
    if (!deduped.has(key)) {
      deduped.set(key, signal);
    }
  }

  return Array.from(deduped.values());
}

function parseMajor(version) {
  const value = Number.parseInt(String(version).split(".")[0], 10);
  return Number.isFinite(value) ? value : null;
}

function buildSecurityLightSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  let pagesWithoutCsp = 0;
  let pagesWithoutHsts = 0;
  let pagesWithVulnerableLibraries = 0;
  let totalExternalScriptsWithoutIntegrity = 0;

  for (const entry of okEntries) {
    const checks = entry.securityLight?.checks || {};
    if (!checks.hasCsp) pagesWithoutCsp += 1;
    if (checks.isHttps && !checks.hasHsts) pagesWithoutHsts += 1;
    if ((checks.vulnerableLibraryCount || 0) > 0) pagesWithVulnerableLibraries += 1;
    totalExternalScriptsWithoutIntegrity += checks.externalScriptsWithoutIntegrity || 0;
  }

  return {
    wsgReference: {
      title: "Ensure that your code is secure",
      url: WSG_SECURITY_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.securityLight?.score)),
    highUrgencyPages: okEntries.filter((item) => item.securityLight?.urgency === "high").length,
    pagesWithoutCsp,
    pagesWithoutHsts,
    pagesWithVulnerableLibraries,
    totalExternalScriptsWithoutIntegrity
  };
}

function buildLayoutSupportSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  let mobileOverflowPages = 0;
  let tabletOverflowPages = 0;
  let totalMobileSmallTapTargets = 0;
  let totalTabletSmallTapTargets = 0;
  let totalFixedWidthOffenders = 0;

  for (const entry of okEntries) {
    const checks = entry.layoutAdaptation?.checks || {};
    if (checks.horizontalOverflowOnMobile) mobileOverflowPages += 1;
    if (checks.horizontalOverflowOnTablet) tabletOverflowPages += 1;
    totalMobileSmallTapTargets += checks.mobileSmallTapTargets || 0;
    totalTabletSmallTapTargets += checks.tabletSmallTapTargets || 0;
    totalFixedWidthOffenders += checks.fixedWidthOffenders || 0;
  }

  return {
    wsgReference: {
      title: "Ensure layouts work for different devices and requirements",
      url: WSG_LAYOUT_SUPPORT_URL
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.layoutAdaptation?.score)),
    highUrgencyPages: okEntries.filter((item) => item.layoutAdaptation?.urgency === "high").length,
    mobileOverflowPages,
    tabletOverflowPages,
    totalMobileSmallTapTargets,
    totalTabletSmallTapTargets,
    totalFixedWidthOffenders
  };
}

function buildMetadataSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const missing = {
    missingLang: 0,
    missingDescription: 0,
    missingCanonical: 0,
    missingOpenGraphCore: 0,
    missingTwitterCard: 0,
    invalidStructuredData: 0
  };

  for (const entry of okEntries) {
    const checks = entry.metadata?.checks || {};
    if (!checks.hasLang) missing.missingLang += 1;
    if (!checks.hasDescription) missing.missingDescription += 1;
    if (!checks.hasCanonical) missing.missingCanonical += 1;
    if (!checks.hasOpenGraphCore) missing.missingOpenGraphCore += 1;
    if (!checks.hasTwitterCard) missing.missingTwitterCard += 1;
    if (checks.hasInvalidStructuredData || !checks.hasValidStructuredData) missing.invalidStructuredData += 1;
  }

  return {
    wsgReference: {
      title: "Structure metadata for machine readability",
      url: "https://www.w3.org/TR/web-sustainability-guidelines/#structure-metadata-for-machine-readability"
    },
    assessedPages: okEntries.length,
    averageScore: average(okEntries.map((item) => item.metadata?.score)),
    highUrgencyPages: okEntries.filter((item) => item.metadata?.urgency === "high").length,
    missing
  };
}

function buildFormValidationSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const signatures = new Map();
  let totalOccurrences = 0;
  let totalReusedFromCache = 0;

  for (const entry of okEntries) {
    totalOccurrences += entry.formValidation?.pageElementOccurrences || 0;
    totalReusedFromCache += entry.formValidation?.reusedFromCacheCount || 0;

    for (const component of entry.formValidation?.components || []) {
      const current = signatures.get(component.signature) || {
        signature: component.signature,
        role: component.role,
        controlType: component.controlType,
        fieldName: component.fieldName,
        score: component.assessment?.score || 0,
        urgency: component.assessment?.urgency || "low",
        pageCount: 0,
        occurrenceCount: 0,
        pages: new Set()
      };

      current.score = Math.max(current.score, component.assessment?.score || 0);
      current.urgency = higherUrgency(current.urgency, component.assessment?.urgency || "low");
      current.occurrenceCount += 1;

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      signatures.set(component.signature, current);
    }
  }

  const allElements = Array.from(signatures.values())
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || b.score - a.score);

  const recurringElements = allElements.filter((item) => item.pageCount > 1).slice(0, 15);
  const recurringSearchElements = recurringElements.filter((item) => item.role === "search").slice(0, 8);

  return {
    wsgReference: {
      title: "Validate form errors and account for tooling requirements",
      url: "https://www.w3.org/TR/web-sustainability-guidelines/#validate-form-errors-and-account-for-tooling-requirements"
    },
    uniqueElementSignaturesAssessed: allElements.length,
    totalOccurrences,
    reusedFromCacheCount: totalReusedFromCache,
    recurringElements,
    recurringSearchElements
  };
}

function higherUrgency(left, right) {
  const rank = { low: 0, medium: 1, high: 2 };
  return (rank[right] || 0) > (rank[left] || 0) ? right : left;
}

function buildExternalProviderRiskSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const providerMap = new Map();

  for (const entry of okEntries) {
    for (const asset of entry.greenWeb?.externalAssets || []) {
      const status = asset.greenCheck?.status || "unknown";
      const current = providerMap.get(asset.hostname) || {
        hostname: asset.hostname,
        status,
        hostedBy: asset.greenCheck?.hostedBy || null,
        pageCount: 0,
        requestCount: 0,
        transferBytes: 0,
        resourceTypes: new Set(),
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.requestCount += asset.requestCount || 0;
      current.transferBytes += asset.transferBytes || 0;
      current.resourceTypes.add(asset.resourceType);
      providerMap.set(asset.hostname, current);
    }
  }

  const providers = Array.from(providerMap.values())
    .map(({ pages, resourceTypes, ...rest }) => ({
      ...rest,
      resourceTypes: Array.from(resourceTypes).sort(),
      riskScore: externalProviderRiskScore(rest)
    }))
    .sort((a, b) => b.riskScore - a.riskScore || b.pageCount - a.pageCount || b.transferBytes - a.transferBytes);

  return {
    recurringNonGreenProviders: providers.filter((item) => item.status === "not-green" && item.pageCount > 1).slice(0, 10),
    nonGreenProviders: providers.filter((item) => item.status === "not-green").slice(0, 15),
    recurringUnknownProviders: providers.filter((item) => item.status === "unknown" && item.pageCount > 1).slice(0, 10)
  };
}

function externalProviderRiskScore({ status, pageCount, requestCount, transferBytes }) {
  const statusWeight = status === "not-green" ? 35 : status === "unknown" ? 20 : 0;
  const pageWeight = Math.min(35, pageCount * 8);
  const requestWeight = Math.min(15, Math.round((requestCount / 8) * 15));
  const transferWeight = Math.min(15, Math.round((transferBytes / (500 * 1024)) * 15));
  return statusWeight + pageWeight + requestWeight + transferWeight;
}

function analyzeThirdPartyJs({ finalUrl, greenWeb }) {
  const firstPartyHostname = safeHostname(finalUrl);
  const scripts = (greenWeb?.externalAssets || []).filter((asset) => asset.resourceType === "script" && asset.hostname !== firstPartyHostname);
  const transferBytes = scripts.reduce((sum, script) => sum + (script.transferBytes || 0), 0);
  const requestCount = scripts.reduce((sum, script) => sum + (script.requestCount || 0), 0);
  const notGreenCount = scripts.filter((script) => script.greenCheck?.status === "not-green").length;
  const unknownCount = scripts.filter((script) => script.greenCheck?.status === "unknown").length;
  const score = thirdPartyRiskScore({ transferBytes, requestCount, notGreenCount, unknownCount });
  const urgency = thirdPartyUrgency(score);

  return {
    wsgReference: {
      title: "Give third parties the same priority as first parties during assessment",
      url: WSG_THIRD_PARTY_URL
    },
    score,
    urgency,
    providerCount: scripts.length,
    requestCount,
    transferBytes,
    notGreenCount,
    unknownCount,
    scripts,
    recommendations: buildThirdPartyRecommendations({ scripts, requestCount, transferBytes, notGreenCount, unknownCount, urgency })
  };
}

function thirdPartyRiskScore({ transferBytes, requestCount, notGreenCount, unknownCount }) {
  let score = 0;
  score += Math.min(40, Math.round((transferBytes / (400 * 1024)) * 40));
  score += Math.min(25, Math.round((requestCount / 8) * 25));
  score += Math.min(25, notGreenCount * 10);
  score += Math.min(10, unknownCount * 4);
  return Math.min(score, 100);
}

function thirdPartyUrgency(score) {
  if (score >= 60) return "high";
  if (score >= 30) return "medium";
  return "low";
}

function buildThirdPartyRecommendations({ scripts, requestCount, transferBytes, notGreenCount, unknownCount, urgency }) {
  const recommendations = [];

  if (scripts.length > 0) {
    recommendations.push({
      title: "Maintain a third-party JavaScript inventory",
      urgency,
      detail: `Track ${scripts.length} third-party script origin(s) and assign an owner plus business justification for each.`
    });
  }

  if (transferBytes >= 150 * 1024 || requestCount >= 4) {
    recommendations.push({
      title: "Reduce third-party script payload and requests",
      urgency: transferBytes >= 300 * 1024 || requestCount >= 8 ? "high" : "medium",
      detail: "Defer non-critical tags, remove unused vendors, and gate scripts behind consent or user interaction."
    });
  }

  if (notGreenCount > 0) {
    recommendations.push({
      title: "Prioritize greener alternatives for third-party providers",
      urgency: "high",
      detail: `${notGreenCount} third-party script origin(s) are not confirmed green in the Green Web Foundation dataset.`
    });
  }

  if (unknownCount > 0) {
    recommendations.push({
      title: "Request sustainability disclosures from unknown providers",
      urgency: "medium",
      detail: `${unknownCount} third-party script origin(s) have unknown hosting status; ask providers for verifiable energy sourcing evidence.`
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "No major third-party JavaScript risk signals",
      urgency: "low",
      detail: "Continue periodic reviews so third-party additions are assessed with the same rigor as first-party code."
    });
  }

  return recommendations.slice(0, 5);
}

function buildThirdPartyJsSummary(perUrl) {
  const okEntries = perUrl.filter((item) => item.status === "ok");
  const avgScore = average(okEntries.map((item) => item.thirdPartyJs?.score));
  const highUrgencyPages = okEntries.filter((item) => item.thirdPartyJs?.urgency === "high").length;

  const providerMap = new Map();
  for (const entry of okEntries) {
    for (const script of entry.thirdPartyJs?.scripts || []) {
      const current = providerMap.get(script.hostname) || {
        hostname: script.hostname,
        pageCount: 0,
        transferBytes: 0,
        requestCount: 0,
        status: script.greenCheck?.status || "unknown",
        hostedBy: script.greenCheck?.hostedBy || null,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.transferBytes += script.transferBytes || 0;
      current.requestCount += script.requestCount || 0;
      providerMap.set(script.hostname, current);
    }
  }

  const providers = Array.from(providerMap.values())
    .map(({ pages, ...rest }) => rest)
    .sort((a, b) => b.pageCount - a.pageCount || b.transferBytes - a.transferBytes)
    .slice(0, 12);

  return {
    wsgReference: {
      title: "Give third parties the same priority as first parties during assessment",
      url: WSG_THIRD_PARTY_URL
    },
    averageScore: avgScore,
    highUrgencyPages,
    assessedPages: okEntries.length,
    providers
  };
}

function safeHostname(value) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function safeOrigin(value) {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function highestUrgency(values) {
  return (values || []).filter(Boolean).reduce((current, value) => maxUrgency(current, value), "low");
}

function buildGreenWebSummary(okEntries) {
  const pageChecks = okEntries.map((item) => item.greenWeb?.page).filter(Boolean);
  const externalChecks = dedupeGreenChecks(
    okEntries
      .flatMap((item) => item.greenWeb?.externalAssets || [])
      .map((item) => item.greenCheck)
      .filter(Boolean)
  );

  return {
    pageHostsChecked: pageChecks.length,
    pageHostsGreen: pageChecks.filter((item) => item.status === "green").length,
    pageHostsNotGreen: pageChecks.filter((item) => item.status === "not-green").length,
    pageHostsUnknown: pageChecks.filter((item) => item.status === "unknown").length,
    externalOriginsChecked: externalChecks.length,
    externalOriginsGreen: externalChecks.filter((item) => item.status === "green").length,
    externalOriginsNotGreen: externalChecks.filter((item) => item.status === "not-green").length,
    externalOriginsUnknown: externalChecks.filter((item) => item.status === "unknown").length
  };
}

function dedupeGreenChecks(checks) {
  const byHostname = new Map();

  for (const check of checks) {
    if (!check?.hostname) {
      continue;
    }

    byHostname.set(check.hostname, check);
  }

  return Array.from(byHostname.values());
}

function buildCrossPagePatterns(perUrl) {
  const ok = perUrl.filter((item) => item.status === "ok");
  const heavyAssetPatterns = collectRecurringHeavyAssets(ok);
  const recurringTargets = collectRecurringModularizationTargets(ok);
  const recurringOrigins = collectRecurringHeavyOrigins(ok);

  return {
    heavyAssetPatterns,
    recurringTargets,
    recurringOrigins,
    designSystemGuidance: buildDesignSystemGuidance({ heavyAssetPatterns, recurringTargets, recurringOrigins })
  };
}

function collectRecurringHeavyAssets(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const request of entry.modularization?.heavyRequests || []) {
      const assetKey = buildAssetKey(request);
      const current = groups.get(assetKey) || {
        key: assetKey,
        label: requestLabel(request),
        resourceType: request.resourceType,
        domain: request.domain,
        pageCount: 0,
        totalTransferBytes: 0,
        exampleUrl: request.url,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalTransferBytes += request.transferSize;
      groups.set(assetKey, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalTransferBytes - a.totalTransferBytes)
    .slice(0, 10);
}

function collectRecurringModularizationTargets(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const candidate of entry.modularization?.onDemandCandidates || []) {
      const current = groups.get(candidate.title) || {
        title: candidate.title,
        urgency: candidate.urgency,
        pageCount: 0,
        totalEstimatedSavingsBytes: 0,
        strategy: candidate.strategy,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalEstimatedSavingsBytes += candidate.estimatedSavingsBytes || 0;
      current.urgency = maxUrgency(current.urgency, candidate.urgency);
      groups.set(candidate.title, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalEstimatedSavingsBytes - a.totalEstimatedSavingsBytes)
    .slice(0, 10);
}

function collectRecurringHeavyOrigins(entries) {
  const groups = new Map();

  for (const entry of entries) {
    for (const origin of entry.modularization?.groupedByOrigin || []) {
      const current = groups.get(origin.domain) || {
        domain: origin.domain,
        pageCount: 0,
        totalTransferBytes: 0,
        pages: new Set()
      };

      if (!current.pages.has(entry.url)) {
        current.pages.add(entry.url);
        current.pageCount += 1;
      }

      current.totalTransferBytes += origin.transferBytes;
      groups.set(origin.domain, current);
    }
  }

  return Array.from(groups.values())
    .filter((item) => item.pageCount > 1)
    .map(stripSet)
    .sort((a, b) => b.pageCount - a.pageCount || b.totalTransferBytes - a.totalTransferBytes)
    .slice(0, 8);
}

function buildDesignSystemGuidance({ heavyAssetPatterns, recurringTargets, recurringOrigins }) {
  const guidance = [];
  const recurringImageTarget = recurringTargets.find((target) => target.title.toLowerCase().includes("heavy image asset"));
  const recurringScriptTargets = recurringTargets.filter((target) => target.title.toLowerCase().includes("heavy script asset"));

  if (recurringImageTarget) {
    guidance.push(`This same heavy image pattern appears on ${recurringImageTarget.pageCount} pages. Fix it once in the shared template, CMS block, or design system component to reduce load across the whole site.`);
  } else if (heavyAssetPatterns.length > 0) {
    const top = heavyAssetPatterns[0];
    guidance.push(`This same heavy ${top.resourceType} pattern appears on ${top.pageCount} pages. Fix it once in the shared template, CMS block, or design system component to reduce load across the whole site.`);
  }

  if (recurringScriptTargets.length > 0) {
    guidance.push(`These ${Math.min(recurringScriptTargets.length, 3)} script bundles are recurring modularization targets. Move the fix to the shared bundle or component boundary so every affected page gets lighter at once.`);
  }

  if (recurringTargets.length > 0) {
    const count = Math.min(recurringTargets.length, 3);
    guidance.push(`These ${count} modularization targets recur across multiple pages. Centralize the fix at the component or bundle level instead of treating each page separately.`);
  }

  if (recurringOrigins.length > 0) {
    const origin = recurringOrigins[0];
    guidance.push(`Heavy assets from ${origin.domain} recur across ${origin.pageCount} pages. Review whether that dependency should be deferred, optimized, or loaded conditionally.`);
  }

  if (guidance.length === 0) {
    guidance.push("No strong cross-page modularization patterns were detected in this scan. Focus on page-level opportunities first.");
  }

  return guidance;
}

function buildAssetKey(request) {
  const scope = requestPathScope(request.url);
  return `${request.resourceType}|${request.domain}|${scope}`;
}

function requestLabel(request) {
  const scope = requestPathScope(request.url);
  if (scope === "/") {
    return `${request.resourceType} assets from ${request.domain}`;
  }

  return `${request.resourceType} assets from ${request.domain}${scope}`;
}

function stripSet(item) {
  const { pages, ...rest } = item;
  return rest;
}

function maxUrgency(left, right) {
  const rank = { low: 0, medium: 1, high: 2 };
  return (rank[right] || 0) > (rank[left] || 0) ? right : left;
}

function requestPathScope(url) {
  try {
    const pathname = new URL(url).pathname || "/";
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return "/";
    }

    return `/${segments[0]}`;
  } catch {
    return "/";
  }
}

function buildBudgetGuidance(summary) {
  const avgBytes = summary.averageTransferBytes;
  const avgCo2 = summary.averageCo2GramsPerPage;
  const currentTransferRating = typeof avgBytes === "number" ? ratingForTransferBytes(avgBytes) : null;
  const currentCo2Rating = typeof avgCo2 === "number" ? ratingForCo2(avgCo2) : null;
  const target = SWD_RATINGS.find((entry) => entry.rating === "B");

  return {
    wsgReference: {
      id: "3.1",
      title: "Set goals based on performance and energy impact",
      url: WSG_PERFORMANCE_ENERGY_URL
    },
    benchmarkReference: {
      name: "Sustainable Web Design Digital Carbon Ratings",
      url: SWD_RATING_SOURCE_URL
    },
    current: {
      averageTransferBytes: avgBytes,
      averageCo2GramsPerPage: avgCo2,
      transferRating: currentTransferRating,
      co2Rating: currentCo2Rating
    },
    recommendedBudget: {
      targetRating: "B",
      maxTransferBytesPerPage: target.maxTransferBytes,
      maxCo2GramsPerPage: target.maxCo2Grams
    },
    reductionsNeeded: {
      transferBytesPerPage: computeReduction(avgBytes, target.maxTransferBytes),
      co2GramsPerPage: computeReduction(avgCo2, target.maxCo2Grams)
    },
    stretchBudget: {
      targetRating: "A",
      maxTransferBytesPerPage: SWD_RATINGS.find((entry) => entry.rating === "A").maxTransferBytes,
      maxCo2GramsPerPage: SWD_RATINGS.find((entry) => entry.rating === "A").maxCo2Grams
    }
  };
}

function computeReduction(currentValue, targetValue) {
  if (typeof currentValue !== "number") {
    return { absolute: null, percent: null, needsReduction: false };
  }
  const absolute = currentValue - targetValue;
  const needsReduction = absolute > 0;
  const percent = needsReduction ? (absolute / currentValue) * 100 : 0;
  return { absolute: needsReduction ? absolute : 0, percent, needsReduction };
}

function ratingForTransferBytes(bytes) {
  for (const item of SWD_RATINGS) {
    if (bytes <= item.maxTransferBytes) {
      return item.rating;
    }
  }
  return "F";
}

function ratingForCo2(co2Grams) {
  for (const item of SWD_RATINGS) {
    if (co2Grams <= item.maxCo2Grams) {
      return item.rating;
    }
  }
  return "F";
}

function average(values) {
  if (values.length === 0) return null;
  const sum = values.reduce((a, b) => a + (typeof b === "number" ? b : 0), 0);
  return sum / values.length;
}

export function renderMarkdown(report) {
  const lines = [];
  lines.push(`# Sustainability Scan Report: ${report.scanTitle}`);
  lines.push("");
  if (report.issueNumber) {
    lines.push(`- Issue number: #${report.issueNumber}`);
  }
  lines.push(`- Generated at: ${report.generatedAt}`);
  lines.push(`- URLs requested: ${report.requestedUrls.length}`);
  lines.push(`- URLs scanned: ${report.summary.okCount}`);
  lines.push(`- Distinct sites scanned: ${report.summary.distinctSiteCount}`);
  lines.push(`- Scan errors: ${report.summary.errorCount}`);
  lines.push(`- Average performance score: ${formatScore(report.summary.averagePerformanceScore)}`);
  lines.push(`- Total transfer: ${formatBytes(report.summary.totalTransferBytes)}`);
  lines.push(`- Estimated CO2: ${report.summary.totalCo2Grams.toFixed(4)} g`);
  lines.push(`- Average transfer per page: ${formatBytes(report.summary.averageTransferBytes)}`);
  lines.push(`- Average CO2 per page: ${formatGrams(report.summary.averageCo2GramsPerPage)}`);
  lines.push(`- Average redundancy score: ${formatPercentScore(report.summary.averageRedundancyScore)}`);
  lines.push(`- Pages with high redundancy urgency: ${report.summary.highUrgencyRedundancyCount}`);
  lines.push(`- Average modularization score: ${formatPercentScore(report.summary.averageModularizationScore)}`);
  lines.push(`- Pages with high modularization urgency: ${report.summary.highUrgencyModularizationCount}`);
  lines.push(`- Average dead-code score: ${formatPercentScore(report.summary.averageDeadCodeScore)}`);
  lines.push(`- Pages with high dead-code urgency: ${report.summary.highUrgencyDeadCodeCount}`);
  lines.push(`- Average non-critical resources score: ${formatPercentScore(report.summary.averageNonCriticalResourcesScore)}`);
  lines.push(`- Pages with high non-critical resource urgency: ${report.summary.highUrgencyNonCriticalResourcesCount}`);
  lines.push(`- Average form validation score: ${formatPercentScore(report.summary.averageFormValidationScore)}`);
  lines.push(`- Pages with high form validation urgency: ${report.summary.highUrgencyFormValidationCount}`);
  lines.push(`- Average metadata score: ${formatPercentScore(report.summary.averageMetadataScore)}`);
  lines.push(`- Pages with high metadata urgency: ${report.summary.highUrgencyMetadataCount}`);
  lines.push(`- Average layout adaptation score: ${formatPercentScore(report.summary.averageLayoutAdaptationScore)}`);
  lines.push(`- Pages with high layout urgency: ${report.summary.highUrgencyLayoutAdaptationCount}`);
  lines.push(`- Average lightweight security score: ${formatPercentScore(report.summary.averageSecurityLightScore)}`);
  lines.push(`- Pages with high security urgency: ${report.summary.highUrgencySecurityLightCount}`);
  lines.push(`- Average dependency maintenance score: ${formatPercentScore(report.summary.averageDependencyMaintenanceScore)}`);
  lines.push(`- Pages with high dependency maintenance urgency: ${report.summary.highUrgencyDependencyMaintenanceCount}`);
  lines.push(`- Average expected-files score: ${formatPercentScore(report.summary.averageExpectedFilesScore)}`);
  lines.push(`- Pages with high expected-files urgency: ${report.summary.highUrgencyExpectedFilesCount}`);
  lines.push(`- Average compression score: ${formatPercentScore(report.summary.averageCompressionScore)}`);
  lines.push(`- Pages with high compression urgency: ${report.summary.highUrgencyCompressionCount}`);
  lines.push(`- Average optimization score: ${formatPercentScore(report.summary.averageOptimizationScore)}`);
  lines.push(`- Pages with high optimization urgency: ${report.summary.highUrgencyOptimizationCount}`);
  lines.push(`- Average offline support score: ${formatPercentScore(report.summary.averageOfflineSupportScore)}`);
  lines.push(`- Pages with high offline support urgency: ${report.summary.highUrgencyOfflineSupportCount}`);
  lines.push(`- Average language version score: ${formatPercentScore(report.summary.averageLanguageVersionScore)}`);
  lines.push(`- Pages with high language version urgency: ${report.summary.highUrgencyLanguageVersionCount}`);
  lines.push("");
  lines.push("## WSG Form Validation and Tooling");
  lines.push("");
  lines.push(`- WSG reference: ${report.formValidationSummary.wsgReference.title} (${report.formValidationSummary.wsgReference.url})`);
  lines.push(`- Unique form element signatures assessed: ${report.formValidationSummary.uniqueElementSignaturesAssessed}`);
  lines.push(`- Total form element occurrences observed: ${report.formValidationSummary.totalOccurrences}`);
  lines.push(`- Reused assessments (not re-scanned repeats): ${report.formValidationSummary.reusedFromCacheCount}`);

  if (report.formValidationSummary.recurringElements.length > 0) {
    lines.push("");
    lines.push("### Recurring Form Elements (Assessed Once, Reused Across Pages)");
    lines.push("");
    for (const element of report.formValidationSummary.recurringElements.slice(0, 8)) {
      lines.push(`- ${element.controlType}${element.fieldName ? ` (${element.fieldName})` : ""}: appears on ${element.pageCount} page(s), risk ${formatPercentScore(element.score)}, urgency ${element.urgency.toUpperCase()}`);
    }
  }

  if (report.formValidationSummary.recurringSearchElements.length > 0) {
    lines.push("");
    lines.push("### Recurring Search Controls");
    lines.push("");
    lines.push("- Search controls often appear on every page. These signatures are assessed once and reused:");
    for (const element of report.formValidationSummary.recurringSearchElements.slice(0, 5)) {
      lines.push(`  - ${element.controlType}${element.fieldName ? ` (${element.fieldName})` : ""}: ${element.pageCount} page(s), urgency ${element.urgency.toUpperCase()}`);
    }
  }

  lines.push("");
  lines.push("## WSG Metadata for Machine Readability");
  lines.push("");
  lines.push(`- WSG reference: ${report.metadataSummary.wsgReference.title} (${report.metadataSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.metadataSummary.assessedPages}`);
  lines.push(`- Average metadata score: ${formatPercentScore(report.metadataSummary.averageScore)}`);
  lines.push(`- Pages with high urgency: ${report.metadataSummary.highUrgencyPages}`);
  lines.push("- Missing metadata across pages:");
  lines.push(`  - Missing html lang: ${report.metadataSummary.missing.missingLang}`);
  lines.push(`  - Missing meta description: ${report.metadataSummary.missing.missingDescription}`);
  lines.push(`  - Missing canonical URL: ${report.metadataSummary.missing.missingCanonical}`);
  lines.push(`  - Missing Open Graph core tags: ${report.metadataSummary.missing.missingOpenGraphCore}`);
  lines.push(`  - Missing twitter:card: ${report.metadataSummary.missing.missingTwitterCard}`);
  lines.push(`  - Invalid or missing JSON-LD: ${report.metadataSummary.missing.invalidStructuredData}`);

  lines.push("");
  lines.push("## WSG Multi-Device Layout Support");
  lines.push("");
  lines.push(`- WSG reference: ${report.layoutSupportSummary.wsgReference.title} (${report.layoutSupportSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.layoutSupportSummary.assessedPages}`);
  lines.push(`- Average layout adaptation score: ${formatPercentScore(report.layoutSupportSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.layoutSupportSummary.highUrgencyPages}`);
  lines.push(`- Pages with mobile overflow: ${report.layoutSupportSummary.mobileOverflowPages}`);
  lines.push(`- Pages with tablet overflow: ${report.layoutSupportSummary.tabletOverflowPages}`);
  lines.push(`- Total small tap targets on mobile: ${report.layoutSupportSummary.totalMobileSmallTapTargets}`);
  lines.push(`- Total small tap targets on tablet: ${report.layoutSupportSummary.totalTabletSmallTapTargets}`);
  lines.push(`- Total fixed-width offenders: ${report.layoutSupportSummary.totalFixedWidthOffenders}`);

  lines.push("");
  lines.push("## WSG Lightweight Security Review");
  lines.push("");
  lines.push(`- WSG reference: ${report.securityLightSummary.wsgReference.title} (${report.securityLightSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.securityLightSummary.assessedPages}`);
  lines.push(`- Average lightweight security score: ${formatPercentScore(report.securityLightSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.securityLightSummary.highUrgencyPages}`);
  lines.push(`- Pages missing Content-Security-Policy: ${report.securityLightSummary.pagesWithoutCsp}`);
  lines.push(`- HTTPS pages missing Strict-Transport-Security: ${report.securityLightSummary.pagesWithoutHsts}`);
  lines.push(`- Pages with vulnerable JS library findings: ${report.securityLightSummary.pagesWithVulnerableLibraries}`);
  lines.push(`- External scripts missing SRI (total): ${report.securityLightSummary.totalExternalScriptsWithoutIntegrity}`);

  lines.push("");
  lines.push("## WSG Dependency Maintenance Review");
  lines.push("");
  lines.push(`- WSG reference: ${report.dependencyMaintenanceSummary.wsgReference.title} (${report.dependencyMaintenanceSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.dependencyMaintenanceSummary.assessedPages}`);
  lines.push(`- Average dependency maintenance score: ${formatPercentScore(report.dependencyMaintenanceSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.dependencyMaintenanceSummary.highUrgencyPages}`);
  lines.push(`- Pages with vulnerable dependencies: ${report.dependencyMaintenanceSummary.pagesWithVulnerableDependencies}`);
  lines.push(`- Total vulnerable dependency findings: ${report.dependencyMaintenanceSummary.totalVulnerableDependencies}`);

  if ((report.dependencyMaintenanceSummary.topRecurringLibraries || []).length > 0) {
    lines.push("- Recurring vulnerable dependencies:");
    for (const item of report.dependencyMaintenanceSummary.topRecurringLibraries.slice(0, 10)) {
      lines.push(`  - ${item.library}${item.version ? `@${item.version}` : ""}: seen on ${item.pageCount} page(s)${item.severity ? `, severity ${String(item.severity).toUpperCase()}` : ""}`);
    }
  }

  lines.push("");
  lines.push("## WSG Expected and Beneficial Files");
  lines.push("");
  lines.push(`- WSG reference: ${report.expectedFilesSummary.wsgReference.title} (${report.expectedFilesSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.expectedFilesSummary.assessedPages}`);
  lines.push(`- Average expected-files score: ${formatPercentScore(report.expectedFilesSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.expectedFilesSummary.highUrgencyPages}`);
  lines.push("- Missing files across pages:");
  lines.push(`  - robots.txt missing: ${report.expectedFilesSummary.missing.robotsTxt}`);
  lines.push(`  - sitemap.xml missing: ${report.expectedFilesSummary.missing.sitemapXml}`);
  lines.push(`  - .well-known/security.txt missing: ${report.expectedFilesSummary.missing.securityTxt}`);
  lines.push(`  - manifest.webmanifest missing: ${report.expectedFilesSummary.missing.webManifest}`);
  lines.push(`  - favicon.ico missing: ${report.expectedFilesSummary.missing.favicon}`);

  lines.push("");
  lines.push("## WSG Reduce Data Transfer With Compression");
  lines.push("");
  lines.push(`- WSG reference: ${report.compressionSummary.wsgReference.title} (${report.compressionSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.compressionSummary.assessedPages}`);
  lines.push(`- Average compression score: ${formatPercentScore(report.compressionSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.compressionSummary.highUrgencyPages}`);
  lines.push(`- Pages missing effective text compression: ${report.compressionSummary.pagesMissingTextCompression}`);
  lines.push(`- Aggregate potential compression savings: ${formatBytes(report.compressionSummary.totalEstimatedSavingsBytes)}`);

  if ((report.compressionSummary.recurringOpportunities || []).length > 0) {
    lines.push("- Recurring compression opportunities:");
    for (const item of report.compressionSummary.recurringOpportunities.slice(0, 10)) {
      lines.push(`  - ${item.title}: appears on ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${formatBytes(item.totalEstimatedSavingsBytes)} total savings` : ""}, urgency ${String(item.urgency || "medium").toUpperCase()}`);
    }
  }

  lines.push("");
  lines.push("## WSG Efficient Solution Optimization Opportunities");
  lines.push("");
  lines.push(`- WSG reference: ${report.optimizationSummary.wsgReference.title} (${report.optimizationSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.optimizationSummary.assessedPages}`);
  lines.push(`- Average optimization score: ${formatPercentScore(report.optimizationSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.optimizationSummary.highUrgencyPages}`);
  lines.push(`- Aggregate potential byte savings: ${formatBytes(report.optimizationSummary.totalEstimatedSavingsBytes)}`);
  lines.push(`- Aggregate render-blocking reduction potential: ${Math.round(report.optimizationSummary.totalEstimatedBlockingMs)} ms`);

  if ((report.optimizationSummary.recurringOpportunities || []).length > 0) {
    lines.push("- Recurring optimization opportunities:");
    for (const item of report.optimizationSummary.recurringOpportunities.slice(0, 10)) {
      lines.push(`  - ${item.title}: appears on ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${formatBytes(item.totalEstimatedSavingsBytes)} total savings` : ""}${item.totalEstimatedBlockingMs > 0 ? `, est. ${Math.round(item.totalEstimatedBlockingMs)} ms unblock` : ""}`);
    }
  }

  lines.push("");
  lines.push("## WSG Offline Access and Caching Support");
  lines.push("");
  lines.push(`- WSG reference: ${report.offlineSupportSummary.wsgReference.title} (${report.offlineSupportSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.offlineSupportSummary.assessedPages}`);
  lines.push(`- Average offline support score: ${formatPercentScore(report.offlineSupportSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.offlineSupportSummary.highUrgencyPages}`);
  lines.push(`- Pages without service worker support: ${report.offlineSupportSummary.pagesWithoutServiceWorker}`);
  lines.push(`- Pages without offline support: ${report.offlineSupportSummary.pagesWithoutOfflineSupport}`);
  lines.push(`- Pages with weak cache TTL signals: ${report.offlineSupportSummary.pagesWithWeakCacheTtl}`);

  if ((report.offlineSupportSummary.recurringOpportunities || []).length > 0) {
    lines.push("- Recurring offline/caching opportunities:");
    for (const item of report.offlineSupportSummary.recurringOpportunities.slice(0, 10)) {
      lines.push(`  - ${item.title}: appears on ${item.pageCount} page(s), urgency ${String(item.urgency || "medium").toUpperCase()}`);
    }
  }

  lines.push("");
  lines.push("## WSG Latest Stable Language Version");
  lines.push("");
  lines.push(`- WSG reference: ${report.languageVersionSummary.wsgReference.title} (${report.languageVersionSummary.wsgReference.url})`);
  lines.push(`- Assessed pages: ${report.languageVersionSummary.assessedPages}`);
  lines.push(`- Average language-version score: ${formatPercentScore(report.languageVersionSummary.averageScore)}`);
  lines.push(`- High urgency pages: ${report.languageVersionSummary.highUrgencyPages}`);
  lines.push(`- Pages exposing runtime/language version signals: ${report.languageVersionSummary.pagesWithVersionDisclosure}`);
  lines.push(`- Pages with outdated runtime/language signals: ${report.languageVersionSummary.pagesWithOutdatedRuntimeSignals}`);

  if ((report.languageVersionSummary.topOutdatedSignals || []).length > 0) {
    lines.push("- Recurring outdated runtime/language signals:");
    for (const item of report.languageVersionSummary.topOutdatedSignals.slice(0, 10)) {
      lines.push(`  - ${item.family}${item.version ? ` ${item.version}` : ""}: seen on ${item.pageCount} page(s)${item.recommendedBaseline ? `, baseline ${item.recommendedBaseline}+` : ""}, urgency ${String(item.urgency || "medium").toUpperCase()}`);
    }
  }

  lines.push("");
  lines.push("## WSG Third-Party JavaScript Assessment");
  lines.push("");
  lines.push(`- WSG reference: ${report.thirdPartyJsSummary.wsgReference.title} (${report.thirdPartyJsSummary.wsgReference.url})`);
  lines.push(`- Average third-party JS risk score: ${formatPercentScore(report.thirdPartyJsSummary.averageScore)}`);
  lines.push(`- Pages with high urgency: ${report.thirdPartyJsSummary.highUrgencyPages}`);
  lines.push(`- Distinct third-party script providers: ${report.thirdPartyJsSummary.providers.length}`);

  if (report.thirdPartyJsSummary.providers.length > 0) {
    lines.push("");
    lines.push("### Top Third-Party Script Providers");
    lines.push("");
    for (const provider of report.thirdPartyJsSummary.providers.slice(0, 8)) {
      lines.push(`- ${provider.hostname}: ${formatGreenStatus(provider.status)}${provider.hostedBy ? ` (${provider.hostedBy})` : ""}; on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)}`);
    }
  }

  lines.push("");
  lines.push("## Cross-Page Hosting Risk (Non-Green Providers)");
  lines.push("");
  lines.push("- Focus: recurring external CSS/JS providers with non-green or unknown hosting status.");

  if (report.externalProviderRiskSummary.recurringNonGreenProviders.length > 0) {
    lines.push("");
    lines.push("### Recurring Non-Green Providers");
    lines.push("");
    for (const provider of report.externalProviderRiskSummary.recurringNonGreenProviders.slice(0, 8)) {
      lines.push(`- ${provider.hostname}${provider.hostedBy ? ` (${provider.hostedBy})` : ""}: on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)} total; types ${provider.resourceTypes.join(", ")}`);
    }
  } else if (report.externalProviderRiskSummary.nonGreenProviders.length > 0) {
    lines.push("- Non-green providers were found, but none recur across multiple pages in this scan.");
  } else {
    lines.push("- No non-green external providers were detected in this scan.");
  }

  if (report.externalProviderRiskSummary.recurringUnknownProviders.length > 0) {
    lines.push("");
    lines.push("### Recurring Unknown-Status Providers");
    lines.push("");
    for (const provider of report.externalProviderRiskSummary.recurringUnknownProviders.slice(0, 6)) {
      lines.push(`- ${provider.hostname}: on ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${formatBytes(provider.transferBytes)} total; types ${provider.resourceTypes.join(", ")}`);
    }
  }

  lines.push("");
  lines.push("## Green Hosting Checks");
  lines.push("");
  lines.push("- Source: https://www.thegreenwebfoundation.org/tools/green-web-dataset/");
  lines.push(`- Submitted URL hosts checked: ${report.summary.greenWeb.pageHostsChecked}`);
  lines.push(`- Submitted URL hosts on green energy: ${report.summary.greenWeb.pageHostsGreen}`);
  lines.push(`- Submitted URL hosts not confirmed green: ${report.summary.greenWeb.pageHostsNotGreen}`);
  lines.push(`- Submitted URL hosts unknown: ${report.summary.greenWeb.pageHostsUnknown}`);
  lines.push(`- External CSS/JS origins checked: ${report.summary.greenWeb.externalOriginsChecked}`);
  lines.push(`- External CSS/JS origins on green energy: ${report.summary.greenWeb.externalOriginsGreen}`);
  lines.push(`- External CSS/JS origins not confirmed green: ${report.summary.greenWeb.externalOriginsNotGreen}`);
  lines.push(`- External CSS/JS origins unknown: ${report.summary.greenWeb.externalOriginsUnknown}`);
  lines.push("");
  lines.push("## WSG SC 3.1 Budget Guidance");
  lines.push("");
  lines.push(`- WSG reference: ${report.budgetGuidance.wsgReference.title} (${report.budgetGuidance.wsgReference.url})`);
  lines.push(`- Sustainable Web Design benchmark: ${report.budgetGuidance.benchmarkReference.url}`);
  lines.push(`- Current transfer rating: ${report.budgetGuidance.current.transferRating || "n/a"}`);
  lines.push(`- Current CO2 rating: ${report.budgetGuidance.current.co2Rating || "n/a"}`);
  lines.push(`- Recommended budget target: rating ${report.budgetGuidance.recommendedBudget.targetRating}`);
  lines.push(`- Budget max transfer/page: ${formatBytes(report.budgetGuidance.recommendedBudget.maxTransferBytesPerPage)}`);
  lines.push(`- Budget max CO2/page: ${formatGrams(report.budgetGuidance.recommendedBudget.maxCo2GramsPerPage)}`);

  if (report.budgetGuidance.reductionsNeeded.transferBytesPerPage.needsReduction) {
    lines.push(`- Transfer reduction needed: ${formatBytes(report.budgetGuidance.reductionsNeeded.transferBytesPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.percent.toFixed(1)}%)`);
  } else {
    lines.push("- Transfer reduction needed: none (already within target budget)");
  }

  if (report.budgetGuidance.reductionsNeeded.co2GramsPerPage.needsReduction) {
    lines.push(`- CO2 reduction needed: ${formatGrams(report.budgetGuidance.reductionsNeeded.co2GramsPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.percent.toFixed(1)}%)`);
  } else {
    lines.push("- CO2 reduction needed: none (already within target budget)");
  }

  lines.push(`- Stretch budget (rating ${report.budgetGuidance.stretchBudget.targetRating}): ${formatBytes(report.budgetGuidance.stretchBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.stretchBudget.maxCo2GramsPerPage)} per page`);
  lines.push("");
  lines.push("## WSG SC 3.2 Redundancy Analysis");
  lines.push("");
  lines.push("- WSG reference: Remove unnecessary or redundant information (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information)");
  lines.push("- Redundancy score: 0 (low redundancy) to 100 (high redundancy)");
  lines.push("- Urgency levels: low, medium, high");
  lines.push("");
  lines.push("## WSG Remove Unnecessary Code Analysis");
  lines.push("");
  lines.push("- WSG reference: Remove unnecessary code (https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code)");
  lines.push("- Dead-code score: 0 (low unnecessary code) to 100 (high unnecessary code)");
  lines.push("- Includes unused CSS/JS, duplicated JS, and HTML complexity heuristics");
  lines.push("");
  lines.push("## WSG Defer Non-Critical Resources Analysis");
  lines.push("");
  lines.push("- WSG reference: Defer the loading of non-critical resources (https://www.w3.org/TR/web-sustainability-guidelines/#defer-the-loading-of-non-critical-resources)");
  lines.push("- Non-critical score: 0 (few defer opportunities) to 100 (many deferrable resources)");
  lines.push("- Uses offscreen image savings, unused CSS/JS, render-blocking delay, and heavy likely-non-critical assets");
  lines.push("");
  lines.push("## WSG Modularization Analysis");
  lines.push("");
  lines.push("- WSG reference: Modularize bandwidth-heavy components (https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components)");
  lines.push("- Modularization score: 0 (few obvious on-demand opportunities) to 100 (many heavy initial-load components)");
  lines.push("- This analysis looks for heavy scripts, images, styles, fonts, and media that should be split or loaded on demand.");
  lines.push("");
  lines.push("## Cross-Page Patterns");
  lines.push("");
  for (const message of report.crossPagePatterns.designSystemGuidance) {
    lines.push(`- ${message}`);
  }

  if (report.crossPagePatterns.heavyAssetPatterns.length > 0) {
    lines.push("");
    lines.push("### Recurring Heavy Assets");
    lines.push("");
    for (const pattern of report.crossPagePatterns.heavyAssetPatterns.slice(0, 5)) {
      lines.push(`- ${pattern.label} appears on ${pattern.pageCount} pages (${formatBytes(pattern.totalTransferBytes)} total)`);
    }
  }

  if (report.crossPagePatterns.recurringTargets.length > 0) {
    lines.push("");
    lines.push("### Recurring Modularization Targets");
    lines.push("");
    for (const target of report.crossPagePatterns.recurringTargets.slice(0, 5)) {
      lines.push(`- ${target.title} affects ${target.pageCount} pages${target.totalEstimatedSavingsBytes > 0 ? ` (est. ${formatBytes(target.totalEstimatedSavingsBytes)} aggregate savings)` : ""}`);
    }
  }

  if (report.crossPagePatterns.recurringOrigins.length > 0) {
    lines.push("");
    lines.push("### Recurring Heavy Origins");
    lines.push("");
    for (const origin of report.crossPagePatterns.recurringOrigins.slice(0, 5)) {
      lines.push(`- ${origin.domain} is a recurring heavy source on ${origin.pageCount} pages (${formatBytes(origin.totalTransferBytes)} total)`);
    }
  }

  lines.push("");
  lines.push("## Site-Wide Guidance");
  lines.push("");

  if (report.siteGuidance.singleSiteScan) {
    lines.push("- This scan appears to target a single site. Shared recommendations below should typically be fixed once at platform/template level.");
  } else {
    lines.push("- This scan includes multiple sites. Shared recommendations are grouped per origin.");
  }

  for (const site of report.siteGuidance.sites) {
    lines.push("");
    lines.push(`### ${site.origin}`);
    lines.push(`- Sampled pages: ${site.pageCount}`);

    if (site.sharedRecommendations.length === 0) {
      lines.push("- No clear site-wide issues detected from the sampled pages.");
    } else {
      lines.push("- Shared recommendations:");
      for (const recommendation of site.sharedRecommendations.slice(0, 8)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if (site.recurringDependencies.length > 0) {
      lines.push("- Recurring vulnerable dependencies:");
      for (const dependency of site.recurringDependencies.slice(0, 6)) {
        lines.push(`  - ${dependency.library}${dependency.version ? `@${dependency.version}` : ""}: ${dependency.pageCount} page(s)${dependency.severity ? `, severity ${String(dependency.severity).toUpperCase()}` : ""}`);
      }
    }

    if ((site.recurringRuntimeSignals || []).length > 0) {
      lines.push("- Recurring runtime/language version signals:");
      for (const signal of site.recurringRuntimeSignals.slice(0, 6)) {
        lines.push(`  - ${signal.family}${signal.version ? ` ${signal.version}` : ""}: ${signal.pageCount} page(s)${signal.recommendedBaseline ? `, baseline ${signal.recommendedBaseline}+` : ""}, urgency ${String(signal.urgency || "medium").toUpperCase()}`);
      }
    }

    if ((site.recurringOfflineOpportunities || []).length > 0) {
      lines.push("- Recurring offline/caching opportunities:");
      for (const item of site.recurringOfflineOpportunities.slice(0, 6)) {
        lines.push(`  - ${item.title}: ${item.pageCount} page(s), urgency ${String(item.urgency || "medium").toUpperCase()}`);
      }
    }

    if ((site.recurringCompression || []).length > 0) {
      lines.push("- Recurring compression opportunities:");
      for (const item of site.recurringCompression.slice(0, 6)) {
        lines.push(`  - ${item.title}: ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${formatBytes(item.totalEstimatedSavingsBytes)} total savings` : ""}, urgency ${String(item.urgency || "medium").toUpperCase()}`);
      }
    }

    if ((site.recurringOptimization || []).length > 0) {
      lines.push("- Recurring optimization opportunities:");
      for (const opportunity of site.recurringOptimization.slice(0, 6)) {
        lines.push(`  - ${opportunity.title}: ${opportunity.pageCount} page(s)${opportunity.totalEstimatedSavingsBytes > 0 ? `, est. ${formatBytes(opportunity.totalEstimatedSavingsBytes)} total savings` : ""}${opportunity.totalEstimatedBlockingMs > 0 ? `, est. ${Math.round(opportunity.totalEstimatedBlockingMs)} ms unblock` : ""}`);
      }
    }
  }

  lines.push("");
  lines.push("## Page-Specific Guidance");
  lines.push("");
  lines.push("- Use this section for page-level exceptions after site-wide/platform fixes are planned.");

  for (const site of report.siteGuidance.sites) {
    lines.push("");
    lines.push(`### ${site.origin}`);
    for (const page of site.pageSpecific.slice(0, 6)) {
      lines.push(`- ${page.url}`);
      lines.push(`  - Combined urgency: ${String(page.urgency || "low").toUpperCase()}`);
      lines.push(`  - Compression score: ${formatPercentScore(page.compressionScore)}, optimization score: ${formatPercentScore(page.optimizationScore)}, offline score: ${formatPercentScore(page.offlineScore)}, dependency score: ${formatPercentScore(page.dependencyScore)}, language score: ${formatPercentScore(page.languageScore)}, security score: ${formatPercentScore(page.securityScore)}, expected-files score: ${formatPercentScore(page.expectedFilesScore)}`);
      for (const recommendation of page.topRecommendations.slice(0, 3)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
      }
    }
  }

  lines.push("");
  lines.push("## Priority Improvements");
  lines.push("");

  for (const entry of report.results) {
    if (entry.status !== "ok") {
      lines.push(`### ${entry.url}`);
      lines.push(`- Status: error`);
      lines.push(`- Error: ${entry.error}`);
      lines.push("");
      continue;
    }

    lines.push(`### ${entry.url}`);
    lines.push(`- Performance: ${formatScore(entry.performanceScore)}`);
    lines.push(`- Transfer: ${formatBytes(entry.transferBytes)}`);
    lines.push(`- CO2 estimate: ${entry.co2Grams.toFixed(4)} g`);
    if (entry.greenWeb?.page) {
      lines.push(`- Page host green energy status: ${formatGreenStatus(entry.greenWeb.page.status)}${entry.greenWeb.page.hostedBy ? ` (${entry.greenWeb.page.hostedBy})` : ""}`);
    }
    lines.push(`- Redundancy score: ${formatPercentScore(entry.redundancy?.score)}`);
    lines.push(`- Redundancy urgency: ${(entry.redundancy?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Modularization score: ${formatPercentScore(entry.modularization?.score)}`);
    lines.push(`- Modularization urgency: ${(entry.modularization?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Dead-code score: ${formatPercentScore(entry.deadCode?.score)}`);
    lines.push(`- Dead-code urgency: ${(entry.deadCode?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Non-critical resources score: ${formatPercentScore(entry.nonCriticalResources?.score)}`);
    lines.push(`- Non-critical resources urgency: ${(entry.nonCriticalResources?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Form validation score: ${formatPercentScore(entry.formValidation?.score)}`);
    lines.push(`- Form validation urgency: ${(entry.formValidation?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Metadata score: ${formatPercentScore(entry.metadata?.score)}`);
    lines.push(`- Metadata urgency: ${(entry.metadata?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Layout adaptation score: ${formatPercentScore(entry.layoutAdaptation?.score)}`);
    lines.push(`- Layout adaptation urgency: ${(entry.layoutAdaptation?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Lightweight security score: ${formatPercentScore(entry.securityLight?.score)}`);
    lines.push(`- Lightweight security urgency: ${(entry.securityLight?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Dependency maintenance score: ${formatPercentScore(entry.dependencyMaintenance?.score)}`);
    lines.push(`- Dependency maintenance urgency: ${(entry.dependencyMaintenance?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Expected-files score: ${formatPercentScore(entry.expectedFiles?.score)}`);
    lines.push(`- Expected-files urgency: ${(entry.expectedFiles?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Compression score: ${formatPercentScore(entry.compressionOpportunities?.score)}`);
    lines.push(`- Compression urgency: ${(entry.compressionOpportunities?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Optimization score: ${formatPercentScore(entry.optimizationOpportunities?.score)}`);
    lines.push(`- Optimization urgency: ${(entry.optimizationOpportunities?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Offline support score: ${formatPercentScore(entry.offlineSupport?.score)}`);
    lines.push(`- Offline support urgency: ${(entry.offlineSupport?.urgency || "n/a").toUpperCase()}`);
    lines.push(`- Third-party JS risk score: ${formatPercentScore(entry.thirdPartyJs?.score)}`);
    lines.push(`- Third-party JS urgency: ${(entry.thirdPartyJs?.urgency || "n/a").toUpperCase()}`);

    if (entry.redundancy?.estimatedRedundantBytes > 0) {
      lines.push(`- Estimated redundant transfer: ${formatBytes(entry.redundancy.estimatedRedundantBytes)} (${(entry.redundancy.redundancyRatio * 100).toFixed(1)}% of transfer)`);
    }

    if (entry.redundancy?.recommendations?.length > 0) {
      lines.push("- Redundancy recommendations:");
      for (const recommendation of entry.redundancy.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}${recommendation.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(recommendation.estimatedSavingsBytes)} savings)` : ""}`);
      }
    }

    if (entry.modularization?.heavyRequestCount > 0) {
      lines.push(`- Heavy initial-load requests: ${entry.modularization.heavyRequestCount} (${formatBytes(entry.modularization.heavyBytes)} total)`);
    }

    if (entry.modularization?.onDemandCandidates?.length > 0) {
      lines.push("- On-demand modularization candidates:");
      for (const candidate of entry.modularization.onDemandCandidates.slice(0, 4)) {
        lines.push(`  - [${candidate.urgency.toUpperCase()}] ${candidate.title}${candidate.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(candidate.estimatedSavingsBytes)})` : ""}`);
        lines.push(`    - ${candidate.strategy}`);
      }
    }

    if ((entry.greenWeb?.externalAssets || []).length > 0) {
      lines.push("- External CSS/JS hosting checks:");
      for (const asset of entry.greenWeb.externalAssets.slice(0, 6)) {
        lines.push(`  - ${asset.resourceType.toUpperCase()} ${asset.hostname}: ${formatGreenStatus(asset.greenCheck?.status)}${asset.greenCheck?.hostedBy ? ` (${asset.greenCheck.hostedBy})` : ""}; ${asset.requestCount} request(s), ${formatBytes(asset.transferBytes)}`);
      }
    }

    if ((entry.thirdPartyJs?.recommendations || []).length > 0) {
      lines.push("- Third-party JS recommendations:");
      for (const recommendation of entry.thirdPartyJs.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.deadCode?.recommendations || []).length > 0) {
      lines.push("- Dead-code recommendations:");
      for (const recommendation of entry.deadCode.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}${recommendation.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(recommendation.estimatedSavingsBytes)} savings)` : ""}`);
        lines.push(`    - ${recommendation.strategy}`);
      }
    }

    if ((entry.nonCriticalResources?.candidates || []).length > 0) {
      lines.push("- Non-critical loading candidates:");
      for (const candidate of entry.nonCriticalResources.candidates.slice(0, 5)) {
        lines.push(`  - [${candidate.urgency.toUpperCase()}] ${candidate.title}${candidate.estimatedSavingsBytes > 0 ? ` (est. ${formatBytes(candidate.estimatedSavingsBytes)} deferrable)` : ""}${candidate.estimatedBlockingMs ? ` (est. ${Math.round(candidate.estimatedBlockingMs)} ms unblock)` : ""}`);
        lines.push(`    - ${candidate.strategy}`);
      }
    }

    if ((entry.formValidation?.recommendations || []).length > 0) {
      lines.push("- Form validation recommendations:");
      for (const recommendation of entry.formValidation.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.metadata?.recommendations || []).length > 0) {
      lines.push("- Metadata recommendations:");
      for (const recommendation of entry.metadata.recommendations.slice(0, 5)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.layoutAdaptation?.recommendations || []).length > 0) {
      lines.push("- Layout adaptation recommendations:");
      for (const recommendation of entry.layoutAdaptation.recommendations.slice(0, 5)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.securityLight?.recommendations || []).length > 0) {
      lines.push("- Lightweight security recommendations:");
      for (const recommendation of entry.securityLight.recommendations.slice(0, 6)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.dependencyMaintenance?.recommendations || []).length > 0) {
      lines.push("- Dependency maintenance recommendations:");
      for (const recommendation of entry.dependencyMaintenance.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.languageVersionGuidance?.recommendations || []).length > 0) {
      lines.push("- Language/runtime version recommendations:");
      for (const recommendation of entry.languageVersionGuidance.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.languageVersionGuidance?.outdatedTechnologies || []).length > 0) {
      lines.push("- Outdated runtime/language signals:");
      for (const signal of entry.languageVersionGuidance.outdatedTechnologies.slice(0, 6)) {
        lines.push(`  - ${signal.family}${signal.version ? ` ${signal.version}` : ""}${signal.recommendedBaseline ? ` (baseline ${signal.recommendedBaseline}+)` : ""} via ${signal.sourceHeader}`);
      }
    }

    if ((entry.dependencyMaintenance?.vulnerableLibraries || []).length > 0) {
      lines.push("- Vulnerable dependency findings:");
      for (const dependency of entry.dependencyMaintenance.vulnerableLibraries.slice(0, 8)) {
        lines.push(`  - ${dependency.library}${dependency.version ? `@${dependency.version}` : ""}${dependency.severity ? ` [${String(dependency.severity).toUpperCase()}]` : ""}${typeof dependency.vulnerabilities === "number" ? ` (${dependency.vulnerabilities} vulnerability entries)` : ""}`);
      }
    }

    if ((entry.expectedFiles?.recommendations || []).length > 0) {
      lines.push("- Expected-files recommendations:");
      for (const recommendation of entry.expectedFiles.recommendations.slice(0, 4)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.compressionOpportunities?.recommendations || []).length > 0) {
      lines.push("- Compression recommendations:");
      for (const recommendation of entry.compressionOpportunities.recommendations.slice(0, 6)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.optimizationOpportunities?.recommendations || []).length > 0) {
      lines.push("- Optimization recommendations:");
      for (const recommendation of entry.optimizationOpportunities.recommendations.slice(0, 6)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if ((entry.offlineSupport?.recommendations || []).length > 0) {
      lines.push("- Offline/caching recommendations:");
      for (const recommendation of entry.offlineSupport.recommendations.slice(0, 5)) {
        lines.push(`  - [${recommendation.urgency.toUpperCase()}] ${recommendation.title}`);
        lines.push(`    - ${recommendation.detail}`);
      }
    }

    if (entry.findings.length === 0) {
      lines.push("- No high-priority issues flagged by current mapping.");
      lines.push("");
      continue;
    }

    for (const finding of entry.findings.slice(0, 6)) {
      lines.push(`- [${finding.impact.toUpperCase()}] ${finding.title}`);
      if (finding.displayValue) {
        lines.push(`  - Current value: ${finding.displayValue}`);
      }
      if (finding.wsg) {
        lines.push(`  - WSG: ${finding.wsg.id} ${finding.wsg.title} (${finding.wsg.url})`);
      }
    }

    lines.push("");
  }

  lines.push("## Copy/Paste Issue Snippets");
  lines.push("");
  for (const entry of report.results) {
    if (entry.status !== "ok") continue;
    for (const finding of entry.findings.slice(0, 3)) {
      lines.push("```md");
      lines.push(finding.issueTemplate);
      lines.push("```\n");
    }
  }

  return lines.join("\n");
}

export function renderHtml(report, markdownText) {
  const rows = report.results
    .map((entry) => {
      if (entry.status !== "ok") {
        return `<tr><td>${escapeHtml(entry.url)}</td><td>Error</td><td colspan=\"4\">${escapeHtml(entry.error || "Unknown error")}</td></tr>`;
      }

      return `<tr>
        <td><a href=\"${escapeAttr(entry.url)}\">${escapeHtml(entry.url)}</a></td>
        <td>${formatScore(entry.performanceScore)}</td>
        <td>${formatBytes(entry.transferBytes)}</td>
        <td>${entry.co2Grams.toFixed(4)} g</td>
        <td>${entry.findings.length}</td>
        <td>${entry.findings.slice(0, 2).map((f) => escapeHtml(f.title)).join("; ") || "None"}</td>
      </tr>`;
    })
    .join("\n");

  const snippets = report.results
    .filter((entry) => entry.status === "ok")
    .flatMap((entry) => entry.findings.slice(0, 3))
    .map((finding, idx) => {
      const snippetId = `snippet-${idx + 1}`;
      return `<section class=\"snippet\">
        <h3>${escapeHtml(finding.title)}</h3>
        <p><strong>Impact:</strong> ${escapeHtml(finding.impact)}</p>
        <textarea id=\"${snippetId}\" readonly aria-label=\"Issue snippet ${idx + 1}\">${escapeHtml(finding.issueTemplate)}</textarea>
        <button type=\"button\" class=\"copy-btn\" data-target=\"${snippetId}\">Copy issue text</button>
      </section>`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sustainability Report - ${escapeHtml(report.scanTitle)}</title>
  <style>
    :root {
      --bg: #f7f8f4;
      --surface: #ffffff;
      --ink: #1d2a2a;
      --muted: #536363;
      --accent: #0b6e4f;
      --warning: #8a4b08;
      --border: #d9e1dd;
    }
    body { margin: 0; font-family: "IBM Plex Sans", "Segoe UI", sans-serif; background: linear-gradient(180deg, #edf5ef, var(--bg)); color: var(--ink); }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 1rem; }
    h1, h2, h3 { line-height: 1.2; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin: 1rem 0; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 0.55rem; border-bottom: 1px solid var(--border); vertical-align: top; }
    a { color: var(--accent); }
    .snippet textarea { width: 100%; min-height: 180px; font-family: ui-monospace, Menlo, monospace; }
    .copy-btn { margin-top: 0.5rem; padding: 0.45rem 0.7rem; border: 1px solid var(--accent); background: var(--accent); color: #fff; border-radius: 8px; cursor: pointer; }
    .copy-btn:focus, a:focus { outline: 3px solid #ffd166; outline-offset: 2px; }
    .muted { color: var(--muted); }
    @media (max-width: 700px) {
      th:nth-child(3), td:nth-child(3), th:nth-child(6), td:nth-child(6) { display: none; }
      .snippet textarea { min-height: 220px; }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <header class="card">
      <h1>Sustainability Scan Report</h1>
      <p class="muted">Actionable Lighthouse + CO2.js findings mapped to WSG guidance.</p>
      <ul>
        <li><strong>Scan title:</strong> ${escapeHtml(report.scanTitle)}</li>
        <li><strong>Generated:</strong> ${escapeHtml(report.generatedAt)}</li>
        <li><strong>Scanned URLs:</strong> ${report.summary.okCount} / ${report.requestedUrls.length}</li>
        <li><strong>Estimated CO2:</strong> ${report.summary.totalCo2Grams.toFixed(4)} g</li>
        <li><strong>Green page hosts:</strong> ${report.summary.greenWeb.pageHostsGreen} / ${report.summary.greenWeb.pageHostsChecked}</li>
        <li><strong>Average redundancy score:</strong> ${formatPercentScore(report.summary.averageRedundancyScore)}</li>
        <li><strong>Average modularization score:</strong> ${formatPercentScore(report.summary.averageModularizationScore)}</li>
        <li><strong>Average dead-code score:</strong> ${formatPercentScore(report.summary.averageDeadCodeScore)}</li>
        <li><strong>Average non-critical resources score:</strong> ${formatPercentScore(report.summary.averageNonCriticalResourcesScore)}</li>
        <li><strong>Average form validation score:</strong> ${formatPercentScore(report.summary.averageFormValidationScore)}</li>
        <li><strong>Average metadata score:</strong> ${formatPercentScore(report.summary.averageMetadataScore)}</li>
        <li><strong>Average layout adaptation score:</strong> ${formatPercentScore(report.summary.averageLayoutAdaptationScore)}</li>
        <li><strong>Average lightweight security score:</strong> ${formatPercentScore(report.summary.averageSecurityLightScore)}</li>
        <li><strong>Average dependency maintenance score:</strong> ${formatPercentScore(report.summary.averageDependencyMaintenanceScore)}</li>
        <li><strong>Average expected-files score:</strong> ${formatPercentScore(report.summary.averageExpectedFilesScore)}</li>
        <li><strong>Average compression score:</strong> ${formatPercentScore(report.summary.averageCompressionScore)}</li>
        <li><strong>Average optimization score:</strong> ${formatPercentScore(report.summary.averageOptimizationScore)}</li>
        <li><strong>Average offline support score:</strong> ${formatPercentScore(report.summary.averageOfflineSupportScore)}</li>
        <li><strong>Average language version score:</strong> ${formatPercentScore(report.summary.averageLanguageVersionScore)}</li>
      </ul>
      <p class="muted" style="margin-top:0.75rem;">Download this report: <a href="./report.md">Markdown report</a> · <a href="./report.json">JSON report</a></p>
    </header>

    <section class="card" aria-labelledby="form-validation-heading">
      <h2 id="form-validation-heading">WSG Form Validation and Tooling</h2>
      <p class="muted">Assesses form error validation practices and tooling support while avoiding re-scans of repeated controls across pages.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.formValidationSummary.wsgReference.url)}">${escapeHtml(report.formValidationSummary.wsgReference.title)}</a></li>
        <li><strong>Average form validation score:</strong> ${formatPercentScore(report.summary.averageFormValidationScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyFormValidationCount}</li>
        <li><strong>Unique signatures assessed:</strong> ${report.formValidationSummary.uniqueElementSignaturesAssessed}</li>
        <li><strong>Total occurrences:</strong> ${report.formValidationSummary.totalOccurrences}</li>
        <li><strong>Reused assessments:</strong> ${report.formValidationSummary.reusedFromCacheCount}</li>
      </ul>
      ${renderFormValidationSummary(report.formValidationSummary)}
    </section>

    <section class="card" aria-labelledby="metadata-heading">
      <h2 id="metadata-heading">WSG Metadata for Machine Readability</h2>
      <p class="muted">Checks page metadata against machine-readable best practices including canonical URL, social metadata, and structured data validity.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.metadataSummary.wsgReference.url)}">${escapeHtml(report.metadataSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.metadataSummary.assessedPages}</li>
        <li><strong>Average metadata score:</strong> ${formatPercentScore(report.metadataSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.metadataSummary.highUrgencyPages}</li>
      </ul>
      ${renderMetadataSummary(report.metadataSummary)}
    </section>

    <section class="card" aria-labelledby="layout-support-heading">
      <h2 id="layout-support-heading">WSG Multi-Device Layout Support</h2>
      <p class="muted">Assesses whether page layouts adapt cleanly on mobile and tablet viewports, with emphasis on overflow and touch target usability.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.layoutSupportSummary.wsgReference.url)}">${escapeHtml(report.layoutSupportSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.layoutSupportSummary.assessedPages}</li>
        <li><strong>Average layout adaptation score:</strong> ${formatPercentScore(report.layoutSupportSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.layoutSupportSummary.highUrgencyPages}</li>
      </ul>
      ${renderLayoutSupportSummary(report.layoutSupportSummary)}
    </section>

    <section class="card" aria-labelledby="security-light-heading">
      <h2 id="security-light-heading">WSG Lightweight Security Review</h2>
      <p class="muted">Non-invasive checks for common, easy-to-find security issues such as missing headers and vulnerable JavaScript library flags.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.securityLightSummary.wsgReference.url)}">${escapeHtml(report.securityLightSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.securityLightSummary.assessedPages}</li>
        <li><strong>Average lightweight security score:</strong> ${formatPercentScore(report.securityLightSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.securityLightSummary.highUrgencyPages}</li>
      </ul>
      ${renderSecurityLightSummary(report.securityLightSummary)}
    </section>

    <section class="card" aria-labelledby="dependency-maintenance-heading">
      <h2 id="dependency-maintenance-heading">WSG Dependency Maintenance Review</h2>
      <p class="muted">Shows where dependencies appear unmaintained using known vulnerable library signals and dependency integrity hints.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.dependencyMaintenanceSummary.wsgReference.url)}">${escapeHtml(report.dependencyMaintenanceSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.dependencyMaintenanceSummary.assessedPages}</li>
        <li><strong>Average dependency maintenance score:</strong> ${formatPercentScore(report.dependencyMaintenanceSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.dependencyMaintenanceSummary.highUrgencyPages}</li>
      </ul>
      ${renderDependencyMaintenanceSummary(report.dependencyMaintenanceSummary)}
    </section>

    <section class="card" aria-labelledby="expected-files-heading">
      <h2 id="expected-files-heading">WSG Expected and Beneficial Files</h2>
      <p class="muted">Checks for common root-level files that improve crawlability, maintenance transparency, and operational clarity.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.expectedFilesSummary.wsgReference.url)}">${escapeHtml(report.expectedFilesSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.expectedFilesSummary.assessedPages}</li>
        <li><strong>Average expected-files score:</strong> ${formatPercentScore(report.expectedFilesSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.expectedFilesSummary.highUrgencyPages}</li>
      </ul>
      ${renderExpectedFilesSummary(report.expectedFilesSummary)}
    </section>

    <section class="card" aria-labelledby="optimization-heading">
      <h2 id="optimization-heading">WSG Efficient Solution Optimization Opportunities</h2>
      <p class="muted">Highlights easy bloat-removal wins like oversized images, missing compression, and render-blocking resources.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.optimizationSummary.wsgReference.url)}">${escapeHtml(report.optimizationSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.optimizationSummary.assessedPages}</li>
        <li><strong>Average optimization score:</strong> ${formatPercentScore(report.optimizationSummary.averageScore)} (0 low opportunity, 100 high opportunity)</li>
        <li><strong>High urgency pages:</strong> ${report.optimizationSummary.highUrgencyPages}</li>
      </ul>
      ${renderOptimizationSummary(report.optimizationSummary)}
    </section>

    <section class="card" aria-labelledby="compression-heading">
      <h2 id="compression-heading">WSG Reduce Data Transfer With Compression</h2>
      <p class="muted">Highlights transfer reduction opportunities via text compression, media encoding, and compression-friendly asset preparation.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.compressionSummary.wsgReference.url)}">${escapeHtml(report.compressionSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.compressionSummary.assessedPages}</li>
        <li><strong>Average compression score:</strong> ${formatPercentScore(report.compressionSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.compressionSummary.highUrgencyPages}</li>
      </ul>
      ${renderCompressionSummary(report.compressionSummary)}
    </section>

    <section class="card" aria-labelledby="offline-support-heading">
      <h2 id="offline-support-heading">WSG Offline Access and Caching Support</h2>
      <p class="muted">Evaluates support for offline use and web application behavior using service worker, offline routing, manifest, and cache policy signals.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.offlineSupportSummary.wsgReference.url)}">${escapeHtml(report.offlineSupportSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.offlineSupportSummary.assessedPages}</li>
        <li><strong>Average offline support score:</strong> ${formatPercentScore(report.offlineSupportSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.offlineSupportSummary.highUrgencyPages}</li>
      </ul>
      ${renderOfflineSupportSummary(report.offlineSupportSummary)}
    </section>

    <section class="card" aria-labelledby="language-version-heading">
      <h2 id="language-version-heading">WSG Latest Stable Language Version</h2>
      <p class="muted">Flags externally visible runtime/language version drift and recurring opportunities to align with modern stable baselines.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.languageVersionSummary.wsgReference.url)}">${escapeHtml(report.languageVersionSummary.wsgReference.title)}</a></li>
        <li><strong>Assessed pages:</strong> ${report.languageVersionSummary.assessedPages}</li>
        <li><strong>Average language-version score:</strong> ${formatPercentScore(report.languageVersionSummary.averageScore)} (0 low risk, 100 high risk)</li>
        <li><strong>High urgency pages:</strong> ${report.languageVersionSummary.highUrgencyPages}</li>
      </ul>
      ${renderLanguageVersionSummary(report.languageVersionSummary)}
    </section>

    <section class="card" aria-labelledby="green-hosting-heading">
      <h2 id="green-hosting-heading">Green Hosting Checks</h2>
      <p class="muted">Hosting status for the submitted URL hosts and any external script or stylesheet origins, using the Green Web Foundation dataset.</p>
      <ul>
        <li><strong>Dataset:</strong> <a href="https://www.thegreenwebfoundation.org/tools/green-web-dataset/">Green Web Foundation</a></li>
        <li><strong>Submitted URL hosts on green energy:</strong> ${report.summary.greenWeb.pageHostsGreen} / ${report.summary.greenWeb.pageHostsChecked}</li>
        <li><strong>Submitted URL hosts not confirmed green:</strong> ${report.summary.greenWeb.pageHostsNotGreen}</li>
        <li><strong>Submitted URL hosts unknown:</strong> ${report.summary.greenWeb.pageHostsUnknown}</li>
        <li><strong>External CSS/JS origins on green energy:</strong> ${report.summary.greenWeb.externalOriginsGreen} / ${report.summary.greenWeb.externalOriginsChecked}</li>
        <li><strong>External CSS/JS origins not confirmed green:</strong> ${report.summary.greenWeb.externalOriginsNotGreen}</li>
        <li><strong>External CSS/JS origins unknown:</strong> ${report.summary.greenWeb.externalOriginsUnknown}</li>
      </ul>
    </section>

    <section class="card" aria-labelledby="third-party-heading">
      <h2 id="third-party-heading">Third-Party JavaScript Assessment</h2>
      <p class="muted">Evaluates third-party script providers with the same priority as first-party code by combining payload, request volume, and hosting status.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.thirdPartyJsSummary.wsgReference.url)}">${escapeHtml(report.thirdPartyJsSummary.wsgReference.title)}</a></li>
        <li><strong>Average risk score:</strong> ${formatPercentScore(report.thirdPartyJsSummary.averageScore)}</li>
        <li><strong>High urgency pages:</strong> ${report.thirdPartyJsSummary.highUrgencyPages}</li>
        <li><strong>Distinct providers:</strong> ${report.thirdPartyJsSummary.providers.length}</li>
      </ul>
      ${renderThirdPartyProviders(report.thirdPartyJsSummary.providers)}
    </section>

    <section class="card" aria-labelledby="provider-risk-heading">
      <h2 id="provider-risk-heading">Cross-Page Hosting Risk</h2>
      <p class="muted">Recurring external providers with non-green or unknown hosting status across the scanned URL set.</p>
      ${renderExternalProviderRiskSummary(report.externalProviderRiskSummary)}
    </section>

    <section class="card" aria-labelledby="modularization-heading">
      <h2 id="modularization-heading">WSG Modularization Overview</h2>
      <p class="muted">Finds bandwidth-heavy components that should be split, deferred, or loaded only on demand.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#modularize-bandwidth-heavy-components">Modularize bandwidth-heavy components</a></li>
        <li><strong>Average modularization score:</strong> ${formatPercentScore(report.summary.averageModularizationScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyModularizationCount}</li>
      </ul>
      <p>Use this to identify candidates for route-level splitting, interaction-triggered imports, lazy media loading, and deferring heavy third-party or feature bundles.</p>
    </section>

    <section class="card" aria-labelledby="redundancy-heading">
      <h2 id="redundancy-heading">WSG 3.2 Redundancy Overview</h2>
      <p class="muted">Checks unnecessary or redundant information using Lighthouse waste signals.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-or-redundant-information">3.2 Remove unnecessary or redundant information</a></li>
        <li><strong>Average redundancy score:</strong> ${formatPercentScore(report.summary.averageRedundancyScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyRedundancyCount}</li>
      </ul>
      <p>Urgency is based on estimated redundant transfer and failed redundancy-related audits, helping teams prioritize fixes that reduce unnecessary bytes first.</p>
    </section>

    <section class="card" aria-labelledby="dead-code-heading">
      <h2 id="dead-code-heading">WSG Remove Unnecessary Code Overview</h2>
      <p class="muted">Uses Lighthouse signals to estimate unused CSS/JS, duplicated JS, and unnecessary HTML complexity.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#remove-unnecessary-code">Remove unnecessary code</a></li>
        <li><strong>Average dead-code score:</strong> ${formatPercentScore(report.summary.averageDeadCodeScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyDeadCodeCount}</li>
      </ul>
    </section>

    <section class="card" aria-labelledby="non-critical-heading">
      <h2 id="non-critical-heading">WSG Defer Non-Critical Resources Overview</h2>
      <p class="muted">Identifies assets likely not required for first paint and recommends deferring them.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="https://www.w3.org/TR/web-sustainability-guidelines/#defer-the-loading-of-non-critical-resources">Defer the loading of non-critical resources</a></li>
        <li><strong>Average non-critical score:</strong> ${formatPercentScore(report.summary.averageNonCriticalResourcesScore)} (0 low, 100 high)</li>
        <li><strong>High urgency pages:</strong> ${report.summary.highUrgencyNonCriticalResourcesCount}</li>
      </ul>
    </section>

    <section class="card" aria-labelledby="budget-heading">
      <h2 id="budget-heading">WSG 3.1 Performance and Energy Budget</h2>
      <p class="muted">Benchmark comparison using Sustainable Web Design Digital Carbon Ratings.</p>
      <ul>
        <li><strong>WSG criterion:</strong> <a href="${escapeAttr(report.budgetGuidance.wsgReference.url)}">${escapeHtml(report.budgetGuidance.wsgReference.id)} ${escapeHtml(report.budgetGuidance.wsgReference.title)}</a></li>
        <li><strong>Benchmark source:</strong> <a href="${escapeAttr(report.budgetGuidance.benchmarkReference.url)}">Sustainable Web Design ratings</a></li>
        <li><strong>Current average transfer/page:</strong> ${formatBytes(report.summary.averageTransferBytes)} (rating ${escapeHtml(report.budgetGuidance.current.transferRating || "n/a")})</li>
        <li><strong>Current average CO2/page:</strong> ${formatGrams(report.summary.averageCo2GramsPerPage)} (rating ${escapeHtml(report.budgetGuidance.current.co2Rating || "n/a")})</li>
        <li><strong>Recommended budget target:</strong> Rating ${escapeHtml(report.budgetGuidance.recommendedBudget.targetRating)} = max ${formatBytes(report.budgetGuidance.recommendedBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.recommendedBudget.maxCo2GramsPerPage)} per page</li>
      </ul>
      <p><strong>Reduction needed:</strong>
      Transfer ${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.needsReduction ? `${formatBytes(report.budgetGuidance.reductionsNeeded.transferBytesPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.transferBytesPerPage.percent.toFixed(1)}%)` : "none"},
      CO2 ${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.needsReduction ? `${formatGrams(report.budgetGuidance.reductionsNeeded.co2GramsPerPage.absolute)} (${report.budgetGuidance.reductionsNeeded.co2GramsPerPage.percent.toFixed(1)}%)` : "none"}.
      </p>
      <p><strong>Stretch target:</strong> Rating ${escapeHtml(report.budgetGuidance.stretchBudget.targetRating)} = ${formatBytes(report.budgetGuidance.stretchBudget.maxTransferBytesPerPage)} and ${formatGrams(report.budgetGuidance.stretchBudget.maxCo2GramsPerPage)} per page.</p>
    </section>

    <section class="card" aria-labelledby="overview-heading">
      <h2 id="cross-page-heading">Cross-Page Patterns</h2>
      <p class="muted">Recurring component and bundle opportunities that can often be fixed once in templates, CMS blocks, or the design system.</p>
      <ul>
        ${report.crossPagePatterns.designSystemGuidance.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}
      </ul>
      ${renderCrossPagePatternBlocks(report.crossPagePatterns)}
    </section>

    <section class="card" aria-labelledby="site-wide-guidance-heading">
      <h2 id="site-wide-guidance-heading">Site-Wide Guidance</h2>
      <p class="muted">Shared recommendations grouped by site origin so platform-level fixes can be prioritized before page-by-page cleanup.</p>
      ${renderSiteWideGuidance(report.siteGuidance)}
    </section>

    <section class="card" aria-labelledby="page-specific-guidance-heading">
      <h2 id="page-specific-guidance-heading">Page-Specific Guidance</h2>
      <p class="muted">Page-level exceptions and targeted follow-ups after site-wide recommendations are addressed.</p>
      ${renderPageSpecificGuidance(report.siteGuidance)}
    </section>

    <section class="card" aria-labelledby="overview-heading">
      <h2 id="overview-heading">Overview Table</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">URL</th>
            <th scope="col">Performance</th>
            <th scope="col">Transfer</th>
            <th scope="col">CO2</th>
            <th scope="col">Findings</th>
            <th scope="col">Top Actions</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>

    <section class="card" aria-labelledby="green-details-heading">
      <h2 id="green-details-heading">Per-Page Green Hosting Details</h2>
      <p class="muted">Checks the submitted page host plus any external script and stylesheet origins discovered by Lighthouse.</p>
      ${renderGreenWebDetails(report.results)}
    </section>

    <section class="card" aria-labelledby="snippets-heading">
      <h2 id="snippets-heading">Copy/Paste GitHub Issue Snippets</h2>
      <p class="muted">Use these blocks to open targeted implementation issues in your queue.</p>
      ${snippets || "<p>No issue snippets generated.</p>"}
    </section>

    <section class="card" aria-labelledby="md-heading">
      <h2 id="md-heading">Markdown Version</h2>
      <details>
        <summary>Show report markdown</summary>
        <pre>${escapeHtml(markdownText)}</pre>
      </details>
    </section>
  </main>
  <script>
    for (const button of document.querySelectorAll('.copy-btn')) {
      button.addEventListener('click', async () => {
        const target = document.getElementById(button.dataset.target);
        if (!target) return;
        await navigator.clipboard.writeText(target.value);
        const old = button.textContent;
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = old; }, 1200);
      });
    }
  </script>
</body>
</html>`;
}

export function writeReports(report, outputDir) {
  mkdirSync(outputDir, { recursive: true });
  const jsonPath = join(outputDir, "report.json");
  const mdPath = join(outputDir, "report.md");
  const htmlPath = join(outputDir, "report.html");

  const markdown = renderMarkdown(report);
  const html = renderHtml(report, markdown);

  writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n", "utf8");
  writeFileSync(mdPath, markdown + "\n", "utf8");
  writeFileSync(htmlPath, html, "utf8");

  return { jsonPath, mdPath, htmlPath };
}

function formatScore(value) {
  if (typeof value !== "number") return "n/a";
  return `${Math.round(value * 100)}/100`;
}

function formatBytes(bytes) {
  if (typeof bytes !== "number" || Number.isNaN(bytes)) return "n/a";
  const units = ["B", "KB", "MB", "GB"];
  let current = bytes;
  let idx = 0;
  while (current >= 1024 && idx < units.length - 1) {
    current /= 1024;
    idx += 1;
  }
  return `${current.toFixed(2)} ${units[idx]}`;
}

function formatGrams(grams) {
  if (typeof grams !== "number" || Number.isNaN(grams)) return "n/a";
  return `${grams.toFixed(4)} g`;
}

function formatPercentScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return "n/a";
  return `${Math.round(score)}/100`;
}

function formatGreenStatus(status) {
  if (status === "green") return "GREEN";
  if (status === "not-green") return "NOT GREEN";
  return "UNKNOWN";
}

function renderCrossPagePatternBlocks(crossPagePatterns) {
  const sections = [];

  if (crossPagePatterns.heavyAssetPatterns.length > 0) {
    sections.push(`
      <h3>Recurring Heavy Assets</h3>
      <ul>
        ${crossPagePatterns.heavyAssetPatterns.slice(0, 5).map((pattern) => `<li>${escapeHtml(pattern.label)} appears on ${pattern.pageCount} pages (${escapeHtml(formatBytes(pattern.totalTransferBytes))} total)</li>`).join("")}
      </ul>
    `);
  }

  if (crossPagePatterns.recurringTargets.length > 0) {
    sections.push(`
      <h3>Recurring Modularization Targets</h3>
      <ul>
        ${crossPagePatterns.recurringTargets.slice(0, 5).map((target) => `<li>${escapeHtml(target.title)} affects ${target.pageCount} pages${target.totalEstimatedSavingsBytes > 0 ? ` (est. ${escapeHtml(formatBytes(target.totalEstimatedSavingsBytes))} aggregate savings)` : ""}</li>`).join("")}
      </ul>
    `);
  }

  if (crossPagePatterns.recurringOrigins.length > 0) {
    sections.push(`
      <h3>Recurring Heavy Origins</h3>
      <ul>
        ${crossPagePatterns.recurringOrigins.slice(0, 5).map((origin) => `<li>${escapeHtml(origin.domain)} is a recurring heavy source on ${origin.pageCount} pages (${escapeHtml(formatBytes(origin.totalTransferBytes))} total)</li>`).join("")}
      </ul>
    `);
  }

  return sections.join("") || "<p>No recurring cross-page patterns detected.</p>";
}

function renderGreenWebDetails(results) {
  const sections = results.map((entry) => {
    if (entry.status !== "ok") {
      return `<section><h3>${escapeHtml(entry.url)}</h3><p>Status unavailable because the page scan failed.</p></section>`;
    }

    const page = entry.greenWeb?.page;
    const externalAssets = entry.greenWeb?.externalAssets || [];

    return `<section>
      <h3>${escapeHtml(entry.url)}</h3>
      <p><strong>Page host:</strong> ${page ? `${escapeHtml(page.hostname)}: ${escapeHtml(formatGreenStatus(page.status))}${page.hostedBy ? ` (${escapeHtml(page.hostedBy)})` : ""}` : "Unknown"}</p>
      ${externalAssets.length > 0 ? `
        <ul>
          ${externalAssets.slice(0, 8).map((asset) => `<li><strong>${escapeHtml(asset.resourceType.toUpperCase())}</strong> ${escapeHtml(asset.hostname)}: ${escapeHtml(formatGreenStatus(asset.greenCheck?.status))}${asset.greenCheck?.hostedBy ? ` (${escapeHtml(asset.greenCheck.hostedBy)})` : ""}, ${asset.requestCount} request(s), ${escapeHtml(formatBytes(asset.transferBytes))}</li>`).join("")}
        </ul>
      ` : "<p>No external stylesheet or script origins were detected.</p>"}
    </section>`;
  });

  return sections.join("") || "<p>No green hosting data available.</p>";
}

function renderThirdPartyProviders(providers) {
  if (providers.length === 0) {
    return "<p>No third-party JavaScript providers were detected in this scan.</p>";
  }

  return `
    <h3>Top Third-Party Script Providers</h3>
    <ul>
      ${providers.slice(0, 10).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>: ${escapeHtml(formatGreenStatus(provider.status))}${provider.hostedBy ? ` (${escapeHtml(provider.hostedBy)})` : ""}; ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}</li>`).join("")}
    </ul>
  `;
}

function renderFormValidationSummary(summary) {
  const recurring = summary?.recurringElements || [];
  const recurringSearch = summary?.recurringSearchElements || [];

  if (recurring.length === 0) {
    return "<p>No recurring form control signatures were detected across pages.</p>";
  }

  const sections = [];
  sections.push(`
    <h3>Recurring Form Elements</h3>
    <p class="muted">These signatures were assessed once and reused across pages to avoid duplicate scanning.</p>
    <ul>
      ${recurring.slice(0, 8).map((item) => `<li><strong>${escapeHtml(item.controlType)}</strong>${item.fieldName ? ` (${escapeHtml(item.fieldName)})` : ""}: ${item.pageCount} page(s), risk ${escapeHtml(formatPercentScore(item.score))}, urgency ${escapeHtml(item.urgency.toUpperCase())}</li>`).join("")}
    </ul>
  `);

  if (recurringSearch.length > 0) {
    sections.push(`
      <h3>Recurring Search Controls</h3>
      <p class="muted">Search inputs often appear site-wide. These were deduplicated and not re-scanned on every page.</p>
      <ul>
        ${recurringSearch.slice(0, 6).map((item) => `<li><strong>${escapeHtml(item.controlType)}</strong>${item.fieldName ? ` (${escapeHtml(item.fieldName)})` : ""}: ${item.pageCount} page(s), urgency ${escapeHtml(item.urgency.toUpperCase())}</li>`).join("")}
      </ul>
    `);
  }

  return sections.join("");
}

function renderMetadataSummary(summary) {
  const missing = summary?.missing || {};
  return `
    <h3>Cross-Page Metadata Gaps</h3>
    <ul>
      <li><strong>Missing html lang:</strong> ${missing.missingLang || 0}</li>
      <li><strong>Missing meta description:</strong> ${missing.missingDescription || 0}</li>
      <li><strong>Missing canonical URL:</strong> ${missing.missingCanonical || 0}</li>
      <li><strong>Missing Open Graph core tags:</strong> ${missing.missingOpenGraphCore || 0}</li>
      <li><strong>Missing twitter:card:</strong> ${missing.missingTwitterCard || 0}</li>
      <li><strong>Invalid or missing JSON-LD:</strong> ${missing.invalidStructuredData || 0}</li>
    </ul>
  `;
}

function renderLayoutSupportSummary(summary) {
  return `
    <h3>Cross-Page Layout Adaptation Signals</h3>
    <ul>
      <li><strong>Pages with mobile overflow:</strong> ${summary?.mobileOverflowPages || 0}</li>
      <li><strong>Pages with tablet overflow:</strong> ${summary?.tabletOverflowPages || 0}</li>
      <li><strong>Total small tap targets on mobile:</strong> ${summary?.totalMobileSmallTapTargets || 0}</li>
      <li><strong>Total small tap targets on tablet:</strong> ${summary?.totalTabletSmallTapTargets || 0}</li>
      <li><strong>Total fixed-width offenders:</strong> ${summary?.totalFixedWidthOffenders || 0}</li>
    </ul>
  `;
}

function renderSecurityLightSummary(summary) {
  return `
    <h3>Cross-Page Security Signals</h3>
    <ul>
      <li><strong>Pages missing Content-Security-Policy:</strong> ${summary?.pagesWithoutCsp || 0}</li>
      <li><strong>HTTPS pages missing Strict-Transport-Security:</strong> ${summary?.pagesWithoutHsts || 0}</li>
      <li><strong>Pages with vulnerable JS library findings:</strong> ${summary?.pagesWithVulnerableLibraries || 0}</li>
      <li><strong>External scripts missing SRI (total):</strong> ${summary?.totalExternalScriptsWithoutIntegrity || 0}</li>
    </ul>
  `;
}

function renderDependencyMaintenanceSummary(summary) {
  const recurring = summary?.topRecurringLibraries || [];
  const recurringHtml = recurring.length > 0
    ? `
      <h3>Recurring Vulnerable Dependencies</h3>
      <ul>
        ${recurring.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.library)}</strong>${item.version ? `@${escapeHtml(item.version)}` : ""}: ${item.pageCount} page(s)${item.severity ? `, severity ${escapeHtml(String(item.severity).toUpperCase())}` : ""}${typeof item.vulnerabilities === "number" ? `, ${item.vulnerabilities} vulnerability entries` : ""}</li>`).join("")}
      </ul>
    `
    : "<p>No recurring vulnerable dependency signatures were detected.</p>";

  return `
    <h3>Cross-Page Dependency Signals</h3>
    <ul>
      <li><strong>Pages with vulnerable dependencies:</strong> ${summary?.pagesWithVulnerableDependencies || 0}</li>
      <li><strong>Total vulnerable dependency findings:</strong> ${summary?.totalVulnerableDependencies || 0}</li>
    </ul>
    ${recurringHtml}
  `;
}

function renderExpectedFilesSummary(summary) {
  const missing = summary?.missing || {};
  return `
    <h3>Cross-Page Expected File Gaps</h3>
    <ul>
      <li><strong>robots.txt missing:</strong> ${missing.robotsTxt || 0}</li>
      <li><strong>sitemap.xml missing:</strong> ${missing.sitemapXml || 0}</li>
      <li><strong>.well-known/security.txt missing:</strong> ${missing.securityTxt || 0}</li>
      <li><strong>manifest.webmanifest missing:</strong> ${missing.webManifest || 0}</li>
      <li><strong>favicon.ico missing:</strong> ${missing.favicon || 0}</li>
    </ul>
  `;
}

function renderOptimizationSummary(summary) {
  const recurring = summary?.recurringOpportunities || [];
  return `
    <h3>Cross-Page Optimization Signals</h3>
    <ul>
      <li><strong>Aggregate potential byte savings:</strong> ${escapeHtml(formatBytes(summary?.totalEstimatedSavingsBytes || 0))}</li>
      <li><strong>Aggregate render-blocking reduction potential:</strong> ${Math.round(summary?.totalEstimatedBlockingMs || 0)} ms</li>
    </ul>
    ${recurring.length > 0 ? `
      <h3>Recurring Optimization Opportunities</h3>
      <ul>
        ${recurring.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.title)}</strong>: ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${escapeHtml(formatBytes(item.totalEstimatedSavingsBytes))} total savings` : ""}${item.totalEstimatedBlockingMs > 0 ? `, est. ${Math.round(item.totalEstimatedBlockingMs)} ms unblock` : ""}</li>`).join("")}
      </ul>
    ` : "<p>No recurring optimization opportunities were detected.</p>"}
  `;
}

function renderCompressionSummary(summary) {
  const recurring = summary?.recurringOpportunities || [];
  return `
    <h3>Cross-Page Compression Signals</h3>
    <ul>
      <li><strong>Pages missing effective text compression:</strong> ${summary?.pagesMissingTextCompression || 0}</li>
      <li><strong>Aggregate potential compression savings:</strong> ${escapeHtml(formatBytes(summary?.totalEstimatedSavingsBytes || 0))}</li>
    </ul>
    ${recurring.length > 0 ? `
      <h3>Recurring Compression Opportunities</h3>
      <ul>
        ${recurring.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.title)}</strong>: ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${escapeHtml(formatBytes(item.totalEstimatedSavingsBytes))} total savings` : ""}, urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
      </ul>
    ` : "<p>No recurring compression opportunities were detected.</p>"}
  `;
}

function renderOfflineSupportSummary(summary) {
  const recurring = summary?.recurringOpportunities || [];
  return `
    <h3>Cross-Page Offline and Caching Signals</h3>
    <ul>
      <li><strong>Pages without service worker support:</strong> ${summary?.pagesWithoutServiceWorker || 0}</li>
      <li><strong>Pages without offline support:</strong> ${summary?.pagesWithoutOfflineSupport || 0}</li>
      <li><strong>Pages with weak cache TTL signals:</strong> ${summary?.pagesWithWeakCacheTtl || 0}</li>
    </ul>
    ${recurring.length > 0 ? `
      <h3>Recurring Offline/Caching Opportunities</h3>
      <ul>
        ${recurring.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.title)}</strong>: ${item.pageCount} page(s), urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
      </ul>
    ` : "<p>No recurring offline or caching opportunities were detected.</p>"}
  `;
}

function renderLanguageVersionSummary(summary) {
  const outdated = summary?.topOutdatedSignals || [];
  return `
    <h3>Cross-Page Runtime/Language Version Signals</h3>
    <ul>
      <li><strong>Pages exposing runtime/language version signals:</strong> ${summary?.pagesWithVersionDisclosure || 0}</li>
      <li><strong>Pages with outdated runtime/language signals:</strong> ${summary?.pagesWithOutdatedRuntimeSignals || 0}</li>
    </ul>
    ${outdated.length > 0 ? `
      <h3>Recurring Outdated Signals</h3>
      <ul>
        ${outdated.slice(0, 10).map((item) => `<li><strong>${escapeHtml(item.family)}</strong>${item.version ? ` ${escapeHtml(item.version)}` : ""}: ${item.pageCount} page(s)${item.recommendedBaseline ? `, baseline ${escapeHtml(item.recommendedBaseline)}+` : ""}, urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
      </ul>
    ` : "<p>No recurring outdated runtime/language signatures were detected from exposed headers.</p>"}
  `;
}

function renderExternalProviderRiskSummary(summary) {
  const recurringNonGreen = summary?.recurringNonGreenProviders || [];
  const recurringUnknown = summary?.recurringUnknownProviders || [];
  const nonGreenProviders = summary?.nonGreenProviders || [];

  if (recurringNonGreen.length === 0 && recurringUnknown.length === 0 && nonGreenProviders.length === 0) {
    return "<p>No non-green or unknown recurring external providers were detected.</p>";
  }

  const blocks = [];

  if (recurringNonGreen.length > 0) {
    blocks.push(`
      <h3>Recurring Non-Green Providers</h3>
      <ul>
        ${recurringNonGreen.slice(0, 10).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>${provider.hostedBy ? ` (${escapeHtml(provider.hostedBy)})` : ""}: ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}; types ${escapeHtml(provider.resourceTypes.join(", "))}</li>`).join("")}
      </ul>
    `);
  } else if (nonGreenProviders.length > 0) {
    blocks.push("<p>Non-green providers were detected, but none recur across multiple pages in this scan.</p>");
  }

  if (recurringUnknown.length > 0) {
    blocks.push(`
      <h3>Recurring Unknown-Status Providers</h3>
      <ul>
        ${recurringUnknown.slice(0, 8).map((provider) => `<li><strong>${escapeHtml(provider.hostname)}</strong>: ${provider.pageCount} page(s), ${provider.requestCount} request(s), ${escapeHtml(formatBytes(provider.transferBytes))}; types ${escapeHtml(provider.resourceTypes.join(", "))}</li>`).join("")}
      </ul>
    `);
  }

  return blocks.join("");
}

function renderSiteWideGuidance(siteGuidance) {
  if (!siteGuidance?.sites?.length) {
    return "<p>No site-level grouping could be determined from scan results.</p>";
  }

  const intro = siteGuidance.singleSiteScan
    ? "<p>This scan appears to target a single site. Shared issues are usually best fixed once at template/platform level.</p>"
    : "<p>This scan covers multiple origins. Shared guidance is grouped per site.</p>";

  const blocks = siteGuidance.sites.map((site) => {
    const shared = site.sharedRecommendations || [];
    const compression = site.recurringCompression || [];
    const deps = site.recurringDependencies || [];
    const runtimes = site.recurringRuntimeSignals || [];
    const offline = site.recurringOfflineOpportunities || [];
    const recurringOptimization = site.recurringOptimization || [];
    return `
      <section>
        <h3>${escapeHtml(site.origin)}</h3>
        <p><strong>Sampled pages:</strong> ${site.pageCount}</p>
        ${shared.length > 0 ? `
          <ul>
            ${shared.slice(0, 8).map((item) => `<li><strong>[${escapeHtml(String(item.urgency || "low").toUpperCase())}] ${escapeHtml(item.title)}</strong><br>${escapeHtml(item.detail)}</li>`).join("")}
          </ul>
        ` : "<p>No clear site-wide issues detected from sampled pages.</p>"}
        ${deps.length > 0 ? `
          <p><strong>Recurring vulnerable dependencies:</strong></p>
          <ul>
            ${deps.slice(0, 6).map((dep) => `<li>${escapeHtml(dep.library)}${dep.version ? `@${escapeHtml(dep.version)}` : ""}: ${dep.pageCount} page(s)${dep.severity ? `, severity ${escapeHtml(String(dep.severity).toUpperCase())}` : ""}</li>`).join("")}
          </ul>
        ` : ""}
        ${compression.length > 0 ? `
          <p><strong>Recurring compression opportunities:</strong></p>
          <ul>
            ${compression.slice(0, 6).map((item) => `<li>${escapeHtml(item.title)}: ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${escapeHtml(formatBytes(item.totalEstimatedSavingsBytes))} total savings` : ""}, urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
          </ul>
        ` : ""}
        ${runtimes.length > 0 ? `
          <p><strong>Recurring runtime/language version signals:</strong></p>
          <ul>
            ${runtimes.slice(0, 6).map((item) => `<li>${escapeHtml(item.family)}${item.version ? ` ${escapeHtml(item.version)}` : ""}: ${item.pageCount} page(s)${item.recommendedBaseline ? `, baseline ${escapeHtml(item.recommendedBaseline)}+` : ""}, urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
          </ul>
        ` : ""}
        ${offline.length > 0 ? `
          <p><strong>Recurring offline/caching opportunities:</strong></p>
          <ul>
            ${offline.slice(0, 6).map((item) => `<li>${escapeHtml(item.title)}: ${item.pageCount} page(s), urgency ${escapeHtml(String(item.urgency || "medium").toUpperCase())}</li>`).join("")}
          </ul>
        ` : ""}
        ${recurringOptimization.length > 0 ? `
          <p><strong>Recurring optimization opportunities:</strong></p>
          <ul>
            ${recurringOptimization.slice(0, 6).map((item) => `<li>${escapeHtml(item.title)}: ${item.pageCount} page(s)${item.totalEstimatedSavingsBytes > 0 ? `, est. ${escapeHtml(formatBytes(item.totalEstimatedSavingsBytes))} total savings` : ""}${item.totalEstimatedBlockingMs > 0 ? `, est. ${Math.round(item.totalEstimatedBlockingMs)} ms unblock` : ""}</li>`).join("")}
          </ul>
        ` : ""}
      </section>
    `;
  }).join("");

  return `${intro}${blocks}`;
}

function renderPageSpecificGuidance(siteGuidance) {
  if (!siteGuidance?.sites?.length) {
    return "<p>No page-level guidance groups are available.</p>";
  }

  const blocks = siteGuidance.sites.map((site) => {
    const pages = site.pageSpecific || [];
    if (pages.length === 0) {
      return `
        <section>
          <h3>${escapeHtml(site.origin)}</h3>
          <p>No page-specific exceptions were identified for this site sample.</p>
        </section>
      `;
    }

    return `
      <section>
        <h3>${escapeHtml(site.origin)}</h3>
        <ul>
          ${pages.slice(0, 6).map((page) => `<li><strong>${escapeHtml(page.url)}</strong><br>Urgency: ${escapeHtml(String(page.urgency || "low").toUpperCase())}. Scores: compression ${escapeHtml(formatPercentScore(page.compressionScore))}, optimization ${escapeHtml(formatPercentScore(page.optimizationScore))}, offline ${escapeHtml(formatPercentScore(page.offlineScore))}, dependency ${escapeHtml(formatPercentScore(page.dependencyScore))}, language ${escapeHtml(formatPercentScore(page.languageScore))}, security ${escapeHtml(formatPercentScore(page.securityScore))}, expected files ${escapeHtml(formatPercentScore(page.expectedFilesScore))}.${page.topRecommendations?.length ? `<br>Top actions: ${page.topRecommendations.slice(0, 3).map((item) => escapeHtml(item.title)).join("; ")}` : ""}</li>`).join("")}
        </ul>
      </section>
    `;
  }).join("");

  return blocks;
}

function kbToBytes(kb) {
  return kb * 1024;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
