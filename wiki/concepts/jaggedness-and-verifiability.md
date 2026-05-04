---
title: "Jaggedness and verifiability"
type: concept
tags: [concept, karpathy, capability, rl, verifiability]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Jaggedness and verifiability

Karpathy's two-part theory of why frontier models are weirdly shaped. Frontier labs train inside reinforcement learning environments, with verifier rewards. Wherever the verifier is sharp — math has answers, code compiles or doesn't — the model gets pushed to a peak. Wherever the verifier is blurry or absent — taste, register, novel reasoning, anything subjective — the model stagnates. The capability profile comes out jagged: cliffs and valleys, not a smooth surface.

> "[10:19] When frontier labs are training these LLMs these are giant reinforcement learning environments. So they are given verification rewards… they end up creating these jagged entities that really peak in capability in verifiable domains like math and code… and stagnate and are a little bit rough around the edges when things are not in that space." — Karpathy

The predictive filter is two-part: **verifiable + labs care**. Verifiable means the output can be auto-graded. Labs care means it's a domain the frontier teams prioritize for their RL mix. Both conditions matter. A verifiable domain the labs ignore stays jagged; a domain the labs care about that isn't verifiable also stays jagged.

The car-wash anecdote is the metaphor that survives:

> "[11:18] How is it possible that state-of-the-art Opus 4.7 will simultaneously refactor a 100,000-line codebase or find zero-day vulnerabilities and yet tells me to walk to this car wash? This is insane." — Karpathy

Same model, two circuits, two outcomes. The strawberry-letter-count meme is the previous-generation version of the same story; once labs noticed and patched it with tokenization fixes, the failure mode moved sideways into other unmodeled corners.

For agency work this is the framework that drives the [[workflow-audit-service]]. The audit's whole job is to map a client's workflows onto the RL circuits map. Tasks that live inside verifiable + labs-care territory ship cheap and fast — write the spec, hand to the agent, ship. Tasks that live outside need [[skills-as-primitive|skills]] to compensate, [[rubrics-and-llm-as-judge|rubrics]] to grade, or — in the worst case — fine-tuning data the studio has to generate.

> "[13:04] If you're in the circuits that were part of the RL, you fly. And if you're in the circuits that are out of the data distribution, you're going to struggle." — Karpathy

The escape hatch for non-verifiable domains is the council of LLM judges — multiple judges, defined dimensions, ensemble score. That makes subjective work tractable in the same way RL made code tractable. Howie Liu's rubrics are the same primitive, shipped. See [[rubrics-and-llm-as-judge]].

The pricing implication: jaggedness is asymmetric. A workflow inside the circuits that nobody at the client's company has tried is the cheapest revenue in the building. Pricing should track the [[opportunity-cost-pricing|labor it replaces]], not the dev hours. See [[agentic-services-positioning]].

## Related

- [[software-3-0]]
- [[ghosts-not-animals]]
- [[agentic-engineering]]
- [[rubrics-and-llm-as-judge]]
- [[workflow-audit-service]]
- [[agentic-services-positioning]]
- [[opportunity-cost-pricing]]
- [[skills-as-primitive]]
- [[karpathy-vibe-to-agentic-2026-04-29]]
