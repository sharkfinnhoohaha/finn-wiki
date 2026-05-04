---
title: "Model Context Protocol (MCP)"
type: concept
tags: [concept, mcp, protocol, claude-code, anthropic]
created: 2026-04-24
updated: 2026-04-26
weight: high
node_size: 10
sources: [[notebooklm-mastering-agentic-workflows]], [[deep-research-strategic-arbitrage]], [[openclaw-deep-dive-krentsel]], [[graphify-cheat-sheet]]
---

# Model Context Protocol (MCP)

Anthropic's open spec for connecting LLM agents to external tools and data sources. Servers expose typed tools; agents discover and call them at runtime. This vault's Cowork session has dozens of MCP servers loaded (Notion, Vercel, Sanity, Google Drive, Gmail, Linear, etc.) — that's the protocol in action.

## Why it earned its own page

Two of Finn's three NotebookLM notebooks treat MCP as the central enabling primitive. The [[wat-framework-marketing]] playbook is unbuildable without it; the [[deep-research-strategic-arbitrage|Deep Research briefing]] frames Phase 3 agents as defined by MCP + CLI access, not by model capability.

## Useful MCPs for Finn's work

Already wired into this Cowork session (visible in deferred-tool list):

- **Notion** — Life OS sync, page CRUD
- **Sanity** — Schema, datasets, document publishing for client CMS work
- **Vercel** — Deploys, build logs, runtime logs, project lookups
- **Google Drive / Gmail / Calendar** — Operations workflows
- **Atlassian, Linear, ClickUp, Monday** — Task tracking
- **Common Room** — Account/contact research (sales workflow)
- **Box, MS365** — Enterprise document access
- **Klaviyo, Ahrefs, Amplitude, Supermetrics** — Marketing analytics

Recommended in [[wat-framework-marketing]] but not yet wired into Finn's session:

- **Perplexity** — Deep research / competitive intel
- **Firecrawl** — Web scraping, URL mapping
- **Playwright** — Browser automation, screenshots
- **Google Workspace CLI** — Doc/Sheet/Slide auto-generation

### Local / vault-scoped MCPs

- **`graphify-finn-wiki`** — see [[graphify]]. Stdio MCP server that exposes 7 tools (`graph_stats`, `god_nodes`, `get_node`, `get_neighbors`, `get_community`, `query_graph`, `shortest_path`) for traversing the explicit knowledge graph over Finn-Wiki. Auto-loads when Claude Code is launched from the vault root via the `wiki` alias. Permission allowlist in `.claude/settings.local.json` pre-approves `mcp__graphify-finn-wiki`.

## How it fits this vault

When a new MCP gets wired into Cowork, this vault's [[ingest-workflow]] should treat it as a new tool surface. Notable for ingest:

- The Notion MCP is what powers [[life-os-update]] and the [[notion-life-os]] sync.
- The Vercel MCP could be wired into [[project-status-audit]] runs to verify deployment status without leaving the session.
- The Sanity MCP is the basis for any future "I want to manage [[somliøya]]'s content from chat" workflow.

## Caveats

- **Auth is per-MCP.** Each server has its own OAuth or API-key flow. The `authenticate` / `complete_authentication` tools in the deferred list handle this.
- **Schemas are deferred** in this Cowork session — they only load when needed, which is why ToolSearch is required before invoking MCP tools the first time.
- **Security:** MCP servers run with whatever permissions you grant; the [[deep-research-strategic-arbitrage|2026 briefing]] flags third-party MCP/skill marketplaces as a malware vector. Trust the official servers; audit before installing community ones.

## OpenClaw's connector model as a contrast

[[openclaw]] takes a different approach from MCP. Where MCP gives agents typed tool interfaces to SaaS APIs, OpenClaw's Connector layer reverse-engineers *human-facing* interfaces (WhatsApp, iMessage, Gmail) so the agent can act as the user. This is messier but gives the agent ambient context (seeing all messages, not just tool calls). The [[loopiness-framework]] positions MCP-style tool discovery as the Phase 3/4 mechanism for increasing agent capability. See [[openclaw-architecture]] for details.

## Where MCP shows up in agent-SaaS pricing

MCP is the wire that makes [[per-task-pricing]] economically observable: each task execution has a measurable token cost + a measurable count of MCP tool calls. That visibility is part of why per-task pricing becomes possible — you can compute margins per workflow execution rather than guessing based on per-seat averages. See [[orchestration-as-interface]] for how this surfaces in product UI.

## Related

- [[claude-code]]
- [[openclaw]]
- [[openclaw-architecture]]
- [[loopiness-framework]]
- [[wat-framework-marketing]]
- [[deep-research-strategic-arbitrage]]
- [[notebooklm-mastering-agentic-workflows]]
- [[phase-3-agents]]
- [[orchestration-as-interface]]
- [[agent-native-saas]]
- [[per-task-pricing]]
