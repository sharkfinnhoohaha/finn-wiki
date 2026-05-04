---
title: "OpenClaw Architecture"
type: tech
tags: [tech, architecture, agents, openclaw, pattern]
created: 2026-04-25
updated: 2026-04-25
weight: medium
node_size: 5
sources: [[openclaw-deep-dive-krentsel]]
---

# OpenClaw Architecture

The three-layer architecture of [[openclaw]], as detailed by [[alex-krentsel]] in the [[openclaw-deep-dive-krentsel|Apr 2026 deep dive]]. This page covers the technical decomposition; for the design philosophy see [[autonomous-agent-design-principles]].

## Layer 1: Connectors

Interface between the agent and human communication channels. Each connector bridges a single platform:

- WhatsApp, iMessage (phone-based)
- Gmail (email-based)
- Discord (chat-based)

Two deployment models:

1. **Personal:** connect your actual phone number / email account. The agent has full context about your life (sees all messages, can reply as you). Higher capability, higher risk.
2. **Dedicated:** separate number / email / Discord bot. The agent operates as a visible assistant, not impersonating you. Safer, but loses ambient context.

Connectors are "often hacky," per Krentsel, because they reverse-engineer interfaces designed for humans. This is a pragmatic choice: the platforms don't offer agent-friendly APIs, so you scrape what works and move on.

## Layer 2: Gateway Controller

The brain of the system. Routes messages, manages state, enforces permissions.

### Components

- **Session Manager:** creates, tracks, and sandboxes parallel agent sessions
- **Session DB:** persistent storage for session state
- **Memory Management + Memory Plugin:** long-term memory across sessions
- **Configuration:** reads [[living-config-files]] (`USER.md`, `SOUL.md`, `AGENTS.md`, `TOOLS.md`, `BOOTSTRAP.md`)
- **Cron Manager:** time-based job scheduling

### Special sessions

- **Main session:** admin-level permissions, handles direct user commands
- **Heartbeat session:** auto-fires every N minutes. The agent receives `HEARTBEAT.md` context and decides whether anything needs attention. This is the mechanism that makes the agent autonomous rather than reactive.

### Sessions-as-processes model

Sessions behave like Unix processes: parallel execution, isolated permissions, inter-process communication, sub-agent spawning. A research session can't send emails; an email session can't modify code. The gateway controller enforces these boundaries.

## Layer 3: Agent Runtime

The LLM execution layer. Responsibilities:

- Constructing context for each LLM call (the "loopiness" from [[loopiness-framework]])
- Managing tool discovery and execution
- Provider selection (OpenClaw supports pluggable LLM providers)

## Comparison to Finn's stack

| OpenClaw | Finn's Cowork + Claude Code |
|---|---|
| Connectors (WhatsApp, Gmail, Discord) | MCP servers (Notion, Vercel, Sanity, Gmail, etc.) |
| Gateway Controller | Cowork session manager (partial) |
| Heartbeat session | Scheduled tasks (similar, less continuous) |
| `SOUL.md` / `USER.md` / `AGENTS.md` | `CLAUDE.md` (single file, covers all) |
| Session DB | No persistent cross-session state (wiki compensates) |
| Agent Runtime | Claude Sonnet/Opus via Anthropic API |
| Pluggable LLM provider | Locked to Anthropic models |

The main architectural gap: Finn doesn't have true inter-session communication or the heartbeat pattern for continuous autonomous operation. The wiki (`CLAUDE.md` + vault) partially compensates for the lack of a session DB.

## Related

- [[openclaw]]
- [[autonomous-agent-design-principles]]
- [[living-config-files]]
- [[discord-hub-pattern]]
- [[loopiness-framework]]
- [[cowork-sandbox-limits]]
