---
title: "Clerk"
type: entity
tags: [tool, service, auth, identity]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-2a27ba0d]]
---

# Clerk

Hosted auth/identity service. Finn uses it on [[gearflip]]. The other auth pattern in his stack is the `X-Admin-Key` header used on [[overlook-portal-webapp]] — those two cover his needs (Clerk for user-facing apps, header for admin internal).

## How it's used (GearFlip)

- Wired into Next.js `layout.tsx`
- Middleware splits public (`/`, `/sign-in`, `/sign-up`, `/api/webhooks/*`) vs protected
- `<UserButton>` component dropped into the dashboard header
- Pairs with [[supabase]] for data — Clerk handles identity, Supabase RLS gates rows

## See also

- [[gearflip]]
- [[supabase]]
- [[overlook-portal-webapp]]
