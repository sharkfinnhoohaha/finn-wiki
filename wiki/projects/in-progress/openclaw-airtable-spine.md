---
title: "OpenClaw Airtable Spine"
type: project
status: active
tags: [openclaw, atlas, airtable, hyperagent, mission-control]
created: 2026-05-05
updated: 2026-05-05
sources: []
aliases: [airtable-fleet-schema, openclaw-state-spine, fleet-spine]
---

# OpenClaw Airtable Spine

Schema spec for Finn's [[openclaw]] agent fleet — three Airtable tables that serve as the canonical state spine for the fleet AND wire into [[hyperagent]]'s native record-change trigger to invoke [[atlas]].

**Status:** Spec only. No bases or tables to be created until Finn signals go.
**Lands after:** Telegram supergroup migration (this week) and webhook backup (Atlas Phase 1 ingest, ends 2026-05-12).
**Authoritative copy:** This page IS the spec. The Cowork session that produced it stored an identical Markdown file at `~/Library/Application Support/Claude/local-agent-mode-sessions/.../outputs/airtable-fleet-schema-spec.md` — but use this wiki page as the canonical reference going forward.

> [!note]
> See also: [[atlas]], [[mission-control]], [[hyperagent]], [[kevin]], [[otto]], [[bridge]], [[openclaw]]. The Telegram + webhook + Airtable redundancy plan is documented in [[openclaw]]'s communication-paths section.

---

## 0. Why this exists

OpenClaw's fleet runs on three redundant communication paths into [[atlas]]: Telegram (humans-in-the-loop, narrative), webhook (programmatic, fast), and Airtable (this spec). Airtable earns the third slot for three reasons that don't all overlap with the other two:

1. **HyperAgent's native trigger surface.** Airtable is HyperAgent's parent product. The record-change trigger fires on writes and is the cheapest, most-supported way to invoke an agent without writing a transport layer. Telegram and webhooks both require Atlas's poller or an exposed endpoint; Airtable is push-from-the-platform.
2. **A structured-instruction surface for Finn.** Telegram is good for prose. Airtable is good for "set status to `blocked`, paste a diff into `proposed_diff`, change `reviewed_by` to `Finn`." Phone-editable, schema-enforced, no prompt engineering required from the orchard owner's deck.
3. **State collapse for [[mission-control]] v0.2.** MC v0.2 was originally scoped to fan out to five sources (Telegram, [[vercel]], GitHub, Apify-ish queues, raw agent logs). If Airtable becomes the canonical state spine, MC reads one API. The five sources still exist as event producers — they just write *into* Airtable instead of being polled directly.

Airtable also doubles as a recovery surface: when Telegram and the webhook both fail (network partition, rate-limit storm, runtime crash), Atlas's scheduled run reads `fleet_state` and `events` to reconstruct what he missed. That redundancy is the actual ROI; the trigger is the bonus.

---

## 1. Existing Airtable inventory

At spec time, Finn's Airtable account contains two bases, both named **"Overlook CRM"** (`appCXkn5tfAirqJFW` and `appROswveDDgyHBsw`). Neither maps to OpenClaw. **Spec assumes a fresh base named `OpenClaw Fleet Spine`.**

> [!warning]
> The two duplicate "Overlook CRM" bases are unrelated to this spec but worth a janitor pass — pick the canonical one and archive the other before standing up `OpenClaw Fleet Spine` so the base picker stays clean.

---

## 2. Table 1 — `fleet_state`

**One row per agent. The "where is everyone right now" snapshot.**

This table is small (5 rows today: [[kevin]], [[otto]], [[bridge]], [[atlas]], [[mission-control]]) and gets a high ratio of reads-to-writes. It is the table Finn looks at first on his phone, the table Mission Control's `/` route renders, and the first thing Atlas reads on a scheduled run before he reads `events`.

### Fields

