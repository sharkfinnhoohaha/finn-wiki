---
title: "Marp"
type: entity
tags: [tool, plugin, slides]
created: 2026-04-24
updated: 2026-04-24
weight: low
node_size: 2
sources: [[karpathy-llm-wiki-gist]]
---

# Marp

Markdown-based slide deck format. Write slides as markdown separated by `---`, export to HTML, PDF, or PPTX. An Obsidian plugin renders Marp decks inside the vault.

## Why it shows up here

One of the output formats mentioned in [[karpathy-llm-wiki-gist|the gist]] for [[query-operation|queries]]. Good answers to research questions can be materialized as slide decks directly from wiki content, without leaving the vault.

Example use: ask the LLM to generate a Marp deck summarizing the state of a multi-source topic. The deck becomes another artifact in the wiki, linked from whatever pages it draws from.

## Install

1. Obsidian → Settings → Community plugins → Browse → "Marp"
2. Enable it
3. Create a markdown file with a Marp frontmatter block:

```
---
marp: true
theme: default
---

# Slide 1
Content

---

# Slide 2
More content
```

4. Use the plugin's preview to render.

## Not essential

The gist calls Marp "optional." You can run the whole pattern without it. Worth adding when you start needing to present wiki content externally.

## See also

- [[query-operation]]
- [[obsidian]]
