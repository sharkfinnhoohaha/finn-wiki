---
title: "Vibe coding"
type: concept
tags: [concept, vibe-coding, ai-development, positioning]
created: 2026-04-24
updated: 2026-04-29
weight: high
node_size: 10
sources: [[notebooklm-overlook-strategy]], [[notebooklm-mastering-agentic-workflows]], [[karpathy-vibe-to-agentic-2026-04-29]]
---

# Vibe coding

The 2026 mode of building software where a non-technical (or technically lazy) operator drives an LLM agent in natural language and accepts the resulting code without auditing it line-by-line. Originally pejorative, now mainstream. Finn already operates this way most of the time — it's the substrate of how he ships [[overlook-strategy]] client work.

## Definition (per the Wikipedia source in [[notebooklm-overlook-strategy]])

Vibe coding = letting an AI agent write the code while the human supplies intent, vibes, and product sense. The human reads the diff but doesn't have to fully understand it. Karpathy's autoresearch ([[karpathy-autoresearch]]) extends the same posture into ML research: the human supplies a research direction, the agent runs experiments overnight.

## Why it matters here

Finn's positioning question is: **does Overlook Strategy lead with vibe coding as a service, or hide it?**

Two opposing reads visible in the source pile:

- **Lead with it.** Sources like *"How I VibeCode Beautiful $5,000 Animated Websites"* and *"Seedance 2.0 + Claude Code Creates $10k Websites in Minutes"* frame vibe coding as the differentiator. Finn could productize "vibe-coded animated sites for service businesses" at $2-10k per project.
- **Hide it.** The [[deep-research-strategic-arbitrage|Deep Research briefing]] warns against "AI fascination" and pushes "customer obsession." Most clients don't want to know the agency is one person + Claude Code. They want a deliverable, on time, that solves their problem.

Finn's actual practice (as of April 2026) is the latter: monochromatic Tailwind sites that don't *look* AI-generated, with a free [[client-portal-as-differentiator|client portal]] as the visible value prop. The vibe-coding workflow stays internal.

## Adjacent terms

- **Agentic workflow** — vibe coding's deployed cousin, where the agent acts on a schedule, not interactively. See [[wat-framework-marketing]].
- **Phase 3 agent** — the technical capability layer that makes vibe coding produce working software, not just first drafts. See [[phase-3-agents]].
- **Productized service** — the business model that turns vibe-coding output into recurring revenue. See [[productized-services]].
- **Agent-native SaaS** — the *product* form vibe coding can take when pointed at a repeatable subniche workflow rather than a custom client deliverable. See [[agent-native-saas]] and the third positioning option on [[overlook-strategy-positioning]].

## Karpathy's update at Sequoia AI Ascent 2026

A year after coining the term, Karpathy revisited it on stage with Stephanie Zhan. The framing he landed on:

> "Vibe coding is about raising the floor for everyone in terms of what they can do in software… But then I would say [[agentic-engineering|agentic engineering]] is about preserving the quality bar of what existed before in professional software." — Karpathy, [16:15] in [[karpathy-vibe-to-agentic-2026-04-29]]

Vibe coding raises the floor. [[agentic-engineering|Agentic engineering]] raises the ceiling. The two are not in opposition — they're stacked. Most operators have access to vibe coding now, which is why it's not a moat. The discipline that preserves security, robustness, and engineering quality at higher speed is what's scarce. Karpathy's claim: peak operators today are not 10x but well past that.

This update resolves the original "lead with it or hide it" framing below. The studio leads with [[agentic-engineering]], which acknowledges vibe coding as a floor without pricing the engagement off it. See [[agentic-services-positioning]] for the full synthesis.

## Open question (resolved 2026-04-29)

The 2026-04-24 question — "lead with vibe coding, or hide it?" — is now resolved by Karpathy's floor/ceiling framing. The studio neither hides nor leads with vibe coding. It leads with the discipline above it.

## Related

- [[karpathy-vibe-to-agentic-2026-04-29]] — the update
- [[agentic-engineering]] — the discipline above
- [[agentic-services-positioning]] — Overlook's resulting position
- [[software-3-0]] — the paradigm vibe coding sits inside
- [[ghosts-not-animals]] — what you're vibe-coding *with*
- [[agentic-inflection-late-2025]] — when the floor lifted
- [[notebooklm-overlook-strategy]]
- [[notebooklm-mastering-agentic-workflows]]
- [[wat-framework-marketing]]
- [[phase-3-agents]]
- [[productized-services]]
- [[overlook-strategy-positioning]]
- [[agent-native-saas]]
- [[isenberg-future-of-saas-30-step]]
