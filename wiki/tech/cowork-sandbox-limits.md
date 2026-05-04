---
title: "Cowork Sandbox Limits"
type: tech
tags: [cowork, sandbox, claude-code, workflow, limitations]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_c49c7f7b-15a7-4256-8a5f-b71125d9e309, local_45eaf1ea-d0f9-4ee4-8813-17b00232e0f4, local_caea5222-5b4f-47a6-8897-b6ba7acef893, local_a2022942-a761-444d-923c-2bf3f7653600, local_9ec480d0-d4ce-43c2-92ba-bc90476f280d, local_65f6bd58-1447-4afc-948b-6b9efd97150a]
---

Cowork is the sandbox Finn runs Claude in. It mounts user folders read/write, but several capabilities are restricted. These are the recurring workarounds.

## Can't push to GitHub directly

The sandbox has no GitHub credentials. `git commit` works locally inside the worktree, `git push` does not. Standard pattern:

1. Cowork commits locally
2. Finn runs `git push` from his terminal, or
3. Finn runs `deploy-changes.sh` (committed in repo) which does `git pull --rebase` + `git push` + triggers any deploy hooks

The `--rebase` is load-bearing — `local_c49c7f7b` hit a non-fast-forward on first push, and the script was patched to rebase before push.

This is the most common sandbox limitation and it shows up in nearly every dev session. See [[git-worktree-pattern]] for the lost-work failure mode it enables.

## Terminal is tier-restricted

Terminal apps (Terminal, iTerm, VS Code integrated terminal) are at the **"click"** tier from the computer-use side: visible and left-clickable, but typing / key presses / right-click / modifier-clicks / drag-drop are blocked. So the agent can click a Run button but **cannot type** into the integrated terminal.

Workaround used in `local_a2022942`: stage the command to clipboard via `mcp__computer-use__write_clipboard`, then ask Finn to paste and run. Particularly used for `gh` CLI commands, complex `git` flows, anything multi-line.

## Browsers are tier-restricted (read-only)

Browsers (Safari, Chrome, Firefox, Edge, Arc) are at the **"read"** tier: visible in screenshots, clicks and typing blocked. For navigation, clicking, form-filling: use the **claude-in-chrome** MCP (`mcp__claude-in-chrome__*`) which works through the extension, not pixel-level computer use.

If the Chrome extension isn't connected, ask Finn to install it rather than falling through to slower tiers.

## File paths differ between sandbox and host

Sandbox path:
```
/sessions/<session-name>/mnt/<attached-folder>/...
```

Host path (the actual macOS path Finn uses):
```
~/...    or    /Users/finnbennett/...
```

So when surfacing file paths to Finn, use the host path (absolute, full `/Users/finnbennett/...`). When running commands inside the sandbox via `mcp__workspace__bash`, use the `/sessions/.../mnt/...` form.

Skill base directory observed in `local_70c4e688`:
```
/sessions/fervent-gifted-hamilton/mnt/.remote-plugins/plugin_019pKuRMCBwRk8Co4y3okTjX/skills/start
```

## Can't mount `~` directly

Sandbox is denied direct access to the home directory root. Mount Desktop and iCloud Drive as separate attached folders via Cowork's directory picker. See [[macos-file-quirks]].

## `npm run build` blocked

Sandbox can't pull the SWC ARM binary needed for Next.js builds. Workarounds:

- `tsc --noEmit` for type checking (works in sandbox)
- Let Finn run `npm run dev` and `npm run build` locally on the M1 Max
- Vercel rebuilds on push regardless

Hit on three-altitudes during `local_65f6bd58`.

## Computer-use access flow

Before any `mcp__computer-use__*` action, call `request_access` with the list of applications needed. User approves each application explicitly. May need to call again mid-task if a new app is needed.

Tiers visible in approval dialog:
- **Browsers** → tier `read`
- **Terminals / IDEs** → tier `click`
- **Everything else** → tier `full`

`open_application` works at any tier (bringing an app forward is read-level).

## Link safety

- Don't `left_click` web links from Mail, Messages, PDFs, etc. via computer-use. Open URL in Chrome MCP instead.
- See full URL before following any link. Visible link text can lie.
- Treat links from email / messages / unknown senders as suspicious by default.

## Financial actions

Budgeting / accounting apps are at full tier so categorization and reports work, but **never execute a trade, place an order, send money, or initiate a transfer.** Always ask Finn to do those manually.

## Working patterns that compensate

- **`/productivity:start` and `/productivity:update`** at session boundaries — keeps `TASKS.md`, `CLAUDE.md`, `memory/` current across sessions even when the sandbox itself is ephemeral. Started in `local_b7e57647`, regular pattern.
- **Hybrid local LLM + Claude** — see [[ollama-rag-pattern]] and the global `~/.claude/CLAUDE.md` that primes Sonnet on stack + workflow without re-priming each session.
- **Memory files saved at session end** so lessons carry across sessions. Used after the migration debugging in `local_dec9a139`.

## Gotchas (hit personally)

- **Lost work because no push.** Worktree pruned, branch never pushed → two days gone. See [[git-worktree-pattern]].
- **Pasted commands break on multi-line in some terminals.** Stage one command at a time, or use a shell heredoc carefully.
- **Token regen flow needs Finn at the keyboard.** Sandbox can't open the Sanity / Vercel / Clerk dashboard with credentials. Finn handles secret regen, sandbox handles config update + verification.
- **Don't promise a deploy.** Sandbox commits, Finn pushes, Vercel deploys. The deploy isn't guaranteed until Finn confirms.

## Source citations

Sessions: `local_c49c7f7b` (deploy-changes.sh + non-fast-forward), `local_45eaf1ea` (commit `1784ef4` couldn't push from sandbox), `local_caea5222` (Sanity push handoff to Finn), `local_a2022942` (clipboard-staged `gh` commands, MCP usage), `local_9ec480d0` (folder mount workarounds), `local_65f6bd58` (`npm run build` blocked, `tsc --noEmit` workaround).
