---
title: "Cloud Scheduler + Cloud Tasks as the agent heartbeat"
type: tech
tags: [gcp, cloud-scheduler, cloud-tasks, heartbeat, agent-native-saas, orchestration, article]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]], [[openclaw-deep-dive-krentsel]]
---

# Cloud Scheduler + Cloud Tasks as the agent heartbeat

**Article 1 of 4 on the [[gcp-credits|$300 GCP credits]] series.** Estimated burn: **$5–$15.**

## The hypothesis

For an [[agent-native-saas]] line, the difference between *"a script Finn runs sometimes"* and *"a SaaS that customers pay for"* is whether the agent runs autonomously on a schedule. The [[autonomous-agent-design-principles|Krentsel design principles]] name this as the heartbeat pattern; the [[isenberg-future-of-saas-30-step|Isenberg playbook]] makes it a Step 17 requirement (orchestration, retries, verifications). Per-task pricing ([[per-task-pricing]]) is unbillable without a reliable scheduler.

The current Overlook stack uses Vercel Cron Jobs (limited to one cron-tick per second per project, 100/day on the Hobby tier) and could use Trigger.dev or [[railway|Railway]] cron. **Cloud Scheduler is cheaper, more flexible, and integrates natively with Cloud Tasks for the retry layer Step 17 requires.**

## What you actually get for $5–$15

| Service | Free tier | Marginal cost |
|---|---|---|
| Cloud Scheduler | 3 jobs free forever | $0.10 per job per month after that |
| Cloud Tasks | 1M operations free per month | $0.40 per million after that |
| Cloud Run (handlers) | 2M requests free / month | $0.40/M after that |

For a heartbeat that fires hourly across 10 client workflows = 240 jobs/day = 7,200/month. **Total marginal cost: under $5/month.** The $300 credit is mostly headroom; this experiment barely touches it.

## The architecture

```
Cloud Scheduler  ──(HTTP POST)──→  Cloud Run handler  ──(enqueue)──→  Cloud Tasks
       │                                                                  │
       │                                                                  │
       └─ schedule: "0 * * * *" per client                                ▼
          payload: { client_id, workflow_id }                       Worker (Cloud Run)
                                                                          │
                                                                          ├─ call Claude / Gemini / Ollama
                                                                          ├─ write result to Railway Postgres
                                                                          ├─ POST to Overlook portal Updates
                                                                          └─ on failure → Cloud Tasks retry (exponential backoff)
```

Three pieces:

1. **Cloud Scheduler** as the cron source. One scheduler job per (client × workflow) pair, or one job per workflow that fans out to clients via a list-clients-from-DB step.
2. **Cloud Run handler** as the entry point. Stateless, scales to zero. Receives the cron HTTP POST, enqueues a Cloud Task for each unit of work.
3. **Cloud Tasks** as the retry/orchestration layer. Built-in exponential backoff, deadline enforcement, dead-letter handling. Worker is another Cloud Run service.

The Postgres + portal post step writes back to the existing [[overlook-portal-webapp|Overlook portal]] — same Railway DB, same `FeedPost` / new `AgentRun` tables. **No production data leaves Railway.** GCP only handles the trigger and execution.

## How this slots into existing wiki concepts

- **[[orchestration-as-interface]]:** Cloud Tasks dashboard becomes the Belsky-style orchestration surface for *Finn* (operator view); the Overlook portal Agents tab is the same surface for *clients* ([[portal-orchestration-extension]]).
- **[[wat-framework-marketing]]:** Step 5 of the WAT recipe ("Autonomy") names Trigger.dev / Modal / Railway as deployment targets. Cloud Run + Cloud Scheduler is a fourth option, often cheaper at low volume.
- **[[per-task-pricing]]:** Each Cloud Task invocation = one billable execution. Cloud Tasks emits structured logs that pipe directly into per-task billing reports without any custom counting infrastructure.
- **[[token-conservation-mindset]]:** Stateless Cloud Run + free-tier scheduler keeps fixed costs near zero. Aligned with Finn's preference for not paying for idle.

## What to spike with the credit

A 2-3 day experiment:

- **Day 1.** Stand up one Cloud Scheduler job → Cloud Run handler → Cloud Tasks → Cloud Run worker pipeline. Worker writes a row to Railway Postgres. Goal: prove the wiring works end-to-end.
- **Day 2.** Add retry logic via Cloud Tasks task retries with exponential backoff. Trigger a deliberate failure (worker returns 500) and verify the retry hits.
- **Day 3.** Build the per-task billing read: query Cloud Tasks logs, count completed executions per client per workflow, compute billable amount. Optionally pipe into [[wave|Wave]] as a draft invoice.

Acceptance criterion: Finn can describe a new "monthly portal post" workflow as one Cloud Scheduler entry + one Cloud Run handler, and bill it through Wave automatically.

## When to migrate, when to stay on Vercel/Railway

| Stay on Vercel Cron + Railway | Migrate to Cloud Scheduler + Cloud Tasks |
|---|---|
| <10 scheduled workflows total | 10+ workflows, growing |
| All workflows fit in <5 min execution | Need long-running (>5 min) execution |
| No retry / backoff requirements | Need exponential backoff with structured DLQ |
| Single-team, single-project | Multi-tenant per-client billing readouts |

If any of the right-column conditions kick in within 90 days, the migration earns its keep. If not, this experiment is a documented "tested, didn't pursue" entry in the log.

## Risks

> [!warning] Egress and cross-cloud latency
> Cloud Run worker calling Railway Postgres = cross-cloud round-trip per execution. Fine for low-throughput per-client workflows; potentially expensive for high-throughput agent loops. Measure before scaling.

> [!warning] Credential sprawl
> Each new GCP service is a new IAM surface. If pursued past the spike, document service-account permissions in [[mcp-protocol|the MCP-style auth pattern]] doc — easy to leave overpermissioned dev roles in place.

## Related

- [[gcp-credits]]
- [[isenberg-future-of-saas-30-step]]
- [[autonomous-agent-design-principles]]
- [[orchestration-as-interface]]
- [[wat-framework-marketing]]
- [[per-task-pricing]]
- [[per-task-pilot-on-retainers]]
- [[portal-orchestration-extension]]
- [[trigger-dev]]
- [[railway]]
- [[overlook-portal-webapp]]
