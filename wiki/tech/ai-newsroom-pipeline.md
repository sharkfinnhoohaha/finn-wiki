---
title: "AI Newsroom Pipeline (Sanity + Mastra + Kimi/Claude)"
type: tech
tags: [tech, ai, newsroom, sanity, mastra, inngest, claude, kimi, pipeline, reusable]
created: 2026-04-25
updated: 2026-04-28
weight: high
node_size: 10
sources: [[pier-and-point-research]] [[automated-news-playbook-civic-operators]]
---

## TL;DR

End-to-end pipeline for AI-drafted content with human review: sources are ingested on a cron, passed through a Mastra agent workflow that drafts cheap (Kimi K2.6) and fact-checks with care (Claude Sonnet 4.6 + Citations API), then surfaced as Sanity drafts behind a TipTap review UI gated by an Inngest durable suspension step. Built for a solo founder running a content product, not a dev team. API costs at 100 articles/month run about $1.80 with Kimi draft + Sonnet fact-check, but cost is the last thing to optimize for at that volume — reliability, source confidentiality, and editorial quality are the real variables.

---

## End-to-end shape

```
SOURCES → INGEST (Inngest cron) → Postgres+pgvector → AI WORKFLOW (Mastra)
  → Sanity drafts → /admin review UI (Next.js + TipTap + Clerk)
  → Sanity publish → Vercel ISR
  → Resend (transactional) + Beehiiv (newsletter) + Google News + Discover
```

**Walking each arrow.** Sources (RSS, JSON feeds, council audio, scrapes) are pulled on an Inngest cron job and landed in Postgres with a `state` enum column. Mastra orchestrates the AI workflow: fetcher agent pulls the raw source bundle, drafter agent turns it into a structured draft, fact-checker agent runs Citations API verification and scores every claim. The finished draft is pushed to Sanity as an unpublished document. The `/admin` review UI — Next.js App Router, TipTap editor, Clerk auth — surfaces the draft with source highlights, fact-check chips, and diff view. An Inngest `step.waitForEvent("article.approved")` holds the workflow in suspension until the editor clicks Approve, Request Revision, or Reject. On approval, the Sanity document is published, which triggers Vercel ISR to rebuild the article page. Resend handles transactional mail (confirmation, alerts). Beehiiv handles the newsletter. Published articles surface in Google News and Discover via `/news.xml` and NewsArticle JSON-LD.

---

## The opinionated picks

### CMS: Sanity Growth ($15/mo)

Studio v3 is a React app that colocates inside the Next.js repo. GROQ + mutation API is the cleanest target for AI agents pushing drafts into Content Lake. Images (WebP/AVIF, hotspot, on-demand crops) are handled natively. Scheduled drafts and revision history are first-class without extra plumbing. See [[sanity-patterns]] for the token config, webhook filter, and draft-mode gotchas that already surfaced on [[three-altitudes]].

Passed on: Payload 3 is principled and TS code-first, but Payload Cloud has been paused for new signups since the Figma acquisition (June 2025), so you'd self-host. TinaCMS is a real no — Git PRs are the wrong workflow for breaking-news scheduling (this callout is for you specifically: [[somliøya]] uses TinaCMS; moving any news-cadence product there would be a bad time). Contentful is overpriced for solo. Hygraph has rate-limited mutations that hurt AI bursts. Decap has been stagnant since Netlify deprecated it.

### Orchestration: Inngest

`step.waitForEvent("article.approved")` is the load-bearing primitive: durable suspension that can sleep for hours or days waiting for a human to make a decision. That maps exactly to a human-in-the-loop review gate. Trigger.dev v3 is the OSS alternative with no timeouts and explicit Claude Agent SDK examples in the docs; either works. Avoid: Vercel Cron alone (no durable workflows), Temporal (overkill for one newsroom), n8n past ~20 nodes.

### Database: Neon Postgres + pgvector ($19/mo Launch)

Editorial queue with `state` enum: `ingested | drafted | under_review | approved | published | rejected`. Embeddings for voice-matching RAG over your published archive. History tables. Branch-per-PR for safe schema changes. pgvector handles up to ~1M chunks without needing Pinecone or Turbopuffer — hyperlocal volumes won't touch that ceiling. Supabase is the all-in-one alternative if you want auth + storage + realtime in the same tier.

### AI orchestration: Vercel AI SDK v6 + Mastra + BAML

Mastra (YC W25, $13M seed Oct 2025, ~22K GitHub stars) layers on top of Vercel AI SDK v6 and gives you Agent, Workflow, RAG, memory, evals, and durable suspension in one coherent TypeScript package. BAML handles schema-strict structured outputs — citations, named entities, fact-checked claims — and beats raw OpenAI Structured Outputs in independent tests. **Do not use LangChain JS**: verbose, weak TS DX, weekly breaking changes; the production ecosystem has migrated off.

