# Install for Codex

Codex project skills live in `.agents/skills`.

## Manual

```bash
mkdir -p .agents/skills
cp -R /path/to/slate-skills/skills/* .agents/skills/
```

## Installer

```bash
node /path/to/slate-skills/bin/install.js --agent codex --target .
```

## Use

```text
Use slate. Keep output compact: Result, Changed, Tests, Risk, Next.
```

For active repo execution:

```text
Use slate-run. Read only relevant files, make one focused change, run checks, report compactly.
```
