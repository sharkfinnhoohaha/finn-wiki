---
title: "Git Worktree Pattern (Claude Code)"
type: tech
tags: [git, worktrees, claude-code, cowork, workflow]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_ac05b833-2a5a-44bd-97e8-58c840d59483, local_dec9a139-56d8-4a6c-8e9c-ad17f2bf5a53, local_c49c7f7b-15a7-4256-8a5f-b71125d9e309]
---

Claude Code spins up isolated worktrees for each feature session. The naming convention and the lost-work failure mode are both important enough to write down.

## Naming convention

```
claude/<feature-name>-<id>
```

Example: `claude/admin-dashboard-customization-HN68Q`. The `HN68Q` is a session-scoped suffix.

Local worktree directories use friendly names like `admiring-nash`, `charming-mayer`, `heuristic-ellis`, `peaceful-banach`. Don't confuse the worktree directory name with the branch name.

## Lost-work failure mode (the load-bearing one)

`claude/admin-dashboard-customization-HN68Q` was created in a Claude Code session worktree, work was done, but the branch was never pushed. The worktree was later cleaned up / pruned (Finn had recently deleted 21 stale branches per CLAUDE.md). **The work was lost.** Two days of admin dashboard customization, gone — no copy in `.git/objects`, no record in `~/.claude` session folders, nothing recoverable.

### Prevention

**Commit + push from inside the session, frequently.** Don't wait for "the end of the feature." A commit in a worktree that gets pruned without pushing is a commit that no longer exists.

If [[cowork-sandbox-limits]] applies (sandbox can't push to GitHub), commit locally and either:

1. Have Finn run `git push` from his terminal at session boundaries, or
2. Use the `deploy-changes.sh` pattern committed in the repo (Overlook portal has this), which Finn runs locally to push + trigger Vercel deploy.

The `deploy-changes.sh` pattern was extended in `local_c49c7f7b` to `git pull --rebase` before push, after a non-fast-forward bit on the Overlook portal feed/notice rebuild.

## Worktree cleanup commands

When a worktree is genuinely done:

```bash
git worktree remove <path> --force
git worktree prune
git branch -D claude/<name>
```

Used in `local_dec9a139` to clear out a stale `claude/peaceful-banach` worktree that was hanging around in VS Code source control.

## Cross-checking before declaring lost

Search order when a Claude Code branch appears to have vanished:

1. Local clones (`git branch -a`, `git worktree list`)
2. Both remotes (`origin`, plus any personal remote like `personal`)
3. Git reflog (`git reflog`)
4. `~/.claude/` session folders
5. Other active worktrees you forgot about

If none of the above turns it up, the work is gone.

## Reconstruction prompts

When work is lost, the cheap recovery is to give a structured prompt to GitHub Copilot or Claude Code (or Codex) describing what was built. The Overlook admin dashboard recovery used 3 reconstruction prompts targeting:

- `frontend/app/(admin)/admin/page.tsx`
- `frontend/components/admin/AdminSidebar.tsx`, `AdminLayoutClient.tsx`
- `frontend/components/admin/TaskManager.tsx`

Endpoints to wire: `GET /api/clients`, `PUT /api/tasks/{id}`. Stack constraints: Tailwind only, monochromatic, `formatCents()` for money, `adminFetch` for auth (see [[next-js-patterns]]).

## Gotchas (hit personally)

- **Worktrees can be pruned.** Treat in-session commits as ephemeral until pushed.
- **Remote rename breaks push.** Repo migrated from `sharkfinnhoohaha` → `Overlook-Strategy` org; pushes to old origin failed silently. Verify `git remote -v` after any GitHub org move.
- **Local main can drift behind remotes.** After remote rename, local `main` was 2 commits behind both remotes. `git pull` first.
- **Friendly worktree names ≠ branch names.** `admiring-nash` (worktree dir) is not `claude/<feature>-<id>` (branch). Both can exist independently.
- **Cowork sandbox can't push.** Always plan for a manual push step. See [[cowork-sandbox-limits]].

## Source citations

Sessions: `local_ac05b833` (the full lost-work post-mortem on `claude/admin-dashboard-customization-HN68Q`, repo migration from personal → org, reconstruction prompts), `local_dec9a139` (worktree cleanup commands, `claude/peaceful-banach` cleanup), `local_c49c7f7b` (deploy-changes.sh script, non-fast-forward fix with `git pull --rebase`).
