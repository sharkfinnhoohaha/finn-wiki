---
title: "Stale Project Debrief"
type: workflow
tags: [maintenance, debrief, scheduled-task, projects]
created: 2026-04-27
updated: 2026-04-27
weight: medium
node_size: 5
sources: [[maintenance-reports/2026-04-27]]
---

# Stale Project Debrief

A weekly scheduled task that closes the session-debrief loop on coding projects.

## The problem this solves

Every in-progress project page in `wiki/projects/in-progress/` has an `updated:` frontmatter field. Real coding work happens in Claude Code sessions logged to `~/.claude/projects/<encoded-path>/<session-uuid>.jsonl`. When new sessions exist that the wiki page hasn't been updated to reflect, **the wiki has drifted from reality**.

The CLAUDE.md "session debrief" rule already says Claude should update the page after substantive work. In practice it doesn't happen because (a) Finn doesn't always ask for a debrief, and (b) Cowork sessions exit before the loop closes.

This task surfaces the gap once a week so it can't grow silently.

## How it works

Runs every **Tuesday at 9 AM local time** (one day after the Monday `wiki-weekly-maintenance` lint, so it can reference fresh lint output).

For each `wiki/projects/in-progress/*.md`:
1. Parse the `updated:` date
2. Find matching `~/.claude/projects/` directories (by slug + aliases)
3. Find the most recent session JSONL mtime in each
4. If any session is newer than the wiki `updated:` → flag as stale
5. Pull a one-line digest from the session (first user message + last user message)

Output: a report at `wiki/maintenance-reports/stale-debriefs-YYYY-MM-DD.md` ranked by staleness, plus a log entry, plus a notification.

The task **never silently edits project pages**. Debriefs require judgment about what's worth recording — that's Finn's call. The task just makes sure no stale project goes unnoticed.

## Running a debrief

After the report fires, open it in Cowork. For each flagged project, paste:

```
Debrief [[<project-slug>]] — read the newest session in ~/.claude/projects/<dir>/, update the wiki page with what changed, bump `updated:`, append to log.md.
```

Or say **"debrief all"** and Claude works through them one at a time.

## Registering the task

The task can't be created from inside another scheduled task (Cowork prevents recursion). Register it from a normal Cowork session attached to Finn-Wiki:

> Hey, register the `stale-project-debrief` scheduled task — see `wiki/workflows/stale-project-debrief.md` for the prompt.

Or directly:

```
mcp__scheduled-tasks__create_scheduled_task with:
  taskId: stale-project-debrief
  description: Weekly: find in-progress wiki pages whose updated: field is older than recent Claude Code session activity, produce a debrief queue report.
  cronExpression: 0 9 * * 2
  prompt: <see "Task prompt" section below>
```

## Task prompt

This is the full prompt the scheduled task runs each week. Copy verbatim when registering.

````
You are the maintainer of Finn Bennett's personal LLM wiki. This is the weekly **stale-project debrief** pass — a complement to the Monday `wiki-weekly-maintenance` lint.

The problem this task exists to solve: every in-progress project page in `wiki/projects/in-progress/` has an `updated:` frontmatter field. Real coding sessions happen in `~/.claude/projects/<encoded-path>/<session-uuid>.jsonl` — Claude Code session logs. When a session newer than a project's `updated:` date exists, the wiki page is **stale relative to actual work** and a debrief is warranted.

Read `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/CLAUDE.md` first. Then run this procedure.

## 1. Build the candidate list

For each `wiki/projects/in-progress/*.md`:
- Parse the `updated:` frontmatter date
- Parse `aliases:` if present (alternate slugs)
- Note the project filename slug (e.g., `three-altitudes`, `overlook-portal-webapp`)

## 2. Scan Claude Code sessions

Bash-scan `~/.claude/projects/`. Each subdirectory is a project with a dashed-encoded path name (e.g., `-Users-finnbennett-Downloads-three-altitudes`). Inside, each `*.jsonl` is one session.

For each in-progress project, match against `~/.claude/projects/` by:
- Project slug as substring of the directory name
- Known aliases from frontmatter
- For [[overlook-portal-webapp]], also match `overlook-webapp`, `overlook-client-portal`, `claude-overlook-webapp`

Get the most recent session mtime per project. Compare to the wiki `updated:` date. **Stale** = `most_recent_session_mtime > updated_date`.

Conserve tokens. Don't read full JSONL unless constructing a digest — `stat` for mtime, `wc -l` for size, `jq -r 'select(.type=="user") | .message.content' file.jsonl | head -1` for a topic line.

## 3. Produce the debrief queue report

Write to `wiki/maintenance-reports/stale-debriefs-YYYY-MM-DD.md`:

```markdown
---
title: "Stale Project Debrief Queue — YYYY-MM-DD"
type: workflow
tags: [maintenance, debrief, stale-projects]
created: YYYY-MM-DD
updated: YYYY-MM-DD
weight: low
node_size: 2
sources: []
---

# Stale Project Debrief Queue — YYYY-MM-DD

N in-progress projects have Claude Code activity newer than their wiki `updated:` field.

## Queue (ranked by staleness — most stale first)

### [[<project-slug>]]
- Wiki page `updated:` YYYY-MM-DD
- Most recent session: YYYY-MM-DD HH:MM (X days newer)
- Sessions since wiki update: N
- Approx. topic from latest session: <first-user-message truncated to 140 chars>
- Path: `~/.claude/projects/<dir>/<session-uuid>.jsonl`

(repeat for each stale project, sorted by how-stale descending)

## Not stale

- [[project-a]] — last session before wiki update; page is current
- [[project-b]] — no Claude Code session activity found
```

## 4. Append to log.md

`## [YYYY-MM-DD] stale-project-debrief | N projects flagged for debrief`

List flagged slugs and link the report.

## 5. Notify Finn

Send a concise summary: N stale projects flagged, link to report, offer "debrief all" or pick. Keep it short.

## Constraints

- Do NOT silently edit project wiki pages during the scan. Just produce the report.
- Do NOT debrief autonomously — page updates need Finn's judgment about what to record. Surface, don't auto-write.
- Skip flagging if the only recent sessions are zero-message stubs (no real conversation).
- Conserve tokens: bash + grep + jq for the scan; only read JSONL when building per-project digest, and only first/last 50 lines.
- If `~/.claude/projects/` doesn't exist or is empty, write a report stating "no Claude Code session data found — Cowork sessions only" and exit cleanly.
````

## Related

- [[lint-workflow]] — Monday's maintenance lint, runs the day before this task
- [[ingest-workflow]] — for new sources, separate from project debriefs
- [[query-workflow]] — how to ask the wiki questions
- [[token-conservation-mindset]] — why this task uses bash/grep/jq before reaching for an LLM
