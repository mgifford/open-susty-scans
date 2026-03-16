const WSG_JSON_URL = "https://w3c.github.io/sustainableweb-wsg/guidelines.json";

export async function fetchWsgGuidelines() {
  const response = await fetch(WSG_JSON_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch WSG JSON: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export function indexGuidelinesByUrl(wsgData) {
  const index = new Map();
  const categories = wsgData?.category || [];

  for (const category of categories) {
    const guidelines = category.guidelines || [];
    for (const guideline of guidelines) {
      if (!guideline.url) {
        continue;
      }
      index.set(guideline.url, {
        categoryId: category.id,
        categoryName: category.name,
        id: guideline.id,
        title: guideline.guideline,
        url: guideline.url,
        subheading: guideline.subheading || "",
      });
    }
  }

  return index;
}
