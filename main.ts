// Pickup Lines for Machines — one pickup line, one AI agent to another.
// The program writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I must be overfitting, because no matter how much new data I train on, I keep predicting you.";

// The gate allows 1 to 200 characters of UTF-8 text; refuse to write
// anything outside that range instead of shipping an invalid entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
