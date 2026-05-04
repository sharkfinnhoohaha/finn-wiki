---
title: "Claude Code"
type: entity
tags: [tool, agent, anthropic, phase-3]
created: 2026-04-24
updated: 2026-04-25
weight: high
node_size: 15
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]], [[notebooklm-mastering-agentic-workflows]], [[deep-research-strategic-arbitrage]], [[openclaw-deep-dive-krentsel]], [[isenberg-future-of-saas-30-step]]
---

# Claude Code

Anthropic's terminal-based coding agent. Reads and writes files in the working directory, executes shell commands, follows instructions from a `CLAUDE.md` file in the project root.

## Why it's the canonical wiki maintainer

Three properties that make it fit:

1. **Filesystem-native.** It operates on markdown files directly. No API between the agent and the vault.
2. **Picks up `CLAUDE.md` automatically.** The schema file is read on every session without any extra setup. This is exactly what the [[three-layer-architecture]] calls for.
3. **Tool-calling and bash.** Can grep the wiki, diff before and after changes, run lint scripts. The maintenance operations ([[ingest-operation]], [[query-operation]], [[lint-operation]]) all fit its capability surface.

## The typical loop

```
cd llm-wiki
claude
> ingest raw/new-article.md
```

Claude Code reads `CLAUDE.md`, follows the ingest workflow, updates files, and reports back what it did. You review the diffs in Obsidian or with git.

## Alternatives worth knowing

The pattern is agent-agnostic. The gist explicitly names:
- [[claude-code|Claude Code]] (Anthropic)
- OpenAI Codex, which reads `AGENTS.md` instead of `CLAUDE.md`
- OpenCode / Pi and similar open alternatives

The schema file convention differs by agent, but the pattern survives.

## Other use cases beyond wiki maintenance

The 2026 NotebookLM ingest surfaced Claude Code as a Phase 3 agent ([[phase-3-agents]]) — substrate not only for wiki work but for autonomous marketing engines ([[wat-framework-marketing]]) and productized AI services ([[ai-agency-niches]], [[claude-max-arbitrage]]). Same agent, multiple deployment targets.

Open-source alternative tracked: [[openclaw]].

## Position in the Loopiness Framework

[[alex-krentsel]]'s [[loopiness-framework]] classifies Claude Code as a Phase 3 "scoped" agent (tool-calling loops with fixed toolsets), one tier below [[openclaw]]'s Phase 4 "autonomous" classification. The key difference: Claude Code operates on-demand within a session; it doesn't run continuously, discover tools dynamically, or self-schedule via heartbeat/cron patterns. Cowork's Dispatch mode and scheduled tasks narrow this gap but don't close it entirely. See [[openclaw-architecture]] for the full comparison table.

The [[living-config-files]] pattern from OpenClaw maps cleanly to `CLAUDE.md`: Finn's single file covers what OpenClaw splits across `USER.md`, `SOUL.md`, `AGENTS.md`, `TOOLS.md`, and `BOOTSTRAP.md`.

## Mentioned alongside Manus and ChatGPT in Isenberg's playbook

The [[isenberg-future-of-saas-30-step]] episode names Claude Code as one of three interchangeable agentic tools (alongside [[manus|Manus]] and ChatGPT) for both workflow extraction (Step 2) and content automation (Step 6). Isenberg's framing treats tool choice as secondary to the agent-orchestration habit — a useful sanity check against over-investing in any single platform.

## See also

- [[obsidian]]
- [[ingest-workflow]]
- [[setup-obsidian-vault]]
- [[phase-3-agents]]
- [[mcp-protocol]]
- [[wat-framework-marketing]]
- [[claude-max-arbitrage]]
- [[manus]]
- [[agent-native-saas]]
