---
title: "Overlook Vertical Landing Pages — strategy"
type: business
tags: [overlook-strategy, landing-pages, seo, vertical-positioning, productized-services]
created: 2026-04-26
updated: 2026-04-27
weight: high
node_size: 10
sources: [[overlook-vertical-landing-pages-2026-04-26]], [[overlook-vertical-landing-pages-2026-04-27]]
---

## TL;DR

Ship one vertical-specific landing page per niche Overlook serves, optimized for `[city] + [niche] website design` long-tail keywords. Each page anchors a single case study, publishes tiered pricing, and converts intent traffic that the homepage can't. First batch of three (yacht broker, boutique vacation rental, winery / tasting room) generated 2026-04-26. A second pass on 2026-04-27 reaffirmed yacht broker + boutique rental, swapped sportfishing in for winery, and lowered pricing ~30% — see [[overlook-vertical-landing-pages-2026-04-27]]. Both batches are unshipped; canonical batch needs to be picked before Sanity ingest.

## Why this play

- **Long-tail SERPs are thin.** For "[city] + [niche]" web design queries in coastal California, page 1 is generic template SaaS or out-of-region agencies. A solo specialist who actually ships in the niche outranks them.
- **Case studies do double duty.** [[rustler-42|Rustler]] sits on the yacht broker page; [[somliøya]] sits on the boutique rental page. Each landing page is essentially a long-form proof artifact wrapped in a specific keyword.
- **Pricing transparency is a wedge.** No competitor in the marine or boutique rental web design SERPs publishes real numbers. Putting tiered pricing on a landing page filters out tire-kickers and forces engaged leads.
- **Concrete answer to the open positioning question.** [[overlook-strategy-positioning]] has had a live unresolved question since April 24: lead with vibe coding, hide it, or side-track an [[agent-native-saas]] line. Vertical landing pages are a fourth option — lead with vertical authority, leave the AI substrate invisible to clients but visible in delivery.

## The pattern (per page)

Every vertical page follows the same skeleton:

1. **Hero** — H1 with target keyword, benefit-led, under 70 chars. Subhead is one sentence with a specific outcome.
2. **Problem → Approach → Outcome** — three sections, 60–80 words each. "What's broken in this niche / how I do it / what you actually get."
3. **Embedded case study** — single client, named, with one or two real metrics.
4. **Process** — 4 steps, 1 sentence each, with weeks called out.
5. **Pricing** — three tiers, real numbers, no "contact for pricing" cop-out. Hosting / SaaS fees pass through at cost.
6. **FAQ** — five questions targeting actual objections from that vertical (not generic "how long does it take").
7. **Single CTA** — book a call, bring specific data.

Frontmatter maps to Sanity (`title`, `slug`, `metaTitle`, `metaDescription`, `targetKeyword`, `vertical`, `caseStudyRef`, `priority`). Files live in `outputs/landing-pages/` post-generation, get ingested into Sanity for finn-v2 deploy.

## First batch (April 26, 2026)

| Slug | Target keyword | Case study | Priority |
|---|---|---|---|
| `yacht-broker-website-design` | yacht broker website design | [[rustler-42|Rustler Yachts]] | 1 |
| `boutique-vacation-rental-website-design` | boutique vacation rental website design | [[somliøya|Sømliøya]] | 2 |
| `winery-tasting-room-website-design` | winery tasting room website design California | none yet (founder pricing) | 3 |

See [[overlook-vertical-landing-pages-2026-04-26]] for cluster rationale, full pricing tables, and considered-but-rejected verticals (charter-boat, surf-shop ecommerce).

## Second pass (April 27, 2026)

The same generator ran again overnight with fresh keyword research. Two of three verticals were reaffirmed; the third changed.

| Slug | Target keyword | Case study | Priority |
|---|---|---|---|
| `yacht-broker-web-design-california` | yacht broker web design california | [[rustler-42|Rustler Yachts]] | 1 |
| `boutique-rental-website-direct-booking` | boutique rental website direct booking | [[somliøya|Sømliøya]] | 1 |
| `sportfishing-charter-website-design-california` | sportfishing charter website design california | [[rustler-42]] (adjacent) + founding-client offer | 2 |

> [!warning] Two batches, pick one
> Don't ship both. The two batches use different slugs, different pricing tiers, and a different third vertical (winery vs sportfishing). They are alternative drafts, not additive. Reconcile before any Sanity ingest. Pricing diff alone is meaningful: April 27 sets Foundation tiers at $3,800–$4,800 vs April 26's $5,500–$7,500.

The April 27 sportfishing pick **reverses the April 26 rejection of charter-boat / sportfishing as "more crowded SERP."** Fresh research showed the winery SERP is denser than expected (Budbreak, Wine Works, Barrels Ahead, Gorilion all hold the term with 20+ years of authority), while sportfishing has only one specialist (Florida-based SportFish Web Design) plus FishingBooker as the OTA charters are trying to escape. See [[overlook-vertical-landing-pages-2026-04-27]] for full diff.

## Deploy target

[[finn-v2-portfolio]] on Next.js 14 + Sanity. Sanity schema for `landingPage` document type doesn't exist yet — needs a 1–2 hour build before first page can ingest. Recommendation is **Sanity over `page.tsx`** because copy iterates more often than layout, and decoupling content from deploy lets Finn edit pricing without a code change.

## Verticals to consider next

Once the first batch ships and ranks (target: 90 days post-publish), candidates for the next round:

- **Charter boat / sportfishing** — *promoted to a real candidate by the [[overlook-vertical-landing-pages-2026-04-27|April 27 pass]]; if Finn ships sportfishing as the third vertical, this row moves out of "next."*
- **Winery / tasting room** — *demoted from the April 26 batch by the April 27 pass on SERP density grounds; if Finn ships sportfishing, winery moves here.*
- **Coastal restaurant / hospitality** — saturated nationally; only worth it if a Ventura-specific case study lands first.
- **Aviation school admin** — already on the [[agent-native-saas]] candidate list. Different play (probably a SaaS, not a site sale), but a landing page could test demand cheaply.
- **Recording studio / mix engineer** — leverages [[overlook-audio-positioning|Overlook Audio]] and Berklee credibility ([[school-berklee]]).

Don't open a vertical without either (a) a real case study or (b) a credible founder-pricing offer for the first one or two clients.

## Open questions

- **Booking surface.** CTAs currently link `#book` — needs a real Calendly / Cal.com URL on finn-v2 before publish.
- **SEO claim language.** Each page promises "ranks inside 90 days" — defensible but aspirational. May need softening or a footnote before launch.
- **Per-task pricing layer.** Could a "single landing page — $1,500" tier live below Foundation? Tests [[per-task-pricing]] thesis on a small unit. Worth a try on one vertical before the others.
- **Daily content engine.** [[media-first-distribution]] idea pairs naturally with these pages — each vertical could feed a weekly LinkedIn / IG post about that niche. Not built yet.

## Related

- [[overlook-strategy-positioning]] — parent strategy doc
- [[pricing-and-rates]] — first place this published pricing lands
- [[ai-agency-niches]] — adjacent productization framework, different angle
- [[ninety-day-launch-plan]] — calendar discipline for ranking each page
- [[finn-v2-portfolio]] — deploy target
- [[isenberg-future-of-saas-30-step]] — niche subniche selection principles applied here
