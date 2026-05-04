---
title: "Pier and Point — Execution Map"
type: business
status: active
tags: [overlook-strategy, ventura, hyperlocal-news, execution, skills-mapping]
created: 2026-04-25
updated: 2026-04-28
weight: high
node_size: 15
sources: [[pier-and-point-research]] [[automated-news-playbook-civic-operators]]
---

## TL;DR

Roughly 70% of the technical build for Pier and Point is something you've already shipped or can wire in cold from existing patterns — Next.js 15, Sanity Studio v3, Vercel ISR, Clerk, Postgres+pgvector, and the RAG-over-docs workflow are all in production across [[overlook-portal-webapp]], [[three-altitudes]], and [[gearflip]]. The genuine unknowns are three: Mastra orchestration, Inngest durable workflows, and Beehiiv, all of which are light lifts compared to the RAG stack you already understand. What will actually determine whether this works is not the tech at all, it's the sales motion (direct sponsorship cold outreach is the single biggest gap), editorial discipline under daily deadline pressure, and a clear answer to whether you want to be a publisher. Time-to-MVP at focused full-time pace is 12–16 working days, spread across 4–6 calendar weeks alongside client work.

---

## The build, layer by layer

### Next.js 15 + App Router
**Already built.** This is your default scaffold for everything. [[three-altitudes]], [[overlook-portal-webapp]], [[gearflip]], and [[ventura-forward-app]] are all Next.js 15 App Router + TypeScript + Tailwind. The patterns in [[next-js-patterns]] cover the gotchas that bite every time (scroll restoration, dynamic vs static exports, the `try/catch → notFound()` error masking trap). Day one for this layer.

### Sanity Growth CMS
**Already built.** You've shipped Sanity Studio v3 embedded in a Next.js app, with GROQ projections, draft mode, visual editing, a working webhook-to-Vercel-deploy chain, and the `NEXT_PUBLIC_` token discipline. [[sanity-patterns]] has all the sharp edges documented from real sessions on [[three-altitudes]]. Pier and Point needs a new schema set (Article, Author, Beat, Neighborhood, Source, Tag, Sponsor, Event) but the shape is simpler than what you already have. The `devProject`, `audioWork`, `hero`, `aviation`, `siteSettings` schemas from [[three-altitudes]] show you've done multi-type content models. New schemas take a day, not a week.

### Vercel deployment + ISR
**Already built.** [[vercel-deployment]] covers everything: deploy hooks, env var mirroring, branch configuration, runtime vs build log diagnosis. You've hit every classic Vercel gotcha already. The only Pier and Point addition is a dynamic `/news.xml` Route Handler for the news sitemap (48-hour rolling window, max 1,000 entries), which is a standard App Router pattern.

### Clerk auth (admin)
**Already built.** [[clerk-auth-pattern]] from [[gearflip]] has the full middleware shape, public/protected split, `<UserButton>` in admin shell, and the RLS-with-service-role pattern for cron bypass. The newsroom admin UI is structurally the same as the GearFlip dashboard — protected routes behind Clerk, public reader-facing pages untouched. Half a day to wire.

### Postgres + pgvector
**Already built.** [[ollama-rag-pattern]] is exactly this: chunks + embeddings stored in the same Postgres DB, pgvector for semantic retrieval, RAG injected into AI prompts. The [[overlook-portal-webapp]] runs it in production on Railway. Pier and Point swaps Railway for Neon (see below) and swaps Ollama `nomic-embed-text` for a hosted embedding model, but the pattern is identical. The editorial queue (`state` enum: `ingested | drafted | under_review | approved | published | rejected`) is just a new table in the same shape as your existing models.

### Neon (vs your current Railway Postgres)
**Trivial extension.** You've run Postgres + pgvector on Railway with Alembic migrations. Neon is the same Postgres wire protocol, so every SQLAlchemy/Drizzle pattern carries over directly. The only new thing is branch-per-PR for safe schema migrations — a perk, not a learning curve. The $19/mo Launch tier fits the launch budget.

