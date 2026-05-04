---
title: "File Organization Pass"
type: project
status: shipped
tags: [personal, macos, file-org, logic-pro]
created: 2026-04-24
updated: 2026-04-24
weight: high
node_size: 10
sources: [[local_9ec480d0-d4ce-43c2-92ba-bc90476f280d]]
---

## TL;DR

15 years of accumulated, duplicated, scattered files on Finn's M1 Max — Desktop and iCloud Drive — organized in a single agent session. Hybrid bash-script + LLM-judgment plan. Dry run: 258 moves, 0 errors. Executed cleanly after Finn provided a list of shared collaborator folders to leave untouched. Downloads-folder pass was queued but blocked waiting on a folder mount.

> "Right now its 15 years of unorganized stuff, duplicated, etc. and its become an issue specifically when it comes to finding Logic Pro project files I have worked on."

## Approach

Hybrid: bash for inventory/hashing/grouping (cheap), LLM only for judgment calls (expensive). See [[hybrid-llm-workflow]] for the broader pattern.

- **Inventory:** scan Desktop + iCloud Drive
- **Hashing:** skip files >500MB (name+size match enough for big media)
- **Grouping:** by project, by type, by collaborator
- **Quarantine:** 6 high-confidence dupes; left versioned mix files alone
- **Logic project count:** ~158 `.logicx` files total — all nested, none loose

## Final structure

### Desktop

```
Desktop/
├── Logic Projects/
├── Web Dev/
├── Berklee/
├── Branding & Assets/
├── Documents/
├── _Archive/
│   └── Screenshots & Recordings/
└── _Triage/
```

### iCloud Drive

```
iCloud Drive/
├── Logic Projects/
│   ├── <project subfolders>
│   └── _Loose Bounces/
├── Sample Libraries/
├── Web Dev/
├── Business & Finance/
│   └── 2024-2026/
├── Berklee & Education/
├── Aviation/
├── Pro Audio Software/
├── Personal & Misc/
├── _Archive/
├── _Duplicates/
└── _Triage/
```

## Logic projects identified

Nothin New, BIP, Why Apple, Jupiter, Seasons, ONJ Archive, MT&FB_get_p, Jack Finn folder, Haptic, Turnstored, Shut Me Up, Sunshine, Garden Grove, Colours, TBF, Sømliøya — see [[somliøya]] for the website project of the same name.

## Shared collaborator folders (left untouched)

- ZACH/FINN MUSIC ([[zach]])
- Jack Finn Folder ([[jack-finn]])
- BIGMIKESFOLDER ([[big-mike]])
- JACKBOCKMYCOCK ([[jack-bock]])
- THIJS/FINN DEMOS ([[thijs]])
- PEDRAM WEBSITE ([[pedram]])
- FINNBENNETT/FARINAS
- Marijke Website ([[marijke]])
- MT&FB_get_p

Naming convention: heavy use of all-caps shouty folders. Don't try to "fix" them.

## macOS gotchas surfaced

- **Sandboxing blocks mounting `~` directly** — must mount Desktop and iCloud Drive separately via Finder sidebar
- **iCloud Drive lives at** `~/Library/Mobile Documents/...` — sandbox-protected for direct path entry
- **Filename gotcha:** macOS screen recordings/screenshots use **U+202F (narrow no-break space)**, not regular space — globbing for spaces misses them entirely

## Open threads

- **Downloads folder organization** — queued, blocked on mount. Bucketing decision locked: every month gets `MonthName-YYYY/` folder including April; date source = file birth time; sub-buckets `Media/`, `Documents/`, `Archives/`, `Other/`
- 7 items in `_Triage/` need Finn's call

## Quotes from Finn

> "don't keep trailing space, remove from icloud root, in icloud organize all the contents EXCEPT for shared folders, don't touch those."

> "If you have any ideas or questions, please ask me on cowork"

## Related

- [[hybrid-llm-workflow]] — same cheap-bash + expensive-LLM split
- [[finn-bennett]]
- [[somliøya]] — Logic project of the same name as the website client
- Collaborator entities: [[zach]], [[jack-finn]], [[big-mike]], [[jack-bock]], [[thijs]], [[pedram]], [[marijke]]

## Sources

- `local_9ec480d0-d4ce-43c2-92ba-bc90476f280d` — Organize computer files and Logic Pro projects (batch-1 session 1)
