# CULT. verification and visual fidelity

## Scope

Five pages checked at 1440, 1280, 1024, 768, 390 and 360 CSS pixels. Automated checks use headless system Chrome and Playwright. Initial inspection used the in-app browser; its zoom/viewport mismatch made native-size comparison unreliable, so final measurements use a separate browser context. No Safari, Firefox or physical-device test is claimed.

## Functional results

- All 30 page/width combinations have no horizontal overflow after correcting the intrinsic width of portfolio frames.
- Six hero roles work by pointer and keyboard arrows; selection and accessible panel state agree.
- Only the active in-view film loads. Playback advances, global pause removes videos, and scrolling out of view unloads the hero film.
- Mobile defaults to stills; explicit play uses the smaller mobile film. Reduced motion suppresses autoplay and transitions; save-data mode stays on posters.
- Mobile menu opens, navigates and closes. Escape returns focus to its control.
- Audit links prefill the enquiry. Invalid submission identifies the three required fields and focuses the first error. Review generates a correctly encoded draft to hello@cultmedia.house; copy fallback works. No email was sent during testing.
- Automated axe scans reported zero WCAG 2 A/AA and 2.1 AA violations across the five routes, with an additional mobile contact scan. This is an automated result, not a certification.

## Visual fidelity ledger

The accepted hero concept and rendered page were inspected side by side at the concept's native **1586 × 992** dimensions. Internal-page, story, engagement and mobile captures were also inspected.

| Visual anchor | Implementation and comparison |
| --- | --- |
| Black environment and accent | #050505 base, white and #C8C8C8 text, sparse #FF2EB8 punctuation and state accents match the locked system. |
| Header and hierarchy | Left CULT. mark and four numbered right-hand links; mobile disclosure replaces the desktop row. No generated extra navigation retained. |
| Hero composition | Large wordmark, two-line positioning, compact body and two actions occupy the left; supplied fashion film occupies the right. Role strip anchors the bottom. |
| Typography | Local Figtree throughout. Generated condensed or heavier approximations were rejected in favor of the explicit font requirement. |
| Six story beats | Asymmetric image/text pacing and large editorial headlines preserved. Bright Media and Conversion films are confined to the right half on desktop to keep text on solid black. |
| Engagements | Audit / Build / Partner remain open editorial columns with separate media and text, not rounded cards. They stack on small screens. |
| Work | One featured entry and two secondary entries; visibly missing data replaces the fabricated proof in the HTML reference. |
| Mobile | Media precedes copy, headlines reflow, controls retain usable targets, and long forms remain in normal document flow. |

## Above-the-fold copy comparison

Rendered hero text was extracted and compared with the supplied hero copy: “Attention is built. Demand is engineered.”; “Full-funnel marketing for brands worth following.”; the supplied channel-connection paragraph; “Start a project”; “View the work”; and Strategy / Creative / Media / Search / Conversion / Measurement. No wording discrepancy was found. CSS uppercase actions and responsive line breaks are presentation differences. The current selected world description and play/pause label are accessible functional additions.

## Intentional deviations and content limits

Original uploaded film/stills replace generated lookalikes. Strategy, Search and Measurement remain deliberate stills until matching films exist. Two supplied MP4s were rejected after audit because their pastel setting or dominant pink rectangle conflicts with the restrained concept. Generated inaccurate text, extra navigation and condensed type are not copy/design authorities. Work placeholders need real case data. Contact delivery uses the user-approved email draft workflow.

## Final build

See package scripts for reproducible type, lint, unit and static-export checks. Production browser smoke checks cover route availability, metadata, schema, hydration, keyboard selection and email draft generation. Build output is packaged separately from source for private Sites hosting.

Final checks passed: TypeScript, application lint, all three unit tests, and Next.js static production build. The full interaction/30-width-route checks were repeated against the exported production files and passed. Production route metadata and JSON-LD checks passed; all five production axe scans had zero violations, and no browser console or page errors occurred. Escape focus behavior passed.
