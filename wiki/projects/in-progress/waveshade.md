---
title: "Waveshade"
type: project
status: active
tags: [ecommerce, ventura, medusa, nextjs, stripe]
created: 2026-04-24
updated: 2026-04-28
weight: high
node_size: 10
sources: [waveshade-storefront, cc-batch-a]

# --- life-os-daily contract ---
revenue_type: speculative
revenue_score: 5
effort_score: 5
roi_score: 3
icon: "🕶️"
area: strategy
last_touched: 2026-04-22
next_action: "Content pass — product photography, copy, about page — before launch"
blocker: ""
---

## Next Action

Content pass: product photography, copy, about page. Then verify Stripe webhook round-trip in production before domain swap.

## Blockers

- None blocking development — content pass is the only remaining work before launch.

## TL;DR

Ventura-based sunglasses e-commerce. Medusa backend feeding a Next.js storefront, with Stripe checkout and an admin dashboard wired up.

## Stack

- Medusa (backend)
- Next.js (App Router) storefront
- Stripe for payments
- pnpm workspace, clean install
- Private GitHub repo: `sharkfinnhoohaha/waveshade`
- Vercel project: `waveshade-storefront-oh5ubzxvr-sharkfinnhoohahas-projects.vercel.app`

## Status detail

Vercel `waveshade-storefront` READY as of 2026-04-22. Admin dashboard built, Stripe plumbed, deploy playbook written. Storefront is live but still pre-launch — product data, content, and launch assets are the remaining work.

## Last known activity

2026-04-22 — last successful production deploy. Deploy playbook committed alongside.

## Current active work + next TODO

- Content pass: product photography, copy, about page
- Verify Stripe webhook round-trip in production
- Inventory / order fulfillment ops
- Domain swap from `*.vercel.app` to real `waveshade.*` when branding is locked

## Related

- [[overlook-strategy]] — likely in-house Overlook product/brand
- [[stripe]] — payments
- [[medusa]] — commerce backend

## Sources

- Vercel project `waveshade-storefront`
- GitHub `sharkfinnhoohaha/waveshade` (private)
- CC extract: `raw/_extracts/cc-batch-a.md`
