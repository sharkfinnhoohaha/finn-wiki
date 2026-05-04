---
title: "Karpathy LLM Wiki gist"
type: source
tags: [source, canonical, pattern]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
source_url: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
source_author: "[[andrej-karpathy]]"
source_date: 2026-04-04
---

# Karpathy LLM Wiki gist

The canonical reference for the [[llm-wiki-pattern]]. A short markdown essay by [[andrej-karpathy]] describing an alternative to RAG: instead of retrieving from raw documents at query time, have the LLM incrementally build and maintain a persistent wiki that sits between the human and the sources.

## TL;DR

The wiki compounds. Every new source updates existing pages, flags contradictions, strengthens the synthesis. The LLM does all the writing and bookkeeping; the human curates sources and asks questions. At moderate scale (~100 sources), an `index.md` file is enough for navigation, no vector DB required.

## Key contributions

- Names the pattern and frames it against RAG. See [[llm-wiki-vs-rag]].
- Defines the [[three-layer-architecture]]: raw sources, wiki, schema.
- Specifies three operations: [[ingest-operation]], [[query-operation]], [[lint-operation]].
- Introduces [[index-file-navigation]] as a scale trick that avoids embedding infrastructure.
- Connects the idea back to Vannevar Bush's [[memex]] (1945), with the LLM solving the maintenance-burden problem Bush couldn't.

## What the gist deliberately leaves open

Directory structure, page formats, YAML conventions, tooling choices. Karpathy says the gist communicates the idea; the LLM instantiates the rest in collaboration with the user. See [[setup-obsidian-vault]] for how this vault operationalized it.

## Criticisms worth tracking

The gist's comment thread includes pushback worth noting on future wiki pages:
- Zettelkasten advocates argue for immutable atomic notes over mutable wiki pages (different failure modes).
- Concerns about provenance: LLM-generated prose can drift from source truth if corrections aren't enforced at ingest.
- At ~150 pages, at least one implementer reports the graph view replaces `index.md` as primary navigation.

These aren't refutations, but they're live design decisions. File under "lint targets."

## Related

- [[llm-wiki-pattern]]
- [[three-layer-architecture]]
- [[nate-herk-claude-code-video]] for a concrete implementation walkthrough
