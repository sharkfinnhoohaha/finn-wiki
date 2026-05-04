---
title: "Mastra"
type: entity
tags: [tool, ai-orchestration, typescript]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# Mastra

TypeScript AI orchestration framework built on [[vercel]] AI SDK v6. YC W25 cohort, $13M seed round October 2025, ~22K GitHub stars (MIT licensed).

Provides Agent, Workflow, RAG, memory, evals, and durable suspension primitives — all the orchestration plumbing for agentic systems. Used in [[ai-newsroom-pipeline]] as the core runtime for the fetcher → drafter → fact-checker → publisher pipeline.

Mastra runs on top of the Vercel AI SDK and trades off breadth (fewer integrations than LangChain) for depth in the TypeScript DX and unattended-run reliability. Durable suspension lets workflows pause and resume across restarts, which maps cleanly to human-in-the-loop journalism workflows.

## See also

- [[vercel]]
- [[ai-newsroom-pipeline]]
- [[inngest]]
