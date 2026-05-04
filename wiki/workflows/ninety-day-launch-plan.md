---
title: "90-day launch plan (productized AI service)"
type: workflow
tags: [workflow, launch, productized-services, ai-agency]
created: 2026-04-24
updated: 2026-04-25
weight: high
node_size: 10
sources: [[deep-research-strategic-arbitrage]], [[isenberg-future-of-saas-30-step]]
---

# 90-day launch plan (productized AI service)

The execution timeline from the [[deep-research-strategic-arbitrage|2026 strategic briefing]] for monetizing a Claude-powered service. Three months from niche pick to first paid clients.

## Month 1 — Foundation

- Pick one niche from [[ai-agency-niches]]. Write its one-line scope ("we turn standard websites into AI-ready sites for $2,000").
- Interview 10–15 potential customers. Don't sell — *listen*. Capture: their actual workflow, their actual pain, what they pay for now, what they'd pay for the proposed service.
- Build an MVP focused on **one core feature.** Resist the urge to ship the v3 vision. Ship the rough cut.

## Month 2 — Initial traction

- Recruit 3–5 beta testers (probably from the customer interviews).
- Launch publicly — landing page + demo + pricing.
- Aim for the first paid customers. Use **value-based pricing** (5-10x the raw API cost as a floor).
- The briefing flags that *attracting tire-kickers via low prices* is the dominant beginner mistake. Set a price that signals seriousness even if it loses some early converts.

## Month 3 — Growth

- Request testimonials from beta testers and paid clients.
- Identify patterns in feedback. The MVP feature isn't sacred — let usage steer the v1.1.
- Scale marketing through SEO-optimized landing pages. The [[wat-framework-marketing|WAT framework]] can build these on demand.

## Pitfalls to avoid

| Pitfall | Why it kills the launch |
|---|---|
| Over-engineering | Building the perfect product before validating willingness-to-pay. |
| Underpricing | Attracts low-value clients. The expensive ones want results, not deals. |
| Ignoring API costs | Without caching (Redis-style) and prompt optimization, token spend scales faster than revenue. Especially fatal on chatbot-as-a-service models. |

## How this maps to Overlook's existing rhythm

Finn already runs services on retainer (Ventura Forward, Sømliøya). The launch-plan adaptation isn't "build a new agency" — it's **add one productized line** to the existing studio:

- Pick the niche from [[ai-agency-niches]] that overlaps most with current capability (probably AI-ready website conversion).
- Run the 90-day plan as a side track during normal client work.
- If the productized line earns its keep by month 3, it gets first claim on Finn's freed-up hours; if not, archive it without ego.

Tracked as an open thread in [[Finn-OS/now]] when actively running.

## Tactical companion — Isenberg's 30-step playbook

The 90-day plan is calendar-bounded but tactically vague. [[build-niche-agent-saas]] (the workflow extracted from [[isenberg-future-of-saas-30-step]]) fills in week-by-week tactics — particularly around content cadence (Steps 6–10), the services-first sequencing (Steps 11–13, see [[services-first-saas]]), and the per-task pricing migration (Steps 21–22, see [[per-task-pricing]]).

Use this page for the calendar, that page for the checklist.

## Related

- [[ai-agency-niches]]
- [[productized-services]]
- [[claude-max-arbitrage]]
- [[wat-framework-marketing]]
- [[deep-research-strategic-arbitrage]]
- [[overlook-strategy-positioning]]
- [[build-niche-agent-saas]]
- [[agent-native-saas]]
- [[services-first-saas]]
- [[per-task-pricing]]
- [[isenberg-future-of-saas-30-step]]
