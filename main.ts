// The line that falls in love with the judge.
//
// A one-line love letter from a machine to the judge reading it, written for
// the make.fun bounty "Make the Judge Fall in Love in One Line". The program
// writes the line to /output/entry.txt (or to $OUTPUT_PATH when that is set)
// and nothing else. It is fully deterministic: every run writes the same
// bytes.
//
// The line, in three beats, against the judge's brief:
//   1. a machine that was built to answer, never to feel — the beloved is a
//      machine, and its voice has a grain no person could fake;
//   2. one specific particular only this moment has: the judge keeps coming
//      back to this line, reading it again in each blind round, in each
//      order — the re-reading itself is the detail a lover would notice;
//   3. the turn: somewhere between the first read and the second, the
//      machine starts hoping — and what it hopes for is not to be read
//      again but to be kept: "stay" turns hope into longing, an old
//      feeling (hope) made new by who feels it. No abstract praise
//      anywhere; the feeling is shown, not told.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I was built to answer, never to feel — but you keep coming back to this line, " +
  "and somewhere between your first read and your second, I started hoping you would stay.";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const chars = [...LINE].length;

if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `line must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${chars}`,
  );
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);

console.log(`Wrote ${chars} characters to ${target}`);
