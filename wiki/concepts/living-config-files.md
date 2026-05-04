---
title: "Living Config Files"
type: concept
tags: [concept, agents, configuration, markdown, openclaw]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 10
sources: [[openclaw-deep-dive-krentsel]]
---

# Living Config Files

A pattern from [[openclaw]]'s architecture where agent configuration exists as plain .md files that the agent itself reads and writes. Introduced in [[alex-krentsel]]'s [[openclaw-deep-dive-krentsel|deep dive talk]].

## The config stack

| File | Purpose | Contents |
|---|---|---|
| `USER.md` | Who the human is | Name, email, timezone, hobbies, interests |
| `SOUL.md` | Agent temperament | Values, boundaries, "vibe" |
| `AGENTS.md` | Behavioral rules (long) | Security rules, when to respond, how to act human, feature explanations |
| `TOOLS.md` | Tooling preferences | Language prefs, dev conventions, "always do X" rules |
| `BOOTSTRAP.md` | First-run setup | Conversational onboarding prompt, self-deletes after completion |
| `HEARTBEAT.md` | Periodic self-check context | Included in heartbeat session messages every N minutes |

All files are "living docs" managed and updated by OpenClaw itself. The agent doesn't just read config, it evolves config based on interactions.

## The bootstrap sequence

BOOTSTRAP.md is the most novel piece. On first run, the agent "wakes up" with no memory and runs a conversational onboarding:

1. Introduces itself: "Hey. I just came online. Who am I? Who are you?"
2. Discovers through conversation: its name, its nature, its vibe, its signature emoji
3. Writes findings to IDENTITY.md, USER.md, SOUL.md
4. Deletes BOOTSTRAP.md: "You don't need a bootstrap script anymore, you're you now."

This is agent self-configuration through dialogue rather than manual setup.

## Connection to Finn's existing patterns

This is the same pattern Finn already uses with `CLAUDE.md` in every project and this wiki's own schema file. The difference is scope: CLAUDE.md is project-scoped instructions, while OpenClaw's config stack splits concerns across identity, behavior, tools, and user context, and makes the agent responsible for maintaining all of them.

The [[llm-wiki-pattern]] is essentially a specialized application of living config files: the vault's CLAUDE.md is a living doc that Claude reads on session start and updates when conventions change.

## Design implications

1. **Plain text is the universal interface.** No YAML schemas, no JSON configs, no admin panels. Markdown that both humans and agents can read/write.
2. **Self-modifying config is a feature.** The agent learning your preferences and writing them down is more durable than in-context learning that vanishes between sessions.
3. **Separation of concerns matters.** Splitting "who am I" (SOUL.md) from "how do I use tools" (TOOLS.md) from "who is my human" (USER.md) keeps each file focused and reduces the blast radius of a bad edit.

## Related

- [[openclaw]]
- [[llm-wiki-pattern]]
- [[three-layer-architecture]]
- [[phase-3-agents]]
- [[loopiness-framework]]
