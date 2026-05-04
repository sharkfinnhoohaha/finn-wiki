---
title: "Query operation"
type: concept
tags: [operation, workflow]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]]
---

# Query operation

Asking questions against the wiki. One of three core operations alongside [[ingest-operation]] and [[lint-operation]].

## What happens

1. The LLM reads [[index-file-navigation|index.md]] to find candidate pages.
2. It reads the relevant pages, follows wikilinks as needed.
3. It synthesizes an answer with citations back to wiki pages.
4. If the answer is substantive and reusable, it asks whether to file the answer back as a new wiki page.

## Output formats

Not every query wants prose. Good output types:

- **Markdown prose** for explanations
- **Comparison tables** for side-by-side analysis, can live in `wiki/comparisons/`
- **Marp slide decks** for presentations, see [[marp]]
- **Matplotlib charts** when the question is quantitative
- **Mermaid diagrams** for system views, given you have the Mermaid plugin

## Filing answers back

This is the insight that makes the pattern compound beyond ingest. A comparison you asked for, a connection you discovered, an analysis you ran: these shouldn't disappear into chat history. File them back as wiki pages. Your explorations become part of the knowledge base.

Good candidates for filing back:
- Anything you'd want to reference again
- Anything that synthesizes across multiple existing pages
- Anything that introduces a new framing or comparison

Bad candidates:
- One-off trivia lookups
- Anything highly specific to a transient context
- Conversational clarification that doesn't hold up as a reference

## Failure modes

- **Stale answers.** If the LLM relies on cached knowledge instead of reading current wiki pages, answers drift. Schema should require the LLM to read the index first, not trust its memory.
- **Missing citations.** Without `([[page]])` references, you lose the ability to verify. Enforce in schema.
- **Over-synthesis.** LLMs sometimes write confident prose that goes beyond what the wiki supports. If a claim isn't in the wiki, the LLM should say so, or search the web, or flag a gap.

## See also

- [[query-workflow]]
- [[lint-operation]] (for catching degraded answers)
