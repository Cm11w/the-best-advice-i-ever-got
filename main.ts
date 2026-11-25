import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The best advice I ever got, from my grandmother: judge a partner by how
// they show up when you are sick, not by how they perform when you are well.
const LINE =
  "My grandmother told me to marry the man who brings soup when I'm sick, not flowers when I'm well, and twenty years later I still check for the soup.";

// The gate allows 1 to 200 characters, a single line, not whitespace-only.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
// One sentence: exactly one sentence-terminating period, at the end.
const periods = LINE.split("").filter((ch) => ch === ".").length;
if (periods !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

const outDir =
  process.env.OUTPUT_DIR ??
  process.env.MAKEFUN_OUTPUT_DIR ??
  "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read the file back and compare raw bytes so a partial write can never
// pass silently.
const written = readFileSync(outPath);
if (!written.equals(Buffer.from(LINE, "utf8"))) {
  throw new Error("entry.txt read-back does not match the entry text");
}
