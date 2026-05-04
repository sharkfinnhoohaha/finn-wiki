---
title: "Weekly Prep Briefing"
type: workflow
tags: [workflow, weekly, briefing, life-os, candidate-template]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[local_61169dbe-038c-43f9-97e0-2e7601654671]]
---

## TL;DR

A structured Monday-morning briefing template Finn was exposed to via a Cowork onboarding example but **never actually engaged with**. Worth flagging as a candidate for adoption — the structure is sound, and slots cleanly on top of [[finance-tracking|Life OS]] data plus calendar/email if connected.

> Status: **candidate template**, not yet adopted. Flag this if Finn shows interest in a real version.

## Briefing structure

The example prompt specified four sections plus a tools-connection prelude.

1. **Urgent**
   Time-sensitive items needing attention this week — overdue tasks, unresponded threads, deadlines inside ~7 days.

2. **Mentions**
   Where you've been called out by name across connected systems — emails, Slack/Discord, GitHub PRs, Notion comments. Surfaces things you might have missed.

3. **Adjacent threads**
   Conversations and decisions you're not directly assigned to, but that touch your projects or your collaborators. Useful for picking up context before a meeting.

4. **This week + blockers**
   Tasks scheduled for the upcoming week, with explicit blockers called out per task. The blocker field is what makes this different from a plain todo list — it forces the question "what would unstick this?"

## Pre-step: connect tools

The example prompt asks the agent to first inquire **what tools Finn uses for work and help connect them** before any analysis runs. That step is the unlock: without calendar/email/PM connections, the briefing is just whatever's in `TASKS.md`.

Finn's plausible connections for a real version:

- Notion (`Life OS - March (1)`, [[finance-tracking|Transactions]], project pages) — see [[productivity-skill-ritual]]
- GitHub (Overlook-Strategy org, `sharkfinnhoohaha` personal)
- Berklee Online portal (manual, no API — see [[school-berklee]])
- Calendar (not yet specified)

## Why flag it

The Cowork onboarding template `local_61169dbe-038c-43f9-97e0-2e7601654671` ("Example: Plan out your work priorities") was loaded into Finn's environment but the transcript stops at the agent's initial AskUserQuestion — Finn never engaged. If he ever wants a real Monday briefing, this structure is the most defensible starting point because it's already in his Cowork example library.

## Source

- `local_61169dbe-038c-43f9-97e0-2e7601654671` — "Example: Plan out your work priorities" (stock onboarding template, low engagement, structure preserved as candidate)
