---
title: "LLM Wiki pattern"
type: concept
tags: [pattern, core, knowledge-management]
created: 2026-04-24
updated: 2026-04-26
weight: high
node_size: 15
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]], [[graphify-cheat-sheet]]
---

# LLM Wiki pattern

A design pattern for personal and team knowledge bases. Instead of dumping raw documents into a RAG system and retrieving chunks at query time, you have an LLM agent incrementally build and maintain a structured, interlinked wiki that sits between you and the sources. The wiki is the persistent artifact. The raw sources are the input. The LLM is the maintainer.

## Why the pattern exists

RAG rediscovers knowledge from scratch on every question. Ask something that requires synthesizing five documents, and the system re-finds and re-combines the fragments every time. Nothing accumulates. See [[llm-wiki-vs-rag]] for the full comparison.

The LLM Wiki pattern pays the synthesis cost once, at ingest, then keeps the synthesis current as new sources arrive. What you get back at query time is already organized, cross-referenced, and reasoned about.

## Core properties

- **Persistent.** The wiki is a real artifact. Version it in git. Browse it in [[obsidian]]. Share it. Diff it.
- **Compounding.** Each new source touches 10 to 15 existing pages. The wiki gets denser, not just bigger.
- **LLM-maintained, human-curated.** You pick sources and ask questions. The LLM writes and maintains everything else. See [[ingest-operation]], [[query-operation]], [[lint-operation]].
- **Structured but not rigid.** [[three-layer-architecture]]: raw, wiki, schema. Schema is configurable per domain.
- **Scales without infrastructure.** At ~100 sources and hundreds of pages, [[index-file-navigation]] is enough. No vector DB, no chunking pipeline.

## What makes it work

The bottleneck in knowledge bases is not reading or thinking, it's bookkeeping. Cross-references, contradiction flags, consistent summaries across dozens of pages. Humans abandon wikis because maintenance grows faster than value. LLMs don't get bored and can touch 15 files in one pass. See [[compiled-knowledge]] for the deeper framing.

## Implementation

- [[setup-obsidian-vault]] for the five-minute scaffold.
- [[ingest-workflow]], [[query-workflow]], [[lint-workflow]] for the three operations.
- [[claude-code]] paired with [[obsidian]] is the reference implementation, per [[nate-herk-claude-code-video]].
- This vault adds an explicit knowledge-graph overlay via [[graphify]] (MCP server `graphify-finn-wiki`, terminal aliases `wiki` / `wiki-ask` / `wiki-prep`). Ships the [[knowledge-graph-llm-wiki|InfraNodus-style overlay]] without using InfraNodus. See [[wiki-graph-querying]].

## Conceptual ancestry

Related in spirit to Vannevar Bush's 1945 [[memex]]: a privately curated knowledge store with associative trails between documents. Bush's unsolved problem was who maintains the trails. The LLM Wiki pattern answers that.

## Known limits and critiques

- At roughly 150 pages, the Obsidian graph view may replace `index.md` as the primary navigation tool. Design accordingly. (This vault now uses [[graphify]] for the structural query layer, with `index.md` still serving as the prose catalog.)
- Zettelkasten advocates argue for immutable atomic notes over mutable wiki pages. The debate is live. See [[karpathy-llm-wiki-gist]] for the thread.
- Provenance can drift if ingest doesn't enforce tight attribution. This is a real risk; [[lint-operation]] is partly there to catch it.

## Sources

- [[karpathy-llm-wiki-gist]] (canonical)
- [[nate-herk-claude-code-video]] (implementation walkthrough)
