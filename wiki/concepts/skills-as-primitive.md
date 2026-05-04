---
title: "Skills as primitive"
type: concept
tags: [concept, skills, howie-liu, hyperagent, anthropic, primitive]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 15
sources: [[isenberg-howieliu-hyperagent-2026-04-29]]
---

# Skills as primitive

Howie Liu's central claim about the frontier-agent stack. The model is generally smart; the model is not domain-expert. A skill is the playbook that closes the gap. It's the unit of expertise you pin to an agent, compose with other skills, and iterate on over time.

> "[25:48] Skills are I think like the most important concept or primitive in the frontier agents world. Meaning the models are generally intelligent enough. It's like Albert Einstein who's obviously super smart in a general sense and he may not know how to solve problems in real estate, but if you gave him just the right briefing on like here's a playbook, here's a manual to learn everything you need to know to do this job in real estate, he's going to figure it out pretty well." — Howie Liu

The Einstein-needs-the-playbook framing is the right intuition. Pretraining gives you the brain. Skills give you the briefing. Skills are composable (stack them on one agent), pinnable (locked into the agent's context), evergreen (tuned over time, not built once and abandoned), and interactive (you watch the output, adjust the skill, re-run).

> "[36:04] These skills should be evergreen, right? Like it's not like you do one and done. The whole point is like every time I use a skill… you can interactively tweak and improve the skills and performance of the agent over time." — Howie Liu

The live demo on the pod: Howie spins up a "Greg Isenberg contrarian AI" skill — the agent reads Greg's actual posts, distills voice rules, pins them to a content agent. The output rules ("Greg's voice is a smart friend at dinner saying the quiet part out loud, not a corporate communicator." "Hook in the first 7 words." "Never end with 'what do you think.'") are the skill. The agent that uses the skill is generic; the skill makes it specific.

> "[35:28] Greg's voice is a smart friend at dinner saying the quiet part out loud. Not a corporate communicator." — Howie Liu, demo output

This is the same primitive Anthropic ships under the same name in Claude Code's `~/.claude/skills/` system, which Finn already uses (see the skills list in this vault — `pier-and-point-post`, `finn-life-os-daily`, `finn-wiki-ingest`, etc.). The wiki you're reading is held together by skills. The pattern works because the model didn't change; the briefing did.

For studio work, skills are the deliverable. A "Skill Pack Build" is the productized form: the studio audits the client's workflows ([[workflow-audit-service]]), identifies which ones are skill-shaped, writes and tunes the skills, and pins them to the client's agent fleet. See [[fleet-of-agents]] for the topology, [[rubrics-and-llm-as-judge]] for the eval layer that keeps skills honest, and [[agentic-services-positioning]] for how it sells.

Skills are also where the agent's [[jaggedness-and-verifiability|jaggedness]] gets compensated. A circuit the lab didn't cover gets a skill that hands the model a path through it. That's why skills aren't optional plumbing — they're the operator's primary lever once the model is fixed.

## Related

- [[agentic-engineering]]
- [[rubrics-and-llm-as-judge]]
- [[fleet-of-agents]]
- [[agentic-services-positioning]]
- [[jaggedness-and-verifiability]]
- [[workflow-audit-service]]
- [[living-config-files]]
- [[autonomous-agent-design-principles]]
- [[isenberg-howieliu-hyperagent-2026-04-29]]
