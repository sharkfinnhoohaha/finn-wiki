# Log

Append-only record of what happened and when. Newest at the bottom. One `##` entry per action so `grep "^## \[" log.md | tail -N` works.

## [2026-04-28] audit + correction | Student discount page

Finn caught two factual errors in the original ingest from earlier today: (1) page claimed Notion Education Plus included AI (it doesn't), (2) page described Clerk's student deal as "Free Pro" without flagging that phone/SMS authentication is excluded. Triggered a full T&C audit.

Pages updated:
- [[student-discounts]] — full rewrite. Added status legend (✓/⚠/✗/?), activation table reflecting Finn's already-claimed offers (GitHub, Spotify, JetBrains, DigitalOcean, Name.com, Namecheap, Sentry, Clerk, Apple Pro, Notion, Figma, Codex, Railway, Google), restructured all tables to include a "Fine print / not included" column, added a "Materially changed since training data — corrections" section, added "Open questions for Finn" for ambiguous activations
- [[apple-pro-apps-bundle]] — full rewrite. Apple discontinued the lifetime $199.99 Pro Apps Bundle on **January 29, 2026** and replaced it with the Creator Studio Education subscription ($2.99/mo or $29.99/yr). Page now reflects discontinuation and explains the new subscription model
- [[jetbrains]] — added warning that the educational license is **strictly non-commercial** — cannot be used for paid Overlook Strategy client work. Documented the three practical paths (separate licenses, VS Code for client work, or accept risk)
- [[spotify-premium]] — corrected price ($6.99/mo current US, not $5.99), corrected Hulu bundle status (with-ads tier, Showtime removed late 2024), corrected lock-in mechanic (4 cumulative annual verifications, not 4 calendar years from sign-up)
- [[figma]] — added activation status, clarified team-feature exclusions

Major factual corrections logged on the page:
- Apple Pro Apps Bundle: REMOVED Jan 29, 2026
- Native Instruments Komplete: $99 student price NO LONGER OFFERED — only Reaktor 6 has 50% off ($199 → $99)
- Ableton Live Suite academic: ~$375 (50% off $749), not $99
- Notion Education Plus: AI is NOT included
- Clerk student Pro: phone/SMS auth excluded; 10K MAU production cap
- GitHub Copilot for Students: now a separate "Copilot Student" plan (March 13, 2026), not Copilot Pro; new sign-ups paused April 20, 2026
- JetBrains: commercial use strictly prohibited under educational license

## [2026-04-28] ingest | Sentry — entity page + Next.js patterns

Source: Cowork session (user request). Finn already had Sentry Pro active via GitHub Pack (no new activation needed). No prior entity page existed.

Pages created:
- [[sentry]] (`wiki/entities/sentry.md`) — what it does, plan limits, DSN conventions, prioritized project list
- [[sentry-nextjs-patterns]] (`wiki/tech/sentry-nextjs-patterns.md`) — full config reference for App Router: four runtime files, `withSentryConfig()`, source maps, distributed tracing Vercel → Railway, AI Monitoring, `beforeSend` quota filters
- [[sentry-ingest-2026-04-28]] (`wiki/sources/`) — source summary

Pages updated:
- [[next-js-patterns]] — added "Error monitoring" section + linked `try/catch → notFound()` antipattern to Sentry's fix
- [[index.md]] — added `[[sentry]]` to tools list, `[[sentry-nextjs-patterns]]` to tech section

Finn-OS: not touched. This is implementation infrastructure, not a new idea or opportunity. The instrumentation of [[overlook-portal-webapp]] / [[pier-and-point]] is worth surfacing if Finn wants to track it as a commitment.
- Stripe $1,000 waiver: $1,000 in revenue processed (~$30 fee savings), not $1,000 in transaction fees on volume

Finn-OS touched: yes — replaced the activation-queue thread on [[Finn-OS/now]] (most items now done) with three new threads: (1) replan around JetBrains commercial-use restriction; (2) confirm which Apple Pro plan was activated (pre/post Jan 29 cutoff); (3) verify Google AI Pro for Students before April 30, 2026 sign-up deadline. Kept the GitHub Cert June 30 thread.

Token note: ran a haiku verification subagent (~140k tokens, mixed results — many vendor pages 404'd) followed by 7 direct WebSearch calls in main session to verify the most-critical exclusions. Future ingests on this kind of fast-moving offer landscape should default to direct verification rather than trusting training data.

## [2026-05-02] idea-scout | Voice-to-Skill Generator App

Researched and filed "voice-to-skill generator app" — a one-button mobile/web app that records a voice description of a workflow and outputs a ready-to-install SKILL.md. Zero direct competition, weekend build scope, strong Finn-fit given his daily skill authorship. The sync layer (getting files into Claude Code's skill folder from mobile) is the hardest unsolved problem.

Pages created: [[business-ideas-voice-to-skill]]
Pages updated: (none)
Finn-OS touched: yes — Finn-OS/ideas/backlog.md

## [2026-04-28] ingest | Student discount research — GitHub Student Pack + non-Pack `.edu` programs

Source: live web research compiled April 28, 2026 from `education.github.com/pack` and direct vendor pages (Apple Education, JetBrains, Spotify, Notion, Figma, Native Instruments, Ableton, Adobe). Goal: a single reference page Finn can grep for "what tool covers X task and is there a student rate" while the [[berklee-online|Berklee]] `.edu` is valid.

Pages created:
- Anchor: [[student-discounts]] (`wiki/personal/`) — full GitHub Pack inventory with stack-fit weighting + non-Pack programs by category + activation queue + renewal-discipline calendar + project→discount reverse mapping
- Source summary: [[student-discounts-research-2026-04]] (`wiki/sources/`)
- Entity stubs: [[jetbrains]], [[figma]], [[spotify-premium]], [[apple-pro-apps-bundle]] — high-leverage tools that didn't have entity pages yet

Pages updated:
- `index.md` — added the four entity entries under Tools & services, the personal entry under Personal (Life OS), and the source entry under Sources

Finn-OS touched: yes — appended one open thread to [[Finn-OS/now]] surfacing the **June 30, 2026 GitHub Certification voucher hard expiry** plus the time-sensitive lock-in deals (Apple Pro Apps Bundle, Komplete + Ableton lifetime, Spotify 4-year clock). Career/business relevant: the activation queue affects Overlook tooling spend — Clerk Pro, JetBrains, Sentry, Datadog, FrontendMasters all displace recurring SaaS line items.

Open threads surfaced: (1) **GitHub Certification voucher expires Jun 30, 2026** — schedule by mid-June; (2) **claim Apple Pro Apps Bundle + Komplete + Ableton before .edu lapses** — all one-time lifetime licenses; (3) **activate Spotify Student early** — 4-year lock-in clock starts on activation, not on graduation; (4) several `[VERIFY]` items on the page where current-rate confirmation is needed before relying on them (Cursor Pro, Anthropic/OpenAI student tiers, current Splice student offer).

Token note: research delegated to two parallel haiku subagents (~120k + 110k tokens). Synthesis + cross-linking handled in main session.

## [2026-04-27] ingest | Overlook Vertical Landing Pages — second pass (yacht / rental / sportfishing batch)

Source: `raw/landing-pages/2026-04-27-overlook-vertical-landing-pages/` — three niche-targeted landing pages generated overnight by the `niche-landing-page-generator` scheduled task, second run of the same generator that produced the [[overlook-vertical-landing-pages-2026-04-26|April 26 batch]]. Same task, fresh keyword research, different choices: sportfishing charter replaces winery as the third vertical, and pricing is ~30% lower across the board. Canonical Sanity-ready copies at `outputs/landing-pages/`.

Pages created:
- Source summary: [[overlook-vertical-landing-pages-2026-04-27]] — captures full diff against April 26 batch (verticals, pricing, slugs, case-study posture)

Pages updated:
- [[overlook-vertical-landing-pages]] — added "Second pass (April 27, 2026)" section with the alternate slug/pricing table; added a `> [!warning]` callout that the two batches are alternative drafts, not additive; promoted "Charter boat / sportfishing" out of "next" candidates; demoted "Winery / tasting room" into "next" pending the batch decision.
- [[pricing-and-rates]] — added `> [!warning]` callout flagging the proposed ~30% lower tier structure from the April 27 batch. Page still reflects April 26 numbers as canonical until Finn picks.
- `index.md` — added new source page entry under Sources.

Finn-OS touched: yes — appended three bullets to [[Finn-OS/ideas/backlog]] (sportfishing landing page, batch-canonical decision, pricing-anchor decision) and two open threads to [[Finn-OS/now]] (pick canonical batch, build `landingPage` Sanity schema). Updated `now.md` and `backlog.md` `updated` dates.

Open threads surfaced: (1) **April 26 vs April 27 batch must be reconciled** before any Sanity ingest — they're alternative drafts with different verticals (winery vs sportfishing), pricing (~30% delta), and slugs; (2) **pricing anchor for Overlook engagements is unsettled** — deeper than which batch ships, the question is what Finn defends in a sales conversation; (3) Sanity `landingPage` schema still doesn't exist on [[finn-v2-portfolio]] (~1–2 hour build, real ship blocker for either batch); (4) CTAs in this batch use `/contact?ref=...` placeholders instead of a real Calendly/Cal.com URL.

## [2026-04-26] ingest | Overlook Vertical Landing Pages (yacht / rental / winery batch)

Source: `raw/landing-pages/2026-04-26-overlook-vertical-landing-pages/` — three niche-targeted landing pages generated overnight by the `niche-landing-page-generator` scheduled task. Sanity-ready Markdown, deploy target [[finn-v2]]. Canonical copies at `outputs/landing-pages/`.

Pages created:
- Source summary: [[overlook-vertical-landing-pages-2026-04-26]]
- Strategy / pattern: [[overlook-vertical-landing-pages]]

Pages updated:
- [[overlook-strategy-positioning]] — added "Vertical landing pages (April 2026)" section with tier links; added a fourth read ("Lead with vertical authority") to the open positioning question.
- [[pricing-and-rates]] — first tiered project pricing now published. Added a "Tiered project pricing (April 2026)" section with all three verticals' tiers and noted implications for existing clients.
- `index.md` — added new business page and source page entries.

Finn-OS touched: yes — appended seven bullets to [[Finn-OS/ideas/backlog]] (one umbrella, three vertical-specific landing pages, one for the Sanity `landingPage` schema blocker, one for a per-task pricing pilot, one for the founder-pricing winery offer). No moves to [[Finn-OS/ideas/ranked|ranked]] — that's Finn's call. No `now.md` update (no time-bound commitment surfaced; Sanity schema build is a blocker but unscheduled).

Open threads surfaced: (1) Sanity `landingPage` schema doesn't exist on finn-v2 yet, ~1-2hr build before any page can ingest; (2) CTA `#book` anchors need a real Calendly/Cal.com URL; (3) "ranks inside 90 days" claim is aspirational and may need softening before publish; (4) winery founder pricing offer expires Q3 2026 if no clients close.

## [2026-04-24] init | vault scaffolded

Created the folder structure, schema (`CLAUDE.md`), index, and README. Vault is ready for sources.

## [2026-04-24] ingest | Karpathy LLM Wiki gist

Source: `raw/karpathy-llm-wiki-gist.md` (paraphrased from https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f, published 2026-04-04).

Pages created:
- Summary: [[karpathy-llm-wiki-gist]]
- Concepts: [[llm-wiki-pattern]], [[three-layer-architecture]], [[compiled-knowledge]], [[ingest-operation]], [[query-operation]], [[lint-operation]], [[index-file-navigation]], [[memex]]
- Entities: [[andrej-karpathy]], [[vannevar-bush]], [[obsidian]], [[claude-code]], [[obsidian-web-clipper]], [[marp]], [[dataview]], [[qmd]]
- Workflows: [[setup-obsidian-vault]], [[ingest-workflow]], [[query-workflow]], [[lint-workflow]]
- Comparisons: [[llm-wiki-vs-rag]]

## [2026-04-24] ingest | Nate Herk Claude Code video

Source: `raw/nate-herk-claude-code-video.md` (summary of https://www.youtube.com/watch?v=sboNwYmH3AY, published 2026-04-05).

Pages updated:
- [[llm-wiki-pattern]]: added concrete implementation timing (5-minute setup, single article → 23 pages in ~10 minutes)
- [[setup-obsidian-vault]]: added Nate's two-folder pattern (`raw/` and `wiki/`) as a worked example
- [[ingest-workflow]]: added Obsidian Web Clipper tempo and what "ingest" looks like in chat
- [[llm-wiki-vs-rag]]: added the "~95% token reduction" claim attributed to the video, flagged as unverified
- [[claude-code]]: added role as the canonical wiki maintainer in the Obsidian pairing

Pages created:
- Summary: [[nate-herk-claude-code-video]]
- Entity: [[nate-herk]]

## [2026-04-24] vault-move | seeded vault relocated to iCloud as Finn-Wiki

Vault unzipped from `llm-wiki.zip` template to `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/`. Renamed top-level folder from `llm-wiki` to `Finn-Wiki`. iCloud Documents folder was empty; no other Obsidian vault detected. CLAUDE.md and README.md rewritten for Finn's domain (Overlook Strategy/Audio, Next.js/Sanity/TinaCMS/Vercel/Railway stack, Ventura/M1 Max context, token-conservation mindset, Cowork sandbox limits).

New top-level folders added under `wiki/`: `projects/`, `clients/`, `tech/`, `personal/`, `business/`. Existing `concepts/`, `entities/`, `workflows/`, `sources/`, `comparisons/` preserved.

## [2026-04-24] ingest | 22 prior Claude/Cowork sessions

Source: `raw/_extracts/batch-1.md`, `batch-2.md`, `batch-3.md`, `batch-4.md` — structured extracts from 22 prior sessions covering Overlook portal/web app, three-altitudes portfolio, GearFlip, Riptide, Sømliøya, Notion Life OS, Berklee Music Supervision, file org, hybrid LLM workflow, Sanity debugging, dashboard kickoff, audio asset hunting, and stock onboarding examples.

Pages created (75 new):

Projects (9): [[three-altitudes]], [[overlook-portal-webapp]], [[gearflip]], [[riptide]], [[somliøya]], [[notion-life-os]], [[berklee-music-supervision-1]], [[file-organization-pass]], [[hybrid-llm-workflow]]

Clients (4): [[rustler-42]], [[somliøya]] (client view), [[all-in-one-music]], [[ventura-forward]]

Entities — people (17): [[finn-bennett]], [[overlook-strategy]], [[overlook-audio]], [[zach]], [[jack-finn]], [[big-mike]], [[jack-bock]], [[thijs]], [[pedram]], [[marijke]], [[dad-and-kelly]], [[black-sand-pictures]], [[cbs]], [[amblin-television]], [[brad-hatfield]], [[john-depaola-quartet]], [[scott-robinson]], [[extreme-music]]

Entities — tools/services/locations (16): [[vercel]], [[railway]], [[sanity]], [[tinacms]], [[notion]], [[supabase]], [[clerk]], [[ollama]], [[pgvector]], [[shopify]], [[apollo-twin-x-duo]], [[aider]], [[github-copilot]], [[kcam]], [[koxr]], [[apple-card]], [[berklee-online]]

Tech patterns (13): [[next-js-patterns]], [[sanity-patterns]], [[groq-patterns]], [[alembic-postgres-patterns]], [[three-js-patterns]], [[vercel-deployment]], [[railway-deployment]], [[clerk-auth-pattern]], [[ollama-rag-pattern]], [[git-worktree-pattern]], [[notion-api-limitations]], [[macos-file-quirks]], [[cowork-sandbox-limits]]

Personal (7): [[identity-and-brand-architecture]], [[aviation-training]], [[music-production]], [[finance-tracking]], [[health-and-sleep]], [[school-berklee]], [[hardware-setup]]

Business (5): [[overlook-strategy-positioning]], [[overlook-audio-positioning]], [[client-portal-as-differentiator]], [[business-ideas-backlog]], [[pricing-and-rates]]

Workflows (4): [[productivity-skill-ritual]], [[hybrid-local-llm-workflow]], [[csv-to-notion-pipeline]], [[weekly-prep-briefing]]

Concepts (2): [[environmental-behaviors]], [[token-conservation-mindset]]

Open threads carried forward:
- Overlook portal: notice/feed_posts 500 errors not yet confirmed resolved (last: enum migration fix attempt)
- three-altitudes: `norm` branch is production; some pushes still pending Finn's terminal action
- Berklee Music Supervision: Lessons 10–12 deliverables in flight; assignment selections (instructor-approved songs, m85s ad) unresolved
- Life OS: heyismail multi-column layout never replicated via API; manual drag-drop pending
- GearFlip: scraping pipeline + alert flow + Stripe + Resend still empty after landing/dashboard build
- Sanity Studio: 4-second polling refresh fix needs verification on three-altitudes deploy

Lint candidates (worth a follow-up pass):
- `wiki/clients/somliøya.md` and `wiki/projects/somliøya.md` use non-ASCII `ø` — may want ASCII-slug aliases later
- Many wikilinks point to pages not yet created (cross-cutting tools like `[[fastapi]]`, `[[sqlalchemy]]`, `[[gsap]]`, `[[lenis]]`, `[[tailwind]]`, `[[heyismail-life-os]]`, individual band/song pages) — backlog

## [2026-04-24] ingest | full coding-project audit + status classification

Sources: `raw/_extracts/vercel-status.md`, `raw/_extracts/cc-batch-a.md`, `raw/_extracts/cc-batch-b.md`, `raw/_extracts/cc-batch-c.md`, `raw/_extracts/cc-batch-d.md`, `raw/_inventory.md`.

Swept 68 Claude Code project directories under `~/.claude/projects/`, 45 Vercel project deployments, and on-disk coding folders. Cross-referenced against existing Cowork session extracts.

Restructured `wiki/projects/` from a flat folder into 4 status-buckets per Finn's request:
- `wiki/projects/in-progress/` (15 — actively being worked on, clear next step)
- `wiki/projects/unfinished/` (5 — the "80% pile", stuck on something specific)
- `wiki/projects/abandoned/` (19 — never past conceptual phase, or duplicate/dead Vercel slugs)
- `wiki/projects/deployed/` (12 — live on Vercel, untouched for a while, seems done)

Moved existing project pages into appropriate subfolders. Created `wiki/projects/status-dashboard.md` as the at-a-glance master view.

New project pages created (42):

**In-progress (6 new):** [[copper-and-cast]], [[waveshade]], [[overlook-boilerplates]], [[ventura-forward-app]], [[johnson-aviation]], [[gemini-usage-tracker]]

**Unfinished (5):** [[finn-bennett-dotcom]], [[latency-optimizer]], [[admin-client-app-template-ovlk]], [[kb]], [[iamhumantoo]]

**Abandoned (19):** [[subawoo]], [[starcommand]], [[echomind]], [[finn-portfolio-worktree-exploration]], [[vite-react]], [[grannen-lodge-variants]], [[overlook-strategy-final-v1-variants]], [[ovlkstratredo]], [[due-date]], [[mixnote-landing]], [[aviation-theme-cp-aviation]], [[sealth]], [[gimmerefs]], [[frontend-duplicate-slug]], [[ventura-forward-admin-duplicate]], [[notion-cms-app]], [[project-gpt2c]], [[index-playground]], [[html-index-copy-paste]]

**Deployed (12):** [[metacheck]], [[overlook-audio-site]], [[finn-v2-portfolio]], [[somlioya-nextjs-deprecated]], [[cms-kit-sanity-deployed]], [[grannen-lodge-main]], [[overlook-strategy-final-v1-main]], [[overlook-invoice-pay]], [[spencers-dashboard]], [[rustler-yachts-redesign]], [[portal-landing-page]], [[fbdotcom-underdev]]

Key open threads carried forward to [[status-dashboard]]:
- `overlook-portal-webapp` — chronic "clients not showing on admin page" bug, likely env/deploy-side not code
- `finn-bennett-dotcom` — Vercel CLI deploy failures blocking the finnbennett.com launch
- `gearflip` — "complete the remaining localmodel tasks" (scraping pipeline, alerts, Stripe, Resend)
- `ventura-forward-app` — Supabase "Report It" migration mid-stream
- Vercel cleanup: ~10 duplicate/error slugs worth removing (grannen-lodge 4/5 variants, overlook-strategy-final-v1 2/3 variants, frontend, ventura-forward-admin-client-web-app, ovlkstratredo)

Needs Finn's clarification (flagged on individual pages): iamhumantoo purpose, kb purpose, due-date purpose, mixnote-landing purpose, aviation-theme vs cp-aviation distinction, sealth meaning, project-gpt2c intent, index-playground/html-index-copy-paste scope.

## [2026-04-24] ingest | Overlook Strategy Design System bundle + inspiration + templates

Sources:
- `raw/design/overlook-strategy/design-system/overlook-strategy-design-system/` — Claude Design handoff bundle (README, project README, `colors_and_type.css`, preview HTML, `ui_kits/overlook-strategy-site/` JSX kit, assets)
- `raw/design/overlook-strategy/inspiration/webdev-inspo-notion-export/` — Notion export of the web dev inspiration page
- `raw/design/overlook-strategy/templates/SimpleMono_WEB-TEMP.html` and `kelly-bennett.html` (byte-identical) — minimalist monochromatic portfolio template

Pages created:
- Summary: [[overlook-strategy-design-system-bundle]]
- Design overview: [[design/overview|design/overview.md]]
- Design system: [[design-system/overview|design-system/overview.md]], [[design-tokens]], [[brand-voice]], [[components]], [[ui-kit-marketing-site]]
- Inspiration: [[web-dev-inspiration]], [[inspiration-links]]
- Templates: [[simple-mono-template]], [[kelly-bennett-site]]
- Entity: [[kelly-bennett]] (Kelly Bennett, Esq., entertainment attorney, family member, Overlook Strategy client)

Pages updated:
- [[dad-and-kelly]]: now links to [[kelly-bennett]] entity and [[kelly-bennett-site]] project
- `index.md`: new Design section, new Kelly entity reference

Open questions for Finn:
- Live URL for `kellybennett.net` — shipped or local?
- Should [[kelly-bennett-site]] be tracked as an Overlook Strategy client project under `wiki/projects/in-progress/`?
- Confirm font substitutions (Questrial, Cormorant Garamond) or supply originals.
- Confirm or swap Lucide as the icon system.
- Reconcile `--radius-md: 10px` in tokens vs "default card 4px" in README.

## [2026-04-24] structure | Finn-OS curated tier added

Added a second top-level tier to the vault: `Finn-OS/`. This is Finn's curated thinking space — active business ideas, career direction, weekly reviews — separate from the encyclopedic `wiki/`. Aggregator pattern: Finn-OS pages link to wiki pages rather than duplicating content.

Folders created:
- `Finn-OS/README.md` — entry point + how-to
- `Finn-OS/now.md` — current week
- `Finn-OS/ideas/` — backlog, ranked, archive
- `Finn-OS/career/` — goals, skills, opportunities, network
- `Finn-OS/reviews/` — weekly, monthly

Pages created (10): all Finn-OS starter pages with frontmatter (`type: finn-os`), prose explaining usage, and forward-looking templates. Where appropriate, pages link out to existing wiki pages (e.g., `goals.md` cites `[[overlook-strategy-positioning]]`, `[[finance-tracking]]`).

CLAUDE.md updated: documents the two-tier model, the aggregator pattern, and the career/business dual-filing rule. New ingests must identify if content is career/business-relevant; if yes, update the appropriate Finn-OS aggregator.

`index.md` updated: added "Two tiers" intro at top with entry points into Finn-OS.

Designed to mirror the pattern from Andrej Karpathy's LLM Wiki gist + Nate Herk's Claude Code walkthrough ([[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]), extended with the curated tier for Finn's active thinking.

## [2026-04-24] ingest | NotebookLM x3 — Mastering Agentic Workflows / Overlook Strategy / Simple UI and Viral AI App Strategies

Ingested three of Finn's NotebookLM notebooks via Chrome MCP scrape (no NotebookLM API). Combined: 63 sources across the three notebooks (with overlaps), 1 saved markdown note, 1 Deep Research report, 4 audio overviews (skipped — not transcribed).

Notebooks captured:
- [[notebooklm-mastering-agentic-workflows]] — 12 sources, 1 saved note "Architecting Autonomous Marketing Engines with Claude Code"
- [[notebooklm-overlook-strategy]] — 47 sources, no saved notes (research pile)
- [[notebooklm-simple-ui-viral-ai]] — 4 imported sources + Deep Research report "The Strategic Arbitrage of Frontier Intelligence: A Comprehensive Framework for Monetizing the Claude Max Ecosystem in 2026" (Finn pasted full body during ingest after NotebookLM share-link couldn't expose it)

Raw saved to:
- `raw/mastering-agentic-workflows-with-claude-code/` (note + sources)
- `raw/overlook-strategy-notebooklm/` (sources)
- `raw/simple-ui-viral-ai-app-strategies/` (sources + Deep Research report)

Career/business relevance: HIGHLY relevant. Notebook 2 IS named "Overlook Strategy". All three notebooks revolve around Finn's strategic question "How do I monetize my Claude Max subscription / what should Overlook productize?"

### Pages created (16)

Sources (3): [[notebooklm-mastering-agentic-workflows]], [[notebooklm-overlook-strategy]], [[notebooklm-simple-ui-viral-ai]]

Concepts (9): [[vibe-coding]], [[wat-framework-marketing]], [[mcp-protocol]], [[ai-agency-niches]], [[productized-services]], [[boring-business-automation]], [[karpathy-autoresearch]], [[knowledge-graph-llm-wiki]], [[claude-max-arbitrage]], [[phase-3-agents]]

Workflow (1): [[ninety-day-launch-plan]]

Entities (5): [[notebooklm]], [[openclaw]], [[lindy-ai]], [[n8n]], [[trigger-dev]]

### Pages updated (5)

- [[andrej-karpathy]]: autoresearch detail expanded, links to [[karpathy-autoresearch]]
- [[claude-code]]: Phase 3 framing added, [[openclaw]] alternative noted, links to [[wat-framework-marketing]] / [[claude-max-arbitrage]]
- [[overlook-strategy]]: strategic-direction section pointing at the 2026 positioning fork
- [[overlook-strategy-positioning]]: open question added — lead with vibe coding or hide it; cross-links to all new concept pages
- [[admin-client-app-template-ovlk]]: cross-reference added — appears as Vercel deployment source in Notebook 2; flagged as a productization starting point

### Finn-OS touched

- [[Finn-OS/ideas/backlog]]: 9 new idea seeds appended under "New ideas" — productized AI niches (AI-ready website conversion, KB builders, document analysis), WAT-framework marketing engine, 90-day launch plan execution, MCP additions for Cowork (Perplexity / Firecrawl / Playwright), the vibe-coding positioning question, boring-business automation, and the InfraNodus knowledge-graph experiment.
- [[Finn-OS/now]]: not modified. Open thread implicit in idea backlog; Finn can promote to `now.md` during weekly review if pursuing actively.
- [[Finn-OS/career/opportunities]]: not modified. No specific lead/conversation surfaced.
- [[Finn-OS/career/skills]]: not modified.

### Index changes

- Concepts section: added 2026 AI agency landscape sub-section with all 10 new concept/concept-adjacent pages
- Entities: added [[notebooklm]] under wiki tooling; added [[openclaw]] / [[lindy-ai]] / [[n8n]] / [[trigger-dev]] under 2026 agent ecosystem
- Sources: added 3 notebook entries
- Workflows: added [[ninety-day-launch-plan]]

### Open threads

- Audio overviews skipped (4 total, not transcribed) — could be a follow-up if the notebook content matters more than expected
- NotebookLM doesn't expose source URLs through share view; YouTube videos in the source pile are tracked by title only
- The "$3 billion API requests monthly" + "Claude Sonnet 4.5 77.2% on real-world coding benchmarks" stats from the Deep Research are unverified — flag for next [[lint-workflow]] pass
- The Strategic Arbitrage report was 47 sources discovered; only the synthesis is captured, not the underlying source list. Worth Finn re-running NotebookLM in deep-research mode if he wants to drill into any specific claim.

## [2026-04-25] ingest | Alex Krentsel OpenClaw Deep Dive (YouTube talk)

Source: `raw/openclaw-deep-dive-krentsel.md` (extracted from https://youtu.be/sxX8BMscce0 and linked Google Slides, published 2026-04-13).

Speaker: Alex Krentsel (UC Berkeley NetSys Lab / Google Research). 1:03:11 talk, 19.5K views at capture.

Pages created (6):
- Source: [[openclaw-deep-dive-krentsel]]
- Concepts: [[loopiness-framework]], [[autonomous-agent-design-principles]], [[living-config-files]], [[discord-hub-pattern]]
- Tech: [[openclaw-architecture]]
- Entity: [[alex-krentsel]]

Pages updated (4):
- [[openclaw]]: expanded from high-level sketch to full architectural detail, added living config files, heartbeat pattern, use cases, updated comparison table
- [[phase-3-agents]]: added numbering mismatch warning (Krentsel Phase 1-4 vs existing Phase 0-3), linked [[loopiness-framework]]
- [[claude-code]]: added "Position in the Loopiness Framework" section, living-config cross-reference
- [[mcp-protocol]]: added OpenClaw connector model contrast, cross-linked [[openclaw-architecture]] and [[loopiness-framework]]

Career/business relevance: YES. Three new ideas appended to [[Finn-OS/ideas/backlog]]:
1. Adopt the living config files pattern (split CLAUDE.md or create per-client SOUL.md files)
2. Experiment with a heartbeat pattern for Cowork (scheduled context dump every N minutes)
3. Try the Discord Hub pattern for multi-project coordination

Index updated: added autonomous agent architecture sub-section to Concepts, added [[openclaw-architecture]] and [[living-config-files]] to Tech, added [[alex-krentsel]] to Entities, added source entry.

## [2026-04-25] config | Graph view setup + weekly maintenance scheduled task

Set up Obsidian graph view with filtered visual presets inspired by [[nate-herk-claude-code-video|Nate Herk's second brain]] approach.

Config changes:
- `.obsidian/graph.json`: added 10 color groups by page type, tuned forces for better layout
- `.obsidian/bookmarks.json`: 5 bookmarked graph presets (Master Wiki, Brainstorming, Business & Clients, Tech Stack, Active Projects)
- `.obsidian/snippets/graph-views.css`: subtle graph styling (node glow, text contrast)
- `.obsidian/appearance.json`: enabled the CSS snippet
- `CLAUDE.md`: added `weight` + `node_size` to the frontmatter spec

Node sizing: added `node_size` frontmatter to all 188 pages with `weight` values. Hub pages (finn-bennett, overlook-strategy, claude-code, three-altitudes, etc.) set to `node_size: 15`. Standard pages scaled from `weight` (high→10, medium→5, low→2).

Pages created:
- [[graph-view-setup]]: workflow page documenting the setup, plugin requirements, and maintenance

Scheduled task created:
- `wiki-weekly-maintenance`: fires every Monday at 9am. Runs a lint pass (contradictions, stale pages, broken links, missing frontmatter, orphans), syncs index.md against disk, checks Finn-OS freshness, writes a maintenance report to `wiki/maintenance-reports/`, and appends to log.md.

Finn action required: install "Dynamic Node Size" community plugin in Obsidian for `node_size` frontmatter to affect graph node sizes. Without it, node sizing is purely by link count (still works, just less control).

## [2026-04-25] ingest | Greg Isenberg — SaaS is minting millionaires again (30-step playbook, YouTube)

Source: `raw/isenberg-future-of-saas-30-step.md` — auto-caption transcript of https://youtu.be/9T1yWEq5kP0 ("SaaS is minting millionaires again (here's how)") on the Startup Ideas podcast. Captured via youtube-transcript-api (615 segments, ~23K chars).

Transcript caveats noted in raw header: ASR errors (Manus → "Manis", Belsky → "Bellski", Isenberg → "Eisenberg", per-seat → "Percy", OpenClaw → "open claw", Cowork → "co-work"). Corrections inline.

### Pages created (10)

Source (1): [[isenberg-future-of-saas-30-step]]

Concepts (5): [[agent-native-saas]], [[per-task-pricing]], [[services-first-saas]], [[media-first-distribution]], [[orchestration-as-interface]]

Workflow (1): [[build-niche-agent-saas]]

Entities (4): [[greg-isenberg]], [[scott-belsky]], [[ideabrowser]], [[manus]]

### Pages updated (10)

- [[overlook-strategy-positioning]]: positioning fork now has three options (lead with vibe coding / hide it / side-track an agent-native SaaS line). Added cross-links to all five new concept pages.
- [[ai-agency-niches]]: added a "fourth axis: pricing model" section linking [[per-task-pricing]] and [[agent-native-saas]]; sources updated.
- [[productized-services]]: added a "sequencing variant — services-first" section linking [[services-first-saas]] and [[per-task-pricing]]; sources updated.
- [[wat-framework-marketing]]: added "adjacent: media-as-product" section linking [[media-first-distribution]] and [[orchestration-as-interface]]; sources updated.
- [[ninety-day-launch-plan]]: added "tactical companion — Isenberg's 30-step playbook" section pointing to [[build-niche-agent-saas]]; sources updated.
- [[vibe-coding]]: added agent-native SaaS as a fourth adjacent term (the *product* form vibe coding can take); related links extended.
- [[mcp-protocol]]: added "where MCP shows up in agent-SaaS pricing" section connecting MCP to [[per-task-pricing]] and [[orchestration-as-interface]].
- [[boring-business-automation]]: added "Isenberg's roofing-company example" section noting Isenberg uses this concept's exact target market as his canonical example.
- [[pricing-and-rates]]: added "pricing models worth considering" section flagging [[per-task-pricing]] as a model to pilot on one Overlook workflow.
- [[claude-code]]: added section on Isenberg's three-tool framing (Claude Code / Manus / ChatGPT as interchangeable for content + workflow extraction).
- [[openclaw]]: added section on Isenberg's mention of OpenClaw alongside Manus / ChatGPT.

### Career/business relevance: YES

Six new idea seeds appended to [[Finn-OS/ideas/backlog]]:
1. Side-track an [[agent-native-saas]] line alongside Overlook (don't pivot, just add)
2. Pilot per-task pricing on one repeatable Overlook workflow
3. Run a daily content engine for one channel as the "AI CMO" (using [[claude-code]] / [[openclaw|Cowork]] on Schedule Tasks)
4. Extend the [[overlook-portal-webapp|client portal]] into an orchestration surface
5. Map one Overlook workflow end-to-end as a Step 2 exercise
6. (Implicit) The agent-native-saas niche candidates listed in [[agent-native-saas]] are themselves a sub-backlog worth ranking during weekly review

[[Finn-OS/now]] updated with two open threads under "From career / business":
- Decide whether to pursue the agent-native SaaS side-track (pick niche + run Step 2 if yes, kill if no)
- Pilot per-task pricing on one repeatable workflow

[[Finn-OS/career/opportunities]]: not modified (no specific lead surfaced).

[[Finn-OS/career/skills]]: not modified (no deliberate-practice commitment surfaced; running a content engine could become one if Finn commits).

### Index changes

- People & organizations: added [[greg-isenberg]] and [[scott-belsky]]
- Tools & services: added [[manus]] to 2026 agent ecosystem; added [[ideabrowser]] as a niche-discovery tool
- Workflows: added [[build-niche-agent-saas]]
- Concepts: new "Agent-native SaaS playbook" sub-section with all 5 new concept pages
- Sources: added [[isenberg-future-of-saas-30-step]]

### Open threads

- The "default execution layer" framing (Step 30) is provocative but undefined operationally — if Overlook ever pursues this, what does the per-niche end-state actually look like for an agency-adjacent workflow? Worth revisiting once a candidate niche is picked.
- Isenberg's claim that public-market SaaS is down 30–50% partly because of per-seat decline is plausible but not sourced. Worth fact-checking against actual SaaS index performance (NDX or Bessemer Cloud Index) if pricing-model claims become a marketing message.
- Caption transcript only — no slide deck, no shownotes captured. If Finn references this video again, the raw is the canonical source within the vault but the YouTube link should be the canonical citation externally.

## [2026-04-25] synthesis | 3 Overlook ideas + 4 GCP credit articles

Synthesized the [[isenberg-future-of-saas-30-step|Isenberg ingest]] against existing wiki concepts to generate three actionable Overlook ideas and four GCP-credit-tied technical articles.

### Pages created (8)

Business (3):
- [[workflow-audit-service]]: $1.5–3K productized AI service tier — lowest-friction first AI offering, no infra build, generates pipeline for follow-on per-task work
- [[per-task-pilot-on-retainers]]: Add per-task line items ($50/post, $75/digest) to the Ventura Forward retainer — tests Isenberg's per-task pricing thesis with zero new sales motion
- [[portal-orchestration-extension]]: Extend the existing Overlook portal with an Agents tab (run queue, output review, memory, task ledger, suggestions) — reuses existing UX, becomes both differentiator and demo surface

Personal (1):
- [[gcp-credits]]: Anchor page documenting the $300 GCP free-tier credit, budget allocation across the four experiments, and exit paths

Tech (4):
- [[gcp-cloud-scheduler-agent-heartbeat]]: Cloud Scheduler + Cloud Tasks as the heartbeat layer for agent-SaaS workflows ($5–$15 burn)
- [[gcp-vertex-gemini-mechanical-tier]]: Gemini Flash as the cheap mechanical-task tier in the hybrid LLM stack ($40–$80 burn)
- [[gcp-document-ai-document-analysis-niche]]: Document AI as OCR layer for the document-analysis niche; pairs with existing Ollama+pgvector ($60–$120 burn)
- [[gcp-maps-platform-outbound]]: Maps Platform / Places API for niche discovery + outbound list-building ($30–$60 burn, mostly inside the separate $200/mo Maps free credit)

### Finn-OS touched

[[Finn-OS/ideas/backlog]]: 5 new idea seeds appended (Workflow Audit, per-task pilot, portal Agents tab, GCP 12-week experiment rotation, plus an umbrella for the four GCP articles).

[[Finn-OS/now]]: not modified beyond the prior ingest entries — these new ideas should land in `now.md` only when Finn picks one to actively pursue during weekly review.

### Index changes

- Business: 3 new pages added
- Personal: GCP credits anchor added
- Tech: new "GCP $300-credit experiments" sub-section with all 4 articles

### Cross-references

The three Overlook ideas and the four GCP articles cross-reference each other heavily. The intent is that any one of them can be entered from any of the others, since the strategy is interlocking — the Workflow Audit service feeds prospects into per-task billing pilots, which feed validation data into the portal orchestration tab, which uses the GCP infrastructure for execution.

### Open thread

If Finn pursues any of the three Overlook ideas, the natural sequence is:
1. **Workflow Audit** ([[workflow-audit-service]]) as the first paid AI offering — week-of decision, no build risk
2. **Per-task pilot on Ventura Forward** ([[per-task-pilot-on-retainers]]) — invoice change, no infra
3. **Portal Agents tab** ([[portal-orchestration-extension]]) — 3-5 day build once one of the above proves real
4. **GCP experiments** ([[gcp-credits]]) — runs in parallel to all three, capped at 12 weeks for credit expiry

None of this is committed work. All four sit in [[Finn-OS/ideas/backlog]] awaiting Finn's next weekly review.

## [2026-04-25] ingest | Pier and Point — Ventura hyperlocal news venture (deep research)

Source: `raw/pier-and-point-research.md` — ~6,500-word deep research compass artifact commissioned by Finn. Audits Ventura's news landscape, scopes an AI-assisted hyperlocal newspaper under [[overlook-strategy]], picks an opinionated TypeScript stack, models monetization to LION-median benchmarks, walks the legal posture, and lays out a six-month phased build roadmap.

Brand decision (this session): **Pier and Point** — `pierandpoint.com` claimed via Vercel domain check ($11.25). Other candidates checked but passed on: `topa.news` ($17.99), `ventura.report` ($35.99), `mission.news` ($123.75), `buenaventura.news` ($123.75), `alongtheventura.com` ($11.25), `venturaside.com` ($11.25). Taken: `baseline.news`, `thepointforward.com`, `venturadaily.com`. Per Finn's filing direction: file under Overlook Strategy umbrella (all his dev work links back to the LLC).

### Pages created (22)

Sources (1): [[pier-and-point-research]]

Business (3): [[pier-and-point]], [[pier-and-point-execution]], [[pier-and-point-monetization]]

Tech (1): [[ai-newsroom-pipeline]] — reusable Sanity + Mastra + Inngest + Kimi/Claude pipeline pattern

Concepts (1): [[ai-journalism-legal-posture]] — defamation framework, §230 gap for AI content, anti-SLAPP, 14-item launch disclosure list

Entities — tools (9): [[mastra]], [[inngest]], [[baml]], [[beehiiv]], [[resend]], [[kimi-k2]], [[whisperx]], [[neon]], [[tiptap]]

Entities — organizations (7): [[lion-publishers]], [[press-forward]], [[gni-growth-catalyst]], [[vcstar]], [[ojai-valley-news]], [[kclu]], [[vc-reporter]]

### Pages updated (3)

- [[ventura-forward]]: added `> [!warning]` callout flagging the name collision with Pier and Point. Same geography, different things. Cross-link added.
- [[ventura-forward-app]]: added second `> [!warning]` callout noting the name collision and surfacing cross-pollination potential (Report It data → news tip line if both ship).
- [[overlook-strategy-positioning]]: added new "Ventures under the Overlook umbrella" section with [[pier-and-point]] as the first entry.

### Career/business relevance: YES

Pier and Point IS career/business — it's a venture under the Overlook LLC umbrella. Filing direction confirmed by Finn (b + d: partly an expansion of Ventura Forward client work, partly a captured opportunity sketch).

[[Finn-OS/ideas/backlog]]: appended one entry under "New ideas" — the venture itself with crosslinks to all three business pages.

[[Finn-OS/now]]: appended two open threads under "From career / business":
1. Decide pursue/shelf/punt on Pier and Point — the GNI Growth Catalyst $100K grant May 7 deadline (12 days out) is the forcing function.
2. Surface to [[ventura-forward]] client at next check-in before they hear about it secondhand.

[[Finn-OS/career/opportunities]]: not modified (no specific lead/conversation surfaced beyond the Ventura Forward client connection, which is already an active relationship).

[[Finn-OS/career/skills]]: not modified. If Finn pursues Pier and Point, sales motion + editorial discipline become deliberate skill areas worth tracking.

### Index changes

- Business section: new "Pier and Point — Ventura hyperlocal news venture" sub-section with all 3 business pages
- Tech section: new "AI newsroom pipeline" sub-section with [[ai-newsroom-pipeline]]
- Concepts section: new "AI journalism" sub-section with [[ai-journalism-legal-posture]]
- Sources: added [[pier-and-point-research]]
- Entities — tools/services: new "AI newsroom stack" sub-section with all 9 tool entities
- Entities: new "Local journalism / grants" sub-section with all 7 organization entities
- Clients: noted name-collision warning on the [[ventura-forward]] entry inline

### Open threads

- **GNI Growth Catalyst May 7 deadline** is the time-pressure decision. Apply / defer / let pass.
- Whether to claim `.news` and `.co` redirects for `pierandpoint` (24-hour TTL on Vercel domain prices noted).
- Whether to surface Pier and Point to [[ventura-forward]] client proactively or wait until decision is made.
- Identity question (publisher vs agency owner) flagged in [[pier-and-point-execution]] — not a research gap, a personal one.
- Sales motion is the biggest non-tech gap per [[pier-and-point-execution]] — applies regardless of whether Pier and Point ships, since direct sponsorship outreach is also relevant to any Overlook productization.

### Token discipline notes

This ingest delegated the four heavy pages (concept, execution, monetization, tech, legal) to four parallel Sonnet subagents and the 16 entity stubs to one Haiku subagent. Cross-link bookkeeping (existing-page warnings, Finn-OS aggregators, index, this log entry) handled in the orchestrator. Total subagent token usage logged ~315K across 5 subagent runs.

## [2026-04-26] lint-fixes | Batch fix from first weekly lint run

First automated weekly lint ran and surfaced ~50 issues. Fixes applied:

**Pages moved (1):**
- `file-organization-pass.md`: in-progress → deployed (status was already `shipped`)

**Pages created (16):**
- `wiki/concepts/deep-research-strategic-arbitrage.md` (was missing, 15 refs)
- `wiki/entities/alchemy.md` (CBS TV Movie, 8 refs)
- `wiki/entities/fastapi.md`, `sqlalchemy.md`, `alembic.md`, `postgres.md`, `tailwind.md` (core stack)
- `wiki/entities/gsap.md`, `stripe.md`, `shadcn-ui.md`, `lenis.md`, `medusa.md`, `slowapi.md`, `gemini-api.md` (supporting tools)
- `wiki/entities/wave.md` (Wave Accounting, had MCP but no page)
- `wiki/entities/heyismail-life-os.md` (Life OS inspiration source)

**References fixed (~35):**
- `[[file-org-pass]]` → `[[file-organization-pass]]` (7 files)
- `[[overlook-webapp]]` → `[[overlook-portal-webapp]]` (8 files)
- `[[life-os]]` → `[[notion-life-os]]` (8 files)
- `[[CLAUDE.md]]` → `[[CLAUDE]]` (4 files)
- `[[krentsel-openclaw-deep-dive]]` → `[[openclaw-deep-dive-krentsel]]` (2 files)
- Casing fixes: `[[Alembic]]`→`[[alembic]]`, `[[Postgres]]`→`[[postgres]]`, `[[Anthropic]]`→`[[anthropic]]`, `[[Andrej Karpathy]]`→`[[andrej-karpathy]]` (5 files)

**Orphan fixes (2):**
- Linked `[[stack-tools]]` from `finn-bennett.md`
- Linked `[[abandoned-archive]]` from `status-dashboard.md`

**Not fixed (permission issue):**
- `wiki/sources/krentsel-openclaw-deep-dive.md` couldn't be deleted (already a redirect stub, harmless)

Updated `index.md` with all new pages. In-progress count 15→14, deployed 12→13.

## [2026-04-26] ingest | Graphify cheat sheet

Source: `raw/graphify-cheat-sheet.md` — Finn's own operational reference for the [[graphify]] knowledge-graph layer he wired over this vault. The graph is at `Finn-Wiki/graphify-out/`; the MCP server `graphify-finn-wiki` auto-loads when Claude Code is launched from the vault root via the `wiki` alias.

Pages created:
- Source summary: [[graphify-cheat-sheet]]
- Entity: [[graphify]] — the tool, with full alias/MCP-tool/edge-type tables
- Workflow: [[wiki-graph-querying]] — when to grep vs. traverse, query templates, rebuild rhythm

Pages updated:
- [[knowledge-graph-llm-wiki]] — added a `> [!warning]` callout. The "wait until 300 pages" stance is **superseded**: Finn shipped the overlay at the current scale using graphify (not InfraNodus). Counter-argument kept for reference. Cost/value section rewritten as resolved.
- [[llm-wiki-pattern]] — implementation section now notes the graphify overlay; limits section softened the "graph view replaces index.md" claim with the actual current setup.
- [[mcp-protocol]] — added a "Local / vault-scoped MCPs" subsection covering `graphify-finn-wiki`.
- [[setup-obsidian-vault]] — added an optional graphify install section after the first-ingest verification.
- [[query-workflow]] — added a "Structural questions: prefer the graph" section pointing to [[wiki-graph-querying]].
- [[hardware-setup]] — added a "Wiki shortcuts in `~/.zshrc`" section noting the `wiki-*` alias block.
- `index.md` — added [[graphify]] under tools/services, [[wiki-graph-querying]] under workflows, [[graphify-cheat-sheet]] under sources.

Finn-OS touched: yes — appended one bullet to [[Finn-OS/ideas/backlog]] for the Tailscale Funnel mobile-access side project (wrap `graphify.serve` in HTTP/SSE, expose via Tailscale Funnel, add as claude.ai custom connector). No `now.md` update — explicitly framed in the source as "worth building when mobile graph queries become an actual recurring pain," not a current commitment.

Open thread surfaced: the Tailscale Funnel mobile-graph-access plan. Stdio-only transport is the current limit on graphify usage outside Claude Code desktop.

## [2026-04-27] maintenance | Weekly lint pass

Second automated weekly maintenance run. Report at [[maintenance-reports/2026-04-27]]. No silent fixes — flagged for Finn.

Headline findings:
- 2 real broken links in `wiki/entities/kimi-k2.md` (model-name links `[[claude-opus-4-7]]`, `[[claude-sonnet-4-6]]`)
- 30 stale `[[local_*]]` / `[[session-*]]` refs across 15 files — leftover from the original batch ingest, never resolved to source pages. Recommend bulk-strip
- 13 orphan pages — most are Finn-OS scaffolds (archive, monthly, ranked, network, opportunities, skills) plus a few wiki-side concepts that just need crosslinks (three-js, finance-hub, life-os-update, project-status-audit, finn-wiki-ingest, elevenlabs)
- 16 pages on disk not in `index.md` — 8 are real wiki gaps, others are intentional Finn-OS sub-page exclusions
- `wiki/projects/status-dashboard.md` counts disagree with disk: still says "In-progress (15)" / "Deployed (12)" but file-organization-pass moved to deployed/ in the 2026-04-26 lint
- `wiki/sources/krentsel-openclaw-deep-dive.md` is a flagged-twice duplicate stub — recommend deleting
- No 30-day-stale projects, but every in-progress page is frozen at `updated: 2026-04-24` (creation date) — content-update discipline drift, soft flag
- Finn-OS/now.md is fresh (updated 2 days ago); recent ingests intentionally didn't thread into it

Pages touched:
- `wiki/maintenance-reports/2026-04-27.md` (new)
- `log.md` (this entry)

## [2026-04-27] lint-fixes | Apply all recommendations from weekly maintenance pass

Acted on the 2026-04-27 maintenance report. Finn requested all fixes plus the "better fix" for the project-debrief loop (scheduled task, not zsh alias).

**Edits made directly:**

- `wiki/entities/kimi-k2.md` — repointed both `[[claude-opus-4-7]]` and `[[claude-sonnet-4-6]]` to `[[anthropic]]` (model-version pages would rot)
- `wiki/projects/status-dashboard.md` — moved `[[file-organization-pass]]` from In-progress (15→14) to Deployed (12→13); added crosslink to `[[project-status-audit]]`
- `index.md` — added `[[anthropic]]`, `[[elevenlabs]]`, `[[three-js]]`, `[[finance-hub]]`, `[[abandoned-archive]]`, `[[overlook-strategy-design-system-bundle]]`, plus a new "Skills documented in the wiki" sub-section under Concepts ([[finn-wiki-ingest]], [[life-os-update]], [[project-status-audit]]); added [[stale-project-debrief]] under Workflows
- `Finn-OS/README.md` — rebuilt as a proper hub. Now has frontmatter (was missing), an explicit "Pages in this folder" section with wikilinks to every Finn-OS sub-page (was orphan-causing prose-only before), and a small "Operating record" section linking back into wiki/. Resolves 6 Finn-OS orphans (archive, monthly, ranked, network, opportunities, skills).

**Pages created:**

- `wiki/workflows/stale-project-debrief.md` — workflow page documenting the new scheduled task, including the full registration prompt. Solves the "every in-progress page frozen at `updated: 2026-04-24`" drift surfaced in the maintenance report.
- `setup.sh` (vault root) — bash script for the operations Cowork can't do directly: `rm` the duplicate-stub `wiki/sources/krentsel-openclaw-deep-dive.md`, sed-strip the 30 stale `[[local_*]]` / `[[session-*]]` refs across 15 files (frontmatter `sources:` arrays + inline citations), and append `## Related` crosslinks to four pages (three-js → three-js-patterns; finance-hub → finance-tracking; life-os-update → notion-life-os; finn-wiki-ingest → ingest-workflow). Idempotent — safe to re-run.

**Still requires Finn:**

1. Run `bash setup.sh` from the vault root. Will print verification grep commands.
2. Register the `stale-project-debrief` scheduled task from a regular (non-scheduled) Cowork session. Prompt body is in `wiki/workflows/stale-project-debrief.md`. Cron `0 9 * * 2` (Tuesdays 9am, day after the Monday lint).
3. Optional `git -C` commit after setup.sh runs cleanly.

**Sandbox notes:** the autonomous run hit `Resource deadlock avoided` on most iCloud reads (dataless files in this Cowork sandbox) and `ENOSPC` on user-machine disk during task tracking — neither blocked the actual edits. Mentioning so future runs know to expect it.

## [2026-04-28] ingest | Automated News Playbook for Civic Operators (compass artifact)

Source: `raw/automated-news-playbook-civic-operators.md` — ~10,000-word second-pass deep research compass artifact on the entire automated news landscape. Commissioned 9 days before the GNI Growth Catalyst May 7 deadline. Sibling to the April 25 [[pier-and-point-research]] but **broader, more outside-Ventura, and more comparative**: 7 sections on tech stack, automation depth, fact-checking, monetization with hard numbers, US legal landscape, what successful operators have in common, and operator case studies, plus a closing "if Finn were starting today" recommendation that maps directly onto [[pier-and-point]].

**Key new contributions vs. April 25 research:**

- Operator deep dives: [[citymeetings-nyc]] / [[vikram-oberoi]] (the canonical solo template — three-step LLM chain with inter-step human review UIs); [[6am-city]] (unit economics: $250–300K/market launch, 70% margin within 36 months, $500K viability); [[axios-local]] (still unprofitable at $20M revenue across 34 markets, OpenAI partnership Jan 2025 funds the newsroom); [[semafor]] (events drive >50% of $40M revenue); [[punchbowl-news]] ($1M founder funding → ~$20M in 3 years); [[block-club-chicago]] / [[berkeleyside]] / [[hoodline]] / [[bnn-breaking]] / [[newsbreak]]
- Newsletter-only operators: [[tldr-newsletter]] (>$10M ad-only 2025), [[lennys-newsletter]] ($4M+/yr, 5% paid conversion benchmark), [[stratechery]] ($5M+/yr at 40K paid)
- Civic ingestion + monitoring tooling: [[civic-scraper]] (Big Local News at Stanford, BSD), [[city-scrapers]] (City Bureau), [[openstates]], [[muckrock]], [[documentcloud]], [[hearst-assembly]] (13,119 hrs of meetings May 2024 → April 2025), [[newsguard]] (3,006 AI farms tracked), [[pangram-labs]]
- Legal updates: ***NYT v. OpenAI*** MTD denial (April 4, 2025), ***Advance Local v. Cohere*** MTD denial (Nov 2025) — substitutive summaries plausibly infringe; ***Walters v. OpenAI*** SJ for OpenAI (May 19, 2025) with publisher-analogy detail; SB 942 pushed to Aug 2 2026; SB 53 effective Jan 1 2026; AB 316 bars "the AI did it autonomously" defense; AB 2655+2839 struck down 2025
- Pattern claims: original-to-aggregated ratio is predictive of survival; the [[human-moat-pattern]] (events + original + community + voice) is what successful operators monetize; [[transparency-premium-as-traffic-strategy|disclosure as traffic strategy]] (Google ranking + ad-network acceptance + grants + reader trust); realistic 3-year solo ceiling **$200K–$800K, not $1M+**
- Anti-hallucination patterns: [[quote-then-answer-pattern]], "according to" prompting, LLM-as-judge with different model family, citation-fidelity check post-generation

**Pages created (16):**

Sources (1): [[automated-news-playbook-civic-operators]]
Entities (16): [[citymeetings-nyc]], [[vikram-oberoi]], [[6am-city]], [[axios-local]], [[semafor]], [[punchbowl-news]], [[block-club-chicago]], [[berkeleyside]], [[hoodline]], [[bnn-breaking]], [[newsbreak]], [[civic-scraper]], [[city-scrapers]], [[openstates]], [[muckrock]], [[documentcloud]], [[hearst-assembly]], [[newsguard]], [[pangram-labs]], [[tldr-newsletter]], [[lennys-newsletter]], [[stratechery]]
Concepts (3): [[transparency-premium-as-traffic-strategy]], [[human-moat-pattern]], [[quote-then-answer-pattern]]
Comparisons (1): [[ai-news-failures-curriculum]] — combined failure curriculum (CNET / SI / Gannett LedeAI / Microsoft MSN / Apple Intelligence / Hoodline / BNN / NewsBreak)

**Pages updated:**

- [[pier-and-point]]: TL;DR refined with $200–800K solo ceiling, transparency premium as load-bearing positioning choice; new bullet 5 in "the bet" for the four [[human-moat-pattern]] pillars; sources expanded
- [[pier-and-point-execution]]: Civic ingestion estimate compressed 3–5d → 1–2d via [[civic-scraper]]; new "[[citymeetings-nyc]] design pattern" section detailing the three-step LLM chain + inter-step review UIs as the canonical solo template
- [[pier-and-point-monetization]]: TL;DR refined with realistic 3-year ceiling; Mediavine Journey threshold confirmed (Jan 15 2026); Comparables section expanded with 6AM unit economics + Semafor events + Punchbowl niche + Block Club + Berkeleyside + Axios Local cautionary + Hoodline cautionary + aggregator-only failure cases
- [[ai-newsroom-pipeline]]: Civic ingestion toolchain (civic-scraper / OpenStates / MuckRock / DocumentCloud / Hearst Assembly / Chalkbeat LocalLens); inter-step review UI pattern for TipTap admin; quote-then-answer + LLM-as-judge + citation-fidelity check anti-hallucination patterns; updated scraping case law (Bright Data wins)
- [[ai-journalism-legal-posture]]: TL;DR adds three rulings (NYT v. OpenAI MTD denial, Cohere substitutive summaries, Walters publisher-analogy); Cohere warning callout in copyright posture; AB 316 closes "the AI did it autonomously" defense; ADA / DOJ Title II April 24 2026 + accessiBe FTC settlement; CCPA/CPRA at-launch posture
- [[inngest]]: `step.ai.infer()` primitives + n8n-as-no-code companion noted
- [[beehiiv]]: Company numbers (Tyler Denk founder, $24K → $30M ARR by mid-2025, ~110–142 staff, ~90K publishers); CPM tier table

**Finn-OS touched: yes**

- [[Finn-OS/now]]: refined the existing Pier and Point GNI yes/no/punt thread with the April 28 sharpening (Citymeetings.nyc proves solo viability; ceiling refined to $200–800K; transparency premium as positioning choice → net effect *yes-but-narrow-the-ambition* not *no*). Added new bullet flagging [[overlook-portal-webapp]] AI summary panel audit for *Cohere* substitutive-summary risk — applies beyond Pier and Point.
- No bullet appended to [[Finn-OS/ideas/backlog]] — Pier and Point is already there from April 25; this ingest sharpens the existing thread rather than adding a new one.

**Index touched:**

- New "Civic ingestion + AI-news monitoring tools" sub-section under tools/services
- New "News operators — comparables for Pier and Point" sub-section under tools/services
- New "Newsletter-only operators" sub-section
- Updated AI journalism concepts section with three new concept pages
- Added [[automated-news-playbook-civic-operators]] under sources
- Added [[ai-news-failures-curriculum]] under comparisons
- Updated AI newsroom pipeline + Pier and Point business sub-section markers with April 28 update notes

**Open threads carried forward:**

1. **GNI Growth Catalyst May 7 (9 days)** — decision now sharper after April 28 ingest. Recommended framing: *yes-but-narrow-the-ambition*. See [[Finn-OS/now]] for the three paths.
2. **Cohere substitutive-summary audit** for [[overlook-portal-webapp|Overlook portal AI summary panel]] — quick structural audit + add per-summary disclosure block. Applies to any client deliverable that summarizes external content.
3. **The [[citymeetings-nyc]] inter-step review UI pattern** is a new design constraint for the [[ai-newsroom-pipeline|TipTap admin UI]] — review surfaces between each LLM step, not just final approval. Sharpens the original execution map.

## [2026-04-28] backfill | Project frontmatter contract — 19 pages

Backfilled the new finn-life-os-daily frontmatter contract across all in-progress and unfinished project pages. Added: revenue_type, revenue_score, effort_score, roi_score, icon, area, last_touched, next_action, blocker. Pinned `## Next Action` and `## Blockers` headings added where missing. All `updated:` dates bumped to 2026-04-28.

Pages updated: [[three-altitudes]], [[overlook-portal-webapp]], [[gearflip]], [[copper-and-cast]], [[waveshade]], [[overlook-boilerplates]], [[ventura-forward-app]], [[johnson-aviation]], [[gemini-usage-tracker]], [[riptide]], [[somliøya]], [[berklee-music-supervision-1]], [[notion-life-os]], [[hybrid-llm-workflow]], [[finn-bennett-dotcom]], [[latency-optimizer]], [[admin-client-app-template-ovlk]], [[kb]], [[iamhumantoo]]

Total ROI: 35
Action items (no blocker, has next_action): 14 (all in-progress pages + admin-client-app-template-ovlk)
Skipped: none — all 19 files found at expected paths

Source: schema in CLAUDE.md § Project frontmatter contract (added 2026-04-28).

## [2026-04-29] ingest + structural-add | Stack cheat sheet system + CLAUDE.md preference rules

Trigger: Finn flagged that recent recommendations have been too narrow — patron-saint example was the April 2026 Railway → Neon DB migration where Claude defaulted to Railway-the-database without checking Railway killed its free tier. He shared Theo's "Claude Code's favorite tech stack" video (https://www.youtube.com/watch?v=v1MptV67kSI), which is itself an analysis of the [amplifying.ai study](https://amplifying.ai/research/claude-code-picks/report) on Claude Code's modal picks across 20 categories. Theo's stated fix: a `CLAUDE.md` preference block. We built that, plus the deep version: a `wiki/tech/stack/` cheat sheet folder.

Source ingested:
- [[theo-claude-code-favorite-stack-2026-04-29]] (`wiki/sources/`) — full transcription via youtube-transcript-api, 46K-char auto-caption pull. Documents Claude Code's modal picks (Vercel 100%, GitHub Actions 94%, Stripe 91%, etc.) and Theo's reaction/alternatives.

Pages created (12):
- [[stack/README]] (`wiki/tech/stack/`) — index for the cheat sheet system, page template, how-Claude-uses-it, how-Finn-uses-it
- [[stack/databases]] — Neon (default), Supabase, Convex, Turso, the Railway/Render trap. **Hard rule: never default to Railway Postgres again**
- [[stack/hosting]] — Vercel + Cloudflare Pages frontend, Cloud Run + Render + Railway backend, the spindown/free-tier traps
- [[stack/auth]] — Clerk (default with Pack caveats), better-auth, Auth.js (legacy), WorkOS
- [[stack/ides]] — VS Code default, when to actually open WebStorm/DataGrip from his JetBrains pack, Cursor/Windsurf/Zed comparison
- [[stack/ai-coding-tools]] — Claude Code primary, Cursor/Windsurf/Codex/Aider/v0/Lovable comparison
- [[stack/payments]] — Stripe default, Lemonsqueezy/Polar for MoR/international tax
- [[stack/email-transactional]] — Resend default, Loops, AWS SES at scale
- [[stack/ci-cd]] — GitHub Actions default, Depot/Blacksmith for Docker speed
- [[stack/design-tools]] — Figma + commercial-use trap, Penpot, Affinity-by-Canva, Framer
- [[stack/audio-tools]] — Logic + Splice + Slate via Berklee (the $4/mo Splice deal is huge), DAW comparison, mastering options
- [[Finn-OS/stack-decisions]] (`Finn-OS/`) — curated current-picks slate. First-person voice. Includes "open threads" of unclaimed perks (Cursor 1yr-free, Splice Berklee tier, Slate via Berklee, Figma commercial seat for client work)

Pages updated (3):
- [[CLAUDE]] — added "Stack recommendation rules (READ BEFORE SUGGESTING ANY TOOL)" section after the existing "Finn's stack and conventions" block. Encodes: read `wiki/tech/stack/<category>` first, check [[student-discounts]], hard "do not"s (Railway Postgres / Render Postgres / SendGrid / Adobe XD / NI Komplete deal), hard "always check"s (commercial-use coverage, free-tier limits in the recommendation, link to alternatives). Also updated the "Finn's stack and conventions" line on backend to reflect the Neon-default-for-new-Postgres rule.
- `index.md` — new "### Stack cheat sheet (added 2026-04-29) — what to pick for what job" subsection inside Tech, with all 11 stack pages linked. Added Theo source page to Sources.
- `log.md` — this entry.

Finn-OS touched: yes — created [[Finn-OS/stack-decisions]] as a new aggregator page under Finn-OS root. Surfaces the "what I'm using right now" slice + open threads. Did NOT add to [[Finn-OS/now]] because the threads listed are infrastructure / preference activations, not week-of work — they should sit in [[Finn-OS/career/skills]] or [[Finn-OS/stack-decisions]] open threads. Flag for Finn to triage on next weekly review.

Open threads surfaced:
1. **Claim Cursor Pro 1-year-free** via SheerID — costs nothing, useful A/B against Claude Code
2. **Confirm Splice is on $4/mo Berklee tier** — saves ~$108/yr if not done
3. **Claim Slate Digital All-Access via Berklee** — 70% off 140+ plugins
4. **Provision Figma commercial seat** for active client work — Figma Education plan is academic-use-only, currently being used for [[rustler-42]] and [[somliøya]] client work which violates TOS

Token note: dispatched 4 parallel haiku-tier subagents for research (web stack / IDEs+AI / design+audio / student perks), one for the YouTube transcript extraction, then synthesized + wrote in main session. Total ~525K tokens across subagents per usage logs. Could've been tighter — the IDE and AI coding research overlapped meaningfully and could've been one prompt.

Materially-changed-since-training-data findings worth noting:
- Clerk free tier bumped from 10K to 50K MAU
- PlanetScale brought back a free tier (after killing it 2024)
- fly.io effectively has no free tier as of 2024+
- SendGrid killed free tier 2024
- Cursor offers 1yr free for verified students via SheerID (new, no prior wiki page)
- Cognition acquired Windsurf Dec 2025
- Claude Opus 4.6 has 1M context window
- GitHub Copilot model picker shifting to credit-based June 2026

Companion to / does not duplicate: [[student-discounts]] (canonical for `.edu` deals — stack pages link to it, don't restate). [[vercel-deployment]], [[railway-deployment]], [[clerk-auth-pattern]], [[alembic-postgres-patterns]] (existing pattern pages — these are HOW-to-use docs, complementary to the new CHOICE-of-tool stack pages).

## [2026-04-29] config + structural-add | Projects ↔ Stack graph view

Trigger: Finn asked for an Obsidian graph view showing project ↔ tech-stack relationships, so the [[stack/README|stack cheat sheet system]] is queryable visually, not just textually.

Two parts shipped:

**1. Bookmark added to `.obsidian/bookmarks.json`** — sixth preset alongside Master Wiki / Brainstorming / Business & Clients / Tech Stack / Active Projects. Filter: `path:wiki/projects OR path:wiki/tech/stack OR path:wiki/entities` with hideOrphans=true (strips the ~70 unconnected entities, leaves the bridges). Color-coded:
- in-progress projects = green (3394611)
- unfinished projects = orange (16744448)
- deployed projects = gray (10066329)
- abandoned projects = slate (5921370)
- `wiki/tech/stack/*` = teal (1087451, matching existing Tech Stack preset)
- `wiki/entities/*` = light gray (13421772, bridge nodes)

**2. "## Used by" section added to all 10 stack category pages.** Mapped via grep across project frontmatter tags + body wikilinks. Findings:
- [[stack/databases]] — overlook-portal-webapp, ventura-forward-app, gearflip, echomind (abandoned), ollama-rag-pattern
- [[stack/hosting]] — 15 projects on Vercel, 1 on Railway. Most-connected stack page in Finn's graph
- [[stack/auth]] — only gearflip uses Clerk; overlook-portal uses X-Admin-Key
- [[stack/ai-coding-tools]] — hybrid-llm-workflow (canonical), overlook-portal-webapp, gearflip, pier-and-point. Implicit across all coding projects
- [[stack/payments]] — waveshade (Stripe), overlook-invoice-pay (Wave), overlook-strategy invoicing
- [[stack/email-transactional]] — none in production currently
- [[stack/ci-cd]] — implicit via Vercel auto-deploy on every project
- [[stack/ides]] — IDE choice is per-Finn, not per-project
- [[stack/design-tools]] — flagged TOS issue: Figma Education plan being used for paid client work (rustler-42, somliøya). Open thread surfaced
- [[stack/audio-tools]] — music-production, berklee-music-supervision-1, riptide, latency-optimizer, overlook-audio

Pages updated:
- `.obsidian/bookmarks.json` — new graph preset entry
- All 10 `wiki/tech/stack/*.md` pages — "## Used by" section inserted before "## See also"
- [[graph-view-setup]] — documented the new preset, filter query, and the maintenance pattern (update "Used by" during ingest when a project's stack changes)
- `log.md` — this entry

Finn-OS touched: no — this is wiki-tier configuration. The TOS-violation flag on Figma Education usage was already in [[Finn-OS/stack-decisions]] open threads from the April 29 ingest entry above.

To use the new view: in Obsidian, click the Bookmarks icon (top right of the workspace), pick "Projects ↔ Stack." First open may need a reload (Cmd+R) for the new bookmark to appear since this was added via filesystem edit.

Materially: the graph will show clusters around Vercel and Postgres/Neon (the most-used tools), thin bridges from Clerk and Wave, and cleanly isolated audio + design clusters since those don't share entities with web work. If clusters look sparse, the "Used by" sections are where to add edges.

## [2026-04-29] ingest + synthesis | Karpathy + Howie Liu — agentic-economy positioning for Overlook Strategy

Two YouTube sources ingested in one pass, both uploaded today:

- **Andrej Karpathy at Sequoia AI Ascent 2026** — `From Vibe Coding to Agentic Engineering`. 29:49, with Stephanie Zhan. The worldview piece: Software 3.0, ghosts not animals, jaggedness, verifiability, agentic engineering, understanding-as-bottleneck.
- **Howie Liu (Airtable / HyperAgent) on Greg Isenberg** — `Making $$ with AI Agents`. 1:05:11. The operator piece: white-collar GDP TAM, opportunity-cost pricing, skills as primitive, rubrics + LLM-as-judge, fleet command center, persistence arbitrage.

Trigger: Finn dropped both URLs and explicitly asked for a deep dive on the agentic ecosystem and how Overlook Strategy can position itself to compete in the agentic economy. Treated as a strategy session as much as an ingest.

**Raw filed:**
- `raw/karpathy-vibe-to-agentic.transcript.txt` (35.9 KB, 884 cues, full talk, chapter-bucketed)
- `raw/karpathy-vibe-to-agentic.en.vtt` + `.info.json`
- `raw/isenberg-howieliu-hyperagent.transcript.txt` (76.5 KB, 1,803 cues, full talk, chapter-bucketed)
- `raw/isenberg-howieliu-hyperagent.en.vtt` + `.info.json`
- `raw/_extracts/2026-04-29-karpathy-howieliu-digest.md` — chapter-by-chapter digest, deck-ready quotes (17 verbatim with timestamps), ~40-entry glossary, side-by-side compare/contrast

**Sources:**
- [[karpathy-vibe-to-agentic-2026-04-29]] — chapter-by-chapter source page with verbatim quotes
- [[isenberg-howieliu-hyperagent-2026-04-29]] — chapter-by-chapter source page with verbatim quotes

**Concept pages created (10):**
- [[software-3-0]] — three-paradigm frame, LLM as interpreter
- [[agentic-engineering]] — discipline above vibe coding, hub page (node_size 15)
- [[ghosts-not-animals]] — Karpathy's LLM ontology
- [[jaggedness-and-verifiability]] — RL circuits, why audits map clients to circuits
- [[skills-as-primitive]] — Howie's central primitive, hub page (node_size 15)
- [[rubrics-and-llm-as-judge]] — eval primitive, fleet observability
- [[opportunity-cost-pricing]] — $150 board memo, anchor on labor cost
- [[fleet-of-agents]] — humanoid org-chart-shaped agent deployment
- [[agentic-inflection-late-2025]] — December 2025 / Opus 4.5 threshold
- [[understanding-as-bottleneck]] — Karpathy's closing thesis

**Strategy synthesis page created:**
- [[agentic-services-positioning]] — **the load-bearing artifact.** Overlook Strategy as an "agentic engineering studio." Three productized tiers (Workflow Audit $1.5–3K, Skill Pack Build $7.5–15K, Always-On Retainer $1.5–4K/mo + per-task), 30-day build plan, pricing posture rooted in opportunity-cost, risks (verifiability gap, Cohere copyright thread, JetBrains license, Ollama production migration), and explicit cross-links to every existing strategy page in `wiki/business/`

**Existing pages updated:**
- [[overlook-strategy-positioning]] — open positioning question RESOLVED. New "Current headline" section with the agentic-engineering-studio framing + three-tier service stack
- [[vibe-coding]] — added Karpathy's update at Sequoia AI Ascent 2026, the "raises the floor / agentic engineering raises the ceiling" framing. Open question marked resolved
- [[workflow-audit-service]] — promoted to Tier 1 of the agentic-services stack, frontmatter weight bumped to high, callout added linking to [[agentic-services-positioning]]
- [[per-task-pilot-on-retainers]] — promoted to Tier 3 of the stack
- [[portal-orchestration-extension]] — promoted to Tier 2 of the stack
- [[index.md]] — added "Agentic ecosystem" subsection under Concepts (10 new pages), added [[agentic-services-positioning]] to Business, added the two source pages

**Finn-OS touched: yes — career/business-relevant, dual-filed.**
- [[Finn-OS/now]] — five new open threads added: adopt agentic-engineering positioning, migrate production AI off M1 Max, re-enable AskAIView under rubric supervision (closes Cohere thread), ship first MCP server, next-month sequencing. `updated:` bumped to 2026-04-29
- [[Finn-OS/ideas/backlog]] — eight new bullets capturing the three-tier productization, MCP server shipping, production AI migration, first-three-skill authorship, Ventura Forward as lighthouse, and the agentic-engineering positioning adoption itself
- [[Finn-OS/career/skills.md]] — "Currently building" section populated with three deliberate-practice areas: agentic engineering (the discipline), skill authorship + rubric design, outbound distribution
- [[Finn-OS/career/opportunities.md]] — "On the radar" populated with four warm-conversation candidates (Ventura Forward, Rustler Yachts, Sømliøya, Johnson Aviation) + a 30-day plan to convert radar into active conversations

**Verifications:** all 10 concept pages cross-link to ≥4 sibling pages, hub pages (agentic-engineering, skills-as-primitive) at node_size 15. Source pages cross-link to existing [[karpathy-llm-wiki-gist]], [[karpathy-autoresearch]], [[isenberg-future-of-saas-30-step]] threads. Strategy doc cross-links every relevant business / concept / project page. Banned-words audit: no `delve / robust / crucial / leverage / unlock / empower / supercharge / seamless / curated / journey / world-class / best-in-class` in any new page. No exclamation points. No emoji.

**Net effect:** the studio's positioning question is resolved with a vocabulary that aligns to where the buying-side is heading. The pile of agent-adjacent ideas Finn had been capturing since April 24 is now consolidated into a coherent three-tier stack with sequencing, pricing, and a 30-day build plan. Next move is Finn's: confirm the move and pick which week-1 task to start with, or push back.

## [2026-04-29] confirmation | Agentic-services positioning ✓ CONFIRMED

Finn confirmed the agentic-engineering studio positioning in the same session. [[agentic-services-positioning]] page status flipped to active with a confirmation callout. [[Finn-OS/now]] entry updated from "Decision needed" to "Confirmed; four-week build in motion." Next decision pending Finn: pick the first Week 1 task to kick off (audit template / AskAIView re-enable / production AI migration / first MCP server).

## [2026-04-29] productization | Workflow Audit templates shipped (Tier 1 productized)

Finn picked the audit template + SOW as the Week 1 kickoff task. Four artifacts shipped as `wiki/business/templates/workflow-audit/`:

- [[wiki/business/templates/workflow-audit/proposal|proposal.md]] — sales-flavored one-pager (~2 pages rendered), goes out before SOW
- [[wiki/business/templates/workflow-audit/sow|sow.md]] — Statement of Work covering Tier 1 (Audit / Audit+ / Audit + retainer) plus follow-on Tier 2 (Skill Pack Build, three sub-tiers $7.5K / $11.5K / $15K) and Tier 3 (Always-On Retainer, three sub-tiers $1.5K / $2.5K / $4K monthly). Standard terms section included for clients with no MSA. Election table at §11
- [[wiki/business/templates/workflow-audit/deliverable|deliverable.md]] — the audit document itself (~25 pages rendered). Sections: in-one-paragraph headline, methodology, workflow inventory, jaggedness map (3×3 visual), candidate skill shortlist (3-5 ranked), rubric prototype with thresholds, three forward-path recommendations, risks, appendices
- [[wiki/business/templates/workflow-audit/README|README.md]] — index for the templates folder + voice rules + personalization checklist + render targets

Plus the internal playbook:

- [[wiki/workflows/workflow-audit-engagement|workflow-audit-engagement.md]] — operator-tone day-by-day playbook for running an audit week. Pre-flight, Monday intake script, Tuesday/Wednesday interview structure with named questions, Thursday synthesis (jaggedness scoring on 10×10 axes, candidate filter, rubric prototype build), Friday readout structure, conversion math, six named pitfalls

**Voice discipline.** Every client-facing template enforces [[brand-voice]]: no banned words, no exclamation points, no emoji, em dashes only. Banned-word grep recipe included in the README. Audit pass on the new templates returned zero violations on the studio-authored copy.

**Pricing posture preserved.** All three tiers anchor on [[opportunity-cost-pricing|opportunity-cost pricing]] — proposal frames the audit's value as "five percent of senior labor cost for the recurring work being absorbed," SOW pass-through clause for infrastructure costs is non-negotiable. The proposal one-pager's "How the studio works" section reads in [[brand-voice]] verbatim ("phone off, notebook open").

**What's now buildable today vs blocked:** Tier 1 is end-to-end shippable — Finn can personalize the proposal and SOW for [[ventura-forward]] this week as the lighthouse engagement (audit run inside the existing $300/mo retainer, free for the case study). Tier 2 (Skill Pack Build) is unblocked on templates but blocked on the [[portal-orchestration-extension|portal Agents tab]] build (3-5 days) and the production AI migration to Vercel AI Gateway. Tier 3 deliverable structure is captured in the SOW but operational templates (rubric review, monthly cost report, model audit report) are still unbuilt.

**Pages updated:**
- [[agentic-services-positioning]] — Week 1 task ticked off, "templates shipped" callout
- [[Finn-OS/now]] — open thread updated with completion marker
- [[index.md]] — Templates entry added under Business; engagement playbook added under Workflows
- `log.md` — this entry

Next move pending Finn: pick the second Week 1 task (re-enable AskAIView under rubrics / production AI migration / ship first MCP / pitch the audit to Ventura Forward as the lighthouse).

## [2026-04-30] ingest | Isenberg / Schneider — Paid Chrome Extension thesis (YT short)

Source: 58s YouTube short from [[greg-isenberg|Greg Isenberg]]'s channel (June 2024), `https://youtube.com/shorts/lIzY1QuLyUo`. Cody Schneider as guest, gave a Redfin clipper as the example of the broader paid-Chrome-extension thesis. Auto-caption track was discovered in the page HTML but the signed timedtext URL had expired before retrieval — actual content captured from Finn's paraphrase, not transcript. Full episode (`https://youtu.be/kP6ZsZMl81E`) not yet ingested.

Finn's framing of the source's value: less about Cody's specific Redfin example, more about the broader thesis as a category to apply across his existing competence stack. Five concrete ideas surfaced in the same pass — three audio engineering, one aviation, one personal infra — plus the Notion-layout clipper as the rebuke to the official Notion clipper's URL-drop behavior.

### Pages created (10)

Source (1): [[isenberg-paid-chrome-extensions-2024]] (`wiki/sources/`)

Concept (1): [[paid-chrome-extensions]] (`wiki/concepts/`) — thesis hub. Pattern recognition (capture / transform / detect), distribution mechanics, MV3 risks, how to pick which one to build

Business — idea pages (6, all `wiki/business/`):
- [[business-ideas-notion-layout-clipper]] — Notion clipper that reconstructs page layout as blocks. Blocked on Blocks API audit
- [[business-ideas-music-key-tempo-detector]] — detect key/BPM of audio in any tab, export to Logic. Berklee + Overlook Audio moat
- [[business-ideas-taf-metar-decoder]] — decode aviation weather strings inline. Smallest scope, weekend project
- [[business-ideas-ai-music-detector]] — classify human vs. AI-generated music. Highest tech risk + brand leverage
- [[business-ideas-audio-sampler]] — Tape Notes-style audio clipper for browser tabs. Possible merge with key/tempo detector
- [[business-ideas-llm-wiki-clipper]] — wraps [[finn-wiki-ingest]] as one-click capture. Strategic alignment with [[llm-wiki-pattern]]

Entity stub (1): [[cody-schneider]] — guest who gave the Redfin clipper example. Likely Shopify-app background per source keywords

Raw (1): `raw/isenberg-paid-chrome-extensions-2024.md`

### Pages updated (4)

- [[greg-isenberg]] — added third source to `sources:` frontmatter, restructured "Why he's in the wiki" to reflect three captured sources (SaaS-30-step / Howie Liu / paid-extensions). Added "Recurring guests" section linking [[cody-schneider]]
- [[obsidian-web-clipper]] — added `## See also` cross-links to [[business-ideas-llm-wiki-clipper]], [[business-ideas-notion-layout-clipper]], and the [[paid-chrome-extensions]] thesis
- [[business-ideas-backlog]] — added new "Chrome Extensions (Isenberg / Schneider thesis, April 2026)" section indexing the six idea pages + thesis. Added source entry. Bumped `updated:` and `tags:` to include `chrome-extensions`
- [[index.md]] — added [[cody-schneider]] under People & organizations; added "Chrome extension idea pile" sub-section under Business with all 6 idea pages; added "Distribution / category theses" sub-section under Concepts with [[paid-chrome-extensions]]; added the source page under Sources

### Career/business relevance: YES (dual-filed)

[[Finn-OS/ideas/backlog]]: appended **seven new bullets** under "New ideas" — the meta-thesis ([[paid-chrome-extensions]]) plus the six concrete idea pages, each as one bullet with brief framing and a wikilink. Date stamps `[2026-04-30]`.

[[Finn-OS/now]]: not modified. None of these are commitments yet — they're idea seeds awaiting weekly review. If Finn picks one to pursue (the TAF/METAR decoder is the only weekend-scoped one), an open thread should land in `now.md` then.

[[Finn-OS/career/opportunities]]: not modified.

[[Finn-OS/career/skills]]: not modified.

### Open threads

- **Full episode not ingested.** Parent video `https://youtu.be/kP6ZsZMl81E` likely contains other Cody Schneider plays (Shopify-adjacent per keywords). Ingest if/when there's a reason — not now.
- **Notion Blocks API audit (1 hour).** Hard blocker on [[business-ideas-notion-layout-clipper]] — confirm columns / callouts / embeds are exposed in the public API. If they aren't, that idea drops to "better markdown clipper."
- **Possible merger.** [[business-ideas-llm-wiki-clipper]] and [[business-ideas-notion-layout-clipper]] share the same capture mechanic with different downstream targets. Could collapse into one extension with pluggable destinations.
- **Possible merger #2.** [[business-ideas-audio-sampler]] and [[business-ideas-music-key-tempo-detector]] share the same audio-tap pipeline. Each clip auto-tagged with detected key/tempo would be a single extension with double the value per user.
- **MV3 / `tabCapture` reliability spike.** Three of the audio-stack ideas depend on `chrome.tabCapture` working reliably with permission UX that doesn't kick the user out. Worth a 2-hour spike before any further investment in the audio ideas.
- **Pricing thesis untested.** Six idea pages assume Web Store paid distribution + freemium models work. Worth confirming current state of Chrome Web Store payments (Google has been deprecating built-in payments) before committing.

### Token discipline notes

Source content was captured from Finn's paraphrase rather than the YouTube auto-caption track (signed URL had expired before retrieval). Saved a re-fetch cycle but left the parent episode (`kP6ZsZMl81E`) un-ingested. Used a single `general-purpose` subagent to extract structured metadata from the cached HTML (1MB) rather than reading the file directly. Page writing was main-context (Opus) since Finn explicitly preferred output quality on this one.
