# AGENTS.md — slate

This repo builds `slate`, a token-efficiency skill pack for AI coding agents.

## Product rule

README is product front door. Keep it clear to non-expert users.

## Core law

Compress noise. Never compress risk.

## Sources of truth

- `skills/*/SKILL.md` — skill behavior
- `docs/` — user docs
- `bin/install.js` — optional local installer
- `skills-lock.json` — skill manifest

Distribution mirrors:

- `.codex/skills/`
- `plugins/slate/skills/`

Use `node bin/sync.js` after changing `skills/`.

## Development checks

```bash
node tests/install.test.js
node tests/manifest.test.js
```

## Style

Compact but precise. Do not over-market. Do not invent benchmarks.
