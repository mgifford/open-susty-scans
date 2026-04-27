import yaml from "js-yaml";

export function buildImpactFrameworkManifest({
  url,
  timestamp = new Date().toISOString(),
  duration = 1,
  scrollToBottom = false,
  firstVisitPercentage = 0.9,
  returnVisitPercentage = 0.1
}) {
  return {
    name: "open-susty-scans-impact-framework",
    description: "Impact Framework manifest for reproducible webpage carbon estimation in open-susty-scans.",
    tags: {
      kind: "webpage",
      complexity: "low",
      category: "sustainability-scan"
    },
    initialize: {
      outputs: ["yaml"],
      plugins: {
        "green-hosting": {
          method: "GreenHosting",
          path: "@tngtech/if-webpage-plugins"
        },
        "webpage-impact": {
          method: "WebpageImpact",
          path: "@tngtech/if-webpage-plugins",
          config: {
            url,
            scrollToBottom
          }
        },
        co2js: {
          method: "Co2js",
          path: "@tngtech/if-webpage-plugins",
          config: {
            type: "swd",
            version: 4
          }
        }
      }
    },
    tree: {
      children: {
        webpage: {
          pipeline: {
            observe: ["webpage-impact", "green-hosting"],
            compute: ["co2js"]
          },
          inputs: [
            {
              timestamp,
              duration,
              options: {
                firstVisitPercentage,
                returnVisitPercentage
              }
            }
          ]
        }
      }
    }
  };
}

export function renderImpactFrameworkManifest(manifest) {
  return yaml.dump(manifest, {
    noRefs: true,
    lineWidth: 120,
    sortKeys: false
  });
}