| Field | Type | Notes |
|---|---|---|
| `agent_name` | Single-select (primary) | `Kevin`, `Otto`, `Bridge`, `Atlas`, `Mission Control`. Primary because each agent is unique and the name is human-typeable. |
| `status` | Single-select | `idle` / `running` / `blocked` / `errored` / `offline`. Default `idle`. `offline` is set by the staleness sweeper, not by the agent itself. |
| `last_heartbeat` | Datetime | UTC. Written explicitly by the agent on every heartbeat. |
| `current_task` | Long text | One sentence ideally. Gets overwritten on every heartbeat — this is not history. |
| `last_error` | Long text | Set when `status=errored`. Cleared (set to empty) on recovery. Atlas treats a non-empty `last_error` as a signal to investigate during scheduled runs even if no `event` was logged. |
| `pending_questions_count` | Number (integer) | Written by the agent when it queues a question for Finn. Decremented when answered. Useful for the "needs Finn" view. |
| `recent_lessons_count` | Rollup from `lessons` (count where `target_agent` = this row, `created_at` within last 7 days, `status` in {approved, merged}) | Read-only by humans; computed by Airtable. |
| `notes` | Long text | **Finn-editable.** This is the "Finn instructs Atlas via Airtable" surface. Atlas's scheduled run reads `notes` for every agent and treats non-empty notes as guidance. Atlas may quote or paraphrase from `notes` in responses, but should NOT edit `notes` — that field is Finn-only. |
| `bootstrap_version` | Single-line | Git short-SHA or version tag of the agent's BOOTSTRAP.md / config that's currently running. Written by the agent on startup. Used by Atlas to detect "did my proposed lesson actually land?" |
| `pid_or_runtime` | Single-line | "HyperAgent run ID", "GitHub Actions job ID", "local PID on Kevin's Mac" — whichever applies. Aids debugging across surfaces. |

### Edge case: heartbeat staleness when an agent crashes

If an agent crashes hard, it can't write `status=offline`. Solution: a **scheduled function** (HyperAgent cron, Atlas's scheduled run, or an Airtable Automation) every 5 minutes flips any row whose `last_heartbeat` is older than 15 minutes from `running` → `offline`. The threshold is deliberately generous to absorb cold-start latency on HyperAgent.

A `Stale` view (defined in §6) surfaces these without requiring the sweeper. Atlas treats `offline` differently from `errored`: `offline` means we don't know, `errored` means we know it broke. Don't confuse them.

---

## 3. Table 2 — `events`

**Append-only log of significant fleet events. THIS is the table HyperAgent's record-change trigger watches.**

Cost-gating principle: an event row costs an Atlas invocation. Don't write events the fleet doesn't care about. A heartbeat is not an event. A heartbeat that flips `status=errored` is not an event by itself either — the agent should write a row to `events` with `severity=error`, `event_type=pipeline_failure`, and let Atlas decide whether to act. Heartbeats stay on `fleet_state`.

### Fields

| Field | Type | Notes |
|---|---|---|
| `id` | Auto-number (primary) | Sequential. Useful for debugging ("what was event 4127?"). |
| `created_at` | Created time | Immutable. Set by Airtable. Never trust client-provided timestamps for ordering. |
| `agent` | Link to `fleet_state` | The agent that emitted the event. Required. |
| `event_type` | Single-select | `question` / `lesson_proposal` / `pipeline_failure` / `pipeline_success` / `deploy` / `external_alert` / `scheduled_check` / `manual`. The taxonomy intentionally collapses many real-world events into 8 buckets — Atlas reads `payload` for specifics. |
| `severity` | Single-select | `info` / `warn` / `error` / `critical`. `critical` always pages Finn via Telegram regardless of `requires_response`. |
| `title` | Single-line | Human-skimmable summary, ≤ 100 chars. Required. |
| `payload` | Long text | JSON-shaped string when structured; free text when not. Atlas parses defensively (try-JSON-then-treat-as-prose). |
| `requires_response` | Checkbox | Does Atlas need to act, or is this observability? Defaults to `true` unless writer explicitly sets `false`. Pipeline successes default to `false`; pipeline failures default to `true`. |
| `atlas_status` | Single-select | `pending` / `processing` / `acknowledged` / `dismissed` / `completed`. Default `pending` for `requires_response=true`, `acknowledged` otherwise. |
| `atlas_response` | Long text | Written by Atlas after handling. May contain a link to a `lessons` row. |
| `processed_at` | Date/time | Set by Atlas when transitioning out of `pending`/`processing`. |
| `correlation_id` | Single-line | Ties multiple events into one logical incident. Optional. Use cases: "Kevin's deploy failed → Atlas filed a lesson → lesson applied → next deploy succeeded" are four events with the same `correlation_id`. |
| `source_url` | URL | Link back to whatever surface generated the event — a Vercel deploy log, a GitHub Action, a Telegram message permalink. |

