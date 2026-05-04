---
title: "Claude Code sessions — batch B (Apr 9–18)"
type: source
tags: [claude-code, session-extracts, status-signals]
created: 2026-04-24
updated: 2026-04-24
---

Status signals extracted from 17 Claude Code project dirs (Apr 9–18 mtimes). Sampled first user + last assistant messages per session. Many dot-path duplicates (`.claude-worktrees` vs `--claude-worktrees`) are empty stubs containing only a `vercel-plugin/` or `memory/` subfolder and no `.jsonl` — listed for completeness.

## GeminiUsageTracker (iOS/macOS)

Swift app to track Gemini API usage. Two real sessions, both worktrees of the same project on Desktop.

- `intelligent-jang-618eba` (174 lines, Apr 17): Scheduled-task run, app review/audit. Ends with `<pr-created>https://github.com/sharkfinnhoohaha/gemini-tracker-ios/pull/1</pr-created>` plus walkthrough of what `tokensUsed` means. Active, PR opened on personal GH.
- `epic-brown-13e51e` (160 lines, Apr 16): "Create a Gemini usage tracker app for iOS and macOS. Review and audit my work so far." Ends with "Clean build, zero warnings" — fixed `@MainActor` Sendable warning in `GoogleAuthService`, `UsageProgressBar` re-animates, renamed "Requests Per Minute" → "Monthly Requests".
- Dot-path stub dirs (`.claude-worktrees-...`) both contain only empty `vercel-plugin/` subdir — no sessions.

Signal: ACTIVE personal project, iOS/macOS Swift, GH repo `sharkfinnhoohaha/gemini-tracker-ios`, PR #1 open. Clean builds.

## Overlook webapp (Desktop/claude/Overlook-webapp)

The admin/client portal — Next.js frontend + FastAPI backend. Multiple overlapping debugging sessions on the same "clients don't show on admin page" bug.

- Main dir `715c27dd` (9 lines): trivial, "permissions" prompt, "Invalid API key" error. Aborted.
- Main dir `a8f3f50e` (118 lines, bigger): "I can't see the clients on the client page in the admin dashboard. Debug and fix it. Push and commit to main when done." Ends mid-investigation using Claude-in-Chrome to inspect the page — no clean resolution message captured.
- Worktree `admiring-nash` (237 lines): same clients-page bug + "ensure vercel build succeeds". Ends: "Code is correct and ready, working tree is clean and up to date with main (commit 78896c5)" — verified imports, API layer, TS types, migrations. Effectively punted: code looks right, bug must be runtime/env.
- Worktree `heuristic-ellis` (81 lines): different task — "swap project tasks view on client dashboard to the Activity feed seen in the updates page". Ends mid-task listing 4 dev servers (Next.js, FastAPI, Postgres Docker, Ollama) before writing a config.

Signal: ACTIVE but bug-stuck. Repeated attempts at same "clients not showing" bug across worktrees suggests deploy/env mismatch, not code. Ollama + pgvector in stack confirms [[ai-features]] are live. Last commit referenced: `78896c5`.

## Overlook webapp (Downloads/Overlook-webapp) — duplicate checkout

Same project, second clone in `~/Downloads/`. Three sessions, all tiny.

- `168d2ef3` (6 lines): "The clients aren't showing up in the admin portal. Fix it" — no assistant reply captured.
- `d8524474` (10 lines): Update Config skill doc, about hooks vs memory.
- `f849f699` (10 lines): Same clients bug prompt, truncated.

Signal: redundant clone, Finn keeps retrying the same bug in fresh sessions. Consolidation opportunity.

## Admin-Client-App-Template-ovlk (Downloads)

The precursor/template that became the Overlook webapp. Clerk-style auth template.

- Main `a5d64f7d` (15 lines): `/debug` command, ends with "fix and let me know what you need me to do to get it deployed to vercel" then "Invalid API key · Fix external API key".
- Worktree `eager-albattani` (241 lines, Apr 9): Hit a Claude Code hooks config error (`PreToolUse hooks: Expected array`). Ends with deploy instructions: "your authentication system is deployed, you need to set env vars in Vercel: `AUTH_SECRET=EM7Ytt8DjenHcbDgfKnMgmJxUvN2WHWPyS0T+BqLe/A=`, `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH=$2b$10$.Fhmj3R9R/...`" — bcrypt + env-based admin auth.
- Worktree `pedantic-kirch` (55 lines): System Design skill invocation, admin dashboard verification. Ends: "Railway backend live, Vercel frontend live. Task: Verify all admin pages populate and add example customer data. Pages: /admin (home), /admin/clients (CRUD), /admin/projects (truncated)".
- Four sibling dot-path stub dirs (`.claude-worktrees-eager-albattani`, `...-eager-albattani-frontend`, `...-pedantic-kirch`, `...-pedantic-kirch-backend`): all empty vercel-plugin shells, no sessions.

Signal: SHIPPED — Railway backend + Vercel frontend both live as of Apr 9. Auth system deployed with env vars. This looks like the seed that Finn then forked into Desktop/claude/Overlook-webapp.

## cms-kit-sanity (Desktop)

Directory exists, no JSONL — only an empty `vercel-plugin/` subdir dated Mar 17. No sessions captured in this batch. Likely [[three-altitudes]]-style Sanity template exploration.

## Somlioya TinaCMS (iCloud Webdev-Tools)

Directory exists, no JSONL — only a `memory/` subdir dated Mar 17. No sessions captured in this batch. The [[somlioya]] project runs on Tina per the stack doc.

## Cross-session patterns

- The "clients not showing on admin page" bug appears in 4 separate sessions across 2 checkouts — chronic unresolved issue, likely env/deploy-side (CORS, API URL, auth header) rather than code. Worth a dedicated page.
- Worktree naming (`intelligent-jang`, `epic-brown`, `eager-albattani`, `pedantic-kirch`, `admiring-nash`, `heuristic-ellis`) is Docker-style random-adjective — Claude Code's default naming.
- Dot-path vs double-dash dir duplicates: artifact of Claude Code rewriting `.claude` as `--claude` in the encoded path. Real sessions only live in the `--` variant; `.` variants are stubs.
- Deploy pattern confirmed: Vercel (frontend) + Railway (FastAPI backend), matches [[CLAUDE]] stack conventions.
