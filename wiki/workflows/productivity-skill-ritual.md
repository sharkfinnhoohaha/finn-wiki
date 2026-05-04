---
title: "Productivity Skill Ritual"
type: workflow
tags: [workflow, productivity, ritual, slash-command, life-os]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[local_70c4e688-3928-40cc-a168-3f32a7b31da9]], [[local_b7e57647-0d6d-464c-9ae8-fbd083e1d078]], [[local_4d1ab0f2-2c30-4017-be7a-4bb9f275e22e]], [[local_a2022942-a761-444d-923c-2bf3f7653600]], [[local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53]]
---

## TL;DR

`/productivity:start` at session kickoff to bootstrap; `/productivity:update` mid-session or at end to refresh task state. Used regularly across both Overlook web app work and personal sessions.

## `/productivity:start`

- **When:** at the beginning of a work session
- **What it does:** checks for `TASKS.md`, `CLAUDE.md`, `memory/`, and `dashboard.html` and bootstraps anything missing
- **Skill base directory observed:** `/sessions/fervent-gifted-hamilton/mnt/.remote-plugins/plugin_019pKuRMCBwRk8Co4y3okTjX/skills/start`

Session evidence:

- `local_70c4e688-3928-40cc-a168-3f32a7b31da9` was a one-line session — Finn invoked `/productivity:start`, agent began checking the working directory, session went idle. Confirms the kickoff ritual.
- `local_b7e57647-0d6d-464c-9ae8-fbd083e1d078` (free customer dashboard build) — `/productivity:start` invoked in parallel with the build; created `TASKS.md`, `CLAUDE.md`, `memory/` files as templates.

## `/productivity:update`

- **When:** mid-session or at session end, when task state has shifted
- **What it does:** refreshes `TASKS.md`, updates `memory/` with new lessons, saves feedback memories so context carries across sessions

Session evidence:

- `local_4d1ab0f2-2c30-4017-be7a-4bb9f275e22e` (Berklee assignment) — Finn's last message in the captured window was the `/productivity:update` slash command itself
- `local_a2022942-a761-444d-923c-2bf3f7653600` (three-altitudes Sanity debug) — agent offered to create a `TASKS.md` for ongoing work; Finn hadn't responded yet
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` (Overlook portal 404 debug) — used to save the Alembic-chain lesson to memory so it carries across sessions

## What lives where

- `TASKS.md` — current task list, surfaces in dashboard
- `CLAUDE.md` — per-project working memory (separate from global `~/.claude/CLAUDE.md`, see [[hybrid-local-llm-workflow]])
- `memory/` — long-form knowledge bits, lessons, feedback memories
- `dashboard.html` — local dashboard UI

## Why it matters

This is the wiring that lets future Claude/Cowork sessions pick up context without re-priming. Connects directly to [[token-conservation-mindset]] — the goal is to never spend tokens re-explaining the stack or the active projects.

## Sources

- `local_70c4e688-3928-40cc-a168-3f32a7b31da9` — "Start productivity session"
- `local_b7e57647-0d6d-464c-9ae8-fbd083e1d078` — "Build free customer dashboard for website"
- `local_4d1ab0f2-2c30-4017-be7a-4bb9f275e22e` — "Complete assignments and deliver PDFs"
- `local_a2022942-a761-444d-923c-2bf3f7653600` — "Debug Sanity setup and studio errors"
- `local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53` — "Clean up repository branches and merge fixes"
