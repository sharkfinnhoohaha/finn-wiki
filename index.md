# Index

Catalog of every page in the wiki. Organized by type. Claude updates this on every ingest.

## Two tiers

This vault has two parallel structures (see `CLAUDE.md` for the full model):

- **`wiki/`** — encyclopedic, Claude's memory of everything. The rest of this index.
- **`Finn-OS/`** — Finn's curated thinking space. Has its own [[Finn-OS/README|index]]. Top entry points:
  - [[Finn-OS/now|now]] — what's on Finn's mind THIS WEEK
  - [[Finn-OS/ideas/backlog|ideas/backlog]] — raw idea dump
  - [[Finn-OS/career/goals|career/goals]] — 6mo / 2yr / 5yr direction
  - [[Finn-OS/reviews/weekly|reviews/weekly]] — rolling weekly review

## Projects

**Start here:** [[status-dashboard]] — at-a-glance view of every coding project by status (in-progress / unfinished / abandoned / deployed).

### In-progress (14) — `wiki/projects/in-progress/`

- [[three-altitudes]]: Cinematic four-stage scrolling portfolio site, Next.js + Three.js + Sanity
- [[overlook-portal-webapp]]: Client portal for overlookstrategy.com, Next.js + FastAPI/Railway
- [[gearflip]]: Music gear arbitrage app, paused after Clerk integration
- [[copper-and-cast]]: Outdoor catalog rebrand + 3D Subaru Outback Wilderness model
- [[waveshade]]: Ventura sunglasses e-commerce (Medusa + Next.js storefront)
- [[overlook-boilerplates]]: 5 Overlook Strategy boilerplate repos on GitHub
- [[ventura-forward-app]]: Civic "Report It" feature with Supabase
- [[johnson-aviation]]: Client marketing site (jacair.com) from shared template
- [[gemini-usage-tracker]]: iOS/macOS Swift app, PR #1 open
- [[riptide]]: Overlook Audio hardware product (PCB, firmware, CAD)
- [[somliøya]]: Next.js + TinaCMS client site
- [[berklee-music-supervision-1]]: Lessons 10/11/12 coursework for Alchemy (CBS)
- [[notion-life-os]]: Personal Life OS in Notion (6-area buckets)
- [[hybrid-llm-workflow]]: Local LLM + Sonnet hybrid setup

### Unfinished (5) — `wiki/projects/unfinished/` — the "80% pile"

- [[finn-bennett-dotcom]]: Maintenance page, blocked on Vercel CLI tooling
- [[latency-optimizer]]: Audio latency tool, blocked on API key
- [[admin-client-app-template-ovlk]]: Shipped template, superseded by Overlook portal
- [[kb]]: Knowledge-base project, session interrupted mid-audit
- [[iamhumantoo]]: Purpose unclear, no real CC transcripts captured

### Abandoned (19) — `wiki/projects/abandoned/`

- Never past concept: [[subawoo]], [[starcommand]], [[echomind]], [[finn-portfolio-worktree-exploration]]
- Scaffolds: [[vite-react]]
- Duplicate Vercel slugs: [[grannen-lodge-variants]], [[overlook-strategy-final-v1-variants]], [[frontend-duplicate-slug]], [[ventura-forward-admin-duplicate]], [[ovlkstratredo]]
- Low-signal experiments: [[due-date]], [[mixnote-landing]], [[aviation-theme-cp-aviation]], [[sealth]], [[project-gpt2c]], [[index-playground]], [[html-index-copy-paste]], [[gimmerefs]], [[notion-cms-app]]
- Consolidated archive page: [[abandoned-archive]]

### Deployed (13) — `wiki/projects/deployed/`

- [[metacheck]]: metacheck-ten.vercel.app, shipped clean
- [[overlook-audio-site]]: Older Overlook Audio brand phase
- [[finn-v2-portfolio]]: Current live portfolio (until three-altitudes takes over)
- [[somlioya-nextjs-deprecated]]: Predecessor to current Sømliøya
- [[cms-kit-sanity-deployed]]: Sanity starter kit reference
- [[grannen-lodge-main]]: Canonical client deploy
- [[overlook-strategy-final-v1-main]]: Earlier brand/site version, stable
- [[overlook-invoice-pay]]: Client invoice flow, live
- [[spencers-dashboard]]: One-off client dashboard
- [[rustler-yachts-redesign]]: Rustler 42 client website, shipped
- [[portal-landing-page]]: Landing for Overlook portal (ERROR state — flag)
- [[fbdotcom-underdev]]: Interim finnbennett.com
- [[file-organization-pass]]: 15-year file org pass on Mac (shipped)

## Clients

