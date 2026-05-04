---
title: "Workflow Audit — Deliverable Template"
type: business
tags: [overlook-strategy, agentic-services, workflow-audit, template, client-facing]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[agentic-services-positioning]], [[workflow-audit-service]]
---

> [!note] Internal note
> This is the **client-facing audit deliverable template**. Every Workflow Audit engagement ships a personalized version of this document at the end of Week 1. Voice rules: [[brand-voice]] applies (no banned words, no exclamation points, "the studio" never "our team"). Replace every `[BRACKETED PLACEHOLDER]` and delete this callout before sending. Companion files: [[wiki/business/templates/workflow-audit/sow|SOW]], [[wiki/business/templates/workflow-audit/proposal|proposal]], [[wiki/workflows/workflow-audit-engagement|engagement playbook]].

---

```
OVERLOOK STRATEGY // WORKFLOW AUDIT
[CLIENT NAME] — [MONTH YEAR]
```

# Workflow Audit

## [Client name]

Prepared by Overlook Strategy
Audit conducted [DATE RANGE]
Document version 1.0

---

## In one paragraph

[1–2 sentence headline finding. Operator tone. Example: "[Client] runs eleven repeatable workflows across operations, marketing, and customer-facing communication. Three of them sit cleanly inside the verifiable circuits of current frontier models and would absorb roughly forty hours of senior staff time per month with a single Skill Pack Build. Two more become tractable with a rubric ensemble. The remaining six are not yet candidates and should be left alone for the next two quarters."]

[1 sentence on the engagement next-step recommendation. Example: "We recommend [Client] move directly to a Skill Pack Build (Tier 2) with `engagement-summary`, `lead-enrichment`, and `monthly-recap` as the first three pinned skills, scored against a three-dimension rubric and reviewed monthly inside the existing client portal."]

---

## What this document is

This is the audit deliverable for [Client]'s Week 1 engagement with Overlook Strategy. It maps [Client]'s recurring white-collar workflows against the current capabilities of frontier agent systems, identifies the workflows that are ready for automation now, names the three to five we would automate first, prototypes the eval rubric we would use to keep them honest, and lays out two paths forward with concrete numbers.

Three things this document is not.

It is not a recommendation to replace anyone. The workflows we name as candidates are tasks that already happen — the question is whether they happen at $80 of staff time or $5 of agent time. Headcount is your decision, not ours.

It is not a forecast. We have spent five business days with [Client]'s workflows. Anything that looks like a multi-quarter projection in this document is a sketch, not a contract.

It is not a one-off. Every workflow in the candidate set will need its rubric re-tested when frontier model behavior shifts. We treat that as a quarterly maintenance line, priced into Tier 3.

---

## Methodology

Five business days. The intake call sets the scope; the discovery sessions populate it; the synthesis builds the maps; the readout is this document.

| Day | Activity | Output |
|---|---|---|
| Mon | 90-minute intake call with [PRIMARY CONTACT] | Workflow long-list + interview targets |
| Tue | 60-minute interview, [INTERVIEWEE 1 — ROLE] | Workflow detail for [DOMAIN A] |
| Tue | 60-minute interview, [INTERVIEWEE 2 — ROLE] | Workflow detail for [DOMAIN B] |
| Wed | 60-minute interview, [INTERVIEWEE 3 — ROLE] | Workflow detail for [DOMAIN C] |
| Wed | Document review (selected by [PRIMARY CONTACT]) | Constraint and tone capture |
| Thu | Synthesis | Jaggedness map + candidate shortlist + rubric prototype |
| Fri | 60-minute readout, this document delivered | Decision on next-step path |

