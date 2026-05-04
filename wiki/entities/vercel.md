---
title: "Vercel"
type: entity
tags: [tool, service, hosting, frontend, ci-cd]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-c49c7f7b]], [[session-dec9a139]], [[session-caea5222]], [[session-a2022942]], [[session-45eaf1ea]], [[session-1cfa988a]]
---

# Vercel

Frontend hosting and CI/CD platform for Next.js apps. Auto-deploys on push to `main` (or whichever production branch is configured per project). Default frontend host across all of Finn's web projects.

## Where it's used

- [[overlook-portal-webapp]] — production at `overlook-webapp.vercel.app`, also `claudeoverlook-webapp-production.up.railway.app` for the backend
- [[three-altitudes]] — production at `three-altitudes.vercel.app`, deploys from `norm` branch
- [[overlook-strategy]] site — `overlookstrategy.com`
- [[gearflip]] — Next.js scaffold, presumed Vercel target

## Patterns and gotchas

- **Auto-deploy from `main`** is the default expectation. Finn's pattern: commit locally, push, watch Vercel build.
- **Sandbox can't push.** Cowork lacks GitHub credentials so pushes go through Finn's terminal or a `deploy-changes.sh` script committed to the repo. Updated to `git pull --rebase` first to handle non-fast-forward.
- **`norm` is `three-altitudes` production branch**, not `main`. Easy mistake.
- **Sanity → Vercel webhook** for content updates: trigger on Create + Update (Publish wasn't an option in Finn's UI), filter `!(_id in path("drafts.**"))` to fire only on published transitions, leave projection blank, POST method, no secret/headers. See [[sanity]].
- **Diagnosing deploy issues:** Vercel runtime logs show status codes; for Python tracebacks switch to Railway logs. The `try/catch` masking 500s as 404s in `app/portal/[token]/page.tsx` was caught using runtime logs.
- **Vercel MCP** has been used in-session: `list_deployments`, `get_runtime_logs`, `get_deployment_build_logs`.
- **ENV propagation gotcha:** Sanity tokens placed in `.env.local` got mirrored to Vercel as placeholders, producing 500 Unauthorized on `/api/draft-mode/enable`. Fix path was: regenerate token → copy real value → update Vercel env → redeploy.
- **`NEXT_PUBLIC_*` vs server-only:** SanityLive `browserToken` was using server-only `SANITY_API_READ_TOKEN` (undefined in browser bundle), causing ~4-second polling fallback instead of WebSocket. Fix: switch to `NEXT_PUBLIC_SANITY_API_READ_TOKEN`.
- **Sandboxed network blocks SWC ARM binary** during `npm run build` from inside Cowork — Finn runs `npm run dev` locally to verify.
- Listed as a recurring expense in the [[notion-life-os]] vendors list.

## See also

- [[railway]]
- [[sanity]]
- [[overlook-portal-webapp]]
- [[three-altitudes]]
