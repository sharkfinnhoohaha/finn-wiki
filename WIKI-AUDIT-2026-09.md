# WIKI AUDIT - 2026-09

Audit date: 2026-09-09. Read-only audit of /Users/Finn/.hermes/wiki (also known as /Users/Finn/Code/Finn-Wiki). Graph mirror: graphify-out/graph.json, 2,811 nodes, 4,418 edges, built from commit c78da25 (2026-09-09). The graph mirrors the wiki's folder structure exactly, so wiki staleness IS graph staleness.

Method note: "last git activity" = last commit date on the repo in /Users/Finn/Code. "Session activity 30d" = sessions in ~/.hermes/state.db with last_activity_at in the 30 days before 2026-09-09, matched on title / display_name / cwd. Where a project has no code repo in /Users/Finn/Code, that is called out.

---

## 1. Per-project table

| Project | Wiki pages | Graph nodes | Last git activity | Session act. 30d | Recommended weight |
|---|---|---|---|---|---|
| Overlook (webapp, portal, strategy, audio, invoices) | ~26 pages under projects/ deployed+in-progress+abandoned, plus business/ overlook cluster | 193 nodes, ~691 total degree (largest cluster in graph) | claude_Overlook-webapp: 2026-08-23 (149 commits since 06-01) | Y (sparse, 1 matched) | active - keep |
| Pier & Point (editorial) | pier-and-point pages in business/ (monetization cluster), pier-and-point-research, entities | 25 nodes in project bucket, but ~51-node monetization community + large entity clusters | pier-and-point repo: 2026-07-10 (only 5 commits since 06-01; editorial happens via Hermes cron, not this repo) | Y (very high, 14 matched sessions, daily article-idea cron) | active - keep (note repo/reality gap below) |
| Ventura Forward (newsletter + Dashboard + app) | ventura-forward-app page (projects/in-progress), ventura-forward entities, business pricing/positioning pages | 28 nodes in bucket (under-count, much lives in business/ sources) | Ventura-Forward-Dashboard: 2026-08-28 (316 commits since 06-01, most-committed repo) | Y (daily newsletter cron + story sessions) | active - keep |
| Waveshade | waveshade.md (projects/in-progress) + entities waveshade cluster | 10 nodes | No git repo in /Users/Finn/Code (only research briefs at ~/waveshade-*.md). Shopify-managed ecommerce | N (0 matched sessions) | confused - needs Finn |
| Somliøya | somliøya.md (projects/in-progress, status active) + clients/somliøya + somlioya-nextjs-deprecated (deployed) | 26 nodes | somlioya-tinacms: 2026-07-08 (14 commits since 06-01) | N (0 matched sessions) | confused - needs Finn |
| ovlk.tech | No dedicated ovlk page found; referenced in overlook-strategy/agentic-services positioning | (folded into overlook bucket) | No standalone ovlk.tech repo found | N | confused - needs Finn |
| Hermes (maintenance) | Hermes nodes in concepts/, tech/, hermes-webhook-setup community | 52 nodes (49-node hermes-webhook-setup community) | hermes-workspace: 2026-08-22 | Y (7 matched sessions) | active - keep |
| Metacheck | metacheck.md (projects/deployed, status shipped) | 7 nodes | 2026-07-08 (65 commits since 06-01) | N | stale - downweight (deployed, done; demote to archive reference) |
| Starcommand | starcommand.md (projects/abandoned, status dormant) | 6 nodes | 2026-08-14 (9 commits since 06-01) | N | archived - prune or freeze (wiki says abandoned, git has recent-ish commits; reconcile) |
| Openclaw / Atlas fleet | openclaw-fleet cluster (39-node community), Atlas rollout pages, 5+ project pages | 121 nodes (2nd largest bucket) | atlas-webhook / atlas-corpus exist but not on audit commit list | N (0 matched sessions) | stale - downweight |
| Notion Life OS | notion-life-os.md + entities (36-node community) | 95 nodes (3rd bucket) | n/a (builds into wiki/skills, not a Code repo) | N | stale - downweight |
| Others (riptide, gearflip, three-altitudes, copper-and-cast, cue-track, johnson-aviation, berklee, etc. from status-dashboard) | status-dashboard lists 18 "in-progress"; most last touched Apr 2026 | riptide 43, gearflip 40, notion 36, three-altitudes 56 (degree) | see git table below | N for all | stale or archived per-item |

