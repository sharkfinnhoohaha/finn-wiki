---
title: "Token Conservation Mindset"
type: concept
tags: [concept, llm, cost, workflow, vibe-coder]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[local_1cfa988a-77d5-42b5-acb8-90109fcff213]], [[local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af]], [[local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]], [[local_1f40bcce-863b-4387-a4ad-ad704bcd0a73]], [[local_ac05b833-2a5a-44bd-97e8-58c840d59483]]
---

## TL;DR

A recurring preference in Finn's working style: route as much work as possible to **cheaper models**, ask for **prompts to give to Codex/Copilot/Claude Code** rather than burn Claude credits on retries. Cited in his global CLAUDE.md instruction and visible across multiple sessions.

## The instruction (verbatim from global CLAUDE.md)

> "Conserve tokens, assign smaller tasks to cheaper models when you can."

## How it shows up in practice

### 1. Prompts handed to other agents instead of Sonnet retries

When Sonnet has tried something and failed, Finn explicitly asks for a portable prompt rather than another attempt:

> "Do not explain the fixes to me, i need to just get this working. Give me a prompt i can give to codex or claude code to debug, I don't want to keep wasting claude credits having you fail at trying to fix it."
> — `local_1f40bcce-863b-4387-a4ad-ad704bcd0a73` (notices/posts 500 debug)

> "Give me prompts to give to github agent to redo the work. I'm incredibly dissapointed, you burned through two days of tokens to do this work for nothing?"
> — `local_ac05b833-2a5a-44bd-97e8-58c840d59483` (lost admin dashboard branch)

> "Do not make code changes yourself, do not overuse tokens. Assign coding tasks to cheaper models like sonnet, or give me a prompt to give to copilot."
> — `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` (Overlook portal AI features)

### 2. Cheap-model-for-structured-output pattern

> "I want to conserve tokens, I just want to be able to give Gemini a prompt to get a csv file..."
> — `local_1cfa988a-77d5-42b5-acb8-90109fcff213`

This drives the [[csv-to-notion-pipeline|CSV → Notion pipeline]]: Gemini handles structured CSV generation; Claude is reserved for synthesis on top of the loaded data.

### 3. Hybrid local LLM setup

The whole [[hybrid-local-llm-workflow|two-terminal workflow]] (`cc-sonnet` + `cc-local`) exists for this. Sonnet plans, the local model does grunt work. The handoff is a `==== LOCAL MODEL TASKS ====` block.

## How agents should behave

Direct guidance carried into the wiki's [[../../CLAUDE|CLAUDE.md]]:

- Prefer cheaper models for grunt work (parsing, formatting, file moves)
- Reserve Sonnet/Opus for synthesis, judgment, and tricky debugging
- Don't retry the same failed approach — pivot or ask
- Offer a "prompt to give to Codex/Copilot/Claude Code" rather than burning credits on trial-and-error

## Anti-pattern signal

When Finn says **"STILL FUCKING SAME ISSUE"** (`local_1f40bcce-863b-4387-a4ad-ad704bcd0a73`), it usually means a Sonnet session has already burned tokens retrying a fix that didn't land. That's the moment to pivot to a portable prompt for another agent rather than try a fourth approach.

## Sources

- `local_1cfa988a-77d5-42b5-acb8-90109fcff213` — "Build Life OS in Notion with Claude"
- `local_2c4ac600-d9bb-40c5-b01d-1f6bb81d83af` — "Set up hybrid local LLM and Claude"
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` — "Clean up repository branches and merge fixes"
- `local_1f40bcce-863b-4387-a4ad-ad704bcd0a73` — "Debug notices and posts deployment issue"
- `local_ac05b833-2a5a-44bd-97e8-58c840d59483` — "Fix git push to main branch"
