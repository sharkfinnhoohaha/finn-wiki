---
title: "GROQ Patterns"
type: tech
tags: [groq, sanity, queries, three-altitudes]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [local_caea5222-5b4f-47a6-8897-b6ba7acef893]
---

GROQ is [[Sanity]]'s query language. Finn flagged in `local_caea5222` that he felt he was "missing out on functionality by not understanding GROQ." This is the cheat sheet, grounded in the [[three-altitudes]] schema (devProject, audioWork, hero, aviation, siteSettings).

## Mental model (4 operators)

- `->` **dereference** a reference field
- `[]` **filter or index** an array
- `{}` **shape** the result (projection)
- `|` **pipe** for ordering and slicing

Once those four click, every query is just a chain.

## Projections (avoid over-fetching)

```groq
*[_type == "devProject"] {
  name,
  num,
  status
}
```

Only the listed fields come back. Cheap, fast, predictable.

## Image dereferencing

```groq
*[_type == "devProject"] {
  name,
  "photos": photos[].asset->url
}
```

`photos[].asset->url` walks each item in the `photos` array, dereferences its `asset` reference, and pulls the `url`. The `"photos":` rename is optional but readable.

## Combined singletons in one query

When you need multiple singleton documents (hero, settings) on the same page without firing N round trips:

```groq
{
  "hero": *[_type == "hero"][0]{ title, subtitle, backgroundMedia },
  "settings": *[_type == "siteSettings"][0]{ engineRoomVideo }
}
```

One request, structured object back.

## Array filtering inside docs

```groq
*[_type == "person"][0] {
  name,
  "audioRole": disciplines[code == "AUDIO"][0]
}
```

The inner `[code == "AUDIO"]` filters the `disciplines` array; `[0]` grabs the first match.

## coalesce() for fallbacks

```groq
*[_type == "devProject"] {
  name,
  "role": coalesce(role, "CONTRIBUTOR")
}
```

Returns `role` if set, otherwise the literal string. Clean way to handle optional fields without conditional logic in the consumer.

## Ordering and slicing

```groq
*[_type == "audioWork"] | order(year desc) [0...10]
```

Pipe into `order()`, then slice with `[start...end]` (exclusive end).

## Gotchas (hit personally)

- **`[]` is overloaded.** Same brackets do filter (`[code == "AUDIO"]`), index (`[0]`), and slice (`[0...10]`). Read carefully.
- **`->` only on references.** Trying to dereference a non-reference field returns null silently — no error, just missing data.
- **Singletons returned as arrays.** `*[_type == "hero"]` is always an array even if there's one document. Need `[0]` to unwrap.
- **Projections compose with `->`.** `author->{name, bio}` works — shape AFTER deref.

## Where this lives in three-altitudes

- `lib/queries.ts` — query strings (`getSiteSettings` added in `local_caea5222`)
- Used by `page.tsx` and `MediaLayers.tsx` to drive scroll-stage backgrounds
- Schemas live in the Sanity Studio config: `devProject`, `audioWork`, `hero`, `aviation`, `siteSettings`

See [[sanity-patterns]] for everything around the queries themselves (tokens, draft mode, webhooks).

## Source citations

Session: `local_caea5222` — extended GROQ tutorial against three-altitudes schema, schema additions for hero/aviation/engineRoom background media.
