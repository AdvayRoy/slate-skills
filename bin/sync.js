#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const skillsRoot = path.join(root, 'skills');
const mirrors = [
  path.join(root, '.codex', 'skills'),
  path.join(root, 'plugins', 'slate', 'skills')
];

for (const mirror of mirrors) {
  fs.mkdirSync(mirror, { recursive: true });
  for (const name of fs.readdirSync(skillsRoot)) {
    const src = path.join(skillsRoot, name);
    if (!fs.statSync(src).isDirectory()) continue;
    const dest = path.join(mirror, name);
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log(`synced ${name} -> ${path.relative(root, dest)}`);
  }
}