- [[rustler-42]]
- [[somliøya]] (also a project)
- [[all-in-one-music]]
- [[ventura-forward]] — recurring $300 retainer (NOT to be confused with the [[pier-and-point]] news venture, see warning callout on the page)

## Entities

### People & organizations

- [[finn-bennett]]: Anchor identity. Founder of [[overlook-strategy]] and [[overlook-audio]]
- [[overlook-strategy]]: Branding/web dev studio. GitHub org `Overlook-Strategy`
- [[overlook-audio]]: Hardware/firmware brand
- [[zach]], [[jack-finn]], [[big-mike]], [[jack-bock]], [[thijs]], [[pedram]], [[marijke]]: Music/web collaborators
- [[dad-and-kelly]]: Income source in Life OS
- [[kelly-bennett]]: Entertainment attorney, family member, client of [[overlook-strategy]]
- [[black-sand-pictures]], [[cbs]], [[amblin-television]]: Berklee Music Supervision context
- [[brad-hatfield]], [[john-depaola-quartet]], [[scott-robinson]], [[extreme-music]]: Music rights holders cited in cue sheets
- [[anthropic]]: Maker of [[claude-code]] / Claude / Cowork — the platform Finn's hybrid stack runs on
- [[andrej-karpathy]]: Originator of the LLM Wiki pattern, author of [[karpathy-autoresearch|autoresearch]]
- [[nate-herk]]: Published the Obsidian + Claude Code implementation walkthrough
- [[vannevar-bush]]: Author of the 1945 Memex essay
- [[greg-isenberg]]: Startup Ideas podcast host, author of the 30-step agent-SaaS playbook
- [[cody-schneider]]: Founder / Shopify-app operator, guest on Isenberg's paid-Chrome-extension thesis episode
- [[scott-belsky]]: Behance founder / ex-Adobe CPO, quoted on orchestration as the new interface layer

### Tools & services

- [[vercel]], [[railway]], [[sanity]], [[tinacms]], [[notion]], [[supabase]], [[clerk]], [[ollama]], [[pgvector]], [[shopify]], [[wave]], [[sentry]]
- [[fastapi]], [[sqlalchemy]], [[alembic]], [[postgres]], [[tailwind]]: Core stack (backend + frontend)
- [[gsap]], [[lenis]], [[shadcn-ui]], [[stripe]], [[medusa]], [[slowapi]], [[gemini-api]]: Supporting tools
- [[alchemy]]: CBS TV Movie (Music Supervision 1 coursework)
- [[heyismail-life-os]]: Inspiration source for Notion Life OS
- [[stack-tools]]: Hub page for all tools at a glance
- [[apollo-twin-x-duo]]: Pro audio interface (used as GearFlip example listing)
- [[elevenlabs]]: TTS / voice synthesis (audio production reference)
- [[three-js]]: WebGL 3D library — used in [[three-altitudes]], [[copper-and-cast]], [[johnson-aviation]]
- [[aider]], [[github-copilot]]: Coding assistants
- [[obsidian]], [[claude-code]], [[obsidian-web-clipper]], [[marp]], [[dataview]], [[qmd]], [[notebooklm]]: Wiki tooling
- [[graphify]]: Knowledge-graph layer over Finn-Wiki (MCP server `graphify-finn-wiki` + `wiki-*` zsh aliases)
- [[openclaw]], [[lindy-ai]], [[n8n]], [[trigger-dev]], [[manus]]: 2026 agent ecosystem
- [[alex-krentsel]]: UC Berkeley / Google Research, OpenClaw architecture deep dive
- [[ideabrowser]]: Subniche-discovery tool (Isenberg recommendation)
- [[apple-card]]: Flagged for NSF returns
- [[berklee-online]]: School portal
- [[jetbrains]]: All Products Pack free for verified students; Webstorm/DataGrip/PyCharm
- [[figma]]: 2-year free Education plan via SheerID
- [[spotify-premium]]: Student Premium $5.99/mo with 4-year activation lock-in
- [[apple-pro-apps-bundle]]: $200 lifetime education bundle — Logic Pro + Final Cut + Motion + Compressor + MainStage

#### AI newsroom stack (added with Pier and Point ingest 2026-04-25)

