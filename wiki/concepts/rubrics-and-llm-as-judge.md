---
title: "Rubrics and LLM-as-judge"
type: concept
tags: [concept, rubrics, eval, observability, hyperagent, karpathy]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[isenberg-howieliu-hyperagent-2026-04-29]], [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Rubrics and LLM-as-judge

The eval primitive for any agent fleet you can't watch by hand. A rubric is a pinned spec of what good looks like for a task type — defined dimensions, scored on every run by a separate LLM acting as judge. Howie Liu calls them rubrics; Karpathy calls the same idea a "council of LLM judges." Same primitive, two vocabularies — the difference is one is shipped product, the other is a slide.

> "[31:27] We have this concept of what we call rubrics. It's like an eval rubric. And what you can do with rubrics that's really powerful is actually define what does good look like for a certain type of task… every time my agent runs… I want to score that content along the dimensions that you care about using a separate LLM as judge." — Howie Liu

> "[15:06] Even for things like writing or so on, you can imagine having a council of LLM judges and probably get to something reasonable… ultimately yeah, everything is automatable." — Karpathy

Why this matters: it makes [[jaggedness-and-verifiability|verifiability]] portable. RL-tractable domains were verifiable for free — code compiles, math has answers. Subjective domains weren't. Rubrics make subjective domains verifiable on demand. Once you can grade a tweet draft on hook strength, voice match, length, and CTA quality, you can run the agent overnight and trust the high-scoring outputs. Karpathy's whole "everything is automatable" line cashes out in this primitive.

Two compounding payoffs:

1. **Fleet observability.** As the fleet grows, the human can't read every output. The rubric becomes the watchtower.

> "[34:20] As you scale up if you're the CEO of a business, you just literally don't have time to go and look at every single thing… so you need to create better automated checks and balances to oversee what the agents are doing." — Howie Liu

2. **Cost-quality optimization.** Pin a rubric, swap models, watch the score. Howie's example — drop from Opus to Sonnet, get 5x cost reduction, score barely moves — is the move that turns rubric work from quality control into margin engineering.

> "[33:07] If I pinned the eval rubric to any one of these agents, I would see the trend line of how it's scoring. I could then automatically suggest hey maybe I can reduce the model quality so I drop from Opus to Sonnet, get a five times reduction in cost and the score didn't go much down." — Howie Liu

The contrast with rubric-less platforms is sharp:

> "[33:44] If you're using Manus, who is the judge around the output? The judge is you, the human being, right? It's not Opus 4.6." — Howie Liu

For Overlook the implication is direct. A skill pack without a rubric isn't a skill pack — it's a hopeful prompt. Every skill the studio ships should ship with the rubric that grades it. That's how the fleet stays oriented at scale, how the [[ai-newsroom-pipeline]] holds quality, and how the studio's pricing defends margin when models get cheaper underneath.

## Related

- [[skills-as-primitive]]
- [[jaggedness-and-verifiability]]
- [[fleet-of-agents]]
- [[agentic-engineering]]
- [[ai-newsroom-pipeline]]
- [[autonomous-agent-design-principles]]
- [[loopiness-framework]]
- [[isenberg-howieliu-hyperagent-2026-04-29]]
- [[karpathy-vibe-to-agentic-2026-04-29]]
