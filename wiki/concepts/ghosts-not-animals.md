---
title: "Ghosts not animals"
type: concept
tags: [concept, karpathy, mental-model, llm-ontology]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 10
sources: [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Ghosts not animals

Karpathy's ontology for what an LLM actually is. Not a motivated organism with goals and feelings. A statistical entity summoned out of pretraining and reinforcement learning — a ghost that haunts the data distribution it was trained on. Animals have drives, develop in environments, get smarter under pressure. LLMs don't. They have circuits, and the circuits are wherever the training mix put them.

The mindset implication is operational, not philosophical. You don't motivate a ghost. Yelling at it, apologizing to it, pleading with it — none of those are levers. The lever is suspicion plus exploration: where are the RL circuits, what does this model fly at, what does it stagger through, and what's the cheapest way to find out.

> "[13:04] If you're in the circuits that were part of the RL, you fly. And if you're in the circuits that are out of the data distribution, you're going to struggle… if you're not in the circuits, then you have to really look at fine-tuning." — Karpathy, Sequoia AI Ascent 2026

This is the worldview underneath [[jaggedness-and-verifiability]]. Capability profiles aren't a measure of "intelligence" — they're a map of where a model has circuits and where it doesn't. The car-wash anecdote is the punchline: Opus 4.7 refactors a 100,000-line codebase and tells Karpathy he should walk to the car wash, in the same conversation. Not contradictory. Two different circuits.

> "[11:18] How is it possible that state-of-the-art Opus 4.7 will simultaneously refactor a 100,000-line codebase or find zero-day vulnerabilities and yet tells me to walk to this car wash? This is insane." — Karpathy

For agency work this reframes how to scope a project. The first move on any new domain is the audit — does the labs' RL mix cover this workflow, this format, this register. If yes, ship a thin wrapper. If no, the build is heavier: skill packs, fine-tuning data, judge councils. See [[workflow-audit-service]] for the productized version of that audit, and [[skills-as-primitive]] for the wrap that compensates when circuits don't exist.

The ghost framing also kills a lot of bad PM instincts. Treating the model like a junior employee with feelings produces verbose prompts that "make it feel safe." Treating it like a ghost produces prompts that activate circuits — terse, technical, in the model's vocabulary, with the right context loaded. Karpathy's interns metaphor sits inside the ghost frame: high-recall, spec-needing, no continuity between sessions. They're not learning from your tone. They're matching your context to their training. See [[agentic-engineering]] and [[software-3-0]].

## Related

- [[software-3-0]]
- [[jaggedness-and-verifiability]]
- [[agentic-engineering]]
- [[skills-as-primitive]]
- [[workflow-audit-service]]
- [[autonomous-agent-design-principles]]
- [[karpathy-vibe-to-agentic-2026-04-29]]
