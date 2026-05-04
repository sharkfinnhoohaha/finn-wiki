---
title: "Compiled knowledge"
type: concept
tags: [theory, insight]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]]
---

# Compiled knowledge

The load-bearing idea behind the [[llm-wiki-pattern]]. Knowledge is compiled once, at ingest time, and kept current. Queries read from the compiled artifact rather than re-deriving everything from raw sources on each request.

## The programming analogy

Think of raw sources as source code and the wiki as a compiled binary. You can interpret source on every run, or you can compile once and execute fast. RAG does the former. The LLM Wiki does the latter.

- **Raw sources** = .c files
- **Ingest** = compilation
- **Wiki pages** = .o / binaries
- **Query** = execution against the compiled artifact

The metaphor breaks in one useful way: the wiki is still human-readable. You can open it and see the reasoning. A compiled binary hides its structure; the wiki shows it.

## What gets compiled in

When a source is ingested, the LLM does the work that RAG defers:

- Identifies entities and creates or updates their pages
- Extracts claims and integrates them into concept pages
- Flags contradictions with existing content inline
- Builds cross-references via wikilinks
- Updates summaries to reflect the new material

By the time you query, this work is done. You're reading synthesis, not triggering it.

## Why this helps at query time

Three consequences:

1. **Cheaper queries.** The LLM reads pre-organized pages rather than raw chunks. Fewer tokens in context. [[nate-herk-claude-code-video]] claims ~95% reduction, though the exact number is contested.
2. **Better synthesis.** Cross-document reasoning has already happened. The query LLM doesn't need to rediscover that three sources contradict each other; the wiki already noted it.
3. **Inspectable.** You can open the wiki and see what was synthesized. RAG's reasoning is ephemeral.

## What this costs

Ingest is expensive. A single source touches 10 to 15 pages. At scale that's real tokens and real time. [[nate-herk-claude-code-video]] reports a single article producing 23 pages in ~10 minutes.

The bet is that this front-loaded cost pays back across many future queries. For one-off Q&A, RAG is still fine. For a knowledge base you'll interrogate for months, the compiled approach wins.

## Related

- [[llm-wiki-pattern]]
- [[llm-wiki-vs-rag]]
- [[ingest-operation]]
