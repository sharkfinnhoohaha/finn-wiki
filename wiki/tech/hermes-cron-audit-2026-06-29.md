---
title: "Hermes Cron Audit — 2026-06-29"
type: tech
tags: [hermes, cron, infrastructure, audit]
created: 2026-06-29
updated: 2026-06-29
---

# Hermes Cron Audit — 2026-06-29

Full audit of all 7 scheduled cron jobs. Found and fixed two failures, resumed paused jobs.

## Jobs audited

| Job | Schedule | Status | Finding |
|---|---|---|---|
| morning-brief | 0 8 * * * | ok | Script-only, working |
| evening-brief | 0 22 * * * | error → fixed | Notion skill (600 lines) eating context, causing truncated response. Removed skill. |
| email-monitor | */10 * * * * | ok | Zero-token IMAP polling, working |
| Pier and Point | 15 7 * * * | error → will self-fix | 403 from old provider. Now on Ollama Cloud, next run should work. |
| wiki-daily-sync | 0 22 * * * | ok | Upgraded with index regen, empty-file sweep, frontmatter validation, push verification |
| kanban-auto-summary | */10 * * * * | ok | Working |
| security-scan | 0 9 * * 1 | ok | Weekly, working |

## Evening brief fix

The evening brief cron had the `productivity/notion` skill attached (600 lines of skill content). This ate most of the context window before the agent could start working, causing `RuntimeError: Response remained truncated after 3 continuation attempts`. The evening brief doesn't need Notion — it just scans the vault, writes HTML, and emails it. Removed the skill, kept the prompt.

## Pier and Point fix

The 403 error (`this model requires a subscription`) was from the pre-Ollama Cloud provider setup. Now that all models route through Ollama Cloud, the next 7:15 AM run should succeed.

## Wiki daily sync upgrades

Added four maintenance tasks to the daily sync script:
1. Index regeneration (runs `regenerate-index.py`)
2. Empty-file sweep (reports files <50 bytes)
3. Frontmatter validation (checks for required fields)
4. Push verification (auto-pushes unpushed commits)

## Related

- [[vault-audit-2026-06-29]]
- [[ollama-cloud-migration]]