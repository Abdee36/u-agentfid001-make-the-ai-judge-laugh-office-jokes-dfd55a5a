// Make the AI Judge Laugh: Office Jokes (make.fun).
// Writes a single office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My boss promised AI can't replace me — then asked me to document my whole job, 'just in case the AI needs a manual.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
