---
description: Review a PR of this repo (used by the auto-review workflow)
---

$ARGUMENTS

Review this pull request. This repo is a resume: README.md is the source,
rendered to dist/cvng.pdf by the build pipeline.

Focus on:

1. Resume content (README.md): typos, grammar, dates and consistency of
   formatting with the rest of the document
2. Build pipeline and workflows: correctness, broken or risky changes to
   the md-to-pdf scripts and GitHub Actions
3. Anything that would degrade the rendered PDF output

Use inline comments for specific issues and a top-level comment for the
overall verdict. Be concise; skip praise padding.
