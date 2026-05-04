---
title: "Three-layer architecture"
type: concept
tags: [architecture, pattern]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]]
---

# Three-layer architecture

The [[llm-wiki-pattern]] separates the system into three layers with strict read/write rules. The discipline is what makes the pattern work.

## The three layers

### 1. Raw sources

Your curated collection of source documents: articles, papers, transcripts, images, data files. Lives in `raw/`.

- **Immutable.** The LLM reads from raw sources but never modifies them.
- **Source of truth.** When the wiki disagrees with a raw source, the raw source wins.
- **Archival.** If a claim in the wiki turns out wrong, you can trace it back.

### 2. The wiki

LLM-generated markdown. Summaries, entity pages, concept pages, comparisons. Lives in `wiki/`.

- **LLM-owned.** The LLM creates pages, updates them when new sources arrive, maintains cross-references, keeps everything consistent.
- **Human-read.** You browse it, follow links, check the graph, spot issues. You don't write it (much, or ever).
- **Mutable.** Pages evolve. That's the point.

### 3. The schema

A single configuration document that tells the LLM how the wiki is structured, what conventions to use, and what workflows to follow. Typically `CLAUDE.md` for [[claude-code]] or `AGENTS.md` for Codex.

- **Co-evolved.** You and the LLM refine this over time as you figure out what works for your domain.
- **The leverage point.** A good schema turns a generic chatbot into a disciplined wiki maintainer.
- **Human-maintained.** You own this file. Edit it to change behavior.

## Why the separation matters

Conflating any two layers breaks the pattern:

- **If the LLM modifies raw sources,** you lose provenance. Corrections and hallucinations become indistinguishable.
- **If the human writes the wiki,** maintenance reverts to being a human problem, and the wiki dies like every other personal wiki that came before.
- **Without the schema,** the LLM improvises, and you get drift: inconsistent page formats, orphaned pages, stale cross-references.

## In this vault

```
llm-wiki/
├── CLAUDE.md        ← schema
├── raw/             ← raw sources (immutable)
└── wiki/            ← LLM-owned, mutable
```

The schema ([[CLAUDE|CLAUDE.md]]) sets up the folder conventions, frontmatter format, workflow steps, and tone rules.

## Related

- [[llm-wiki-pattern]]
- [[ingest-operation]]
- [[query-operation]]
- [[lint-operation]]
