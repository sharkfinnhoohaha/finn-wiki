---
title: "Transactional email — Resend, Loops, SES"
type: tech
tags: [stack, email, resend, loops, transactional]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# Transactional email

Per Theo's study, Resend has near-monopolistic Claude Code mindshare here, which mostly is right but not always. SendGrid is dead for free tier.

## Pick (free-tier first)

**[[resend]]** — 3,000 emails/mo free, **100/day cap**, one verified domain, 1-day data retention. Best DX in the category, React Email components built-in.

## Stack at a glance

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **Resend** | 3K/mo, 100/day, 1 domain | None direct | Next.js apps using React Email, transactional + a few marketing | 100/day cap hits before 3K/mo for spiky workloads. 1-day log retention bites debugging |
| **Loops** | Free tier exists, generous batch | None | Transactional + marketing in one product. Better marketing UI than Resend | Newer, smaller community |
| **AWS SES** | $0.10/1K emails (no free tier) | Pack credits indirect | Cheapest at scale (>10K/mo) | Setup is AWS-flavored. Bounce/complaint handling is on you |
| **Postmark** | Trial only | None | Premium deliverability for high-stakes mail (transactional only) | Paid-only now |
| **SendGrid** | Killed free tier 2024 | None | — | No reason to use in 2026 |
| **Mailgun** | Trial only | None | — | Deliverability still solid, but no free tier |

## Marketing-only (separate decision from transactional)

| Tool | Free tier | Student deal | Sweet spot | Trap |
|---|---|---|---|---|
| **MailerLite** ([[mailerlite]]) | 1K subscribers, 12K emails/mo | None | Newsletter + automations. Finn already uses this | Email designer dated; some UI quirks |
| **Loops** | See above | None | Same vendor for transactional + marketing |
| **ConvertKit / Kit** | 10K subs free (recent change) | None | Creator newsletters, RSS-driven |
| **Buttondown** | Free up to 100 subs | None | Plain-text-feel newsletters, Stripe paid newsletters |

## When NOT to use the default (Resend)

- **You've grown past 3K/mo and don't want to pay $20/mo for the next tier** → AWS SES is dramatically cheaper at any volume above ~10K/mo. The setup pain pays back.
- **You need transactional + marketing in one place** → Loops. Avoids the "sending happy birthday from Resend, transactional from Resend, but campaigns from MailerLite" mess.
- **Compliance-heavy industry** (medical, financial) → Postmark or a SOC 2 / HIPAA-compatible provider. Resend got SOC 2 in 2024 but verify current status.

## Worth knowing about

- **React Email** (made by Resend team) — works with any provider, including SES. Don't conflate "I want React Email components" with "I must use Resend."
- **MailerSend** — sister product to MailerLite for transactional. If Finn already has MailerLite, MailerSend has integration that might be worth the convenience over Resend.
- **Email warmup services** (Mailwarm, Lemwarm) — only relevant if cold-emailing for sales, not transactional.

## Avoid / paid-default trap

- **SendGrid** — see above.
- **Mandrill** — Mailchimp's transactional product. Pricing model has been hostile for years.
- **Setting up your own SMTP** for outbound transactional in 2026 → don't. Deliverability is a full-time job.

## Finn's current pick (as of 2026-04-29)

- **No transactional email in production today.** [[overlook-portal-webapp]] sends one-off invoice emails via [[wave]] and Wave handles its own delivery.
- **MailerLite** for [[overlook-strategy]] marketing list (already wired, MCP connected).
- **For new projects** that need transactional → Resend. If a project might cross 3K/mo (unlikely) → start on Loops directly to avoid migration.

## Pier and Point note

If [[pier-and-point]] grows to a daily newsletter, it would push past Resend's 100/day cap quickly. Plan for Loops or SES from day one if subscriber count is realistic.

## Used by

No transactional email currently in production across Finn's projects.

- [[overlook-strategy]] — marketing list via [[mailerlite]] (not transactional)
- [[overlook-invoice-pay]] — invoice send via [[wave]] (Wave handles its own delivery)
- [[pier-and-point]] — newsletter via [[beehiiv]] (planned), no transactional email yet
- [[gearflip]], [[ventura-forward-app]] — auth flows currently rely on [[clerk]] / [[supabase]] sending; no custom transactional needed yet

When a project crosses 100 users + needs custom transactional → revisit this page.

## See also

- [[student-discounts]] · [[mailerlite]] · [[stack/auth]] (passwordless flows need transactional email)
- External: [Resend pricing](https://resend.com/pricing) · [Loops pricing](https://loops.so/pricing) · [AWS SES pricing](https://aws.amazon.com/ses/pricing/)