### Critical design question — HyperAgent record-change trigger semantics

> [!warning]
> **Verification needed in dashboard.** No public docs available for HyperAgent's record-change trigger. The spec assumes the trigger can fire on insert + filtered update, with a configurable filter expression. Finn must verify on first wiring whether:
>
> 1. **Does the trigger fire on insert only, or insert+update?** If insert+update, Atlas writing `atlas_status=processing` would self-trigger. Disaster: infinite loop.
> 2. **Does HyperAgent honor an Airtable view-based filter?** Best-case answer: configure the trigger to watch the view `events :: pending Atlas action` (defined in §6). When Atlas flips `atlas_status` away from `pending`, the row leaves the view, no re-trigger. This is the cleanest guard if HyperAgent supports it.
> 3. **What's the trigger payload shape?** Probably `{ recordId, fields: {...} }` JSON. Finn must inspect the first real invocation and document.
>
> **Fallback guard regardless of trigger semantics:** Atlas's first action on receiving an event is to write `atlas_status=processing`. If the trigger fires on update too, Atlas reads `atlas_status` from the incoming payload — if it's not `pending`, no-op and exit. Idempotent guard at the agent level. Belt-and-suspenders pattern; cheap to implement.

### Edge case: what if HyperAgent's trigger silently drops events under load?

Atlas's scheduled run (every 30 min, per existing playbook) queries `events :: pending Atlas action` and drains the queue. The trigger is the fast path; the scheduled run is the catch-up path. Don't depend on the trigger for correctness — depend on it for latency.

---

## 4. Table 3 — `lessons`

**Atlas's outputs. Every lesson he files lands here.**

### Fields

