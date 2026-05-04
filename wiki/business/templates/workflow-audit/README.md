---
title: "Workflow Audit — Templates"
type: business
tags: [overlook-strategy, agentic-services, workflow-audit, templates, index]
created: 2026-04-29
updated: 2026-04-29
weight: medium
node_size: 5
sources: [[agentic-services-positioning]]
---

# Workflow Audit — Templates

Operational templates for running [[workflow-audit-service|Tier 1 of the agentic-services stack]]. Three client-facing artifacts plus one internal playbook.

## What's in here

| File | Purpose | Audience |
|---|---|---|
| [[wiki/business/templates/workflow-audit/proposal|proposal.md]] | One-pager that goes out before the SOW. Sales-flavored, two-page render target. | Client |
| [[wiki/business/templates/workflow-audit/sow|sow.md]] | Statement of Work. Three tiers (Audit / Audit+ / Audit + retainer) plus follow-on Skill Pack and Always-On Retainer election. | Client |
| [[wiki/business/templates/workflow-audit/deliverable|deliverable.md]] | The audit document itself. Shipped at the Friday readout. ~25 pages rendered. | Client |
| [[wiki/workflows/workflow-audit-engagement|engagement playbook]] | Internal day-by-day playbook for running the audit week. (Lives in `wiki/workflows/`, linked here for findability.) | Internal |

## Voice and discipline

Every client-facing template enforces [[brand-voice]]:
- No banned words (crafted, curated, journey, solutions, ecosystem, world-class, best-in-class, seamless, unlock, empower, supercharge, leverage)
- No exclamation points
- No emoji
- Em dashes with spaces, never double dashes
- "We" as the studio, never "our team"
- Short declarative sentences, almost no adjectives

Run a banned-word grep on every personalized copy before sending:

```bash
grep -iE '\b(crafted|curated|journey|solutions|ecosystem|world-class|best-in-class|seamless|unlock|empower|supercharge|leverage)\b' [filename]
```

Should return zero matches. Verbatim quotes from third parties (e.g., a Howie Liu reference) are exempt.

## Personalization checklist

Before any client copy goes out, replace every `[BRACKETED PLACEHOLDER]` and delete every callout block. The templates use these placeholder shapes:

- `[CLIENT NAME]` / `[CLIENT LEGAL NAME]` — display name vs legal entity
- `[PRIMARY CONTACT NAME]` / `[PRIMARY CONTACT TITLE]`
- `[DATE]` / `[DATE RANGE]` / `[MONTH YEAR]`
- `[DOMAIN A/B/C]` — the three workflow domains the audit will cover, scoped on the intake call
- `[INTERVIEWEE 1/2/3 — ROLE]` — confirmed before SOW signing
- `[Workflow N]` / `[Skill name]` — populated during synthesis

## Render targets

- **Proposal:** PDF, two pages max. Letterhead with `OVERLOOK STRATEGY // PROPOSAL` eyebrow at top.
- **SOW:** PDF or DocuSign, multi-page. Section numbering preserved. Signature block on a fresh page.
- **Deliverable:** PDF, ~25 pages. Optional: also send the editable markdown source so the client can excerpt internally.

## Where to put a personalized copy

For each engagement: `clients/[client-slug]/audit-2026-XX-XX/` with the personalized templates inside. Don't edit the templates in `wiki/business/templates/workflow-audit/` — those stay clean for the next engagement.

## Related

- [[agentic-services-positioning]] — parent strategy doc
- [[workflow-audit-service]] — service spec
- [[wiki/workflows/workflow-audit-engagement|engagement playbook]] — internal process
- [[brand-voice]] — voice rules
- [[pricing-and-rates]] — canonical pricing source
