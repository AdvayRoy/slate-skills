# Architecture

`slate` is intentionally simple.

## Source of truth

`skills/*/SKILL.md` contains behavior.

## Distribution mirrors

- `.codex/skills/*` — Codex-friendly mirror
- `plugins/slate/skills/*` — Claude plugin-friendly mirror

Run:

```bash
node bin/sync.js
```

## Installer

`bin/install.js` copies skills into a target repo:

- Codex: `.agents/skills`
- Claude Code: `.claude/skills`

No network calls. No telemetry. No API keys.
