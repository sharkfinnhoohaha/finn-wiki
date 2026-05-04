---
title: "Memex"
type: concept
tags: [history, precursor]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[karpathy-llm-wiki-gist]]
---

# Memex

A conceptual device proposed by [[vannevar-bush]] in his 1945 essay "As We May Think," published in The Atlantic. The Memex was imagined as a desk-sized machine that would store a person's books, records, and communications, with the ability to create and follow associative trails between documents. Bush saw this as the natural successor to indexed reference systems.

## The relevant ideas

Three that matter for the [[llm-wiki-pattern]]:

1. **Private and curated.** The Memex was personal. Not a published library, not a shared encyclopedia, but one person's selected and annotated corpus.
2. **Associative trails.** Bush's insight was that human thinking moves by association, not by hierarchy. The Memex's core operation was letting users build and follow links between documents.
3. **The trails are as valuable as the documents.** The connections carry meaning. A Memex with good trails is more useful than the same corpus with none.

## Why the web didn't deliver this

Bush's vision was closer to personal knowledge curation than to what the web became. The web is public and algorithmic; the Memex was private and intentional. Hyperlinks exist, but trail-building is not something the web rewards.

## What Bush couldn't solve

Maintenance. Building and keeping associative trails across a large corpus takes sustained effort. Humans abandon the habit. Bush proposed the machine but couldn't propose a maintainer.

The [[llm-wiki-pattern]] solves the maintainer problem. The LLM does the trail-building and upkeep at near-zero marginal cost. See [[llm-wiki-pattern]] → "What makes it work."

## Related

- [[vannevar-bush]]
- [[llm-wiki-pattern]]
