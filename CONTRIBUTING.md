# Contributing

Thanks for improving `slate`.

## Product principle

Each change should increase signal per token without removing important context.

## Skill rules

When editing any `SKILL.md`:

- preserve exact code/commands/errors in examples
- keep safety boundaries explicit
- avoid invented abbreviations
- prefer structured output contracts
- include before/after examples when behavior changes

## Repo rules

Single source of truth lives in `skills/`.

Mirrors in `plugins/slate/skills/` and `.codex/skills/` are distribution copies. Keep them synced with `node bin/sync.js`.

## Tests

Run:

```bash
node tests/install.test.js
node tests/manifest.test.js
```

## Commit style

Use Conventional Commits:

```text
feat(skill): add slate-run
fix(install): handle missing target dir
docs(readme): clarify Codex install
```
