---
title: "Project Status Dashboard"
type: workflow
tags: [dashboard, projects, status]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[local_inventory-2026-04-24]]
---

# Project Status Dashboard

The "at a glance" view of every coding project and website across all surfaces — Cowork sessions, Claude Code projects, Vercel, local folders. Generated 2026-04-24 from a full audit of 68 Claude Code project directories, 45 Vercel deployments, and 22 prior Cowork sessions.

**The whole point of this page: "80% and not finishing" is your known pattern. The Unfinished column is the one to stare at.**

---

## The 4 buckets

- **In-progress** — currently being built, recent activity, clear next step.
- **Unfinished** — got close (shipped infra, drafted features, sometimes deployed) then stalled on something specific. The 80% pile.
- **Abandoned** — never past conceptual phase. Logged in, spun up a scaffold, maybe a Vercel slug, then stopped. Zero or near-zero real code. See [[abandoned-archive]] for the consolidated list.
- **Deployed** — live on Vercel, untouched for a while, and looks done.

Mover tip: if you're going to finish anything on the Unfinished list, do it this week. Track which block you're killing (API key, tooling, a bug, a superseding decision) — that's the real to-do.

---

## In-progress (14)

Projects with active work, recent sessions, and a clear next step.

| Project | Last touch | Vercel | Next step |
|---|---|---|---|
| [[three-altitudes]] | Apr 22 deploy | three-altitudes (READY) | `norm` branch pushes pending; 3D/interaction passes on the table |
| [[overlook-portal-webapp]] | Apr 5 | overlook-webapp-ehtt, claude-overlook-webapp (all READY) | Resolve the "clients not showing on admin page" bug + `ENABLE_AI` prod flag |
| [[copper-and-cast]] | Apr 24 | copper-and-cast (READY) | Source real Subaru Outback Wilderness GLB for the 3D hotspots |
| [[waveshade]] | Apr 24 | waveshade-storefront (READY) | Production deploy confirmation; Stripe wiring verification |
| [[overlook-boilerplates]] | Apr 24 | — (GitHub repos) | Delete 2 leftover verification repos (gh CLI lacks delete_repo scope) |
| [[ventura-forward-app]] | Apr 19 | ventura-forward-app (READY) | Finish Supabase "Report It" migration (category enum + photos + geocoding) |
| [[gearflip]] | Mar 27 | — | "Complete the remaining localmodel tasks" (scraping pipeline, alerts, Stripe, Resend) |
| [[johnson-aviation]] | Apr 5 | johnson-aviation (READY) | Complete remaining static pages from template (about/services pattern) |
| [[gemini-usage-tracker]] | Apr 17 | — (native Swift app) | Merge PR #1 on `sharkfinnhoohaha/gemini-tracker-ios` |
| [[riptide]] | — | — | Firmware POC → MVP hardware build |
| [[somliøya]] | Apr 22 deploy | somlioya-tinacms (READY) | Ongoing TinaCMS content/feature work |
| [[berklee-music-supervision-1]] | Apr ~6 | — | Submit Lessons 10/11/12 deliverables (Alchemy cue sheet + video sync) |
| [[notion-life-os]] | Apr 2 | — | Multi-column layout drag-drop; filter views; CSV import polish |
| [[hybrid-llm-workflow]] | Apr 2 | — | Verify `setup_hybrid.sh` actually ran; test the local/Sonnet handoff |

---

## Unfinished (5) — the 80% pile

These are the ones that matter most. Each has a specific block you could kill this week.

