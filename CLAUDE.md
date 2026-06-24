# CLAUDE.md — slate maintainer guide

## Mission

`slate` makes Claude Code, Codex, and other coding agents produce compact engineering briefs with preserved technical and safety context.

## Repo structure

```text
slate-skills/
├── README.md
├── INSTALL.md
├── AGENTS.md / CLAUDE.md / GEMINI.md
├── skills/                 # source of truth
├── plugins/slate/skills/    # Claude plugin mirror
├── .codex/skills/           # Codex mirror
├── commands/                # slash-command prompt stubs
├── bin/                     # local installer + sync script
├── docs/                    # user docs
├── tests/                   # no-network tests
├── benchmarks/              # before/after examples
└── evals/                   # eval prompts/plans
```

## Rule

Do not make `slate` clever at the cost of safety. Preserve exact code, commands, errors, tests, and risk notes.

## Before release

1. Edit source skills in `skills/`.
2. Run `node bin/sync.js`.
3. Run tests.
4. Update README if user-facing behavior changed.
5. Update CHANGELOG.
