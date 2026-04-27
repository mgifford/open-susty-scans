const WSG_JSON_URL = "https://w3c.github.io/sustainableweb-wsg/guidelines.json";
const FETCH_TIMEOUT_MS = 15000;

export async function fetchWsgGuidelines() {
  const response = await fetch(WSG_JSON_URL, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch WSG JSON: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export function indexGuidelinesByUrl(wsgData) {
  const index = {
    guidelines: new Map(),
    criteria: new Map()
  };
  const categories = wsgData?.category || [];

  for (const category of categories) {
    const guidelines = category.guidelines || [];
    for (const guideline of guidelines) {
      if (!guideline.url) {
        continue;
      }

      const guidelineData = {
        categoryId: category.id,
        categoryName: category.name,
        id: guideline.id,
        title: guideline.guideline,
        url: guideline.url,
        subheading: guideline.subheading || ""
      };

      index.guidelines.set(guideline.url, guidelineData);

      const criteria = guideline.criteria || [];
      for (const criterion of criteria) {
        // We use a combination of title and guideline ID as a key for mapping audits
        const key = `${guideline.id}.${criterion.title}`.toLowerCase();
        index.criteria.set(key, {
          ...criterion,
          guideline: guidelineData,
          benefits: guideline.benefits || [],
          example: guideline.example || null
        });
      }
    }
  }

  return index;
}
