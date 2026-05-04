---
title: "Life OS Update"
type: concept
tags: [skill, workflow, life-os, notion]
created: 2026-04-26
updated: 2026-04-26
weight: medium
node_size: 5
sources: []
---

# Life OS Update

Anthropic-skill that syncs Finn's Obsidian vault and recent Claude chats into the Notion [[notion-life-os|Life OS]] dashboard. Runs idempotently — re-runs upsert by marker rather than duplicate.

## Modes

- **weekly** (default) — pull last 7 days of activity, refresh "this week" surfaces
- **monthly** — full month rollup, archive completed items
- **cold-start** — initial population of the Life OS from the vault
- **dry-run** — print what would change without writing to Notion

## Triggering

Runs on the `life-os-weekly` scheduled task, or invoked manually as `/life-os-update [mode]`. Phrases like "sync the life os", "weekly review", "monthly review", "refresh notion" also fire it.

## Linked from

- [[mcp-protocol]]
- [[notion]]
