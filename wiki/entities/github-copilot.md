---
title: "GitHub Copilot"
type: entity
tags: [tool, ai-coding, github, hybrid-workflow]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-dec9a139]], [[session-ac05b833]], [[session-1f40bcce]]
---

# GitHub Copilot

GitHub's AI coding assistant. Finn uses it as a fallback executor — when Claude has burned tokens trial-and-erroring or has hit a sandbox limit, his pattern is to ask for a "prompt to give to Copilot or Codex" rather than burning more Claude credits.

## How Finn uses it

- **Reconstruction prompts.** When the admin-dashboard work was lost in session-ac05b833, Claude generated Copilot prompts for Finn to redo the work in another agent.
- **Fallback for stuck debugs.** When the Alembic `noticetype` enum bug blocked [[overlook-portal-webapp]] deploys, Finn explicitly asked: "Give me a prompt I can give to codex or claude code to debug, I don't want to keep wasting claude credits having you fail at trying to fix it."
- **Has shipped its own buggy code, though.** Copilot authored both PR #20 (fix for `proxyAdminFetch` / `deleteDocument` mismatch) and the buggy Alembic migration `b3c9f1a2d8e0` whose `down_revision` pointed to the initial schema instead of the previous head — silently failing every Railway deploy.

## Quirks worth tracking

- Copilot doesn't always check Alembic chain integrity. Pre-push verification: `alembic heads`.
- Useful as a parallel agent — keep Claude on synthesis, route mechanical follow-up to Copilot.

## See also

- [[claude-code]]
- [[aider]]
- [[hybrid-llm-workflow]]
- [[overlook-portal-webapp]]