- [[mastra]]: TypeScript AI orchestration framework (YC W25, $13M seed Oct 2025), runs on Vercel AI SDK v6
- [[inngest]]: Durable workflow + cron with `step.waitForEvent()` suspension for human-in-the-loop gates
- [[baml]]: Boundary ML's schema-strict structured outputs framework, beats raw OpenAI Structured Outputs
- [[beehiiv]]: Newsletter platform with 0% subscription fee (vs Substack's 10%), built-in referral. **$30M ARR by mid-2025, ~90K publishers** (April 28 update)
- [[resend]]: Vercel-ecosystem transactional email service with React Email components
- [[kimi-k2]]: Moonshot AI's MoE frontier model (K2.6 April 2026), cheap drafter via Vercel AI Gateway
- [[whisperx]]: Self-hosted ASR (whisper-large-v3 + pyannote diarization) for council meeting transcription
- [[neon]]: Serverless Postgres + pgvector with branching for safe schema changes per PR
- [[tiptap]]: ProseMirror-based rich text editor for the admin review UI

#### Civic ingestion + AI-news monitoring tools (added with compass artifact ingest 2026-04-28)

- [[civic-scraper]]: BSD-licensed Python lib by Big Local News at Stanford. Handles Granicus / Legistar / CivicPlus / PrimeGov / Civic Clerk
- [[city-scrapers]]: City Bureau's project, foundation of Documenters.org, extends civic-scraper coverage
- [[openstates]]: Free API for state-level legislator + bill data across 50 states
- [[muckrock]]: FOIA workflow management for newsrooms
- [[documentcloud]]: OCR + collaborative annotation of received PDFs
- [[hearst-assembly]]: Hearst's internal AI tool — 13,119 hrs of meetings transcribed May 2024 → April 2025 (enterprise benchmark)
- [[newsguard]]: Tracks 3,006 AI content farms in 16 languages by 2026; the credibility-rating layer sponsors check before signing local ad deals
- [[pangram-labs]]: AI-content detection — broke the Hoodline AI persona reporting; detects 300–500 new AI farms/month

#### Local journalism / grants (added with Pier and Point ingest 2026-04-25)

- [[lion-publishers]]: Local Independent Online News trade org. $140/yr micro membership unlocks insurance discount + Sustainability Audit eligibility
- [[press-forward]]: National $500M local-news funder. Open Call grants $100K over 2 years
- [[gni-growth-catalyst]]: Google News Initiative $100K + Blue Engine coaching. **2026 deadline May 7**
- [[vcstar]]: Gannett-owned VC paper of record, operationally hollow (~8–12 journalists for 850K county)
- [[ojai-valley-news]]: Strongest civic accountability in the region, Ojai-anchored. Partnership target
- [[kclu]]: Cal Lutheran NPR affiliate, audio sibling. Partnership target
- [[vc-reporter]]: Times Media Group weekly, free, ~35K print copies. Cross-promotion target on arts/music

#### News operators — comparables for Pier and Point (added 2026-04-28)

- [[citymeetings-nyc]] / [[vikram-oberoi]]: Solo NYC public-meetings operator. **The canonical solo-operator template** — three-step LLM chain with inter-step human review UIs
- [[6am-city]]: Newsletter-first hyperlocal network, 24+ core markets at 3.4 headcount each. $250–300K/market launch cost, 70% margin within 36 months. Acquired Good Daily July 2025 → Seed-to-Core lifecycle
- [[axios-local]]: 34 markets, ~$20M revenue 2025 still unprofitable. OpenAI partnership Jan 2025 funds the newsroom (Pittsburgh, KC, Boulder, Huntsville). Cautionary structural comp for premature multi-market expansion
- [[semafor]]: $40M revenue 2025 / $2M EBITDA — first profitable year. Events drive >50% of revenue. Highest-margin lever benchmark
- [[punchbowl-news]]: Capitol Hill, $1M founder funding → ~$20M revenue in 3 years. Niche-discipline + founder-led brand reference
- [[block-club-chicago]]: Chicago neighborhoods, 20K paying subs, AJP $1.6M grant. Paid-membership conversion at scale
- [[berkeleyside]]: Bay Area nonprofit, four-stream mix (33/30/25/12). Reference revenue mix for mature-state hyperlocal
- [[hoodline]]: AI-personas-per-city, exposed March 2024, **never shut down**. Cautionary case proving exposure does not always kill if ad revenue + search hold
- [[bnn-breaking]]: NYT-exposed June 2024 AI content farm. Microsoft sued via Dave Fanning syndicated story. Cautionary case
- [[newsbreak]]: Reuters-exposed June 2024. ~$0% original content quadrant — aggregator-only model that didn't survive

#### Newsletter-only operators (April 28)

- [[tldr-newsletter]]: Dan Ni — >$10M in 2025 from advertising alone, 7M+ subs, 22 FTE all-remote
- [[lennys-newsletter]]: Lenny Rachitsky — $4M+/year minimum, 5% paid-conversion benchmark, community of 10K members across 193 meetups
- [[stratechery]]: Ben Thompson — $5M+/year at 40K+ paid subs. Founder-led brand reference (Passport custom subscription infra)

### Locations

- [[kcam]]: Camarillo airport — pattern work base
- [[koxr]]: Oxnard airport — cross-country destination

## Tech (patterns, gotchas, decisions)

### Stack cheat sheet (added 2026-04-29) — what to pick for what job

**Start here:** [[stack/README|stack/README]] — index for the cheat sheet system + how Claude is supposed to use it. Built to fix the narrow-recommendation pattern (Railway → Neon migration was the trigger).

- [[stack/databases]]: Neon (default), Supabase, Convex, Turso, the Railway/Render trap
- [[stack/hosting]]: Vercel, Cloudflare Pages, Cloud Run, Railway — frontend + backend
- [[stack/auth]]: Clerk (default), better-auth, Auth.js, WorkOS — and the Pack's Clerk caveats
- [[stack/ides]]: VS Code (default), WebStorm, DataGrip, Cursor, Windsurf, Zed — when to actually open the JetBrains pack he downloaded
- [[stack/ai-coding-tools]]: Claude Code (default), Cursor, Codex, Aider, v0, Lovable
- [[stack/payments]]: Stripe (default), Lemonsqueezy/Polar for MoR
- [[stack/email-transactional]]: Resend (default), Loops, AWS SES at scale
- [[stack/ci-cd]]: GitHub Actions (default), Depot/Blacksmith for Docker speed
- [[stack/design-tools]]: Figma (default), Penpot, Affinity-by-Canva, Framer
- [[stack/audio-tools]]: Logic + Splice + Slate via Berklee deals — DAW, samples, plugins, mastering

Cross-tier: [[Finn-OS/stack-decisions]] — Finn's curated current-picks slate.

### Patterns

- [[next-js-patterns]]: App Router gotchas, monochromatic style, formatCents helper, no-new-deps rule, error monitoring
- [[sentry-nextjs-patterns]]: `@sentry/nextjs` config reference — four runtime files, source maps, distributed tracing, AI Monitoring, quota filters
- [[sanity-patterns]]: Studio embed, draft mode auth, SanityLive polling, webhook config
- [[groq-patterns]]: Projections, dereferencing, singletons, array filtering, mental model
- [[alembic-postgres-patterns]]: Migration head chaining, enum gotchas, pre-push verification
- [[three-js-patterns]]: mergeGeometries, vertex displacement, mouseRef lerp, snare-beat pulse
- [[vercel-deployment]]: Auto-deploys, deploy hooks, env var management, runtime vs build logs
- [[railway-deployment]]: FastAPI on Railway, Postgres, volume mount, alembic verification
- [[clerk-auth-pattern]]: Public vs protected route split, middleware, UserButton
- [[ollama-rag-pattern]]: mistral + nomic-embed-text + pgvector, AI master switches, summary draft flow
- [[git-worktree-pattern]]: claude/<feature>-<id> naming, lost-work prevention, sandbox push limits
- [[notion-api-limitations]]: Chart aggregation default, no inline DBs in columns, view ID auto-link gap
- [[macos-file-quirks]]: U+202F filename quirk, sandbox mounting, iCloud path, hashing threshold
- [[cowork-sandbox-limits]]: Can't push to GitHub, terminal tier-restricted, path differences
- [[openclaw-architecture]]: Three-layer decomposition (Connectors, Gateway Controller, Agent Runtime) with comparison to Finn's stack
- [[living-config-files]]: Agent self-managed .md config (USER.md, SOUL.md, AGENTS.md, TOOLS.md, BOOTSTRAP.md)

### GCP $300-credit experiments (added 2026-04-25)

Anchor: [[gcp-credits]] — what the $300 is for, budget allocation, exit paths.

- [[gcp-cloud-scheduler-agent-heartbeat]]: Cloud Scheduler + Cloud Tasks as the heartbeat for agent SOPs and per-task billing ($5–$15)
- [[gcp-vertex-gemini-mechanical-tier]]: Gemini Flash via Vertex AI as the cheap mechanical-task tier in the hybrid stack ($40–$80)
- [[gcp-document-ai-document-analysis-niche]]: Document AI as the OCR layer for the document-analysis niche ($60–$120)
- [[gcp-maps-platform-outbound]]: Maps Platform / Places API for niche discovery + outbound list-building ($30–$60, mostly free monthly tier)

### AI newsroom pipeline (added with Pier and Point ingest 2026-04-25, updated 2026-04-28)

- [[ai-newsroom-pipeline]]: End-to-end Sanity + Mastra + Inngest + Kimi/Claude hybrid pipeline for AI-drafted content with human review, fact-check via Citations API, ~$2/100 articles in API costs. Reusable for any AI content product. **April 28 update**: civic-scraper / OpenStates / Hearst Assembly tooling added; inter-step review UI pattern from [[citymeetings-nyc]]; quote-then-answer + LLM-as-judge anti-hallucination patterns.

## Personal (Life OS)

- [[identity-and-brand-architecture]]: Finn as anchor, Overlook Strategy/Audio as MODULE_01/02, identity tags PILOT/PRODUCER/DEVELOPER
- [[aviation-training]]: KCAM pattern work, KOXR cross-country, night currency, foggle approaches
- [[music-production]]: ~158 .logicx files, partial project list, touring band reference
- [[finance-tracking]]: Notion Finance Hub, Type+Amount schema, monthly Net formula, vendors and income sources
- [[finance-log]]: Wiki-canonical cash-position log read by [[finn-life-os-daily]] for the Cash vital sign
- [[health-and-sleep]]: ~6.5 hr sleep average, burnout flag at 5 hr, six life buckets
- [[school-berklee]]: Active courses (Script Analysis, Music Supervision 1, Artist Management)
- [[hardware-setup]]: 64GB M1 Max, VS Code, two-terminal hybrid LLM workflow
- [[gcp-credits]]: $300 GCP free-tier credit anchor + 4 experiment articles
- [[finance-hub]]: Finance hub (Notion personal finance dashboard companion to [[finance-tracking]])
- [[student-discounts]]: What to activate while the Berklee `.edu` is valid — full GitHub Student Pack + Apple Education + JetBrains + Spotify lock-in + audio/music education licenses + activation queue and renewal calendar

## Business

- [[overlook-strategy-positioning]]: Branding/web dev studio, monochromatic, no-new-deps, free portal as differentiator
- [[agentic-services-positioning]]: **Canonical strategy doc (2026-04-29)** — Overlook as an "agentic engineering studio" anchored on Karpathy + Howie Liu's vocabulary. Three productized tiers (Workflow Audit / Skill Pack Build / Always-On Retainer), 30-day build plan, pricing posture, risks
- [[overlook-audio-positioning]]: Hardware/firmware, Riptide flagship
- [[client-portal-as-differentiator]]: Free dashboard/roadmap/financials access — strategic positioning move
- [[business-ideas-backlog]]: CSV financial scenarios, GearFlip subscription tiers, Spotify "Sonic Artifact"
- [[pricing-and-rates]]: What's known + what to clarify
- [[workflow-audit-service]]: **Tier 1 of agentic-services stack** — $1.5-3K Workflow Audit deliverable, jaggedness map of client workflows
- [[wiki/business/templates/workflow-audit/README|Workflow Audit templates]]: **Productized Tier 1 deliverables** (added 2026-04-29) — proposal one-pager, SOW, audit deliverable template, and engagement playbook. Ready to personalize and pitch
- [[per-task-pilot-on-retainers]]: **Tier 3 of agentic-services stack** — Always-On Retainer with per-task line items; Ventura Forward as pilot
- [[portal-orchestration-extension]]: **Tier 2 of agentic-services stack** — Skill Pack Build, the portal Agents tab as the fleet command center
- [[overlook-vertical-landing-pages]]: Niche-targeted landing pages on finn-v2, one per vertical (yacht broker / boutique rental / winery / sportfishing), each with case study + tiered pricing

### Chrome extension idea pile (added with Isenberg / Schneider ingest 2026-04-30)

Anchor: [[paid-chrome-extensions]] — thesis page (under Concepts).

- [[business-ideas-notion-layout-clipper]]: Clipper that reconstructs page layout as Notion blocks (vs. URL-drop). Blocked on Blocks API audit
- [[business-ideas-music-key-tempo-detector]]: Detect key + BPM of audio in any tab, export to Logic Pro. Berklee + Overlook Audio domain moat
- [[business-ideas-taf-metar-decoder]]: Decode aviation weather strings inline. Smallest scope, weekend project
- [[business-ideas-ai-music-detector]]: Classify human vs. AI-generated music in any tab. Highest tech risk + brand leverage
- [[business-ideas-audio-sampler]]: Tape Notes-style audio clipper for browser tabs. UX is the moat
- [[business-ideas-llm-wiki-clipper]]: Wraps [[finn-wiki-ingest]] as a one-click capture surface. Strategic alignment with [[llm-wiki-pattern]]

### Pier and Point — Ventura hyperlocal news venture (added 2026-04-25, updated 2026-04-28)

Anchor: [[pier-and-point]] — concept and vision page. AI-assisted hyperlocal news outlet for Ventura under the Overlook umbrella. Domain `pierandpoint.com` claimed.

- [[pier-and-point-execution]]: Skills-mapping page — what's already built vs. new territory, time-to-MVP estimate. **April 28 update**: Citymeetings.nyc inter-step review UI pattern + civic-scraper compresses ingestion estimate from 3–5 days to 1–2.
- [[pier-and-point-monetization]]: Revenue model, grant pipeline, six-month roadmap, cost breakdown, break-even math. **April 28 update**: realistic 3-year solo ceiling refined to $200–800K (not $1M+); Mediavine Journey threshold confirmed Jan 15 2026; comparables expanded.

## Workflows

- [[setup-obsidian-vault]]: From empty folder to working wiki
- [[ingest-workflow]]: Step-by-step for adding a new source
- [[query-workflow]]: How to ask questions and file answers back
- [[lint-workflow]]: Periodic maintenance pass
- [[productivity-skill-ritual]]: `/productivity:start` and `/productivity:update` rituals
- [[hybrid-local-llm-workflow]]: Two-terminal cc-sonnet + cc-local pattern
- [[csv-to-notion-pipeline]]: Gemini → CSV → notion_csv_importer.py
- [[weekly-prep-briefing]]: Urgent / Mentions / Adjacent / This week + blockers structure
- [[ninety-day-launch-plan]]: Productized AI service launch timeline (Month 1 foundation → Month 2 traction → Month 3 growth)
- [[graph-view-setup]]: Bookmarked graph presets (Brainstorming, Business, Tech, Active Projects), node sizing via weight/node_size, color groups
- [[build-niche-agent-saas]]: Isenberg's 30-step playbook as a checkable workflow — wedge → distribution → agent → compound
- [[wiki-graph-querying]]: Day-to-day patterns for the [[graphify]] knowledge graph — when to grep vs traverse, query templates, rebuild rhythm
- [[stale-project-debrief]]: Weekly task that finds in-progress wiki pages whose `updated:` is older than recent Claude Code session activity — closes the session-debrief loop without requiring Finn to remember
- [[wiki/workflows/workflow-audit-engagement|workflow-audit-engagement]]: Internal day-by-day playbook for running a Workflow Audit (Tier 1 of [[agentic-services-positioning]]) — pre-flight, intake, interviews, jaggedness scoring, deliverable assembly, readout conversion math, pitfalls

## Concepts

- [[llm-wiki-pattern]]: LLM-maintained knowledge base as alternative to query-time RAG
- [[three-layer-architecture]]: Raw sources, wiki, schema
- [[compiled-knowledge]]: Pre-synthesized vs re-derived retrieval
- [[ingest-operation]], [[query-operation]], [[lint-operation]]: The three core wiki ops
- [[index-file-navigation]]: index.md as a poor-person's search at moderate scale
- [[memex]]: Vannevar Bush's 1945 precursor
- [[environmental-behaviors]]: "Site as short film directed by the user's scroll wheel" — portfolio design philosophy
- [[token-conservation-mindset]]: Recurring preference for cheaper models, Codex/Copilot prompts over retry loops

### 2026 AI agency landscape (added with NotebookLM ingest)

- [[vibe-coding]]: 2026 mode of building with LLM agents
- [[phase-3-agents]]: Phase 0-3 progression, autonomy + generality
- [[mcp-protocol]]: Model Context Protocol — adapter layer for agents
- [[wat-framework-marketing]]: Workflows / Agents / Tools 5-step playbook
- [[ai-agency-niches]]: Reference table of viable productized AI services
- [[productized-services]]: Productization checklist applied to Overlook
- [[boring-business-automation]]: Local-business automation thesis
- [[claude-max-arbitrage]]: Economic substrate for productized service tiers
- [[deep-research-strategic-arbitrage]]: Framework for monetizing frontier AI access as an arbitrage opportunity
- [[karpathy-autoresearch]]: Autonomous ML research loop
- [[knowledge-graph-llm-wiki]]: InfraNodus overlay variant of the wiki pattern

### Autonomous agent architecture (added with Krentsel OpenClaw ingest)

- [[loopiness-framework]]: 4-phase AI evolution model (next-token → assistants → scoped agents → autonomous agents), increasing "loopiness"
- [[autonomous-agent-design-principles]]: Design principles for Phase 4 agents: closed control loops, sessions-as-processes, living config, flexibility over polish
- [[living-config-files]]: Agent self-managed .md config pattern (USER.md, SOUL.md, AGENTS.md, TOOLS.md, BOOTSTRAP.md)
- [[discord-hub-pattern]]: Multi-project agent coordination via Discord channels

### AI journalism (added with Pier and Point ingest 2026-04-25, updated 2026-04-28)

- [[ai-journalism-legal-posture]]: Defamation framework for AI publishing in California, §230 gap for first-party AI content, anti-SLAPP as primary defense, the 14-item launch-day disclosure list, media liability insurance considerations. Reusable for any AI content publishing. **April 28 update**: NYT v. OpenAI / Cohere / Walters rulings added; SB 942 / SB 53 / AB 316 / AB 2655+2839; Cohere "substitutive summaries" risk.
- [[transparency-premium-as-traffic-strategy]]: Disclosure as a *traffic strategy* — converts to Google ranking, ad-network acceptance, foundation grants, and reader trust simultaneously. Load-bearing positioning choice for [[pier-and-point]].
- [[human-moat-pattern]]: The four unautomatable assets (original reporting, events, community, voice) that successful AI-assisted news operators monetize. The original-to-aggregated ratio is predictive of survival.
- [[quote-then-answer-pattern]]: Anthropic's anti-hallucination prompt structure — wrap docs in `<documents>`, extract verbatim `<quotes>` first, then `<answer>` referencing them. Reusable for any RAG-backed AI feature.

### Skills documented in the wiki

- [[finn-wiki-ingest]]: Anthropic-skill that ingests sources into this vault (the [[ingest-operation]] for Finn-Wiki)
- [[life-os-update]]: Anthropic-skill that syncs the vault into the [[notion-life-os]] dashboard
- [[project-status-audit]]: Anthropic-skill that scans coding surfaces and produces [[status-dashboard]]

### Agent-native SaaS playbook (added with Isenberg 30-step ingest)

- [[agent-native-saas]]: 2026 SaaS form — orchestrated agents fulfilling a subniche workflow, sold per task, distributed by founder-led media
- [[per-task-pricing]]: Per-seat → per-task → outcome pricing evolution; why per-seat SaaS is contracting
- [[services-first-saas]]: Sequencing thesis — start as a human-fulfilled service, automate after documenting every step
- [[media-first-distribution]]: Daily content engine as part of the product, not separate marketing — "AI CMO" running on Schedule Tasks
- [[orchestration-as-interface]]: Scott Belsky's frame — the orchestration surface IS the product UI

### Agentic ecosystem (added with Karpathy + Howie Liu ingest 2026-04-29)

- [[software-3-0]]: Karpathy's three-paradigm frame — 1.0 explicit code, 2.0 learned weights, 3.0 prompts as program with the LLM as interpreter
- [[agentic-engineering]]: The discipline above [[vibe-coding]] that preserves the professional quality bar at much higher speed. Spec-driven dev + taste/oversight as the human role. Hub page
- [[ghosts-not-animals]]: Karpathy's LLM ontology — statistical entities summoned via pretraining + RL, not motivated organisms
- [[jaggedness-and-verifiability]]: Why models peak at math/code and stagnate elsewhere. The audit's job is to map which client workflows are in the RL circuits
- [[skills-as-primitive]]: Howie Liu's central claim — pinned skills are the most important primitive in frontier agents. Hub page
- [[rubrics-and-llm-as-judge]]: Eval rubric pinned to agent + separate LLM scoring. The observability layer that makes a fleet operable. Karpathy's "council of LLM judges" is the same primitive
- [[opportunity-cost-pricing]]: Howie's anchor — price agents against the labor cost of the work being automated, not against $20/mo SaaS
- [[fleet-of-agents]]: Every company gets ~20 agents mapped to humanoid org-chart roles. Context-window physics + matching legacy infra make it inevitable
- [[agentic-inflection-late-2025]]: The threshold both speakers point at. Karpathy: December 2025. Howie: Opus 4.5 (~Nov 2025). Same inflection, different vocabularies
- [[understanding-as-bottleneck]]: Karpathy's closing thesis. "You can outsource your thinking but you can't outsource your understanding." The bottleneck migration: typing → spec/oversight/taste → understanding

### Distribution / category theses (added with Isenberg paid-extension ingest 2026-04-30)

- [[paid-chrome-extensions]]: Why the Chrome extension category is asymmetrically attractive in 2024–26 — collapsing build cost (AI scaffolds), distribution still works the old way, browser is a privileged surface for capture / transform / detect plays. Six concrete idea pages live in `wiki/business/`

## Sources

- [[karpathy-llm-wiki-gist]]: Karpathy's original gist introducing the pattern (Apr 4, 2026)
- [[nate-herk-claude-code-video]]: Nate Herk's YouTube walkthrough (Apr 5, 2026)
- [[notebooklm-mastering-agentic-workflows]]: NotebookLM 1 — 12 sources on Claude Code agentic marketing (Apr 24, 2026)
- [[notebooklm-overlook-strategy]]: NotebookLM 2 — 47-source Overlook research pile (Apr 10, 2026, ingested Apr 24)
- [[notebooklm-simple-ui-viral-ai]]: NotebookLM 3 — solo-founder AI businesses + the Strategic Arbitrage Deep Research report (Apr 15, 2026)
- `raw/_extracts/batch-{1,2,3,4}.md`: Structured extracts from 22 prior Claude/Cowork sessions (Apr 24, 2026)
- [[openclaw-deep-dive-krentsel]]: Alex Krentsel's OpenClaw architecture deep dive (Apr 13, 2026, ingested Apr 25)
- [[isenberg-future-of-saas-30-step]]: Greg Isenberg's 30-step framework for niche agent-SaaS — Startup Ideas podcast (ingested Apr 25)
- [[pier-and-point-research]]: Deep research report on AI-assisted Ventura hyperlocal news venture (commissioned compass artifact, ingested 2026-04-25)
- [[overlook-vertical-landing-pages-2026-04-26]]: Three niche-targeted landing pages (yacht broker, boutique rental, winery) generated by `niche-landing-page-generator` scheduled task (Apr 26, 2026)
- [[overlook-vertical-landing-pages-2026-04-27]]: Second pass of the same generator — yacht broker + boutique rental reaffirmed, sportfishing charter swapped in for winery, pricing dropped ~30%. Two batches now exist; canonical batch undecided. (Apr 27, 2026)
- [[graphify-cheat-sheet]]: Operational reference for the [[graphify]] knowledge-graph layer — aliases, MCP tools, query templates, troubleshooting (Apr 26, 2026)
- [[overlook-strategy-design-system-bundle]]: Claude Design handoff bundle for the Overlook Strategy brand system — tokens, type, components, UI kit (Apr 24, 2026)
- [[automated-news-playbook-civic-operators]]: Second-pass deep research compass artifact on the entire automated news landscape (operator deep dives, failure curriculum, 2025 legal updates, monetization numbers). Commissioned 9 days before the GNI Growth Catalyst May 7 deadline — strengthens the [[pier-and-point]] decision toward *yes-but-narrow-the-ambition*. (April 28, 2026)
- [[student-discounts-research-2026-04]]: Compiled inventory of 86 GitHub Student Pack offers + non-Pack `.edu` programs (Apple Education, JetBrains, Spotify, music software). Anchor for [[student-discounts]]. (April 28, 2026)
- [[theo-claude-code-favorite-stack-2026-04-29]]: Theo (t3.gg) analysis of the amplifying.ai study on Claude Code's narrow tool picks across 20 categories. Trigger for the [[stack/README|stack cheat sheet]] system + the "Stack recommendation rules" block in [[CLAUDE]]. (April 29, 2026)
- [[karpathy-vibe-to-agentic-2026-04-29]]: Andrej Karpathy at Sequoia AI Ascent 2026 with Stephanie Zhan — vibe coding raises the floor, agentic engineering raises the ceiling. Software 3.0, ghosts not animals, jaggedness, verifiability, understanding-as-bottleneck. The worldview source for [[agentic-services-positioning]]. (April 29, 2026)
- [[isenberg-howieliu-hyperagent-2026-04-29]]: Howie Liu (Airtable / HyperAgent) on Greg Isenberg's pod — TAM is white-collar GDP, opportunity-cost pricing, skills as primitive, rubrics + LLM-as-judge, fleet command center. The operator source for [[agentic-services-positioning]]. (April 29, 2026)
- `raw/_extracts/2026-04-29-karpathy-howieliu-digest.md`: Chapter-by-chapter digest, deck-ready quotes, glossary. Used to build [[agentic-services-positioning]] and the 10 new concept pages
- [[isenberg-paid-chrome-extensions-2024]]: Greg Isenberg + Cody Schneider 58s YouTube short on paid Chrome extensions as a category — "AI builds them, the Web Store still distributes them." Source for [[paid-chrome-extensions]] and six idea pages in `wiki/business/`. (Original June 2024, ingested April 30, 2026)

## Design

**Start here:** [[design/overview|design overview]] — entry point for the new `wiki/design/` section.

### Design System (Overlook Strategy)

- [[design-system/overview|Design System overview]]: Brand-and-UI system summary
- [[design-tokens]]: Colors, type, spacing, radii, shadows, motion
- [[brand-voice]]: Voice, casing, banned words, example copy
- [[components]]: Buttons, cards, forms, hero, nav, badges, iconography
- [[ui-kit-marketing-site]]: React UI kit for the agency's marketing site

### Inspiration

- [[web-dev-inspiration]]: Notion export of Finn's reference sites
- [[inspiration-links]]: Flat link list

### Templates

- [[simple-mono-template]]: Single-file HTML monochromatic portfolio template
- [[kelly-bennett-site]]: Deployment of SimpleMono for [[kelly-bennett]]

## Comparisons

- [[llm-wiki-vs-rag]]: Persistent wiki synthesis vs retrieval-augmented generation
- [[ai-news-failures-curriculum]]: The eight burned operators (CNET, SI, Gannett LedeAI, Microsoft MSN, Apple Intelligence, Hoodline, BNN, NewsBreak) — failure modes, dates, outcomes, and what the editorial constraints imply for [[pier-and-point]] (added 2026-04-28)
