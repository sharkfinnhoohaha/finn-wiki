---
title: "Payments — Stripe, Lemonsqueezy, Polar"
type: tech
tags: [stack, payments, stripe, lemonsqueezy, polar, mor]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Payments

Theo's study shows Claude defaults to Stripe 91% of the time. That's almost always right, but the Merchant of Record (MoR) alternatives matter for solo / international / SaaS-tax situations.

## Pick (free-tier first)

**[[stripe]].** No monthly fee, only transaction fees (2.9% + 30¢ US). Unlimited test mode. Best DX, biggest ecosystem, every framework has integration. **The only reason to use anything else is sales tax / VAT pain.**

## Stack at a glance

| Tool | Cost | MoR? | Sweet spot | Trap |
|---|---|---|---|---|
| **Stripe** | 2.9% + 30¢, no monthly | No (you're the merchant) | Anything Finn would build today | YOU handle sales tax / VAT in every jurisdiction. Painful past ~$10K MRR |
| **Lemonsqueezy** | 5% + 50¢, no monthly | **Yes** — they handle tax | Digital products, SaaS, ebooks. International by default | Higher fee, slightly less polished checkout |
| **Polar.sh** | 4% + 40¢, no monthly | Yes | Open-source friendly, dev-tooling ergonomics, GitHub Sponsors-ish | Newer, smaller |
| **Paddle** | ~5% + 50¢ | Yes | SaaS at scale, B2B billing | Heavier integration, opinionated checkout |
| **Stripe Atlas + Tax** | Stripe + ~$120/yr Tax | Stripe handles tax via Tax product | Once you outgrow MoR's higher fee | Adds Stripe Tax cost on top of base fees |
| **Square** | 2.6% + 10¢ in-person | No | In-person Overlook Strategy / pop-ups | Worse online checkout than Stripe |
| **Wave** ([[wave]]) | Invoicing free, 2.9% + 60¢ ACH | No | Invoicing for client work — Finn already uses this | Not for self-serve checkout, just invoicing |

## Merchant of Record explainer

If you sell to anyone outside the US, sales tax / VAT becomes its own job. MoRs (Lemonsqueezy, Polar, Paddle) **are the seller of record on the customer's receipt** — they collect, remit, and audit on your behalf. You take the higher fee in exchange for never thinking about tax. For broke-solo-dev, the math: pay the extra 1-2% to skip tax compliance entirely.

## When NOT to use the default (Stripe)

- **Selling digital downloads / courses / ebooks internationally** → [[lemonsqueezy]]. The tax handling alone is worth the higher fee.
- **Building an open-source funding flow / sponsorship-adjacent thing** → [[polar.sh]]. GitHub-native.
- **In-person at a Ventura pop-up / Overlook Strategy meet-and-greet** → Square. Stripe Terminal exists but Square is friendlier.
- **Already invoicing through [[wave]]** → don't add Stripe just for client invoicing. Wave handles credit cards already.

## Worth knowing about

- **Stripe `student-discount`** — Pack offer waives transaction fees on the **first $1,000 in revenue processed** (~$30 in savings, not $1,000). Modest, but worth claiming once.
- **Autumn** — emerging Stripe alternative, less battle-tested. Worth tracking but not for production yet.
- **Mercury** — banking-side, not payments-processing. Pairs with Stripe for payouts to a US business bank account.

## Avoid / paid-default trap

- **PayPal-only** — for B2B in the US, Stripe is cleaner; PayPal as an *option* is fine, PayPal as the *only* method is friction.
- **Building your own payment retry / dunning logic** when Stripe Billing exists. Use Stripe Billing or Recur from day one for any subscription.
- **Apple In-App Purchase** if you can route around it — only required for iOS-shipped subscriptions. Web flows can use Stripe.

## Finn's current pick (as of 2026-04-29)

- **[[wave]]** for client invoicing (Overlook Strategy). MCP connected, integrated workflow.
- **No self-serve payments live in any project right now.** When [[gearflip]] or any future SaaS ships → Stripe first.
- **If [[pier-and-point]] adds a paid tier** → Lemonsqueezy or Polar to skip tax setup, especially since some Ventura subscribers may be international.

## Used by

- [[waveshade]] — [[stripe]] for storefront checkout (Medusa + Next.js)
- [[overlook-invoice-pay]] (deployed) — [[wave]] for client invoicing
- [[overlook-strategy]] — [[wave]] for all Overlook Strategy client invoicing
- [[gearflip]] — no payments wired yet (auth + DB first)

## See also

- [[student-discounts]] · [[wave]] · [[stripe]] · [[stack/auth]]
- External: [Stripe pricing](https://stripe.com/pricing) · [Lemonsqueezy pricing](https://www.lemonsqueezy.com/pricing) · [Polar pricing](https://polar.sh/pricing)
