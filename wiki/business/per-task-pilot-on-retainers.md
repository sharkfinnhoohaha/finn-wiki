---
title: "Per-task pilot — adding agent-execution line items to existing retainers"
type: business
tags: [overlook-strategy, pricing, per-task-pricing, retainers, ventura-forward, idea, agentic-services-tier-3]
created: 2026-04-25
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-future-of-saas-30-step]], [[isenberg-howieliu-hyperagent-2026-04-29]]
---

> [!note] Tier 3 of the agentic-services stack
> This page is now the canonical spec for **Tier 3** of [[agentic-services-positioning|Overlook's agentic-services positioning]] — the **Always-On Retainer**. Howie Liu's [[opportunity-cost-pricing|opportunity-cost pricing]] frame anchors the line items: a $50/post add-on isn't priced against the model token cost, it's priced against the labor cost of producing the post manually. The retainer also absorbs the production-AI infra cost (Vercel AI Gateway, embeddings, observability) by passing it through at cost — same posture as Sanity / hosting on existing engagements. Full sequencing on [[agentic-services-positioning]].

# Per-task pilot — adding agent-execution line items to existing retainers

## The idea

Test [[per-task-pricing]] on one or two existing Overlook retainer clients ([[ventura-forward]] is the obvious first call) by adding a per-task line item *on top of* the existing recurring fee. No new sales motion, no new infra build, no new pricing page — just a one-paragraph addendum to the next invoice.

**Goal:** prove (or kill) the per-task pricing thesis with paying customers in 30 days, before sinking time into building any agent-native SaaS infrastructure.

## What gets billed per task

Pick 2-3 workflows Overlook already runs manually for the client today. Quote each as a per-execution price.

| Workflow | Current state | Per-task price | Frequency |
|---|---|---|---|
| Monthly client portal update post (write + post + notify) | Manual, included in retainer | $50/post | 1-2/mo |
| Monthly project metrics digest (pull from analytics + summarize) | Ad hoc | $75/digest | 1/mo |
| Quarterly site copy refresh proposal (audit current + propose changes) | Ad hoc | $200/proposal | 1/qtr |
| New feature scoping doc (rough estimate + tradeoffs) | Free | $150/doc | 1-2/mo |

Each price is anchored at 5–10× the rough cost-to-execute, per [[productized-services]]. The point is to set the *pricing language* in the relationship — once the client is used to seeing per-task charges, the eventual swap from "Finn does it" to "agent does it, Finn reviews" becomes a substitution they don't notice. The price stays the same. The margin shifts.

## Why this is the right pilot, not a new product

Three reasons:

1. **No customer acquisition cost.** [[ventura-forward]] is already paying $300/mo. Adding a $50 line item doesn't require winning a new sale, it requires a 1-line invoice change.
2. **Captures real willingness-to-pay data.** If the client pushes back on $50 for a monthly post, that's signal that per-task economics don't work for *this* workflow at *this* price — refine and retry. If they accept it without comment, anchor the next workflow at 1.5× and see if the elasticity is real.
3. **Builds the muscle for [[agent-native-saas]] launches.** When Finn eventually pitches a niche agent-SaaS at $200/task, he'll have months of internal data on how customers receive per-task pricing. That's the cheapest market research available.

## Implementation

Week 1:
- Pick the 2-3 workflows. Document them at [[productized-services|the productization checklist]] level (one-line scope, fixed pipeline, value-based price).
- Add a "Per-task services" section to the Ventura Forward statement-of-work / retainer agreement. Email it as a one-paragraph update, not a contract amendment.
- Use [[wave|Wave]] to add the line items to the next invoice.

Week 2-4:
- Bill the first executions. Track time-to-execute for each.
- Note which workflows feel like Finn time vs. agent time.

Month 2:
- For workflows that feel like agent time, build the [[wat-framework-marketing|WAT]] automation (one workflow, not all). The per-task price stays the same; the cost of execution drops by 10×.
- That margin delta is the proof point for the [[agent-native-saas]] thesis.

## What to do if it works

If 2 of 3 line items get accepted and re-billed without resistance for 90 days:

1. Roll the same per-task tier into proposals for new clients alongside the existing retainer model.
2. Update [[pricing-and-rates]] to document per-task as a standard offering, not a pilot.
3. Pick the highest-margin workflow and consider packaging it as a [[agent-native-saas|standalone agent-SaaS]] for non-Overlook customers in the same vertical.

## What to do if it doesn't work

If the client pushes back hard or the workflows feel awkward to itemize:

1. Write up *why* in [[Finn-OS/now]] before the muscle memory fades.
2. Move the [[per-task-pricing]] thesis from "default pricing model for agent-native SaaS" to "specific to certain workflow types only" — a real update to the wiki, not a soft kill.
3. Re-evaluate whether the Workflow Audit ([[workflow-audit-service]]) tier is the cleaner first step instead.

Tracked as an idea seed in [[Finn-OS/ideas/backlog]]; open thread on [[Finn-OS/now]].

## Related

- [[per-task-pricing]]
- [[isenberg-future-of-saas-30-step]]
- [[pricing-and-rates]]
- [[ventura-forward]]
- [[overlook-strategy-positioning]]
- [[productized-services]]
- [[agent-native-saas]]
- [[client-portal-as-differentiator]]
