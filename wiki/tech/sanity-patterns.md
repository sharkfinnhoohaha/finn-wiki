---
title: "Sanity Patterns"
type: tech
tags: [sanity, cms, nextjs, groq, three-altitudes]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_a2022942-a761-444d-923c-2bf3f7653600, local_caea5222-5b4f-47a6-8897-b6ba7acef893, local_8ca674ce-c9d1-4e6b-b0c8-859d7c1f878c]
---

[[Sanity]] is the CMS for [[three-altitudes]] (Studio v3, dataset `production`, embedded in the Next.js app at `/studio`). Most of these gotchas surfaced during two long debugging sessions on that site. [[somliøya]] uses [[TinaCMS]] instead — this page is Sanity-only.

## Studio embedded in Next.js

`defineConfig` requires `basePath: '/studio'` when the Studio is mounted inside the Next.js app rather than a standalone tool. Missing this triggers `Tool not found: studio` (PR #6 fix on three-altitudes).

```ts
// sanity.config.ts
export default defineConfig({
  basePath: '/studio',
  // ...
});
```

## Presentation tool gotcha

`presentationTool({ navigate: ... })` — invalid `navigate` prop will fail the TypeScript build. Drop it (PR #7 fix). `@sanity/visual-editing` should already be wired into the Next.js root layout, conditional on draft mode.

## Draft mode + tokens (the 500 Unauthorized trap)

`/api/draft-mode/enable` route requires a real `SANITY_API_READ_TOKEN`. A placeholder in `.env.local` that got mirrored to Vercel produced a 500 Unauthorized in production. Sanity tokens are shown **once** — only fix is regenerate "Preview Read Token" with Viewer perms, copy value, update Vercel env, redeploy.

Two env vars matter and they are NOT interchangeable:

| Var | Where it works | When it's needed |
|---|---|---|
| `SANITY_API_READ_TOKEN` | server only | server-side fetches, draft mode auth |
| `NEXT_PUBLIC_SANITY_API_READ_TOKEN` | bundled into browser | `SanityLive` browserToken |

## SanityLive polling fallback (the 4-second refresh)

Symptom: page auto-refreshes every ~4 seconds while editing in Presentation. Root cause: `SanityLive` `browserToken` in `src/lib/sanity/live.ts` was using `SANITY_API_READ_TOKEN` (server-only, `undefined` in browser bundle), so it silently fell back to ~4s polling instead of WebSocket.

Fix: switch the browserToken to `NEXT_PUBLIC_SANITY_API_READ_TOKEN`. Commit in three-altitudes: `fix: use NEXT_PUBLIC token for SanityLive browserToken to stop polling loop`. See also the App Router scroll-restoration angle in [[next-js-patterns]] — both can produce a "page refreshes when I scroll" symptom.

## Webhook config (Sanity → Vercel)

For triggering Vercel deploy hooks on publish:

- **Trigger on:** Create + Update (Publish wasn't an option in Finn's Sanity UI — only Create / Update / Delete were available)
- **Filter:** `!(_id in path("drafts.**"))` — only fires on published transitions, ignores draft keystrokes
- **Projection:** leave blank (Vercel deploy hooks ignore body)
- **Method:** POST
- **Secret / headers:** blank

The filter is the load-bearing piece — without it the webhook fires on every keystroke into a draft. See [[vercel-deployment]] for the deploy-hook URL setup.

## Draft vs published state model

- Drafts live at `drafts.<id>`, published at `<id>` (no prefix)
- Publish action promotes draft → published
- Webhook + Vercel build is what gets the published content live on the static site
- Visual editing in Presentation tool reads drafts via the server-side token

## Schema additions (three-altitudes)

Background media slots wired up so Finn can swap images/videos per stage from Studio:

- Hero Shoreline Background Media: 2 slots, image or video
- Aviation Background Media: 2 slots, image or video
- Site Settings Engine Room Background Video, with static fallback to `code-bg.mp4`

Files touched: schema files, `lib/queries.ts` (added `getSiteSettings`), `MediaLayers.tsx`, `page.tsx`.

## Gotchas (hit personally)

- **Token regen requires Vercel mirror + redeploy.** Updating `.env.local` alone does nothing in prod. Mirror to Vercel env vars then redeploy.
- **Sanity UI doesn't always match docs.** Webhook trigger options in Finn's UI were Create / Update / Delete only — no Publish. Use the filter trick above.
- **Browser token must have `NEXT_PUBLIC_` prefix.** Falling back to polling looks like "everything works" until the editing experience tanks.
- **`force-static` vs scroll restoration.** Studio route may need `dynamic` config tweaks if the parent layout is doing something funky — see [[next-js-patterns]].

## Source citations

Sessions: `local_a2022942` (Studio embed, draft-mode 500, polling fallback, all four cascading failures), `local_caea5222` (webhook config + GROQ tutorial + schema additions), `local_8ca674ce` (initial portfolio CMS request — thin transcript).
