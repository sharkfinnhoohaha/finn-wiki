---
title: "Overlook Strategy — Agentic Services Positioning"
type: business
status: active
tags: [overlook-strategy, positioning, agentic-engineering, agentic-services, productized-services, strategy]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 15
sources: [[karpathy-vibe-to-agentic-2026-04-29]], [[isenberg-howieliu-hyperagent-2026-04-29]], [[2026-04-29-karpathy-howieliu-digest]]
---

> [!success] Confirmed 2026-04-29
> Finn confirmed the agentic-engineering studio positioning. Four-week build sequence is now live in [[Finn-OS/now]]. This page is the canonical strategy doc; updates are tracked in [[log]].


# Overlook Strategy — Agentic Services Positioning

## TL;DR

The threshold crossed in late 2025: agents started shipping clean PRs on multi-hour-to-multi-day work without human correction. Karpathy calls the discipline **[[agentic-engineering]]**; Howie Liu calls the operating model a **[[fleet-of-agents]]** governed by **[[skills-as-primitive|pinned skills]]** and **[[rubrics-and-llm-as-judge|rubrics]]**. They are the same shift in two vocabularies. For Overlook Strategy, the move is not to become an "AI agency" — that brand is already crowded and undifferentiated. The move is to position the studio as an **agentic engineering studio**: brand-and-systems work, with the operating substrate exposed (the portal) and the delivery discipline made explicit (skills + rubrics + a fleet). Three productizable services drop out: **Workflow Audit ($1.5–3K)**, **Skill Pack Build ($7.5–15K)**, **Always-On Retainer ($1.5–4K/mo + per-task)**. The studio has the assets to ship Workflow Audit inside two weeks. The wedge is real because the studio already runs the Karpathy / Howie playbook on itself: production [[ollama-rag-pattern|Ollama + pgvector RAG]] in the [[overlook-portal-webapp|portal]], seven shipped Anthropic skills, the [[token-conservation-mindset|hybrid-model token routing]], and a [[overlook-strategy-design-system-overview|design system]] built to look and feel agent-native without saying so.

## Why now — what the two talks actually changed

Two sources, recorded the same week (2026-04-29):

- **[[karpathy-vibe-to-agentic-2026-04-29]]** — Andrej Karpathy at Sequoia AI Ascent 2026, with Stephanie Zhan. The worldview piece. Software 3.0, ghosts not animals, jaggedness, verifiability, agentic engineering, understanding-as-bottleneck.
- **[[isenberg-howieliu-hyperagent-2026-04-29]]** — Howie Liu (CEO of Airtable, launching HyperAgent) on Greg Isenberg's pod. The operator piece. White-collar-GDP TAM, opportunity-cost pricing, skills, rubrics, command-center fleets, persistence arbitrage.

They converge:

- **Threshold.** Karpathy: December 2025 — "the chunks just came out fine and I stopped correcting them." Howie: Opus 4.5 (~Nov 2025) — "the first time a model autonomously shipped clean PRs on multi-hour-to-multi-day human tasks." Same inflection, different vocabularies. See [[agentic-inflection-late-2025]].
- **Verifiability is the gating function.** Karpathy frames it as RL-circuit coverage: where labs care + outputs are verifiable, the model flies. Howie's "rubrics + LLM-as-judge" is the productized version of Karpathy's "council of LLM judges" — both are how subjective domains become tractable. See [[jaggedness-and-verifiability]] and [[rubrics-and-llm-as-judge]].
- **Humans become spec + oversight, not implementers.** Karpathy: "you're in charge of the taste, the engineering, the design… the engineers are doing the fill in the blanks." Howie: "management 101 applied to agents." See [[understanding-as-bottleneck]].
- **Old infra is wrong.** Both: docs are written for humans, install flows assume humans, settings menus assume humans. The agent-native rewrite is a long surface. Karpathy's "sensors and actuators" framing is the canonical decomposition.
- **Fleets, not assistants.** Both believe every company gets a fleet of agents mapped to humanoid org-chart roles. Howie because of context-window physics + matching legacy infra. Karpathy because "agent representation for people and organizations" follows naturally.
- **Pricing has to dislodge from $20/mo SaaS anchors.** Howie's example: a $150-token board memo his investors said was the best he'd ever written, in 1/10 the time. The anchor is opportunity cost. See [[opportunity-cost-pricing]].