| Project | What's done | What's blocking | Size of finish |
|---|---|---|---|
| [[finn-bennett-dotcom]] | Maintenance page drafted; `fbdotcom-underdev` and `finnbennett-maintenance` both live on Vercel | Vercel CLI keeps failing in sandbox; manual deploy never completed. Also: you maintain three overlapping landing-page slugs. | Small — pick one slug, kill the others, manual drag-drop deploy finn-bennett-dotcom |
| [[latency-optimizer]] | Session opened, model selected | "Invalid API key · Fix external API key" — never got past auth | Small — fix the key, then reassess scope (you haven't written any real code yet) |
| [[admin-client-app-template-ovlk]] | Railway backend + Vercel frontend both shipped Apr 9 with bcrypt auth | Superseded by [[overlook-portal-webapp]] fork | Decision only — keep as reference template or archive the Vercel slug |
| [[kb]] | Directory scaffolded at `/Users/finnbennett/KB` | Apr 23 session said "review and audit, fix bugs" then interrupted | Medium — clarify what KB is (early prototype of this wiki?), then commit or kill |
| [[iamhumantoo]] | Folder exists at `/Users/finnbennett/Desktop/Iamhumantoo`; a 2.5MB skill-injection log but no real CC transcripts captured | Unclear what it's supposed to be | You tell me — the name hints at a writing/content tool, but there's no conversation record |

---

## Abandoned (19)

Spun up, never past concept. Don't add these back unless the concept re-sparks. Several are Vercel-slug cleanup candidates.

### Conceptual-only (never real code)

- [[subawoo]] — 4 stub CC sessions, never sent a real prompt
- [[starcommand]] — 3 UUID subdirs, hook-stdout only, zero conversation (Vercel slug live but empty)
- [[echomind]] — Only Supabase MCP wired up, no features built
- [[finn-portfolio-worktree-exploration]] — Codebase recon, no edits
- [[iamhumantoo]] — flagged above (borderline abandoned vs unfinished)

### Scaffolds / starters never iterated

- [[vite-react]] — Vercel Feb 19, 64 days dormant

### Duplicate Vercel slugs (cleanup candidates)

- [[grannen-lodge-variants]] — 4 of 5 Grannen Lodge slugs are iteration clutter (main one is in Deployed)
- [[overlook-strategy-final-v1-variants]] — 2 of 3 Overlook Strategy Final V1 slugs are duplicates
- [[frontend-duplicate-slug]] — `frontend` Vercel slug is a dead duplicate of `overlook-webapp-ehtt`
- [[ventura-forward-admin-duplicate]] — `ventura-forward-admin-client-web-app` is a dead duplicate of `ventura-forward-app`
- [[ovlkstratredo]] — superseded by `overlook-strategy-final-v1*`

### Experiments / low-signal Vercel slugs (purpose unclear)

- [[due-date]] — flag for clarification
- [[mixnote-landing]] — flag for clarification
- [[aviation-theme-cp-aviation]] — two aviation-themed variants, possibly demos/client work not in CC
- [[sealth]] — flag for clarification
- [[project-gpt2c]] — sounds like a GPT-2 experiment
- [[index-playground]] — name suggests scratch space
- [[html-index-copy-paste]] — literal scratch space
- [[gimmerefs]] — music reference finder, stalled on Spotify refactor (ERROR state)
- [[notion-cms-app]] — Notion-as-CMS experiment, broken build (ERROR state)

---

## Deployed (13)

Live on Vercel, last touched a while ago, looks done. These don't need action — they're shipped.

| Project | URL slug | Last deploy | Notes |
|---|---|---|---|
| [[metacheck]] | metacheck-ten.vercel.app | Apr 22 auto-redeploy (shipped clean Apr 1) | Next.js 15, 4 static pages, 45s build |
| [[overlook-audio-site]] | overlook-audio-site | Mar 13 (42d) | Older Overlook Audio brand phase |
| [[finn-v2-portfolio]] | finn-v2, finn-v2-tec3 | Apr 22 | Current live portfolio (until three-altitudes takes over) |
| [[somlioya-nextjs-deprecated]] | somlioya-nextjs | Mar 14 (41d) | Predecessor to current somlioya-tinacms |
| [[cms-kit-sanity-deployed]] | cms-kit-sanity | Mar 14 (41d) | Sanity starter kit, kept as reference |
| [[grannen-lodge-main]] | grannen-lodge | Feb 27 (56d) | Canonical client deploy |
| [[overlook-strategy-final-v1-main]] | overlook-strategy-final-v1 | Apr 20 | Earlier brand/site version, stable |
| [[overlook-invoice-pay]] | overlook-invoice | Apr 14 | Client invoice flow, live |
| [[spencers-dashboard]] | spencers-dashboard | Apr 21 | One-off client dashboard |
| [[rustler-yachts-redesign]] | rustler-yachts-redesign | Apr 22 | [[rustler-42]] client website, shipped |
| [[portal-landing-page]] | portal-landing-page | Apr 22 (ERROR) | Landing for Overlook portal — **ERROR state**, may actually belong in Unfinished |
| [[fbdotcom-underdev]] | fbdotcom-underdev | Apr 8 | Interim finnbennett.com — see also unfinished [[finn-bennett-dotcom]] |
| [[file-organization-pass]] | — | Apr 24 | 15-year file org pass on Mac, shipped |

---

## Triage signals to watch

- **5 Vercel projects currently in ERROR state:** portal-landing-page, gimmerefs, frontend, ventura-forward-admin-client-web-app, grannen_lodge_v2. Three are recent — likely recoverable. Two are duplicates — kill them.
- **Chronic bug in [[overlook-portal-webapp]]:** "clients not showing on admin page" has appeared in 4+ debug sessions across 2 checkouts. Almost certainly env/deploy-side (CORS, API URL, auth header mismatch) not code. Worth a focused session with a checklist, not more retries.
- **Token-spend regret pattern in the extracts:** "I HAVE NOW SPENT A FUCK TON OF MONEY IN CLAUDE CREDITS FOR YOU TO STILL NOT FIX…" — when a bug resists 2 attempts, pivot to Codex/Copilot prompts per the [[token-conservation-mindset]] rule.
- **Vercel cleanup backlog:** ~10 slugs are duplicates or abandoned experiments. One afternoon of `vercel projects remove` would halve your Vercel dashboard.

---

## What to do with this page

- Refer to it when starting a new session — "what's on my plate?" → look here.
- Update the status of a project by moving its file between folders and flagging the change in `log.md`.
- Run a lint pass (ask Claude) every ~30 days to catch staleness: projects whose mtimes drifted, Vercel slugs that errored silently, Unfinished items that should be demoted to Abandoned if the block has been open too long.
- The audit logic that built this page is documented at [[project-status-audit]].
 slugs that errored silently, Unfinished items that should be demoted to Abandoned if the block has been open too long.