### Email: Resend Pro ($20/mo for 50K) + Beehiiv (free to Grow at $39/mo at 10K subs)

React Email components live in the repo. Resend for transactional (confirmations, digest triggers, alerts). Beehiiv for the newsletter: 0% subscription fee, native ad network, built-in referral program, Boosts. Buttondown ($9/mo, 1K subs) is the simpler Markdown-first alternative if you don't need the ad network.

### Search: pgvector + Postgres `tsvector` hybrid

Free, already in the same DB, handles both keyword and semantic queries. Typesense Cloud (~$7/mo) is the upgrade path if you want Algolia-style instant search with typo tolerance and faceting.

### Auth: Clerk free tier (50K MRU 2026)

Native App Router middleware, passkeys, no custom session plumbing. **Skip Auth.js v5**: CVE-2025-29927 is a middleware bypass and the migration from v4 is still churning. WorkOS AuthKit is the right pick if you ever sell newsroom dashboard access to other orgs.

### Review/approve UI: TipTap (ProseMirror)

Better extension ecosystem than Lexical, first-party Liveblocks integration if you ever add a second editor. Layout is a split pane: source documents and primary records on the left with cited quotes highlighted and a diff view of prior drafts; TipTap editor on the right with inline fact-check chips (red / yellow / green confidence based on independent citation count and source-tier weighting). Four actions: Approve, Request Revision, Reject, Publish. "Request Revision" emits an Inngest event that resumes the suspended Mastra workflow with the editor's notes injected as new context — the draft comes back around with the feedback baked in.

> [!note] **April 28 update from [[citymeetings-nyc|Citymeetings.nyc]] / [[automated-news-playbook-civic-operators|compass artifact]]**: don't build a *single* review surface. Build **inter-step review UIs** between each LLM step in the workflow — speaker correction panel after speaker ID, chapter boundary panel after chapter extraction, claim verification before draft generation. Vikram Oberoi's pipeline runs `step.suspend()` between each LLM call, not just at the final draft. **This is materially different from a typical "AI drafts → human approves" gate where errors propagate undetected through the chain.** Each step's gate has its own Inngest `step.waitForEvent("step-N.approved")`. See [[citymeetings-nyc]] for the canonical implementation (prompts published openly at citymeetings.nyc/nyc-school-of-data-2024).

---

## Model routing: the hybrid pattern

### `fetcher`

Claude Haiku 4.5 ($1/$5 per Mtok input/output) or Kimi K2.6 instant. Runs MCP fetch + RSS + Firecrawl over the source bundle. This step is high-volume and low-judgment — don't burn Sonnet tokens here.

### `drafter-cheap`

Kimi K2.6 via Vercel AI Gateway or DeepInfra ($0.55–0.80 / $2.20–3.50 per Mtok). Temperature 0.6. Structured `[SOURCE: url]` markers inline throughout the draft. This is where you save 4–8x on tokens for bulk drafting. K2.6 (released April 20, 2026) dropped hallucination rate from 65% (K2.5 on AA-Omniscience) to 39%, in-band with Claude Opus 4.7 at 36% — K2.5 was disqualifying for journalism; K2.6 is not.

### `fact-checker`

Claude Sonnet 4.6 ($3/$15 per Mtok) with prompt-cached AP-style guide + house style guide. 1M context window. **Citations API on** (`citations.enabled=true`) over raw ingested documents and pgvector-retrieved past coverage. This is the editorial quality gate, not a place to cut costs.

### `spanish-translator`

Claude Sonnet 4.6. Best Spanish quality in the comparison — relevant any time you're serving a bilingual readership.

### `publisher`

Haiku 4.5 or a scripted step. Emits CMS-ready JSON and calls the Sanity mutation API. No judgment required here.

**Cost per 800-word article** (draft + fact-check loop, 100 articles/month):

| Stack | Per article | Monthly (100 articles) |
|---|---|---|
| Kimi K2.6 draft + Sonnet 4.6 fact-check | ~$0.018 | ~$1.80 |
| Sonnet 4.6 only | ~$0.035 | ~$3.50 |
| Kimi K2.6 only | ~$0.007 | ~$0.70 |

At this volume cost is not the deciding variable. Reliability, source confidentiality, and editorial quality are.

**Trick worth knowing.** `ANTHROPIC_BASE_URL` lets Claude Code route to any Anthropic-compatible endpoint. You can run Kimi K2.6 inside the Claude Code UX with internal model tier aliases (Haiku / Sonnet / Opus) all mapped to Kimi for parallel exploration jobs — same as the pattern in [[hybrid-llm-workflow]].

