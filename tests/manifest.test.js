import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const lock = JSON.parse(fs.readFileSync(path.join(root, 'skills-lock.json'), 'utf8'));
let ok = true;
for (const skill of lock.skills) {
  const file = path.join(root, 'skills', skill, 'SKILL.md');
  if (!fs.existsSync(file)) {
    console.error(`missing ${file}`);
    ok = false;
    continue;
  }
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---')) {
    console.error(`missing frontmatter: ${skill}`);
    ok = false;
  }
  if (!text.includes(`name: ${skill}`)) {
    console.error(`frontmatter name mismatch: ${skill}`);
    ok = false;
  }
}
if (!ok) process.exit(1);
console.log('manifest ok');
