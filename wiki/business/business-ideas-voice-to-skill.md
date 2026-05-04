---
title: "Idea — Voice-to-Skill Generator App"
type: business
status: active
tags: [business-idea, voice, ai, claude, skills, mobile, llm-tooling, productized-tool]
created: 2026-05-02
updated: 2026-05-02
weight: medium
node_size: 5
sources: [[idea-scout-session-2026-05-02]]
---

# Idea — Voice-to-Skill Generator App

A minimalist mobile/web app with one button: hold to record, release to generate. You describe a workflow or behavior you want your LLM to follow, and it outputs a ready-to-install `SKILL.md` file. Syncs to your Claude Code vault, Cowork session, or file system.

## TL;DR

Skill creation is currently a desktop-only, text-heavy workflow. The friction is real — you have a workflow idea in the shower, on a drive, at a client meeting, and by the time you're back at a keyboard it's half-evaporated. This app collapses "idea → deployed skill" to under 2 minutes, on your phone. Finn has a unique edge here: he's running more skills than almost anyone outside Anthropic, and he literally just built the skill-creator skill today. This could be a weekend build that turns into the default capture surface for the Claude power-user ecosystem.

## What it is

A single-screen app (mobile-first, works on web too):

1. Hold the button. Talk. Describe the workflow, persona, or behavior you want the skill to encode — as casually and roughly as you want. "Hey so I want a skill that whenever I say I want to research a business idea, it goes out and does the research and adds it to my wiki, no back and forth, just one sentence and it goes."
2. Release. The app transcribes your voice (Whisper API), passes it to Claude API with a structured system prompt that knows what a good SKILL.md looks like, and generates a complete skill: name, description, YAML frontmatter, step-by-step instructions, edge cases.
3. Review the output inline. Tap "Save & Sync." The `.skill` file lands in your designated folder (iCloud Drive, Dropbox, local filesystem via API) and is immediately available to Claude Code or Cowork on your next session.

The UX philosophy is the same as Shazam or voice memos: capture now, refine later. The skill is a first draft, not a final product — but 80% of the way there beats 0%.

## Market landscape

This exact product doesn't exist. The closest things:

- **Anthropic's skill-creator plugin** (what Finn uses today): desktop-only, text-based, requires a full Cowork session, iterative — great for polish, bad for capture.
- **Anthropic Console Prompt Generator**: text-in → prompt-out, no skill structure, no mobile interface.
- **Whisper + ChatGPT voice mode**: general-purpose voice interface, not purpose-built for skill/prompt generation, no structured output, no sync.
- **Notion AI voice dictation / Apple Shortcuts AI flows**: voice capture tools that write prose, not structured SKILL.md files.

The broader LLM prompt generation tools market was $456M in 2024, growing to ~$1B by 2031 at 12% CAGR. The agent programming tools slice — more relevant here — is $6.95B in 2025 projected to $40.87B by 2030 (42% CAGR). This app lives at the edge of that second bucket: tooling for people who build agent workflows.

The real market is narrower: Claude Code and Cowork power users, Anthropic plugin developers, and the growing cohort of "vibe coders" who are starting to author skills but have no mobile capture path. Small now, but Claude's trajectory suggests this audience scales fast.

## Revenue model options

**Option 1 — Open source / personal brand play ($0 revenue, high distribution value)**
Build it, open-source it on GitHub, post the build process on X/LinkedIn. Zero direct revenue, but Finn becomes the guy who shipped the first voice-to-skill tool. Distribution asset for [[agentic-services-positioning]] and [[overlook-strategy]] positioning. Cost: ~$20/mo in API fees at personal usage.

**Option 2 — Paid micro-SaaS ($5–$10/mo)**
Hosted app with Clerk auth. Users get their own API key passthrough or hosted inference. Target: 200–500 paying users at $7/mo = $1,400–$3,500 MRR. Realistic ceiling given niche audience. Not a lifestyle business, but proves the market.

**Option 3 — Freemium + Claude ecosystem listing**
Free tier (20 skills/mo), paid tier ($9/mo, unlimited + sync to multiple vaults). If Anthropic builds a plugin/skills marketplace with discovery, being listed there early has outsized value.

**Option 4 — Part of an Overlook "AI power-user toolkit"**
Bundle voice-to-skill with [[business-ideas-llm-wiki-clipper|the LLM wiki clipper]] and any other Claude capture tools as a single $15/mo "Claude Toolkit" product. More coherent to explain than three separate micro-SaaS products.

