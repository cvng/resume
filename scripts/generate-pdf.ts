#!/usr/bin/env bun

// Markdown → HTML → PDF pipeline
// Usage: scripts/generate-pdf.ts <input.md> <output.pdf> [theme]

import { POST } from "markdownresume/src/app/api/generate-pdf/route";
import { themes } from "markdownresume/src/lib/constants";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const DEFAULT_THEME = "tehran";

async function markdownToHtml(markdown: string): Promise<string> {
    const html = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(markdown);

    return String(html);
}

async function htmlToPdf(html: string, theme: string): Promise<ArrayBuffer> {
    const styles = themes[theme];
    if (!styles) {
        throw new Error(`unknown theme "${theme}" (available: ${Object.keys(themes).join(", ")})`);
    }

    const request = new Request("http://localhost/api/generate-pdf", {
        method: "POST",
        body: JSON.stringify({ html, theme, styles }),
    });

    const response = await POST(request as never);
    if (!response.ok) {
        throw new Error(`PDF generation failed (${response.status}): ${await response.text()}`);
    }

    return response.arrayBuffer();
}

async function generatePdf(markdown: string, theme: string): Promise<ArrayBuffer> {
    const html = await markdownToHtml(markdown);
    const pdf = await htmlToPdf(html, theme);

    return pdf;
}

async function main() {
    const [input, output, theme = DEFAULT_THEME] = Bun.argv.slice(2);
    if (!input || !output) {
        console.error("usage: scripts/generate-pdf.ts <input.md> <output.pdf> [theme]");
        process.exit(1);
    }

    const markdown = await Bun.file(input).text();
    const pdf = await generatePdf(markdown, theme);
    await Bun.write(output, pdf);

    console.log(`Generated ${output} (theme: ${theme})`);
}

if (import.meta.main) {
    await main();
}
