---
title: "Isenberg × Frey Chu — How to build a cash-flowing online directory (2025)"
type: source
tags: [source, youtube, directories, seo, ahrefs, wordpress, monetization, mailbox-money, isenberg]
created: 2026-05-06
updated: 2026-05-06
weight: medium
node_size: 5
source_url: https://youtu.be/6rAHkSyzfNA
source_author: "[[greg-isenberg]]"
source_guest: "[[frey-chu]]"
source_date: 2025-02-12
sources: [[isenberg-frey-chu-directories-2025]]
---

# Isenberg × Frey Chu — How to build a cash-flowing online directory (2025)

54-minute episode of [[greg-isenberg|Greg Isenberg]]'s *Startup Ideas* podcast featuring [[frey-chu|Frey Chu]] walking through end-to-end directory site construction using [[ahrefs|Ahrefs]] for niche discovery and WordPress for the build. Frey's first podcast at recording, but Greg pitches him as "the directory king" — sits on multiple monetized properties, the first of which has been earning ~$2,300/mo for 18 months on ~15 min/mo of upkeep. Captured 2026-05-06 from auto-caption transcript (full transcript in `raw/isenberg-frey-chu-directories-2025.transcript.txt`).

## TL;DR

A complete tactical recipe for the **directory-as-mailbox-money** play. Frey walks through niche discovery on Ahrefs, validation through SERP gaps and Reddit social listening, data acquisition via [[outscraper|Outscraper]], data enrichment (now AI-assisted for review-mining), and a deliberately dumb WordPress build using a [[static-pillar-page-directory|static "pillar page" directory]] format that out-SEOs prettier programmatic competitors.

The video also contains [[greg-isenberg|Greg]]'s thesis update on directories: most operators monetize wrong by stopping at AdSense — the real move is to use the directory as a free traffic engine and build SaaS on top, capturing SaaS multiples on the eyeball flow. That thesis is the cleanest tactical bridge to existing wiki concepts: [[agent-native-saas]], [[services-first-saas]], [[boring-business-automation]].

For Finn specifically, this matters because the niche-selection criteria (high search volume / low keyword difficulty / fragmented intent / evergreen / location-based) intersect cleanly with several domains where he already has competence moats — [[overlook-audio|audio]], [[berklee-music-supervision-1|music supervision]], aviation, sailing, hyperlocal Ventura. Frey's methodology is portable; what's hard is picking the niche, and Finn's stack picks niches well.

## The methodology, in order

Frey's entire stack maps to one ordered checklist. Detailed page: [[profitable-directory-pattern]].

### 1. Find the niche (Ahrefs)

Search **"near me"** in Ahrefs Keyword Explorer and scroll the long tail.