What's actually new for Overlook is not the technology — Finn has been operating inside this paradigm for a year — it's that the **vocabulary stabilized this week**. Skills, rubrics, fleets, command centers, agentic engineering. Until now, "AI agency" meant a dozen different things; clients didn't know what to buy and the studio didn't know what to sell. The Karpathy + Howie pair gives both sides the same words.

## Where Finn already is on the curve (and where he isn't)

This is the asymmetry the positioning has to lean into.

**Already in production, ahead of most agencies:**

- **[[overlook-portal-webapp|Overlook portal]]** — Next.js + FastAPI + Postgres + pgvector + Ollama. Per-client portal_token UUID auth, FeedManager / NoticeManager / ProjectHealthBar admin components, master-switch architecture (`ENABLE_AI=true` / `NEXT_PUBLIC_ENABLE_AI=true`). The portal is *already* the canvas Karpathy is describing — agent representation for the client's relationship with the studio.
- **[[ollama-rag-pattern|RAG stack]]** in production — Ollama (`mistral` for generation, `nomic-embed-text` for embeddings) + pgvector. PDF/DOCX/TXT ingestion, draft → admin review → publish loop. Quoting Finn: "the draft-then-review step is deliberate — never auto-publish AI content to clients." That's a rubric-shaped guardrail, even before adding LLM-as-judge.
- **Seven shipped Anthropic skills** — `finn-wiki-ingest`, `life-os-update`, `project-status-audit`, `pier-and-point-post`, `finn-life-os-daily`, `finn-to-the-max-weekly`, `overlook-strategy-design`. These are pinned skills running on schedules. Finn already has muscle memory for skill authorship; that's the same primitive Howie names the central one.
- **[[hybrid-local-llm-workflow|Hybrid model routing]]** — `cc-sonnet` for synthesis, `cc-local`/`aider-local` for grunt work, with the `==== LOCAL MODEL TASKS ====` handoff block. Same posture as Howie's "Opus → Sonnet drop without score change" cost-quality dial.
- **[[wat-framework-marketing|WAT framework]]** + the [[loopiness-framework|loopiness]] read — Finn has internalized agent-native marketing patterns most agencies haven't read yet.
- **[[overlook-strategy-design-system-overview|Brand-identity discipline]]** — ink + paper + Pacific palette, Cormorant Garamond + Questrial + JetBrains Mono. A measured voice with a banned-word list. The agent's deliverables can be on-brand by default. Most "AI agency" output looks AI-generated. Overlook's wouldn't.
- **A book of nine clients** with at least one paying retainer ([[ventura-forward]] at $300/mo) and confirmed shipped work ([[rustler-42|Rustler Yachts]], [[grannen-lodge]], [[johnson-aviation]], [[copper-and-cast|Copper and Cast]], [[somliøya|Sømliøya]]). Real case-study surface. Most agentic-services shops don't have shipped client work to point at.

**Gaps the positioning has to acknowledge:**

- **No agent eval framework.** Rubrics + LLM-as-judge are designed (in [[ai-newsroom-pipeline]]) but not built.
- **No client-facing agent product.** Portal AI is admin-only; the `AskAIView` was deliberately removed in favor of `FAQView`. Re-enabling it under rubric supervision is a 1–2 week build.
- **No production hosted Ollama.** The RAG stack runs on Finn's M1 Max for dev; production is unhosted. Either migrate to Vercel AI Gateway with Claude / Kimi, or stand up Ollama on Railway with a queue.
- **No first-party MCP.** The studio consumes MCPs heavily (Sanity, Wave, MailerLite, Notion, Vercel, Common Room, Supabase, Claude in Chrome) but has not shipped its own.
- **No per-task billing live yet.** Pilot is unstarted; Ventura Forward is still flat $300/mo.
- **No durable-workflow orchestrator wired up.** Inngest, Trigger.dev, Mastra are in design; closest production is Anthropic's Cowork scheduler.
- **No outbound distribution engine** for the studio. No LinkedIn / IG / X cadence. Per [[media-first-distribution]] and the Isenberg playbook, this is the missing demand-generation muscle.

