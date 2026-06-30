---
title: "GLM-5.2 vs DeepSeek V4"
type: comparison
tags: [llm, models, benchmarks, ollama, cost]
created: 2026-06-29
updated: 2026-06-29
---

# GLM-5.2 vs DeepSeek V4

Comparison of two frontier open-weights models, evaluated for Finn's stack in June 2026.

## Benchmarks

| Metric | GLM-5.2 | DeepSeek V4 |
|---|---|---|
| AA Intelligence Index | 51 | 44 |
| Non-hallucination | 72% | 6% |
| Agentic tasks | Stronger | Weaker |
| Knowledge breadth | Narrower | Broader |
| Cost | 3x more expensive | 3x cheaper |

## Speed (Ollama Cloud, June 29 2026)

| Model | Output speed |
|---|---|
| gemini-3-flash-preview | ~117 tok/s |
| deepseek-v4-flash | 53-78 tok/s |
| glm-5.2 | 20-60 tok/s |

GLM-5.2 on Ollama Cloud is 2x faster sustained output than other providers for the same model.

## Where each wins

**GLM-5.2** — agentic tasks, tool use, non-hallucination. Better when accuracy matters more than cost. Currently the #1 open-weights model globally, 5th overall behind Claude Fable 5 (60), Opus 4.8 (56), GPT-5.5 (55/53). Beats Opus 4.7 on Intelligence Index (51 vs 43). 5-7x cheaper than Opus 4.8.

**DeepSeek V4** — knowledge breadth, cost-sensitive work, bulk generation. 3x cheaper than GLM-5.2. Good for auxiliary slots where reasoning quality matters but hallucination risk is lower (compression, search, titles, triage).

## Decision

GLM-5.2 as primary model (via [[ollama-cloud-migration|Ollama Cloud]]). DeepSeek V4 Flash for auxiliary slots. See [[ollama-cloud-migration]] for the full config.

## Related

- [[ollama-cloud-migration]]
- [[ollama]]
- [[deepseek-v4-flash-auxiliary-upgrade]]