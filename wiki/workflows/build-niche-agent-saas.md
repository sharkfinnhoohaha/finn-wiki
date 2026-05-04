---
title: "Build a niche agent-SaaS (Isenberg 30-step playbook)"
type: workflow
tags: [workflow, saas, agents, launch, niche, isenberg]
created: 2026-04-25
updated: 2026-04-25
weight: high
node_size: 10
sources: [[isenberg-future-of-saas-30-step]]
---

# Build a niche agent-SaaS (Isenberg 30-step playbook)

The actionable checklist version of [[greg-isenberg|Isenberg]]'s [[isenberg-future-of-saas-30-step|30-step framework]]. Stack-rank as a sequence — earlier steps unblock later ones. Don't try to parallel-execute Phase 4 steps before Phase 3 is working.

Sits alongside the [[ninety-day-launch-plan]] (which is calendar-bounded but tactically vague). This workflow fills in the *what to do each week* detail.

## Phase 1 — Find the wedge (week 1–2)

- [ ] **1. Pick the subniche.** Big market → Gen-Z slice / regional slice / use-case slice. Use [[ideabrowser]] or LLM brainstorming. Validate by checking whether the slice has its own subreddit / Discord / hashtag with active posts.
- [ ] **2. Map the workflow end-to-end.** Pick a representative customer persona. Document every step from "trigger" to "money changes hands." Use FigJam / Excalidraw / Google Doc — surface doesn't matter. Three sourcing options:
  - Manual: interview 5–10 people in the niche.
  - Self: if you've done this work yourself, dump it from memory.
  - Agentic: ask [[claude-code]] / Manus to extract it from public sources.
- [ ] **3. Highlight where money changes hands.** That's the wedge. Highlight on the workflow doc.
- [ ] **4. Spot repetitive mechanical steps.** Mark them — these are agent candidates.
- [ ] **5. Quantify the cost of those steps.** $/hour of customer's time × hours/year saved. Anchor pricing on this.

## Phase 2 — Build distribution before product (weeks 1–8, parallel to everything else)

- [ ] **6. Create scroll-stopping content** about the workflow. Pick *one* channel (IG / TikTok / X). Daily posting cadence.
- [ ] **7. Study what gets saves, replies, DMs.** Track the top 10% performers.
- [ ] **8. Double down on the organic angles that convert.** Variations on the same proven hook.
- [ ] **9. Run paid ads on the proven organic winners.** Reuse the winning creative as paid creative.
- [ ] **10. Capture emails from day one.** Lead magnet, content upgrade, or simple newsletter signup. Bring them off-platform.

> [!info] Rhythm
> The content sub-loop is meant to be *concurrent* with Phases 1, 3, and 4 — not before or after. By the time you hit Phase 4, you have an audience to launch into. See [[media-first-distribution]] for the standalone breakdown.

## Phase 3 — Build the agent (weeks 3–10)

- [ ] **11. Manually perform the workflow** for 1–3 paying customers. *You* are the service. See [[services-first-saas]].
- [ ] **12. Document every step precisely.** Each manual session = better SOP.
- [ ] **13. Separate judgment from mechanical tasks.** Mark each step in the SOP: M (mechanical) or J (judgment).
- [ ] **14. Turn mechanical tasks into agent workflows.** One at a time. [[wat-framework-marketing|WAT framework]] applies here.
- [ ] **15. Design agents to complete the full task** (not just suggest output).
- [ ] **16. Connect agents to real tools** via [[mcp-protocol|MCP]]: email, Slack, CRM, Stripe, niche-specific systems.
- [ ] **17. Add orchestration, retries, and verifications** with human-in-the-loop. The orchestration surface IS the product UI — see [[orchestration-as-interface]].
- [ ] **18. Store user preferences and long-term memory.** This is the moat once you're past 3+ customers.

## Phase 4 — Launch, price, compound (weeks 8+)

- [ ] **19. Launch narrow with high-touch onboarding.** Get rich data into the product. Don't optimize signup elegance.
- [ ] **20. Publish measurable proof.** "We saved customer X 47 hours in Q1." Concrete numbers in case studies.
- [ ] **21. Move pricing from per-seat → per-task.** See [[per-task-pricing]] for migration path.
- [ ] **22. Shift to outcome pricing** when you can credibly tie the workflow to a measurable customer outcome.
- [ ] **23. Increase pricing as value compounds.** Brand trust + workflow depth = pricing power.
- [ ] **24. Add adjacent workflows.** Buy or build. Step 25 implies build is usually cheaper now.
- [ ] **25. Orchestrate multiple agents across the lifecycle.** The customer is now using a portfolio of your agents, not one workflow.
- [ ] **26. Build switching costs through data and memory.** Layered customer-specific context.
- [ ] **27. Turn power users into public case studies.** Camera crew, not blog post. Then put paid spend behind it.
- [ ] **28. Hire operators from inside the niche.** Not generalists — niche operators with domain trust.
- [ ] **29. Reinvest profits into distribution and product depth.** Both, not either.
- [ ] **30. Become the default execution layer for the subniche.** Goal state.

## What's the bare-minimum version

If you're testing the framework before committing months:

1. Step 1 — pick a subniche, ideally one Finn already knows (aviation school admin, recording-studio booking, agency client-portal updates)
2. Step 2 — map the workflow in one sitting, since you know it
3. Steps 11–13 — run the workflow manually for ONE paying customer at a price that proves willingness-to-pay (use [[per-task-pricing|per-task pricing]] from day one to set the anchor)
4. Step 6 — start posting content about doing this work, daily, on one channel

Three months in, you'll know whether the per-task economics work for a human you. If they do, build the agent (Steps 14–18). If they don't, the framework rejected the niche cheaply.

## How this stacks with existing wiki workflows

| Workflow | Scope | Use when |
|---|---|---|
| [[ninety-day-launch-plan]] | Calendar-bounded launch of a productized service | You've already picked the niche and want a 90-day calendar |
| [[wat-framework-marketing]] | The agent substrate (Workflows / Agents / Tools) | You're at Steps 14–18 and need the technical recipe |
| [[build-niche-agent-saas]] (this page) | End-to-end 30-step playbook | You're choosing what to build and need the whole path mapped |

## Related

- [[isenberg-future-of-saas-30-step]]
- [[agent-native-saas]]
- [[per-task-pricing]]
- [[services-first-saas]]
- [[media-first-distribution]]
- [[orchestration-as-interface]]
- [[ninety-day-launch-plan]]
- [[wat-framework-marketing]]
- [[productized-services]]
- [[ai-agency-niches]]
- [[overlook-strategy-positioning]]
