---
title: "Overlook Strategy — Positioning"
type: business
tags: [overlook-strategy, positioning, branding, web-dev, module-01]
created: 2026-04-24
updated: 2026-04-29
weight: high
node_size: 15
sources: [[local_b7e57647-0d6d-464c-9ae8-fbd083e1d078]], [[local_c49c7f7b-15a7-4256-8a5f-b71125d9e309]], [[local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]], [[local_65f6bd58-1447-4afc-948b-6b9efd97150a]], [[overlook-vertical-landing-pages-2026-04-26]], [[karpathy-vibe-to-agentic-2026-04-29]], [[isenberg-howieliu-hyperagent-2026-04-29]]
---

## TL;DR

Overlook Strategy is Finn's **branding/web dev studio**. In the [[identity-and-brand-architecture|brand architecture]] it's `MODULE_01` — a sub-output of "Finn Bennett," not the primary identity. Aesthetic is **monochromatic by default** and the **no-new-deps rule** is core. The free [[client-portal-as-differentiator|client portal]] is the studio's strategic differentiator.

## Positioning summary

- **What:** branding + web dev studio
- **Brand role:** `MODULE_01` of [[identity-and-brand-architecture|Finn Bennett]]
- **Domain:** `overlookstrategy.com` (deployed on Vercel)
- **GitHub:** repo migrated from personal `sharkfinnhoohaha/claude_Overlook-webapp` → **Overlook-Strategy** organization (`origin`)
- **Backend:** FastAPI + SQLAlchemy + Alembic on Railway
- **Frontend:** Next.js (App Router), Tailwind, TypeScript

## Aesthetic rules (carry into every Overlook page or component)

- **Monochromatic by default** — white background, neutral-900 text, neutral-100/200 borders
- **Tailwind only** — no Material UI, no Chakra, no extra component libraries
- **No new dependencies** unless explicitly asked
- **Money values:** always use `formatCents()` from `lib/utils.ts`. Never raw cents.
- **Auth:** `X-Admin-Key` header pattern; `adminFetch` from `lib/api.ts` for authed admin requests

> Quoted from Finn's recurring frame to other agents:
>
> "Tailwind only, monochromatic design (white bg, neutral-900 text, neutral-100/200 borders)."

## Active client roster

(Cross-link as client pages get filled out.)

- [[rustler-42]]
- [[somliøya|Sømliøya]] — Next.js + TinaCMS
- [[all-in-one-music]]
- [[ventura-forward]] — recurring [[pricing-and-rates|$300 retainer]]

## Ventures under the Overlook umbrella

Ventures are distinct from client work — Finn-owned products that ship under the LLC. Per Finn's standing direction (2026-04-25), all his software/web dev links back to Overlook one way or another.

- [[pier-and-point]] — AI-assisted hyperlocal news outlet for Ventura, CA. Captured as a venture sketch 2026-04-25 with full research backing. Domain claimed: `pierandpoint.com`. Decision point on whether to pursue tied to GNI Growth Catalyst May 7 deadline. See [[pier-and-point-execution]] for skills-mapping and [[pier-and-point-monetization]] for the revenue model.

## Vertical landing pages (April 2026)

First batch of three niche-targeted landing pages generated 2026-04-26 by the `niche-landing-page-generator` scheduled task. Pages target `[city] + [niche]` long-tail keywords and lean on existing case studies. Sanity-ready Markdown; deploy target is [[finn-v2-portfolio]].

- **`yacht-broker-website-design`** — case study [[rustler-42|Rustler Yachts]]. Foundation $6,500 → Fleet $26,000.
- **`boutique-vacation-rental-website-design`** — case study [[somliøya|Sømliøya]]. Cabin $5,500 → Portfolio $22,000.
- **`winery-tasting-room-website-design`** — no closed case yet, founder pricing for first two clients. Tasting Room $7,500 → Estate $28,000.

Full strategy + pattern doc at [[overlook-vertical-landing-pages]]. Pricing newly published in [[pricing-and-rates]]. Source dump at [[overlook-vertical-landing-pages-2026-04-26]].

## Key product surfaces

- **Overlook web app** — admin dashboard at `frontend/app/(admin)/admin/page.tsx`, with `/admin/clients`, `AdminSidebar.tsx`, `AdminLayoutClient.tsx`, `TaskManager.tsx`
- **Client portal** — at `overlook-webapp.vercel.app`, with Updates feed (replaced Resources tab), dismissible notice banners, `FeedManager`, `NoticeManager`, `ProjectHealthBar`. See [[client-portal-as-differentiator]].
- **AI features** — Ollama-backed (`mistral`, `nomic-embed-text` + pgvector). `ENABLE_AI=true` (backend) + `NEXT_PUBLIC_ENABLE_AI=true` (frontend) master switches. `AISummaryPanel`, `DocumentManager`, `AskAIView`. Admin status page `/admin/ai`. CLI: `python scripts/overlook-ai.py status | summarize | triage`.

