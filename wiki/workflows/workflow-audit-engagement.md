---
title: "Workflow Audit — Engagement Playbook"
type: workflow
tags: [overlook-strategy, agentic-services, workflow-audit, playbook, internal]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[agentic-services-positioning]], [[workflow-audit-service]]
---

# Workflow Audit — Engagement Playbook

Internal playbook for running a Workflow Audit (Tier 1 of [[agentic-services-positioning|the agentic-services stack]]) end to end. This is the operator's reference, not a client-facing artifact. Different vibe from the [[wiki/business/templates/workflow-audit/deliverable|deliverable template]] / [[wiki/business/templates/workflow-audit/sow|SOW]] / [[wiki/business/templates/workflow-audit/proposal|proposal]] — this one talks like Finn talks to himself.

## What this is for

You ran the proposal, the client signed the SOW, the kickoff date is on the calendar. Now what. This page tells you exactly what to do across the five business days, what questions to ask in each interview, how to score the jaggedness map, how to assemble the deliverable, and how to convert the engagement into a Skill Pack Build at the readout call.

## Pre-flight (the Friday before kickoff)

Two hours.

- **Confirm credentials.** What's the client going to give you read access to? Slack? Notion? Granola? Drive? Get those access provisions in writing on Friday so they don't block Monday. If the client uses an SSO tier you don't have, ask now.
- **Pick the three interview slots.** Tuesday morning + Tuesday afternoon + Wednesday morning. The Wednesday afternoon slot is yours for synthesis — don't burn it on a fourth interview unless the SOW was Audit+.
- **Read everything they sent.** Most clients will dump their existing process docs / brand guidelines / org chart on Friday. Read them. Don't take notes yet. You're loading context, not synthesizing.
- **Pre-fill the deliverable scaffold.** Copy `wiki/business/templates/workflow-audit/deliverable.md` to your engagement folder, replace `[CLIENT NAME]` and `[DATE RANGE]`, leave the rest as-is. Saves you twenty minutes on Thursday.
- **Open a CLAUDE-style memory file** for the engagement: `clients/[client]/audit-2026-XX-XX/CLAUDE.md`. Stack the brand voice, the banned-word list, and the readout date at the top. Future sessions don't get re-primed.

## Monday — Intake (90 min) + scope-lock (afternoon)

### Intake call structure (90 min, with primary contact)

Don't ad-lib this. The intake is what makes the rest of the week tractable.

**0–10 min — Frame the week.**
Read them the schedule from §4.1 of the SOW back. Confirm interview slots, document list, readout time. No surprises later.

**10–35 min — The org map.**
Ask them to walk you through the company as an org chart. Who does what. Don't take notes on names yet, take notes on roles. You are looking for the seams between functions where work passes hands — those seams are workflow boundaries.

Listen for the phrases that always mean a workflow exists:
- "Every Monday I have to…"
- "When [event] happens, we have to remember to…"
- "The first thing I do is…"
- "Every quarter we put together a…"
- "[Person] is the one who does the [thing]."

**35–60 min — The pain question.**
> *"If you could wave a wand and have a thing that just did one of your team's jobs perfectly without you having to think about it, what would it be?"*

This is the most important question of the audit. The answer almost never matches the workflows you'll end up recommending. But the gap between what they say and what you find is the audit's value — they're paying you to see what they can't.

Follow with: *"And what's the thing your team does that you absolutely don't want automated?"* That tells you the political surface and the rubric dimensions you'll need to build for trust.

**60–80 min — The constraint inventory.**
- Are any workflows touching regulated surfaces (HIPAA, SOC 2, PII, payments)?
- Are there things the company has explicitly decided not to automate?
- Is there an existing AI tool already in use? (If yes, ask how it's going. If they hate it, you've got a wedge.)
- What's the brand voice the team is supposed to write in? (Get reference samples.)
- What does "good" look like — point at three outputs they're proud of.

**80–90 min — Confirm interview targets.**
Lock in who you're talking to Tuesday and Wednesday. The right three are usually: the operator who runs the most workflows daily, the manager who feels the most pain on a recurring deadline, and the founder/exec who has the strongest opinion on tone. Avoid pure-IC interviewees on day one — they describe their own task, not the workflow it sits inside.

### Monday afternoon — scope-lock

Two hours of focused work. Don't go to other client engagements today.

- Write a one-page Monday memo for yourself: who works there, what hurts, what they want, what they don't want, what the regulatory surface looks like.
- Build the Tuesday and Wednesday interview guides. Each interviewee gets a five-question list, anchored on the domain you assigned them in §2.1 of the SOW. Generic questions are fine ("walk me through your week"), but the last two should be specific: "tell me about [thing the primary contact mentioned them owning]" and "what's the thing in your week that you'd love to never do again."
- Open the workflow inventory table. Pre-populate it with every workflow the primary contact named on the call. Tag each with a guess at the dominant step type (mechanical / judgment-with-precedent / judgment-without-precedent). The guesses will be wrong; that's fine, they're scaffolding for Tuesday.

