# slate

**clean briefs for coding agents**

Token-efficient skills for Codex and Claude Code. Less agent noise. More engineering signal.

`slate` makes AI coding agents communicate like efficient engineers: compact, structured, useful, and safe. It removes filler from agent output while preserving code, commands, error strings, file paths, test results, and safety-critical context.

<p align="center">
  <strong>compress noise. never compress risk.</strong>
</p>

## Before / after

### Normal agent

> I inspected the authentication middleware and found that the issue appears to be caused by the token expiry check not properly rejecting expired JWTs before the request is passed to the route handler. I recommend adding a guard and then adding a regression test.

### slate

```text
Cause: auth middleware skips JWT expiry gate.
Fix: reject expired token before route handler.
Tests: add expiry-boundary regression.
Risk: auth path only.
```

## What you get

| Skill | Function | Use when |
|---|---|---|
| [`slate`](skills/slate/SKILL.md) | Main compact engineering mode | General Codex / Claude Code work |
| [`slate-minify`](skills/slate-minify/SKILL.md) | Sentence-level language minifier | Output is correct but wordy |
| [`slate-debug`](skills/slate-debug/SKILL.md) | Error → cause → fix → proof debugging | Build/test/runtime failures |
| [`slate-diff`](skills/slate-diff/SKILL.md) | Compact patch summaries | After agent edits code |
| [`slate-review`](skills/slate-review/SKILL.md) | Terse code review comments | PRs, diffs, review requests |
| [`slate-commit`](skills/slate-commit/SKILL.md) | Clean Conventional Commit messages | Commit message generation |
| [`slate-compress`](skills/slate-compress/SKILL.md) | Safe memory/docs compression | `AGENTS.md`, `CLAUDE.md`, notes |
| [`slate-run`](skills/slate-run/SKILL.md) | Fast scoped execution loop | Active repo work / project loops |

## Quick install

### From cloned repo

```bash
git clone https://github.com/AdvayRoy/slate-skills.git
cd slate-skills
node bin/install.js --agent both --target /path/to/your/repo
```

### Manual install for Codex

```bash
mkdir -p .agents/skills
cp -R skills/* .agents/skills/
```

Then ask Codex:

```text
Use slate-run. Read only relevant files, make one focused change, run checks, report compactly.
```

### Manual install for Claude Code

```bash
mkdir -p .claude/skills
cp -R skills/* .claude/skills/
```

Then ask Claude Code:

```text
Use slate. Keep output compact: Result, Changed, Tests, Risk, Next.
```

See [INSTALL.md](INSTALL.md) for full install instructions.

## Why

AI coding agents are powerful, but their outputs often become noisy:

- long status updates
- repeated explanations
- vague review comments
- bloated debugging narratives
- oversized project memory files
- unclear risk/test summaries

`slate` gives agents reusable communication workflows so each response carries more signal per token.

## Safety model

Core law:

> Compress noise. Never compress risk.

`slate` preserves exact code, commands, paths, URLs, API names, error strings, test results, env vars, versions, dates, security warnings, destructive-command ordering, and uncertainty.

Read [docs/safety-model.md](docs/safety-model.md).

## Cost

`slate` has no runtime service.

- no APIs
- no backend
- no database
- no telemetry
- no hosting
- no required package install

It is a plain open-source skills pack: Markdown files, examples, docs, and optional local copy installer.

## License

MIT License. See [LICENSE](LICENSE).
