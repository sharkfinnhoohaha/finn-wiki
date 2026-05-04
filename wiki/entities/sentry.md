---
title: "Sentry"
type: entity
tags: [monitoring, error-tracking, observability, nextjs, tooling, devops]
created: 2026-04-28
updated: 2026-04-28
weight: medium
node_size: 10
sources: [[sentry-ingest-2026-04-28]]
---

# Sentry

Error monitoring and observability platform. Captures unhandled exceptions, slow transactions, session replays, and structured logs — and ties them back to specific releases, users, and traces so you know exactly what broke, for whom, and why.

**Finn has it: 1-year Pro equivalent** via GitHub Student Pack (see [[student-discounts]]). 50K errors/mo, 100K transactions, 1GB attachments, 3 team members. Renews with annual Pack re-verification. See the plan limits note below before instrumenting too aggressively.

## What it actually does

| Feature | What you get |
|---|---|
| **Error Monitoring** | Stack traces with source maps, breadcrumbs leading up to the error, local variable values at crash time. Catches both client and server errors. |
| **Tracing** | Distributed traces across browser → Next.js server → backend API. You can see a slow Vercel function call and trace it through to the Railway FastAPI query that caused it. |
| **Session Replay** | Video-like replay of what the user was doing before an error. Masked by default. Invaluable for "works on my machine" bugs. |
| **Logging** | `Sentry.logger.info/warn/error()` ties log lines directly to traces. Not a replacement for console.log in dev — for production triage. |
| **Profiling** | Continuous CPU profiling for Next.js server routes. Requires `Document-Policy: js-profiling` header for client-side. |
| **Crons** | Pings Sentry when a scheduled job runs; alerts if it misses its window or errors. Useful for [[pier-and-point]]'s Inngest/cron pipelines. |
| **AI Monitoring** | Instruments OpenAI / Vercel AI SDK / Anthropic calls. Captures token counts, latency, and errors per-LLM-call. Relevant for any AI features in the [[overlook-portal-webapp]]. |

## Plan limits (GitHub Pack)

50K errors/month sounds like a lot, but a single misconfigured retry loop or a noisy `console.error` wrapped in `Sentry.captureException` will blow past it fast. Strategies:

- Set `tracesSampleRate: 0.1` in production (10% of transactions). 100% in dev.
- Use `beforeSend` to filter known-noisy errors (e.g. network errors from bots, ad-blocker interference) before they count against quota.
- Session Replay quota is lower than commercial Pro — enable `replaysSessionSampleRate: 0.1` (10% of sessions), `replaysOnErrorSampleRate: 1.0` (100% of error sessions).

## DSN setup convention

Use two env vars to keep browser and server separate:

```
NEXT_PUBLIC_SENTRY_DSN=   # browser bundle (public, committed)
SENTRY_DSN=               # server/edge (secret, .env.local only)
SENTRY_AUTH_TOKEN=        # source map uploads (secret, .env.sentry-build-plugin)
SENTRY_ORG=               # org slug
SENTRY_PROJECT=           # project slug per-repo
```

`.env.sentry-build-plugin` should be in `.gitignore`. The auth token goes in Vercel environment variables for CI source map upload.

## Setup

See [[sentry-nextjs-patterns]] for the complete config file set. For the full wizard + manual setup guide, the `sentry-nextjs-sdk` skill is installed — invoke it when you're ready to wire up a project.

The wizard (`npx @sentry/wizard@latest -i nextjs`) handles the full setup interactively — org selection, file creation, `next.config.ts` wrapping, source maps. You run it yourself in terminal since it needs browser login.

## Projects to instrument — prioritized

### Highest value (wire these up first)

**[[overlook-portal-webapp]]** — most to gain. Client-facing, FastAPI backend on Railway, Ollama RAG, `portal_token` auth quirks. The session-debrief from `local_dec9a139` documented a `try/catch → notFound()` masking a 500 that would have been caught immediately with Sentry. Server-side errors, slow Railway queries, and the AI summary pipeline are all ideal targets. Distributed tracing would span Vercel → Railway.

**[[pier-and-point]]** — AI newsroom with real publish consequences. A silent article pipeline failure or a hallucination-gate crash needs immediate visibility. Inngest cron jobs are a natural fit for Sentry Crons monitoring. AI Monitoring integration with the Kimi/Claude hybrid pipeline would give per-LLM-call latency data.

**[[three-altitudes]]** — Finn's portfolio, public-facing, complex Three.js + GLSL + Sanity stack. Three.js WebGL errors are notoriously silent in production. Session Replay would be invaluable for debugging scroll-stage transition bugs.

### Good second tier (client sites with SLAs)

- **[[somliøya]]** — paying client site, Next.js + TinaCMS. Error monitoring only is fine here; no tracing needed.
- **[[johnson-aviation]]** — same story, client site.
- **[[grannen-lodge-main]]** — deployed, client-owned.
- **[[gearflip]]** — paused, but has Clerk auth + Shopify integration. When it resumes, Sentry goes in before Clerk users touch it.

### Lower priority

- **[[ventura-forward-app]]** — civic app, Supabase, moderate complexity.
- **[[finn-v2-portfolio]]** — will be superseded by three-altitudes; low ROI to instrument.

## Source maps — non-negotiable

Without source maps, production stack traces show minified code like `e.c is not a function at bundle.js:1:84291`. Useless. Wire up `SENTRY_AUTH_TOKEN` and `widenClientFileUpload: true` in `withSentryConfig()` on every project you actually care about debugging.

Source map upload happens automatically on `next build`. No CI changes needed beyond the env var.

## Related pages

- [[sentry-nextjs-patterns]] — complete config file set for Next.js App Router + Pages Router
- [[student-discounts]] — where the Pro plan comes from, renewal conditions
- [[next-js-patterns]] — the broader Next.js cheat sheet; error handling section references Sentry
- [[vercel-deployment]] — where most frontends live
- [[railway-deployment]] — FastAPI backend; Sentry distributed tracing bridges the two
- [[overlook-portal-webapp]], [[three-altitudes]], [[pier-and-point]] — highest-priority instrumentation targets
