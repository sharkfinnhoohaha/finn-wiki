---
title: "Finn Wiki Ingest"
type: concept
tags: [skill, workflow, ingest, llm-wiki]
created: 2026-04-26
updated: 2026-04-26
weight: high
node_size: 10
sources: []
---

# Finn Wiki Ingest

Anthropic-skill that ingests new sources into Finn-Wiki — files, transcripts, articles, notebooks, design bundles, anything dropped into the vault for processing. The implementation of the [[ingest-operation]] for this specific vault.

## What it does

1. Reads the source end-to-end
2. Summarizes the key points back to Finn for direction
3. Writes a summary page in `wiki/sources/`
4. Walks the existing wiki and updates every page the source touches
5. Creates new pages (project / client / entity / tech / personal / business / workflow / concept / source / comparison) for substantive new things
6. Updates `index.md`
7. Appends a `log.md` entry

A single ingest typically touches 5–15 pages. The dual-filing rule applies: career- or business-relevant content gets surfaced into the appropriate Finn-OS aggregator (`backlog.md`, `now.md`, `opportunities.md`).

## Triggering

Fires on phrases like "add this to my wiki", "ingest this source", "where does this go", or any time Finn drops a document, zip, transcript, or markdown file in a Cowork session attached to the vault.

## Related

- [[ingest-operation]] — the abstract pattern this implements
- [[llm-wiki-pattern]] — overall vault pattern
- The `obsidian-vault-organization` skill — folder conventions used during filing (see [[CLAUDE]] for the canonical schema)

## Linked from

- [[notebooklm]]
- [[../../Finn-OS/README]]
