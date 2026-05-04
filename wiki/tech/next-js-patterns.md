---
title: "Next.js Patterns"
type: tech
tags: [nextjs, react, tailwind, typescript, app-router, frontend]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_ac05b833-2a5a-44bd-97e8-58c840d59483, local_c49c7f7b-15a7-4256-8a5f-b71125d9e309, local_45eaf1ea-d0f9-4ee4-8813-17b00232e0f4, local_caea5222-5b4f-47a6-8897-b6ba7acef893, local_65f6bd58-1447-4afc-948b-6b9efd97150a, local_a2022942-a761-444d-923c-2bf3f7653600, local_b7e57647-0d6d-464c-9ae8-fbd083e1d078]
---

Default frontend stack for everything Finn ships: Next.js App Router + React + Tailwind + TypeScript, deployed on [[Vercel]]. Same idioms recur across [[overlook-strategy]] portal, [[three-altitudes]], [[gearflip]], [[somliøya]]. This page is the cheat sheet for the gotchas that bite on every project.

## Visual defaults (monochromatic)

- White bg, `text-neutral-900`, borders `border-neutral-100` / `border-neutral-200`
- Tailwind only — **no new deps unless asked**
- Use existing utilities in the repo first (`lib/utils.ts`, `lib/api.ts`)
- shadcn/ui acceptable when scaffolded already (GearFlip uses it); otherwise hand-roll

## Money

Always `formatCents()` from `lib/utils.ts`. Never raw cents in JSX, never `(amount / 100).toFixed(2)`. If the helper doesn't exist in the repo yet, add it before touching any price display.

```ts
// lib/utils.ts
export const formatCents = (cents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(cents / 100);
```

Authed admin requests: `adminFetch` from `lib/api.ts` (Overlook portal pattern, sets `X-Admin-Key` header).

## Sticky scroll-stage pattern

Used on [[three-altitudes]] for the 4-stage cinematic scroll (Shoreline / Pocket / Engine Room / Horizon). Each stage = one sticky 200vh section, four stages = 800vh total page height. Scroll progress drives Three.js atmosphere components (see [[three-js-patterns]]) and a colour rail with smoothstep transitions between stage colours.

Named scroll zones used: `shoreline` (0-25%), `pocket` (26-50%), `engine-room` (51-75%), `horizon` (76-100%).

## Scroll restoration gotcha (App Router)

[[Sanity]] Studio embedded in Next.js (`/studio` route) was refreshing every ~4s while scrolling — diagnosed in `local_caea5222`. Three usual suspects:

1. App Router scroll restoration. Fix: `experimental: { scrollRestoration: false }` in `next.config.js`, or `export const dynamic = 'force-static'` on the Studio route.
2. Custom input components missing `useEffect` cleanup → re-mount cascade.
3. `@sanity/presentation` iframe interference.

Diagnostic: DevTools Network tab. Full document request on each scroll = router issue. No network = React re-render issue. See [[sanity-patterns]] for the related `SanityLive` polling fallback that *also* causes 4s refresh loops.

## Error masking via try/catch → notFound()

In `local_dec9a139` an `app/portal/[token]/page.tsx` `try/catch` was swallowing backend 500s and calling `notFound()`, so a missing `invoice_files` table (failed [[alembic]] migration) presented as a 404 in the UI. Lesson: log the error before falling back to `notFound()`. Vercel **runtime logs** show the status; [[Railway]] logs show the actual traceback (see [[vercel-deployment]] / [[railway-deployment]]).

This class of bug is exactly what [[sentry]] catches automatically — `onRequestError = Sentry.captureRequestError` in `instrumentation.ts` surfaces server-side 500s before they silently degrade to 404s. See [[sentry-nextjs-patterns]] for setup.

## Error monitoring

Finn has [[sentry]] Pro (via GitHub Pack). For any app that's client-facing or has a Railway backend, wire it up — `@sentry/nextjs` ≥8.28.0, four config files, source maps via `SENTRY_AUTH_TOKEN`. [[overlook-portal-webapp]], [[three-altitudes]], and [[pier-and-point]] are the highest-priority targets. Full setup in [[sentry-nextjs-patterns]].

## Public vs protected routing with Clerk

Standard split (used in [[gearflip]], applicable elsewhere):

- Public: `/`, `/sign-in`, `/sign-up`, `/api/webhooks/*`
- Everything else: protected via Clerk middleware

See [[clerk-auth-pattern]] for the full middleware config.

## Dynamic vs static exports

For pages that live behind draft mode or read tokens (e.g. Studio, preview routes), `export const dynamic = 'force-static'` or `'force-dynamic'` matters. Wrong choice causes either stale content or rebuild storms on every Sanity webhook. See [[sanity-patterns]].

## File layout (Overlook portal admin)

```
frontend/app/(admin)/admin/page.tsx
frontend/app/(admin)/admin/clients/page.tsx
frontend/components/admin/AdminSidebar.tsx
frontend/components/admin/AdminLayoutClient.tsx
frontend/components/admin/TaskManager.tsx
frontend/components/admin/FeedManager.tsx
frontend/components/admin/NoticeManager.tsx
frontend/components/admin/ProjectHealthBar.tsx
```

Portal sidebar nav: tab-keyed `hidden` divs, not router-driven (existing pattern, preserve it).

## Gotchas (hit personally)

- **Lost work in worktrees.** `claude/admin-dashboard-customization-HN68Q` was created in a Claude Code worktree session, never pushed, then pruned during branch cleanup. Two days of work gone. See [[git-worktree-pattern]].
- **Sandbox can't `git push`.** Cowork commits locally; Finn pushes from terminal, or use `deploy-changes.sh` (see [[cowork-sandbox-limits]]).
- **`portal_token` is NOT `client.id`.** Separate UUID field on the client record, used for unauth'd portal links.
- **Vercel auto-deploys from `main`.** A push to `norm` (three-altitudes prod branch) doesn't trigger production unless the project is configured for that branch. Confirm in Vercel project settings before assuming a deploy fired.
- **`npm run build` blocked in sandbox.** Can't pull SWC ARM binary. Run `tsc --noEmit` for type check inside sandbox; `npm run dev` and `npm run build` happen on Finn's M1 Max.

## Source citations

Sessions: `local_ac05b833` (admin dashboard lost work, formatCents/adminFetch), `local_c49c7f7b` (portal feed/notice rebuild), `local_45eaf1ea` (three-altitudes Three.js pages), `local_caea5222` (Sanity scroll refresh), `local_65f6bd58` (4-stage scroll architecture), `local_a2022942` (Studio embed errors), `local_b7e57647` (Next.js 15 dashboard scaffold).
