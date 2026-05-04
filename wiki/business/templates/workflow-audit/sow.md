---
title: "Workflow Audit — Statement of Work Template"
type: business
tags: [overlook-strategy, agentic-services, workflow-audit, template, sow, contract, client-facing]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[agentic-services-positioning]], [[workflow-audit-service]]
---

> [!note] Internal note
> This is the **Statement of Work template** for the Workflow Audit (Tier 1) and its follow-on tiers. Voice rules: [[brand-voice]] applies. Replace every `[BRACKETED PLACEHOLDER]` and delete this callout before sending. Companion files: [[wiki/business/templates/workflow-audit/deliverable|deliverable]], [[wiki/business/templates/workflow-audit/proposal|proposal]], [[wiki/workflows/workflow-audit-engagement|engagement playbook]]. Not legal advice — Finn should run any version of this through counsel before the first signed engagement, particularly the IP / confidentiality / liability sections.

---

```
OVERLOOK STRATEGY // STATEMENT OF WORK
WORKFLOW AUDIT — [CLIENT NAME] — [DATE]
```

# Statement of Work

## Workflow Audit and Optional Follow-On Engagement

This Statement of Work ("SOW") is between **Overlook Strategy LLC** ("the studio"), a California limited liability company with offices at [STUDIO ADDRESS], Ventura, California, and **[CLIENT LEGAL NAME]** ("the client"), with offices at [CLIENT ADDRESS]. It is dated [DATE] and governs the engagement described below.

This SOW operates under, and is incorporated into, the parties' Master Services Agreement dated [MSA DATE] where one exists. Where no MSA exists, the terms in §10 of this SOW apply.

---

## 1. Engagement summary

The studio will conduct a one-week Workflow Audit of the client's recurring white-collar workflows, deliver a written audit document, and propose one of three forward paths. If the client elects a follow-on engagement (Skill Pack Build or Always-On Retainer), this SOW addresses both tiers.

---

## 2. Scope

### 2.1 Tier 1 — Workflow Audit (always included)

The studio will:

- Conduct one ninety-minute intake call with the client's primary contact
- Conduct three sixty-minute interviews with client-nominated staff covering [DOMAIN A], [DOMAIN B], and [DOMAIN C]
- Review up to ten documents nominated by the client
- Map the client's recurring workflows against current frontier-agent capability
- Identify three to five candidate workflows for automation
- Prototype one rubric for one candidate skill
- Deliver a written audit document at the readout call
- Conduct one sixty-minute readout call to walk the document and discuss next-step paths

### 2.2 Tier 2 — Skill Pack Build (added on client election)

If the client elects Tier 2 in Section 11, the studio will additionally:

- Build [3 / 5 — pick tier] pinned skills inside the client's [overlook-portal-webapp / new-instance] portal, gated behind a per-skill master switch
- Build one rubric per skill, scored on three named dimensions per the audit deliverable
- Provision the connectors named in §2.4 below
- Build the portal Agents tab as a [read-only / read + manual trigger / full command center — pick tier] surface
- Conduct one sixty-minute walkthrough so the client's team can operate the skills without the studio
- Deliver source documentation, skill bodies, and rubric configurations inside the portal

### 2.3 Tier 3 — Always-On Retainer (added on client election)

If the client elects Tier 3 in Section 11, the studio will additionally, on a recurring monthly basis:

- Operate the fleet on the client's behalf — manual triggers, scheduled runs, and exception handling for skills shipped under Tier 2 and any added under the retainer
- Conduct monthly rubric reviews and remediate skill drift
- Author one new skill per quarter at no additional charge (additional skills priced under §3.4 below)
- Conduct quarterly model audits — re-test every rubric against the current frontier-model release and adjust thresholds where required
- Deliver a monthly cost-and-quality report inside the client's portal
- Bill per-task line items for one-off novel work outside the standing skill set, at the rates in §3.4

### 2.4 Connectors and integrations (Tier 2+)

Connectors required for the candidate skills are listed in the audit deliverable. The studio configures OAuth or API-key integrations for each. Where a connector requires the client's own subscription or seat (e.g., Slack, Notion, Granola, the client's email provider), the client provides credentials. Where a connector requires a custom integration, the studio builds it at the rate in §3.4.

---

## 3. Investment

