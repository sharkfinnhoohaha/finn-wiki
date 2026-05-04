---
title: "Hybrid Local LLM Workflow"
type: workflow
tags: [workflow, llm, ollama, sonnet, token-conservation, vibe-coder]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af]]
---

## TL;DR

Two terminals running side by side: **`cc-sonnet`** for planning + complex work, **`cc-local`** / **`aider-local`** for grunt work. A global `~/.claude/CLAUDE.md` instructs Sonnet to split tasks and emit a `==== LOCAL MODEL TASKS ====` block for handoff. The whole setup is a [[token-conservation-mindset|token-conservation move]].

## The two terminals

- **Terminal 1 — `cc-sonnet`** (Claude Sonnet via Claude Code)
  - Planning, synthesis, judgment, tricky debugging, anything requiring real reasoning
- **Terminal 2 — `cc-local` / `aider-local`** (local Ollama-hosted model)
  - Grunt work: file moves, mechanical refactors, structured-output generation, formatting
  - Runs on the [[hardware-setup|64GB M1 Max]]; Ollama models in use elsewhere include `mistral` and `nomic-embed-text`

Shell aliases set up for both modes (specifics in `setup_hybrid.sh`, uploaded but **not yet executed at session end**).

## Global CLAUDE.md instruction

The global `~/.claude/CLAUDE.md` is what makes the handoff automatic. It:

- Hard-codes Finn's stack so Sonnet doesn't need re-priming
- Names him a **"vibe coder"** (term repeated back from prior Claude response)
- Names the [[hardware-setup|64GB M1 Max]] machine
- Lists what the local model can handle
- Defines the handoff format: a `==== LOCAL MODEL TASKS ====` block at the end of Sonnet's response that the operator (Finn) feeds into the second terminal

## Why this exists

Direct from the CLAUDE.md global instruction:

> "Conserve tokens, assign smaller tasks to cheaper models when you can."

See [[token-conservation-mindset]] for the broader pattern — this workflow is the operationalization of that principle.

## Open thread

- `setup_hybrid.sh` was uploaded but not run; setup is unverified end-to-end. Worth a re-run session to confirm aliases and Ollama models are wired.

## Sources

- `local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af` — "Set up hybrid local LLM and Claude"