We tagged every observed step inside each workflow as one of three colors. Mechanical (the same input always produces the same output, e.g. parse a CSV, post to Slack). Judgment-with-precedent (a person could write down the rule, even if no one has — e.g. "we tone these emails warmer for repeat clients"). Judgment-without-precedent (the rule lives in someone's head and they re-derive it each time).

The boundary between the second and third tags is the audit's central question. Workflows whose judgment can be written down are candidates; workflows whose judgment cannot are not.

---

## Workflow inventory

[Total workflows identified: N]

Each workflow is named, owned, and tagged with its dominant step type. The full step-by-step is in Appendix A.

| Workflow | Owner | Volume | Dominant step type | Time per run |
|---|---|---|---|---|
| [Workflow 1] | [Role] | [N/week] | mechanical | [N min] |
| [Workflow 2] | [Role] | [N/week] | judgment-with-precedent | [N min] |
| [Workflow 3] | [Role] | [N/month] | judgment-with-precedent | [N min] |
| [Workflow 4] | [Role] | [N/month] | judgment-without-precedent | [N min] |
| [...] | | | | |

Total recurring time across the inventory: [N hours / week] at the senior-staff loaded rate of [$80–$120 / hour], which is [$N–N / week] of recurring effort spent on processes that produce roughly the same output every time.

---

## Jaggedness map

The map below sorts every workflow on two axes. The horizontal axis is verifiability — how cleanly we can decide whether the output is correct after the fact. The vertical axis is whether the workflow lives inside the kind of training data frontier labs prioritize. Workflows in the upper-right are the cheapest revenue in the building. Workflows in the lower-left are not candidates today and may not be for a year.

```
                              VERIFIABILITY
                  Low ←──────────────────────────→ High
    High  ┌──────────────────────────┬──────────────────────────┐
          │                          │                          │
          │   Subjective + central   │   READY NOW              │
   LABS   │   to lab attention       │   ──────────────         │
   CARE   │   (writing, code review, │   [Workflow A]           │
          │    summarization)        │   [Workflow B]           │
          │                          │   [Workflow C]           │
          │   [Workflow D]           │                          │
          │   [Workflow E]           │                          │
          │                          │                          │
          ├──────────────────────────┼──────────────────────────┤
          │                          │                          │
          │   Not candidates today   │   Tractable              │
          │   ──────────────         │   ──────────────         │
    Low   │   [Workflow F]           │   [Workflow G]           │
          │   [Workflow H]           │                          │
          │   [Workflow I]           │                          │
          │                          │                          │
          └──────────────────────────┴──────────────────────────┘
```

[Replace the example workflow placeholders above with the client-specific findings.]

The upper-right quadrant is where Skill Pack Tier 2 starts. The upper-left quadrant becomes tractable through a rubric ensemble — a council of judging models scoring each output along defined dimensions — but the build cost is roughly 1.5× a same-quadrant lower-right skill. The lower-left quadrant is where the cost-to-quality curve hasn't yet bent in agents' favor. We would not build for those workflows yet.

---

## Candidate skill shortlist

Three to five pinned skills, ranked. Each one runs as a self-contained agent surface inside [Client]'s portal, gated behind a master switch, scored by a rubric on every run, and reviewable before any output reaches a human or external recipient.

### 1. [Skill name — e.g. `engagement-summary`]

**Replaces:** [N hours / week] of senior-staff time currently spent on [the manual workflow].

**Triggers on:** [scheduled cadence, e.g. "the first business day of every week"] or [manual run from the portal].

**Reads from:** [list of connectors and document sources]. Connectors required: [list].

**Writes to:** [draft inbox / Slack channel / portal feed]. Never auto-publishes. Output must pass the rubric and a human review before it reaches a recipient.

**Skill body:** the playbook this skill follows is documented inline as a 200-line markdown block. It includes the studio's voice rules where applicable, the data sources it is allowed to read, the structure of the output, and the rubric dimensions it must score against.

**Rubric dimensions:**
1. Factual fidelity (every claim is grounded in a source the skill cites)
2. Voice match ([Client]'s tone, scored against a three-sample reference set)
3. Completeness (the output covers the structure of the playbook)

**One-time build cost:** included in Skill Pack Tier 2 (Starter $7,500 / Standard $11,500 / Showcase $15,000 — three skills minimum at every tier).

**Monthly operating cost:** infrastructure passes through at cost. Estimated $[N] / month at [Client]'s observed volume.

### 2. [Skill name — e.g. `lead-enrichment`]

[Same structure as Skill 1.]

### 3. [Skill name — e.g. `monthly-recap`]

[Same structure as Skill 1.]

### Skills explicitly not on the shortlist

| Workflow | Why not a candidate today |
|---|---|
| [Workflow X] | The rule lives in [Owner]'s head and we could not extract it in the audit window. Worth revisiting in two quarters. |
| [Workflow Y] | Verifiable, but the volume is one run per quarter. The build cost does not retire inside a year at that cadence. |
| [Workflow Z] | Adjacent to a regulatory surface ([HIPAA / SOC 2 / etc.]) where we would not deploy a draft-and-review loop without legal sign-off. Out of scope for Tier 2; revisit at Tier 3 with a structured legal review. |

---

## Rubric prototype

One example rubric, fully specified. Same shape applies to every skill the studio ships.

### Rubric for `engagement-summary`

Every run of `engagement-summary` produces a markdown summary. After generation, a separate model scores the summary along three dimensions and emits a JSON block. The score is logged to the portal's rubric panel. If any dimension scores below the threshold, the output is held for review and a notice fires to the admin feed.

**Dimensions and thresholds:**

| Dimension | Description | Threshold |
|---|---|---|
| Factual fidelity | Every numeric claim and proper-noun reference traces to the source documents the skill was allowed to read. Hallucinated or unsourced claims fail the dimension. | ≥ 0.85 |
| Voice match | The output's tone matches [Client]'s reference set on three measured axes: formality, hedging frequency, and adjective density. | ≥ 0.80 |
| Completeness | The output covers all five sections of the playbook (intro / metrics / outliers / wins / asks). | ≥ 0.90 |

**Judge model:** Sonnet 4.6 by default. We re-test the rubric monthly against the latest frontier release and adjust the judge if the distribution shifts.

**Cost-quality dial:** every rubric is run twice per quarter against a Haiku 4.5 judge to test whether the cheaper model is enough. If the Haiku score correlates above 0.92 with Sonnet, we drop to Haiku and pass the savings through to [Client]'s monthly bill.

**Failure mode handling:** scores below threshold are not auto-rejected. They are flagged for human review with the failing dimension highlighted. The failure history is reviewed monthly and used to update the skill's playbook.

---

## What we recommend

Three paths, sequenced by risk and revenue.

### Path A — Do nothing

[Client] has functioning workflows. None of the candidates above are blocking the business today. The cost of doing nothing is the recurring [$N–N / week] of senior-staff time currently absorbed by mechanical and judgment-with-precedent steps. That cost compounds, but it does not break anything.

We name this path explicitly because the studio has no interest in building agents into a business that does not need them. If the math does not work or the timing is wrong, this is the right answer.

### Path B — Skill Pack Build (Tier 2)

Build the three candidate skills above as pinned skills inside [Client]'s portal, with rubrics, a fleet topology, and a command-center view.

**Investment:** [Tier — Starter $7,500 / Standard $11,500 / Showcase $15,000] one-time. Infrastructure passes through at cost.
**Timeline:** three weeks from kickoff.
**Expected payback:** the three skills together absorb [N hours / week] of recurring senior-staff time at [$80–$120 / hour]. At the lower bound the build retires inside [N months]. The studio does not promise headcount savings; we promise time savings, and you decide what to do with the freed time.
**What we ship:**
1. Three pinned skills with documented playbooks
2. One rubric per skill with a logged history
3. The portal Agents tab where [Client]'s team watches the fleet operate
4. A 60-minute walkthrough so the team can run the skills without us
5. Source documentation in the portal so future operators understand what was built and why

### Path C — Skill Pack Build + Always-On Retainer (Tier 2 + Tier 3)

Same Skill Pack Build as Path B, plus a monthly retainer where the studio operates the fleet on [Client]'s behalf.

**Investment:** Tier 2 one-time + [$1,500 / $2,500 / $4,000 monthly]. Infrastructure pass-through inside the retainer.
**What's added by the retainer:**
1. Monthly rubric review and skill drift remediation
2. New skill authorship as [Client]'s surface area grows (one new skill per quarter included)
3. Quarterly model audit — every rubric re-tested against the latest frontier release
4. Monthly cost-and-quality report inside the portal
5. Per-task line items for novel one-off work ($50–$200/run, billed at the value-anchor)

The retainer is the right path for [Client] if [pick from: the workflow set is expected to grow / regulatory surface area is sensitive / the team prefers an operator over a tool / the rubric history is itself a deliverable for [Client]'s board or investors].

---

## Risks and what we will watch

Three things we want [Client] to know before signing a Skill Pack engagement.

**Verifiability dependence on labs.** The candidates above sit inside the current RL training mix. If a future frontier release shifts the jaggedness map — and shifts happen — the rubric thresholds may drift. The retainer absorbs the quarterly re-test; the one-time build does not.

**Token cost visibility.** A skill running 50× expected has a real bill. Every skill ships with a per-run cost cap and a monthly cost report inside the portal. We do not mark up tokens.

**Draft-and-review is non-negotiable.** Every output the studio ships passes through a human review step before it reaches an external recipient. We do not auto-publish. This is a structural constraint, not a default we can flip.

---

## What happens next

Two decisions for [Client] in the next [seven] business days.

1. **Path selection.** A, B, or C above. We can run a 30-minute call to walk through the math under each path.
2. **Kickoff date.** Path B and Path C both run on a three-week cadence from kickoff. The studio holds one Skill Pack slot per month.

We have prepared a Statement of Work for Paths B and C. It is enclosed as a separate document. If [Client] selects Path A, no further action is required and the studio's engagement on this audit ends with this document.

---

## Appendix A — Workflow detail

[For each workflow in the inventory, a one-page detail block: stated purpose, observed steps, owners, frequency, dependencies, edge cases, current pain points captured verbatim from interviews, and the audit's tagging rationale. The studio includes verbatim quotes from interviewees with attribution and date, never paraphrased.]

## Appendix B — Interview notes

[Tabular summary: date, interviewee, role, duration, primary domains discussed, key claims captured. Full notes available on request from the studio's secure share.]

## Appendix C — Document review log

[List of the documents reviewed during the audit, with date and provenance. The studio retains read-only access for the duration of the engagement and removes access on the final day unless extended by the SOW.]

---

```
OVERLOOK STRATEGY
overlookstrategy.com
34.2746° N // 119.2290° W
```

## Related (internal — strip from client copy)

- [[agentic-services-positioning]] — parent strategy doc
- [[workflow-audit-service]] — service spec
- [[wiki/business/templates/workflow-audit/sow|SOW template]]
- [[wiki/business/templates/workflow-audit/proposal|proposal template]]
- [[wiki/workflows/workflow-audit-engagement|engagement playbook]]
- [[jaggedness-and-verifiability]] — concept the map operationalizes
- [[skills-as-primitive]] — concept the candidate shortlist operationalizes
- [[rubrics-and-llm-as-judge]] — concept the rubric prototype operationalizes
- [[opportunity-cost-pricing]] — concept the recommendation pricing operationalizes
- [[brand-voice]] — voice rules to enforce on every personalized copy
