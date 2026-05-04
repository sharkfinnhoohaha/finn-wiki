---
title: "Sentry ingest — April 28, 2026"
type: source
tags: [sentry, monitoring, nextjs, cowork-session]
created: 2026-04-28
updated: 2026-04-28
weight: low
node_size: 2
---

# Sentry ingest — April 28, 2026

**Source type:** Cowork session — user request to write up Sentry and add it to the wiki, cross-linked to existing projects.

**Background:** Finn already had [[sentry]] Pro activated via the GitHub Student Pack (confirmed in [[student-discounts]] — 50K errors/mo, 100K transactions, 1yr renewable). No prior wiki entity page existed. The `sentry-nextjs-sdk` skill had just been installed in the same session (ported from `github.com/getsentry/sentry-for-ai`).

## Pages created

- [[sentry]] (`wiki/entities/sentry.md`) — entity page covering what Sentry does, plan limits, DSN setup convention, and a prioritized list of Finn's projects to instrument
- [[sentry-nextjs-patterns]] (`wiki/tech/sentry-nextjs-patterns.md`) — complete config reference for `@sentry/nextjs` ≥8.28.0: four runtime config files, `withSentryConfig()`, source maps, distributed tracing to Railway, AI Monitoring integration, quota-management via `beforeSend`

## Pages updated

- [[next-js-patterns]] — added "Error monitoring" section + note linking the `try/catch → notFound()` antipattern to Sentry's `onRequestError` fix

## Career/business relevance

Yes — Finn has active client sites and a live AI newsroom ([[pier-and-point]]) with no error visibility. Instrumenting [[overlook-portal-webapp]] is a direct quality-of-service improvement for paying clients. Not surfaced to Finn-OS (no new idea or opportunity — this is implementation infrastructure).
