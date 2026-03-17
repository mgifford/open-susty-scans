/**
 * URL submission form handler for open-susty-scans
 * Parses URLs, validates them, and creates GitHub issues for scanning
 */

// Regex to match any case variation of "scan:" prefix with zero or more spaces
const SCAN_PREFIX_REGEX = /^scan:\s*/i;

// Maximum GitHub URL length to avoid "URL too long" errors
const MAX_GITHUB_URL_LENGTH = 8000;

// Parse URLs from text input (supports line-by-line and CSV formats)
export function parseUrls(rawText) {
  return rawText
    .split(/[\n,]/g)
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => value.startsWith("http://") || value.startsWith("https://"));
}

// Validate URL syntax
export function isValidUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// Check if URL is localhost
function isLocalhost(url) {
  const hostname = url.hostname.toLowerCase();
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

// Check if IPv4 address is in private range
function isPrivateIPv4(hostname) {
  const ipv4Pattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = hostname.match(ipv4Pattern);
  if (!match) return false;
  const octets = match.slice(1).map(Number);
  if (octets[0] === 10) return true;
  if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) return true;
  if (octets[0] === 192 && octets[1] === 168) return true;
  if (octets[0] === 169 && octets[1] === 254) return true;
  return false;
}

// Check if IPv6 address is in private range
function isPrivateIPv6(hostname) {
  const bare = hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (bare.startsWith("fe80:")) return true;
  if (bare.startsWith("fc") || bare.startsWith("fd")) return true;
  if (bare === "::1") return true;
  return false;
}

// Validate that URL is publicly accessible
export function validateUrl(urlString) {
  if (!isValidUrl(urlString)) {
    return { valid: false, reason: "Invalid URL format" };
  }
  const url = new URL(urlString);
  if (isLocalhost(url)) {
    return { valid: false, reason: "Localhost URLs are not allowed" };
  }
  if (isPrivateIPv4(url.hostname)) {
    return { valid: false, reason: "Private IP addresses are not allowed" };
  }
  if (isPrivateIPv6(url.hostname)) {
    return { valid: false, reason: "Private IPv6 addresses are not allowed" };
  }
  return { valid: true, reason: "" };
}

// Validate all URLs and separate into accepted/rejected
export function validateUrls(urls) {
  const accepted = [];
  const rejected = [];
  for (const url of urls) {
    const validation = validateUrl(url);
    if (validation.valid) {
      accepted.push(url);
    } else {
      rejected.push({ url, reason: validation.reason });
    }
  }
  return { accepted, rejected };
}

// Format issue body for GitHub issue creation
export function formatIssueBody(scanTitle, urls) {
  return `# URLs\n\n${urls.join("\n")}\n`;
}

// Extract GitHub owner and repo from the current GitHub Pages URL
function getGitHubRepoInfo() {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  const pagesMatch = hostname.match(/^(.+)\.github\.io$/);
  if (!pagesMatch) return null;
  const owner = pagesMatch[1];
  const pathMatch = pathname.match(/^\/([^/]+)/);
  const repo = pathMatch ? pathMatch[1] : "open-susty-scans";
  return { owner, repo };
}

// Apply GitHub URL length limit to pre-validated accepted URLs
export function applyGitHubUrlLimit(accepted, owner, repo, scanTitle) {
  const issueTitle = `SCAN: ${scanTitle.replace(SCAN_PREFIX_REGEX, "")}`;
  const encodedTitle = encodeURIComponent(issueTitle);
  const baseUrl = `https://github.com/${owner}/${repo}/issues/new?title=${encodedTitle}&body=`;
  const bodyPrefix = encodeURIComponent("# URLs\n\n");
  let currentLength = baseUrl.length + bodyPrefix.length;
  const fitting = [];
  const tooLong = [];
  for (const url of accepted) {
    const encodedUrl = encodeURIComponent(`${url}\n`);
    if (currentLength + encodedUrl.length <= MAX_GITHUB_URL_LENGTH) {
      fitting.push(url);
      currentLength += encodedUrl.length;
    } else {
      tooLong.push({ url, reason: "URL too long for GitHub issue creation" });
    }
  }
  return { fitting, tooLong };
}

// Create GitHub issue URL with pre-filled data
export async function createGitHubIssue(scanTitle, urls) {
  const repoInfo = getGitHubRepoInfo();
  if (!repoInfo) {
    throw new Error("Could not determine GitHub repository from URL");
  }
  const { owner, repo } = repoInfo;
  const issueTitle = `SCAN: ${scanTitle.replace(SCAN_PREFIX_REGEX, "")}`;
  const issueBody = formatIssueBody(scanTitle, urls);
  const encodedTitle = encodeURIComponent(issueTitle);
  const encodedBody = encodeURIComponent(issueBody);
  return `https://github.com/${owner}/${repo}/issues/new?title=${encodedTitle}&body=${encodedBody}`;
}

