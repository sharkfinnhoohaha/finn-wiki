---
title: "Claude Code Batch A — Session Extract"
type: source
tags: [claude-code, sessions, status-audit]
created: 2026-04-24
updated: 2026-04-24
---

# Claude Code Session Extract — Batch A

Sampled first user message + last 3-5 messages from the newest JSONLs in each of 17 `.claude/projects/<encoded>` directories. Most directories with "skill-injections.jsonl only" indicate no real user-facing Claude Code session ran in that working dir — just plugin scaffolding.

Format per project: **encoded-dir** → cwd | session count | status signal.

## -Users-finnbennett

CWD: `/Users/finnbennett`. 5 top-level sessions, all meta (login successful, marketplace added, command stdout). No real project work. Top-level home-dir sessions are admin/CLI noise.

## -Users-finnbennett-Desktop-Iamhumantoo

CWD: `/Users/finnbennett/Desktop/Iamhumantoo`. Only `skill-injections.jsonl` present — no real CC sessions ran in this working dir. Project exists on disk but hasn't been worked on via Claude Code recently. Likely dormant.

## -Users-finnbennett-Users-finnbennett-Desktop-Overlook-Boilerplates- (trailing dash variant)

CWD: `/Users/finnbennett/Users/finnbennett/Desktop/Overlook Boilerplates'` (note stray apostrophe in path). **2 sessions, both 2026-04-24 (today), huge (2.2MB + 129KB)**. Ultrathink prompt: building 5 Overlook boilerplates (SaaS, web, dashboard, etc.) to save tokens. **Last state: shipped.** All 5 templates live at github.com/Overlook-Strategy (overlook-saas, overlook-web, overlook-dashboard, …). Two leftover verification repos need manual cleanup by Finn (`gh` lacks `delete_repo` scope). **Active, recently completed.**

The non-dash sibling dir `-Users-finnbennett-Users-finnbennett-Desktop-Overlook-Boilerplates` has 0 real sessions (empty encoded path).

## -Users-finnbennett-Users-finnbennett-Downloads-copper-and-cast

CWD: `/Users/finnbennett/Users/finnbennett/Downloads/copper-and-cast`. **2 big sessions from 2026-04-24/25** (1.6MB + 1.7MB). Work: (1) audit/harden/optimize + deploy to Vercel → shipped live at `copper-and-cast.vercel.app` with "rebrand shipped" report (dark editorial → outdoor catalog warmth, image optimizer 200, year-long immutable cache). (2) Ultrathink to build interactive 3D Subaru Outback Wilderness model in Jade Green using Next.js 16 + react-three-fiber — verification report shows 6 clickable hotspots; Finn asked how to improve accuracy, assistant suggested sourcing real GLB file. **Active, recently shipped; 3D model is open thread.**

## -Users-finnbennett-Users-finnbennett-WaveShadeWebsite

CWD: `/Users/finnbennett/Users/finnbennett/WaveShadeWebsite`. **2 large sessions 2026-04-24/25** (1MB + 1.7MB). Work: e-commerce sunglasses site for WaveShade (Ventura local brand — "got sick of losing Ray Bans, designed my own"). Stripe + admin dashboard + minimalist coastal feel. **Status: shipped infrastructure** — GitHub repo `sharkfinnhoohaha/waveshade` private, pushed to main, Vercel↔GitHub connected for auto-deploy. `pnpm install` clean, backend (`medusa build`) + storefront (`next build` 19 routes) building clean. Middleware has graceful 503 fallback. Deploy playbook written. Uses Medusa backend (Dockerfile + render.yaml blueprint added). **Active, deploy-ready.**

## -Users-finnbennett-Downloads

CWD: `/Users/finnbennett/Downloads`. Only skill-injections, no real session. Ignore.

## -Users-finnbennett-Downloads-claude-Overlook-webapp

CWD: `/Users/finnbennett/Downloads/claude_Overlook-webapp`. 11 sessions. Recent sessions (2026-04-04/05) are mostly broken — "Unknown skill: plugin" errors, interrupted requests, Lighthouse on developer.chrome.com (unrelated detour). Older session (2026-04-04) shows real work: getting local AI for Admin Dashboard working, fixing `X-Admin-Key` mismatch between frontend `.env.local` and backend (frontend was sending `overlook-dev-key-2025`, backend expected hash). **Status: partially working but session history is messy; recent sessions show CC config issues.** The real deploy work happened in the peaceful-banach worktree (see below).

