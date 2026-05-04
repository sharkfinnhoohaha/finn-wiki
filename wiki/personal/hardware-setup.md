---
title: "Hardware Setup"
type: personal
tags: [hardware, dev-environment, m1-max, vibe-coder]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af]]
---

## TL;DR

**64GB M1 Max MacBook Pro** running **VS Code** as primary editor, with a **two-terminal hybrid LLM workflow** for token conservation (see [[hybrid-local-llm-workflow]]). Self-described "vibe coder."

## Specs

- Machine: MacBook Pro, M1 Max, **64GB RAM**
- Editor: VS Code
- DAW: Logic Pro (see [[music-production]] — ~158 `.logicx` files)

## Why 64GB matters

The hybrid local LLM workflow leans on Ollama-hosted models (`mistral`, `nomic-embed-text`) running locally. 64GB unified memory makes that practical alongside VS Code, a browser tab pile, and Logic Pro projects.

## Two-terminal workflow

See [[hybrid-local-llm-workflow]] for the full pattern. Short version:

- Terminal 1 — `cc-sonnet` (Claude Sonnet, planning + complex)
- Terminal 2 — `cc-local` or `aider-local` (grunt work)

Sonnet's global `~/.claude/CLAUDE.md` instructs it to split tasks and emit a `==== LOCAL MODEL TASKS ====` block for handoff to the local terminal.

## Wiki shortcuts in `~/.zshrc`

`~/.zshrc` also carries the "Finn-Wiki / graphify shortcuts" block — `wiki`, `wiki-ask`, `wiki-prep`, `wiki-rebuild`, `wiki-stats`, `wiki-bridges`, `wiki-abandoned`, `wiki-cross`, `wiki-stale`. These spawn Claude Code sessions against the Finn-Wiki vault for graph queries. See [[graphify]] and [[wiki-graph-querying]].

## Self-identification

> "vibe coder"

(Finn quoted this back from a prior Claude response and let it stand — the term is now load-bearing for how Sonnet primes itself in his global CLAUDE.md.)

## Hardware refresh — student pricing

Any future Mac/iPad/AppleCare purchase should run through the **Apple Education Store** while [[berklee-online|Berklee Online]] `.edu` is still valid. $100–$300 off MSRP on M-series hardware, ~20% off AppleCare+, seasonal AirPods promo (June–Sept). The **Apple Pro Apps Bundle ($200 lifetime — Logic Pro + Final Cut + 3 others)** also lives here, and is the highest-ROI single Apple education claim. See [[student-discounts]] and [[apple-pro-apps-bundle]].

## Source

- `local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af` — "Set up hybrid local LLM and Claude"
