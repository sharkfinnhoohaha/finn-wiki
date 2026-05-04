---
title: "Hybrid Local LLM + Sonnet Workflow"
type: project
status: active
tags: [tooling, workflow, llm, claude-code, local-llm, cost-optimization]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [[local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af]]

# --- life-os-daily contract ---
revenue_type: non-revenue
revenue_score: 1
effort_score: 2
roi_score: 0
icon: "·"
area: none
last_touched: 2026-04-24
next_action: "Run setup_hybrid.sh and verify aliases are live in Finn's shell"
blocker: ""
---

## Next Action

Run `setup_hybrid.sh` from local terminal and verify the `cc-sonnet` / `cc-local` aliases are live in Finn's shell. Setup was never confirmed.

## Blockers

- `setup_hybrid.sh` was uploaded but never executed in the captured session — setup is unverified.

## TL;DR

Personal dev-tooling project: route grunt work to a local LLM, keep Claude Sonnet for planning and complex synthesis. Two parallel terminals — `cc-sonnet` for planning, `cc-local` / `aider-local` for the grunt. A `setup_hybrid.sh` script was uploaded but never executed in the captured session — setup is unverified.

> Self-described "vibe coder" on a 64GB M1 Max — wants Claude to know his stack without re-priming every session.

## Architecture

### Two terminals

| Terminal | Model | Use |
|----------|-------|-----|
| `cc-sonnet` | Claude Sonnet (or Opus for big tasks) | Planning, architecture, complex debugging |
| `cc-local` / `aider-local` | Local LLM via [[aider]] / Ollama | Grunt work — file moves, parsing, formatting, simple edits |

Shell aliases for both modes — `setup_hybrid.sh` was meant to set these up.

### Handoff format

`~/.claude/CLAUDE.md` (global skill file) — Sonnet auto-reads every session. Instructs Sonnet to split tasks and emit a handoff block:

```
==== LOCAL MODEL TASKS ====
<grunt work spec for local model>
```

Memory note included so Sonnet remembers the workflow across sessions.

## Hard-coded knowledge in `~/.claude/CLAUDE.md`

- Finn's stack: see [[finn-stack]]
- Self-description: "vibe coder"
- Hardware: 64GB M1 Max
- What local model can handle (vs what Sonnet should keep)
- Task handoff format

## Cost philosophy

Finn's global rule: **"Conserve tokens, assign smaller tasks to cheaper models when you can."**

Same philosophy shows up across his work:
- [[notion-life-os]] — uses Gemini for CSV generation, only Claude for synthesis
- [[file-organization-pass]] — bash for inventory, LLM only for judgment
- [[overlook-portal-webapp]] — repeatedly asks for "a prompt to give to Codex/Claude Code" rather than burning Claude credits on trial-and-error

## Files

- `setup_hybrid.sh` — uploaded, not executed (setup unverified at session end)
- `~/.claude/CLAUDE.md` — global skill file referenced in design
- (No additional file paths captured in source)

## Open threads

- Script never ran — agent only got to `Read` step before session went idle. **Setup is unverified.**
- Whether the aliases / parallel terminals actually got configured in Finn's shell
- Local model choice not pinned in this session — likely uses [[ollama]] (`mistral`) consistent with the [[overlook-portal-webapp]] AI stack

## Related

- [[hybrid-llm-workflow]] (this page)
- [[ollama]], [[aider]], [[claude-code]]
- [[finn-stack]] — what the stack is
- [[notion-life-os]], [[file-organization-pass]] — same cost-conservation pattern in other projects

## Sources

- `local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af` — Set up hybrid local LLM and Claude (batch-3 session 5)
