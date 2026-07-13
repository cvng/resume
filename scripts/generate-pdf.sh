#!/usr/bin/env bash
set -euo pipefail

# Markdown → HTML → PDF pipeline
# Usage: scripts/generate-pdf.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INPUT="$ROOT/README.md"
OUTPUT="$ROOT/dist/resume.pdf"

mkdir -p "$(dirname "$OUTPUT")"
cp "$INPUT" "$OUTPUT"
