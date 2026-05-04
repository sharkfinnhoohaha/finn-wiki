---
title: "Per-task pricing (and the per-seat decline)"
type: concept
tags: [concept, pricing, business-model, saas, agents]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 10
sources: [[isenberg-future-of-saas-30-step]]
---

# Per-task pricing (and the per-seat decline)

The 2026 pricing evolution that [[greg-isenberg|Isenberg]] argues drives why public-market SaaS is down 30–50% from highs: the per-seat model breaks when an agent does the work that would have required a seat. When a customer can spin up one Salesforce-equivalent agent that completes the workflow for $200 per execution, paying $150/seat/month for 20 reps stops penciling.

## The progression

Isenberg lays out three stages, in order. A new agent-native SaaS doesn't have to start at the end — it can start per-seat and migrate.

| Stage | What you charge for | Example | When to use |
|---|---|---|---|
| Per-seat | Access for each user | "$50/user/month" | Easy to sell, familiar to buyers, weak alignment with value delivered |
| **Per-task** | Each completed workflow execution | "$200 every time we run the monthly SEO audit + revisions" | Once you've shown the workflow completes reliably, customers prefer this |
| **Outcome** | The result the workflow produces | "$2,000 every time the audit produces a ranking improvement of N positions" | Highest alignment, highest pricing power, highest delivery risk |

Per-task is the breakout because it removes the customer's question *"how do I justify N seats."* The bill matches the work.

## Why this is the model agent products want

Three structural reasons:

1. **It matches cost structure.** Each task execution has measurable LLM token cost + tool API cost. Per-seat hides this; per-task surfaces it cleanly. Margins become observable.
2. **It removes the seat-count negotiation.** A buyer who wants to evaluate doesn't need to predict how many people will use the tool. They commit to one task and decide if it was worth the price.
3. **It rewards quality over usage.** Per-seat rewards heavy users; per-task rewards reliable completions. The latter aligns with what the customer actually buys.

## Pricing-anchor math (Isenberg's example)

The pitch goes:

> "Your time is worth $400/hour. This workflow takes you 10 minutes a day = ~50 hours a year = $20,000 of your time. We do it for $200/run, ~12 runs/year. You spend $2,400 to recover $20,000. That's a 8x return on time."

The numbers Isenberg uses: owner time at $250K–$1M/yr salary → $125–$500/hour. Saved time at 10–30 min/day → 50–150 hours/year → $6K–$75K of "value" depending on assumptions. Charge $1.5K–$5K/yr for that workflow ≈ 5–10x value-capture, which sits inside the [[productized-services|productization checklist]] floor.

## How this lands for Overlook

[[pricing-and-rates]] currently holds:

- [[ventura-forward]] at $300/mo retainer (per-seat-equivalent)
- Music licensing variable
- Berklee assignment-budget numbers (not real rates)

There's no per-task line item. Adopting per-task pricing for any future Overlook agent-SaaS would be a clean test:

- **Pick one repeatable workflow** Overlook currently does manually — say, *monthly client portal update post production* (write update, attach milestones, post to portal, notify client).
- **Quote it as $X/post** on top of any existing retainer.
- **Track actual time saved** vs. building per-task into automated execution via [[wat-framework-marketing|the WAT setup]].

This wouldn't replace retainers — it would add a per-task tier that prices each agent execution on top, similar to how Stripe charges base + per-transaction.

## Open question for Overlook

> [!warning] Service vs. product pricing collision
> Per-task pricing makes sense for *agent execution* of a fixed workflow. It doesn't make sense for *bespoke design work*, which is judgment-heavy and irregular. The risk of mixing models is teaching clients to expect per-task transparency on services that are inherently per-project. Resolve by line-item separating the two on invoices.

## Related

- [[isenberg-future-of-saas-30-step]]
- [[agent-native-saas]]
- [[productized-services]]
- [[ai-agency-niches]]
- [[claude-max-arbitrage]]
- [[pricing-and-rates]]
- [[overlook-strategy-positioning]]
