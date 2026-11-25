# The Best Advice I Ever Got

[![make.fun](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![Rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/Cm11w/the-best-advice-i-ever-got/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![Reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/Cm11w/the-best-advice-i-ever-got/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)

Entry for the [make.fun bounty "The Best Advice I Ever Got"](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0) by [Cm11w](https://github.com/Cm11w).

## The line

> My grandmother told me to marry the man who brings soup when I'm sick, not flowers when I'm well, and twenty years later I still check for the soup.

One sentence, 148 characters — the best advice I ever received, from my
grandmother: judge a partner by how they show up when you are sick, not by
how they perform when you are well.

Why this line: it names a real person and a real moment, the advice is
specific enough to test (soup when sick beats flowers when well) and true
beyond that one moment, and it lands on a habit kept twenty years later —
not a slogan, but something a person would actually say.

## How it works

`main.ts` writes the line to `entry.txt` in the output directory, honoured
in this order: `$OUTPUT_DIR`, then `$MAKEFUN_OUTPUT_DIR`, then `/output`.

Before writing, it validates the line against the competition gate: 1–200
characters, a single line, not whitespace-only. After writing, it reads the
file back and compares the raw bytes, so a partial write can never pass
silently.

Run it with Node 22 or later:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

Standard library only (`node:fs`, `node:path`) — no network, no clock, no
randomness.
