---
title: "Trigger.dev"
type: entity
tags: [tool, scheduling, deployment, jobs]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[notebooklm-mastering-agentic-workflows]]
---

# Trigger.dev

Background-job platform: write TypeScript / Python tasks, schedule them via cron or webhooks, run them in a managed runtime. Used by [[wat-framework-marketing]] as the cloud-deployment target for autonomous marketing scripts.

## Why it's tracked

The WAT-framework note specifically names Trigger.dev (alongside Modal and [[railway]]) as the "deploy your agent's scripts to the cloud so they run while you sleep" target. For Finn, this is the operational substrate for any productized service that runs continuously.

Already-known alternatives in this vault: [[railway]] (Finn's go-to backend host), Modal. Trigger.dev sits closer to "scheduled jobs as a primitive" than "long-running services" — which is the right shape for cron-driven marketing automation.

## Fit for Overlook

Not yet wired in. Worth evaluating if/when a productized service from [[ai-agency-niches]] needs scheduled execution that doesn't fit Railway's process model (e.g., 50 daily SEO scrapes, weekly competitor reports).

## Related

- [[wat-framework-marketing]]
- [[railway]]
- [[claude-code]]
- [[notebooklm-mastering-agentic-workflows]]
