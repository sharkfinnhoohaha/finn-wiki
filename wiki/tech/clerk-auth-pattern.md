---
title: "Clerk Auth Pattern"
type: tech
tags: [clerk, auth, nextjs, supabase, gearflip, middleware]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_2a27ba0d-cb52-43ef-bbf7-83d2f5f1888f]
---

[[Clerk]] is the auth provider for [[gearflip]] (Next.js + [[Supabase]]). The [[overlook-strategy]] portal does NOT use Clerk — it uses an `X-Admin-Key` header pattern instead. So if you're touching auth code, first establish which app you're in.

## Public vs protected route split

Clerk middleware in Next.js. Public routes (anyone, no auth header):

- `/` — landing
- `/sign-in`
- `/sign-up`
- `/api/webhooks/*` — incoming Clerk events, Stripe events, etc.

Everything else: protected. The middleware will redirect unauthenticated requests to `/sign-in`.

## Layout integration

Clerk wired into `app/layout.tsx` with `<ClerkProvider>` at the root. `<UserButton />` slots into the dashboard header — gives the user avatar with sign-out / account management dropdown for free, no custom UI.

## Dashboard auth pattern (GearFlip)

```
app/layout.tsx               <- ClerkProvider wraps the whole app
app/(dashboard)/layout.tsx   <- UserButton in header, usePathname for active nav
app/(dashboard)/page.tsx     <- protected by middleware
```

`usePathname` drives the active state on the sidebar nav (lucide-react icons), `<UserButton />` for the account widget.

## RLS pattern with Supabase

GearFlip has 4 tables: `listings`, `price_history`, `market_prices`, `alert_rules`. RLS policies enforce per-user access, **except** for cron jobs / scrapers, which use the Supabase **service role** key to bypass RLS.

So there are two access modes:
- User context (Clerk session → Supabase JWT or user id) — RLS enforced
- Service role (cron, scraper, normalization pipeline) — RLS bypassed

The service role key must NOT leak to the browser. Server-only env var. See [[vercel-deployment]] for env var mirroring discipline.

## Middleware shape

Standard Clerk middleware config (verify exact API against current Clerk version):

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth.protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)', '/api(.*)'],
};
```

## Stack adjacent (GearFlip)

- shadcn/ui scaffolded
- lucide-react icons
- Geist font
- TypeScript types in `lib/types.ts`
- Normalization in `lib/normalize.ts` (`RawListing` → `NormalizedListing`, `parsePriceToCents` helper, Claude API enrichment stub)

## Gotchas (hit personally)

- **Service role key must stay server-only.** Never `NEXT_PUBLIC_`. Will silently break RLS for all users if leaked.
- **Webhooks must be public.** Clerk webhook itself, plus any Stripe / Resend / etc. — `/api/webhooks/*` route group.
- **`<UserButton />` is the lazy win.** Don't hand-roll an account dropdown for an MVP. Drop in the component, ship.
- **Different auth per app.** Overlook portal uses `X-Admin-Key`, GearFlip uses Clerk, three-altitudes is public. Don't import Clerk patterns into Overlook by accident.

## Source citations

Session: `local_2a27ba0d` (full GearFlip dashboard build, public/protected split, ClerkProvider in `layout.tsx`, `<UserButton>` in dashboard header, `usePathname` active state, Supabase RLS with service role bypass).
