---
title: "Phase 3 agents"
type: concept
tags: [concept, agents, ai-history, claude-code, openclaw]
created: 2026-04-24
updated: 2026-04-25
weight: high
node_size: 15
sources: [[deep-research-strategic-arbitrage]], [[openclaw-deep-dive-krentsel]]
---

# Phase 3 agents

The framing the [[deep-research-strategic-arbitrage|2026 strategic briefing]] uses to describe where AI is now: autonomous agents with dynamic tool discovery, self-modification, and direct environment access. Cleaner than vague "agentic AI" terminology because it places the current moment in a four-stage progression.

## The four phases

| Phase | Definition | Examples |
|---|---|---|
| Phase 0 | Next-token predictors | BERT, GPT-1/2/3 |
| Phase 1 | Fine-tuned assistants | ChatGPT, early Claude |
| Phase 2 | Scoped agents (static tool orchestration) | LangChain, AutoGen — fixed set of API calls |
| Phase 3 | Autonomous agents (dynamic tool discovery, self-evolution) | [[claude-code]], [[openclaw]] |

## What makes Phase 3 different

The briefing names two pillars:

1. **Autonomy via control loop.** "Heartbeats" (scheduled internal check-ins) and "Cron" (time-based scheduling) let agents act without prompting. Claude Code's `Scheduled Tasks` and `/loop` are concrete examples — see [[wat-framework-marketing]] step 5.
2. **Generality via [[mcp-protocol|MCP]] + CLI.** The agent isn't tied to one platform; it discovers tools at runtime and operates across local, cloud, and SaaS surfaces.

## Why this framing is useful

Three reasons:

1. **It pre-empts the "AI is overhyped" objection.** Phase 1 *was* overhyped (chatbots that couldn't take actions). Phase 3 actions are observable — the agent did or didn't deploy the code.
2. **It clarifies what Overlook is selling.** Bespoke Phase 2 "AI features" (a chatbot, a summary endpoint) is a commodity. Productizing Phase 3 *workflows* (an autonomous marketing engine, an autonomous research loop) is differentiated. See [[productized-services]] and [[ai-agency-niches]].
3. **It gives a litmus test for new tools.** When evaluating a new framework or platform, ask: does it require static tool orchestration (Phase 2) or does it support dynamic discovery (Phase 3)? Phase 2 tools age badly.

## Caveats

> [!warning] Numbering varies across sources
> The "Phase 0-3" labels from the [[deep-research-strategic-arbitrage]] briefing aren't industry-standard. [[alex-krentsel]]'s [[openclaw-deep-dive-krentsel|OpenClaw deep dive]] uses a Phase 1-4 numbering for the same progression (see [[loopiness-framework]]). In Krentsel's framing, this page's "Phase 3" = his "Phase 4," and he adds an explicit mechanism (increasing "loopiness" / recursion depth) for why each phase is more capable. Both framings point at the same reality, just different labels.

## Related

- [[claude-code]]
- [[openclaw]]
- [[loopiness-framework]]
- [[mcp-protocol]]
- [[wat-framework-marketing]]
- [[karpathy-autoresearch]]
- [[deep-research-strategic-arbitrage]]
- [[openclaw-deep-dive-krentsel]]
