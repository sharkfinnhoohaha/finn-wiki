---
title: "Kimi K2 (Moonshot AI)"
type: entity
tags: [tool, llm, moonshot-ai, china]
created: 2026-04-25
updated: 2026-04-25
weight: low
node_size: 2
sources: [[pier-and-point-research]]
---

# Kimi K2 (Moonshot AI)

Chinese frontier LLM from Moonshot AI, MoE architecture (1T total / 32B active). Timeline: K2 July 2025, K2 Thinking November 2025, K2.5 January 27 2026, **K2.6 April 20 2026**.

K2.5 scored 65% on AA-Omniscience hallucination benchmarks — disqualifying for journalism. K2.6 (shipped 6 days before the pier-and-point research, April 20 2026) scores 39%, comparable to [[anthropic]]'s flagship Opus tier (36%) — now in-band for factual reliability.

API pricing via Vercel AI Gateway / DeepInfra: ~$0.55–0.80/M input, ~$2.20–3.50/M output. 256K context window.

**Hard privacy rule:** never route confidential source material through Moonshot direct. PRC jurisdiction + training-on-input rights in their TOS. Use [[vercel]] AI Gateway with Zero Data Retention or DeepInfra (US-hosted). Used as cheap drafter in [[ai-newsroom-pipeline]] hybrid stack, paired with Claude Sonnet for fact-check.

## See also

- [[ai-newsroom-pipeline]]
- [[vercel]]
- [[anthropic]]
t-4-6]]