Sweet spot:
- **30–100K monthly searches** (under 30K not worth the build, over 100K usually means dominant incumbents)
- **Keyword difficulty under 20** (caveat: KD is misleading — see Frey's "fast food near me, KD 4 but unrankable" example)
- **Fragmented search intent** (people search for variants — "indoor dog park," "off-leash dog park," "dog water park" — not just one query)
- **Evergreen, not seasonal** (don't build "pumpkin patches near me")
- **Not branded** ("Taco Bell near me" is one-dimensional)
- **Data is gettable** (don't pick "earthquakes near me" if you can't reliably get data)

The case study he uses through the episode is **dog parks near me** — 73K monthly searches, KD 27, fragmented across indoor/off-leash/water variants.

### 2. Validate (Google + Reddit)

- Google the keyword in a target city. Look for directory sites on the first page.
- The win condition: top-ranked directories are *basic*. Frey uses "[NyaBone](nyabone)-style" (his episode's example) as the bounty target — a directory getting 21K monthly visits despite being "couldn't be more basic if it tried." That's the green light: people are clicking through to bad directories because Google Maps isn't satisfying them, so a better one will absorb the demand.
- Cross-reference on Reddit. Search `<keyword> reddit` to find threads where users complain about the existing options, share custom Google Maps pins, or ask for hyperspecific filters. Real comment Frey cites: *"I wish I had time to visit all of them and make descriptions and take photos. Not all dog runs are created equal."* That's a direct social signal that data enrichment is the moat.
- "Set a bounty on weak competitors" — Frey's phrasing. SEO is PVP; pick the laggard and outbuild them.

### 3. Get the data (Outscraper)

[[outscraper|Outscraper]]'s Google Maps scraper. Pick by **Google category** (e.g. "dog park") via "exact match" rather than freeform query — exact-match returns clean structured rows; freeform returns ~6× the rows with junk Frey then dedupes. (His first directory was pruned 119K rows → 5K.)

Default fields he pulls: name, phone, full address, postal code, state, working hours, reviews, **street view image**, **location link** (the Google Maps URL — load-bearing for AI-driven enrichment, see step 4).

He builds **nationwide** by default — no reason to leave search volume on the table.

### 4. Enrich the data (manual → AI)

The differentiator is per-listing structured features that Google Maps doesn't surface. For dog parks: **shade / benches / water fountains / dog bags / off-leash / indoor**. Found by sampling 30 minutes of Google review tags and pattern-recognizing the recurring fields users care about.

Old way (2022): manual columns. God-awful at 6K listings.
New way: feed each listing's location URL to Claude/ChatGPT, prompt *"does this dog park have shade?"*, populate a boolean column. Frey is building a tool to automate this; not yet released, mentioned twice as "scratch my own itch." Calls Claude "Cloe" on-air; Greg ribs him about it.

### 5. Build the site (WordPress, but any CMS)

Greg expects framer.com and is mock-disappointed by WordPress. Frey's defense: it's the "dumbest" way and he's keeping it simple to inspire skeptics. He recommends framer or [[bolt-new|Bolt.new]] for new builds. The site format itself is the part that matters — see [[static-pillar-page-directory]] for the structural specifics.

Layout: H1 with target keyword → table of contents → city sections (Dog Parks Long Beach, Dog Parks Los Angeles, …) → per-listing block with photo / enrichment chips / address / phone / hours / embedded map → state-level internal-linking footer. **One enormous page**, not the per-listing programmatic build most assume.

Why it works: targets the **highest-volume keyword cluster** (city-specific listings) on a single page. Frey's first-directory state pages each rank for ~1,300 keywords. AdSense-friendly because the page is long enough to fit many ad placements.

### 6. Monetize (3 layers)

- **Layer 1: AdSense** (display ads) — closest thing to true passive income Frey has experienced. ~$2-10K/mo for a competently-built static directory.
- **Layer 2: Affiliate** — niche-specific. For dog parks: BarkBox affiliate program, since intent is dog-owner-shaped.
- **Layer 3: SaaS on top** — Greg's thesis. Use directory traffic as free distribution; build a SaaS for the businesses you list. Cited in the episode: a CSA-farms directory that funnels traffic into the CSA-management SaaS the same operator owns. Captures SaaS multiples, not AdSense multiples.

Bonus: **lead-magnet / data play.** BarkBox got acquired for ~$90M on $3-4M revenue because the dog DNA / preference data was more valuable than the revenue. If a directory captures email + dog/pet/listing-type data, the dataset is the asset.

## Directory examples cited (with traffic + earnings estimates)

| Site | Traffic | Frey's est. earnings | Note |
|---|---|---|---|
| roadsideamerica.com | 85K/mo | $5–7K/mo | Frey's "comic-sans static directory" — proof simple wins |
| atlasobscura.com | ~1M/mo | $30–60K/mo (probably 50–60) | Same pattern, prettier execution. Resilient to Google core updates |
| findagrave.com | 1.4M/mo | $60–100K/mo | Most extreme example — boring-niche moat |
| BringFido | (large) | n/a | Dog directory — case study competitor for the dog parks build |
| NyaBone | 21K/mo (dog parks slice ~13K) | n/a | Frey's bounty target — basic, ranks anyway |
| (CSA-farms directory) | n/a | n/a | Anonymized in episode — funnels into a SaaS the same owner runs |

## Greg's directories-as-SaaS-funnel thesis

Pulled out as a quotable claim because it threads through several existing wiki concepts:

> "I think people are monetizing directories wrong. They're just putting AdSense. The opportunity is actually to build software on top of these directories. You use directories to get the traffic, you get all these eyeballs in a particular niche, you build software — now you can use AI to build software instantly — and you get SaaS multiples on that software business, plus the consistent traffic from the directory."

This is structurally the same as the [[services-first-saas]] / [[agent-native-saas]] play, but with **SEO-as-distribution** as the wedge instead of media-as-distribution. Sits cleanly alongside [[media-first-distribution]] as the second free-distribution channel for the agent-SaaS playbook.

## Why this earned its place

- Closes a tactical gap. The wiki has the strategic framing for [[boring-business-automation]] and [[services-first-saas]] but no concrete recipe for getting from zero to first-traffic. This source is that recipe.
- Sits on a domain Finn already shares — multiple Greg Isenberg sources are catalogued, an [[overlook-vertical-landing-pages|SEO-as-funnel]] pattern is already shipping, the [[pier-and-point]] play is content-as-funnel for a similar "build trust → monetize through software" shape.
- Has direct Finn-OS surface: at least 4–5 directory niches Finn has competence-moat candidacy for, captured below and in the backlog.

## Possible Finn-domain directories

Captured against Frey's selection criteria. Backlog page: [[business-ideas-finn-domain-directories]].

| Niche | Why Finn | Volume guess | Risk |
|---|---|---|---|
| **Mastering / mixing engineers near me** | [[overlook-audio]] + Berklee context, audio domain | medium, fragmented | mid (engineers compete with cataloging) |
| **Recording studios by location** (Ventura / California) | Ventura local + audio | low–medium | low (no good incumbent) |
| **Music supervisors directory** (for indie filmmakers) | [[berklee-music-supervision-1]] coursework, Alchemy adjacency | low volume but high LTV per query | low (almost no competition) |
| **TAF/METAR airports + FBOs near me** | aviation training, see also [[business-ideas-taf-metar-decoder]] | low–mid (pilot population is small) | low |
| **Yacht brokers by region** | already paired with [[rustler-42]] case study + [[overlook-vertical-landing-pages]] | low volume but high-fee transactions | mid (yacht industry has incumbents) |
| **Ventura County local services** ("dog parks Ventura," "live music tonight Ventura," etc.) | direct adjacency to [[pier-and-point]], [[ventura-forward]] | medium | low (Ventura SERP is sparse) |

The Ventura angle is the most interesting because it doesn't compete with [[pier-and-point]] — it complements it. Pier and Point is a hyperlocal news outlet; a Ventura directory layer underneath is the same audience and the same operator buying ad inventory.

## Cross-references created

- New concept: [[profitable-directory-pattern]] — methodology, end-to-end
- New concept: [[static-pillar-page-directory]] — the SEO move
- New entity: [[frey-chu]] — first source from this guest
- New entity: [[outscraper]] — Google Maps scraping tool
- New business idea page: [[business-ideas-finn-domain-directories]]
- Updated entity: [[greg-isenberg]] — fourth source captured from this channel
- Updated concepts: [[boring-business-automation]] (directories-as-front-end), [[services-first-saas]] (SEO-as-distribution wedge)

## Open threads

- **Pick a niche.** The whole methodology is gated on niche selection. Worth a 30-minute Ahrefs pass against the candidate list above before doing anything else.
- **Outscraper account.** Not in [[wiki/tech/stack/]] yet — add to scraping-tools page if Finn pulls the trigger on a directory build.
- **Frey's enrichment tool.** Mentioned as "scratch my own itch" not-yet-released — worth checking @freychu on YouTube/X for a launch. If shipped, drops the data-enrichment cost from "weekend" to "afternoon."
- **Reconcile with [[overlook-vertical-landing-pages]].** That batch is also SEO-as-distribution but for service pages, not directories. Same SEO discipline applies (target keyword, comprehensive page, internal linking footer). Possibly: each landing page is a level-zero directory.
- **John Rush episode** — `https://youtu.be/...` (Frey reacted to it virally; episode not catalogued). Likely worth a parallel ingest for a different operator's perspective on the same business.

## Sources

- Raw: `raw/isenberg-frey-chu-directories-2025.md` (paraphrase + metadata)
- Raw: `raw/isenberg-frey-chu-directories-2025.transcript.txt` (~8.6K words)
- Raw: `raw/isenberg-frey-chu-directories-2025.info.json` (yt-dlp metadata)
- Video: https://youtu.be/6rAHkSyzfNA
- Greg's link: https://www.gregisenberg.com/directory
