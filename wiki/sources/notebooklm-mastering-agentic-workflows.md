---
title: "NotebookLM — Mastering Agentic Workflows with Claude Code"
type: source
tags: [source, notebooklm, agentic-workflows, claude-code, marketing-automation]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
source_url: https://notebooklm.google.com/notebook/4545641c-59f3-4317-a1a6-558adb5d8e10
source_author: "[[finn-bennett]] (curator); various YouTube creators (sources)"
source_date: 2026-04-24
sources: [[karpathy-llm-wiki-gist]]
---

# NotebookLM — Mastering Agentic Workflows with Claude Code

A NotebookLM notebook Finn assembled around running marketing and client work autonomously through [[claude-code]]. Twelve sources, mostly YouTube creators in the AI-marketing / vibe-coding scene. The notebook's one saved synthesis is "Architecting Autonomous Marketing Engines with Claude Code" — a 5-step playbook now extracted into [[wat-framework-marketing]].

Raw scraped content lives in `raw/mastering-agentic-workflows-with-claude-code/`.

## TL;DR

The synthesized note prescribes treating Claude Code as a project manager, not a chatbot, and standing up an autonomous marketing system in five stages: WAT framework + `claude.md`, MCPs as adapters, custom Skills as reusable prompt files, modular marketing surfaces (landing pages, outbound, ad gen), and cloud deployment via [[trigger-dev]] / Modal / [[railway]] with sub-agent teams. See [[wat-framework-marketing]] for the full playbook and [[mcp-protocol]] for the adapter layer.

## Why it's in this wiki

Operationally relevant to [[overlook-strategy]] — the playbook is exactly the kind of system Finn could productize for clients (or sell as a service tier). Cross-references:

- The `claude.md` system-prompt pattern overlaps with the `CLAUDE.md` schema this vault uses (see [[setup-obsidian-vault]] and [[three-layer-architecture]]) — same convention, different domain.
- Custom Skills are the same primitive Claude Code Skills now use natively. Finn already maintains a stack of plugin skills (brand-voice, design, marketing, engineering, operations).
- Sub-agent teams + Trigger.dev / Modal / Railway scheduled triggers map to deployment patterns Finn has already used on [[overlook-portal-webapp]] and [[gearflip]].

## Sources (12)

The full list (titles only — NotebookLM doesn't expose YouTube URLs through the share view) lives in `raw/mastering-agentic-workflows-with-claude-code/sources.md`. Highlights:

- *AI marketing Masterclass: From beginner to expert in 60 minutes*
- *Build & Sell with Claude Code (10+ Hour Course)*
- *Claude Code & MCPs built my $145K marketing machine*
- *This AI Agent creates 1000+ SEO Pages in 52 min (Claude + MCP + Cursor)*
- *VIBE CODING FULL COURSE: Gemini 3.1 + Antigravity (6 Hrs)*
- *How I VibeCode Beautiful $5,000 Animated Websites (AntiGravity)*

## Studio outputs

| Output | Format | Status |
|---|---|---|
| Architecting Autonomous Marketing Engines with Claude Code | Markdown note | Captured. Full text in `raw/.../note-architecting-autonomous-marketing-engines.md`. |
| Vibe Coding and Self-Healing AI Agents | Audio overview | Not transcribed (interactive audio, 2 sources) |
| Claude Code and Self-Healing Agentic AI | Audio overview | Not transcribed (interactive audio, 1 source) |

## Open threads / contradictions

> [!warning] Source quality is creator-economy YouTube
> Most sources are short-form attention-driven videos with revenue-claim titles ("$145K marketing machine", "$5,000 Animated Websites"). The synthesized note is more useful than any individual video; treat the playbook as a checklist of available primitives, not as proof anything works at the scale claimed.

## Related

- [[wat-framework-marketing]]
- [[mcp-protocol]]
- [[vibe-coding]]
- [[claude-code]]
- [[karpathy-llm-wiki-gist]]
- [[notebooklm-overlook-strategy]] — Finn's broader research pile
- [[notebooklm-simple-ui-viral-ai]] — adjacent thesis on solo-founder AI businesses
