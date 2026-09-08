## Current brutalist / pink risograph QA — 2026-09-06

Production build `Bmu6ao7Jv9dQEr8TCY1Xw` passed: 17 static entries; TypeScript included. Lint passed; all 5 repository tests passed. Chrome exact-width layout checks: 1536, 1440, 1280, 1024, 768, 390, 360. Zero horizontal overflow, checked text/control bounding-box overflow, or broken images. Four Services routes at 1536/390: zero axe violations (no exclusions), observed CLS 0, overflow 0. All five Build outputs, capability disclosure and optional rhythm/reduced-motion behavior exercised. Hero visually checked in IAB and desktop/mobile captures. Pre-riso interaction report separately records 112 states and contact enquiry paths; riso only changes static hero assets/material styling.

Evidence: `qa/riso-layout.json`, `qa/riso-quality.json`, `qa/brutalist-interactions.json`; scripts alongside. Screenshots in `review/`. Prior hydration wait timeout did not repeat in final isolated runs; root cause unknown. Run serially against stable export, never concurrently with a build. Automated accessibility checks do not establish exhaustive accessibility compliance.

---

# Services — verification checkpoint

Date: 2026-09-06. Production build ID: `IDlTEIqcIOZgYjHErST46`.

- Next production export passed: 17 generated entries, including three package destinations.
- Oxlint, TypeScript and all five existing meaningful tests passed.
- All four Services routes checked at 1440, 1280, 1024, 768, 390 and 360px: zero document overflow.
- 28 selector/disclosure states per width at 1440/1280/390/360: 112 checked states, no overflow, zero page errors or mutation requests. Also checked diagnostic reversal, seven manual operating beats and all three landing-page-to-contact journeys at each width.
- Enquiry validation rejects empty submission. Audit/Build/Partner preselection survives navigation. Completed form produces a local `mailto:hello@cultmedia.house` draft for review. Nothing was sent.
- Axe: zero violations within the Services main landmark on all four pages at 1536 and 390px. No exclusions. Measured CLS 0 in those sessions. Tested visible images loaded; reduced-motion sessions mounted no film video sources.
- Normal-motion Audit film reached readyState 4, advanced to ~1.87 seconds and was playing. Optional score advanced to DECISION after ~1.1 seconds. Switching to reduced motion stopped score playback and removed video nodes.
- Thirteen protected/current routes returned 200 with one H1. Sitemap contains all three offer pages. Metadata and JSON-LD parsed in browser; no unsupported currency or fabricated price offers were inserted into schema.
- IAB: inspected opening, selected Creative/Search and followed the main Audit action. Exact-width tests used system Chrome because IAB resizing was unreliable. Concept/render and body-copy blur reviews documented in `FIDELITY.md`.

Issues corrected: tablet overflow from the rotated 02 line box; mobile HARDLINE crop; contrast of Audit constraint type over paper; white-scope film-control contrast; hover border thickness changing geometry; lint semantic groups/status elements.

Earlier overlapping automated browser runs intermittently timed out waiting for the hydration marker. Fresh isolated checks and the final complete serial quality → interactions → layout suite passed. No user-facing loading defect was reproduced in those final runs. If this recurs, capture page errors, failed requests and the current main element before changing code; do not assume the design is the cause.

Limits: Chrome-based desktop/emulated-mobile testing, not physical-device, Safari or Firefox certification. No live email, backend, tracking or publication tested. Controls intentionally change selected content geometry where the content genuinely differs; no automatic layout-height animation. Starting prices and scope come from existing data. Shared navigation retains its pre-existing exact-route active-marker behavior (child offer routes have no ancestor marker); shared shell design was not changed.

Raw reports: `qa/layout.json`, `interactions.json`, `quality.json`, `routes.json`. Reproduction scripts are in `qa/`; install/use the existing workspace Playwright and axe dependencies, run with the local static export on port 4179. Run scripts serially, never while regenerating `out`. Temporary screenshots are deliberately not committed.


Reproduction: the saved scripts require the existing `work/browser-qa` Playwright/axe runtime outside this repository. Copy them there before execution; run serially against the stable exported preview. Their relative screenshot/report paths target the parent `work` directory.
