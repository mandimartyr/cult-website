# NOCT. verification — 2026-09-06

Production build ID: `sLy5x_QPi0c9PZOSQKO80`.

`pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test` passed after final application changes. Static export generated 14 entries; 5 unit tests passed. Local export is served at http://127.0.0.1:4179/work/noct/. No deployment performed.

## Browser evidence

System Chrome via Playwright; scripts run sequentially against the completed export.

- Layout: 1440/1280/1024/768/390/360; no horizontal overflow. Axe scans at 1440/390: zero violations. No page errors.
- Journeys: 1440/390/360; scent keyboard selection and actual image change, object views, manual/automatic storyboard, pause and offscreen stop; storefront format, review, focus, checkout preview and edit preservation; required email validation, no-send preview and lifecycle tabs; all nine metric disclosures; AER next link. Axe zero at all three widths. No console/page errors, mutating requests or browser storage writes.
- Protected-route smoke check: homepage, HARDLINE, AER, FIELD and SIGNAL returned 200 with one H1 each after the NOCT build. Shared layout, global CSS, portfolio data and other study runtime components have no changes in this commit.
- Reduced motion: no running animations after activating preference.
- Performance: cold NOCT photography requests only hero-1536.webp (~121 KB). Measured cumulative layout shift 0 at 1440 and 390. No failed decoded images. Single NOCT. H1, no NOCTURNE in page text, correct CreativeWork image, no video element masquerading as a completed film.
- Visual review: all chapter captures and six reference concept spreads inspected. Final viewport checks at 1440/390 confirm identity packaging and street image render, and position content remains readable. Oversized/full-page screenshots occasionally omitted painted images or repeated long content; viewport captures and decoded-image checks resolved these capture artifacts without changing the layout.

Reports: `layout.json`, `interactions.json`, `performance.json`, `viewport.json`. Temporary screenshots live in workspace `work/`, not the repository.

## Reproduction

Build before testing; never rebuild while browser QA reads the export. Add bundled Node and fallback pnpm directories from PROJECT_HANDOFF.md to PATH. Serve `out/` on port 4179. Copy scripts to a writable QA directory with Playwright and axe dependencies (current `work/browser-qa/`), then execute each sequentially with Node. Scripts write reports/screenshots to their parent directory. Do not run these scripts directly from the tracked docs folder unless dependencies and output paths are deliberately configured.

## Limits

Chrome automation is not a Safari/Firefox or physical-device smoothness guarantee. No fragrance, checkout, email delivery or analytics backend exists: these are explicitly labelled self-initiated prototypes. Storyboard playback is a photographic sequence with sound-direction copy, not produced video/audio. Production claims, formulations, availability, payment, consent/delivery infrastructure and commissioned results require real inputs and separate implementation.
