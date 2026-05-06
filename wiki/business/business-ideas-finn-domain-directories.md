---
title: "Business ideas — Finn-domain directories"
type: business
tags: [business-ideas, directories, seo, mailbox-money, audio, aviation, ventura, music-supervision]
created: 2026-05-06
updated: 2026-05-06
weight: medium
node_size: 5
sources: [[isenberg-frey-chu-directory-2025]]
---

# Finn-domain directories

Candidate directory niches that intersect Finn's existing competence moats with [[profitable-directory-pattern|Frey Chu's selection criteria]] (high search volume, low KD, fragmented intent, evergreen, location-based, gettable data).

This page sits between the [[profitable-directory-pattern|methodology]] and [[Finn-OS/ideas/backlog|the backlog]] — keep it as a working scratchpad while the niches haven't been validated. Once one is picked and started, that niche graduates to its own `business-ideas-<slug>.md` page (similar to how [[business-ideas-music-key-tempo-detector]] et al. graduated out of [[paid-chrome-extensions]]).

## Selection criteria reminder

From [[profitable-directory-pattern]]:
- 30–100K monthly searches
- Keyword difficulty under 20 (verify with SERP inspection)
- Fragmented search intent (multiple long-tail variants)
- Evergreen, not seasonal
- Not branded
- Data is gettable

## Candidates

### 1. Recording studios by location (California / Ventura)

**Why Finn:** [[overlook-audio]] domain knowledge, [[berklee-music-supervision-1|Berklee Music Supervision]] coursework, Ventura local context. Low incumbent bar in Ventura specifically.

**Likely keywords:** "recording studios near me," "recording studios Ventura," "recording studios Los Angeles," "drum recording studio LA," "vocal booth rental [city]"

**Volume guess:** medium nationwide, lower locally. Worth an Ahrefs pass.

**Enrichment angle:** which gear (Neve / SSL / Universal Audio), which engineers in residence, hourly rates, isolation booth count, headphone systems, drum kits available, vocal mics on-hand. None of this surfaces on Google Maps. Strong moat.

**SaaS-on-top:** studio booking software for the listed studios. Same shape as the CSA-farms → CSA-management example in the source.

### 2. Music supervisors directory (for indie filmmakers)

**Why Finn:** [[berklee-music-supervision-1]] coursework, adjacency to Alchemy / CBS work via Brad Hatfield. Direct domain alignment.

**Likely keywords:** "music supervisor for film," "indie music supervisor," "find a music supervisor," "music supervisor [city]"

**Volume guess:** low total volume but extremely high per-query LTV. Each click is a filmmaker with a budget.

**Enrichment angle:** genres they license, recent placements, fee ranges, sync vs. score work, agency vs. independent, contact policy. Currently scattered across IMDb / personal websites / industry directories no one uses.

**SaaS-on-top:** sync-licensing pitch tracker for indie filmmakers. Or: the inverse — a "submit to all listed supervisors" SaaS for indie composers.

### 3. Mastering / mixing engineers near me

**Why Finn:** [[overlook-audio]] + Berklee. Audio engineering credibility.

**Likely keywords:** "mastering engineer near me," "mixing engineer Los Angeles," "online mastering engineer rock," "vocal mixing engineer"

**Volume guess:** medium, fragmented across genre + format (online vs. local).

**Enrichment angle:** genres they specialize in, turnaround time, file format / codec preferences, Atmos-capable, hardware vs. ITB, rate per song, sample portfolio. Existing options (Gearspace listings, Soundbetter) are walled-garden marketplaces, not SEO-ranking directories.

**SaaS-on-top:** referral-revenue or escrow service for engineer/client matches.

### 4. Aviation: TAF/METAR-aware airport + FBO directory

**Why Finn:** active flight training, see also [[business-ideas-taf-metar-decoder]]. Aviation domain competence.

**Likely keywords:** "FBOs near me," "[airport code] FBO," "fuel prices [airport]," "airports with self-serve fuel California"

**Volume guess:** low — pilot population is small. But very low competition and zero churn (FBOs and airports don't move).

**Enrichment angle:** fuel prices (live), self-serve availability, hours, courtesy car, instrument approaches available, hangar rental. AirNav covers some; SkyVector covers some; nothing combines + adds the live fuel-price layer well.

**SaaS-on-top:** flight-planning software with real-time FBO data. Adjacent to ForeFlight / Garmin Pilot but at a much smaller scale; or specifically a "cheap fuel route planner" wedge.

### 5. Yacht brokers by region

**Why Finn:** [[rustler-42|Rustler Yachts]] case study in hand, [[overlook-vertical-landing-pages]] for yacht broker already on the build list. Same audience, same SERP geography.

**Likely keywords:** "yacht broker near me," "California yacht brokers," "sailboat broker San Francisco," "used yacht broker Florida"

**Volume guess:** low total volume, very high per-transaction value.

**Enrichment angle:** boat types brokered, geographic coverage, recent sales, commission rates, listing photographer in-house, refit referral network. None of this surfaces on yachtworld.com search.

**SaaS-on-top:** broker-side listing-management tool, or buyer-side comparable-sales lookup.

### 6. Ventura County local services (parallel to Pier and Point)

**Why Finn:** direct adjacency to [[pier-and-point]] (hyperlocal news outlet) and [[ventura-forward]] (civic retainer). Same audience, same operator infrastructure.

**Likely keywords:** "dog parks Ventura," "live music Ventura tonight," "Ventura coffee shops with wifi," "Ventura yoga studios," "Ventura sailing lessons"

**Volume guess:** low individually, additive in aggregate. The Ventura SERP is sparse.

**Enrichment angle:** opening hours that are actually current, kid-friendly / dog-friendly / wifi quality, local-business-owner contact for directories that double as PR surfaces.

**SaaS-on-top:** the most interesting layer — Ventura-specific listing management, sold to the same SMBs the directory ranks. Pier and Point sells news / newsletter ad inventory; the directory layer underneath sells listing upgrades and CRM. Same ad-stack, different funnel.

**This is the most promising candidate** because (a) the audience overlap with [[pier-and-point]] doubles the leverage of any Ventura content engine, (b) the SaaS layer can reuse [[overlook-portal-webapp]] infrastructure, and (c) Frey's discipline (data enrichment, structured filters) is directly applicable to a "find a wedding venue / yoga studio / coffee shop in Ventura" experience that nothing currently serves well.

## Sequencing

- Pick **one** niche. The whole methodology is gated on niche selection.
- Run a 30-minute Ahrefs pass against the candidate list before committing.
- Constraint: don't pick something Finn can't honestly enrich. The enrichment step is the moat; without domain competence the moat collapses to "another basic directory."
- Cross-reference: **don't pick a niche that competes with [[pier-and-point]]'s editorial space.** Adjacent is fine; competing is not.

## Open threads

- Run the Ahrefs pass.
- Decide: Ventura local services (operator leverage) or Recording studios (domain leverage)?
- Confirm whether [[outscraper]] coverage is solid for non-restaurant niches (FBOs especially are sparse on Google Maps).

## Related

- [[profitable-directory-pattern]] — methodology
- [[static-pillar-page-directory]] — SEO format
- [[isenberg-frey-chu-directory-2025]] — source episode
- [[business-ideas-backlog]] — parent backlog
- [[boring-business-automation]] — strategic neighbor concept
- [[overlook-vertical-landing-pages]] — adjacent SEO surface already shipping
- [[pier-and-point]] — adjacent audience for the Ventura candidate
