---
title: "Extend the Overlook portal into an agent orchestration surface"
type: business
tags: [overlook-strategy, client-portal, orchestration, agent-native-saas, idea, agentic-services-tier-2]
created: 2026-04-25
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-future-of-saas-30-step]], [[karpathy-vibe-to-agentic-2026-04-29]], [[isenberg-howieliu-hyperagent-2026-04-29]]
---

> [!note] Tier 2 of the agentic-services stack
> This page is now the canonical spec for **Tier 2** of [[agentic-services-positioning|Overlook's agentic-services positioning]] — the **Skill Pack Build**. The portal Agents tab is the [[fleet-of-agents|fleet command center]] where the client watches their pinned [[skills-as-primitive|skills]] operate, scored by [[rubrics-and-llm-as-judge|rubrics]]. Build menu (Starter / Standard / Showcase tiers, $7,500 – $15,000) and the 3-week sprint sequencing live on [[agentic-services-positioning]].

# Extend the Overlook portal into an agent orchestration surface

## The idea

The [[overlook-portal-webapp|Overlook client portal]] is already shipped, on Vercel, branded, and serving real clients ([[client-portal-as-differentiator]]). It has Dashboard / Roadmap / Financials / Updates tabs. Add one more tab: **Agents** — the orchestration surface for any agent-executed work running on a client's behalf, per [[orchestration-as-interface|Belsky's frame]].

This is not a new product. It's the existing portal pulling double duty: differentiator for traditional clients, demo surface for prospects considering [[per-task-pilot-on-retainers|per-task]] or [[agent-native-saas|agent-SaaS]] tiers.

## What the Agents tab shows

Five panels, mirroring [[orchestration-as-interface|the orchestration interface table]]:

| Panel | What it shows | Client action |
|---|---|---|
| **Run queue** | Tasks the agent is currently executing for this client | Pause, prioritize |
| **Output review** | Completed tasks awaiting client approval (e.g., draft monthly portal post, draft client email) | Approve, edit, reject with feedback |
| **Memory** | What the agent has learned about this client's preferences (tone, formatting, no-go topics) | Correct, delete, pin |
| **Task ledger** | Per-task billing log — what ran, what it cost, what gets invoiced | View invoice |
| **Adjacent suggestions** | Workflows the agent thinks it could also run for this client | Enable, defer |

For clients who don't have any agent work running yet, the tab is hidden. For [[per-task-pilot-on-retainers|pilot clients]], it's the proof surface — "here's the post you approved last Tuesday, here's what it cost you, here's what's queued for next week."

## Why this is leveraged work, not new build

The portal already has the right shape:

- **Auth**: client-scoped via existing `portal_token` UUID — works as-is for agent runs.
- **DB**: existing FastAPI + Postgres — just add `AgentRun`, `AgentOutput`, `AgentMemory`, `AgentSuggestion` tables. Mirrors the existing `FeedPost` / `Notice` pattern.
- **Frontend**: existing tab-keyed `hidden` div pattern from `client-portal-as-differentiator` doc — drop in an `AgentsView.tsx` component.
- **Approval flows**: existing `FeedManager` / `NoticeManager` admin components are basically the same UX as agent output review. Repurpose, don't rewrite.
- **AI features**: the [[overlook-strategy-positioning|portal already has]] `AISummaryPanel`, `DocumentManager`, `AskAIView` (currently disabled). The infrastructure for AI calls and review is there. The Agents tab is the *user-visible* surface that ties them together.

Estimated build: **3-5 days** for the tab + tables + minimum viable agent execution loop. Not a new product, just a rearrangement of existing parts.

## Why it strengthens Overlook's positioning

Three flywheel effects:

1. **Differentiator deepens.** Most agencies show clients status reports. Overlook shows clients *what an agent is doing on their behalf, in real time, with bills attached.* Hard to copy without rebuilding the portal.
2. **Sales surface.** When pitching a new client on the per-task tier, Overlook can demo the Agents tab on a sandbox account. No vapor — the surface is real.
3. **Internal SOP enforcement.** When the agent executes a workflow, the portal *requires* an approval step. That keeps the human in the loop ([[isenberg-future-of-saas-30-step|Isenberg Step 17]]) without Finn having to build a separate review UI.

## Risks

> [!warning] Premature commitment to "agency that does AI"
> Shipping the Agents tab is a public commitment to the [[vibe-coding|"lead with vibe coding" positioning option]]. Once clients see it, the "hide it" option is closed. Decide deliberately before deploying.

> [!warning] Empty-state risk
> If the tab ships before any agent work is actually running, it's worse than no tab — looks like a dead feature. Gate the tab behind a feature flag (similar pattern to `ENABLE_AI=true` master switch) and only enable it for clients with active agent runs.

## Sequencing with the other two ideas

- [[workflow-audit-service]] is the *front-of-funnel* (paid discovery)
- [[per-task-pilot-on-retainers]] is the *pricing experiment* (existing-client validation)
- This page is the *product surface* (what makes both visible to the client)

All three are achievable inside Q3 if pursued. None are mutually exclusive.

Tracked as an idea seed in [[Finn-OS/ideas/backlog]].

## Related

- [[orchestration-as-interface]]
- [[client-portal-as-differentiator]]
- [[overlook-portal-webapp]]
- [[per-task-pilot-on-retainers]]
- [[workflow-audit-service]]
- [[agent-native-saas]]
- [[overlook-strategy-positioning]]
- [[isenberg-future-of-saas-30-step]]
- [[wat-framework-marketing]]
