---
title: "CC Batch D — Worktree Clutter Sweep"
type: source
tags: [claude-code, worktrees, three-altitudes, overlook-webapp, somlioya]
created: 2026-04-24
updated: 2026-04-24
---

# CC Batch D — Worktree Clutter Sweep

## Important caveat

None of the 18 directories in this batch contain real Claude Code conversation transcripts. Each one holds a single `vercel-plugin/skill-injections.jsonl` file — a hook event log written by a Vercel/Claude Code plugin that records which skills matched and which were injected on each prompt. No user messages, no assistant replies, no tool outputs. The only narrative signal available is the `toolTarget` field (file paths and occasional shell commands), plus timestamps.

So "last status" here is really "which files the agent was last touching," and abandonment is inferred from the absence of any follow-up activity after each worktree's short burst. Treat this as metadata confirmation that these are all ephemeral scratch worktrees, not discrete projects.

## three-altitudes worktrees

All 13 three-altitudes worktree directories share the same pattern: a short burst of activity (2-20 hook events, spanning minutes to a couple hours) in mid-to-late March 2026, all inside `/Users/finnbennett/Downloads/three-altitudes/.claude/worktrees/<name>/`. The targeted files cluster around the portfolio's Sanity + Three.js scaffolding: `layout.tsx`, `package.json`, `ScrollSections.tsx`, `AirplaneCursor.tsx`, `VectorAtmosphere.tsx`, `MainCanvas.tsx`, `HUD.tsx`, `FluidAtmosphere.tsx`, `globals.css`, `sanity.config.ts`, `sanity.cli.ts`, `.env.local.example`, `next.config.ts`, and the `draft-mode` API routes. This is parallel-agent exploration of the three-altitudes portfolio redesign — scroll-driven atmosphere components, Sanity Studio wiring, and draft-mode plumbing — not 13 separate projects. Confirmed worktree clutter; everything useful already lives on the main three-altitudes branch.

Per-worktree one-liners (sorted by last-touch):
- **vigorous-kowalevski** (Mar 20 03:10-03:25, 8 events) — early pass on ScrollSections, VectorAtmosphere (canvas), FluidAtmosphere (atmosphere).
- **awesome-fermat** (Mar 20 03:37-04:07, 6 events) — layout, ScrollSections, package.json.
- **charming-clarke** (Mar 20 03:37-04:06, 7 events) — page.tsx, ScrollSections, globals.css, layout.
- **exciting-perlman** (Mar 20 03:37-04:07, 10 events) — fullest three-altitudes worktree: MainCanvas, HUD, VectorAtmosphere (atmosphere/), ScrollSections. Closest thing to a "real" redesign attempt.
- **nifty-buck** (Mar 20 11:01-11:06, 9 events) — bootstrap run: `npm install sanity next-sanity @sanity/image-url`, then next.config, layout, ScrollSections, `.env.local.example`. Reads like a fresh Sanity scaffold.
- **sweet-engelbart** (Mar 20 11:19-11:30, 4 events) — ScrollSections, globals.css tweaks.
- **beautiful-lamarr** (Mar 20 11:19-11:30, 5 events) — same window as engelbart; ScrollSections, layout, globals.
- **vigorous-chaum** (Mar 20 11:19-11:30, 4 events) — AirplaneCursor + VectorAtmosphere. Unique: only worktree touching `AirplaneCursor.tsx`, which lines up with the aviation-themed portfolio concept.
- **agitated-swirles** (Mar 20 11:41-12:22, 5 events) — ScrollSections, package.json, `studio/[[...tool]]/page.tsx`, `sanity.cli.ts`. Note: toolTargets point to `/Downloads/three-altitudes/...` (not the worktree subpath), so this session was operating on the main tree from inside the worktree — possibly a misconfigured cwd.
- **distracted-mirzakhani** (Mar 20 19:39-19:43, 2 events) — two hits on `studio/[[...tool]]/page.tsx`; basically nothing. Same main-tree path anomaly as swirles.
- **interesting-shaw** (Mar 24 05:20-07:35, 20 events) — biggest three-altitudes worktree: DisableDraftMode component, draft-mode API route, sanity.config, `.env.local.example`, package.json, layout. Looks like the Sanity draft-mode integration pass.
- **vibrant-brown** (Mar 24 07:54-07:55, 3 events) — one-minute session: next.config + draft-mode route. Continuation of shaw.
- **tender-lehmann** (Mar 24 08:16-08:24, 6 events) — next.config, DisableDraftMode, draft-mode route, layout. Another continuation of the draft-mode thread. Most recent three-altitudes worktree activity (Mar 24).