All amounts in US dollars. Infrastructure costs (model API tokens, embedding services, hosting beyond the studio's existing portal capacity) pass through at cost. The studio does not mark up infrastructure.

### 3.1 Tier 1 — Workflow Audit

| Tier | Scope | Investment |
|---|---|---|
| Audit | Five business days, one written document, three forward-path options | $1,500 |
| Audit+ | Five business days plus a follow-up working session and one revision pass on the deliverable | $3,000 |
| Audit + retainer | Audit+ scope plus three months of advisory at [$750] / month for ongoing follow-up | $3,000 + $750 / month |

[Pick one and strike the others.]

### 3.2 Tier 2 — Skill Pack Build

| Tier | Skills | Connectors | Rubric | Portal | Investment | Timeline |
|---|---|---|---|---|---|---|
| Starter | 3 pinned | 2 OAuth | 1 dimension, 1 model | Read-only | $7,500 | 3 weeks |
| Standard | 5 pinned | 4 OAuth + 1 custom | 3 dimensions, ensemble | Read + manual trigger | $11,500 | 3 weeks |
| Showcase | 5 pinned + 1 always-on | 6 OAuth + 2 custom | Full rubric panel | Full command center | $15,000 | 3 weeks |

[Pick one and strike the others. Or strike the table entirely if the client elects Path A.]

### 3.3 Tier 3 — Always-On Retainer

| Tier | Fleet size | Includes | Monthly investment |
|---|---|---|---|
| Standard retainer | 3 skills | Monthly rubric review, drift remediation, monthly report, infra pass-through, 5 hours/month of operator time | $1,500 / month |
| Standard+ retainer | 5 skills | Above + one new skill per quarter, custom MCP if needed, 10 hours/month | $2,500 / month |
| Operator retainer | 5+ skills | Above + Slack-deployed agents, always-on listening, 20 hours/month, fractional CTO posture | $4,000 / month |

[Pick one and strike the others.]

### 3.4 Per-task line items and out-of-scope work

| Line item | Rate |
|---|---|
| Custom skill authorship outside the retainer scope | $1,500 / skill (typical) |
| Per-run charges for novel one-off work | $50–$200 / run, value-anchored |
| Custom connector or MCP server build | $2,500 / connector |
| Additional interviews beyond Tier 1 scope | $250 / interview |
| Out-of-scope advisory hours | $200 / hour |

### 3.5 Infrastructure pass-through (Tier 2+)

The studio passes through at cost: model API charges (Claude, Kimi, embedding APIs), Vercel AI Gateway charges, Mastra or Inngest seat costs if added, additional Postgres or pgvector storage, and any third-party API surcharges incurred on the client's behalf. The studio reports actual usage monthly inside the portal. Estimated monthly run-rate at audit time: $[N] / month.

---

## 4. Timeline

### 4.1 Tier 1 — five business days

| Day | Activity |
|---|---|
| Mon | Intake call, scope confirmation |
| Tue | Two staff interviews + document review |
| Wed | One staff interview + synthesis begin |
| Thu | Synthesis, rubric prototype, deliverable assembly |
| Fri | Sixty-minute readout, deliverable handoff |

### 4.2 Tier 2 — three weeks from kickoff

| Week | Milestones |
|---|---|
| Week 1 | Portal Agents tab build, skill bodies drafted, connectors provisioned |
| Week 2 | Rubrics built, judge configured, dry-run pass |
| Week 3 | Backtest against thirty historical outputs, walkthrough call, handoff |

### 4.3 Tier 3 — monthly cadence

Recurring monthly. Quarterly model-audit milestones at the start of each calendar quarter. New-skill quota resets quarterly.

---

## 5. Deliverables

### 5.1 Tier 1

1. Written audit document (markdown + PDF rendering) delivered at the Friday readout
2. Workflow inventory (table, all observed workflows)
3. Jaggedness map (visual, two-axis sort)
4. Candidate-skill shortlist (3–5 ranked)
5. One example rubric, fully specified
6. Three forward-path recommendations
7. Two appendices: workflow detail and interview notes

### 5.2 Tier 2

1. Pinned skills (count per tier) live inside the client's portal
2. One rubric per skill, configured with thresholds, judge, and logging
3. Portal Agents tab live, gated by master switch
4. Source documentation: skill bodies, rubric configs, prompts, connector configs, all checked into the studio's repository
5. Backtest report: every skill scored against thirty historical or synthetic inputs before going live
6. Sixty-minute walkthrough recording
7. The audit deliverable updated with as-built notes

### 5.3 Tier 3

1. Monthly rubric review (written summary inside the portal)
2. Monthly cost-and-quality report (chart + commentary)
3. Quarterly model-audit report
4. New-skill deliverable per quarter (skill body + rubric + walkthrough)
5. Monthly thirty-minute operator call with the client's primary contact

---

## 6. Acceptance

The audit deliverable is accepted when the client signs the acceptance section of the deliverable document or thirty calendar days after delivery, whichever is sooner. Skill Pack deliverables are accepted skill-by-skill — each skill is accepted when its rubric backtest passes the dimension thresholds against thirty inputs and the client's primary contact signs off. Retainer deliverables are accepted on a rolling monthly basis.

If the studio fails an acceptance check, the studio remediates within five business days at no additional charge. If two consecutive acceptance checks fail on the same skill, the parties hold a fifteen-minute call to scope a remediation path or termination.

---

## 7. Intellectual property

### 7.1 Client deliverables

The client owns the audit deliverable, the skill bodies (markdown playbooks), the rubric configurations, and any custom prompts authored specifically for the client. The studio assigns these to the client on payment.

### 7.2 Studio retained IP

The studio retains the underlying tooling, the portal codebase, the connector library, and any general-purpose skill or rubric scaffolding that pre-exists the engagement or is generalized after delivery. The studio grants the client a perpetual, royalty-free license to use the studio-retained tooling solely in connection with the deliverables.

### 7.3 Pre-existing assets

The studio uses the [overlook-portal-webapp] codebase as the substrate for Tier 2 deliverables. The portal remains the studio's IP. The client's instance, configurations, and data are the client's. On termination, the client's data and configurations are exported and transferred within five business days.

### 7.4 Third-party tools and models

Outputs generated by third-party models (Claude, Kimi, etc.) are subject to those models' terms. The studio does not represent or warrant model outputs.

---

## 8. Confidentiality

Each party will protect the other's confidential information with the same care it gives its own and will not disclose it except to employees, contractors, or advisors who need to know and are bound by similar obligations. Confidentiality survives termination by three years.

The studio may identify the client as a customer in marketing materials and case studies after the client's written approval. The studio will not disclose the client's specific workflows, financials, or named individuals without separate written consent.

---

## 9. Data handling

The studio receives client documents and credentials only as necessary for the engagement. Documents are stored in the studio's [secure share / encrypted at rest] for the duration of the engagement and deleted within thirty days of termination unless the parties extend by written agreement.

For Tier 2+ engagements: the studio operates the client's fleet inside the client's portal instance. Skill outputs are stored in the client's database. The studio retains audit logs of skill runs for thirty days for support purposes only and does not exfiltrate client data.

The studio does not train models on client data. The studio does not use client data to improve studio templates without written consent.

---

## 10. Standard terms (where no MSA governs)

**Term and termination.** This SOW begins on the kickoff date and ends on completion of accepted deliverables (Tier 1, Tier 2) or by either party with thirty days' written notice (Tier 3). On termination of Tier 3, the client retains all in-portal deliverables and the studio off-boards the operator role within thirty days.

**Payment terms.** Tier 1 invoiced 50% on signature, 50% on delivery. Tier 2 invoiced 50% on kickoff, 50% on acceptance. Tier 3 invoiced monthly in advance. Net 15. Late payments accrue 1% per month after thirty days.

**Limitation of liability.** Each party's aggregate liability under this SOW is capped at the fees paid by the client to the studio in the six months preceding the claim. Neither party is liable for indirect, incidental, consequential, or punitive damages.

**Warranties.** The studio warrants that deliverables conform to the scope in §2 and the acceptance criteria in §6. The studio does not warrant that model outputs will be accurate, complete, or fit for purpose. Every skill ships with a rubric and a draft-and-review constraint that the client is expected to operate.

**Independent contractor.** The studio is an independent contractor. Nothing in this SOW creates a partnership, employment, or agency relationship.

**Insurance.** The studio carries professional liability insurance at no less than $[1,000,000] aggregate. Certificate available on request.

**Governing law and dispute resolution.** California law. Venue: Ventura County. Disputes first attempted in good-faith negotiation, then non-binding mediation, then arbitration under JAMS streamlined rules.

**Force majeure, assignment, severability, entire agreement.** Standard. Assignment requires written consent except in connection with a sale of all or substantially all of the assignor's assets.

---

## 11. Election

The client elects the following tier(s):

- [ ] Tier 1 — Workflow Audit ($1,500) — required, included by default
- [ ] Tier 1 — Workflow Audit Audit+ ($3,000)
- [ ] Tier 1 — Workflow Audit + retainer ($3,000 + $750 / month)
- [ ] Tier 2 — Skill Pack Build, Starter ($7,500)
- [ ] Tier 2 — Skill Pack Build, Standard ($11,500)
- [ ] Tier 2 — Skill Pack Build, Showcase ($15,000)
- [ ] Tier 3 — Always-On Retainer, Standard ($1,500 / month)
- [ ] Tier 3 — Always-On Retainer, Standard+ ($2,500 / month)
- [ ] Tier 3 — Always-On Retainer, Operator ($4,000 / month)

Total commitment at signature: $[N] one-time + $[N] / month recurring.

---

## 12. Signatures

By signing below, each party agrees to the terms of this SOW.

**Overlook Strategy LLC**

Signature: _____________________________________
Name: Finn Bennett
Title: Founder
Date: ____________

**[CLIENT LEGAL NAME]**

Signature: _____________________________________
Name: [PRIMARY CONTACT NAME]
Title: [PRIMARY CONTACT TITLE]
Date: ____________

---

```
OVERLOOK STRATEGY
overlookstrategy.com
34.2746° N // 119.2290° W
```

## Related (internal — strip from client copy)

- [[agentic-services-positioning]] — parent strategy doc
- [[workflow-audit-service]] — service spec
- [[wiki/business/templates/workflow-audit/deliverable|deliverable template]]
- [[wiki/business/templates/workflow-audit/proposal|proposal template]]
- [[wiki/workflows/workflow-audit-engagement|engagement playbook]]
- [[pricing-and-rates]] — canonical pricing source
- [[brand-voice]] — voice rules