**Privacy hard rule.** Confidential source material goes through Vercel AI Gateway with Zero Data Retention, or self-hosted. **Never through Moonshot direct** — PRC jurisdiction, explicit training-on-input rights in their ToS. Anthropic commercial API is default no-training, 7-day retention (down from 30 days since Sept 2025), with ZDR available via signed enterprise addendum. **Do not use claude.ai consumer Pro/Max for production work**: opt-in training default, 5-year retention since Sept 2025.

---

## Voice consistency: RAG, not fine-tuning

Fine-tuning is wrong below ~1,000 example articles: catastrophic forgetting risk, days of iteration cost, vendor lock. The right pattern:

1. ~800-token system prompt with the style guide (AP style + publication-specific conventions)
2. 3–5 rotating few-shot exemplar articles per beat
3. pgvector RAG over the published archive: top-5 semantically similar past articles injected as context

Voice drift handles itself as the archive grows — the exemplars stay current with the publication's actual voice. This is a direct extension of the [[ollama-rag-pattern]] already running in the [[overlook-portal-webapp|Overlook portal]], swapping Ollama + mistral for Kimi/Sonnet and wiring the embeddings into the editorial queue rather than a document Q&A flow.

---

## Fact-check layer in detail

BAML extracts claims from the draft: text, who, when, where, source-required boolean. The Anthropic Citations API (production-grade since Jan 2025, on Bedrock since June 2025) verifies each claim against:

- Ingested source documents for the article
- pgvector-retrieved past coverage (top-5 semantically similar)
- Canonical source corpus

Confidence scoring composites three signals:

| Signal | Weight |
|---|---|
| (a) Number of independent supporting citations | primary |
| (b) Source-tier weight: primary docs > government press releases > other news outlets > social media | secondary |
| (c) Claude logprob on the assertion | tiebreaker |

**Block one-click publish if any claim scores below 60.** The benchmark to aim for: Endex reported source-hallucination dropping 10% to 0% with a 20% increase in references after switching from prompt-engineered citations to the Citations API.

> [!note] **April 28 update — companion anti-hallucination patterns** (per [[automated-news-playbook-civic-operators]]):
>
> - **[[quote-then-answer-pattern|Anthropic quote-then-answer]]** — wrap retrieved docs in `<documents>` XML, instruct the model to extract verbatim `<quotes>` first, then write `<answer>` referencing them. Stanford HAI baseline: 15–20% hallucination on factual queries without grounding, near-zero with governed RAG. The Citations API automates this; the manual version of the pattern applies to non-Anthropic models (Kimi K2.6, GPT-5).
> - **"According to" prompting** — prefix every assertion with "According to <source>". Makes hallucinated sourcing visually obvious.
> - **Explicit uncertainty constraint** — "if unsure, respond 'I don't know.'" Models default to confabulation without this.
> - **LLM-as-judge with a different model family** than the writer — Sonnet drafts → GPT-5 judges (or vice versa). Avoids self-preference bias.
> - **Citation-fidelity check post-generation** — extract `[source: doc_id]` tags from the answer, mechanically verify the cited document chunk actually contains the claim. Models can hallucinate citations themselves; structured output is necessary but not sufficient.
> - **Bloomberg's three-bullet AI summaries needed 36+ corrections by end of March 2025** but were defended on grounds journalists retained pre/post-publication control. The defense survives only if the human-in-the-loop is real.

---

## Image pipeline

Sanity Assets is the primary store: auto WebP/AVIF conversion, hotspot metadata, on-demand crops. Vercel `next/image` handles responsive serving at the render layer. Stock images surface through a search panel inside the admin UI hitting the Unsplash, Pexels, and Pixabay APIs.

**Hard editorial rule encoded in the publish action:** every image upload requires a `provenance` field (`original_photo | wire | stock | ai_illustration`). Publish is blocked if `ai_illustration` is set without an explicit caption label disclosing it. Adopt the AP/Reuters line: never AI-generate photorealistic depictions of real events, real people, or real places.

---

## Local SEO essentials

`schema.org/NewsArticle` JSON-LD on every article: `headline`, `datePublished`, `dateModified`, `author` as `Person`, image array with 1x1 / 4x3 / 16x9 crops, `publisher` Organization with logo, `articleSection`. `NewsMediaOrganization` and `LocalBusiness` schema on home and About pages.

Google News inclusion is algorithmic since April 25, 2024 — manual Publisher Center submission is deprecated. Focus on signals: clear bylines, About/Editorial Standards page, transparent ownership, AI disclosure, news sitemap.

`/news.xml` is a dynamic Route Handler in App Router: only URLs from the last 48 hours, max 1,000 entries. **Skip AMP** — deprecated for News rankings since 2021.

Core Web Vitals targets after the March 2026 update: LCP < 2.5s (under 2.0s for competitive Discover), INP < 200ms (effective threshold ~150ms), CLS < 0.1.