The gaps are short. None of them require new skills — they require sequencing.

## The positioning move

The crowded path is "we are an AI agency, we build chatbots." The empty path is the one Karpathy and Howie both implied without naming.

> Overlook Strategy is an **agentic engineering studio**.
>
> We design the brand and the operating system together. The brand is what the company looks like. The operating system is the small fleet of agents that runs the company's repeatable work, mapped to the roles a human would have played. Every engagement ends with a system the team can actually run, with rubrics that score it, and a portal where they can see it working.

A few things this does:

- It absorbs the existing studio promise ("brand and digital systems, built at the coast") without abandoning it. Brand identity stays a deliverable; the *system* underneath gets explicit.
- It distinguishes from generic AI agencies by leading with a discipline, not a deliverable. *Agentic engineering* is Karpathy's word for the quality-bar-preserving practice on top of vibe coding. It says the studio still cares about engineering, not just output.
- It claims a vocabulary the client buying-side will encounter from Sequoia, Anthropic, Airtable, OpenAI in the next 12 months. The Karpathy talk is doing $80M views' worth of education for the studio's prospects.
- It does not require the studio to renounce vibe coding — just to be clear that vibe coding is the floor (everyone has it) and agentic engineering is the ceiling (which is what the client is paying for).
- It folds the [[client-portal-as-differentiator|portal]] from "free dashboard, sticky retainer" to "the agent representation surface where you watch your fleet operate." Same artifact, much higher narrative weight.
- It makes [[overlook-vertical-landing-pages|vertical landing pages]] (yacht broker, boutique vacation rental, winery, sportfishing) compounded value — every vertical now sells a website *and* a starting fleet of three skills.

The one thing this positioning explicitly is not:

- **Not "we sell apps."** Karpathy: "the app shouldn't exist." Howie: "app building is a commoditized feature." If a deliverable is a one-off CMS site, it's a brand-and-systems deliverable, not the headline. The headline is the system.

## Three productizable services

Each one maps to an existing wiki page so the studio's own backlog is the source of truth, not a marketing reframe.

### 1. Workflow Audit ($1.5K – $3K, 1 week)

**What it is:** A discovery engagement that walks the client's white-collar workflows and produces a **jaggedness map** — what's already verifiable, what's verifiable with a rubric, what's still subjective. Output is a written audit, a candidate-skill shortlist, and a recommendation: pin three skills, defer the rest, or run a Skill Pack Build.

**Why it works for Overlook:**

- Lowest-friction first AI offering, no infra build. Already specced in [[workflow-audit-service|wiki/business/workflow-audit-service.md]] (tiers Audit $1,500 / Audit+ $3,000 / Audit + retainer $3,000 + $750/mo).
- Leverages the existing branding-discovery muscle the studio already runs in week one of every project.
- Generates pipeline for follow-on Skill Pack Build and Retainer.
- Karpathy frames it explicitly: "if you're in the circuits that were part of the RL, you fly. If you're in the circuits that are out of the data distribution, you have to look at fine-tuning." The audit's job is to tell the client which circuits they're in.
- Can be priced as a one-week sprint with a fixed deliverable — not a billable-hours arrangement.

**Anchor pricing:** Howie's frame, adapted. The client is not paying $1,500 for "an audit." They are paying for the operator's-time savings that follow when their three top workflows are skill-pinned correctly. A senior FTE workflow-mapping role costs $40-60K/year fully loaded. The audit pays back in the first task automated.

**Pilot client:** [[ventura-forward]] (per [[per-task-pilot-on-retainers|the per-task pilot]]). The audit is "for free" inside the existing $300/mo retainer; Finn gets the case study.

### 2. Skill Pack Build (3 weeks, $7.5K – $15K)

