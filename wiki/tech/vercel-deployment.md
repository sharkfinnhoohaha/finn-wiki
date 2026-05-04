---
title: "Vercel Deployment"
type: tech
tags: [vercel, deployment, hosting, frontend, ci-cd]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_c49c7f7b-15a7-4256-8a5f-b71125d9e309, local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53, local_caea5222-5b4f-47a6-8897-b6ba7acef893, local_a2022942-a761-444d-923c-2bf3f7653600]
---

[[Vercel]] is the frontend host for [[overlook-strategy]] portal (`overlook-webapp.vercel.app`), [[three-altitudes]] (`three-altitudes.vercel.app`), [[gearflip]], and [[overlookstrategy.com]]. Auto-deploys from `main`. Backend lives on [[Railway]] — see [[railway-deployment]].

## Deploy trigger

- Push to `main` on the connected GitHub repo → auto-deploy
- Three-altitudes prod branch is `norm`, not `main` — verify branch config in Vercel project settings, not in the repo
- Manual deploy: Vercel dashboard, or `vercel --prod` CLI
- Deploy hooks: per-project URL, accept any POST, body ignored

## Deploy hooks for Sanity webhooks

Used to trigger a Vercel build when content changes in [[Sanity]]. See [[sanity-patterns]] for the Sanity-side webhook config. From the Vercel side:

- Project Settings → Git → Deploy Hooks → create one
- Copy URL, paste into Sanity webhook config
- Method: **POST**
- Body: **ignored** (don't bother setting projection in Sanity)

## Env var management

Recurring failure mode: `.env.local` and Vercel env vars drift.

- Mirror everything that matters from `.env.local` to Vercel project env vars
- After regenerating any secret (Sanity token, Clerk key, Supabase service role): update Vercel **and** trigger a redeploy. Existing builds use the old token until rebuilt.
- `NEXT_PUBLIC_*` vars get bundled into client JS — distinct from server-only vars. See [[sanity-patterns]] for the `SANITY_API_READ_TOKEN` vs `NEXT_PUBLIC_SANITY_API_READ_TOKEN` trap.

Token regen checklist:

1. Generate new token in source provider (Sanity, Clerk, etc.)
2. Update `.env.local` on M1 Max
3. Update Vercel env vars
4. Redeploy on Vercel (or push a no-op commit)
5. Verify locally + production

Skipping step 4 = still using the old token in prod, which usually presents as 500 Unauthorized.

## Runtime logs vs build logs

Two different log streams:

- **Build logs** — `vercel build` output, TypeScript errors, missing deps, env var read at build time
- **Runtime logs** — what serverless functions emit at request time, including 500s from upstream APIs

Diagnosis pattern that has worked: Vercel runtime logs show the **status code** the function returned. For the actual traceback when the backend is on Railway, check **Railway logs** (see [[railway-deployment]]). Frontend `try/catch` blocks can mask 500s as 404s — see [[next-js-patterns]] for the `notFound()` masking case.

## Vercel MCP tools (used in past sessions)

When working through Cowork:

- `list_deployments` — recent deploys for a project
- `get_runtime_logs` — runtime stream
- `get_deployment_build_logs` — build stream
- `get_deployment` / `get_project` — metadata

## Gotchas (hit personally)

- **Branch is configured per project, not assumed `main`.** three-altitudes prod is `norm`. Verify before assuming a push deployed.
- **Token regen needs redeploy.** Updating Vercel env without redeploying does nothing for active functions until next build.
- **`NEXT_PUBLIC_` is load-bearing.** Server-only token used in browser context = silent fallback (e.g. SanityLive polling at 4s instead of WebSocket). See [[sanity-patterns]].
- **Webhook body is ignored on deploy hooks.** Don't waste time configuring Sanity's webhook projection — Vercel just needs the POST.
- **Sandbox can't push to GitHub.** So Cowork can't trigger a deploy directly. Pattern: commit locally, Finn pushes, deploy fires. See [[cowork-sandbox-limits]] and [[git-worktree-pattern]].

## Source citations

Sessions: `local_c49c7f7b` (Overlook portal deploy + non-fast-forward), `local_dec9a139` (runtime vs build logs diagnosis), `local_caea5222` (Sanity → Vercel webhook config), `local_a2022942` (env var token regen flow, Vercel MCP usage).