Nothing unique survives here that isn't already represented on the main three-altitudes branch. Safe to treat as a single "three-altitudes Mar 2026 redesign" signal.

## claude_Overlook-webapp earlier work

Four directories, all pointing at `/Users/finnbennett/Downloads/claude_Overlook-webapp/` — an earlier iteration of the Overlook client webapp before it moved to its current location. Again, all four hold only skill-injection logs, not transcripts.

- **claude_Overlook-webapp** (Mar 21 - Apr 5, 93 events) — the main session log, and by far the largest file in this batch (30KB). ToolTargets walk through the full stack: `backend/.env.example`, `backend/app/database.py`, `backend/app/config.py`, `frontend/lib/api.ts`, `frontend/next.config.ts`, `frontend/.env.local`, `frontend/app/(admin)/admin/layout.tsx`, `frontend/app/portal/[token]/page.tsx`, `frontend/components/admin/AISummaryPanel.tsx`, `frontend/components/admin/AdminSidebar.tsx`, `frontend/components/BackButton.tsx`, `frontend/components/portal/SupportForm.tsx`. Confirms the March-era webapp already had the FastAPI backend + Next.js frontend split, Clerk-less token-based portal (`/portal/[token]`), admin area with sidebar + AI summary panel. Last touch Apr 5, 2026.
- **claude_Overlook-webapp-.claude-worktrees-peaceful-banach** (Mar 25 00:40-02:15, 21 events) — one focused worktree session. Unique artifact: a captured `gh pr create` command with title "feat: Vercel Services deployment + portal redesign foundation" and a body starting "Vercel Services config (`vercel.json`) — deploys FastAPI + Next.js on same [...]". This is the PR where Finn moved Overlook to Vercel Services (monorepo FastAPI+Next deploy). Worth preserving as a milestone.
- **claude_Overlook-webapp-backend** (Mar 21, 1 event) — a single hook log containing the `create-next-app` bootstrap command: `cd /Users/finnbennett/Downloads/claude_Overlook-webapp/frontend && npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"`. This is the actual birth of the Overlook frontend scaffold, Mar 21 2026 ~noon. Keep for history.
- **claude_Overlook-webapp-frontend** (Mar 21 - Mar 26, 6 events) — short-lived; touched `prisma/schema.prisma` (suggests Prisma was tried before Postgres/SQLAlchemy), `proxy.ts`, `middleware.ts`, `components/portal/SupportForm.tsx`, `components/admin/AdminSidebar.tsx`. The `prisma/` directory is notable — the current stack is FastAPI+SQLAlchemy+Alembic, so Prisma was evidently an early dead end.

Together these four confirm: Overlook webapp started Mar 21 2026 as a create-next-app scaffold in `~/Downloads/claude_Overlook-webapp/`, briefly tried Prisma, moved to the FastAPI split, got a Vercel Services PR on Mar 25, and ran until at least Apr 5 before (presumably) relocating. All the discrete directories are artifacts of `cd`ing into different subfolders of the same repo — not separate projects.

## Sømliøya worktree

- **Somlioya-TinaCMS/.claude-worktrees/sad-feistel** (Mar 18 21:47-22:08, 11 events) — a 20-minute session that touched `.vercel/project.json`, `vercel.json`, `app/layout.tsx`, `app/publish/page.tsx`, `app/api/publish/route.ts`, `package.json`, `.env.local`. Reads like a publish-flow + Vercel config pass on the Sømliøya TinaCMS project. Earliest file in the whole batch (Mar 18). No session transcript; just metadata. Confirmed dead worktree.

## Bottom line

All 18 directories are confirmed worktree/clutter — no standalone projects, no unique long-running work. The three-altitudes bunch collapses into one "Mar 2026 portfolio redesign" thread; the four claude_Overlook-webapp directories collapse into one "Mar-Apr 2026 Overlook webapp bootstrap" thread; the Sømliøya one is a single publish-flow patch. Two items worth preserving as standalone signals: the `create-next-app` bootstrap command for Overlook (Mar 21 ~noon), and the "Vercel Services deployment + portal redesign foundation" PR title from the banach worktree (Mar 25).
