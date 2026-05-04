---
title: "Vertex AI Gemini Flash as the cheap mechanical tier"
type: tech
tags: [gcp, vertex-ai, gemini, hybrid-llm, token-conservation, agent-native-saas, article]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[isenberg-future-of-saas-30-step]]
---

# Vertex AI Gemini Flash as the cheap mechanical tier

**Article 2 of 4 on the [[gcp-credits|$300 GCP credits]] series.** Estimated burn: **$40–$80.**

## The hypothesis

[[isenberg-future-of-saas-30-step|Isenberg Step 13]] says explicitly: *separate judgment from mechanical tasks.* AI is incredible at mechanical, mixed at judgment. The implication for the [[hybrid-llm-workflow|hybrid LLM stack]] Finn already runs is that the *mechanical* tier should be the cheapest model that produces acceptable output, not the smartest model that produces beautiful output.

Finn's current hybrid pattern: Sonnet/Opus for synthesis + judgment, [[ollama|Ollama]] (mistral, nomic-embed-text) for local embeddings + cheap inference. **Gemini Flash via Vertex AI is a third tier worth slotting in:** cheaper than Sonnet, smarter than mistral-7B, no local-machine resource consumption.

## The pricing math (April 2026)

Approximate per-million-token costs:

| Model | Input | Output | Use case |
|---|---|---|---|
| Claude Sonnet 4.6 | ~$3 | ~$15 | Judgment, synthesis, code generation |
| Claude Haiku 4.5 | ~$1 | ~$5 | Fast judgment, structured output |
| Gemini 2.5 Flash (Vertex) | ~$0.30 | ~$2.50 | Mechanical bulk tasks |
| Gemini 2.5 Flash-Lite | ~$0.10 | ~$0.40 | Highest-volume mechanical, low-stakes |
| Local mistral via Ollama | $0 | $0 | Embeddings, smallest tasks |

Gemini Flash sits at roughly 10× cheaper than Sonnet and 5–10× cheaper than Haiku. For workflows where the agent runs the same transformation thousands of times — content idea generation, transcript-to-outline, image-to-alt-text, OCR-cleanup — that delta matters.

For $300 credit:

- ~1B input tokens of Flash, OR
- ~120M output tokens, OR
- A mix that easily covers months of mechanical work for a small agent-SaaS pilot.

## What "mechanical" looks like in Finn's actual workflows

Mapped to existing wiki pages:

| Workflow | Current model | Mechanical or judgment? | Switch candidate? |
|---|---|---|---|
| Wiki ingest summarization ([[ingest-workflow]]) | Sonnet | Judgment-heavy (cross-references) | No |
| Wiki ingest *raw extraction* (transcript → cleaned text) | Sonnet | Mechanical | **Yes — Flash** |
| Content idea generation ([[media-first-distribution]]) | Sonnet | Mostly mechanical (with seed prompts) | **Yes — Flash** |
| Per-task agent execution: monthly post draft | (TBD — [[per-task-pilot-on-retainers]]) | Mechanical first draft, judgment review | **Flash for draft, Sonnet for review** |
| Document chunking + embedding | Ollama nomic-embed | Mechanical | Stay local — already free |
| Code generation in [[claude-code]] sessions | Sonnet | Judgment | No |
| OCR + structure extraction ([[gcp-document-ai-document-analysis-niche]]) | TBD | Mechanical | **Yes — Document AI for OCR, Flash for cleanup** |
| Cue-sheet research summaries (Berklee work) | Sonnet | Mechanical bulk | **Yes — Flash** |

The general rule: **if a workflow runs the same prompt shape against many inputs, use Flash. If a workflow synthesizes across heterogeneous context with stakes attached, use Sonnet/Opus.**

## How Vertex AI fits into the stack

Three integration points:

1. **Cowork session.** Vertex doesn't have an Anthropic-curated MCP yet, but the Vertex AI REST API can be wrapped as a tool in any agent that supports OpenAI-compatible endpoints. Or call directly via the `google-cloud-aiplatform` Python SDK from a Cloud Run worker (see [[gcp-cloud-scheduler-agent-heartbeat]]).
2. **Overlook portal AI features.** The disabled `AskAIView` could route mechanical queries to Flash and judgment-heavy queries to the existing Ollama/Sonnet path. `ENABLE_AI=true` master switch unchanged; the routing happens inside `lib/ai-router.ts` (new).
3. **Per-task agent runs.** The Cloud Run worker from Article 1 calls Vertex AI for the Flash tier, Anthropic API for the Sonnet tier. Routing decision lives in the workflow definition file, not in the worker code.

## Hybrid routing pattern

```
Workflow: "Monthly client portal post"
├─ Step 1: pull last month's project activity from DB              [no LLM]
├─ Step 2: Flash — draft post outline from activity                [mechanical]
├─ Step 3: Flash — generate 3 hook variants                        [mechanical]
├─ Step 4: Sonnet — pick best hook + tighten copy                  [judgment]
└─ Step 5: human review in Overlook portal Agents tab              [judgment]
```

Cost per execution: ~$0.005 (Flash) + ~$0.05 (Sonnet) = ~$0.055. Billable per-task price (per [[per-task-pricing]]): $50/post. **Margin: ~99.9%** before infra and Finn's review time.

## What to spike with the credit

A 1-2 day experiment:

- **Day 1.** Generate 100 content ideas for one chosen niche (per [[media-first-distribution]]) using Gemini Flash. Compare to the same 100 prompted to Sonnet. Eyeball the quality delta. Track tokens used.
- **Day 2.** Wire Flash into the wiki ingest pipeline as the "raw transcript cleanup" tier (separate from Sonnet for the actual ingest synthesis). Run on the next 3 sources. Measure cost-per-ingest before and after.

Acceptance criterion: at the end of 2 days, Finn has a written rule of thumb for *which Cowork-skill prompts route to Flash vs. Sonnet*, with cost-per-execution measured for each.

## Caveats

> [!warning] Gemini's tone differs from Claude's
> Flash's default voice is more bulleted, more upbeat, more "AI-assistant-coded" than Claude. For [[brand-voice|brand-aware output]], add system-prompt constraints aggressively or only use Flash for steps where the output gets rewritten by Sonnet downstream.

> [!warning] No off-the-shelf Anthropic-style caching
> Anthropic's prompt caching (90% cost reduction on cached input) doesn't have a 1:1 Vertex equivalent. Vertex offers context caching but the pricing/UX is different. Don't blindly assume parity.

> [!warning] Egress (again)
> Calling Vertex from a Cowork session running locally on the M1 Max means egress traffic out of GCP. At Flash prices it's still cheap, but track the meter.

## Related

- [[gcp-credits]]
- [[isenberg-future-of-saas-30-step]]
- [[hybrid-llm-workflow]]
- [[token-conservation-mindset]]
- [[ollama]]
- [[claude-code]]
- [[claude-max-arbitrage]]
- [[overlook-portal-webapp]]
- [[per-task-pricing]]
- [[per-task-pilot-on-retainers]]
- [[gcp-cloud-scheduler-agent-heartbeat]]
