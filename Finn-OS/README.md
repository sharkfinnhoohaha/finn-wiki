---
title: "Finn-OS"
type: finn-os
tags: [finn-os, hub, index]
created: 2026-04-24
updated: 2026-04-27
weight: high
node_size: 15
sources: []
---

# Finn-OS

Finn's curated thinking space. Lives inside the Finn-Wiki vault but is operationally separate.

## Pages in this folder

If you're opening one page in Finn-OS right now, open [[now]].

**This week**
- [[now]] — what's on your mind THIS WEEK. Update Monday morning.

**Ideas** — flow: backlog → ranked (during weekly review) → either active project (gets a `wiki/projects/` page) or [[archive]].
- [[backlog]] — raw idea dump (inbox)
- [[ranked]] — promoted from backlog when a thesis is forming
- [[archive]] — killed ideas, kept so you don't keep re-having them

**Career**
- [[goals]] — 6mo / 2yr / 5yr direction. The compass. Read before each weekly review.
- [[skills]] — what you're deliberately practicing
- [[opportunities]] — leads, conversations, requests in flight (the pipeline)
- [[network]] — who's in orbit, who you owe a touch, who could open which door

**Reviews**
- [[weekly]] — rolling weekly retro. Friday afternoon ritual.
- [[monthly]] — bigger zoom-out. First weekend of the month.

**Operating record (over in `wiki/`)**
- [[../index|Wiki index]] — everything in the encyclopedic tier
- [[../log|Log]] — append-only history of every ingest, fix, maintenance pass
- [[status-dashboard]] — live state of every coding project

## What goes here

Finn-OS is for **active thinking**: business ideas you're chewing on, where your career is going, what's on your mind this week. It's the page you open to ask "what should I be working on right now?" or "what idea did I have last Tuesday?"

Finn-OS is **NOT** the encyclopedic memory store. That's `wiki/`. The wiki holds the full picture — every project, every entity, every tech pattern, every chat you've had with Claude. Finn-OS holds the curated, decision-relevant slice.

## How the two tiers relate (aggregator pattern)

Finn-OS pages **point at** wiki pages — they don't duplicate them. When a business idea has a full backing page in `wiki/business/<idea>.md`, the Finn-OS entry is a one-line link plus your current take on it (priority, blocker, next step). The encyclopedic version stays in one place.

This way:
- Wiki facts don't drift out of sync
- Finn-OS stays scannable (Finn opens this folder and sees just the things that matter to him)
- Claude reading the wiki sees full context; Finn reading Finn-OS sees only what to think about

## Folder layout

```
Finn-OS/
├── README.md                ← you are here
├── now.md                   ← THIS WEEK — what's on your mind
├── ideas/
│   ├── backlog.md           ← raw idea dump
│   ├── ranked.md            ← top ideas with effort/impact/excitement scores
│   └── archive.md           ← ideas you've explicitly killed (so they don't keep coming back)
├── career/
│   ├── goals.md             ← 6-month / 2-year / 5-year direction
│   ├── skills.md            ← what you're actively building
│   ├── opportunities.md     ← potential clients, gigs, roles you're tracking
│   └── network.md           ← people you want to work with or learn from
└── reviews/
    ├── weekly.md            ← rolling weekly review (latest at top)
    └── monthly.md           ← rolling monthly review (latest at top)
```

## How to use this folder

- **Start your week here.** Open `now.md` Monday morning. Update it. Now you know what to do.
- **Idea hits, drop it in `ideas/backlog.md`.** Don't try to score it on the spot — just capture. Score weekly.
- **Career thinking goes in `career/`.** Goals + skills + who you want to know. Update monthly.
- **Reviews cadence:** `weekly.md` rolling (Friday or Sunday); `monthly.md` first of the month.

## How Claude updates Finn-OS

When Claude ingests a new source (per the [[finn-wiki-ingest]] skill), it identifies if the content is career or business relevant. If yes, Claude:
1. Files the encyclopedic page in `wiki/business/`, `wiki/projects/`, `wiki/personal/` as normal.
2. Updates the relevant Finn-OS aggregator: adds an idea to `ideas/backlog.md`, a target to `career/opportunities.md`, an open thread to `now.md`, etc.

Claude doesn't move things between Finn-OS sub-files (e.g., backlog → ranked) — that's your call. Claude just makes sure new things land in `backlog.md` and `now.md` so they don't get lost.

## Linking conventions

Finn-OS pages link freely into the wiki:
- `[[overlook-strategy-positioning]]` (full wiki page)
- `[[gearflip]]` (project page in `wiki/projects/in-progress/`)
- `[[copper-and-cast]]`

Wiki pages do **not** typically link back into Finn-OS (the wiki is the encyclopedia, not the to-do list). Exception: the project status dashboard surfaces "now" items because that's a navigation aid.

## Tone

Finn-OS pages are written in **first person**, addressed to yourself. Not the third-person encyclopedic voice the wiki uses. Make it feel like notebook journaling, not documentation.
