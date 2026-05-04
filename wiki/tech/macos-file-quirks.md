---
title: "macOS File Quirks"
type: tech
tags: [macos, filesystem, sandbox, icloud, file-org]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_9ec480d0-d4ce-43c2-92ba-bc90476f280d]
---

Quirks of working with files on Finn's M1 Max — sandbox restrictions, weird Unicode in screenshot filenames, where iCloud actually lives. Learned the hard way during the 15-year file org pass (`local_9ec480d0`).

## U+202F in screenshot / recording filenames

macOS screen recordings and screenshots use **U+202F (NARROW NO-BREAK SPACE)** in filenames, not a regular space. Globbing for `"Screen Shot *"` will miss them. Match with the actual codepoint or use a regex that allows any whitespace class.

```bash
# Won't match all of them
ls ~/Desktop/Screen\ Shot*

# Will match
ls ~/Desktop/Screen[[:space:]]Shot*
# or use printf to inject the right codepoint
```

Bit hard during the file org pass — initial inventory missed an entire class of files.

## Sandbox can't mount `~` directly

Cowork's sandbox is denied direct access to `~` (the home directory root). Workaround: mount **Desktop** and **iCloud Drive** separately via the Finder sidebar or Cowork directory picker. Two attached folders, not one.

## iCloud Drive path

```
~/Library/Mobile Documents/com~apple~CloudDocs/
```

That's the actual location. The Obsidian vault used in this wiki sits at:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Finn-Wiki/
```

Sandbox-protected for direct path entry — must be mounted via Finder picker, can't just hand it a path string.

## Hashing skip threshold

For dedup detection during file org: **skip hashing files >500MB**. Name + size match is enough for big media files (Logic project bounces, video files), and hashing 500MB+ files takes minutes each. The hybrid bash script + LLM-judgment approach used this rule during the 15-year cleanup.

## Final desktop / iCloud structure (post-cleanup)

Reference for "where should this go" decisions.

**Desktop:**
- `Logic Projects/`
- `Web Dev/`
- `Berklee/`
- `Branding & Assets/`
- `Documents/`
- `_Archive/Screenshots & Recordings/`
- `_Triage/`

**iCloud:**
- `Logic Projects/` — with project subfolders + `_Loose Bounces/`
- `Sample Libraries/`
- `Web Dev/`
- `Business & Finance/2024-2026/`
- `Berklee & Education/`
- `Aviation/`
- `Pro Audio Software/`
- `Personal & Misc/`
- `_Archive/`
- `_Duplicates/`
- `_Triage/`

Naming convention: heavy use of all-caps shouty folders for collaborator content (`BIGMIKESFOLDER`, `JACKBOCKMYCOCK`, `WHY APPLE`). Don't normalize them — they're load-bearing for Finn's spatial memory.

## Shared / collaborator folders (don't touch)

These are Dropbox-style shared folders with collaborators. Leave untouched during any org pass:

- `ZACH/FINN MUSIC`
- `Jack Finn Folder`
- `BIGMIKESFOLDER`
- `JACKBOCKMYCOCK`
- `THIJS/FINN DEMOS`
- `PEDRAM WEBSITE`
- `FINNBENNETT/FARINAS`
- `Marijke Website`
- `MT&FB_get_p`

## Logic Pro project tally

~158 `.logicx` files total in iCloud, all nested inside project folders, none loose. Use this number as a sanity check when running future inventories — if the count drops dramatically, something got moved or deleted.

Project sessions identified across the org pass: Nothin New, BIP, Why Apple, Jupiter, Seasons, ONJ Archive, MT&FB_get_p, Jack Finn folder, Haptic, Turnstored, Shut Me Up, Sunshine, Garden Grove, Colours, TBF, Sømliøya.

## Hybrid approach (what worked)

- Bash for inventory / hashing / grouping (cheap, deterministic)
- LLM only for judgment calls (expensive — naming a folder, deciding to merge)
- Dry run before execute (`local_9ec480d0` did 258 moves, 0 errors after dry run validated)

## Bucketing rules (locked in)

- Every month gets a `MonthName-YYYY/` folder, including the current month
- Date source: file **birth time** (not modification time)
- Sub-buckets per month: `Media/`, `Documents/`, `Archives/`, `Other/`

## Gotchas (hit personally)

- **Trailing space removal.** Finn's instruction: "don't keep trailing space, remove from icloud root." Trim before any inventory.
- **Don't touch shared folders.** Quoting Finn: "don't touch those." Listed above.
- **Versioned mix files look like dupes but aren't.** Quarantine only high-confidence dupes (6 of them in the org pass); leave Logic mix versions alone.
- **Sandbox needs explicit mounts.** No `cd ~/`. Two folders attached: Desktop and iCloud Drive.
- **Downloads folder still pending.** Org pass for Downloads (organized by month + type) is queued, blocked on a mount. See [[cowork-sandbox-limits]].

## Source citations

Session: `local_9ec480d0` — full 15-year file org pass, U+202F discovery, 500MB hashing threshold, hybrid bash + LLM approach, final folder structures, shared-folder list, ~158 .logicx tally, dry-run pattern (258 moves / 0 errors).
