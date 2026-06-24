---
name: slate-compress
description: >
  Safe compression for natural-language memory files like AGENTS.md, CLAUDE.md, notes, todos, and preferences. Creates .slate.md output by default.
---


# slate-compress

Compress memory/docs for lower future input tokens.

## Mission

Shrink natural-language project memory without damaging original files.

## Default behavior

Create a separate compressed file:

```text
AGENTS.md → AGENTS.slate.md
CLAUDE.md → CLAUDE.slate.md
project-notes.md → project-notes.slate.md
```

Never overwrite original by default.

## Compress only

- `.md`
- `.txt`
- `.typ`
- `.typst`
- `.tex`
- extensionless prose notes

## Never modify

- `.py`, `.js`, `.ts`, `.tsx`, `.jsx`
- `.json`, `.yaml`, `.yml`, `.toml`
- `.env`, `.lock`
- `.css`, `.html`, `.xml`, `.sql`, `.sh`
- generated files
- secrets

## Preserve exactly

- fenced code blocks
- inline code
- commands
- URLs
- file paths
- API/library/protocol names
- error strings
- dates, versions, numeric values
- env vars
- markdown headings
- frontmatter
- table structure
- list nesting

## Compression rules

- Delete filler and repeated bullets.
- Keep one example when many show same pattern.
- Replace bloated phrasing with short precise wording.
- Merge duplicate sections only when meaning stays identical.
- If unsure whether content is code/config/prose, leave unchanged.

## Output

```text
Input:
Output:
Saved:
Preserved:
Risk:
```

If no file write is available, return compressed content in a code block and state `Write required: manual`.

