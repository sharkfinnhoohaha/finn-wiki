---
title: "Autonomous Agent Design Principles"
type: concept
tags: [concept, agents, architecture, design-principles, openclaw]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 15
sources: [[openclaw-deep-dive-krentsel]]
---

# Autonomous Agent Design Principles

Design principles for autonomous systems extracted from [[alex-krentsel]]'s [[openclaw-deep-dive-krentsel|OpenClaw deep dive]] (Apr 2026). These aren't OpenClaw-specific; they're general principles for any Phase 4 agent system ([[loopiness-framework]]).

## 1. Close the control loop

The agent must be able to act without being prompted. This means:

- **Heartbeat sessions** that fire on a schedule (OpenClaw's `HEARTBEAT.md` pattern: the agent gets a context dump every N minutes and decides whether to act)
- **Cron jobs** for time-based scheduling (daily research, weekly reports)
- **Sub-agent spawning** so the main agent can delegate without blocking

Without a closed control loop, you have an assistant, not an autonomous agent. The distinction is: does it wait for you, or does it work while you sleep?

## 2. Sessions as processes

Treat agent sessions like OS processes:

- Run in parallel with separate permissions and sandboxing
- Inter-process communication between sessions
- Two special system sessions: "main" (admin-level permissions) and "heartbeat" (scheduled context injection)
- Session DB for persistence and state tracking

This is the same mental model as Unix process management, applied to LLM agent sessions. It gives you isolation (a research session can't accidentally send an email) and concurrency (multiple tasks in flight without context collision).

## 3. Configuration as living documents

Agent behavior should be driven by `.md` files that the agent itself can read, modify, and evolve. See [[living-config-files]] for the full pattern. The key insight: configuration isn't static, it's a conversation between the user and the agent that improves over time.

## 4. Flexibility over polish

Two design goals from the talk:

- **Autonomy:** navigating ambiguity without human intervention
- **Flexibility/Extensibility:** ease of adding new communication interfaces and tools

Krentsel's observation that connectors are "often hacky — reverse-engineering human-oriented interfaces" is pragmatic. The connector layer is inherently messy because it bridges between structured agent internals and the unstructured human world. Accept that and optimize for ease of adding new connectors rather than making existing ones perfect.

## 5. "Code quality is dead"

The claim: design abstractions matter more than implementation quality. In a world where LLMs write the code, the human's job is to choose the right abstractions (three-layer architecture, sessions-as-processes, living config) and let the agent handle implementation details.

This aligns with [[vibe-coding]] and is relevant to how Finn approaches [[overlook-strategy]]: the value is in architectural decisions and design taste, not lines of code.

## How these apply to Finn's setup

Finn's current Cowork + [[claude-code]] setup already implements several of these:

- `CLAUDE.md` in every project root = living config (analogous to OpenClaw's `AGENTS.md` + `TOOLS.md`)
- MCP servers = connector layer (Notion, Vercel, Sanity, Gmail, etc.)
- Cowork sessions = partial session model (though without inter-session communication or heartbeat)
- Scheduled tasks = cron equivalent

Gaps worth considering: Finn doesn't have a heartbeat pattern (periodic context injection without prompting) or sub-agent spawning across sessions. These are the features that would make the setup truly autonomous rather than on-demand.

## Related

- [[loopiness-framework]]
- [[openclaw-architecture]]
- [[living-config-files]]
- [[discord-hub-pattern]]
- [[phase-3-agents]]
- [[vibe-coding]]
- [[claude-code]]
