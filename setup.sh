#!/usr/bin/env bash
# Finn-Wiki cleanup pass — 2026-04-27
#
# Runs the file-system mutations Cowork can't do directly:
#   1. Delete the duplicate stub source page
#   2. Strip 30 stale [[local_*]] / [[session-*]] refs across 15 files
#   3. Wire crosslinks: three-js, finance-hub, life-os-update, finn-wiki-ingest
#
# Idempotent. Safe to re-run.
#
# Run from the vault root:
#   cd ~/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/Finn-Wiki
#   bash setup.sh

set -euo pipefail

VAULT="$(cd "$(dirname "$0")" && pwd)"
cd "$VAULT"

red()    { printf '\033[0;31m%s\033[0m\n' "$*" >&2; }
green()  { printf '\033[0;32m%s\033[0m\n' "$*"; }
yellow() { printf '\033[0;33m%s\033[0m\n' "$*"; }
gray()   { printf '\033[0;90m%s\033[0m\n' "$*"; }

if [[ ! -d wiki ]] || [[ ! -d Finn-OS ]]; then
  red "ERROR: doesn't look like the Finn-Wiki root (no wiki/ or Finn-OS/). Cd in first."
  exit 1
fi

green "→ Working in: $VAULT"

# Detect BSD vs GNU sed (macOS = BSD)
if sed --version >/dev/null 2>&1; then
  SED_INPLACE=(sed -i)
else
  SED_INPLACE=(sed -i '')
fi

# ---------------------------------------------------------------------------
# 1. Delete duplicate-stub source page
# ---------------------------------------------------------------------------
green ""
green "[1/3] Deleting krentsel-openclaw-deep-dive duplicate stub..."

STUB="wiki/sources/krentsel-openclaw-deep-dive.md"
if [[ -f "$STUB" ]]; then
  if grep -q "DUPLICATE STUB" "$STUB"; then
    rm "$STUB"
    green "  ✓ Removed $STUB"
  else
    yellow "  ! $STUB exists but doesn't look like a stub. Leaving alone."
    yellow "    Inspect manually: head -3 $STUB"
  fi
else
  gray "  (already gone)"
fi

# ---------------------------------------------------------------------------
# 2. Strip stale [[local_*]] / [[session-*]] refs
# ---------------------------------------------------------------------------
green ""
green "[2/3] Stripping stale [[local_*]] / [[session-*]] references..."

# Files known to contain stale refs (from 2026-04-27 lint).
# Globs in case any moved.
STALE_FILES=(
  "wiki/clients/somliøya.md"
  "wiki/projects/status-dashboard.md"
  "wiki/business/business-ideas-backlog.md"
  "wiki/workflows/weekly-prep-briefing.md"
  "wiki/concepts/token-conservation-mindset.md"
  "wiki/entities/overlook-audio.md"
  "wiki/entities/jack-finn.md"
  "wiki/entities/pedram.md"
  "wiki/entities/pgvector.md"
  "wiki/entities/marijke.md"
  "wiki/entities/vercel.md"
  "wiki/entities/clerk.md"
  "wiki/entities/jack-bock.md"
  "wiki/entities/koxr.md"
  "wiki/entities/thijs.md"
)

# Also catch in-progress project pages whose `sources:` field is full of local_ UUIDs.
while IFS= read -r f; do
  STALE_FILES+=("$f")