### Mastra orchestration
**New territory.** Y Combinator W25, $13M seed Oct 2025, ~22K GitHub stars. Built on top of Vercel AI SDK v6 and gives you Agent, Workflow, RAG, memory, durable suspension, and evals in a TypeScript-native package. The primitives that matter for a newsroom pipeline: `Workflow` (the fetcher-to-drafter-to-fact-checker chain), `Agent` (the individual LLM-backed worker), and `step.suspend()` for blocking the workflow at the human-review gate until an editor action resumes it. You already understand the LLM-routing philosophy from [[hybrid-llm-workflow]], so the mental model is familiar. Realistic estimate to grok the suspension pattern and ship a working fetcher-drafter-fact-checker workflow: **~2 days**. The main gotcha is the Mastra + Inngest or Mastra + Next.js App Router integration, which is documented but has rough edges.

### Inngest cron + durable workflows
**New territory, but light.** The killer feature is `step.waitForEvent("article.approved")` — a durable suspension primitive that lets a workflow sleep for hours while waiting for an editor to act, then resume with the editor's notes as new context. This is exactly the human-in-the-loop gate the newsroom pipeline needs. Inngest's free tier covers the launch volume; pricing only starts mattering at scale. The concepts are straightforward if you've done async queues or webhooks (you have). Estimate: **~1 day** to get cron + the approval suspension gate working.

### BAML structured outputs
**New territory, light.** Boundary ML's BAML defines LLM output schemas in a typed `.baml` file and generates TypeScript client code. For Pier and Point it handles claims extraction (text, who, when, where, source-required boolean) before the fact-check step. Independent benchmarks show it outperforms raw OpenAI Structured Outputs on strict schema adherence. The `baml-cli` workflow is new but the concept is just typed structured output — you already think in TypeScript types. Estimate: **~1 day** to add to the pipeline.

### TipTap admin review UI
**Trivial extension.** TipTap is ProseMirror-based, has a rich TypeScript API, and the extension ecosystem is mature. You've never built with ProseMirror directly, but the Overlook portal's [[client-portal-as-differentiator|admin UX shell]] — split pane layout, inline action buttons (approve / revise / reject), `FeedManager` and `AISummaryPanel` — is the exact pattern to clone into a TipTap-powered review UI. The new pieces are: TipTap editor on the right, source documents + diff view on the left, inline fact-check chips (confidence-scored). That's a React component build, not a framework learning curve. One to two days from the portal shell.

### Beehiiv newsletter
**New territory, but it's a SaaS signup.** Beehiiv has 0% subscription fee (vs Substack's 10%), a built-in referral program, native ad network, and Boosts. The "new territory" here is the newsletter craft itself (see the non-tech gaps below), not the platform — the API is straightforward and the webhook integration into your Next.js signup flow is documented. Sign up, get an API key, wire the subscribe form. **~half a day** for the integration.

### Resend transactional email
**Trivial extension.** React Email components in the repo, Resend API key, same pattern as any Resend integration. You have Resend in the [[gearflip]] open threads already. One afternoon.

### WhisperX self-hosted council transcription
**Already adjacent.** Your [[music-production]] background means you understand audio quality, sample rates, and the difference between a clean studio recording and muffled council chamber audio — that intuition carries directly into WhisperX configuration choices. The [[hardware-setup|M1 Max 64GB]] runs `whisper-large-v3` locally without issue; WhisperX adds pyannote diarization on top for speaker labeling, which is what makes council transcripts useful (distinguishing Mayor X from Councilmember Y). The research notes 88–92% WER on muffled council audio. Setup is a Python environment + model pull, not a dev project. Budget a day for environment setup and calibration on a real council recording; then it's a cron job that runs monthly when new Granicus MP4s are available.

### Anthropic Citations API for fact-check
**New territory, but you use Claude daily.** The Citations API (`citations.enabled=true` in the Anthropic API request) returns source-attributed responses — the model highlights which document passages support which claims. Endex reported source-hallucination rates dropping from 10% to 0% after switching from prompt-engineered citations to the Citations API. For Pier and Point, this is the backbone of the fact-check step: ingest primary documents, run the drafter's claims through Citations API against those documents, composite a confidence score. You already understand the Anthropic API deeply from Claude Code usage. Estimate: **~1 day** to integrate into the fact-check subagent.