## Recurring constraints

- **Sandbox can't push to GitHub** — pattern is to commit locally and let Finn `git push` from his terminal, or use a `deploy-changes.sh` script committed in the repo (with `git pull --rebase` first to handle non-fast-forward).
- See [[business-ideas-backlog]] for unfinished AI feature work (streaming summaries, slowapi rate limiting on `/ask`).

## Open positioning question (April 2026) — RESOLVED 2026-04-29

The 2026-04-24 NotebookLM ingest surfaced an unresolved strategic question: **does Overlook lead with vibe coding / AI services, or hide them?**

The 2026-04-29 [[karpathy-vibe-to-agentic-2026-04-29|Karpathy at Sequoia AI Ascent 2026]] + [[isenberg-howieliu-hyperagent-2026-04-29|Howie Liu on Greg Isenberg]] pair resolves it. The studio neither hides vibe coding nor leads with it — it leads with **[[agentic-engineering|agentic engineering]]**, the discipline above vibe coding that preserves the professional quality bar at much higher speed. Vibe coding is the floor (everyone has it). Agentic engineering is the ceiling (which is what the client pays for). The full strategy synthesis is on [[agentic-services-positioning]]; this section is preserved for historical context.

The four reads that were on the table:

- **Lead with it.** Productize an AI service tier — candidates include AI-ready website conversion, knowledge base builders, document analysis. Detailed in [[ai-agency-niches]] and [[claude-max-arbitrage]]. **Outcome:** absorbed into [[agentic-services-positioning]] as Tier 1 (Workflow Audit) and Tier 2 (Skill Pack Build).
- **Hide it.** Keep the agency framing, use Claude Code internally, never show it to clients. **Outcome:** rejected. Karpathy and Howie's vocabulary stabilizes this week, and clients will start asking. Hiding it leaves the studio looking dated by Q3.
- **Side-track an [[agent-native-saas]] line.** Don't pivot Overlook — keep the agency, but launch a single agent-fulfilled SaaS in a niche Finn already knows. **Outcome:** still a separate fork. Should run under a sibling LLC, not under Overlook, so brand discipline stays clean.
- **Lead with vertical authority.** Ship one landing page per niche — yacht broker, boutique rental, winery, sportfishing — each anchored on a real case study with published tiered pricing. **Outcome:** the discovery surface for the new positioning, not its own line. Each vertical now sells a website + a starter fleet of three pinned skills.

The [[deep-research-strategic-arbitrage|Deep Research briefing]] argued for productization; the [[isenberg-future-of-saas-30-step|Isenberg episode]] argued for services-first sequencing and per-task pricing. Both are now folded into [[agentic-services-positioning]] as the canonical synthesis.

## Current headline

> Overlook Strategy is an **agentic engineering studio**. We design the brand and the operating system together. The brand is what the company looks like. The operating system is the small fleet of agents that runs the company's repeatable work, mapped to the roles a human would have played.

Three productized services drop out:
- **Tier 1 — [[workflow-audit-service|Workflow Audit]]** ($1.5K – $3K, 1 week): a [[jaggedness-and-verifiability|jaggedness]] map of the client's white-collar workflows.
- **Tier 2 — [[portal-orchestration-extension|Skill Pack Build]]** ($7.5K – $15K, 3 weeks): 3-5 [[skills-as-primitive|pinned skills]] + [[rubrics-and-llm-as-judge|rubrics]] + portal command center.
- **Tier 3 — [[per-task-pilot-on-retainers|Always-On Retainer]]** ($1.5K – $4K/mo + per-task): the studio operates the [[fleet-of-agents|fleet]].

Full sequencing, pricing rationale, risks, and 30-day build plan on [[agentic-services-positioning]].

Related new pages:
- [[wat-framework-marketing]] — the agentic delivery substrate, applicable to any of the productized tiers
- [[productized-services]] — checklist for what would change vs. current bespoke model
- [[boring-business-automation]] — alternative target market (off-brand for current Overlook, but high-volume)
- [[agent-native-saas]] — the third-option category, with candidate Overlook-adjacent niches listed
- [[per-task-pricing]] — pricing model that would attach to any agent-SaaS line

## Sources

- `local_b7e57647-0d6d-464c-9ae8-fbd083e1d078` — "Build free customer dashboard for website"
- `local_c49c7f7b-15a7-4256-8a5f-b71125d9e309` — "Redesign client portal with updates feed"
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` — "Clean up repository branches and merge fixes"
- `local_65f6bd58-1447-4afc-948b-6b9efd97150a` — "Evolve portfolio into cinematic autobiography"
