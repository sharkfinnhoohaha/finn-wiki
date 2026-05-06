---
title: "Profitable directory pattern"
type: concept
tags: [concept, directories, seo, monetization, mailbox-money, niche-selection]
created: 2026-05-06
updated: 2026-05-06
weight: medium
node_size: 5
sources: [[isenberg-frey-chu-directory-2025]]
---

# Profitable directory pattern

End-to-end methodology for building a SEO-driven local directory site that generates mailbox-money revenue ($2–10K/mo) on minimal upkeep (~15 min/mo). Codified by [[frey-chu|Frey Chu]] in [[isenberg-frey-chu-directory-2025|his February 2025 episode]] of [[greg-isenberg|Greg Isenberg]]'s podcast. Frey's first directory has run 18 months consecutively at this scale.

The pattern's surface area is small — six ordered steps, each with sharp selection criteria. The hard part is niche selection, which is also where domain-specific competence moats compound.

## The six steps

### 1. Find the niche

In Ahrefs Keyword Explorer, search **"near me"** and scroll the long tail.

Selection criteria:
- 30–100K monthly searches (sweet spot)
- Keyword difficulty under 20 (with skepticism — KD is gameable)
- Fragmented search intent (multiple long-tail variants — "indoor X," "off-leash X," "X for Y")
- Evergreen, not seasonal
- Not branded (Taco Bell-style queries are one-dimensional)
- Data is gettable (don't pick niches where the underlying records are hard to source)

### 2. Validate the SERP

- Google the keyword in a target city. The win condition is that top-ranked existing directories are basic — minimal data per listing, ugly UI, slow updates.
- Cross-reference Reddit. Search `<keyword> reddit` to find threads where users complain about existing options or share custom Google Maps pins. Real social-listening signal beats Ahrefs alone.
- "Set a bounty on weak competitors" — Frey's framing. SEO is PVP; pick the laggard you can outrank, not the leader.

### 3. Acquire the data

Default tool: [[outscraper]]'s Google Maps scraper. Filter by **Google category** with "exact match" — clean structured rows. Freeform queries return ~6× more rows but most are junk.

Default fields: name, phone, address, postal code, state, hours, reviews, **street view image**, **location URL** (the Google Maps share link — load-bearing for AI enrichment in step 4).

Default scope: nationwide. No reason to leave search volume on the table.

### 4. Enrich the data

The differentiator. Per-listing structured features that Google Maps doesn't surface, mined from the patterns in user reviews. For dog parks: shade / benches / water fountains / dog bags / off-leash / indoor.

Identify the fields by sampling 30 minutes of review tags and pattern-matching the recurring properties users care about.

Old way (manual columns): unworkable at scale.
New way: feed each listing's location URL to Claude / ChatGPT, prompt *"does this listing have <feature>?"*, populate a boolean column. Frey is building an automation tool around this; not yet released.

This step is what justifies the entire build. A basic directory loses to Google Maps; an enriched directory beats it.

### 5. Build the site

Format: [[static-pillar-page-directory]] — one enormous page, structured by city sections, with per-listing blocks containing photo + enrichment chips + address/phone/hours + embedded map. State-level internal-linking footer.

CMS-agnostic. Frey demonstrates with WordPress (Elementor Pro for his first build). Recommends framer or [[bolt-new]] for new builds. The SEO discipline is what matters, not the platform.

### 6. Monetize in three layers

- **AdSense.** Long pages fit many ad placements. Closest thing to passive income Frey has experienced. Floor: $2K/mo on a competent build.
- **Affiliate.** Niche-specific. For pet directories: BarkBox-shaped affiliate programs.
- **SaaS on top.** [[greg-isenberg|Greg]]'s explicit thesis update: directories monetized only through AdSense are leaving the real money on the table. Use directory traffic as free distribution into a vertical SaaS the same operator owns. CSA-farms directory → CSA-management software is the example cited in the episode. Pairs cleanly with [[services-first-saas]] and [[agent-native-saas]].

## Why this works

The methodology exploits three structural facts about Google in 2026:

1. **Google Maps doesn't satisfy fragmented intent.** When a user wants "off-leash dog park with shade and water fountains," the Maps interface forces them to click through individual reviews. A directory with structured filters wins the click.
2. **Static pillar pages still rank.** Frey's first-directory state pages each rank for ~1,300 keywords because the city-level keyword cluster ("dog parks Long Beach," "dog parks Los Angeles," etc.) is the actual highest-volume query family — not the per-listing pages most operators build.
3. **AdSense remains stable for tier-one English traffic.** Frey notes 90+% tier-one (US/CA/AU/UK) traffic on every example, and that the niche directories he tracks have been resilient through Google core updates that have demolished other content sites.

## What can go wrong

- **Picking a competitive niche.** Too obvious = fast food, real estate, restaurants. Picking a niche with high search volume but low unsatisfied demand is the failure mode.
- **Taking the SERP at face value.** KD scores lie. Verify with actual SERP inspection — backlink profiles, brand authority of competitors, time-on-page in click-throughs.
- **Underbuilding the enrichment.** A listing with only address + phone is the basic competitor you should be outranking, not the build.
- **Stopping at AdSense.** [[greg-isenberg|Greg]]'s thesis: the SaaS layer is where the multiples live.

## Frey's selection guardrails (avoid these)

- Seasonal niches ("pumpkin patches near me" — 152K monthly but a one-month window)
- Niches where data acquisition is hard ("earthquakes near me")
- Branded keywords ("Taco Bell near me" — incumbent solves it themselves)
- Pure restaurant categories (fragmented intent on the wrong axis — users want quality / vibe / current promo, not directory data)

## Stack mapping

| Step | Default tool | Alternative |
|---|---|---|
| Keyword research | [[ahrefs|Ahrefs]] | Semrush, Mangools, Google Keyword Planner |
| Validation | Google + Reddit | Quora, niche subreddits, Twitter/X search |
| Data acquisition | [[outscraper]] | Apify, Phantombuster, Google Places API directly |
| Enrichment | Claude / ChatGPT + location URL | Manual review-mining, Outscraper review extracts |
| CMS | WordPress + Elementor / Astra | framer, [[bolt-new]], Next.js + Sanity, Astro |
| Hosting | shared / WP Engine | [[vercel-deployment|Vercel]], Cloudflare Pages |
| Monetization | AdSense + affiliate | Display-ads + niche affiliate + SaaS |

## How this connects to existing wiki concepts

- **[[boring-business-automation]]** — directories are the canonical demand-side surface. Build a directory of HVAC techs / dentists / lawn-care / etc., then sell software back into the listings.
- **[[services-first-saas]]** — same SaaS-on-top thesis, with SEO-as-distribution instead of services-as-distribution. Both are "earn the audience, then sell to them."
- **[[agent-native-saas]]** — the SaaS layer above a directory is a candidate for [[isenberg-future-of-saas-30-step|Isenberg's 30-step playbook]] — agents fulfilling per-task work for the listed businesses.
- **[[overlook-vertical-landing-pages]]** — same SEO discipline (target keyword, comprehensive page, internal linking) at a smaller scope. Each Overlook landing page is functionally a level-zero directory of one (Finn's own work). The gap to a real directory is small.
- **[[pier-and-point]]** — adjacent surface for hyperlocal directories under the same audience. Ventura news outlet upstairs, Ventura services directory downstairs.

## Open questions

- Where does directory traffic top out before plateauing? (Frey's $2,300/mo example is steady-state, but Atlas Obscura's $30–60K/mo path implies room to scale.)
- How much enrichment is enough? At what point does the marginal AI prompt stop adding click-through-rate?
- Does the WordPress build constrain the SaaS-on-top step, or can a directory + Next.js SaaS coexist on the same domain cleanly?

## Related

- [[isenberg-frey-chu-directory-2025]] — the source episode
- [[static-pillar-page-directory]] — the SEO format used in the build
- [[frey-chu]] — the methodology's author
- [[greg-isenberg]] — host who pushes the SaaS-on-top thesis
- [[outscraper]] — default data tool
- [[ahrefs]] — default keyword tool (page may be a stub)
- [[boring-business-automation]] — strategic neighbor concept
- [[services-first-saas]] — strategic neighbor concept
- [[business-ideas-finn-domain-directories]] — Finn-specific candidate niches
