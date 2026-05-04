---
title: "Google Cloud — $300 free-tier credits"
type: personal
tags: [gcp, credits, infrastructure, finance, agent-native-saas]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]]
---

# Google Cloud — $300 free-tier credits

Standard new-account GCP credit: **$300, valid for 90 days** from activation. Useful as a no-cost spike budget for the experiments below — none of them require a long-term GCP commitment, and all of them have an exit path back to Vercel/Railway/Ollama if the GCP angle doesn't pan out.

## What the $300 is for

Not a hosting decision. Vercel + Railway + Ollama remain the production stack ([[overlook-strategy-positioning]], [[hardware-setup]], [[hybrid-llm-workflow]]). The credit is for **time-bounded experiments** that prove or kill specific [[isenberg-future-of-saas-30-step|Isenberg-framework]] hypotheses without spending real money.

Four candidate experiments — each gets its own article:

1. **[[gcp-cloud-scheduler-agent-heartbeat]]** — replace the manual content / agent-run cadence with Cloud Scheduler + Cloud Tasks. Tests the [[autonomous-agent-design-principles|heartbeat pattern]] for [[media-first-distribution]] and [[per-task-pilot-on-retainers|per-task execution]].
2. **[[gcp-vertex-gemini-mechanical-tier]]** — use Gemini Flash via Vertex AI for the bulk mechanical-task tier ([[isenberg-future-of-saas-30-step|Step 13]]: separate judgment from mechanical). Hybrid with the existing Sonnet + Ollama setup.
3. **[[gcp-document-ai-document-analysis-niche]]** — spike the document-analysis niche from [[ai-agency-niches]] by handling OCR + structure extraction on real client PDFs (legal, real estate, insurance) before committing to building the vertical.
4. **[[gcp-maps-platform-outbound]]** — generate scrubbed outbound lists for the [[boring-business-automation]] / niche-discovery work in [[isenberg-future-of-saas-30-step|Isenberg Step 1]] using Places API instead of Apify/Phantom Buster.

Each article includes a credit-burn estimate so the $300 budget can run all four sequentially without overrun.

## Approximate budget allocation

| Experiment | Estimated credit burn | Notes |
|---|---|---|
| Cloud Scheduler + Cloud Tasks | $5–$15 | Cloud Scheduler is $0.10/job/month, near-free at this scale |
| Vertex AI Gemini Flash | $40–$80 | Depends on volume; Flash is ~$0.075/1M input tokens |
| Document AI | $60–$120 | $1.50/100 pages for Form Parser; depends on doc count |
| Maps Platform | $30–$60 | Place Details ~$17/1K calls after free tier |
| **Headroom** | **~$50–$100** | Cloud Run / Cloud Storage / Pub/Sub for glue |

Total fits comfortably inside $300 if scoped correctly. If any one experiment overruns, the credit caps spend automatically — billing alerts at $50 / $100 / $200 are recommended.

## Constraints to remember

- **The credit is consumption-based, not feature-locked.** Premium features (Vertex AI, Document AI) are accessible immediately, no upgrade required.
- **It expires.** 90 days from activation, then any remaining credit is forfeit. Plan the four experiments as a 12-week rotation, not a "spike when convenient" budget.
- **Egress costs add up.** If any experiment pushes data back to Vercel/Railway frequently, watch egress charges — they're outside most spend estimates.
- **Don't put production data in GCP without a plan.** All four experiments use sandbox/test data or short-lived processed data. None move client production data to GCP without an exit migration ready.

## Related

- [[gcp-cloud-scheduler-agent-heartbeat]]
- [[gcp-vertex-gemini-mechanical-tier]]
- [[gcp-document-ai-document-analysis-niche]]
- [[gcp-maps-platform-outbound]]
- [[isenberg-future-of-saas-30-step]]
- [[agent-native-saas]]
- [[hybrid-llm-workflow]]
- [[token-conservation-mindset]]
- [[claude-max-arbitrage]]
- [[overlook-strategy-positioning]]
