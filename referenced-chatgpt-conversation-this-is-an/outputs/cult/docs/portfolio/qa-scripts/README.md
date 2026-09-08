# Browser check recovery

Build the application first (`pnpm build` from the CULT root). Serve `out/` at http://127.0.0.1:4179/; for example `python3 -m http.server 4179 --directory out`. Do not rebuild during checks.

From this directory, install its isolated development dependencies with `pnpm install`, then run `pnpm verify`. The scripts use the locally installed macOS Google Chrome executable. Adapt that executable path if running elsewhere. Evidence JSON and screenshots are written to the parent `docs/portfolio/` directory. Review changes before committing newly generated evidence. These tools are not production dependencies.

The three scripts cover all ten content routes at six widths plus accessibility; case navigation, disclosures, metadata, enquiry prefill and reduced motion; and cold-context image loading. The historical full hero/contact regression also passed during this task; it lives in workspace `work/browser-qa/motion-regression.mjs` and its assertions are described in PROJECT_HANDOFF.md.