// Initialize form
function initForm() {
  const form = document.getElementById("scan-form");
  const urlsTextarea = document.getElementById("urls");
  const previewDiv = document.getElementById("preview");
  const urlCountDiv = document.getElementById("url-count");
  const urlListDiv = document.getElementById("url-list");
  const submitButton = document.getElementById("submit-button");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error-message");
  const successDiv = document.getElementById("success-message");

  urlsTextarea.addEventListener("input", () => {
    const rawText = urlsTextarea.value;
    const urls = parseUrls(rawText);

    if (urls.length === 0) {
      previewDiv.classList.remove("visible");
      submitButton.disabled = false;
      return;
    }

    const { accepted: validUrls, rejected } = validateUrls(urls);
    const scanTitle = document.getElementById("scan-title").value.trim() || "Scan";
    const repoInfo = getGitHubRepoInfo();
    let accepted = validUrls;
    let urlsTooLong = [];
    if (repoInfo) {
      const result = applyGitHubUrlLimit(validUrls, repoInfo.owner, repoInfo.repo, scanTitle);
      accepted = result.fitting;
      urlsTooLong = result.tooLong;
    }

    const total = urls.length;
    previewDiv.classList.add("visible");

    let countText = `Total: ${total} URLs (${accepted.length} accepted`;
    if (urlsTooLong.length > 0 && rejected.length === 0) {
      countText += `, ${urlsTooLong.length} rejected — URL${urlsTooLong.length === 1 ? "" : "s"} too long for GitHub`;
    } else if (urlsTooLong.length > 0) {
      countText += `, ${rejected.length} rejected, ${urlsTooLong.length} URL${urlsTooLong.length === 1 ? "" : "s"} too long for GitHub`;
    } else if (rejected.length > 0) {
      countText += `, ${rejected.length} rejected`;
    }
    countText += ")";
    urlCountDiv.textContent = countText;

    if (accepted.length === 0) {
      urlCountDiv.className = "url-count invalid";
      submitButton.disabled = true;
    } else if (accepted.length > 500) {
      urlCountDiv.className = "url-count invalid";
      urlCountDiv.textContent += " — Maximum 500 URLs allowed";
      submitButton.disabled = true;
    } else {
      urlCountDiv.className = "url-count valid";
      submitButton.disabled = false;
    }

    urlListDiv.innerHTML = "";
    for (const url of accepted) {
      const div = document.createElement("div");
      div.className = "url-item accepted";
      div.textContent = `✓ ${url}`;
      urlListDiv.appendChild(div);
    }
    for (const { url, reason } of rejected) {
      const div = document.createElement("div");
      div.className = "url-item rejected";
      const reasonEl = document.createElement("div");
      reasonEl.className = "reason";
      reasonEl.textContent = reason;
      div.textContent = `✗ ${url}`;
      div.appendChild(reasonEl);
      urlListDiv.appendChild(div);
    }
    for (const { url, reason } of urlsTooLong) {
      const div = document.createElement("div");
      div.className = "url-item rejected";
      const reasonEl = document.createElement("div");
      reasonEl.className = "reason";
      reasonEl.textContent = reason;
      div.textContent = `✗ ${url}`;
      div.appendChild(reasonEl);
      urlListDiv.appendChild(div);
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.classList.remove("visible");
    successDiv.classList.remove("visible");

    const scanTitle = document.getElementById("scan-title").value.trim();
    const rawText = urlsTextarea.value;
    const urls = parseUrls(rawText);
    const { accepted: validUrls } = validateUrls(urls);
    const repoInfo = getGitHubRepoInfo();
    const accepted =
      repoInfo && validUrls.length > 0
        ? applyGitHubUrlLimit(validUrls, repoInfo.owner, repoInfo.repo, scanTitle).fitting
        : validUrls;

    if (accepted.length === 0) {
      errorDiv.textContent = "No valid URLs to scan. Please enter at least one public HTTP/HTTPS URL.";
      errorDiv.classList.add("visible");
      return;
    }

    if (accepted.length > 500) {
      errorDiv.textContent = `Too many URLs. Maximum 500 URLs allowed, but ${accepted.length} were provided.`;
      errorDiv.classList.add("visible");
      return;
    }

    submitButton.disabled = true;
    loadingDiv.classList.add("visible");

    try {
      const githubUrl = await createGitHubIssue(scanTitle, accepted);
      successDiv.innerHTML = `
        <p>Redirecting to GitHub to create your scan request…</p>
        <p>You will be able to review and submit the issue with title: <strong>SCAN: ${scanTitle}</strong></p>
        <p>If you are not redirected, <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">click here</a>.</p>
      `;
      successDiv.classList.add("visible");
      setTimeout(() => {
        window.location.href = githubUrl;
      }, 2000);
    } catch (error) {
      console.error("Error creating scan request:", error);
      errorDiv.textContent = `Error: ${error.message}`;
      errorDiv.classList.add("visible");
      submitButton.disabled = false;
      loadingDiv.classList.remove("visible");
    }
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }
}
