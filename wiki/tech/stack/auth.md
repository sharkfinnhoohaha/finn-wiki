---
title: "Auth — Clerk vs better-auth vs the rest"
type: tech
tags: [stack, auth, clerk, better-auth, nextauth, workos]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Auth

The category that has consolidated fastest in 2025-2026. Auth.js (formerly NextAuth) folded into [[better-auth]] for new projects, Clerk's free tier got friendlier (50K MAU), and WorkOS owns enterprise SSO end-to-end.

## Pick (free-tier first)

- **Default for any Next.js project:** [[clerk]] free tier (50K MAU as of 2026 — was 10K).
- **If you don't want a vendor in the auth path at all:** [[better-auth]], self-hosted, MIT.
- **If you have an existing NextAuth/Auth.js codebase:** stay there for now; migrate to better-auth when you're touching auth code anyway.

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Clerk** | 50K MAU + free SSO (limited) | ⚠ Free Pro via [[student-discounts\|Pack]] but **phone/SMS auth excluded**, 10K MAU production cap (commercial use) | Next.js apps that need SSO, MFA, user management UI on day one | Pre-built UI is great until you need to deeply customize. Migrating off Clerk later = rebuilding auth UI |
| **better-auth** | Free, MIT, self-hosted | None applicable | Anything where you want the auth code in your repo. The migration path Auth.js itself recommends | You build the UI. Plan for 1-3 days of polish work |
| **Auth.js (NextAuth)** | Free, self-hosted | None | Existing NextAuth codebases (don't rip it out preemptively) | New projects: maintainers themselves point to better-auth |
| **Supabase Auth** | Free with Supabase | Some Pack deals | Already on Supabase for DB | Couples auth to a vendor that also wants to be your DB. RLS state in dashboard, not code |
| **WorkOS** | Free up to 1M MAU | Free for Open Source orgs | Enterprise SSO (SAML, SCIM, directory sync), B2B with admin portals | Overkill for individual / consumer apps |
| **Stytch** | Limited free | None | When you want to roll passwordless / passkeys without building UI | Smaller community, more lock-in than Clerk |
| **Lucia** | Free, lightweight | None | Roll-your-own with helpers, not a full framework | Was archived in 2024-2025; better-auth absorbed most of the audience |

## When NOT to use the default (Clerk)

- **You're building B2B with enterprise customers** → [[workos]]. Clerk has SSO but not the directory-sync / SCIM depth WorkOS has.
- **The auth path needs to be fully in-repo / no third party** (compliance, paranoia, future-proofing) → [[better-auth]].
- **You're already on Supabase** → use Supabase Auth for the simplicity, accept the coupling.
- **Personal hobby project where you just want a magic link** → [[better-auth]] or even hand-rolled with Resend. Don't add Clerk overhead.

## Worth knowing about

- **Passkeys are the new default.** Clerk, better-auth, Stytch all support them; build new auth flows with passkeys as the primary path.
- **Magic links + Resend** — for any internal tool with <50 users, you don't need an auth provider at all. Hand-roll it in an evening.
- **Cal.com auth** — if you ever build something Cal-adjacent, their open-source auth flow is worth borrowing patterns from.

## Avoid / paid-default trap

- **Auth0** — owned by Okta. Pricing has hardened. Free tier is real but the upgrade cliff is brutal.
- **Firebase Auth** — fine if you're already on Firebase, but adds Firebase to your stack just for auth is overkill.
- **Building from scratch with bcrypt + sessions** — for a real product, the time you spend on edge cases (password reset, email verification, SSO requests, MFA, account recovery) eats more than Clerk's free tier ever would.

## Finn's current pick (as of 2026-04-29)

- **[[gearflip]]** uses Clerk — keep. Don't migrate.
- **[[overlook-portal-webapp]]** uses `X-Admin-Key` header pattern (single-admin, fine for now). See [[clerk-auth-pattern]] for the contrast.
- **For new projects:** Clerk free tier first. If the project might cross 50K MAU or needs phone auth, evaluate better-auth before launch (cheaper to start free than to migrate later).

## Pack-specific notes

The [[student-discounts|GitHub Student Pack]] gives Clerk Pro free, but **phone/SMS auth is excluded** — that's normally Clerk Pro's headline feature. So the Pack version of Clerk is essentially "free tier + a few dashboard niceties." If you need SMS, the Pack doesn't help.

## Used by

- [[gearflip]] — [[clerk]] (see [[clerk-auth-pattern]] for the integration)
- [[overlook-portal-webapp]] — `X-Admin-Key` header pattern (single-admin, custom — not Clerk)
- All other Finn projects — currently no auth (static sites, marketing pages, internal tools)

## See also

- [[student-discounts]] · [[clerk]] · [[clerk-auth-pattern]] · [[stack/email-transactional]]
- External: [Clerk pricing](https://clerk.com/pricing) · [better-auth](https://better-auth.com/) · [WorkOS pricing](https://workos.com/pricing)
