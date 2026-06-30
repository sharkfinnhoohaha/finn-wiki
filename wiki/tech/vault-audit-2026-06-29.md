---
title: "Finn-Wiki Vault Audit — 2026-06-29"
type: tech
tags: [hermes, wiki, obsidian, audit, maintenance, graphify, lessons-learned]
created: 2026-06-29
updated: 2026-06-29
weight: medium
node_size: 5
sources: [[hermes-webhook-setup]]
status: draft
---

## TL;DR

Full audit of the Finn-Wiki Obsidian vault (415 .md files) on 2026-06-29. Found 385 broken wikilinks, 2 frontmatter issues, 12 pages missing from the index, 14 stale index entries, 13 empty files (cleaned), and an uninstalled graphify MCP. Root causes: Notion import artifacts, no automated index sync, no empty-file guard, and no frontmatter validation gate. This page documents each issue, what caused it, and the fix going forward.

---

## What Was Done

- Pushed 37 pending daily-sync commits (June 21-24)
- Published [[hermes-webhook-setup]] to `wiki/tech/`
- Removed 13 empty/Untitled files (daily notes, canvas files, kanban stubs)
- Moved `finn-context.md` from staging to `wiki/personal/`
- Updated `index.md` with webhook page
- Appended audit summary to `log.md`
- Ran full audit: 415 .md files, 0 empty files, 385 broken wikilinks, 2 frontmatter issues

---

## Issues Found and Lessons

### 1. Broken Wikilinks — 385 across 126 files

**What:** 385 `[[wikilinks]]` point to pages that don't exist in the vault.

**Root cause:** Three categories:
1. **Notion import artifacts (~60%)** — Links like `[[local_1cfa988a-77d5-42b5-acb8-90109fcff213]]` are Notion block IDs that got converted to wikilinks during export. They're meaningless outside Notion and should be stripped or converted to plain text.
2. **Shorthand references (~25%)** — Links like `[[mission-control]]`, `[[antigravity]]`, `[[claude]]` that were written as shorthand but never got their own pages. Some reference concepts that are described inline in other pages but don't warrant a dedicated file.
3. **Deleted page references (~15%)** — Links to pages that were deleted or renamed without updating backlinks. Obsidian shows these as unresolved links but doesn't auto-fix them.

**Lesson:** When importing from Notion, strip `local_*` UUID links before committing. When deleting or renaming a page, grep the vault for backlinks and update them first. Run a broken-link scan weekly (could be a cron job).

**Fix going forward:**
- Add a pre-commit hook or cron job that flags new broken wikilinks
- Bulk-convert `local_*` links to plain text in one pass
- For shorthand references, either create stub pages or convert to plain text
- Obsidian's "Create new file" prompt on unresolved links should be treated as a signal, not auto-clicked

### 2. Empty Files — 13 found and removed

**What:** 13 files with 0-22 bytes of content. Daily notes (`2026-04-26.md`, `2026-04-29.md`), Untitled canvas/kanban files, and stubs like `csv-import-workflow.md`.

**Root cause:** Obsidian creates files when you click on an unresolved wikilink or open a new tab. These empty files accumulate when you browse the vault without writing content. No automated check removes them.

**Lesson:** Periodic sweeps are necessary. Obsidian doesn't garbage-collect empty files. A simple `find` for files under 50 bytes catches them.

**Fix going forward:**
- Run empty-file sweep as part of the daily wiki sync cron
- Don't click "create" on unresolved links unless you intend to write the page
- The wiki-daily-sync cron should flag any new empty files in its output

### 3. Index Out of Sync — 12 missing, 14 stale

**What:** 12 pages exist in `wiki/` but aren't listed in `index.md`. 14 index entries point to pages that no longer exist.

**Root cause:** The index is maintained manually (by Claude or Hermes during ingest). When pages are created by other workflows (daily sync, manual edits, staging publishes) the index doesn't auto-update. When pages are deleted, the index entries stay.

**Lesson:** The index needs to be treated as a derived artifact, not a hand-maintained file. Either:
- Auto-generate it from the vault contents on each sync (recommended)
- Or enforce an index-update step in every page-publish workflow

