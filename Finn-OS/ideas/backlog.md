---
title: "Ideas — Backlog"
type: finn-os
updated: 2026-04-29
---


# Ideas backlog

Raw dump. No scoring, no ranking, no editing. Just capture so the idea isn't lost.

When a new idea hits during a Cowork session, Claude appends here. When you have an idea on your phone or in conversation, drop it in yourself.

Move ideas to [[ranked]] when you're ready to evaluate them. Move to [[archive]] when you've decided to kill them (so the same idea doesn't keep cycling back from the dead).

## Format

One bullet per idea. Date stamp on the right. Optional `→ [[wiki-page]]` if the idea has a full backing page.

```
- [2026-04-24] Idea description in one line. → [[wiki-page-if-exists]]
- [2026-04-24] Another idea.
```

## Active ideas

> _Auto-populated by Claude on ingest when career/business signals detected. Add your own freely._

### Captured from existing wiki

The following ideas were already cataloged in [[business-ideas-backlog]]:

- CSV import button to simulate financial scenarios in Notion → [[notion-life-os]]
- GearFlip subscription tiers → [[gearflip]]
- AI normalization callout in pitch (calls Claude by name) → [[gearflip]]
- Spotify embed as a "Sonic Artifact" on the portfolio → [[three-altitudes]]
- Streaming summary generation for Overlook portal AI → [[overlook-portal-webapp]]
- `slowapi` rate-limiting on `/ask` if portal AI returns → [[overlook-portal-webapp]]
- Free client portal as competitive differentiator → [[client-portal-as-differentiator]]

### New ideas

- [2026-04-24] Productize an **AI-ready website conversion** service ($2k/project): WordPress → schema markup + `llms.txt` + structured data. Lowest-effort entry into the [[ai-agency-niches|AI agency niche table]]. → [[ai-agency-niches]]
- [2026-04-24] Productize the **LLM wiki pattern as a deliverable** for clients with messy institutional knowledge. Finn already runs the pattern personally; productization gap is small. → [[ai-agency-niches]]
- [2026-04-24] **Document analysis vertical service** (legal contracts, real estate disclosures, etc.) using the Ollama + pgvector stack already running in [[overlook-portal-webapp]]. Highest revenue ceiling, requires picking one vertical. → [[ai-agency-niches]]
- [2026-04-24] Stand up a **WAT-framework marketing engine** as either an internal Overlook capability or a client-facing service tier. Sub-agents on Trigger.dev / Modal / Railway. → [[wat-framework-marketing]]
- [2026-04-24] Run the [[ninety-day-launch-plan]] on whichever of the above niches lands first as a side track during normal client work. → [[ninety-day-launch-plan]]
- [2026-04-24] Test the **InfraNodus knowledge-graph overlay** on this vault once it crosses ~300 pages. Skip until then. → [[knowledge-graph-llm-wiki]]
- [2026-04-24] Add **Perplexity / Firecrawl / Playwright MCPs** to Cowork session for research/scraping work. Currently missing from the deferred-tool list. → [[mcp-protocol]]
- [2026-04-24] Decide the public Overlook positioning question: **lead with vibe coding, or hide it?** Currently de facto hiding it. Worth deliberate choice before next portfolio refresh. → [[vibe-coding]]
- [2026-04-24] Investigate **boring-business automation** (Google Maps scraping → outbound → AI-ready websites for HVAC / dental / etc.) as a separate brand or sub-line. Off-current-Overlook-brand. → [[boring-business-automation]]
- [2026-04-25] Adopt the **living config files pattern** from OpenClaw: split `CLAUDE.md` into `USER.md` / `SOUL.md` / `AGENTS.md` / `TOOLS.md` for cleaner separation. Or: create per-client `SOUL.md` files for Overlook client agent projects. → [[living-config-files]]
- [2026-04-25] Experiment with a **heartbeat pattern** for Cowork: a scheduled task that fires every N minutes with a context dump, letting Claude decide autonomously whether to act. Closest thing to OpenClaw's always-on daemon without leaving Anthropic's ecosystem. → [[autonomous-agent-design-principles]]
- [2026-04-25] Try the **Discord Hub pattern** for multi-project agent coordination if project count keeps growing. One persistent agent, one Discord server, channels per project. → [[discord-hub-pattern]]
- [2026-04-25] **Side-track an [[agent-native-saas]] line** alongside Overlook (don't pivot the agency). Pick one subniche workflow Finn already knows — aviation school admin, recording-studio booking, agency client-portal updates, music supervision pitches. Run [[build-niche-agent-saas|Isenberg's 30-step playbook]] as the tactical recipe and [[ninety-day-launch-plan]] as the calendar. → [[agent-native-saas]]
- [2026-04-25] **Pilot per-task pricing** on one existing Overlook workflow (e.g. monthly client-portal update production). Quote it as $X/post on top of any retainer. Cheap test of whether per-task economics work for a human Finn before any agentization. → [[per-task-pricing]]
- [2026-04-25] **Run a daily content engine** for one channel (IG / TikTok / X) about agency work or a chosen subniche. Use [[claude-code|Claude Code]] / [[openclaw|Cowork]] on Schedule Tasks as the "AI CMO." Distribution moat for any agent-SaaS line, also a hedge against client-acquisition lulls. → [[media-first-distribution]]
- [2026-04-25] **Extend the [[overlook-portal-webapp|client portal]] into an orchestration surface** — show clients what an agent is doing on their behalf, what needs review, what got completed. Don't build a separate app, extend the one already shipped. → [[orchestration-as-interface]]
- [2026-04-25] **Map one Overlook workflow end-to-end** as a Step 2 exercise (Isenberg framework). Even if no SaaS comes of it, surfacing where money changes hands and which steps are mechanical vs. judgment will unblock pricing decisions and automation candidates. → [[build-niche-agent-saas]]
- [2026-04-25] **Productize a "Workflow Audit" service tier** at $1.5–3K. Lowest-friction first AI offering — no infra build, leverages existing branding-discovery skill, generates pipeline for follow-on per-task automation work. → [[workflow-audit-service]]
- [2026-04-25] **Run a per-task pricing pilot on the Ventura Forward retainer** by adding $50/post and $75/digest line items on top of the existing $300/mo. Tests Isenberg's pricing thesis with zero new sales motion. → [[per-task-pilot-on-retainers]]
- [2026-04-25] **Extend the [[overlook-portal-webapp|Overlook portal]] with an Agents tab** showing run queue, output review, memory, task ledger, suggestions. Reuses existing FeedManager / NoticeManager UX. ~3-5 day build. Becomes both differentiator and demo surface. → [[portal-orchestration-extension]]
- [2026-04-25] **Run the four [[gcp-credits|GCP $300 credit]] experiments** as a 12-week rotation: Cloud Scheduler heartbeat → Vertex Gemini Flash mechanical tier → Document AI for document-analysis niche → Maps Platform for niche discovery + outbound. Each spike is bounded; total fits inside credit + monthly free tier. → [[gcp-credits]]
- [2026-04-25] **[[pier-and-point]] — AI-assisted hyperlocal news outlet for Ventura** under [[overlook-strategy]] umbrella. Domain claimed (`pierandpoint.com`, $11.25). 6,500-word research report backs the concept: Ventura is a textbook ghost-newspaper market, ~70% of the tech build is already in Finn's stack (Sanity + Next.js + pgvector + Clerk), the 30% new is Mastra + Inngest + Beehiiv. LION-median revenue $148K year 1, ~$60K break-even. Adjacent to but distinct from [[ventura-forward]] client work. **Time-pressure decision:** GNI Growth Catalyst $100K grant deadline May 7. → [[pier-and-point]] / [[pier-and-point-execution]] / [[pier-and-point-monetization]]
- [2026-04-26] **Ship vertical landing pages on [[finn-v2-portfolio]]** as the front door for Overlook Strategy lead-gen. One page per niche with target keyword, real case study, tiered pricing, vertical-specific FAQ. First batch (yacht broker / boutique rental / winery) generated overnight. → [[overlook-vertical-landing-pages]]
- [2026-04-26] **Yacht broker landing page** — `yacht-broker-website-design`, target keyword "yacht broker website design", anchored on [[rustler-42|Rustler Yachts]] case study, tiers $6,500–$26,000. Priority 1 to ship — lowest competition SERP, strongest case fit. → [[overlook-vertical-landing-pages-2026-04-26]]
- [2026-04-26] **Boutique vacation rental landing page** — `boutique-vacation-rental-website-design`, target keyword "boutique vacation rental website design", anchored on [[somliøya|Sømliøya]], tiers $5,500–$22,000. Priority 2 to ship. → [[overlook-vertical-landing-pages-2026-04-26]]
- [2026-04-26] **Winery / tasting room landing page** — `winery-tasting-room-website-design`, target keyword "winery tasting room website design California", no closed case yet, **founder pricing 30% off for first two California winery clients through Q3 2026**. Tiers $7,500–$28,000. SERP gap is biggest of the three. → [[overlook-vertical-landing-pages-2026-04-26]]
- [2026-04-26] **Build a `landingPage` Sanity schema on [[finn-v2-portfolio]]** — needed before any of the three above can ingest. ~1–2 hour build. Blocker on shipping the batch. → [[overlook-vertical-landing-pages]]
- [2026-04-26] **Add a per-task tier below Foundation** ($1,500/single landing page) on one of the three verticals as a [[per-task-pricing]] pilot. Tests whether a sub-$5K entry tier converts the leads who bounce on the Foundation price. → [[overlook-vertical-landing-pages]]
- [2026-04-26] **Mobile / web access to the [[graphify]] graph** via Tailscale Funnel. Wrap `graphify.serve` in HTTP/SSE transport, expose with `tailscale funnel`, add as a custom connector in claude.ai. Worth building when mobile graph queries become an actual recurring pain — currently a side project, not a priority. → [[graphify]]
- [2026-04-27] **Sportfishing charter landing page** (`sportfishing-charter-website-design-california`) — second-pass alternative to the April 26 winery page. Same generator, fresh research, picked sportfishing over winery because winery SERP is denser than the prior run assumed (Budbreak, Wine Works, Barrels Ahead all entrenched). Anchored on [[rustler-42|Rustler]] crossover + 20%-off founding-client offer for first 3 California charters in 2026. Tiers $3,800–$14,500. → [[overlook-vertical-landing-pages-2026-04-27]]
- [2026-04-27] **Decide canonical landing-page batch: April 26 vs April 27.** Two unshipped batches now exist — different verticals (winery vs sportfishing), different pricing (~30% delta), different slugs. Don't ship both. Either pick one batch wholesale or merge (yacht broker + boutique rental from one, third vertical from the other). Decision blocks Sanity ingest. → [[overlook-vertical-landing-pages]]
- [2026-04-27] **Settle the pricing anchor for Overlook engagements.** Two batches' pricing diverges by ~30% — the deeper question is what's the actual rate Finn wants to defend in a sales conversation. April 26 reads as "senior agency"; April 27 reads as "Ventura solo with one or two case studies per vertical." Pick a canonical anchor on [[pricing-and-rates]] independent of which landing-page batch ships. → [[pricing-and-rates]]
- [2026-04-29] **Adopt the agentic-engineering studio position for Overlook.** From [[karpathy-vibe-to-agentic-2026-04-29|Karpathy]] and [[isenberg-howieliu-hyperagent-2026-04-29|Howie Liu]] — the discipline above vibe coding becomes the studio's headline. Resolves the "lead with AI / hide AI" fork. → [[agentic-services-positioning]]
- [2026-04-29] **Productize a Skill Pack Build** as Tier 2 of the agentic-services stack ($7.5K – $15K, 3 weeks): 3-5 pinned skills + rubrics + portal command center. Reuses [[overlook-portal-webapp|the portal]] as substrate. ~3-5 day build for the Agents tab; the rest is skill authorship. → [[portal-orchestration-extension]]
- [2026-04-29] **Productize a Workflow Audit** as Tier 1 of the agentic-services stack ($1.5K – $3K, 1 week): jaggedness map + candidate skill shortlist + rubric prototype. Lowest-friction first AI offering. → [[workflow-audit-service]]
- [2026-04-29] **Always-On Retainer** as Tier 3: $1.5–4K/mo to operate the fleet, plus per-task line items for novel work. Solves the hosted-Ollama gap by absorbing infra cost into the retainer. → [[per-task-pilot-on-retainers]]
- [2026-04-29] **Build the studio's first MCP server** wrapping the [[ollama-rag-pattern|RAG stack]]. Open-source it as outbound distribution. Karpathy's "agent-native infrastructure" thesis demands the studio ship at least one. → [[mcp-protocol]]
- [2026-04-29] **Migrate production AI to Vercel AI Gateway** before any paid agentic engagement. M1 Max Ollama is a single point of failure. Path: Claude Haiku for cost, Sonnet for synthesis, Kimi K2 for cheap drafting. Keep Ollama for dev. → [[ollama-rag-pattern]]
- [2026-04-29] **Author the first three production-quality pinned skills with rubrics**: `engagement-summary`, `client-update-draft`, `monthly-financial-snapshot`. Generic enough to drop into any client portal, specific enough to demo on day one. → [[skills-as-primitive]]
- [2026-04-29] **Run the Workflow Audit on [[ventura-forward]]** as the lighthouse engagement. Audit is "for free" inside the existing $300/mo retainer; the studio gets the case study. Same pilot also lights up [[per-task-pilot-on-retainers|the per-task pricing pilot]]. → [[agentic-services-positioning]]
- [2026-04-30] **Paid Chrome extensions as a category** — Isenberg / Schneider thesis: low build cost (AI scaffolds them), real distribution via Web Store, browser is a privileged surface for capture / transform / detect plays. Treat as a meta-bucket for the six idea bullets below. → [[paid-chrome-extensions]]
- [2026-04-30] **Notion layout-preserving web clipper** — Chrome extension that reconstructs page layout as Notion blocks (vs. the official clipper's URL-drop). Blocked on a 1-hour Blocks API capability audit. → [[business-ideas-notion-layout-clipper]]
- [2026-04-30] **Music key + tempo detector with Logic Pro export** — Chrome extension: detect key/BPM of audio in any tab, export to Logic. Uses [[berklee-music-supervision-1|music supervision]] + [[overlook-audio]] domain knowledge as the moat. → [[business-ideas-music-key-tempo-detector]]
- [2026-04-30] **TAF / METAR decoder** — Chrome extension that decodes raw aviation weather strings inline. Smallest scope on the list — weekend project. Uses Finn's flight training as competence moat. → [[business-ideas-taf-metar-decoder]]
- [2026-04-30] **AI-generated music detector** — Chrome extension that classifies audio in any tab as human vs. AI-generated. Highest technical risk + highest brand-leverage for [[overlook-audio]]. → [[business-ideas-ai-music-detector]]
- [2026-04-30] **Audio sampler / browser-tab clipper (Tape Notes-style)** — capture audio from any tab with a great UI. UX is the moat. Possible merge with the key/tempo detector. → [[business-ideas-audio-sampler]]
- [2026-04-30] **`llm-wiki-ingest` Chrome extension** — wraps [[finn-wiki-ingest]] as a one-click capture surface. Lowest direct revenue, highest strategic alignment with [[llm-wiki-pattern]]. Possible merge with the Notion-layout clipper. → [[business-ideas-llm-wiki-clipper]]
- [2026-05-02] **Voice-to-Skill generator app** — one-button mobile/web app: hold to record, describe a workflow, get a ready-to-install SKILL.md back. Collapses "idea → deployed skill" to under 2 min on your phone. Zero competition, weekend build, Finn's skill-author expertise is the product's core IP. Potential merge with [[business-ideas-llm-wiki-clipper]] into a "Claude capture suite." → [[business-ideas-voice-to-skill]]

---

## How to score (when ready)

When you're ready to move something to [[ranked]], score on three dimensions out of 5:
- **Effort:** how much real work is this (1 = afternoon, 5 = months)
- **Impact:** how much value does it create (1 = nice-to-have, 5 = changes the trajectory)
- **Excitement:** how much do you actually want to build this (1 = obligation, 5 = can't wait)

Multiply or just look at the triple. High excitement + low effort wins most rounds.