Option 1 is the right first move — ship it, open-source it, measure interest before committing to a monetization structure.

## Finn's fit

Nearly perfect. Break it down:

- **Domain expertise**: Finn has written more skills than almost anyone outside Anthropic. He knows what makes a good SKILL.md, what triggers well, what's too narrow. That judgment is the "AI layer" doing most of the work — the system prompt is essentially encoding his skill-author intuition.
- **Technical lift**: Low. React Native or a responsive Next.js PWA, `navigator.mediaDevices.getUserMedia()` for mic capture, Whisper API for transcription, Claude API for generation. No new infrastructure beyond what's already running. Estimate: 1–2 weekends for v1.
- **Distribution**: The Claude Code Discord, Anthropic's developer community, and the growing [[llm-wiki-pattern]] cohort are natural first audiences. Finn already has traction in these spaces via the pier-and-point work and the wiki tooling.
- **Synergy**: This shares DNA with [[business-ideas-llm-wiki-clipper]] — both are capture surfaces for the Claude ecosystem, just different input modes (URL vs. voice) and different outputs (wiki page vs. skill file). They can coexist or merge into one "Claude capture suite."
- **Platform timing**: Anthropic published the full Skills guide in early 2026 and the Agent SDK rebranded April 2026. The ecosystem is new enough that first-mover tooling matters.

## Pros

- Zero competition in this exact form factor. You could ship today and be the only one.
- The "hard part" (knowing what a great skill looks like) is Finn's actual expertise — the product is literally encoding what he already knows.
- Genuinely solves a real pain point Finn has right now, which is the strongest signal that others in the same ecosystem do too.
- Low build cost relative to most ideas on this backlog. No DB schema to design, no marketplace cold-start, no supply-side sales.
- Timing is good: Claude Code hit mass awareness in early 2026, skills are new, the ecosystem is actively looking for tooling.
- Can be built incrementally: web prototype → PWA → native app. Each step compounds.

## Cons

- Audience is currently small. Claude Code + Cowork power users who actively author skills is a few thousand people, maybe tens of thousands. Not a large-TAM bet.
- Platform risk: Anthropic could ship voice-to-skill natively and zero this out. Anthropic has prioritized the desktop/IDE experience so far, but this isn't guaranteed to stay that way.
- The "sync" problem is genuinely annoying. Getting a file from a web app into Claude Code's skill folder requires either iCloud Drive (works on Mac), a GitHub commit (API-based, needs auth), or a manual download. None of these are frictionless. This is the hardest UX problem in the product.
- Skills are currently Claude-specific. Other LLMs have no equivalent to SKILL.md. This limits the audience until the format (or something like it) generalizes.
- If positioned purely as personal tooling, it doesn't generate recurring revenue unless bundled.

## 30-day test

Build the web prototype. Not mobile yet — just a webpage with a mic button, Whisper transcription, and a Claude API call with a hardcoded system prompt that generates SKILL.md output. Display the result. Add a "copy to clipboard" and "download as .skill" button. Total build time: one focused Saturday.

Post it in the Claude Code Discord and/or the Anthropic developer Slack. Ask 10 people if they'd use it. If 3 of them install it and come back to use it a second time unprompted — there's something here. If usage is one-and-done, it's a cool demo and nothing more.

Cost: $0 plus maybe $5 in API fees.

## Open threads

- What does the sync layer actually look like? iCloud Drive integration is simplest for Mac/iOS users. GitHub API push is more universal but adds auth friction.
- Is this a standalone product or does it merge with [[business-ideas-llm-wiki-clipper]] into a broader "Claude capture suite"?
- Should the generated skill be a `.skill` file (packaged for Cowork/Claude Code install) or raw markdown (more universal)?
- How does the system prompt stay updated as the SKILL.md format evolves? Needs a versioned prompt layer.
- Does this have a B2B angle? Companies with in-house Claude Code deployments might want a way for non-developer employees to author skills without the full skill-creator workflow.

## See also

- [[business-ideas-llm-wiki-clipper]] — sibling capture tool (URL → wiki page); these may merge or coexist
- [[agentic-services-positioning]] — the broader studio positioning this reinforces
- [[llm-wiki-pattern]] — the ecosystem this tooling supports
- [[paid-chrome-extensions]] — the capture-surface thesis from Isenberg; this is the voice-native variant
- [[skills-as-primitive]] — why skill authorship matters at scale