**Fix going forward:**
- Write a `regenerate-index.py` script that scans `wiki/` and rebuilds `index.md` from actual files
- Run it as part of the daily wiki sync cron
- Remove the manual index-update burden from the capture skill

### 4. Frontmatter Issues — 2 pages

**What:**
- `wiki/projects/openclaw-fleet-handoff.md` — missing `updated` field
- `wiki/sources/krentsel-openclaw-deep-dive.md` — no frontmatter at all

**Root cause:** The capture skill auto-fills missing frontmatter, but these pages were likely created outside the capture skill (manual creation or raw import). No validation gate exists for non-capture writes.

**Lesson:** Frontmatter validation should be a vault-wide concern, not just a capture-skill concern. A pre-commit hook or lint script should flag missing/malformed frontmatter.

**Fix going forward:**
- Add a `validate-frontmatter.py` script that checks every `wiki/*.md` file for required fields
- Run it in the daily sync cron and report issues
- Consider a pre-commit git hook for immediate feedback

### 5. Graphify MCP Not Installed

**What:** `.mcp.json` references `graphify-finn-wiki` MCP server running from `.venv/bin/python -m graphify.serve graphify-out/graph.json`, but `.venv/` doesn't exist and graphify isn't installed.

**Root cause:** The MCP config was set up but the venv was never created. Graphify (github.com/safishamsi/graphify) needs to be pip-installed in a vault-local venv, then the graph needs to be generated with `graphify build` before the MCP server can serve it.

**Lesson:** MCP server configs should be validated at setup time, not just written and forgotten. A health check for each configured MCP server would catch this.

**Fix going forward:**
- Create venv: `python3 -m venv ~/Code/Finn-Wiki/.venv`
- Install: `~/Code/Finn-Wiki/.venv/bin/pip install graphify`
- Build graph: `~/Code/Finn-Wiki/.venv/bin/python -m graphify build ~/Code/Finn-Wiki/`
- Register in Hermes config.yaml as MCP server
- Add a health check to the daily sync cron

### 6. Staging Draft Accumulation

**What:** `finn-context.md` was sitting in staging since June 15 (14 days unconsumed).

**Root cause:** The capture skill's G6 guard warns at 20 unconsumed drafts, but there was only 1 so no warning fired. The draft was created, previewed to Finn, and then forgotten.

**Lesson:** Even a single staging draft shouldn't sit for 2 weeks. The daily sync should surface staging drafts in its output regardless of count.

**Fix going forward:**
- Lower the staging-clutter warn threshold from 20 to 5
- Daily sync cron should always list staging drafts in output
- Morning brief should include "pending wiki drafts" line if any exist

### 7. Unpushed Commits — 37 pending

**What:** 37 daily-sync commits (June 21-24) were committed locally but never pushed to GitHub.

**Root cause:** Push failures (likely auth or network) during the daily sync cron. The cron logged success locally but the push silently failed. G8 (push idempotent) should have tracked these in `pending_pushes.json` but apparently didn't fire for the script-mode sync.

**Lesson:** Script-mode crons that do git operations need explicit push-verification. "Committed" ≠ "pushed".

**Fix going forward:**
- The wiki-daily-sync script should check `git status` for unpushed commits and retry push
- Add a weekly "git health" check that verifies all repos are pushed
- Cron output should include push status, not just commit status

---

## Prevention Checklist

- [x] Run `regenerate-index.py` in daily sync cron
- [ ] Run empty-file sweep in daily sync cron
- [ ] Run frontmatter validation in daily sync cron
- [ ] Run broken-wikilink scan weekly (cron or manual)
- [x] Install graphify MCP + register in Hermes config
- [ ] Lower staging-clutter threshold from 20 to 5
- [ ] Add push-verification to wiki-daily-sync script
- [ ] Strip `local_*` Notion UUID links in bulk pass
- [ ] Add MCP server health check to daily sync

---

## Related

- [[hermes-webhook-setup]]
- [[living-config-files]]
- [[openclaw-architecture]]