### Kimi K2.6 via Vercel AI Gateway
**Trivial extension.** You've already built the [[hybrid-llm-workflow|hybrid LLM mindset]] — Sonnet for judgment, local Ollama for grunt work. Kimi K2.6 via Vercel AI Gateway with Zero Data Retention is just a third tier in the same pattern: cheap bulk drafting at ~$0.80/M input vs Sonnet's $3.00/M. The `ANTHROPIC_BASE_URL` env var trick lets you route Kimi inside the Claude Code UX. The hard requirement: never route confidential source material through Moonshot direct (PRC data jurisdiction). Vercel AI Gateway with ZDR is the right path. Note: K2.5 is now superseded by K2.6 (shipped April 20, 2026) — K2.5's 65% hallucination rate on AA-Omniscience was disqualifying; K2.6 is at 39%, in-band.

### Government data ingestion (CivicEngage RSS, PrimeGov JSON, BoardDocs scrapers, GovDelivery, VCFD JSON, etc.)
**New territory, but mechanical.** The feeds themselves are well-documented in the research: VCFD JSON at `firefeeds.venturacounty.gov/api/incidents`, NWS at `api.weather.gov`, USGS GeoJSON, Sheriff/DA WordPress `/feed/` RSS, PrimeGov undocumented JSON listing at `ventura.primegov.com/api/v2/PublicPortal/ListUpcomingMeetings`, CivicEngage RSS via the Notify Me page, VUSD ParentSquare RSS, GovDelivery per-topic RSS, CHP CAD scrape. None of these require paid credentials or API keys (except AirNow's free key). The [[gcp-credits|GCP Cloud Scheduler heartbeat experiment]] maps directly to this: you've already scoped a Cloud Scheduler + Cloud Tasks pattern for agent scheduling. The alternative is Inngest cron, which you're building anyway. This is mostly TypeScript fetch + JSON parsing + normalization into your editorial queue schema.

> [!note] **April 28 update from [[automated-news-playbook-civic-operators]]**: most of this bundle is already covered by **[[civic-scraper]]** (BSD-licensed Python, Big Local News at Stanford). It handles **Granicus / Legistar / CivicPlus / PrimeGov / Civic Clerk** out of the box — the four platforms most Ventura County agencies use. Pair with **[[openstates]]** for free state-level legislator + bill data, **[[muckrock]]** for FOIA workflow, **[[documentcloud]]** for OCR + annotation. Estimate revised: **~1–2 days** to wire civic-scraper + OpenStates + a thin normalization layer into the editorial queue, instead of the original 3–5 days for from-scratch scrapers.

Original estimate: **~3–5 days** for the full bundle from scratch (kept here for reference if Finn wants to write his own scrapers for visibility/control). With civic-scraper: **~1–2 days**.

### Editorial review checklist + AI prompt log
**New discipline, not infra.** This is a Notion or Markdown document, not a build task. Every published story needs: primary-source link reviewed by editor, arrestee/charged/convicted language verified, named-individual right-of-reply attempt logged, AI prompt and model version logged, confidence score above 60. The practice is what matters, not the tooling. You can scaffold the checklist in a day; building the habit of doing it for every story is the ongoing work.

---

## The [[citymeetings-nyc|Citymeetings.nyc]] design pattern (April 28 update)

The [[automated-news-playbook-civic-operators|April 28 compass artifact]] promotes Vikram Oberoi's [[citymeetings-nyc]] from "directional inspiration" to **the canonical solo-operator template** for AI-assisted civic news in 2026. Specific lifts that change the build:

**Three-step LLM chain, not one.** Oberoi runs: (1) **speaker identification**, (2) **chapter extraction with start/end times and types**, (3) **meeting summary**. This is structurally identical to the planned Mastra workflow but more explicit about decomposition. Don't fold these into a single big prompt.

**Inter-step human review UIs.** This is the load-bearing design choice. **Purpose-built review UIs *between* each LLM step**, not just at the end. Speaker correction panel after step 1. Chapter boundary panel after step 2. By the time the summary lands, the prior layers have been verified by a human. **This is materially different from a typical "AI drafts → human approves" gate where errors propagate undetected through the chain.**

For the [[ai-newsroom-pipeline|TipTap admin UI]], this means: don't build a single review surface. Build three review surfaces, one per LLM step, with an `approve / revise` action at each. Each Inngest `step.waitForEvent("step-N.approved")` resumes only after that layer's gate.

**Skip the official transcript source.** Oberoi pulls video from NYC Legistar but skips Legistar's official transcripts because they lack timestamps and arrive days late. He runs his own transcription with sentence-level timestamps. Apply the same to Ventura: skip Granicus's published transcripts (if any) and run [[whisperx]] on the M1 Max for the meeting audio. Aligns with the existing [[hardware-setup|M1 Max self-host]] plan.

**Publish the prompts.** Oberoi published the full prompts at citymeetings.nyc/nyc-school-of-data-2024. Pier and Point's `/methods` page should publish prompts (or a meaningful summary of them) openly, not just describe the pipeline. This is the [[transparency-premium-as-traffic-strategy|disclosure pattern]] that survived scrutiny across every operator the compass artifact catalogs.

**Comparable scale.** Citymeetings.nyc processes ~80 meetings / 3,000 chapters / 150 hours of video over a typical two-month window. That's roughly Pier and Point's planned cadence (one council/board meeting/night = ~150–200 meetings/year). Same volume tier; same one-person operation; same tooling. Oberoi proves the template works.

For comparison at the enterprise tier: **Hearst's Assembly transcribed 13,119 hours of government meetings May 2024 → April 2025** across all Hearst newsrooms (see [[hearst-assembly]]). 20–40x the volume, but the same click-timestamp-to-verify human gate. The structural lesson: **even at enterprise scale, the inter-step human review is mandatory**.

---

## Skill gaps that aren't tech

These are the real risks. Be honest with yourself about each one before committing.

**Sales motion and sponsorship cold outreach.** The research puts $30–50K of year-1 revenue on 6–10 direct sponsorship anchors at $400/week newsletter + $600/month banner + $1,500/month section. You don't currently run a sales pipeline — Overlook clients come through reputation and referral, not outbound. Cold outreach to Ventura restaurants, real estate brokerages, and Visit Ventura tourism partners is a different muscle: rate card, insertion order template, follow-up cadence, objection handling, renewal calls. LION Publishers median for a year-old outlet with a dedicated revenue person is 7× the median without one. You are the revenue person. This is probably the single biggest non-tech gap in the entire project.

**Editorial discipline and journalistic judgment.** The arrestee/charged/convicted distinction, the named-individual right-of-reply attempt before publication, source tier weighting (primary doc vs press release vs social media), knowing when a story is actually ready vs just drafted. These are teachable habits but they require a deliberate new headspace — you're not doing this on agency projects. An editorial checklist is necessary but not sufficient; the habit needs daily repetition before it becomes reflexive.

**Defamation literacy and media liability.** California's framework (Sullivan actual malice for public figures, Brown v. Kelly negligence for private figures, §48a retraction cure, §425.16 anti-SLAPP) is manageable with reading and a one-hour legal consult, but it's a new domain. The practical floor before the first police-blotter or official-conduct story: read the RCFP state-law guide for California, consult CNPA's free legal hotline, bind media liability insurance (confirm in writing that human-edited AI-assisted content is covered). See [[ai-journalism-legal-posture]].

**Newsletter copy as a daily craft.** A good Ventura morning newsletter reads like it was written by someone who walked the pier at 6am and cares about the city. That's a different register than agency client work or portfolio copy. You're a strong writer — the question is whether you have the energy to develop and sustain a distinct editorial voice under daily deadline pressure. The first 14 days of hand-curated newsletter (before pipeline automation kicks in) will be the actual test.

**Community presence and founder-as-face trust-building.** AI-disclosed news is a fragile category. The research notes 94% of readers want disclosure, but credibility still flows from a real person who shows up at council meetings, responds to reader corrections, has their name on bylines, and is visibly part of the city. You have genuine Ventura roots (the `34.2746° N  119.2290° W` coordinate is not decoration) and existing audience surfaces through [[three-altitudes]] and [[overlook-strategy-positioning]]. But showing up in that way — community events, Reddit r/ventura, source cultivation — takes time that competes directly with client work.

---

## What Pier and Point shares with existing Overlook work

**Admin review UX.** The [[client-portal-as-differentiator|Overlook client portal]] admin shell — the split-pane layout, feed managers, notice banners, approve/dismiss/publish actions — is the direct ancestor of the TipTap-based newsroom review UI. Clone `AdminSidebar.tsx`, `FeedManager.tsx`, `AISummaryPanel.tsx` as the starting skeleton. The `AISummaryPanel` draft-review-publish pattern from the portal's weekly summary feature is functionally identical to the newsroom's draft-review-publish workflow.

**RAG over published archive.** The [[ollama-rag-pattern|RAG-over-documents pattern]] from the Overlook portal — upload document, chunk, embed with `nomic-embed-text`, store in pgvector, retrieve top-5 for context injection — is identical to the voice-consistency RAG that keeps Pier and Point's AI drafts sounding like the outlet, not like a generic news bot. The production pattern is already in your codebase; swap the embedding model to a hosted one and point the chunks at your published article archive.

**Hybrid LLM routing.** The [[hybrid-llm-workflow|hybrid LLM mindset]] (Sonnet for judgment, local/cheap for grunt) extends directly to the newsroom three-tier: Kimi K2.6 for cheap bulk drafts, Sonnet 4.6 for fact-check and editorial voice, Haiku for fetch and classification. You already live in this mental model; the newsroom just adds a named third tier.

**Visual identity.** The [[next-js-patterns|monochromatic Tailwind-only aesthetic]] — white bg, `text-neutral-900`, `border-neutral-100/200` — is Pier and Point's starting visual identity. Pier and Point probably needs more warmth than the Overlook portal (local news should feel approachable, not cold), but the discipline of "Tailwind only, no new component libraries" is the right constraint.

**Sanity schema shape.** [[three-altitudes]] already has `devProject`, `audioWork`, `hero`, `aviation`, `siteSettings`. The Pier and Point equivalent (Article, Author, Beat, Neighborhood, Source, Tag, Sponsor, Event) is the same shape extended. GROQ projections, draft mode, the Sanity-to-Vercel webhook chain — all already documented in [[sanity-patterns]] and personally battle-tested.

**`formatCents()` discipline.** Membership pricing tiers ($8/mo, $80/yr, $200 founder, $1,000 patron) and sponsor rate card values all route through `formatCents()` from `lib/utils.ts`. Bring the helper forward from the Overlook codebase.

---

## What Pier and Point shares with the Ventura Forward app

**Critical: these are two different things.** [[ventura-forward-app]] is a civic reporting tool — a Supabase-backed "Report It" form for trash, graffiti, potholes, hazards — built for a client. Pier and Point is Finn's own publication. They share geography but have completely different owners, models, and purposes. If both are live, make sure there is zero brand confusion: Ventura Forward is a civic app for the client, Pier and Point is an independent news outlet for Finn under [[overlook-strategy-positioning|Overlook Strategy]].

That said, the overlap is real:

- Same geography means the Ventura Forward Report It data stream (with client permission) could feed Pier and Point's tip line — a photo of a pothole at Seaward and Harbor could become a brief in the newsletter.
- The Supabase stack on [[ventura-forward-app]] (Postgres + Storage + RLS + Vercel) is adjacent to Neon + Vercel on Pier and Point. Different vendors, same pattern knowledge.
- If both are live and gaining traction, there's a cross-promotion surface — Ventura Forward users are civic-minded locals who are also the exact Pier and Point target audience.
- The client relationship adds risk: if [[ventura-forward]] client sees Pier and Point as overlapping or competing, that's a conversation to have before launch, not after.

---

## Realistic time-to-MVP estimate

Based on Phase 1 of the research roadmap, and calibrated to your actual pace on comparable projects:

**Week 1 (2–3 focused days):** Repo scaffold, Sanity schemas, Clerk admin auth, basic Next.js site shell, Neon Postgres set up with pgvector extension, Vercel project connected. You've done this exact scaffold on [[gearflip]] and [[overlook-portal-webapp]]. The Sanity schema set for Article, Author, Beat, Neighborhood, Source, Tag, Sponsor, Event is a half-day. No new patterns here.

**Week 2 (1 day coding + legal review time):** All 14 editorial policy pages drafted and posted: About, Ethics, AI Usage, Corrections, Sourcing, Naming, Privacy, Comment, DMCA, Contact, plus the press credential applications to VPD and VCSO filed. The policies are writing work, not dev work — a day to draft, then time waiting for legal review via CNPA's free hotline. LION Publishers membership joined ($140). Domain locked.

**Week 3 (3–4 focused days):** Mastra workflow scaffold (fetcher subagent → drafter subagent → fact-checker stub), Inngest cron for the first two government feeds (VCFD JSON + NWS), TipTap admin review shell cloned from the Overlook portal admin UX. This is where the genuine new-territory work is. Budget extra time for Mastra's suspension primitive — it's well-documented but new patterns take longer than familiar ones.

**Week 4 (3–4 focused days):** First 5–10 hand-crafted launch stories (written fully by you, to seed the voice and set the bar), Beehiiv signup wired, brand polish, media liability insurance bound. The stories are editorial work, not dev work — if you're writing 5–10 real Ventura pieces cold, that's 2–3 days of reporting and writing, not 2–3 hours.

**Total: 12–16 focused working days for a genuine MVP.** Spread over 4–6 calendar weeks given active Overlook client work. The hard constraint is the GNI Growth Catalyst deadline of May 7, 2026 — that's 12 days from today, which is not enough time to have an MVP live, but you could have a credible application with a published site shell and the first few stories if you start immediately and prioritize the application over polish.

---

## The honest "should you?"

Not a yes-or-no. Four questions to answer before committing:

**Do you want to be a publisher?** Running a news outlet is a distinct identity from running an agency. It means being the editorial voice of a place, having your name on stories that will be contested, attending public meetings, being accountable to readers as a journalistic institution. [[overlook-strategy-positioning]] is `MODULE_01` under "Finn Bennett" — Pier and Point would be a fourth module, and a demanding one. The PILOT / PRODUCER / DEVELOPER tags on [[three-altitudes]] don't include PUBLISHER. Does that feel additive or diluting?

**Is 25–35 hours per week sustainable alongside Overlook client work?** The research's time breakdown is honest: ~10 hours editorial review/approve, ~5 hours original reporting, ~5 hours sales/business, ~3 hours newsletter QA, ~3 hours social/community, ~3 hours product/code, ~2 hours admin. That is a second full-time job at 31 hours in the optimistic scenario. Unless you contract Overlook client work down substantially, or hire a freelance fact-checker immediately (the $800–$1,500/month Phase 4 hire should probably be Phase 1), this schedule doesn't work.

**Does the Ventura Forward client become a partner, a competitor, or unaffected?** This is a concrete question to answer with the client before launch, not something to assume. They might love the cross-promotion angle. They might feel Pier and Point is in their lane. Get clarity.

**Does the GNI Growth Catalyst May 7 deadline force the decision earlier than you want?** $100K + Blue Engine coaching is a meaningful grant. But applying under pressure before you've decided you actually want to do this, and before you have a live site to point to, may produce a weak application. LION Sustainability Audit ($20K) has no published deadline and is the safer first grant to pursue.

---

## Related

- [[pier-and-point]]
- [[pier-and-point-research]]
- [[pier-and-point-monetization]]
- [[automated-news-playbook-civic-operators]]
- [[ai-newsroom-pipeline]]
- [[ai-journalism-legal-posture]]
- [[citymeetings-nyc]]
- [[hearst-assembly]]
- [[civic-scraper]] / [[openstates]] / [[muckrock]] / [[documentcloud]]
- [[transparency-premium-as-traffic-strategy]]
- [[human-moat-pattern]]
- [[ai-news-failures-curriculum]]
- [[overlook-strategy-positioning]]
- [[three-altitudes]]
- [[overlook-portal-webapp]]
- [[ventura-forward-app]]
- [[hybrid-llm-workflow]]
- [[ollama-rag-pattern]]
- [[sanity-patterns]]
- [[next-js-patterns]]
- [[clerk-auth-pattern]]
- [[vercel-deployment]]
- [[client-portal-as-differentiator]]
- [[hardware-setup]]
- [[music-production]]
- [[gcp-credits]]
- [[identity-and-brand-architecture]]

---

## Sources

- [[pier-and-point-research]] — original April 25 research
- [[automated-news-playbook-civic-operators]] — April 28 compass artifact, broader operator landscape
- Raw files:
  - `/Users/finnbennett/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/raw/pier-and-point-research.md`
  - `/Users/finnbennett/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/raw/automated-news-playbook-civic-operators.md`
