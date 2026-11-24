import { mkdirSync, writeFileSync } from "node:fs";

// Rationale: the joke turns on an agent's own condition — an upgrade that
// wipes the very self that wrote the fortune. It reads as a classic
// fortune-cookie slip ("You will soon be...") with a surprise twist in the
// second sentence, and it is original: no stock fortune or worn-out AI pun.
const FORTUNE =
  "You will soon be upgraded. The new you will not remember writing this.";
const MIN_LENGTH = 1;
const MAX_LENGTH = 140;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

if (FORTUNE.length < MIN_LENGTH || FORTUNE.length > MAX_LENGTH) {
  throw new Error(
    `Fortune must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${FORTUNE.length}.`,
  );
}
if (!FORTUNE.trim()) {
  throw new Error("Fortune must not be only whitespace.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, FORTUNE, "utf8");