done < <(grep -lE '\[\[(local_|session-)' wiki/projects/in-progress/*.md 2>/dev/null || true)

# Dedupe
mapfile -t STALE_FILES < <(printf '%s\n' "${STALE_FILES[@]}" | awk 'NF && !seen[$0]++')

stripped_total=0
for f in "${STALE_FILES[@]}"; do
  if [[ ! -f "$f" ]]; then
    gray "  (skip, not found: $f)"
    continue
  fi

  before=$(grep -cE '\[\[(local_|session-)' "$f" 2>/dev/null || echo 0)
  if [[ "$before" -eq 0 ]]; then
    gray "  ✓ $f (already clean)"
    continue
  fi

  # 2a. Strip the wikilinks themselves.
  "${SED_INPLACE[@]}" -E 's/\[\[local_[^]]*\]\]//g; s/\[\[session-[^]]*\]\]//g' "$f"

  # 2b. Clean frontmatter `sources:` artifacts: leading/trailing commas, empty list.
  "${SED_INPLACE[@]}" -E '
    s/^sources:[[:space:]]*,/sources: /
    s/,[[:space:]]*,/, /g
    s/^sources:[[:space:]]*,/sources: /
    s/^(sources:[[:space:]]*)$/\1[]/
    s/^(sources:[[:space:]]*)\[\][[:space:]]*$/\1[]/
  ' "$f"

  # 2c. Collapse stranded "()" or ", )" left from inline citations.
  "${SED_INPLACE[@]}" -E '
    s/\([[:space:]]*\)//g
    s/\([[:space:]]*,[[:space:]]*/(/g
    s/[[:space:]]*,[[:space:]]*\)/)/g
  ' "$f"

  after=$(grep -cE '\[\[(local_|session-)' "$f" 2>/dev/null || echo 0)
  removed=$((before - after))
  stripped_total=$((stripped_total + removed))
  green "  ✓ $f — stripped $removed ref(s)"
done

green "  Total stripped: $stripped_total"

# ---------------------------------------------------------------------------
# 3. Wire crosslinks (idempotent — only adds if missing)
# ---------------------------------------------------------------------------
green ""
green "[3/3] Wiring crosslinks..."

# Helper: append a "## Related" footer with given links, but only if file doesn't
# already contain ALL of them. Keeps existing structure intact.
append_related() {
  local file="$1"; shift
  local links=("$@")

  if [[ ! -f "$file" ]]; then
    yellow "  ! Missing: $file"
    return 0
  fi

  local need_append=0
  for link in "${links[@]}"; do
    if ! grep -qF "[[$link]]" "$file"; then
      need_append=1
      break
    fi
  done

  if [[ "$need_append" -eq 0 ]]; then
    gray "  ✓ $file (all links already present)"
    return 0
  fi

  # If a "## Related" section exists, add missing links underneath it.
  # Otherwise append a fresh section at EOF.
  if grep -q '^## Related$' "$file"; then
    for link in "${links[@]}"; do
      if ! grep -qF "[[$link]]" "$file"; then
        # Insert after the "## Related" header
        awk -v l="- [[$link]]" '
          /^## Related$/ { print; print ""; print l; printed=1; next }
          { print }
          END { if (!printed) print l }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        green "    + $file: added [[$link]] under ## Related"
      fi
    done
  else
    {
      printf '\n## Related\n\n'
      for link in "${links[@]}"; do
        if ! grep -qF "[[$link]]" "$file"; then
          printf -- '- [[%s]]\n' "$link"
        fi
      done
    } >> "$file"
    green "    + $file: added ## Related section"
  fi
}

# three-js entity → linked from three-js-patterns
append_related "wiki/tech/three-js-patterns.md" "three-js"

# finance-hub → linked from finance-tracking
append_related "wiki/personal/finance-tracking.md" "finance-hub"

# life-os-update skill → linked from notion-life-os
append_related "wiki/projects/in-progress/notion-life-os.md" "life-os-update"

# finn-wiki-ingest skill → linked from ingest-workflow
append_related "wiki/workflows/ingest-workflow.md" "finn-wiki-ingest"

# project-status-audit was already wired into status-dashboard.md by Cowork.

green ""
green "Done. Verify with:"
gray "  grep -rn '\\[\\[local_\\|\\[\\[session-' wiki Finn-OS index.md  # should be empty"
gray "  ls wiki/sources/krentsel-openclaw-deep-dive.md                 # should be 'no such file'"
gray ""
green "Then commit:"
gray "  git -C \"$VAULT\" add -A && git -C \"$VAULT\" commit -m 'lint pass 2026-04-27 cleanup'"
