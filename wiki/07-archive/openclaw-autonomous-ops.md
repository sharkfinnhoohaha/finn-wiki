---
title: "OpenClaw Autonomous Ops — Kevin runs OS for me"
type: project
status: active
tags: [openclaw, overlook-strategy, autonomous-ops, kevin, atlas, sourcer, bridge, mailer]
created: 2026-05-07
updated: 2026-06-02
sources: [[overlook_strategy_autonomous_ops]]
---

# OpenClaw Autonomous Ops — Kevin runs OS for me

The operational endgame for the [[openclaw]] fleet: cron-driven Kevin runs parts of [[overlook-strategy]] autonomously. Start with two skills (lead research + website drafting), test on safe Ventura businesses, scale up once the flywheel turns. [[atlas]] teaches the team how to do it.

## Why this exists

OS scales founder-by-founder right now. I do the lead research, I write the proposal, I build the site, I send the email. That's bottlenecked by my hours.

If Kevin's team can do the heavy-lift work and I shift to "review + approve," leverage on my time goes up 5-10x. Profit margin per client improves because the AI does the grunt work. Pricing model can shift toward "we discover and propose" rather than "we wait for inbound."

This is also where compound learning starts paying out the most. Every lead that converts/declines tunes the [[OS-ICP|ICP]]. Every Bridge brief gets richer. Every [[atlas]] weekly review surfaces patterns that improve the next cycle.

## The flywheel

```
Cron fires Kevin (weekly Mondays) →
   Kevin checks queued OS work →
   Decomposes + delegates:
     - "Find 5 Ventura businesses fitting ICP" → Sourcer
     - "Research <business>'s online state" → Sourcer  
     - "Draft a one-page preview site for <business>" → Bridge + Otto
   → Workers return artifacts to Kevin →
   Kevin posts to Airtable `leads_queue` + emails me weekly digest →
   I review on MC at /leads →
   Approve / reject / refine →
   APPROVED → I do outreach (Phase 4: Mailer agent drafts, I approve before send) →
   Outcomes feed back → ICP refines → flywheel turns
```

## The two starter skills

### Skill 1 — Lead Research ([[sourcer-agent|Sourcer]])

Query Google Maps Places API for Ventura small businesses by category. Per candidate, fetch via [[playwright]] / [[jina-reader]]: their site (or lack of), Yelp, Instagram if linked. Score against the [[OS-ICP|ICP]]. Generate a research brief per candidate. Top 5-10 land in Airtable `leads_queue`.

### Skill 2 — Website Drafting ([[bridge]] + [[otto]])

When a `leads_queue` row gets `status: approved-for-draft`:
- Bridge scaffolds Next.js + [[sanity]] stack template — branded to match the business's existing visual signal (or a clean default)
- [[otto]] generates copy: hero, about, services, CTA — matching their actual offerings (verified from research)
- Bridge deploys preview to [[vercel]] under personal scope (`<slug>.vercel.app`)
- URL posts back to the lead row + emails me

> [!warning] Preview URLs ONLY. No domain pointing. No claiming the business owns it. AI involvement gets disclosed when shown externally.

## Atlas teaches this — Phase 3 primary surface

Decision 2026-05-07: get [[atlas]] to author the lesson plan rather than me designing the workflow top-down. The reasoning maps to the [[hyperagent_for_thinking_local_for_doing|HyperAgent-for-thinking pattern]] — Atlas's job during his $1000-credit window is to teach the local fleet how to operate, not to operate himself.

Pattern:

1. **Atlas reads corpus** — [[KEVIN-AS-TEAM-LEAD]], this page, [[OS-ICP]] (when written), [[sourcer-agent|Sourcer]] identity files (when staged)
2. **Atlas authors lesson sequence** — explicit step-by-step teaching docs that Kevin + Sourcer + Bridge + [[otto]] each ingest. Lessons encode HOW to execute the workflow, not just WHAT.
3. **Atlas runs first-pass coaching** after Test Run 1 — feedback per agent
4. **Atlas iterates** — Test Run 2 with refined lessons → review → refine → ...
5. **Atlas auto-suggests memories + skills** — every coaching pass produces durable artifacts per [[airtable_conduit_skill_factory|the closed-loop pattern]]
6. **Eventually** team operates autonomously, Atlas drops to weekly monitoring

This is the **graduation arc** made concrete. Atlas (cloud thinking) teaches → local fleet (Kevin + Sourcer + Bridge + Otto) does the work → outcomes feed back → Atlas refines → eventually local fleet runs without active Atlas presence.

There's an existing partial setup wired up for parts of this workflow (Finn 2026-05-07: "I have something like this wired up already, but it doesn't work too well"). Atlas reviews the existing as starting point, not greenfield. Audit happens before lesson authoring — see [[#open-threads]].

## ICP — Ideal Client Profile (v1)

