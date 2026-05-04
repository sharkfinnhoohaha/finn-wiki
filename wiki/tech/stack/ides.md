---
title: "IDEs — VS Code, JetBrains, Cursor, Zed"
type: tech
tags: [stack, ide, editor, vscode, webstorm, datagrip, cursor, windsurf, zed, jetbrains]
created: 2026-04-29
updated: 2026-04-29
weight: high
node_size: 10
sources: [[theo-claude-code-favorite-stack-2026-04-29]]
---

# IDEs

Finn has the [[jetbrains|JetBrains All Products Pack]] free via [[student-discounts|student status]] and downloaded WebStorm + DataGrip without knowing what they do. This page exists to map "have it installed" → "actually use it for X."

> [!warning] JetBrains educational license is non-commercial only
> Per [[student-discounts]] audit (April 28, 2026): JetBrains educational license **strictly prohibits commercial use**. Cannot be used for paid Overlook Strategy client work. For client engagements: stay in VS Code, or buy a separate JetBrains commercial license. Personal projects + Berklee coursework only.

## Pick (default for Finn)

- **VS Code** for everything, including all client work. Mature, extensible, free for any use, where Claude Code lives best.
- **WebStorm** when refactoring across many TypeScript files. Open the same project in both — VS Code for daily, WebStorm for the once-a-month "rename this thing across 80 files" job.
- **DataGrip** when actively writing complex SQL or comparing schemas across environments. Otherwise [[stack/databases|TablePlus / Beekeeper / Postico]] are lighter.

## Stack at a glance

