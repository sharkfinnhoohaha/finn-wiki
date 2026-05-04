---
title: "Dataview"
type: entity
tags: [tool, plugin, query]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[karpathy-llm-wiki-gist]]
---

# Dataview

Obsidian community plugin that lets you run SQL-like queries over the YAML frontmatter and inline metadata of your vault's markdown files. Useful once the LLM is writing structured frontmatter on every page.

## Why it matters for this pattern

The [[llm-wiki-pattern]] depends on the LLM writing consistent frontmatter. Dataview turns that consistency into queryable structure. Examples:

- List every page of type `source` sorted by date
- Show every entity tagged `aviation` with its updated-at timestamp
- Count how many wiki pages cite each source

This is how you get a dashboard view of the wiki without writing custom tooling.

## Example queries

Live table of all source pages, newest first:

````markdown
```dataview
TABLE source_author, source_date
FROM "wiki/sources"
SORT source_date DESC
```
````

List every orphan entity (no inbound links) for lint purposes:

````markdown
```dataview
LIST
FROM "wiki/entities"
WHERE length(file.inlinks) = 0
```
````

## Install

Obsidian → Settings → Community plugins → Browse → "Dataview" → Install → Enable.

## Schema implications

For Dataview to work, the schema in [[CLAUDE|CLAUDE.md]] must require consistent frontmatter. The schema in this vault does: every wiki page has `title`, `type`, `tags`, `created`, `updated`, `sources`.

## See also

- [[obsidian]]
- [[lint-workflow]] uses Dataview queries for orphan detection
