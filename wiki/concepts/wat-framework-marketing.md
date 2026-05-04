---
title: "WAT framework — marketing automation playbook"
type: concept
tags: [concept, agentic-workflow, marketing-automation, claude-code, mcp]
created: 2026-04-24
updated: 2026-04-25
weight: high
node_size: 10
sources: [[notebooklm-mastering-agentic-workflows]], [[isenberg-future-of-saas-30-step]]
---

# WAT framework — marketing automation playbook

WAT = **Workflows, Agents, Tools.** Five-step recipe for turning [[claude-code]] from a chatbot into a deployed marketing machine. Synthesized in the NotebookLM note "Architecting Autonomous Marketing Engines with Claude Code" (full text in `raw/mastering-agentic-workflows-with-claude-code/note-architecting-autonomous-marketing-engines.md`).

## The W-A-T split

- **Workflow** = a markdown file that reads like an SOP. Step-by-step instructions in natural language.
- **Agent** = [[claude-code]] reading the workflow and deciding sequencing. The brain.
- **Tools** = Python or TypeScript scripts (which the agent writes) that do the actual work — scrape, generate, post.

Same primitives this vault uses for the [[ingest-workflow]], just pointed at marketing instead of knowledge management.

## The five steps

### 1. Foundation — VS Code + `claude.md`

Operate inside an IDE with the Claude Code extension. Anchor every project with a `claude.md` file describing business, stack, brand, key paths. This is the *project* schema, distinct from a *user-global* CLAUDE.md. Same convention this vault uses.

### 2. MCPs — the adapter layer

Connect the agent to external tools via [[mcp-protocol|MCP servers]]. The note recommends a starter pack:

| MCP | Purpose |
|---|---|
| Perplexity | Market research, competitive intel |
| Firecrawl | Site scraping, URL mapping, clean text extraction |
| Playwright | Browser automation, screenshots, mimicking user flows |
| Google Workspace CLI | Auto-generate Google Docs, populate Sheets, build slide decks |

API keys go in `.env`. The note explicitly says don't hand the agent your password manager.

### 3. Skills — reusable disciplines

Skills are markdown prompt files that teach the agent how to execute one marketing discipline well. Examples from the note:

- **Direct response copywriting** with brand-tuned frameworks
- **Positioning angles** that mine market data for value propositions
- **Content repurposing** — YouTube transcript → LinkedIn / X / Instagram posts + infographics

This is exactly the Skill primitive Claude Code Skills now ship natively. Finn's plugin stack already includes `brand-voice`, `marketing`, `design`, `engineering` skills — same pattern, deeper toolkit.

### 4. Marketing modules

Concrete deliverables the agent builds:

- **Landing pages + lead magnets** using Anthropic's "Front-End Design" skill, ROI calculators, audit checklists.
- **Outbound pipelines** — scrape podcast hosts or LinkedIn engagers (Phantom Buster, Firecrawl), verify emails (Million Verifier), enroll in cold outreach (Instantly AI).
- **Bulk ad gen** — Reddit pain points via Perplexity, visuals via Nano Banana, programmatic Facebook ad variation. Video ads via Remotion from the terminal.

### 5. Autonomy — analytics, sub-agents, deployment

Where it stops being a script and becomes a system:

- **Performance loops** — connect Facebook Ads / Google Analytics APIs. Agent pauses losing ads, scales winners.
- **Sub-agent teams** — research agent, data-analyst agent, copywriter agent, all running in parallel. Saves token cost vs. one giant context.
- **Cloud deployment** — push to [[trigger-dev]], Modal, or [[railway]]. Scheduled triggers (Mondays at 8 AM) or webhooks for lead handling. Native Claude Code `Scheduled Tasks` or `/loop` for tasks while the laptop is on.

## How this lands for Overlook

The whole framework is one possible answer to "what would Overlook sell as an AI service tier?" — see [[overlook-strategy-positioning]] and [[ai-agency-niches]]. The build cost is low (it's the agent's job to build it). The pricing question is whether to package it as:

- A done-for-you implementation ($5-50k per [[ai-agency-niches|enterprise services niche]])
- A retainer ("we run your marketing engine for $X/month") that keeps the recurring infra Finn is already comfortable with
- A productized teardown — sell the system once, hand off the repo

Tracked as an idea seed in [[Finn-OS/ideas/backlog]].

## Source-quality caveat

> [!warning] YouTube hype factor
> The 12 underlying sources include videos titled "Claude Code & MCPs built my $145K marketing machine" and "This AI Agent creates 1000+ SEO Pages in 52 min". The synthesis is more useful than any individual source; treat the playbook as a checklist of available primitives, not as proof anything works at the revenue scale claimed.

## Adjacent: media-as-product

The 2026-04-25 [[isenberg-future-of-saas-30-step|Isenberg]] ingest argues the WAT pattern should also run *founder-led content* in parallel with the marketing automations the framework targets. See [[media-first-distribution]] — same agent substrate (Workflows / Agents / Tools), different output (daily organic content for an audience instead of campaign assets for a client).

The [[orchestration-as-interface]] frame reinforces step 5 of the WAT recipe: the orchestration surface (which agents are running, which need review) is the actual product UI, not the deliverables themselves.

## Related

- [[notebooklm-mastering-agentic-workflows]]
- [[mcp-protocol]]
- [[claude-code]]
- [[vibe-coding]]
- [[ai-agency-niches]]
- [[trigger-dev]]
- [[railway]]
- [[overlook-strategy-positioning]]
- [[media-first-distribution]]
- [[orchestration-as-interface]]
- [[agent-native-saas]]
- [[isenberg-future-of-saas-30-step]]
