---
title: "Overlook Vertical Landing Pages (Apr 27, 2026 second pass)"
type: source
tags: [overlook-strategy, landing-pages, seo, vertical-positioning, sanity, finn-v2, sportfishing]
created: 2026-04-27
updated: 2026-04-27
weight: medium
node_size: 5
sources: [[niche-landing-page-generator-skill]]
---

## TL;DR

Second run of the same `niche-landing-page-generator` scheduled task that produced the [[overlook-vertical-landing-pages-2026-04-26|April 26 batch]]. Same generator, fresh keyword research, three pages out — but the run **swapped sportfishing in for winery** based on SERP gap analysis, and lowered pricing across the board (~30% reduction). Yacht broker and boutique rental verticals are reaffirmed; winery vs sportfishing is now an open call. Raw files at `raw/landing-pages/2026-04-27-overlook-vertical-landing-pages/`. Canonical Sanity-ready copies at `outputs/landing-pages/`.

## What was produced

Three pages, frontmatter mapped to Sanity ingestion fields. New slugs are more keyword-explicit than the April 26 batch's slugs — needs Finn's call on which to use.

| Slug | Target keyword | Case study | Ship priority |
|---|---|---|---|
| `yacht-broker-web-design-california` | yacht broker web design california | [[rustler-42|Rustler Yachts]] | 1 |
| `boutique-rental-website-direct-booking` | boutique rental website direct booking | [[somliøya|Sømliøya]] | 1 |
| `sportfishing-charter-website-design-california` | sportfishing charter website design california | [[rustler-42|Rustler]] (adjacent) + founding-client offer | 2 |

## What changed from the April 26 batch

> [!warning] Two batches now exist for the same play
> The April 26 batch and this April 27 batch are not additive — they're alternative drafts. Pick one canonical set before any Sanity ingest. Differences are real (verticals, pricing, slugs) and shipping both would confuse the SERP and the pricing page.

| Dimension | April 26 batch | April 27 batch |
|---|---|---|
| Verticals | yacht broker / boutique rental / **winery** | yacht broker / boutique rental / **sportfishing charter** |
| Yacht broker slug | `yacht-broker-website-design` | `yacht-broker-web-design-california` |
| Yacht broker pricing | $6,500 / $14,000 / $26,000 | $4,800 / $9,500 / $18,000 |
| Boutique rental slug | `boutique-vacation-rental-website-design` | `boutique-rental-website-direct-booking` |
| Boutique rental pricing | $5,500 / $11,500 / $22,000 | $3,800 / $7,500 / $14,500 |
| Third vertical | Winery / tasting room ($7,500–$28,000, 30% founder pricing first 2 clients) | Sportfishing charter ($3,800–$14,500, 20% founder pricing first 3 clients) |
| Case study for third | None — open offer | Rustler crossover + founding-client transparency disclosure |

## Why the third vertical changed

The April 26 batch picked winery and explicitly rejected sportfishing as "more crowded SERP." This run did fresh keyword research and landed the opposite way:

- **Winery SERP is denser than expected.** Budbreak Creative, Wine Works, Barrels Ahead, Gorilion all have 20+ years and entrenched rankings for the wine industry vertical. Three established specialists is a real wall, not a thin SERP.
- **Sportfishing SERP has one specialist (Florida-leaning) plus the OTAs.** SportFish Web Design holds the broad term but is geographically remote; FishingBooker dominates by domain authority but is the OTA charters are *trying to escape*. No California-local designer ranks. The intent argument also got stronger — captains paying 15–20% to FishingBooker have a quantifiable ROI story for direct-booking sites.
- **Case-study fit is closer than expected.** [[rustler-42|Rustler]] is marine, photo-led, and lead-conversion-focused — the architectural pattern transfers cleanly to charter ops (trip types ≈ yacht models, departure schedule ≈ build slots).

The April 27 page handles the case-study honesty gap with explicit founding-client framing rather than fabricating sportfishing work — three California charters get 20% off in exchange for case-study rights.

## Why pricing dropped

This run defended a lower tier structure, ~30% below the April 26 batch:

- Foundation tiers landed at $3,800–$4,800 (vs $5,500–$7,500). Closer to "the price a single owner-operator can rationalize."
- Showcase tiers landed at $14,500–$18,000 (vs $22,000–$28,000). Closer to typical solo-developer headless Next.js work.

