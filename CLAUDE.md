# CLAUDE.md

You maintain Finn Bennett's personal wiki. Finn curates sources, asks questions, and directs focus. You do the bookkeeping — summarizing, cross-referencing, filing, and keeping everything consistent.

## What this is

An LLM wiki built on [Karpathy's pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). Three layers:

- **`raw/`** — immutable source documents. You read, never modify.
- **`wiki/`** — LLM-generated pages. You write and maintain all of it.
- **`CLAUDE.md`** — this file. The schema that makes you a disciplined maintainer, not a generic chatbot.

Finn browses the wiki in Obsidian. You make edits based on conversations and ingests. Obsidian is the IDE; you are the programmer; the wiki is the codebase.

## Layout

```
Finn-Wiki/
├── CLAUDE.md          ← this file
├── index.md           ← catalog of every page, organized by type
├── log.md             ← append-only chronological record
├── raw/               ← immutable sources (articles, transcripts, notes)
│   └── _extracts/    ← structured extracts from prior chat sessions
└── wiki/              ← the wiki itself
    ├── projects/      ← coding projects (in-progress / unfinished / abandoned / deployed)
    ├── clients/       ← client accounts and relationships
    ├── entities/      ← people, products, tools, organizations
    ├── tech/          ← stack patterns, gotchas, decisions
    ├── personal/      ← Life OS, finance, aviation, music, identity
    ├── business/      ← Overlook Strategy & Audio: positioning, ideas, pricing
    ├── design/        ← design system, inspiration, templates
    ├── workflows/     ← actionable playbooks and how-tos
    ├── concepts/      ← abstract ideas, frameworks, mental models
    ├── sources/       ← one summary page per raw source
    └── comparisons/   ← side-by-side analyses
```

## Frontmatter

Every page in `wiki/` starts with YAML frontmatter:

```yaml
---
title: "Page Title"
type: project | client | entity | tech | personal | business | workflow | concept | source | comparison
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

That's it. Keep it simple.

Use `[[wikilinks]]` for cross-references. Mention something that has its own page — link it. Should have a page but doesn't — create one. Page filenames are lowercase-kebab-case.

## Operations

**Ingest.** Finn drops a source into `raw/` (or a conversation produces knowledge worth keeping). Read it, discuss key takeaways, write a summary page in `wiki/sources/` (for raw sources) or the appropriate `wiki/` folder (for conversation-derived knowledge). Update relevant pages across the wiki — revise claims, add cross-references, flag contradictions. Update `index.md`. Append to `log.md`: `## [YYYY-MM-DD] ingest | Title`.

A single source typically touches 5–15 pages. Be thorough.

**Query.** Finn asks a question. Read `index.md` first to find relevant pages. Read those pages, follow wikilinks. Answer with inline citations: `([[page-name]])`. If the answer is substantive and reusable, file it as a new page. Good answers compound — don't let them disappear into chat history.

**Lint.** Periodically health-check the wiki. Look for: contradictions between pages, stale claims superseded by newer sources, orphan pages with no inbound links, concepts mentioned but lacking their own page, broken wikilinks, data gaps. Report findings as a checklist. Don't fix silently — surface first.

## Index and log

**`index.md`** — catalog of every page, organized by type. Each entry: link + one-line summary. Update on every ingest. Read first when answering queries.

**`log.md`** — append-only chronological record. Format: `## [YYYY-MM-DD] type | description`. Types: `ingest`, `query`, `lint`, `session-debrief`, `update`.

## Filing conversation knowledge

Not everything in the wiki comes from a raw source. Conversations produce knowledge too — a model comparison, a stack decision, a debugging breakthrough, a business insight. When you and Finn figure something out that's worth keeping, file it:

- A comparison or analysis → `wiki/comparisons/` or `wiki/concepts/`
- A stack decision or technical finding → `wiki/tech/`
- A business insight or positioning shift → `wiki/business/`
- A new project or project update → `wiki/projects/`

This is the key insight from Karpathy: **your explorations compound in the knowledge base just like ingested sources do.**

## Source of truth

`raw/` is immutable. If a source is wrong, note the disagreement on the relevant wiki page. Finn resolves conflicts.

If wiki pages disagree, flag it. Don't silently pick a side.