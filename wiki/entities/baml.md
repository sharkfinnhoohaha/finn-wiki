---
title: "BAML"
type: entity
tags: [tool, ai, structured-outputs, typescript]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# BAML

Boundary ML's schema-strict structured outputs framework. Define LLM output schemas in `.baml` files, generate TypeScript clients directly. Outperforms raw OpenAI Structured Outputs on strict adherence to schema constraints.

Used in [[ai-newsroom-pipeline]] for the fact-check layer: BAML extracts claims (text, who, when, where, source-required boolean) from drafts with zero hallucination of unexpected fields. The schema-first discipline catches drift early.

BAML also enforces that optional vs required fields are non-negotiable at generation time, unlike prompt-based shaping which can leak unexpected keys.

## See also

- [[ai-newsroom-pipeline]]