## Tuesday — Two interviews + document review (afternoon)

### Interview structure (60 min each)

**0–10 min — Day-in-the-life.**
"Walk me through what you actually did yesterday." Resist the urge to interrupt for the first ten minutes. Real workflows are buried in the small stuff and people only mention them when you stop steering.

**10–35 min — The named workflow.**
The primary contact pointed at one or two things this person owns. Drill on those. Get the full step-by-step. What triggers it. What inputs come in. What outputs go out. Where the judgment calls happen. Where the friction is.

For each step, you're tagging mentally. Mechanical means the same input always produces the same output and the rule is written down somewhere (or could be). Judgment-with-precedent means a person could write the rule down even if no one has — "we tone these warmer for repeat clients" is judgment-with-precedent; the rule is real, just unwritten. Judgment-without-precedent means even the person doing the work can't articulate the rule — they re-derive it each time.

The boundary between the second and third tags is the audit's central question. Push on it gently. *"If you had to train someone to do this in your absence, what would you tell them?"* If they can answer in three sentences, it's judgment-with-precedent. If they say "honestly, you'd just have to feel it out," it's judgment-without-precedent and probably not a candidate today.

**35–50 min — Adjacent workflows.**
"What else does your week look like?" Surface the workflows the primary contact didn't name. There's almost always one or two — the things this person does that nobody else thinks about because they always get done.

**50–60 min — The pain question.**
Same question you asked the primary contact. Different answer.

### Tuesday afternoon — document review (90 min)

Read the documents they shared. Tag each one with:
- What workflow does it support?
- Is the doc itself a candidate for automation? (E.g. "We rewrite this doc every month from scratch" → yes.)
- Does the doc contain voice / tone / branding signal? Pull verbatim quotes for the rubric voice-match dimension.

## Wednesday — Final interview + synthesis kickoff (afternoon)

### Wednesday morning interview (60 min)

