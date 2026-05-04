---
title: "Living Config Files"
type: tech
tags: [tech, pattern, agents, configuration, openclaw]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[openclaw-deep-dive-krentsel]]
---

# Living Config Files

A pattern from [[openclaw]] where agent behavior is driven by `.md` files that the agent itself can read, update, and evolve. Introduced by [[alex-krentsel]] in the [[openclaw-deep-dive-krentsel|OpenClaw deep dive]].

## The five config files

| File | Purpose |
|---|---|
| `USER.md` | Identity: name, email, timezone, hobbies, interests |
| `SOUL.md` | Temperament: values, boundaries, "vibe" — what kind of personality the agent has |
| `AGENTS.md` | Behavior rules: security policies, when to respond vs stay quiet, how to act human, feature documentation |
| `TOOLS.md` | Tooling preferences: language choices, dev environment quirks, library preferences |
| `BOOTSTRAP.md` | First-run prompt: the agent "wakes up" and figures out who it is through an initial conversation |

The key design choice: these aren't static YAML configs or environment variables. They're markdown files written in natural language that the agent parses on every session. And because they're markdown, the agent can modify them as it learns more about the user.

## Self-managed configuration

The "living" part: the agent updates its own config files over time. After a few conversations, `USER.md` might grow to include preferences the user never explicitly set, just things the agent inferred. `TOOLS.md` might record that "this user hates semicolons in JS" after seeing enough code edits.

This creates a positive feedback loop: better config → better responses → user shares more context → config improves further.

## How this maps to Finn's setup

Finn's `CLAUDE.md` is a single-file version of the same pattern. It combines what OpenClaw splits across five files:

| OpenClaw | Finn's `CLAUDE.md` |
|---|---|
| `USER.md` | "Who this wiki is for" section |
| `SOUL.md` | "Tone and style" section |
| `AGENTS.md` | "Workflows" section (ingest, query, lint) |
| `TOOLS.md` | "Finn's stack and conventions" section |
| `BOOTSTRAP.md` | No equivalent (Claude Code reads CLAUDE.md automatically) |

The single-file approach works for Finn's scale. If he ever wanted to split it, the OpenClaw decomposition is a clean template.

## What Finn could adopt

The most interesting piece Finn doesn't have: `BOOTSTRAP.md`. A conversational first-run flow where a new agent session introduces itself and discovers what it needs to know. Currently, Finn's sessions rely on `CLAUDE.md` being comprehensive enough to prime any new session. A bootstrap flow could fill gaps dynamically.

The `SOUL.md` concept is also worth noting for client work. If Finn builds agent-powered tools for [[overlook-strategy]] clients, each client could have a `SOUL.md` that defines the agent's tone and boundaries for that brand.

## Related

- [[openclaw-architecture]]
- [[autonomous-agent-design-principles]]
- [[claude-code]]
- [[llm-wiki-pattern]]
- [[three-layer-architecture]]
