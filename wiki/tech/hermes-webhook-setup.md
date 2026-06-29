---
title: "Hermes Webhook Setup — Event-Driven Agent Triggers"
type: tech
tags: [hermes, webhooks, tailscale, automation, event-driven, github, stripe, vercel]
created: 2026-06-29
updated: 2026-06-29
weight: medium
node_size: 10
sources: [[hermes-agent]]
status: draft
---

## TL;DR

Webhooks let external services (GitHub, Stripe, Vercel, etc.) push events to Hermes in real time instead of Hermes polling. The webhook platform is already enabled on port 8644 and listening, but needs a public URL (via Tailscale Funnel or custom domain) before external services can reach it. Subscriptions can deliver notifications to Telegram with zero LLM cost using `--deliver-only`.

---

## Current State (2026-06-29)

- **Webhook platform**: enabled, listening on `0.0.0.0:8644`
- **Health check**: `curl http://localhost:8644/health` → `{"status": "ok"}`
- **Subscriptions**: none configured yet
- **Public exposure**: NOT yet exposed — port 8644 is only reachable locally
- **Tailscale Serve**: configured for dashboard only (`kevin.tailcf7e66.ts.net:8443 → 127.0.0.1:9119`)
- **Tailscale Funnel**: not yet enabled for webhook port

---

## How Webhooks Work

Traditional approach: Hermes polls on a schedule (every 10 min, every hour) checking "anything new?". Costs tokens on every check even when nothing changed.

Webhook approach: The external service calls Hermes directly when something happens. No polling, no wasted checks. Event → instant notification.

```
GitHub issue created → POST to Hermes webhook URL → Telegram notification
Stripe payment received → POST to Hermes webhook URL → Telegram notification + auto-mark invoice paid
Vercel build completed → POST to Hermes webhook URL → Telegram notification with status
```

---

## Getting Public — Two Paths

### Path 1: Tailscale Funnel (fastest, free)

One command exposes port 8644 to the public internet:

```bash
tailscale funnel 8644
```

Result: `https://kevin.tailcf7e66.ts.net:8644/webhooks/...` — publicly reachable.

Pros: immediate, free, already installed.
Cons: ugly URL, exposes Tailscale hostname.

### Path 2: Custom Domain (cleaner, still free)

Use one of Finn's domains. Best candidates:

| Domain | Nameserver | Available? |
|---|---|---|
| `overlookstrategy.com` | WordPress.com | In use (site), can add subdomain |
| `ovlk.tech` | Vercel DNS | Available, easy DNS |
| `finnbennett.com` | Vercel DNS | Available |
| `overlookaudio.com` | Vercel DNS | Available |

Setup for `hooks.ovlk.tech` (Vercel DNS):
1. Add A record in Vercel dashboard: `hooks.ovlk.tech → Tailscale Funnel IP`
2. Or use Cloudflare Tunnel for cleaner routing
3. Point external services at `https://hooks.ovlk.tech/webhooks/<name>`

---

## Subscription Setup

### GitHub — new issues and PRs

```bash
hermes webhook subscribe github-issues \
  --events "issues" \
  --prompt "New GitHub issue #{issue.number}: {issue.title}\nBy: {issue.user.login}\n\n{issue.body}" \
  --deliver telegram \
  --deliver-chat-id "6332766830" \
  --deliver-only
```

Then in GitHub repo Settings → Webhooks → Add webhook:
- Payload URL: the returned webhook URL
- Content type: `application/json`
- Secret: the returned HMAC secret
- Events: Issues

### Stripe — payment events

```bash
hermes webhook subscribe stripe-payments \
  --events "payment_intent.succeeded,payment_intent.payment_failed" \
  --prompt "Payment {data.object.status}: ${data.object.amount} from {data.object.receipt_email}" \
  --deliver telegram \
  --deliver-chat-id "6332766830" \
  --deliver-only
```

Then in Stripe Dashboard → Developers → Webhooks → Add endpoint.

### Vercel — deploy notifications

```bash
hermes webhook subscribe vercel-deploys \
  --prompt "Deploy {payload.deploymentState} on {payload.project.name}\nBranch: {payload.meta.githubCommitRef}\nCommit: {payload.meta.githubCommitMessage}" \
  --deliver telegram \
  --deliver-chat-id "6332766830" \
  --deliver-only
```

---

## `--deliver-only` Mode (Zero Tokens)

The `--deliver-only` flag skips the LLM entirely. The `--prompt` template is rendered with the webhook payload fields and sent directly to Telegram as a text message. No agent loop, no tokens consumed.

Use this for:
- Push notifications (GitHub, Stripe, Vercel)
- Monitoring alerts forwarded verbatim
- Any webhook where an LLM round trip would be wasted

For webhooks that need reasoning (e.g., "triage this GitHub issue and suggest a fix"), omit `--deliver-only` and Hermes will run a full agent loop on the payload.

---

## Security

- Each subscription gets an auto-generated HMAC-SHA256 secret
- The webhook adapter validates signatures on every incoming POST
- Subscriptions persist to `~/.hermes/webhook_subscriptions.json`
- The adapter hot-reads this file on each request (mtime-gated)

---

## Hyper Agent Integration

Finn has $1,000 in Hyper Agent credits. Potential webhook use cases:

1. **Hyper Agent → Hermes webhook**: Long-running Hyper Agent tasks POST completion results back to Hermes, which notifies Finn via Telegram.
2. **Hermes webhook → Hyper Agent**: External events trigger Hermes to dispatch work to Hyper Agent via API, with results flowing back.

This requires checking Hyper Agent's webhook/outbound notification capabilities.

---

## Related

- [[hermes-agent]]
- [[tailscale]]
- [[overlook-strategy]]