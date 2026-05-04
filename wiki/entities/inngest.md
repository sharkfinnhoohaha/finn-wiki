---
title: "Inngest"
type: entity
tags: [tool, workflow, cron, durable-execution, ai-workflows]
created: 2026-04-25
updated: 2026-04-28
weight: low
node_size: 2
sources: [[pier-and-point-research]] [[automated-news-playbook-civic-operators]]
---

# Inngest

Durable workflow + cron service. The killer feature is `step.waitForEvent("article.approved")` — a primitive that lets workflows suspend for hours or days waiting on external events (human approvals, webhook callbacks), then resume with new context injected at the resumption point.

In [[ai-newsroom-pipeline]], this maps directly to the editorial review gate: a draft lands in the admin queue, the workflow sleeps, an editor approves/revises/rejects with notes, the event fires, and the pipeline resumes with the editor's feedback as new context for refinement or publishing.

**`step.ai.infer()` primitives + durable execution** = the default for AI workflows in 2025-26 per the April 28 [[automated-news-playbook-civic-operators|compass artifact]]. The combination is what makes Inngest the right choice for any LLM workflow with retries, suspension, and observability.

Trigger.dev v3 is the open-source alternative with explicit Claude Agent SDK examples and no strict timeouts.

**No-code companion**: [[n8n]] is the dominant no-code choice for AI-savvy solo operators when full TypeScript orchestration is overkill. Inngest + n8n covers the spectrum.

## See also

- [[ai-newsroom-pipeline]]
- [[mastra]]
- [[automated-news-playbook-civic-operators]]