Non-active repos in /Users/Finn/Code (last commit / commits since 06-01):
- overlook-web: 2026-04-25 / 0
- ventura-forward-shop: 2026-06-17 / 2
- cue-track: 2026-07-07 / 9
- starcommand: 2026-08-14 / 9
- somlioya-tinacms: 2026-07-08 / 14
- pier-and-point: 2026-07-10 / 5
- metacheck: 2026-07-08 / 65
- claude_Overlook-webapp: 2026-08-23 / 149
- Ventura-Forward-Dashboard: 2026-08-28 / 316 (most active)
- hermes-workspace: 2026-08-22

---

## 2. Obviously wrong

1. **ventura-forward-app.md has contradictory double frontmatter.** The outer YAML block says status active, updated/last_touched 2026-09-09. The inner "life-os-daily contract" block says revenue_type: retainer with last_touched 2026-04-20 and a stale next_action ("Finish schema migration + RLS policies... from Apr 19"). Same page is both "9 Sep current" and "20 Apr frozen." File: wiki/projects/in-progress/ventura-forward-app.md.

2. **status-dashboard.md header says "In-progress (14)" but lists 18 rows.** The "(14)" count is stale. File: wiki/projects/status-dashboard.md, lines 31-51. Header also says "Abandoned (19)"; the list enumerates differently.

3. **status-dashboard says waveshade "Last touch Apr 24" but waveshade.md frontmatter says updated/last_touched 2026-08-28.** The dashboard was generated 2026-04-24 (per its own text) and never refreshed, while the project page moved. File: wiki/projects/status-dashboard.md line 40 vs wiki/projects/in-progress/waveshade.md.

4. **admin-client-app-template-ovlk.md sits in projects/unfinished/ but frontmatter status is dormant (and updated 2026-09-09).** Folder and status disagree about whether this is an active task or an abandoned template. The dashboard also flags it as "superseded by overlook-portal-webapp." File: wiki/projects/unfinished/admin-client-app-template-ovlk.md, dashboard lines 63-64.

5. **Portal landing page is in Deployed but marked ERROR.** status-dashboard lists portal-landing-page in Deployed (line 123) while the same page's note says "ERROR state, may actually belong in Unfinished." Contradictory placement. File: wiki/projects/status-dashboard.md.

6. **Pier & Point repo inactivity vs heavy editorial activity.** pier-and-point repo had 5 commits since 06-01 (last 07-10), yet 14 Hermes sessions in 30 days run its daily article-idea cron. Either the real editorial content lives outside this repo (other repo, CMS, or a different branch) or the wiki/repo mapping is wrong. Needs Finn to reconcile where P&P editorial actually lands.

7. **Somliøya wiki says active (status: active, weight high) but git is frozen at 07-08 and there are 0 sessions in 30 days.** The wiki's "active" flag has not caught up with 2+ months of no code/session activity. File: wiki/projects/in-progress/somliøya.md. (Finn's stated active list includes Somliøya, so this is a needs-Finn call, not a prune.)

8. **Waveshade is on the active list with no code repo.** Wiki project page is current (08-28) but the only Waveshade artifacts found are research briefs at ~/waveshade-*-brief.md. If active work is all Shopify-admin, that is fine, but the wiki has no link to it and no Shopify/ops page. The status-dashboard "last touch Apr 24" row is the stale half.

