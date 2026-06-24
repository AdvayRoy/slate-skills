# Install slate

`slate` is a zero-runtime skills pack. No API keys. No backend. No telemetry.

## Option 1 — local installer

```bash
git clone https://github.com/AdvayRoy/slate-skills.git
cd slate-skills
node bin/install.js --agent both --target /path/to/your/repo
```

Flags:

| Flag | Meaning |
|---|---|
| `--agent codex` | install to `.agents/skills` |
| `--agent claude` | install to `.claude/skills` |
| `--agent both` | install to both locations |
| `--target <dir>` | target project repo |
| `--dry-run` | print actions, write nothing |
| `--list` | list available skills |
| `--uninstall` | remove copied slate skills |

## Option 2 — manual Codex install

From this repo root:

```bash
mkdir -p /path/to/project/.agents/skills
cp -R skills/* /path/to/project/.agents/skills/
```

Codex prompt:

```text
Use slate-run. Keep scope small, run relevant checks, report Goal/Files/Action/Check/Result/Next.
```

## Option 3 — manual Claude Code install

From this repo root:

```bash
mkdir -p /path/to/project/.claude/skills
cp -R skills/* /path/to/project/.claude/skills/
```

Claude Code prompt:

```text
Use slate. Compact output. Preserve exact commands/errors/tests/risk.
```

## Verify

After install, confirm skill files exist:

```bash
ls .agents/skills/slate/SKILL.md
ls .claude/skills/slate/SKILL.md
```

Then run a simple prompt:

```text
Use slate-debug. Explain this error in Error/Cause/Fix/Proof/Unverified format: TypeError: user.email is undefined
```

Expected style:

```text
Error: `TypeError: user.email is undefined`
Cause: `user` likely null/undefined before `.email` access.
Fix: guard `user` or handle not-found path.
Proof: not run.
Unverified: exact source line.
```
