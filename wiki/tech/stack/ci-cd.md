---
title: "CI/CD — Actions, Depot, Blacksmith"
type: tech
tags: [stack, ci-cd, github-actions, depot, blacksmith]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# CI/CD

Per the Theo study, 94% of Claude Code's CI picks are GitHub Actions. That's right for almost every Finn project. The only reason to deviate is build speed pain.

## Pick (free-tier first)

**GitHub Actions.** 2,000 free minutes/mo on private repos, **unlimited on public repos**. For Finn's mix (mostly small, mostly Next.js, mostly Vercel auto-deploying so CI is just lint + tests), free tier is essentially infinite.

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **GitHub Actions** | 2K min/mo private, unlimited public | Pack ups quotas | Default for everything Finn does | Macs/ARM minutes burn the quota fast (use Linux runners) |
| **Depot** | Free tier generous (100 min) | None direct | Docker builds 2-10× faster than Actions, layer caching across runs | Pricing past free tier ramps |
| **Blacksmith** | Free tier on Linux | None | Drop-in replacement for Actions runners, faster + cheaper | Smaller ecosystem; needs migration |
| **RWX (Mint)** | Paid only | None | Powerful task graph DAG, parallelization | No free tier, complex |
| **Vercel CI** | Built into Vercel deploys | None | Already happening if you deploy on Vercel | Not really CI, just deploy automation |

## When NOT to use the default (GitHub Actions)

- **Docker builds are the bottleneck and you've already optimized layers** → switch to [[depot]]. 2-10× speedup on cold builds.
- **Self-hosted runner makes sense** (heavy compute, sensitive secrets, GPU jobs) → run a runner on Cloud Run / Railway. Free for public repos already.
- **You need parallel matrix jobs that share artifacts cleanly** → RWX is the only one designed around a real DAG, but it's paid.

## Worth knowing about

- **Vercel deploy = CI for most Next.js apps.** Don't add an Actions workflow to lint + build + deploy if Vercel already does it. Add Actions for tests / type-check / security scans.
- **CodeRabbit / Cubic** — AI code review GitHub Apps. Free for public repos, useful for solo dev where there's no human reviewer.
- **act** (`nektos/act`) — run GitHub Actions workflows locally before pushing. Saves the 30-second feedback loop of "push → wait → fail."

## Avoid / paid-default trap

- **CircleCI / TravisCI / Jenkins** — outclassed by Actions on every dimension that matters for Finn's stack. Only relevant if a client mandates them.
- **Buildkite** — great product, no free tier worth using for solo work.

## Finn's current pick (as of 2026-04-29)

- **GitHub Actions** for any test / lint / type-check workflow.
- **Vercel auto-deploy** is the actual CD step for everything frontend.
- **Railway auto-deploy** for [[overlook-portal-webapp]] backend.
- **No Docker-heavy projects right now**, so no Depot need yet. Revisit if [[riptide]] firmware build pipeline lands here.

## Used by

CI/CD is implicit in every Finn web project — [[vercel]] auto-deploys from `main`, and any custom workflows live in `.github/workflows/`. Specific projects with non-trivial CI:

- [[overlook-portal-webapp]] — Vercel auto-deploy + [[railway-deployment]] for backend
- [[three-altitudes]] — Vercel auto-deploy from `norm` branch (verify in project settings)
- [[gearflip]] — Vercel auto-deploy
- All other deploys — Vercel auto-deploy default

Custom GitHub Actions workflows: not currently in production. Add when [[riptide]] firmware build pipeline lands or when a project needs scheduled jobs.

## See also

- [[student-discounts]] · [[stack/hosting]] · [[vercel-deployment]]
- External: [GitHub Actions billing](https://docs.github.com/en/actions/concepts/billing-and-usage) · [Depot](https://depot.dev) · [Blacksmith](https://blacksmith.sh)
