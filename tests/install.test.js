import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'slate-install-'));
execFileSync('node', [path.join(root, 'bin/install.js'), '--agent', 'both', '--target', tmp], { stdio: 'inherit' });
for (const target of ['.agents/skills', '.claude/skills']) {
  const file = path.join(tmp, target, 'slate', 'SKILL.md');
  if (!fs.existsSync(file)) throw new Error(`missing installed skill ${file}`);
}
execFileSync('node', [path.join(root, 'bin/install.js'), '--agent', 'both', '--target', tmp, '--uninstall'], { stdio: 'inherit' });
if (fs.existsSync(path.join(tmp, '.agents/skills/slate'))) throw new Error('uninstall failed');
console.log('install ok');
