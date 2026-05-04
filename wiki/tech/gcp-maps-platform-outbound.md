---
title: "Google Maps Platform — niche-discovery + outbound list-building"
type: tech
tags: [gcp, maps-platform, places-api, outbound, niche-discovery, boring-business-automation, article]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]], [[notebooklm-simple-ui-viral-ai]]
---

# Google Maps Platform — niche-discovery + outbound list-building

**Article 4 of 4 on the [[gcp-credits|$300 GCP credits]] series.** Estimated burn: **$30–$60.**

## The hypothesis

[[isenberg-future-of-saas-30-step|Isenberg Step 1]] (pick a subniche) and the [[boring-business-automation|boring-business-automation]] thesis both depend on having a *real* list of *real* businesses in the chosen niche to interview, contact, or analyze. The 2026 [[wat-framework-marketing|WAT framework]] cites Apify and Phantom Buster as the standard scraping tools.

**Google's Places API is cheaper, more reliable, and ToS-compliant** for the use case of *"give me 200 roofing companies within 50 miles of Ventura, with names, addresses, phone numbers, websites, hours, ratings, and category data."* The credit covers a meaningful spike before any production commitment.

## What you actually get for $30–$60

Maps Platform pricing as of April 2026 (subject to change — verify in the GCP console):

| API | Free tier | Marginal cost |
|---|---|---|
| Place Search (text) | $200/month free credit (separate from the $300) | ~$32 per 1K calls |
| Place Details | (in same free credit pool) | ~$17 per 1K calls |
| Place Autocomplete | (same pool) | ~$2.83 per 1K sessions |
| Geocoding | (same pool) | ~$5 per 1K calls |

**Key fact:** Maps Platform has its own *separate* $200/month recurring free credit on top of the one-time $300. So the actual experiment budget is roughly **$200 of free monthly + $30–$60 of the one-time credit if you go heavy**. For most niche-list-building experiments, this is essentially free.

That covers, very roughly:

- ~6,000 Place Search calls + ~6,000 Place Details lookups per month, OR
- One full county-scale list-build per niche per month

## What this enables in the strategy

Three concrete uses, each tied to existing wiki concepts:

### Use 1 — Subniche discovery (Isenberg Step 1)

Don't commit to a niche based on intuition. Pull the actual count of businesses in candidate niches before deciding which one to pursue.

```
For each candidate niche:
    - Search Places API for category + region
    - Count results
    - Sample 20 random results: pull website, hours, review count
    - Score: market size × digital sophistication × pain density
```

This turns the [[ai-agency-niches|niche table]] from a list of guesses into a ranked list with real-world numerators. Compatible with [[ideabrowser]] but driven by hard counts instead of curated lists.

### Use 2 — Outbound list-building for [[workflow-audit-service|the Workflow Audit]]

Once a niche is picked, the Workflow Audit service needs 5-15 prospects per round. Places API generates a clean candidate list with the contact metadata needed for personalized outreach (per [[wat-framework-marketing]] step 4):

| Field | Source | Use |
|---|---|---|
| Name + address | Place Details | Personalize the outreach opener |
| Website | Place Details | Auto-pre-screen via Lighthouse / `llms.txt` check |
| Hours | Place Details | Time outreach for non-busy days |
| Review count + rating | Place Details | Sort by "established but room to improve" (≥10 reviews, ≤4.0 stars) |
| Category | Place Details | Filter to exact subniche (vs. adjacent) |
| Photos | Place Details | Visual context for outreach |

Then enrich via:
- **Email verification:** Million Verifier or similar (per [[wat-framework-marketing]])
- **LinkedIn lookup:** out-of-scope for Maps; would route through Common Room or Apollo

### Use 3 — Local SEO audit substrate

For the **AI-ready website conversion** niche from [[ai-agency-niches]] — the closest fit to Overlook's existing surface — Places API gives you the ground truth on which businesses *show up* in Google Maps results today. Cross-reference against which ones have `llms.txt`, schema markup, and AI-ready structure. The gap = the addressable pipeline.

## The architecture

```
Cloud Run job (or local Python) ──→ Places API (text search by category + region)
                                          │
                                          ▼
                                   List of place_ids
                                          │
                                          ▼
                                   Places API (Place Details per id)
                                          │
                                          ▼
                                   Enriched JSON
                                          │
                                          ├─→ Cloud Storage (raw cache)
                                          └─→ BigQuery or Postgres (queryable)
                                                  │
                                                  ▼
                                         Filter / score / rank
                                                  │
                                                  ▼
                                  CSV → Notion CRM → outreach pipeline
```

The CSV → Notion pipe ties into [[csv-to-notion-pipeline|the existing CSV → Notion pipeline]] — same `notion_csv_importer.py` that handles financial data can ingest a prospect list.

## Pricing for productized outbound

If this becomes a productized service (e.g., "Niche Prospect Pack" — $500 for a 200-prospect scored list with verified emails), the unit economics:

- 200 Place Search + 200 Details = ~$10 in API calls
- Email verification = ~$5
- Finn's review/scoring = 30 minutes
- **Cost: ~$15 + 30 min. Price: $500. Margin: ~95%.**

This sits inside the [[ai-agency-niches|niche table]] as a previously-uncatalogued offering: *"prospect list as a productized deliverable."*

## What to spike with the credit

A 1-2 day experiment:

- **Day 1.** Pick 3 candidate niches (boutique branding studios, residential roofing, music studios). Pull Places API counts within Ventura County, Los Angeles County, and Orange County. Tabulate.
- **Day 2.** For one niche, pull full Place Details for 50 businesses. Score on website-modernity (presence of `llms.txt`, schema markup, mobile-friendly, last-updated heuristics). Identify the 5 best fits for an outreach pilot.

Acceptance criterion: by end of day 2, Finn has a tab-delimited file of 5 named, scored, ready-to-contact prospects in one chosen niche, generated for under $5 of API spend.

## Caveats

> [!warning] Places API ToS
> Reasonable use is fine; mass-scraping for resale is not. The free monthly credit is generous *because* it's gated on use that fits the ToS. Read the *Reuse and Caching* section before storing Place Details long-term — there are restrictions on how long fields can persist.

> [!warning] Email isn't always available
> Place Details returns websites and phone numbers, rarely emails. Email enrichment requires a second tool (Hunter, Apollo, Million Verifier) — budget for it separately.

> [!warning] Sample bias
> Places API ranks by Google's algorithm. Businesses missing from Maps (or with thin profiles) won't appear, even if they're real and reachable. For some niches (industrial B2B, very local trade businesses) this means a non-trivial portion of the market is invisible.

## Related

- [[gcp-credits]]
- [[isenberg-future-of-saas-30-step]]
- [[boring-business-automation]]
- [[ai-agency-niches]]
- [[wat-framework-marketing]]
- [[ideabrowser]]
- [[workflow-audit-service]]
- [[csv-to-notion-pipeline]]
- [[gcp-cloud-scheduler-agent-heartbeat]]
- [[gcp-vertex-gemini-mechanical-tier]]
- [[gcp-document-ai-document-analysis-niche]]
- [[overlook-strategy-positioning]]