9. **Starcommand is marked abandoned in the wiki (projects/abandoned/starcommand.md, status dormant) but the git repo shows commits through 08-14.** Either the wiki is wrong about abandonment or the git activity is unfinished cleanup. One of them is wrong. File: wiki/projects/abandoned/starcommand.md.

10. **Entity cluster over-represents dormant work.** Top graph clusters by node count are overlook-strategy-positioning (135), pier-and-point-monetization (51), riptide (43), gearflip (40), openclaw-fleet (39), notion-life-os (36). riptide / gearflip / openclaw / notion have had zero session activity in 30 days and their project pages are last-touched Apr-Jun 2026, yet they are first-class graph clusters. The graph inflates shelf projects.

---

## 3. Proposed new top-level wiki structure

Current structure has 13 top-level folders (business, clients, comparisons, concepts, design, entities, inbox, maintenance-reports, personal, projects, sources, tech, workflows) plus a large raw/ tree. Proposal below reflects actual Sept 2026 priorities.

- **01-active** (only projects with recent git OR session activity: Overlook, Pier & Point, Ventura Forward, Hermes)
- **02-clients** (client work: Somliøya, Waveshade, others; page-level status must be reconciled first)
- **03-newsroom** (Pier & Point AND Ventura Forward editorial, merged; daily-cron source of truth)
- **04-biz-ops** (business/pricing/positioning, ovlk.tech)
- **05-hermes-ops** (Hermes maintenance, webhooks, model ops)
- **06-reference** (research, sources, agentic-pattern extracts from raw/)
- **07-archive** (everything stale: riptide, gearflip, openclaw fleet, notion, metacheck, abandoned/, deprecated)

Keep concepts/, tech/, workflows/, personal/, comparisons/ but move any node whose project is dead into 07-archive. Delete the raw/ mirrored clutter once verified against 06-reference. Add a single canonical status-dashboard that is regenerated from project-page frontmatter, not hand-edited.

---

## 4. Questions for Finn

1. **Somliøya: prune or keep active?** 0 sessions in 30 days, git frozen at 07-08, but wiki + your active list say active. Is it dormant (freeze) or actively waiting (keep)?
2. **Waveshade: what is the repo / ops home?** No code repo found. Is all work Shopify-admin? If so, give it a Shopify/ops page and demote the stale dashboard row.
3. **ovlk.tech: does it exist as a code project?** No standalone repo or page. Is it a landing/property under Overlook, or something new needing its own page?
4. **Delete vs archive:** For riptide, gearflip, openclaw-fleet, notion-life-os, metacheck, starcommand, overlook-web, ventura-forward-shop, cue-track: delete the pages+graph nodes outright, or move to 07-archive/freeze? (Graph node count is inflated by these; pruning them meaningfully shrinks the graph.)
5. **Pier & Point repo mapping:** Which repo actually holds Pier & Point editorial output? pier-and-point repo is nearly idle (5 commits since 06-01) while sessions are daily. Fix the wiki's source-of-truth so the graph maps editorial to the right place.
6. **status-dashboard ownership:** It is hand-generated and already 5 months stale. Approve moving to an auto-regenerated dashboard from project frontmatter so this class of error stops recurring?
7. **The inner "life-os-daily contract" frontmatter blocks are stale and conflict with outer blocks.** Can these be dropped, or do they feed a life-OS report that needs them?

---

## Evidence paths cited
- Wiki root + graph: /Users/Finn/.hermes/wiki, graphify-out/graph.json
- status-dashboard: wiki/projects/status-dashboard.md
- Project pages: wiki/projects/in-progress/{ventura-forward-app,somliøya,waveshade}.md, wiki/projects/unfinished/admin-client-app-template-ovlk.md, wiki/projects/abandoned/starcommand.md
- Git last-commit: git -C /Users/Finn/Code/<repo> log -1 --format=%ci, per repo
- Session activity: sqlite3 ~/.hermes/state.db sessions table, last 30 days