---

## Source-data ingestion patterns

Free and broadly safe: government RSS/JSON feeds, NWS, USGS GeoJSON, AirNow (free with key), NOAA Tides, NDBC buoys, CivicEngage/PrimeGov/BoardDocs meeting feeds, county open data portals.

**April 28 update — civic ingestion toolchain** (per [[automated-news-playbook-civic-operators]]):

- **[[civic-scraper]]** — BSD-licensed Python, maintained by Big Local News at Stanford. Handles **Granicus / Legistar / CivicPlus / PrimeGov / Civic Clerk** out of the box. The four platforms most Ventura County agencies use. **Use this instead of writing your own scrapers.**
- **[[city-scrapers]]** — City Bureau's project, foundation of Documenters.org, extends civic-scraper's coverage to hundreds of agencies.
- **[[openstates]]** — free API for state-level legislator + bill data across all 50 states. Pairs with civic-scraper for state-and-below coverage.
- **[[muckrock]]** — FOIA workflow management (relevant once original-reporting cadence is established and the operation files CPRA requests).
- **[[documentcloud]]** — OCR + collaborative annotation of received PDFs.
- **[[hearst-assembly]]** — Hearst's internal AI tool (not a product). Transcribed 13,119 hours of meetings May 2024 → April 2025. **Benchmark for what's achievable inside a major-publisher tooling stack.** Pier and Point at ~150–200 meetings/year = ~300–600 hours = 1/40th of Hearst's volume with the same disclosure + verification posture.
- **Chalkbeat's LocalLens** — monitors 80+ school districts in 30 states. Reference for the school-board beat at scale.

Audio transcription options: WhisperX large-v3 + pyannote self-hosted on M1 Max (free, ~88–92% WER on muffled meeting audio). API alternatives: AssemblyAI / Deepgram / OpenAI Whisper API at roughly $3–5/month for 12 hours of council audio.

Legal posture: *hiQ v. LinkedIn* (9th Cir. 2022) + DOJ 2022 memo say scraping public unauthenticated pages is not a CFAA violation; ***Meta v. Bright Data*** (Judge Chen, Jan 2024) granted SJ for Bright Data — logged-out scraping doesn't breach Meta TOS; ***X Corp v. Bright Data*** (2024) same result. **robots.txt is not law but a contractual signal** — ignoring it gets cited as evidence of bad faith; the *[[ai-journalism-legal-posture|Cohere]]* court noted this in finding plausible willfulness. Breach-of-contract and trespass-to-chattels claims survive narrowly. Hard rules: **never scrape paywalled sources**, never feed copyrighted ledes into AI prompts, respect robots.txt, identifiable user-agent, reasonable rate limits, no fake accounts, no auth bypass, document the scraping policy publicly. *AP v. Meltwater* (S.D.N.Y. 2013) holds near-verbatim AI summaries carry fair-use liability; ***Advance Local v. Cohere*** (Nov 2025) extended this to **substitutive summaries** that mirror sequencing and tone of source articles. See [[ai-journalism-legal-posture]].

---

## What this stack is NOT good for

Be honest with yourself before committing:

- **Real-time collaborative editing.** Two editors in the same document needs Liveblocks or a move off Sanity entirely.
- **Heavy media at scale.** Sanity Content Lake handles images well. Live video and podcasts at scale need Mux or a dedicated media pipeline — don't jam them through Content Lake.
- **Multi-org / enterprise tenancy.** Clerk free tier caps and Sanity's workspace model are built for one organization. Selling newsroom dashboard access to multiple orgs means rethinking both.
- **High-frequency or financial-grade data.** Neon Postgres on the Launch tier is fine for an editorial queue with hundreds of rows. It's not OLTP at scale.

---

## Related

[[pier-and-point]] — [[pier-and-point-execution]] — [[ai-journalism-legal-posture]] — [[citymeetings-nyc]] — [[hearst-assembly]] — [[civic-scraper]] — [[openstates]] — [[muckrock]] — [[documentcloud]] — [[quote-then-answer-pattern]] — [[transparency-premium-as-traffic-strategy]] — [[automated-news-playbook-civic-operators]] — [[sanity-patterns]] — [[ollama-rag-pattern]] — [[hybrid-llm-workflow]] — [[clerk-auth-pattern]] — [[next-js-patterns]] — [[vercel-deployment]] — [[token-conservation-mindset]]

---

## Sources

- [[pier-and-point-research]] sections 5 and 6
- [[automated-news-playbook-civic-operators]] sections 1, 2, 3 (April 28 update)
- Raw files:
  - `/Users/finnbennett/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/raw/pier-and-point-research.md`
  - `/Users/finnbennett/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/raw/automated-news-playbook-civic-operators.md`
