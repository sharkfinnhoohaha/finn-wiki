---
title: "qmd"
type: entity
tags: [tool, search, cli]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[karpathy-llm-wiki-gist]]
---

# qmd

Local search engine for markdown files with hybrid BM25 + vector search and LLM re-ranking, all on-device. Ships as a CLI and an MCP server. GitHub: github.com/tobi/qmd.

## Why it shows up here

[[karpathy-llm-wiki-gist|The gist]] names qmd as the recommended escape hatch for when [[index-file-navigation|`index.md`]] stops scaling. At small and moderate scale, the index is enough. As the wiki grows past what fits cleanly in a single catalog file, proper search becomes useful.

## Two ways to integrate

1. **CLI.** The LLM can shell out to `qmd search "query"` from inside a workflow. Simple, works everywhere.
2. **MCP server.** qmd exposes itself as an MCP server so agents like [[claude-code]] can use it as a native tool alongside file operations.

## When to add it

Rules of thumb, from practitioners in the gist comment thread:

- Under ~100 pages: stick with the index. qmd adds complexity you don't need.
- 100 to 300 pages: graph view and index usually still work. Add qmd only if you're noticing real friction.
- 300+ pages: qmd or equivalent starts earning its keep.

You can also build something simpler yourself. A naive search script over the vault is easy to write and may be all you need.

## See also

- [[index-file-navigation]]
- [[llm-wiki-vs-rag]]
