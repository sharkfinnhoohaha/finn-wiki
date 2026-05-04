---
title: "Kelly Bennett Site"
type: project
status: active
tags: [design, template, portfolio, client, kelly-bennett]
created: 2026-04-24
updated: 2026-04-24
weight: medium
node_size: 5
sources: [[overlook-strategy-design-system-bundle]]
---

# Kelly Bennett Site

## TL;DR

One-page portfolio for [[kelly-bennett]], Esq. — entertainment attorney. Tagline: *"Counsel to artists, producers, and studios across film, music, and emerging media."*

This site IS the [[simple-mono-template]] reference implementation. The template file `SimpleMono_WEB-TEMP.html` and `kelly-bennett.html` are byte-identical.

> [!question]
> Open questions for Finn:
> - **Live URL?** The HTML hardcodes `kb@kellybennett.net` for contact. Is the site live at `kellybennett.net`, somewhere else, or still local?
> - **Shipped?** Should this be tracked as an [[overlook-strategy]] client project under `wiki/projects/in-progress/`?
> - **Status of "Available for inquiry"?** That dot in the nav implies open practice. Confirm.

## Source

`raw/design/overlook-strategy/templates/kelly-bennett.html`

## Page sections

### Hero

- Inline SVG stag silhouette (1.4px stroke, hand-drawn antlers, ears, snout, eyes, neck) above the wordmark.
- `Kelly Bennett` set serif weight 300, clamp(56px → 128px), with italic `Esq.` superscript suffix at 0.5em.
- Italic tagline: *"Counsel to artists, producers, and studios across film, music, and emerging media."*
- City row: Amsterdam / London / Los Angeles / Vancouver, mono.

### About `(01)`

Two-column grid: meta aside (Admissions / Focus / Languages / Years in Practice) over serif body with drop cap.

Body copy verbatim:

> Kelly Bennett is an entertainment lawyer representing creative professionals and the companies that back them. The practice operates at the intersection of film, music, and emerging media, with deal flow spanning four cities and three continents.
>
> The work is quiet by design: structuring deals, protecting catalogs, resolving disputes before they become public. Clients come through referrals from producers, managers, and the occasional grateful adversary.
>
> Every matter is handled personally. There is no associate bench and no intake queue.

Meta values:

- Admissions: California, New York
- Focus: Entertainment & IP
- Languages: English, Dutch
- Years in Practice: 20+

### Practice `(02)`

Numbered list, hover slides 16px right with arrow shift:

1. Entertainment Transactions
2. Intellectual Property
3. Music Publishing & Rights
4. Film & Television Financing
5. Litigation & Dispute Resolution
6. Cross-Border Advisory

### Offices `(03)`

Four-cell grid with hairline borders:

| N° | City | Coordinates |
|---|---|---|
| 01 | Amsterdam | 52.3676° N / 4.9041° E |
| 02 | London | 51.5074° N / 0.1278° W |
| 03 | Los Angeles | 34.0522° N / 118.2437° W |
| 04 | Vancouver | 49.2827° N / 123.1207° W |

### Contact `(04)`

Centered preamble `(04)  Get in touch_` over giant italic mailto link:

`kb@kellybennett.net` (clamp 36px → 88px, serif italic, weight 300)

### Footer

`© Kelly Bennett, Esq.` left / `Est. private practice` right, mono, hairline top border.

## Stack

Pure HTML / CSS / inline JS. No build step, no framework, no deps. See [[simple-mono-template]] for the full breakdown.

## Relationship to Overlook Strategy

The site is a deployment of the [[simple-mono-template|SimpleMono template]] kept under `raw/design/overlook-strategy/templates/`. It uses a tighter, blacker palette than the [[design-system/overview|Overlook Strategy Design System]] proper (cream `#fafaf7` over true ink `#1a1a1a` rather than navy `#0e2439`), and it leans into the display-mono / serif-italic pairing that the system describes as the Kelly Bennett-style portfolio voice.

The [[design-tokens]] page even cites this aesthetic as the reference for `.display-mono`: *"Think Kelly Bennett-style portfolio hero: KELLY BENNETT centered in thin, airy type."*

So it's both a client project and a design exemplar that fed back into the Overlook system.

## Related

- [[kelly-bennett]] — the client (and family member)
- [[simple-mono-template]] — the underlying template
- [[design-system/overview|Overlook Strategy Design System]]
- [[overlook-strategy]]
- [[dad-and-kelly]] — the income-source pair Kelly is part of