Neither is wrong — they answer different questions. April 26 is "what should a senior agency charge for this work." April 27 is "what's defensible from a Ventura-based solo with one or two case studies in each vertical and zero salaried overhead." Finn's call which one matches the actual sales conversation he wants to have. See [[pricing-and-rates]].

## Cluster rationale (from web search this run)

- **Yacht broker — California / Channel Islands.** Page 1 dominated by brokers themselves (YachtWorld broker pages, Real Yacht & Ship, Ryan Anderson, Executive Yachts) plus Relevance Yacht (UK) and Charternet (Florida). No California-local agency on the term. ~30–90/mo core volume, very high commercial intent.
- **Boutique rental — direct booking.** Platforms (Lodgify, Avantio, Guesty, Hostaway) and Squarespace template guides dominate the SERP. Owner-operators searching "direct booking website for vacation rental" find SaaS pitches, not designers. ~100–300/mo, very high intent — only searched after deciding to escape platform fees.
- **Sportfishing charter — California.** SportFish Web Design (Florida specialist), FishingBooker (OTA the charters want to escape), and the charters themselves. ~50–150/mo across the cluster, very high ROI argument.
- *Other top candidate considered and rejected:* boutique coastal hotel — overlapped too much with rental cluster.

## Format / deployment recommendation (unchanged from April 26)

**Sanity over `page.tsx`.** Same logic as the prior batch: copy iterates more often than layout, decoupling content from deploy lets Finn edit pricing without code changes, and `landingPage` schema is reusable across all batches. The Sanity schema build is still the blocker — see open threads.

## Open threads / decisions needed

- **Decision: April 26 vs April 27 batch as canonical.** Or merge: take yacht broker + boutique rental from one (slugs / pricing must be unified) and the third vertical from whichever Finn prefers (winery vs sportfishing). Both batches still live in `outputs/landing-pages/` and `raw/landing-pages/2026-04-2{6,7}-...`.
- **Decision: winery or sportfishing as the third vertical.** Different SERP plays, different case-study postures (winery uses founder pricing, sportfishing uses Rustler crossover + founding clients). One ships; one moves to "candidates next" on [[overlook-vertical-landing-pages]].
- **Decision: pricing reconciliation.** [[pricing-and-rates]] currently shows the April 26 numbers. If April 27 wins, that page needs a rewrite. If April 26 wins, ignore this batch's prices.
- **Sanity `landingPage` schema** still doesn't exist on [[finn-v2-portfolio]]. ~1–2 hour build before any page from either batch can ingest. This is the actual ship blocker.
- **CTA links** in this batch use `/contact?ref=...` (vs the prior `#book` anchors) — closer to a real Calendly/Cal.com URL pattern but still placeholder.

## Strategic implications

This run is a **convergence test**. Two independent passes over the same prompt, different days, different keyword sample:
- Yacht broker + boutique rental are robust picks (both runs converge on these as priority 1).
- Winery vs sportfishing is contested — the answer depends on whether the SERP analysis weights "case-study fit" higher (favors sportfishing via Rustler crossover) or "category margin headroom" higher (favors winery via wine-industry willingness to pay).
- Pricing variance reveals there's no settled internal anchor for what an Overlook engagement costs. [[pricing-and-rates]] is now the place to settle that — not the landing pages themselves.

## See also

- [[overlook-vertical-landing-pages]] — strategy / playbook page; needs a "second pass" section added
- [[overlook-vertical-landing-pages-2026-04-26]] — first batch source, has the alternative pricing and the winery vertical
- [[overlook-strategy-positioning]] — open positioning question this batch continues to answer
- [[pricing-and-rates]] — current canonical pricing reflects April 26 numbers; this batch challenges them
- [[finn-v2-portfolio]] — deploy target

## Sources

- Scheduled task output: `outputs/landing-pages/{yacht-broker-web-design-california,boutique-rental-website-direct-booking,sportfishing-charter-website-design-california}.md`
- Web search results: 6 queries across yacht broker (Ventura), boutique rental (California direct booking), winery (Santa Barbara County — used to deprioritize winery), sportfishing charter (California direct booking and Channel Islands), boutique hotel (rejected as overlapping)
- Task spec: `niche-landing-page-generator` scheduled task SKILL.md (same as April 26 source)
