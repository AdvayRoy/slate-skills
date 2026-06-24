# Install for Claude Code

Claude project skills live in `.claude/skills`.

## Manual

```bash
mkdir -p .claude/skills
cp -R /path/to/slate-skills/skills/* .claude/skills/
```

## Installer

```bash
node /path/to/slate-skills/bin/install.js --agent claude --target .
```

## Use

```text
Use slate-debug. Debug this failing test with Error/Cause/Fix/Proof/Unverified.
```

```text
Use slate-review. Review this diff with file:line | severity | issue | fix.
```