**What it is:** Define 3–5 pinned skills with rubrics, a fleet topology, and a portal command center where the client watches their fleet operate. Skills include the playbook (markdown), the prompts, the connectors (Slack / Notion / Granola / Gmail / domain-specific APIs), and the rubric LLM-as-judge config. Delivered as live infrastructure inside the [[overlook-portal-webapp|client's portal tab]].

**Why it works:**

- Reuses the [[overlook-portal-webapp|portal]] as the substrate — no new app, no new auth model, no new bill. Already specced in [[portal-orchestration-extension|wiki/business/portal-orchestration-extension.md]] (3–5 day build for the Agents tab, reusing FeedManager / NoticeManager UX).
- Skills become a productized inventory. After three Skill Pack Builds, the studio has 9–15 reusable skills it can repackage as starter kits. Each subsequent client engagement compounds.
- The rubric layer is Karpathy's "council of LLM judges" and Howie's "rubric pinned to agent." Same primitive. The studio is the only Ventura agency that ships skills with rubrics.
- The deliverable matches Howie's framing exactly: "an Einstein who needs the playbook." The studio's job is to write the playbook.

**Anchor pricing:** A pinned skill replaces a partial human role. Conservative: 0.1–0.2 FTE per skill, 3–5 skills = 0.5–1.0 FTE replaced. Fully loaded FTE in California is $80–120K. Pricing the build at $7.5–15K is 1–2 months of the FTE cost it offsets, retiring in year one. Howie's rule: "anchor on opportunity cost, not subscription." The build cost is one-time; the value is recurring.

**Tiered build menu:**

| Tier | Skills | Connectors | Rubric | Portal | Price |
|---|---|---|---|---|---|
| Starter | 3 pinned | 2 OAuth | 1 dimension, 1 model | Read-only | $7,500 |
| Standard | 5 pinned | 4 OAuth + 1 custom | 3 dimensions, ensemble | Read + manual trigger | $11,500 |
| Showcase | 5 pinned + 1 always-on | 6 OAuth + 2 custom | Full rubric panel | Full command center | $15,000 |

### 3. Always-On Retainer ($1.5K – $4K / month + per-task)

**What it is:** The studio operates the fleet. Monthly: rubric review, skill drift remediation, new skill authorship as the client's surface grows, infra cost + observability. Per-task: $50–$200 line items for one-off agent runs that fall outside the standing skill set. The retainer is the [[per-task-pricing|per-task pricing]] Finn already noted in the [[per-task-pilot-on-retainers|per-task retainer pilot]], on agent-shaped work.

**Why it works:**

- Solves the hosted-Ollama / agent-eval gap by absorbing it into the retainer. Production infra cost (Vercel AI Gateway, Mastra, Inngest, embeddings) gets passed through at cost — same posture as "hosting / Sanity / ecommerce platform fees pass through at cost on every tier" in [[pricing-and-rates]].
- The rubric history becomes an asset for the client — "your fleet's quality scores, month over month" is a board-meeting-ready chart.
- Aligns the studio with the client's operating cadence rather than a project deadline. Closer to a fractional CTO arrangement than a typical web retainer.
- Solves Finn's own "no per-task billing live yet" gap by giving him a pilot client to ship the line items on.

**Anchor pricing:** $1,500/mo if the fleet is 3 skills, no always-on, no infra heavy lift. $4,000/mo for a five-skill fleet with always-on listening, custom MCP, and Slack-deployed agents. Above that, the retainer becomes a fractional engagement and pricing flattens to a $4,000/mo cap with hours billed against capacity.

## What gets built first (the next 30 days)

A sequencing read so the positioning isn't just a Notion page.

**Week 1:**

- Productize the Workflow Audit deliverable — write the audit template (jaggedness map, candidate-skill shortlist, rubric prototype), the SOW, the fixed-fee proposal. (Pulls forward [[workflow-audit-service|the existing service spec]].)
- Re-enable `AskAIView` in the portal under a rubric-supervised, draft-then-review pattern. Solves the [[ai-journalism-legal-posture|Cohere copyright thread]] simultaneously by adding the per-summary disclosure block.
- Migrate the Ollama production target to Vercel AI Gateway (Claude Haiku for cost, Sonnet for synthesis). Keep local Ollama for dev. Removes the M1 Max single-point-of-failure.

**Week 2:**

- Build the portal Agents tab (run queue / output review / memory / task ledger / suggestions) per [[portal-orchestration-extension]]. Reuses FeedManager / NoticeManager pattern — 3–5 day build estimate.
- Author the first three skills as production-quality pinned skills with rubrics: `engagement-summary`, `client-update-draft`, `monthly-financial-snapshot`. Generic enough to drop into any client portal. Specific enough to demonstrate value on day one.

**Week 3:**

- Run the Workflow Audit on Ventura Forward. Pilot client = lighthouse case study.
- Stand up the rubric panel as a portal admin view. LLM-as-judge with two models (Sonnet + Haiku) scoring on three dimensions: factual fidelity, voice match, completeness.
- Write the first MCP server — wraps the studio's RAG stack and exposes it as a connector. Distribution play (open source, post on Twitter / LinkedIn) is the "outbound distribution engine" the studio doesn't have yet.

**Week 4:**

- Publish the case study and the audit template (one of them on the studio site, one on a public Notion). Paid traffic deferred — organic from the MCP launch and the Karpathy moment is enough to test.
- Pitch Workflow Audit to two warm contacts (Spencer at minimum; one of the existing clients second).
- Open a single Skill Pack Build slot for May. If [[ventura-forward]] takes it, that's the case study compounding.

After 30 days the studio has: a productized Workflow Audit, three pinned skills with rubrics, a portal Agents tab, a hosted production AI stack, a first MCP, a case study, and pipeline.

## Pricing posture (Howie's anchor, Overlook's voice)

Three pricing rules, written plainly so they go on the proposals verbatim:

1. **The studio anchors on the cost of the workflow being automated, not on subscription software.** A pinned skill that drafts five client updates a month replaces ~6 hours of senior writing time per month. At $80/hour fully loaded, that's $480/mo of work being absorbed by infrastructure that costs the studio ~$15/mo to run. The studio prices the build (one-time) at 1–2 months of the cost being replaced; the retainer (monthly) at 0.5–1× the cost being replaced.
2. **Infrastructure passes through at cost.** Vercel AI Gateway, Mastra, embeddings, Slack deploy, MCP hosting. Same pattern as Sanity / ecommerce platform fees on existing engagements. The studio doesn't markup model tokens.
3. **Per-task line items are billed when the workflow is novel.** Anything in the standing skill set runs inside the retainer. Anything new — a one-off proposal, a one-time data ingest, a custom investor-deck draft — gets a $50–$200 line item priced at the value-anchor, not the model cost.

## Risks and what to watch

**Verifiability gap is real.** Subjective domains require a rubric ensemble, and rubrics are themselves judgment artifacts. The studio's risk: shipping a rubric that scores well in dev and poorly in production. Mitigation: every rubric runs against a 30-output backtest before it goes live in a client portal. A shipped rubric without a backtest is a defect.

**Cohere-style substitutive-summary copyright posture.** Already an open thread on [[Finn-OS/now]] from the *Advance Local v. Cohere* (Nov 2025) ruling. The Skill Pack Build's draft-then-review pattern is the right answer; it has to be actually present in the portal, not just specced. The per-summary disclosure block is mandatory.

**JetBrains commercial-use license.** DataGrip + WebStorm are activated under student license. Active OS client work using either tool violates the EDU license terms. Solve before the first paid Skill Pack Build closes.

**Token cost visibility.** Howie's frame is opportunity cost; the studio's *cost* is real. A retainer client whose fleet runs 50× expected has a real bill. Solution: per-skill cost cap inside the rubric panel (Howie's "drop Opus → Sonnet for 5× cost reduction") and a monthly cost report inside the portal.

**Verifiability dependence on labs.** Karpathy's warning: you're at the mercy of the pretraining mix. If a future model shifts the jaggedness map, every rubric needs to be re-tested. Quarterly model-audit clause in the SOW.

**Vibe coding as a pejorative.** [[vibe-coding|Open positioning question]] in the wiki: lead with it or hide it? The agentic-engineering frame resolves this by making vibe coding the floor (acknowledged, not denied) and agentic engineering the ceiling (what the client pays for). The studio neither hides the vibe nor leads with it; it leads with the discipline above it.

## How this connects to Overlook's existing strategy

This positioning does not compete with the studio's other forks. It absorbs them.

- **Bespoke web work** (current bread-and-butter) becomes Tier 0 of the agentic stack. Every site shipped lands in the portal with a starter skill pack.
- **[[overlook-vertical-landing-pages|Vertical landing pages]]** become the discovery surface. The yacht-broker page becomes "yacht-broker website + a starter fleet of three skills." Pricing follows the canonical batch (April 26 vs April 27 still open on [[Finn-OS/now]]) — this strategy doesn't decide that.
- **[[client-portal-as-differentiator|Free client portal]]** becomes the operating canvas. Same code, much higher narrative.
- **[[pier-and-point]]** is the public proof point. The civic-news site is itself an agentic engineering exhibit — Kimi K2 + Sonnet rubric + per-article cost ~$0.018, draft-then-review, verifiable claims. Karpathy's "agent-native infrastructure" thesis demonstrated in public.
- **[[agent-native-saas|Agent-native SaaS side-track]]** stays a separate fork. It's a different bet (productize a single subniche workflow as a SaaS) and shouldn't dilute the studio brand. Run it under a sibling LLC if it goes anywhere.

## Open positioning question — resolved

The April 24 ingest left the question: *does Overlook lead with vibe coding, or hide it?*

The Karpathy + Howie pair resolves it. The studio leads with **agentic engineering**. Vibe coding is the floor. The discipline above it is what the client is paying for. The portal is where they watch the discipline operate.

## Next actions (live commitments — synced with [[Finn-OS/now]])

- [x] **Write the Workflow Audit deliverable + SOW + proposal + playbook.** Shipped 2026-04-29 in [[wiki/business/templates/workflow-audit/README|wiki/business/templates/workflow-audit/]]. Tier 1 is now productized and ready to pitch.
- [ ] Decide canonical [[overlook-vertical-landing-pages|landing-page batch]] (Apr 26 vs Apr 27) so vertical pages can be republished with the agentic-services line. (Pre-existing thread.)
- [ ] Re-enable `AskAIView` in the portal under rubric supervision + per-summary disclosure. Closes Cohere posture.
- [ ] Migrate production AI to Vercel AI Gateway. Keep Ollama for dev.
- [ ] Build [[portal-orchestration-extension|portal Agents tab]] (3–5 day build).
- [ ] Author the first three pinned skills with rubrics.
- [ ] Run the audit on [[ventura-forward]] as the lighthouse engagement (templates are now ready to personalize).
- [ ] Ship the studio's first MCP as outbound distribution.
- [ ] Resolve [[wiki/personal/jetbrains-license-posture|JetBrains commercial-use exposure]] before the first paid Skill Pack Build.

## Related

- [[karpathy-vibe-to-agentic-2026-04-29]] — the worldview source
- [[isenberg-howieliu-hyperagent-2026-04-29]] — the operator source
- [[2026-04-29-karpathy-howieliu-digest]] — chapter-by-chapter digest, deck-ready quotes
- [[agentic-engineering]] — the discipline
- [[software-3-0]] — the paradigm frame
- [[ghosts-not-animals]] — Karpathy's LLM ontology
- [[skills-as-primitive]] — Howie's primitive
- [[rubrics-and-llm-as-judge]] — the eval primitive
- [[fleet-of-agents]] — the operating model
- [[opportunity-cost-pricing]] — Howie's pricing frame
- [[understanding-as-bottleneck]] — Karpathy's closing thesis
- [[agentic-inflection-late-2025]] — the threshold
- [[jaggedness-and-verifiability]] — what the audit is mapping
- [[overlook-strategy-positioning]] — parent positioning page
- [[workflow-audit-service]] — Tier 1 service spec
- [[portal-orchestration-extension]] — Tier 2 build spec
- [[per-task-pilot-on-retainers]] — Tier 3 retainer mechanics
- [[overlook-portal-webapp]] — the operating canvas
- [[ollama-rag-pattern]] — the deployed RAG substrate
- [[ai-newsroom-pipeline]] — the rubric-ensemble blueprint
- [[wat-framework-marketing]] — agentic-delivery marketing layer
- [[client-portal-as-differentiator]] — the existing differentiator, re-narrated
- [[overlook-vertical-landing-pages]] — discovery surface
- [[pier-and-point]] — public proof point
- [[productized-services]] — what changes vs bespoke
- [[per-task-pricing]] — line-item mechanics
- [[vibe-coding]] — the floor
