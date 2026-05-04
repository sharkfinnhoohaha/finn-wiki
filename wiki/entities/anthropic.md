---
title: "Anthropic"
type: entity
tags: [company, ai, llm, model-provider]
created: 2026-04-26
updated: 2026-04-26
weight: low
node_size: 2
sources: []
---

# Anthropic

AI safety company. Maker of [[claude-code]], the Claude API, and the Claude desktop app powering Cowork mode. Default cloud-LLM provider in Finn's stack — used for synthesis and tricky debugging while [[ollama]] handles cheap local inference.

## How Finn uses it

- [[claude-code]] CLI for agentic coding tasks
- Cowork mode for desktop-integrated workflows (this vault is maintained by it)
- Direct API calls for any custom embedding or completion work that needs frontier-quality output (rare — most embedding work goes through [[ollama]] + [[pgvector]])

## Models referenced

- Claude Opus 4.6 / 4.7 — premium tier
- Claude Sonnet 4.6 — daily driver
- Claude Haiku 4.5 — cheap and fast

## Token discipline

The guiding principle in [[CLAUDE]]: prefer cheaper Anthropic models for grunt work, reserve Sonnet/Opus for synthesis and judgment.

## Related

- [[claude-code]]
- [[ollama]] — the local-LLM counterpart in the hybrid workflow
- [[hybrid-llm-workflow]]