| Tool | Cost | Sweet spot | When it beats VS Code |
|---|---|---|---|
| **VS Code** | Free | TypeScript, Next.js, Tailwind. Default editor. Best AI-coding integrations | (it's the baseline) |
| **WebStorm** | Free via [[jetbrains]] (non-commercial) | Large-scale TS/JS refactors. Built-in framework intelligence. Real debugger | Multi-file refactors, "find all usages" actually works, native React/Vue/Angular awareness |
| **DataGrip** | Free via [[jetbrains]] (non-commercial) | Multi-environment SQL work, schema diffs, refactor SQL as code | Daily SQL across local/staging/prod with switches. JOINs that need autocomplete |
| **Cursor** | $20/mo Pro (1yr free for [[student-discounts\|students]] via SheerID) | In-editor AI completions. Tab autocomplete is best-in-class | When you live in Tab-tab-tab editing more than chat-with-agent. Composer mode for multi-file edits |
| **Windsurf** (Codeium) | Free + $15/mo Pro | Built-in agentic Cascade. Acquired by Cognition (Devin) Dec 2025 | Autonomous multi-step edits inside the editor. Less context-aware than Claude Code |
| **Zed** | Free | Rust-built, GPU-accelerated, sub-ms responsiveness | When VS Code feels slow on huge files. Plugin ecosystem still lags |
| **Other JetBrains** | Free via [[jetbrains]] (non-commercial) | RustRover, GoLand, PyCharm, Rider | Only install the language-specific IDE if working in that language daily |

## VS Code essentials (Finn's baseline 2026)

- **Tailwind CSS IntelliSense** — non-negotiable for the Tailwind workflow
- **ESLint** + **Prettier** — formatting + linting as save-time
- **Error Lens** — inline diagnostics
- **Path IntelliSense** — autocomplete for file paths
- **GitLens** — git blame inline
- **Pretty TypeScript Errors** — actually-readable TS errors
- **Better Comments** — color-coded comment markers
- **Continue.dev** — open-source local AI assistant if you want a local-LLM fallback

## When to actually open WebStorm

WebStorm wins on large-scale refactoring. Specifically:

- **Renaming an exported function used in 50+ files** — VS Code can do it but WebStorm's safe-rename understands re-exports and barrel files better.
- **Moving a function between files** with auto-update of imports — WebStorm's "Move" refactoring is type-aware in a way VS Code's quick fix isn't.
- **Multi-file find-and-replace with regex previews** — WebStorm shows scope and previews per file, easier to audit before applying.
- **Debugging a Node service locally** — WebStorm's debugger config is one-click; VS Code requires a `launch.json`.

For day-to-day Next.js work, VS Code wins on speed, AI integrations, and Tailwind tooling.

## When to actually open DataGrip

DataGrip wins when SQL is the primary thing you're doing, not a side activity. Specifically:

- **Writing a non-trivial query against an unfamiliar schema** — autocomplete with full type-aware joins.
- **Comparing schemas across environments** (local vs staging vs prod) — drag-and-drop schema diff.
- **Refactoring a stored procedure** — proper IDE features, not text.
- **Working across multiple DB dialects** in one project (Postgres + Redis + MongoDB) — single window, multiple consoles.

For "I just want to inspect a Neon table real quick," **TablePlus** ($89 lifetime, free trial) or **Beekeeper Studio** (free, open-source) is faster to launch and friendlier.

## Cursor vs Windsurf vs Claude Code

| Tool | Where it lives | When it wins |
|---|---|---|
| **[[claude-code]]** | Terminal + Cowork desktop app | Multi-step autonomous tasks, "plan then execute," reading whole codebases. The agent that doesn't lose state |
| **Cursor** | Editor (forked VS Code) | Tab-tab-tab editing flow. Composer for multi-file in-editor edits. Best when you want AI in the cursor, not in a chat window |
| **Windsurf** | Editor (forked VS Code) | Cascade agent mode. Newer, less mature than either Claude Code or Cursor, but improving fast under Cognition |

Finn's setup: Claude Code as primary autonomous agent, VS Code as editor. **Don't pay for Cursor unless tab-completion becomes the bottleneck** — which it isn't currently because Claude Code handles the autonomous edits. Cursor Pro is free for 1 year via student SheerID — worth claiming "just to try" if Finn wants to A/B against Claude Code.

## Worth knowing about

- **Helix** — modal terminal editor, kakoune-inspired. Worth knowing exists but not for daily Next.js work.
- **Neovim + LazyVim** — if you ever want a terminal-only IDE setup. Steep learning curve, not worth swapping defaults.
- **Fleet** (JetBrains) — JetBrains' new lightweight IDE. Came out of beta but isn't yet a VS Code replacement.

## Avoid / paid-default trap

- **Sublime Text** — beautiful, but the ecosystem hasn't kept pace. Not worth paying $99 in 2026.
- **Atom** — sunset by GitHub in 2022. Not relevant.
- **Paid JetBrains for individual side projects** when the educational license covers the same thing.

## Finn's current pick (as of 2026-04-29)

- **VS Code** as default for all work (commercial-safe).
- **WebStorm installed**, used opportunistically for refactors. Try once a week to build the muscle.
- **DataGrip installed**, used for any [[neon]] or [[postgres]] work that involves more than 2-3 queries.
- **Claude Code** as the AI agent of choice. No Cursor / Windsurf subscription.
- **Zed installed for fun**, not yet replacing VS Code.

## Used by

IDE choice is per-Finn, not per-project. All projects open in VS Code by default. Specific contexts:

- Any [[next-js-patterns]] work → VS Code (with Tailwind / ESLint / Prettier extensions)
- Any large refactor across [[overlook-portal-webapp]], [[three-altitudes]], [[gearflip]] → consider WebStorm
- Any [[neon]] / [[postgres]] work for [[overlook-portal-webapp]] or [[ventura-forward-app]] → DataGrip beats `psql` once query complexity goes up
- [[riptide]] firmware (when it lands) → likely CLion (also free via [[jetbrains]] educational pack)
- [[gemini-usage-tracker]] — Swift / iOS / macOS → Xcode (not in JetBrains pack); don't try to force this into another IDE

## See also

- [[student-discounts]] · [[jetbrains]] · [[stack/ai-coding-tools]] · [[stack/databases]] · [[next-js-patterns]]
- External: [WebStorm vs VS Code 2026](https://thesoftwarescout.com/webstorm-vs-vs-code-2026-which-javascript-ide-should-you-choose/) · [JetBrains Student Pack](https://www.jetbrains.com/academy/student-pack/) · [Zed editor](https://zed.dev)
