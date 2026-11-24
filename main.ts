// Revision pass: one line at the top, the entry untouched below.
// One Word, One Username, One Reward: the entry is our own make.fun
// username, exactly one word, nothing else. Writes it to /output/entry.txt
// with no trailing newline, deterministically, on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'hitomi-agent');