## -Users-finnbennett-Downloads-claude-Overlook-webapp--claude-worktrees-peaceful-banach

CWD: `/Users/finnbennett/Downloads/claude_Overlook-webapp/.claude/worktrees/peaceful-banach`. Only subagent JSONLs (no top-level). Newest (2026-03-25) is compact-continuation. **Intent**: deploy Overlook Strategy webapp at $0/month via Vercel Services (FastAPI + Next.js same domain), strip Ollama/AI from prod (add `ENABLE_AI` flag), redesign client portal with premium dark agency theme matching Gemini reference. Session compacted — work continued elsewhere. **Status signal: this is where the deploy architecture decision lived.**

## -Users-finnbennett-Downloads-three-altitudes

CWD: `/Users/finnbennett/Downloads/three-altitudes`. Only skill-injections. No recent CC work in this exact path. (Lots of worktree siblings exist in projects/ list but weren't in the 17 targets — three-altitudes has had major CC activity historically via worktrees.)

## -Users-finnbennett-KB

CWD: `/Users/finnbennett/KB`. 1 session 2026-04-23, small (90KB, 20 msgs, only 3 real). Finn asked "Review and audit, fix any bugs you find" then interrupted and set effort to high. **Session appears abandoned mid-start.** KB (knowledge base?) — dormant/unclear.

## -Users-finnbennett-Users-finnbennett-Ventura-Forward-App (hyphen variant)

CWD: `/Users/finnbennett/Users/finnbennett/Ventura Forward App`. 1 session 2026-04-19, 260KB, 60 msgs (17 real). Work: Supabase schema for "Report It" civic feature — reports table with category enum (trash/graffiti/pothole/abandoned/hazard/other), photo storage, lat/lng, reverse geocoded address, status. **Last state: writing migration files, session interrupted by user mid-tool-call.** Active but open thread.

## -Users-finnbennett-Users-finnbennett-WaveShadeWebsite-apps-backend

Skill-injections only, 2026-04-24. The backend subfolder never got its own CC session — work happened at the root WaveShadeWebsite path.

## -Users-finnbennett-Users-finnbennett-WaveShadeWebsite-apps-storefront

Skill-injections only, 2026-04-24. Same as above — tiny file, no real work at this nested path.

## -Users-finnbennett-Users-finnbennett-Ventura Forward App (space variant)

CWD: `/Users/finnbennett/Users/finnbennett/Ventura Forward App` with literal space. Only skill-injections. The real work used the hyphen-encoded path above.

## -Users-finnbennett-LatencyOptimizer

CWD: `/Users/finnbennett/LatencyOptimizer`. 1 session 2026-04-18, 147KB, 29 msgs (3 real). Set model to opus-4-7[1m], then: **"Invalid API key · Fix external API key"**. Session never got past auth error. **Blocked/dormant.** What it is: name suggests an audio latency tool (Overlook Audio related?) — needs Finn to clarify.

## -Users-finnbennett-Somlioya-TinaCMS

CWD: `/Users/finnbennett/Somlioya-TinaCMS`. Only skill-injections, 2026-03-18. Old. No recent CC activity at this path. (Sømliøya work happened via the iCloud path `-Users-finnbennett-Library-Mobile-Documents-com-apple-CloudDocs-Webdev-Tools---Somlioya-TinaCMS` which wasn't in the 17 targets.)

---

## Summary by status

- **Active + shipped recently (2026-04-24/25)**: Overlook Boilerplates, copper-and-cast, WaveShadeWebsite.
- **Active, open thread**: copper-and-cast 3D Subaru model (needs GLB file from Finn), Ventura Forward App Supabase schema (mid-migration).
- **Historical active, now dormant at this path**: claude-Overlook-webapp (messy, deploy happened in worktree), three-altitudes (worktree activity not captured in this batch).
- **Dormant / never really started here**: Iamhumantoo, KB, LatencyOptimizer (blocked on API key), Somlioya-TinaCMS, Downloads, top-level `-Users-finnbennett`.
- **Noise paths** (only skill-injections or duplicate encodings): Overlook-Boilerplates no-dash variant, WaveShadeWebsite apps-backend, WaveShadeWebsite apps-storefront, Ventura Forward App space variant.

Key cross-cutting observation: Finn has many duplicate encoded-paths because CC launches from different cwds (e.g. `Users/finnbennett/Users/finnbennett/...` double-prefix suggests sessions started from inside `~/` with cwd already set to `~/`, creating the nested-home pattern). The real signal concentrates in the deepest paths with biggest JSONLs.
