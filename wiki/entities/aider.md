---
title: "Aider"
type: entity
tags: [tool, ai-coding, cli, hybrid-workflow]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[session-2a27ba0d]], [[session-2c4ac600]]
---

# Aider

CLI AI coding assistant. Finn has used it in repos alongside Claude Code — `.aider.chat.history.md` was found in the [[gearflip]] repo, indicating prior Aider sessions there.

## Where it fits

- The local-model half of the [[hybrid-llm-workflow]]: `aider-local` alias points Aider at [[ollama]]'s `mistral` for grunt work, while `cc-sonnet` handles planning and synthesis in a parallel terminal
- Token-efficiency play: route mechanical edits and small refactors to Aider+local, save Claude credits for harder problems

## See also

- [[hybrid-llm-workflow]]
- [[ollama]]
- [[claude-code]]
- [[github-copilot]]
