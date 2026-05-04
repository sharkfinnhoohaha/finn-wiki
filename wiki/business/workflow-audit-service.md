---
title: "Workflow Audit — Overlook's lowest-friction AI service tier"
type: business
tags: [overlook-strategy, productized-services, agent-native-saas, pricing, idea, agentic-services-tier-1]
created: 2026-04-25
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-future-of-saas-30-step]], [[notebooklm-simple-ui-viral-ai]], [[karpathy-vibe-to-agentic-2026-04-29]], [[isenberg-howieliu-hyperagent-2026-04-29]]
---

> [!note] Tier 1 of the agentic-services stack
> This page is now the canonical spec for **Tier 1** of [[agentic-services-positioning|Overlook's agentic-services positioning]]. The audit is a [[jaggedness-and-verifiability|jaggedness map]] — what's already verifiable, what becomes verifiable with a [[rubrics-and-llm-as-judge|rubric]], what's still subjective. It's the discovery that scopes a [[portal-orchestration-extension|Skill Pack Build]] (Tier 2) and an [[per-task-pilot-on-retainers|Always-On Retainer]] (Tier 3). Pricing rationale and 30-day sequencing live on [[agentic-services-positioning]].

# Workflow Audit — Overlook's lowest-friction AI service tier

## The idea

Productize [[isenberg-future-of-saas-30-step|Isenberg's Step 2]] ("map the subniche workflow end-to-end") as an Overlook deliverable. Most small-business owners can't or won't do this themselves; the audit is a low-effort, low-risk way for Overlook to charge for AI strategy work without committing to building anything.

**Scope:** $1,500–$3,000 fixed-price deliverable. 2-3 customer or staff interviews + a documented end-to-end workflow + a tagged candidate list of mechanical-vs-judgment steps + a one-page "where money changes hands" diagram + a recommendations memo with rough automation effort/ROI per candidate.

**Turnaround:** 2 weeks. Mostly Finn's time, light agent assistance for transcript processing.

## Why this is the right first AI offering for Overlook

The [[ai-agency-niches|AI agency niches table]] lists ~10 candidate productizations. Most require building something. The Workflow Audit is the only one that requires nothing new — Finn does the same kind of strategic intake work he already does for branding clients, just pointed at a different output.

Specifically:

- **Zero infra build.** No new Vercel projects, no new Railway deploys, no MCPs to wire. Notion + Loom + a markdown deliverable.
- **Pipeline for everything else.** The audit deliverable surfaces automation candidates. Some clients will buy *just* the audit. Some will follow up with implementation work — at which point the [[wat-framework-marketing|WAT framework]] kicks in for the build, billed separately at the productization tier from [[ai-agency-niches]].
- **Cheaper than discovery on the agency side.** A traditional Overlook engagement starts with a free discovery call. This formalizes the discovery as a paid deliverable.
- **Validates niches before commitment.** If the candidate niches in [[agent-native-saas]] are real, doing 3-5 paid audits in different verticals will surface which one has the cleanest workflow + the most willingness-to-pay. That's market research that *pays you* to do it.

## The 5-step delivery pipeline

Per [[productized-services|productization checklist]] — same five steps every time:

1. **Kickoff call** (60 min, recorded). Define the workflow scope. "What's the one thing you do that you wish was automated?"
2. **Stakeholder interviews** (2-3 × 45 min, recorded). The owner and 1-2 staff who actually do the work.
3. **Workflow document** (Finn + agent assistance). End-to-end map. Transcripts → outline → workflow diagram.
4. **Mechanical/judgment tagging + ROI estimates.** Per [[isenberg-future-of-saas-30-step|Steps 4-5 and 13]]. Each step gets M/J + a $-per-year estimate using the time-saved math from [[per-task-pricing]].
5. **Recommendations memo** (5-8 pages). 2-3 automation candidates ranked by effort/impact, with rough cost-to-build and ongoing per-task pricing.

Deliverable bundle: Loom walkthrough + workflow PDF + memo PDF.

## Pricing tiers

| Tier | Price | Scope |
|---|---|---|
| **Audit** | $1,500 | 1 interview, 1 workflow, no implementation roadmap |
| **Audit+** | $3,000 | 3 interviews, 1 workflow, full implementation roadmap with build estimates |
| **Audit + retainer** | $3,000 + $750/mo | The above + a monthly check-in to revisit / re-scope |

The retainer tier is the bridge into [[per-task-pricing]] later — once the implementation lands, the retainer converts to per-task billing.

## Risks and how to mitigate

> [!warning] Audit fatigue
> If Overlook becomes "the people who do reports," Finn loses his own implementation pipeline. Mitigate by **capping at 2 audits per quarter** and treating each as a paid sales lead for the implementation work, not as recurring revenue on its own.

> [!warning] Scope creep
> Workflow audits naturally bleed into "now do the work for me." Mitigate by **explicitly excluding implementation** in the SOW and quoting any follow-on build separately from a fresh proposal.

## How to launch

1. Pick a candidate vertical from Finn's existing surface — easiest is **boutique branding studios or solo agencies** (peer market, no cold outreach needed, can recruit beta clients via existing network).
2. Quote 2 friendly clients at 50% off for the alpha.
3. Run the 5-step pipeline. Capture the friction points; refine the deliverable.
4. After 3 paid audits, decide: either keep selling them at full price OR fold the methodology into a thin lead-magnet PDF and use it as a top-of-funnel for the heavier implementation work.

Tracked as an idea seed in [[Finn-OS/ideas/backlog]]; promote to [[Finn-OS/career/opportunities|opportunities]] once a beta client commits.

## Related

- [[isenberg-future-of-saas-30-step]]
- [[ai-agency-niches]]
- [[productized-services]]
- [[ninety-day-launch-plan]]
- [[overlook-strategy-positioning]]
- [[per-task-pricing]]
- [[agent-native-saas]]
- [[build-niche-agent-saas]]
