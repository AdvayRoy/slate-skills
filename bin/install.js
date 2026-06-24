#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const skillsRoot = path.join(repoRoot, 'skills');
const args = process.argv.slice(2);

function arg(name, fallback=null) {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1] ?? true;
}
function has(name) { return args.includes(name); }
function usage() {
  console.log(`slate-skills installer\n\nUsage:\n  node bin/install.js --agent codex|claude|both --target /path/to/repo\n\nFlags:\n  --agent <name>   codex, claude, both (default: both)\n  --target <dir>   target repo (default: cwd)\n  --dry-run        print actions, write nothing\n  --list           list skills\n  --uninstall      remove slate skills from target\n`);
}
function listSkills() {
  for (const name of fs.readdirSync(skillsRoot).filter(n => fs.statSync(path.join(skillsRoot, n)).isDirectory()).sort()) {
    console.log(name);
  }
}
function copyDir(src, dest, dryRun) {
  if (dryRun) { console.log(`[dry-run] copy ${src} -> ${dest}`); return; }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
}
function removeDir(dest, dryRun) {
  if (dryRun) { console.log(`[dry-run] remove ${dest}`); return; }
  fs.rmSync(dest, { recursive: true, force: true });
}

if (has('--help') || has('-h')) { usage(); process.exit(0); }
if (has('--list')) { listSkills(); process.exit(0); }

const agent = String(arg('--agent', 'both')).toLowerCase();
const target = path.resolve(String(arg('--target', process.cwd())));
const dryRun = has('--dry-run');
const uninstall = has('--uninstall');
const valid = new Set(['codex', 'claude', 'both']);
if (!valid.has(agent)) throw new Error(`Invalid --agent ${agent}. Use codex, claude, or both.`);

const targets = [];
if (agent === 'codex' || agent === 'both') targets.push(path.join(target, '.agents', 'skills'));
if (agent === 'claude' || agent === 'both') targets.push(path.join(target, '.claude', 'skills'));

const skillNames = fs.readdirSync(skillsRoot).filter(n => fs.statSync(path.join(skillsRoot, n)).isDirectory()).sort();
for (const outRoot of targets) {
  for (const skill of skillNames) {
    const dest = path.join(outRoot, skill);
    if (uninstall) removeDir(dest, dryRun);
    else copyDir(path.join(skillsRoot, skill), dest, dryRun);
  }
}

console.log(uninstall ? 'slate removed' : 'slate installed');
console.log(`target: ${target}`);
console.log(`agent: ${agent}`);
