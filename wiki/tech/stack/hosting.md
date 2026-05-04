---
title: "Hosting — frontend, backend, edge"
type: tech
tags: [stack, hosting, vercel, cloudflare, fly-io, render, railway]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Hosting

Two sub-decisions. Frontend (Next.js, static, SPAs) is essentially solved for Finn's stack. Backend (FastAPI, long-running compute) is messier and is where the free-tier traps live.

## Pick (free-tier first)

- **Frontend / Next.js: [[vercel]]** Hobby (non-commercial) for personal stuff, Pro for client work. Cloudflare Pages if cost-sensitive or you want the no-credit-card no-bandwidth-cap option.
- **Backend / FastAPI / long-running:** Cloud Run (GCP) or Fly.io paid (~$5/mo) for production; Render free tier for prototyping with the spindown caveat. **Don't default to Railway if cost matters — see traps.**

## Stack at a glance — frontend

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Vercel** | Hobby: 100GB bandwidth, 1M edge requests, 60s function timeout | Hobby is free forever; Pro $20/mo no student discount | Next.js everything. Edge functions, ISR, image optimization. The smoothest DX in the category | Hobby is **non-commercial** — must move to Pro for any client deliverable. Bandwidth alerts at 75% then full cutoff |
| **Cloudflare Pages** | Unlimited bandwidth, 500 builds/mo, 20K files | 1 yr Workers Paid via [Cloudflare for Students](https://www.cloudflare.com/students/) | When bandwidth matters, when commercial use is needed without a paid tier, anything Cloudflare-native | DX rougher than Vercel for Next.js — fewer ISR / image bells |
| **Netlify** | 100GB bandwidth, 300 build min/mo | None direct | Plain static / Jamstack | Outclassed by Vercel for Next.js, by Cloudflare for raw cost |

## Stack at a glance — backend / always-on compute

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Render** | 750 free hours/mo with spindown after 15 min idle | None direct | Cheap prototypes, public APIs that don't mind a cold start | Spindown breaks any timer / cron / webhook expectation. Free Postgres deletes after 30+14d |
| **Fly.io** | No free tier as of 2024+ — small machines ~$3-5/mo | None direct | Small global deployments, geographic edge, anything that benefits from being close to users | Removed free tier; some surprise billing reports in 2024 made the community wary |
| **Cloud Run (GCP)** | 2M requests + 360K vCPU-seconds free **forever** | $300 trial via [GCP for Students](https://cloud.google.com/edu/students) | Stateless APIs, FastAPI in a container, jobs that are bursty | Cold starts on scale-to-zero, networking/IAM overhead steeper than Render |
| **Modal** | $30/mo free credit (hobby) | None | Python ML / batch jobs, anything with GPU | Over-engineered for plain CRUD APIs |
| **Railway** | 30-day $5 trial then $5/mo minimum | Pack lists Railway but no student deal | Painless deploys, "just works" for FastAPI + Postgres + Redis combos. Cheap at scale (per Theo) | **No real free tier.** $5/mo minimum bites if running multiple side projects |
| **Vercel Functions** | Hobby: 100GB-hours, 60s timeout | Same as Vercel | API routes + small handlers next to your Next app | 60s timeout breaks long jobs; cold starts |

## When NOT to use the defaults

- **Need always-on backend, can pay $5-10/mo:** [[railway-deployment]] is still pleasant — Finn already has [[overlook-portal-webapp]] there. Don't migrate without reason.
- **Need scale-to-zero AND no spindown weirdness:** Cloud Run > Render. Render's spindown will break crons.
- **Need geographic edge for an API:** Fly.io still wins for actual global presence; Cloud Run is regional.
- **Client demands a specific cloud (AWS/Azure/GCP):** the free-tier game is mostly over — go where the client is and use credits.

## Worth knowing about

- **Cloudflare Workers** — edge functions free tier is massive (100K req/day). For anything stateless that fits the Workers model, this is the cheapest production deployment available.
- **Bun.sh hosting (early)** — emerging.
- **DigitalOcean App Platform** — Finn has $200 DO credit via the [[student-discounts|GitHub Pack]]. Worth burning the credit for one prototype rather than letting it expire.
- **Fly + Tigris (object storage on Fly)** — lower-cost S3 alternative when you need files.

## Avoid / paid-default trap

- **Heroku** — even with the [[student-discounts|$13/mo Pack credit for 24 months]], the workflow has aged. Use the credit only as fallback if Render/Railway misbehave.
- **AWS Lightsail / EC2 for hobby** — minimum viable cost is higher than the alternatives. Only with client mandate.
- **Vercel Pro on personal projects "just because"** — $20/mo per project category. Stay on Hobby until you need Pro features.

## Finn's current pick (as of 2026-04-29)

- **Frontend:** [[vercel]] Hobby for everything personal, Pro for client work that needs the team / analytics tier. ~15 deploys live.
- **Backend:** [[railway]] for [[overlook-portal-webapp]] FastAPI (existing, stable, not migrating). For new backends → Cloud Run + DO credit until exhausted.
- **Edge / cron / utility functions:** Cloudflare Workers when the use case fits (static-friendly, no DB connection pooling needed).

## Used by

Projects currently deployed:

**Frontend on [[vercel]]:**
- [[three-altitudes]] (`three-altitudes.vercel.app`)
- [[overlook-portal-webapp]] (`overlook-webapp.vercel.app`)
- [[gearflip]]
- [[somliøya]]
- [[waveshade]]
- [[copper-and-cast]]
- [[johnson-aviation]] (`jacair.com`)
- [[finn-bennett-dotcom]] (unfinished)
- [[grannen-lodge-main]] (deployed)
- [[rustler-yachts-redesign]] (deployed)
- [[finn-v2-portfolio]] (deployed)
- [[overlook-strategy-final-v1-main]] (deployed)
- [[overlook-invoice-pay]] (deployed)
- [[overlook-audio-site]] (deployed)
- [[metacheck]] (deployed)

**Backend on [[railway]]:**
- [[overlook-portal-webapp]] FastAPI

## See also

- [[student-discounts]] · [[vercel]] · [[railway]] · [[vercel-deployment]] · [[railway-deployment]] · [[cowork-sandbox-limits]]
- External: [Vercel pricing](https://vercel.com/pricing) · [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) · [Render free tier](https://render.com/docs/free)
