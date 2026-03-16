const GREEN_WEB_API_BASE = "https://api.thegreenwebfoundation.org/api/v3/greencheck";

export async function checkGreenWebHostnames(hostnames) {
  const unique = dedupeHostnames(hostnames);
  const results = await Promise.all(unique.map((hostname) => lookupHostname(hostname)));
  return new Map(results.map((result) => [result.hostname, result]));
}

async function lookupHostname(hostname) {
  const safeHostname = normalizeHostname(hostname);
  if (!safeHostname) {
    return buildUnknownResult(hostname, "Invalid hostname");
  }

  try {
    const response = await fetch(`${GREEN_WEB_API_BASE}/${encodeURIComponent(safeHostname)}`, {
      signal: AbortSignal.timeout(10000),
      headers: {
        accept: "application/json"
      }
    });

    if (!response.ok) {
      return buildUnknownResult(safeHostname, `API returned ${response.status}`);
    }

    const data = await response.json();
    return {
      hostname: safeHostname,
      checked: true,
      status: typeof data.green === "boolean" ? (data.green ? "green" : "not-green") : "unknown",
      green: typeof data.green === "boolean" ? data.green : null,
      hostedBy: data.hosted_by || null,
      hostedByWebsite: data.hosted_by_website || null,
      listedProvider: typeof data.listed_provider === "boolean" ? data.listed_provider : null,
      partner: data.partner || null,
      modified: data.modified || null,
      supportingDocuments: Array.isArray(data.supporting_documents) ? data.supporting_documents : [],
      source: `${GREEN_WEB_API_BASE}/${encodeURIComponent(safeHostname)}`,
      error: null
    };
  } catch (error) {
    return buildUnknownResult(safeHostname, error instanceof Error ? error.message : String(error));
  }
}

function dedupeHostnames(hostnames) {
  return Array.from(new Set((hostnames || []).map(normalizeHostname).filter(Boolean)));
}

function normalizeHostname(hostname) {
  return String(hostname || "").trim().toLowerCase().replace(/\.+$/, "") || null;
}

function buildUnknownResult(hostname, error) {
  return {
    hostname: normalizeHostname(hostname),
    checked: false,
    status: "unknown",
    green: null,
    hostedBy: null,
    hostedByWebsite: null,
    listedProvider: null,
    partner: null,
    modified: null,
    supportingDocuments: [],
    source: hostname ? `${GREEN_WEB_API_BASE}/${encodeURIComponent(hostname)}` : GREEN_WEB_API_BASE,
    error
  };
}