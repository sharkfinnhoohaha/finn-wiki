---
title: "Karpathy's autoresearch"
type: concept
tags: [concept, karpathy, autonomous-agents, ml-research, vibe-coding]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[notebooklm-overlook-strategy]]
---

# Karpathy's autoresearch

[[andrej-karpathy]]'s public repo (`karpathy/autoresearch`) demonstrating an autonomous loop where an LLM agent runs ML research experiments on a single GPU overnight, refining nanochat training without human intervention. Released April 2026; widely cited as the "this changes everything" moment for autonomous research agents.

## What it actually does

Per the [[notebooklm-overlook-strategy]] cluster: the repo wires up an agent that picks a hyperparameter direction, kicks off training, evaluates the result, journals what it learned, and chooses the next experiment. No human in the loop after the initial framing. The training target is [[andrej-karpathy|nanoGPT]]/nanochat — small enough to fit on a single consumer GPU, big enough that meaningful improvements are observable.

Companion sources in Finn's pile:
- *Karpathy's "autoresearch" broke the internet*
- *The only AutoResearch tutorial you'll ever need*
- *Will change way of life: Ex-Tesla Autopilot head Andrej Karpathy makes a self-driving car prediction* (Times of India)
- *Which Jobs are at Risk From AI? Evaluating Karpathy's Exposure Dashboard - CSEP*

## Why it matters for this vault

Two reasons:

1. **It's the training-research analogue of [[vibe-coding]].** Same posture: human supplies direction, agent runs the loop overnight, human reviews the output in the morning. Same risk profile too — the agent will optimize for the wrong thing if the framing is sloppy.
2. **It's the closest mainstream example of the [[llm-wiki-pattern]] applied to research, not knowledge.** Karpathy himself maintains the LLM Wiki ([[karpathy-llm-wiki-gist]]); autoresearch is the *acting* counterpart to the *remembering* the wiki does.

## Sutskever's reframing

In *"Ilya Sutskever – We're moving from the age of scaling to the age of research"* (also in the source pile), Sutskever argues the next frontier of capability gain is not more parameters but more *research per dollar*. Autoresearch is the operational form of that argument: if research can be automated, the bottleneck shifts from compute to taste. Karpathy's framing matches.

## Implications Finn might care about

- **For [[overlook-strategy]]:** if a productized "research-as-a-service" tier ever makes sense, the autoresearch pattern is the substrate. Niche customers: indie ML teams, biotech, quant.
- **For this wiki:** worth experimenting with an "auto-lint" pass that runs the [[lint-workflow]] on a schedule and proposes updates without prompting. Same loop, applied to knowledge maintenance instead of training.
- **For [[Finn-OS/career/skills]]:** Karpathy ecosystem fluency is becoming a marker of "in the conversation" for the AI dev scene. Useful regardless of monetization.

## Related

- [[andrej-karpathy]]
- [[karpathy-llm-wiki-gist]]
- [[llm-wiki-pattern]]
- [[vibe-coding]]
- [[phase-3-agents]]
- [[knowledge-graph-llm-wiki]]
- [[notebooklm-overlook-strategy]]
