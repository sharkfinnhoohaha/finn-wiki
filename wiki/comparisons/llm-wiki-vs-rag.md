---
title: "LLM Wiki vs. RAG"
type: comparison
tags: [comparison, rag]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[karpathy-llm-wiki-gist]], [[nate-herk-claude-code-video]]
---

# LLM Wiki vs. RAG

Two ways to let an LLM answer questions over a corpus. They differ in when the synthesis happens.

## Side by side

| Dimension | Traditional RAG | LLM Wiki |
|---|---|---|
| When synthesis happens | At query time, per question | At ingest time, once per source |
| Primary artifact | Ephemeral: chunks + embedding + answer | Persistent: markdown wiki on disk |
| What accumulates | Nothing. Each query starts over | The wiki compounds with each source |
| Cross-document reasoning | Redone every query | Already encoded in wiki links and summaries |
| Infrastructure required | Vector DB, chunking, embedding pipeline | A folder, an LLM agent, [[obsidian|Obsidian]] optionally |
| Inspectable by humans | Not really, reasoning is internal | Yes, the wiki is plain markdown |
| Scales to | Millions of documents with proper tooling | ~100 sources / hundreds of pages without search, further with [[qmd]] |
| Per-query cost | Retrieval + generation | Generation only (context is smaller) |
| Per-ingest cost | Minimal (embed + store) | High (10 to 15 page edits per source) |
| Good for | One-shot Q&A over large corpora | Long-lived personal or team knowledge work |

## The token argument

[[nate-herk-claude-code-video]] claims a ~95% reduction in tokens versus traditional RAG. The intuition: queries read pre-organized wiki pages rather than dumping raw chunks into context.

Worth flagging: a comment thread reply in the gist argues the ~95% number is comparing "unorganized files" to "organized files" rather than RAG architecture to wiki architecture. Any structured system would show similar gains over a naive baseline. The real contribution of the LLM Wiki pattern, per this critique, is pre-compiling synthesis upfront, not chunking differently.

Treat the exact number as directional. The qualitative point stands: at query time, wikis are cheaper because the work has already been done.

## Where each wins

**RAG wins when:**
- Corpus is very large (millions of docs)
- Queries are truly varied and one-off
- You don't care about cross-document synthesis
- You need to answer based on raw text exactness

**LLM Wiki wins when:**
- Corpus is moderate (dozens to hundreds of sources)
- You'll revisit the same topics over months
- Cross-source synthesis matters
- You want to inspect and edit the knowledge directly
- You want an artifact that exists outside the agent

## They're not mutually exclusive

Nothing stops you from building both. A wiki for synthesis plus RAG over the raw corpus for exactness. Pick whichever the current query wants. The gist's comment thread has multiple practitioners reporting this hybrid approach.

## Related

- [[compiled-knowledge]]
- [[index-file-navigation]]
- [[llm-wiki-pattern]]