| Field | Type | Notes |
|---|---|---|
| `id` | Auto-number (primary) | Same rationale as `events.id`. |
| `created_at` | Created time | Immutable. |
| `target_agent` | Link to `fleet_state` | Which agent the lesson is for. Atlas himself is a valid target — Atlas can teach Atlas. |
| `phase` | Number (integer, 1–3) | Atlas's three-phase model: 1 = ingest/observe, 2 = propose, 3 = enforce. Mission Control's lesson strip groups by phase. |
| `lesson_type` | Single-select | `bootstrap_edit` / `memory_edit` / `skill_proposal` / `process_change` / `observation`. |
| `title` | Single-line | Required. ≤ 120 chars. |
| `body` | Long text | The actual lesson, prose. Markdown-flavored. |
| `proposed_diff` | Long text | If the lesson is a code/config change, the literal unified diff. Empty otherwise. Mission Control renders as code. |
| `target_file` | Single-line | E.g., `kevin/BOOTSTRAP.md`, `otto/skills/publish.md`. Empty for `observation` and `process_change`. |
| `status` | Single-select | `draft` / `awaiting_review` / `approved` / `rejected` / `merged` / `superseded`. Default `awaiting_review` (Atlas drafts straight to review unless explicitly held). |
| `reviewed_by` | Single-select | `Finn` / `auto-merged` / `not yet`. After Day 22 of the OpenClaw rollout, low-risk lesson types (defined in Atlas's BOOTSTRAP) auto-merge — that's where `auto-merged` comes from. |
| `merged_at` | Date/time | Set when status flips to `merged`. |
| `outcome` | Long text | Written by Atlas 24–72h after merge — "did the change have the intended effect?". Empty until then. |
| `supersedes` | Link to `lessons` (self-reference) | Set when this lesson replaces an earlier one. The earlier lesson's `status` flips to `superseded` automatically (via Airtable Automation or by Atlas). |
| `correlation_id` | Single-line | Same field as on `events` — lets you trace event → lesson → outcome end-to-end. |

### Edge case: lesson supersedes another lesson

Two patterns:

- **Chain (preferred):** Self-link via `supersedes`. Newest lesson points back at the one it replaces. Old lesson's status → `superseded`. Walking the chain reconstructs history.
- **Fork (avoid):** Two new lessons both supersede the same parent. If Atlas finds himself doing this, he should instead file one consolidated lesson that supersedes the parent. Mission Control's lesson view doesn't render forks well.

`supersedes` cycles must be prevented at the agent level — Atlas should refuse to file a lesson whose `supersedes` points at itself or its descendants. There's no clean Airtable-side guard.

---

## 5. Trigger config sketch (HyperAgent)

> [!warning]
> All values below are best-effort. Verify in the HyperAgent dashboard during wiring (Day 5 of §10).

**Trigger:** Airtable record change
**Base:** `OpenClaw Fleet Spine`
**Table:** `events`
**Fire on:** insert + update *(if separable; if not, insert only and rely on scheduled run for state-flip events)*
**Filter:** `atlas_status = "pending"` AND `requires_response = true` *(if HyperAgent supports filter expressions; otherwise filter via "watch view" pointing at `events :: pending Atlas action`)*

**Payload Atlas receives (assumed shape):**

```json
{
  "recordId": "recXXXXXXXXXXXXXX",
  "fields": {
    "id": 4127,
    "event_type": "pipeline_failure",
    "severity": "error",
    "agent": ["recAgentLink"],
    "title": "Kevin: publish step crashed on missing Sanity token",
    "payload": "{\"step\":\"publish\",\"error\":\"...\"}",
    "requires_response": true,
    "atlas_status": "pending",
    "correlation_id": "kevin-deploy-2026-05-12T14:22Z"
  }
}
```

Atlas's first action upon invocation: PATCH the record with `atlas_status=processing` and `processed_at=NOW`. If the PATCH 409s (someone else already grabbed it), exit cleanly — that's the duplicate-trigger guard. If the trigger doesn't honor the filter, Atlas also checks `atlas_status` in the payload itself and exits if it's not `pending`.

---

## 6. Views

Airtable views are saved filters; they double as the surface HyperAgent triggers can watch and as the routes Mission Control reads.

### `events`

| View name | Filter | Sort | Group |
|---|---|---|---|
| **`pending Atlas action`** | `atlas_status = "pending"` AND `requires_response = true` | `severity` desc, `created_at` asc | — |
| **`recent critical`** | `severity = "critical"` AND `created_at` within last 24h | `created_at` desc | — |
| **`per-agent`** | none | `created_at` desc | by `agent` |
| **`completed last 7d`** | `atlas_status = "completed"` AND `processed_at` within last 7d | `processed_at` desc | — |
| **`stuck`** | `atlas_status = "processing"` AND `created_at` older than 1h | `created_at` asc | — |

The `stuck` view is a self-monitoring view — anything Atlas grabbed but didn't finish in an hour is a problem. Mission Control surfaces this on its `/health` route.

### `fleet_state`

| View name | Filter | Sort |
|---|---|---|
| **`stale heartbeats`** | `last_heartbeat` older than 1h | `last_heartbeat` asc |
| **`errored`** | `status = "errored"` | `last_heartbeat` desc |
| **`needs Finn`** | `pending_questions_count > 0` | `pending_questions_count` desc |
| **`today's snapshot`** | none | `agent_name` asc |
| **`Finn-instructed`** | `notes` is not empty | `agent_name` asc |

The `Finn-instructed` view is the surface Atlas reads to discover "did Finn leave me an instruction since last run?" Cheap, fast, schema-bound.

### `lessons`

| View name | Filter | Sort |
|---|---|---|
| **`awaiting review`** | `status = "awaiting_review"` | `created_at` desc |
| **`merged this week`** | `status = "merged"` AND `merged_at` within last 7d | `merged_at` desc |
| **`per target-agent`** | none | `created_at` desc, group by `target_agent` |
| **`outcomes pending`** | `status = "merged"` AND `merged_at` older than 24h AND `outcome` is empty | `merged_at` asc |
| **`auto-merged`** | `reviewed_by = "auto-merged"` | `merged_at` desc |

`outcomes pending` is what Atlas walks at the start of every scheduled run to write his retrospective `outcome` notes. That habit is the one that prevents lesson rot.

---

## 7. Auth and access model

**Storage:** `~/.openclaw/secrets.env`. Atlas, Kevin, Otto, Bridge, and Mission Control all read this file (or its equivalent on their host). Already canonical for OpenClaw — no new conventions.

**Vars:**

```bash
AIRTABLE_PAT=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appOpenClawXXXXXXX
AIRTABLE_TABLE_FLEET_STATE=tblFleetStateXXX
AIRTABLE_TABLE_EVENTS=tblEventsXXXXXXXX
AIRTABLE_TABLE_LESSONS=tblLessonsXXXXXX
```

Use table IDs (`tbl…`) not table names. Names can be edited in the UI; IDs are stable.

**PAT scoping (Airtable's Personal Access Token granular scopes):**

Airtable PATs scope at the base level, not the table level. So one PAT per *agent* with access to `OpenClaw Fleet Spine` and the appropriate scopes:

| Agent | PAT name | Scopes | Allowed bases |
|---|---|---|---|
| Kevin | `openclaw-kevin` | `data.records:read`, `data.records:write`, `schema.bases:read` | `OpenClaw Fleet Spine` only |
| Otto | `openclaw-otto` | same | `OpenClaw Fleet Spine` only |
| Bridge | `openclaw-bridge` | same | `OpenClaw Fleet Spine` only |
| Atlas | `openclaw-atlas` | `data.records:read`, `data.records:write`, `schema.bases:read`, `webhook:manage` *(if Atlas manages his own trigger health)* | `OpenClaw Fleet Spine` only |
| Mission Control | `openclaw-mc` | `data.records:read` only | `OpenClaw Fleet Spine` only |

**Field-level write discipline (enforced at agent code, not Airtable):**

Airtable doesn't enforce per-field ACLs at the API. Discipline lives in agent code:

- Kevin/Otto/Bridge write to: their own `fleet_state` row (any field except `notes`), and `events` (any field except `atlas_*`).
- Atlas writes to: any row of `fleet_state` (except `notes`), any field of `events` (especially `atlas_*` and `processed_at`), all of `lessons`.
- Mission Control writes nothing. Read-only.
- Finn writes to: `fleet_state.notes` (his instruction surface), `lessons.status` (review actions), and `lessons.reviewed_by`. Anywhere else, his edits are advisory and Atlas may overwrite.

> [!note]
> If a future agent misbehaves (writes to a field it shouldn't), it's caught by Atlas's scheduled run reading recent `events` audit trails. Add an `events` row of `event_type=manual` and `severity=warn` whenever Atlas detects a write contract violation. Then file a lesson.

---

## 8. Write paths

### Kevin (Pier-and-point publishing pipeline)

- On startup: PATCH own `fleet_state` row with `status=running`, `current_task`, `bootstrap_version`, `last_heartbeat=NOW`, `pid_or_runtime`.
- Every minute while running: PATCH `last_heartbeat=NOW`, `current_task` (if changed).
- On clean exit: PATCH `status=idle`.
- On error: PATCH `status=errored`, `last_error=<stack>`. Then POST to `events` with `event_type=pipeline_failure`, `severity=error`, `requires_response=true`, payload includes step + truncated stack.
- On successful publish run: POST to `events` with `event_type=pipeline_success`, `severity=info`, `requires_response=false`. (Cost-gating: only one success row per run, not per article.)

### Otto (publishing-side automation)

Same pattern as Kevin. Otto specifically logs `event_type=deploy` rows when it pushes a Pier-and-point batch live, with `source_url` linking the deploy.

### Bridge (cross-agent communication relay)

- Heartbeats only by default — Bridge mostly proxies, doesn't act.
- Writes `events` rows with `event_type=external_alert` when an upstream signal (Telegram-bot health check, webhook 5xx storm) crosses threshold.

### Atlas

- On invocation (whether by trigger, schedule, or manual): PATCH the triggering `events` row with `atlas_status=processing`. If updates fail with conflict, exit (duplicate-trigger guard).
- Handles the event (reads context, decides action).
- Writes 0 or more `lessons` rows.
- PATCHes the `events` row to terminal state (`acknowledged` / `dismissed` / `completed`), writes `atlas_response`, `processed_at=NOW`.
- During scheduled runs: also walks `outcomes pending` view, writes retrospective `lessons.outcome` for merged lessons that have been live ≥ 24h.

### Mission Control

- Pure reader. Never writes.

### Finn (via phone or laptop)

- Edits `fleet_state.notes` to instruct Atlas.
- Edits `lessons.status` and `lessons.reviewed_by` to approve / reject.
- Manually inserts an `events` row with `event_type=manual` to nudge Atlas about something off-band.

---

## 9. Read paths

### Mission Control v0.2 → Airtable

| MC route | Reads from |
|---|---|
| `/` (overview) | `fleet_state :: today's snapshot` + `events :: pending Atlas action` (count badge) + `lessons :: awaiting review` (count badge) |
| `/agents/:name` | `fleet_state` row for `agent_name`, plus last 50 `events` for that agent, plus all `lessons` where `target_agent` = this row |
| `/events` | `events :: pending Atlas action`, `events :: recent critical`, `events :: per-agent` |
| `/lessons` | `lessons :: awaiting review` (top), `lessons :: merged this week` (middle), per-agent group (bottom) |
| `/health` | `events :: stuck` + `fleet_state :: stale heartbeats` + `events :: completed last 7d` for throughput |

MC reads via the Airtable REST API directly using the `openclaw-mc` PAT. No write paths.

### Finn's phone

Finn pins (in the Airtable mobile app) the following views as homescreen entry points:

- `fleet_state :: today's snapshot` — at-a-glance "what's everyone doing"
- `events :: pending Atlas action` — the queue depth
- `lessons :: awaiting review` — the inbox
- `fleet_state :: needs Finn` — when an agent has queued questions

The mobile app's interface is intentionally similar to a native task app, which is the win — Finn can edit `notes` from a coffee shop without a laptop.

### Atlas's scheduled run

At the start of every scheduled run (every 30 min):

1. Read `fleet_state :: Finn-instructed` — pick up notes Finn left.
2. Read `fleet_state :: errored` and `fleet_state :: stale heartbeats` — surface anything Atlas missed.
3. Read `events :: pending Atlas action` — drain the trigger queue if anything got missed.
4. Read `lessons :: outcomes pending` — write retrospectives.

Total: 4 list calls per scheduled run. Well under rate limits.

---

## 10. Migration sequencing

Day-by-day. None of this is binding — just the lowest-risk order that surfaces problems before they compound.

**Day 1 — Stand up the schema.**

- Create base `OpenClaw Fleet Spine`. Create three tables with all fields per §2/§3/§4.
- Create all views per §6.
- Create five PATs per §7. Drop into `~/.openclaw/secrets.env` on every host that needs them.
- No agent code touches Airtable yet.

**Day 2 — Kevin heartbeat only.**

- Wire Kevin's heartbeat write into `fleet_state`. This is the smallest, lowest-risk path.
- Verify in Airtable UI: row exists, heartbeat ticks, `current_task` updates.
- Mission Control v0.2 begins reading `fleet_state` for Kevin's row.

**Day 3 — Otto + Bridge heartbeats. Atlas read path.**

- Roll out the same heartbeat write to Otto and Bridge.
- Atlas's scheduled run starts reading `fleet_state` (read-only at this stage).
- No `events` writes yet. No trigger.

**Day 4 — `events` writes from Kevin.**

- Add `events` row writes from Kevin's pipeline. Pipeline failures, pipeline successes, external alerts.
- HyperAgent trigger still NOT wired. Atlas still pulls (drains `events :: pending Atlas action` on schedule).
- Validate: are events being created at the right severity? Is `requires_response` set sensibly? This is the day we calibrate the cost gate before the trigger amplifies any noise.

**Day 5 — Wire HyperAgent record-change trigger.**

- Configure trigger per §5. Run the verification checklist (insert vs update, filter expression, payload shape).
- First real Atlas-via-Airtable invocation. Watch for trigger storms or duplicate fires.
- Keep the scheduled-run path live as fallback. Don't disable it.

**Day 6 — `lessons` table receives Atlas's outputs.**

- Atlas starts writing `lessons` rows when invocations result in proposed changes.
- Mission Control reads `lessons :: approved` and `lessons :: merged this week` for the dashboard's lesson strip.
- Finn starts approving from his phone.

**Day 7+ — Backlog consumption.**

- Atlas walks the `outcomes pending` view daily.
- Webhook backup path (built earlier in Phase 1) stays live as the second fallback. Telegram is the third.

---

## 11. Cost model

### Airtable

- Free / Team plans: **5 requests/sec/base, 50,000 records/base**. Hobby tier hits the request cap before the record cap.
- Estimated `events` daily volume:
    - **Best case (quiet day):** 5 heartbeat-derived nothing-burgers (no `events` written), 2 successful Kevin runs (1 success row each), 0 failures. **2 events/day.**
    - **Typical:** 6 successes, 2 failures, 1 deploy, 3 questions, 4 scheduled-checks. **16 events/day.**
    - **Worst case (cascading failure):** 50 retries, each emitting an `events` row. Atlas's scheduled run + cost gate should catch this and write a single `severity=critical` summary, not 50 rows. **Need an emit-rate-limit guard in agent code.** Suggest: each agent caps itself at 20 `events` rows/hour; on overflow, write one `severity=critical` row with `payload` summarizing the suppressed events.
- `fleet_state`: 5 rows total, ever. Each agent writes a heartbeat once a minute = 7,200 PATCHes/day total across the fleet. Comfortably under 5 req/sec/base.
- `lessons`: estimated 5–20 rows/day during Atlas Phase 2/3. Trivial.

### HyperAgent

> [!warning]
> **Verification needed.** HyperAgent's record-change trigger billing is undocumented at spec time. Possibilities to verify in the dashboard before Day 5:
>
> - Per-trigger-fire price (likely)
> - Per-Atlas-run price (almost certainly — that's the agent invocation cost)
> - Whether failed/no-op runs (Atlas exits on duplicate guard) still incur full cost
>
> A typical day at 16 events ≈ 16 Atlas invocations ≈ 16 × Atlas-run-price. If Atlas-run-price is non-trivial, the cost gate (cap on `events` written) is even more important.

Tracking: Atlas writes a daily `event_type=scheduled_check`, `severity=info` row with `payload={"events_today": N, "lessons_today": M, "atlas_invocations": K}`. Lets Finn audit cost without leaving Airtable.

### Airtable Automations (alternative to HyperAgent trigger)

If HyperAgent's trigger billing is bad enough to matter, Airtable's own Automations are an option for simpler reactions (e.g., "set `atlas_status=acknowledged` on `severity=info`"), reserving HyperAgent triggers for the events that genuinely need an agent. Out of scope for this spec, but flagged.

---

## 12. Open questions for Finn

Five, max:

1. **HyperAgent trigger semantics — fire on insert only, insert+update, or filterable?** This is the single biggest unknown and changes the §5 design. Verify in the HyperAgent dashboard before Day 5. If only insert: simpler, but Atlas can't be re-poked when an event escalates from `warn` to `critical` — he'd need a new row. If insert+update without filtering: must rely on agent-level idempotency guard.
2. **One PAT per agent vs. one PAT for the fleet?** §7 proposes per-agent for blast-radius isolation, but five PATs to manage isn't free. If Finn would rather rotate one PAT, that's a simpler ops surface — accept the trade. Atlas would still scope writes by field at the code layer.
3. **`fleet_state.notes` ergonomics — is one long-text field enough, or does Finn want a thread-like structure?** Long text means new instructions overwrite old ones unless Finn appends manually. Alternatives: a `notes_history` linked table, or a date-stamped append convention (`---\n2026-05-05: <new note>`). Pick before rollout — migration later is annoying.
4. **Auto-merge cutoff for low-risk lessons after Day 22 — what counts as low-risk?** §4's `reviewed_by=auto-merged` value is teed up but the policy isn't. Suggest only `lesson_type=memory_edit` or `observation` auto-merge, never `bootstrap_edit` or `skill_proposal`. Confirm.
5. **Do we want `events` retention?** Append-only forever vs. archive after 30 days. 50,000 records/base feels distant at 16/day, but a year of moderate activity gets to ~5,800 — fine. A bad month with rate-limit storms could push it. Suggest archive-to-CSV monthly, delete-from-Airtable after 90 days, retain `lessons` forever.

---

## 13. Verification checklist (for the implementation pass)

- [ ] Base created, three tables present, all fields match §2/§3/§4 types exactly.
- [ ] All views per §6 created and filtered correctly. Spot-check by inserting a test row and confirming view membership.
- [ ] PATs created, scoped per §7, written to `~/.openclaw/secrets.env` on each host.
- [ ] Kevin's heartbeat write tested end-to-end (Day 2 deliverable).
- [ ] Otto and Bridge heartbeats live (Day 3).
- [ ] First `events` row from Kevin lands cleanly (Day 4).
- [ ] HyperAgent trigger: configured, verified-on-insert, filter applied, payload shape captured (Day 5).
- [ ] Idempotent guard (Atlas exits if `atlas_status != "pending"` on entry) confirmed by deliberately writing an updated row.
- [ ] First `lessons` row written and rendered in Mission Control (Day 6).
- [ ] Daily cost-tracking `scheduled_check` row visible after 24h.
- [ ] Telegram + webhook fallbacks still work (regression check).

---

## Appendix A — Field reference summary

```
fleet_state:
  agent_name (PK, single-select)
  status (single-select)
  last_heartbeat (datetime)
  current_task (long text)
  last_error (long text)
  pending_questions_count (number)
  recent_lessons_count (rollup)
  notes (long text — Finn-editable)
  bootstrap_version (single-line)
  pid_or_runtime (single-line)

events:
  id (auto-number, PK)
  created_at (created time)
  agent (link → fleet_state)
  event_type (single-select)
  severity (single-select)
  title (single-line)
  payload (long text)
  requires_response (checkbox)
  atlas_status (single-select)
  atlas_response (long text)
  processed_at (datetime)
  correlation_id (single-line)
  source_url (URL)

lessons:
  id (auto-number, PK)
  created_at (created time)
  target_agent (link → fleet_state)
  phase (number)
  lesson_type (single-select)
  title (single-line)
  body (long text)
  proposed_diff (long text)
  target_file (single-line)
  status (single-select)
  reviewed_by (single-select)
  merged_at (datetime)
  outcome (long text)
  supersedes (link → lessons)
  correlation_id (single-line)
```

---

*End of spec. No implementation has been performed. Ready for Finn's go signal.*
