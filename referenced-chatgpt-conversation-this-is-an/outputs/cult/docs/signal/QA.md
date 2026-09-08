# SIGNAL verification — 2026-09-06

Final production build ID: `PhC2A3q9DLgfqVloOWl-z`. Next.js 16.2.10 static export: 14 generated entries. `pnpm build`, `pnpm lint`, `pnpm typecheck`, and `pnpm test` passed; five tests, zero failures. The exported site is served locally on port 4179. No publication or push occurred.

## Browser evidence

- System Chrome/Playwright at 1440, 1280, 1024, 768, 390 and 360: zero horizontal overflow, one SIGNAL H1, nine scenes, Figtree loaded. All three campaign images loaded at appropriate responsive sizes after scrolling; none fetched on cold opening.
- At 1440, 390 and 360: keyboard filter/restore, unchanged filter dimensions, evidence disclosures, six response selectors, required email and whitespace validation, demonstration review/edit/focus preservation, six measurement definitions, final sequence/replay, reduced motion and HARDLINE next route passed.
- Measured cumulative layout-shift contribution: 0 in all three interaction runs. No page errors, mutation requests or local/session storage recorded.
- Axe WCAG 2 A/AA and 2.1 AA: zero reported violations with only `.si-noise` excluded. This aria-hidden decorative texture deliberately dims below text contrast; meaningful text and controls remain scanned. This is not an unqualified whole-page accessibility certification.
- Print media assertions passed: executive brief visible, hero and shared header hidden. PDFs generated during QA were not independently visually proofed.
- Home, Work, HARDLINE, NOCT, AER, FIELD, Services, About and Contact returned 200 with one H1. Their runtime implementation was unchanged.
- In-app browser visually inspected; Prioritize changed to Restore noise on the settled page. An initial click immediately after navigation did not activate; retry after settling succeeded. Exact viewport tests use Chrome because of existing IAB viewport/zoom limitations.

## Visual acceptance

Nine concept references were inspected before implementation, followed by desktop/mobile chapter captures and direct concept-to-render comparisons. Opening, executive brief, campaign lettering, filtered state and final decision were reviewed. The initial phone CATEGORY overflow was corrected and final six-width testing passed. Body-copy blur contact sheets confirmed the information hierarchy remains legible as noise → priority → cause → decision. No blocking defect reproduced in the tested Chrome states.

`FIDELITY.md` records nine concrete fidelity comparisons and intentional deviations. `concepts/` contains the saved image references. `IMAGE_DIRECTION.md` and `assets.json` document generated production assets. Temporary QA screenshots and PDFs are removed after review; reports and scripts remain.

## Reproduction and limits

Reports: `signal-final.json`, `signal-interactions.json`. Scripts: `qa-scripts/`. Copy scripts into workspace `work/browser-qa/` beside the installed Playwright/axe dependencies, start the stable export at http://127.0.0.1:4179, then run with the bundled Node runtime. Do not rebuild while a browser test reads the export. Scripts use system Chrome and write temporary evidence one directory above their execution folder.

Safari, Firefox, physical devices and field Core Web Vitals remain unverified. Demonstration forms are explicitly local review prototypes, not a scheduling or email backend. Numbers and named examples are illustrative fictional study content, not connected operational evidence. The case contains no produced film; its motion is native interface/type choreography and generated photographic campaign applications.