Same structure as Tuesday. By now you should have a sense of three or four candidate workflows. Use this interview to triangulate — ask the third person what they think about workflow X (which the primary contact named) and workflow Y (which Tuesday's interviews surfaced).

If a candidate workflow has only been mentioned by one person, it's probably not a candidate. Workflows worth automating are felt across the team.

### Wednesday afternoon — synthesis kickoff (3 hours)

Build the workflow inventory table from your interview notes. Every workflow gets:
- Name (use the team's name for it, not yours)
- Owner (a role, not a person)
- Volume (per week / per month / per quarter)
- Dominant step type
- Time per run (estimate from interviews)

Don't filter yet. Get everything down.

## Thursday — Synthesis (full day)

### Morning (3 hours) — the jaggedness map

Score every workflow on two axes.

**Verifiability axis (0 to 10).**
- 10 = the output is unambiguously verifiable. Code that runs or doesn't. A number that matches a source. A field that's populated correctly.
- 7 = the output is checkable by a domain expert in under sixty seconds.
- 5 = the output is checkable but requires reading the full output against a reference.
- 3 = the output is partly verifiable, partly subjective.
- 0 = the output is fully subjective. Two reasonable reviewers will disagree.

Anchor on the [[jaggedness-and-verifiability|verifiability concept]] — what we're really asking is whether a rubric LLM-as-judge could score this output today against named dimensions and produce a useful signal.

**Labs-care axis (0 to 10).**
- 10 = the workflow is exactly the kind of work frontier labs trained on (writing summaries, drafting emails, reviewing code, structured extraction).
- 7 = the workflow is adjacent — close enough to the training distribution that a generally-capable model handles it.
- 5 = the workflow is a domain-specific application of a general capability (e.g. "summarize this contract" is summary + legal jargon).
- 3 = the workflow is in a verticalized domain that frontier models touch incidentally (medical claim adjudication, marine surveyor inspection reports).
- 0 = the workflow is in a domain frontier models actively avoid or do poorly on.

Plot every workflow on the 10×10 grid. The deliverable map shows a 3×3 simplification (high/med/low on each axis), but you score on 10×10 internally so you can re-rank if the client pushes back.

The upper-right quadrant (verifiability ≥ 7, labs-care ≥ 7) is the candidate set. The upper-left (high labs-care, low verifiability) is candidate-with-rubric-ensemble. Lower-right is occasionally a candidate at scale (high verifiability, low labs-care = build a tool, not a skill, and use the agent only as wrapper). Lower-left is not a candidate today.

### Afternoon (3 hours) — candidate shortlist + rubric prototype

Pick the top three to five from the candidate set. Rank by the studio's three-part filter:

1. **Volume × time-per-run** — how much recurring time does this absorb? More time = higher rank.
2. **Connector availability** — does the studio already have the connector (Slack, Notion, Granola, Gmail, Sanity), or does it need to be built? Lower friction = higher rank.
3. **Voice surface** — does the output need to match a specific tone? If yes, the rubric work is heavier. Heavier rubric = lower rank, all else equal.

Spec each candidate skill in a paragraph. Use the [[skills-as-primitive]] / Howie framing: name the skill, name what it replaces, name its trigger, name its connectors, name its rubric dimensions.

Build the rubric prototype for the top-ranked skill. Three dimensions, each with a threshold. Pick a judge model (Sonnet by default; document why if not). Use [[rubrics-and-llm-as-judge]] as the reference.

### End of Thursday — assembly

Slot everything into the deliverable template. Polish prose pass. Banned-word check. Strip every internal callout. Render to PDF.

The deliverable should hit the client's inbox by 8pm Thursday — they read it Friday morning before the readout. Don't deliver at the readout. They need time to digest.

## Friday — Readout (60 min) + handoff (afternoon)

### Readout structure

**0–5 min — Frame the document.**
"You've read it. I'll walk the three forward paths and we'll spend most of the hour on questions."

**5–15 min — Walk the jaggedness map.**
Show them the upper-right quadrant. Name the workflows. This is where they will either nod (you got it right) or push back (you missed something). Either is fine — the audit's value is partly in surfacing the gap.

**15–35 min — Walk the candidate skills.**
For each candidate, name what it replaces in their week. Numbers attached. Don't pitch yet, just describe.

**35–50 min — Walk the three paths.**
Path A (do nothing), Path B (Skill Pack Build), Path C (Skill Pack + Retainer). The studio recommends one in writing. Read the recommendation paragraph. Then stop and let them ask questions.

**50–60 min — Next-step decision.**
The client will land in one of three places:
1. Yes to Path B or C — schedule kickoff.
2. Maybe to Path B or C — schedule a follow-up call within seven days.
3. No / Path A — accept gracefully, deliver the audit, end the engagement.

### Friday afternoon — close-out

- Send the deliverable as PDF + the editable markdown source. Both.
- Send the SOW for the elected path if applicable.
- Update the client folder. Move the engagement memo to `clients/[client]/audit-2026-XX-XX/closeout.md`.
- Log the engagement in `Finn-OS/career/opportunities.md` regardless of outcome — even "no" is useful inventory for the next quarter.
- Update [[pricing-and-rates]] if the client gave price feedback worth capturing.
- Append a `log.md` entry: `## [YYYY-MM-DD] audit-closeout | [Client] — [Path A/B/C]`.

## Conversion math (what to track)

After the first three audits, you'll start to see the shape of the funnel. Track these numbers in a single spreadsheet at the studio level (not per client):

| Metric | Formula | Why it matters |
|---|---|---|
| Audit close rate | audits sold / proposals sent | Pricing-feedback signal |
| Path A rate | audits ending in "do nothing" / total audits | If too high, the audit is being mis-sold to the wrong companies |
| Path B/C rate | Skill Pack Builds sold / audits delivered | The pipeline-conversion number |
| Time to kickoff | days from audit Friday to Skill Pack Monday | If > 14 days, the client is cold; follow up |
| Audit-to-revenue ratio | total Skill Pack + retainer revenue / audit revenue | The audit is a loss leader if this ratio is < 4x; it's the right tier if it's > 6x |

Six audits in, you should know whether the model works.

## Pitfalls (what to watch for)

**Over-scoping the audit.** The week is five business days. If a client wants more interviews, sell them Audit+. Do not silently expand the scope.

**Promising headcount savings.** Don't. The studio promises time savings. Headcount is a client decision, often a political one, and you don't have the standing to make claims about it.

**Recommending a candidate that needs a connector you can't build inside the Skill Pack timeline.** The audit is allowed to recommend things outside the studio's current capability — but flag them. The deliverable's "what we'd build first" is the studio's commitment; the wider candidate set is informational.

**Over-rubricing.** A three-dimension rubric is plenty. Five-dimension rubrics sound more rigorous and are usually noisier — judge models start disagreeing across dimensions and the score loses signal.

**Getting attached to the candidate skills.** If the client has a strong preference for skill X over skill Y in your shortlist, take the preference. They know the politics inside the company. The audit's job is the map, not the route.

**Skipping the backtest.** When the engagement converts to a Skill Pack Build, every skill must be backtested against thirty historical or synthetic outputs before it goes live in the client's portal. The SOW says so. Don't ship without it.

## Related

- [[agentic-services-positioning]] — parent strategy doc
- [[workflow-audit-service]] — service spec
- [[wiki/business/templates/workflow-audit/deliverable|deliverable template]]
- [[wiki/business/templates/workflow-audit/sow|SOW template]]
- [[wiki/business/templates/workflow-audit/proposal|proposal template]]
- [[jaggedness-and-verifiability]] — the concept the map operationalizes
- [[skills-as-primitive]] — the concept the candidate shortlist operationalizes
- [[rubrics-and-llm-as-judge]] — the concept the rubric prototype operationalizes
- [[opportunity-cost-pricing]] — the concept the recommendation pricing operationalizes
- [[brand-voice]] — voice rules to enforce on the deliverable
- [[client-portal-as-differentiator]] — the substrate Tier 2 ships into
- [[overlook-portal-webapp]] — the codebase Tier 2 lives inside