Lives at [[OS-ICP]] (corpus doc, atlas-corpus). Working draft:

- **Geographic:** Ventura County (Ventura, Oxnard, Santa Paula, Camarillo, Ojai, Santa Barbara)
- **Size:** Small business, 1-20 employees, owner-operated
- **Industry:** Local services, hospitality, retail, contractors, professional services
- **Online state:** Has a website but it's outdated (>5 years, mobile-broken, no SSL) OR has only social
- **Signal of growth intent:** Active social, recent reviews, owner has been visible
- **Safe means:** Reputation-low-risk. No competitors of OS clients. No regulated industries (legal/medical/financial) for v1.

## Safety guardrails (HARD rules)

[[atlas]] Phase 3 enforces these:

1. **No auto-outreach.** Kevin never emails or DMs a target without my explicit approval.
2. **No fake claims.** AI-generated drafts disclose AI involvement when shown to anyone external.
3. **No deploying to real domains.** Preview URLs only.
4. **I approve all external action.** Outreach, emails, social mentions — human-initiated.
5. **Reputation-low-risk targets only for v1.** No competitors of OS clients, no regulated industries.
6. **Disclose AI involvement when outreach happens.** Hiding it kills agency credibility long-term.

## Phasing

| Phase | When | What |
|---|---|---|
| **Phase 1** | 5/7 → ~5/15 | [[sourcer-agent|Sourcer]] stood up, `leads_queue` table, [[OS-ICP|ICP]] doc, FIRST test run (5 candidates, I review) |
| **Phase 2** | 5/15 - 5/22 | [[themis]] scores Sourcer's output, refine ICP, add website-drafting skill, second test run (one lead → preview site) |
| **Phase 3** | 5/22+ | Cron-driven Kevin runs weekly, lead pipeline continuous, [[atlas]] weekly review measures conversion patterns |
| **Phase 4** | When ready | [[mailer-agent|Mailer]] stands up, auto-drafted outreach (still I-approved before send), reply classification |

## Connection to other patterns

- [[KEVIN-AS-TEAM-LEAD]] — this IS the architecture's flagship use case. Kevin orchestrating real OS work proves the manager-worker pattern.
- [[hyperagent_for_thinking_local_for_doing]] — Sourcer is "thinking" tier (research-heavy); Bridge is "doing" tier (deploy). Cloud thinks, local does.
- [[airtable_conduit_skill_factory]] — every lead that converts/declines feeds back into auto-suggested memories ("Industry X in Ventura responds to Y framing")
- [[PHASE-CHECK-SYSTEM]] — Sourcer + the OS workflow get their own rubrics; [[themis]] scores the output quality
- [[overlook-strategy-design]] skill — covers brand tokens; Otto + Bridge use these for draft content

## Open threads

- [ ] **Audit existing OS-related setup** — Finn 2026-05-07 mentioned a partial wiring already exists. Locate it: any skills under `~/.openclaw/workspace/skills/os-*`, any /clients or /leads pages on MC, any related Airtable tables. Atlas reviews this as starting point for lessons.
- [ ] **Stand up [[sourcer-agent|Sourcer]] runtime slot** — currently identity files only, no openclaw cli slot
- [ ] **Author [[OS-ICP]] corpus doc** — the canonical Ideal Client Profile
- [ ] **Define & provision `leads_queue` Airtable** — schema in Notion task #2
- [ ] **Atlas authors OS lesson sequence** — Phase 3 priority, due 5/15 (3 days after Atlas exits ingest)
- [ ] **Test Run 1** — Sourcer finds 5 candidates, I review (target 5/15)

## Current status (June 2026)

- **OpenClaw fleet paused 2026-05-24** — all OpenClaw crons disabled per [[openclaw-fleet-handoff]]. This project is on hold.
- **Hermes evolution** — Hermes (not OpenClaw) now runs the gateway, dashboard, and voice controls. The autonomous-ops pattern is being re-evaluated under Hermes skills, not a separate agent fleet.
- **Skills in flight:**
  - Create skill for website build (Doing, Medium, 50m)
  - Autonomous Comms with Atlas (Doing, Low)
- **Finn-as-approval model remains** — no auto-outreach. Hermes drafts, Finn approves.

## Notion project

This project is also tracked in [Notion / OS Autonomous Operations](https://www.notion.so/35a5dccf343e81e592b1e394747da125) with 12 phased tasks. Notion is the operational tracker; this wiki page is the architectural reference.

## Sources

- [[overlook_strategy_autonomous_ops]] — Cowork memory file (canonical roadmap)
- [[KEVIN-AS-TEAM-LEAD]] — atlas-corpus architecture doc
- [[DELEGATION-MATRIX]] — atlas-corpus routing rules
- [[PHASE-CHECK-SYSTEM]] — atlas-corpus rubric framework
- [[themis_judge_agent]] — atlas-corpus judge identity
