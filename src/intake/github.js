export function parseGitHubIssueUrl(issueUrl) {
  let parsed;
  try {
    parsed = new URL(issueUrl);
  } catch {
    throw new Error("Invalid GitHub issue URL.");
  }

  if (parsed.hostname !== "github.com") {
    throw new Error("Issue URL must be a github.com URL.");
  }

  const parts = parsed.pathname.split("/").filter(Boolean);
  if (parts.length < 4 || parts[2] !== "issues") {
    throw new Error("Issue URL must match /owner/repo/issues/<number>.");
  }

  const owner = parts[0];
  const repo = parts[1];
  const issueNumber = Number(parts[3]);

  if (!Number.isInteger(issueNumber) || issueNumber <= 0) {
    throw new Error("Issue number in URL is not valid.");
  }

  return { owner, repo, issueNumber };
}

export async function fetchIssueBodyFromGitHubUrl(issueUrl) {
  const { owner, repo, issueNumber } = parseGitHubIssueUrl(issueUrl);
  const endpoint = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

  const response = await fetch(endpoint, {
    headers: {
      "accept": "application/vnd.github+json",
      "user-agent": "open-susty-scans",
      ...(token ? { authorization: `Bearer ${token}` } : {})
    }
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch issue ${owner}/${repo}#${issueNumber}: ${response.status} ${response.statusText}`);
  }

  const issue = await response.json();
  return {
    owner,
    repo,
    issueNumber,
    title: typeof issue.title === "string" ? issue.title : null,
    body: typeof issue.body === "string" ? issue.body : ""
  };
}
