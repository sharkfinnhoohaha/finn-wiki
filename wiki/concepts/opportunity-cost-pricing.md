---
title: "Opportunity-cost pricing"
type: concept
tags: [concept, pricing, howie-liu, business, agentic-services]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-howieliu-hyperagent-2026-04-29]]
---

# Opportunity-cost pricing

Howie Liu's reframe of the pricing question for agents. Don't anchor on $20-per-month SaaS subs. Anchor on what it would have cost a human to do the work — labor cost, opportunity cost, the time the buyer no longer has to spend.

> "[9:25] We have to get over this hump of anchoring our price expectations for AI on traditional subscription software where it's like, oh my god, I have to pay 20 bucks for Netflix per month… instead, think of this as how much would it have cost a human to do the thing." — Howie Liu

His example is the punchline: he generates a board memo for $150 in tokens. His investors say it's the best thing he's written. The benchmark isn't "$150 is a lot for a doc" — the benchmark is "what would it have cost in his time, his lawyer's time, his strategy partner's time." Order of magnitude difference.

> "[10:01] Even if it cost me, let's call it like $150 of tokens to generate that output, think about the opportunity cost of my time." — Howie Liu

> "[10:36] Anchor it around value. What's the value I'm getting out of that?" — Howie Liu

For Overlook this is the page that breaks the studio out of the [[pricing-and-rates|hourly-rates]] gravitational well. The wrong question: "how many hours does it take Finn to build this skill?" The right question: "what's the FTE cost of the workflow this skill replaces, and for how long?" A skill that handles a $90k/yr coordinator's inbox is worth a multi-five-figure build, not a $200/hour timesheet.

The mechanism that makes this defensible is the [[rubrics-and-llm-as-judge|rubric]]. Without rubrics, the buyer is buying a hope. With rubrics, the buyer is buying a measurable replacement of a labor function — and the price point lives where it should: against the labor, not against the dev hours.

This dovetails with [[per-task-pricing]] (the simpler unit price for one-off agent tasks) and [[productized-services]] (recurring deliverables priced against the workload they offload). The studio's pricing tier should hold three layers:

1. Per-task pricing for one-shot work, at token cost + margin.
2. Skill pack builds priced against the labor they replace, with a rubric attached.
3. Retainer for ongoing fleet operation — see [[per-task-pilot-on-retainers]] and [[fleet-of-agents]].

The objection-handler is also Howie's: any client who balks at a $X token bill is mis-anchored on subscription software. The reframe isn't a discount, it's a comparison — what would they have paid an agency, a contractor, an internal hire, in time-to-output. See [[agentic-services-positioning]].

## Related

- [[per-task-pricing]]
- [[agentic-services-positioning]]
- [[pricing-and-rates]]
- [[productized-services]]
- [[fleet-of-agents]]
- [[rubrics-and-llm-as-judge]]
- [[per-task-pilot-on-retainers]]
- [[overlook-strategy-positioning]]
- [[isenberg-howieliu-hyperagent-2026-04-29]]
