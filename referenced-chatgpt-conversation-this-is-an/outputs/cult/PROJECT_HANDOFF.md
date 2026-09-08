## Sanity Journal connected — September 7, 2026
- Added /blog/ and /blog/[slug]/ with published-only Sanity queries, Portable Text, proportional images, metadata and generated sitemap entries. Shared navigation/footer now includes Journal. Existing bespoke case studies remain local; CMS case-study migration is still pending.
- Static export reads Sanity at build time. Publish in Studio, then run pnpm build in cult to update port 4179. Production hosting/build webhook is not configured. No live draft preview or automatic publish propagation yet.
- Dataset has zero published documents. Empty Journal and production build verified; article route compiles, but click-through with real content remains to test after the first post. The internal __empty build parameter returns notFound and is not listed or linked; it supports static export before any posts exist.
- Studio remains standalone at ../studio-cult-media, localhost:3333.

## Sanity foundation — September 7, 2026
- Google CLI login succeeded. Standalone Studio created at `../studio-cult-media`, project `wmzu9qlt`, dataset `production`. Local Studio URL http://127.0.0.1:3333/. No hosted Studio deployment yet.
- Registered and deployed blog post, case study, author, category, rich text, editorial image and SEO schemas. Studio build and TypeScript checks passed. No content imported or published.
- Installed next-sanity and image URL helper in website. `lib/sanity/client.ts` contains published-only client and post/case-study queries. Live read succeeded with zero published documents. Studio TypeGen targets those queries.
- Public blog list/detail pages are NOT implemented yet; existing portfolio still uses local content. Static export requires rebuilds for content updates. Hosting/build webhook and draft previews remain to implement. Do not claim end-to-end publishing is ready.

## Formspree direct submission — September 7, 2026
- User supplied endpoint https://formspree.io/f/meaqrrdr. Installed @formspree/react 3.0.0 and used useForm in `components/cult/contact-form.tsx`, appropriate for the statically exported Next.js React site. No server or secret required in the frontend.
- Preserves all original enquiry fields, engagement URL preselection and local required-field validation. Sends FormData to Formspree; native action/method also provided. Hidden honeypot and subject included.
- Removed draft/copy/mailto review flow. Submit now says Send enquiry, disables while Sending, and shows success only after SDK acceptance. Failures preserve input and show form/field errors. Contact next-step copy updated accordingly.
- Build, lint and five existing unit tests pass. Browser validation checked empty required fields, selected Attention Audit from query, focus on first invalid field, endpoint/method and removal of old draft copy. No live valid submission was made; Formspree acceptance and email inbox delivery have not been verified end-to-end. Confirm dashboard recipient/domain/spam settings and perform a real test before launch.
- Older handoff sections describing email-draft-only behaviour are superseded by this section. Existing buildEnquiry helper/tests remain as unused legacy utilities, not part of the contact submission path.

## Contact page revamp — September 7, 2026
- User requested a less padded, less bubbly form, then a whole-page revamp. `app/contact/page.tsx` now has MAKE CONTACT hero, direct-email strip, concise brief guidance, compact form, native next-step FAQ and closing email link.
- `app/contact/contact-form.css` owns scoped Contact styling: no outer form box/padding, ruled option rows, square radio appearance with native semantics, reduced field gaps, shorter resizable textareas, flat buttons. Original required fields and draft-only sending flow retained.
- Browser at 810px measured form height approximately 947px versus 1750px before. Verified selecting Not sure yet, entering required fields, and generating the review panel; nothing sent/copied externally. No page overflow. Build and lint passed; full final mobile audit remains outstanding.
- Radio option labels now explicitly carry their accessible names. Other active source/asset changes remain untouched and uncommitted.

## Approved typography rollout — September 7, 2026
- User explicitly selected Print + Terminal (second card, labeled 01), then asked for creative Space Mono weight treatment. Shared CULT typography is now Anton + Space Mono, with the Courier New Services capability rail intentionally retained after user approval.
- `app/typography.css` scopes shared rules to core routes and shared chrome. Case-study identities and original artwork logos are excluded. Barlow/Space Grotesk font variables are reassigned only inside shared surfaces; do not delete font assets still used by individual mockups.
- Added authentic Space Mono 700, 400 italic and 700 italic from Google Fonts alongside the existing regular font and OFL license. `app/layout.tsx` declares all four faces. Navigation/actions use bold; body uses regular; editorial notes use italic. Services proposition has a cream highlighted bold phrase; final intro phrase has a pink underline. Courier rail remains light.
- Build/lint passed. Browser checked Services font families/weights (Anton heading, Space Mono body 400/nav 700, Courier rail 400); home, About, Contact, Work, all three package routes and SPLICE rendered without horizontal overflow in desktop checks. Work font confirmed after reload. Services 390px iframe visually checked; added breathing room below hero. Mobile menu expansion was not verified in the iframe. Earlier typography-lab-only statements below are historical.

## Typography exploration — September 7, 2026 (in progress)
- User is designing replacement case studies; do not treat the portfolio as finished or restore retired studies from older notes.
- User loves mono and existing hero typography, questions mixed shared section/body typography. Live Services inspection found Anton hero, Barlow Condensed Black section heading, Space Grotesk paragraph and Figtree navigation.
- Created `public/type-lab.html` (preview `/type-lab.html`) with three switchable combinations on identical content: Anton + Space Mono (recommended); Anton + Space Grotesk + Space Mono; Anton + Georgia Italic + Space Mono. Shared role/size rules included. Font switching verified in-browser.
- This is a standalone specimen, not a site-wide typography rollout. Main site font declarations remain unchanged. Await user direction before consolidating shared styles; retain each case study's intentional brand typography and supplied logos.

## Current checkpoint — September 7, 2026: SPLICE

This checkpoint supersedes earlier SPLICE/generic-study and portfolio-count descriptions below. Older sections are historical, not a single current specification.

### SPLICE page and creative
- `/work/splice/` now branches to `components/cult/splice/splice-study.tsx` from `app/work/[slug]/page.tsx`. Scoped layout/CSS, client interactions, social executions, programmatic placements and logo component live in `components/cult/splice/`.
- Dedicated giallo identity: full-bleed hero, original supplied tall logo, yellow/pink campaign typography, identity board, campaign art, social set, programmatic set, finishing-desk interaction, Cut Letter and contact path. Generic freight labels are no longer rendered on SPLICE.
- Use the user's supplied logo artwork, not a typed substitute: `public/studies/splice-logo-sheet.png` copied from `Downloads/SPLICE LOGO.png`. Primary mark is cream with pink dot; small ads use the supplied compact italic mark. CSS crops the sheet proportionally; source remains intact.
- User's supplied campaign art is `public/studies/splice-contact-sheet.png`, copied from `Downloads/PROGRAMMATIC-SPLICE-SHEET.png`. The supplied file is a single artwork composition; six social executions and six display placements are separate HTML/CSS designs using it and the existing SPLICE art. A full-size source-art link is included.
- Approved social lines: WHAT GOT SOFTENED; PROTECT THE PULSE; LAST ROOM BEFORE THE WORLD; SCOPE THE CUT; BEFORE / AFTER IS A LIE; CUT LETTER №01. Preserve the user's supporting lines, including “soft is a delivery format” and “pace is the product.”
- Programmatic section: `#splice-programmatic`, linked from the social section. Native formats: billboard 970×250, leaderboard 728×90, medium rectangle 300×250, half page 300×600, wide skyscraper 160×600, large mobile banner 320×100. Each has tailored type, crop and CTA; responsive previews shrink proportionally. These are design previews, not exported ad-server packages or PNG banner deliverables.
- Display CTAs link to CULT's `/contact/?engagement=Build`, not a live SPLICE booking service. Fictional/self-initiated status retained; no campaign results invented.

### Verification and limits
- Latest SPLICE implementation build and lint passed. In-app browser confirmed all six display placements at their exact native dimensions on desktop, with no intersections between logo/headline/supporting text/CTA boxes. Desktop page had no horizontal overflow and no broken loaded images.
- Earlier browser checks verified finishing-pass selection changes treatment/copy and Cut Letter carousel advances. Initial hero received a 390px iframe visual check; final logo and programmatic revisions have not had a fresh full mobile/browser-matrix audit. Reduced-motion CSS is included, not freshly emulated.
- An earlier iframe QA session recorded a MutationObserver error of undetermined origin; do not claim the entire browser session was error-free. Direct initial SPLICE checks returned no warnings/errors.
- Preview serves `out/` at `http://127.0.0.1:4179/`; run `pnpm run build` after source/asset changes, then reload. No push or production deployment was performed.

### Working-tree caution / next checkpoint
- SPLICE files and supplied assets remain uncommitted alongside other ongoing work. Preserve unrelated Services, print artwork, portfolio/data edits and backup files; do not reset or stage everything indiscriminately.
- At this documentation check, `lib/studies.ts` lists HARDLINE, NOCT, SIGNAL, SPLICE, LATCH and VOLT. LATCH/VOLT and removal of AER/FIELD from that registry occurred outside this SPLICE pass. Their routes, navigation and latest preview synchronization were not verified here. Earlier “all five studies” statements below are historical.
- If preparing a release, review the current full diff and run the build and route checks against the latest registry before committing/deploying. SPLICE validation above does not certify these concurrent changes.

---

## Final CTA spacing refinement

Shared fingerprint closing CTA no longer has 860/880px forced minimum height. Content determines height; label, headline and invitation sit together. Tablet/desktop use two aligned columns, mobile stacks with 28px gaps. Button uses the condensed editorial type. Work closing section verified below 700px at 810px viewport. Final build/lint and targeted checks pass. One broad-run Contact snapshot lacked assets; isolated repeat loaded normally with zero overflow and no axe violations. The report includes that verified recheck.

## Latest Work redesign and approved hero reference

The user explicitly LOVES the Services hero (WHAT / NEEDS / TO MOVE with hand/lens). Preserve its composition. It is now the reference for other CULT route openings: Anton, clamp(100px,19vw,300px), 24vw mobile, three staggered lines, final line .85em. Work, About, Contact and package heroes use the same font file and size. Homepage approved hero and case-study brand hero art remain intact.

Work opening is Ideas. / Made / to move. with one supporting baseline and a concise concept-work disclosure. All five previews now put artwork above a compact information panel: monospace study register, condensed Anton name, industry, commercial premise and discipline footer. Brand artwork is retained. Old absolute image positioning is overridden by the new layout. New QA script work-revamp-check.mjs checks matching hero sizes, image layout, five card links and overflow at 1440/810/390.

## Latest package-page refinement — September 6

User annotations implemented across the three package routes. Audit now has a four-stage customer trace, an illustrative cause-and-symptom panel, tighter scope copy, anatomical three-stage intake, and three clear post-audit choices. Shared package styles reduce empty height, use consistent black grounds, frame evidence in cream, arrange deliverables in a compact grid, and preserve readable hover/focus states. Partner rhythm reduced from eight oversized rows to six compact steps; Build modes expand exclusively. Prices, timeframes, scope boundaries and illustrative labels preserved.

Shared footer city removed; register reads Independent / Everywhere. Closing tagline: Attention with somewhere to go. FilmControl now renders only when the current route contains media surfaces; package pages no longer show a control for nonexistent films. Print reveals and interaction transitions remain and respect reduced-motion preferences; this is not a new film production.

Validation: production build and lint pass; all five existing tests pass. Package controls pass at 1440/390; package layouts, footer and hover contrast pass at 1440/810/390. Services and homepage bookend checks pass. All 26 route/viewport checks pass with zero overflow, heading clipping, page errors or axe main-content violations. Screenshots visually inspected for Audit trace, diagnosis, intake, Build process, Partner rhythm, footer and service numbering. QA scripts/reports saved under docs/print/qa. Local preview updated; no deployment or push.

## Final Services consolidation in this checkpoint

Latest user feedback supersedes the earlier separate Build/Partner statement layouts: all three offers now use a common service-edition structure with 01/02/03, full-bleed anatomy, one decision, concise scope and a dedicated page link. Large Build examples are optional native details, closed initially. Diagnostic and long operating-rhythm demos were removed from overview. Process now stays on black. Capability dropdowns retain package-fit guidance. All closing-button hover/focus states explicitly retain readable black type on cream. Partner copy explicitly cream. Footer C/U spacing corrected. Final targeted verification covers 1440/810/390, seven dropdowns, all package links, keyboard, hover contrast, numbering and no overflow; hero check covers selection and reduced motion at 1440/725/390.

## Latest implementation — homepage bookends, typography and Services rebuild

User steering in this turn is implemented, awaiting visual approval:
- Homepage opener is a brain risograph argument (Give it a brain); closing CTA uses fingerprint art (Make your next move count). Shared footer is a large CULT signature with numbered navigation, mail link and FilmControl. Wordmark tracking is zero so C and U stay separate.
- Hero artwork/type retained. Capabilities now form a 48–50px single-row rail (horizontal scrolling on narrow screens). Hero actions use 180ms magenta ink fill and arrow shift; reduced motion disables transitions.
- CULT body is local Space Grotesk, labels Space Mono, editorial headings Barlow Condensed Black. Anton remains hero/wordmark. Fonts and OFL files are under public/fonts/cult. Tracking reset for the new face; primary case-study brand typography preserved.
- Services system is dark anatomical connective-tissue composition; Build and Partner statements rebuilt; operating model is a clear three-stage sequence. Closing section uses ear print and a stronger invitation.
- Seven native capability accordions now show best-fit package links, rationale and from-prices, rather than only fictional study previews. Exclusive expansion and keyboard behavior retained.
- Growth Build intro and output selector rebuilt after additional feedback. No pricing changes or deployment.

Key files: app/print-bookends.css, components/cult/services/services-redesign.css, sections.tsx, services-page.tsx, layout.tsx, motion-scenes.tsx. Preview remains http://127.0.0.1:4179/. Build passed. Final responsive/interaction reports copied under docs/print/qa when complete. Some earlier automated sessions briefly loaded without base CSS; isolated rechecks with styles loaded passed. Do not mistake those unstyled screenshots for final design.

## Latest homepage simplification

User explicitly removed homepage Founder. It remains on About. Homepage now uses HomePackages and HomeWork from components/cult/home-index.tsx instead of long Engagements/Portfolio previews. Three compact package links lead to dedicated landing pages; five native details/summary study rows expand one at a time. No giant preview imagery when collapsed. Hero and capability scenes unchanged. #ef1472 remains CSS accent. Build passed; 1440/851/390 checks verified removal, package destinations, keyboard expansion, exclusive accordion behavior and no overflow.

## Current checkpoint — route redesign and brand color

CULT CSS magenta is now **#ef1472**, defined once as `--accent` in app/globals.css. All former CULT pink CSS literals use this token, including hover, markers, buttons, print strips and borders. Case-study brand ink and raster image ink remain distinct.

New implementation supersedes earlier notes saying packages are only their initial pages:
- Services overview: hand/lens full-image opening, anatomical Audit and Partner art, existing functional selectors retained.
- Audit: symptom field, path, illustrative cause sequence, interactive FIX/STOP/TEST/WAIT, four deliverables, investigation scope, three stages, separate implementation and no-obligation trust copy.
- Build: interactive missing/built system, six expandable build modes, production sequence, illustrative scope, boundaries, measurement and handover options.
- Partner: operating rhythm, illustrative decision, interactive phase priorities, senior ownership, 90-day horizon (not contract term), reporting and scope boundaries.
- About: new black/pink anatomical brain art and image-led gravity scene.
- Contact: ear image opening and print-style form surface; existing email-draft behavior preserved.
- Work index: full-bleed study compositions. Individual studies retain existing brand-specific art and narratives, with restrained shared print framing; no new case-study campaigns were fabricated.

Key files: app/route-print.css; components/cult/services/package-print.css; offer-page.tsx; package-interactions.tsx; public/print/thinking variants. Existing ServicesMotion drives authored reveals; controls use short state transitions and honor reduced motion.

Build ID: krnhJ7MPBdR8o7L8WtOeQ. Production export: 17 entries / 13 actual pages. Lint passes. All 26 route/viewport checks pass (1440 and 390px) with zero overflow, heading clipping, page errors and axe violations. Package interaction tests pass at both widths. No deployment performed.

Review status: latest route designs and brain artwork await user review. Hero, Strategy revision and Measurement fingerprint have prior explicit approval. The long package briefs have been adapted into the above scenes rather than reproduced verbatim; no automated continuous priority animation or fake client results. Remaining work is visual review of these new route compositions and any requested refinements, plus the previously unapproved remaining homepage compositions.

## Latest homepage direction — September 6

Only the hero is user-approved. Preserve its eye artwork and interaction. Everything below remains a design draft. The six capability sections now use full-bleed image canvases with native oversized overlay typography, alternating placement, readable ink-backed copy, and existing varied motion. Thesis now layers finger/eye imagery with paper-strip typography and preserves clipped line reveals. This replaces old split-grid layouts explicitly rejected by the user.

Validation: production build succeeds (17 generated entries); all six image containers match section bounds at 1440, 851 and 390px; zero horizontal overflow. Screenshots reviewed for Creative desktop and Thesis mobile. Remaining homepage sections and broader site/package redesigns remain unfinished; do not claim whole homepage approval. Next: review the new poster compositions, then redesign Problem, engagement doors, Work introduction, Founder and final CTA to match the approved hero while retaining functional links and case-study identities.

## Latest direction — approved eye-led homepage / new print imagery

Read `docs/print/README.md` first. User rejected the first global-CSS homepage treatment, then explicitly approved the new torn-paper pink eye / MAKE ATTENTION MATTER concept. That concept is now implemented with native text and separate artwork. Keep the eye as default. Conversion MUST use the finger, not the rejected bridge. Search maze rejected; portrait replacement. Measurement upgraded to layered dial collage. Source provenance and current image decisions are in `docs/print/assets.json` and README.

`app/print-home.css` owns Home. `app/riso.css` applies draft print treatment only to other routes. Each case study stays its own brand (type, color, art, voice). Existing Work imagery must not be universally recolored pink. Main role selector no longer changes on pointer hover; intentional selection crossfades artwork. These are animated still images, not new video films. Existing video assets remain intact for other routes.

Broader sitewide new imagery, individual page visual refinement, and three full expanded package redesigns are still unfinished. Do not describe the whole site as completed. New About/Work intro copy exists; prices, scope, study disclosures and contact logic are preserved. No publication/push.

---

## Current checkpoint — Services brutalist / pink risograph pass (2026-09-06)

This entry supersedes the older Services visual-system and build descriptions below. Latest user direction: stronger brutalist typography and layering, followed by approval of the **risograph reference direction with pink ink**. This is direction approval, not user acceptance of the completed render.

- Architecture stays Next.js App Router / React / TypeScript / static export. Main overview: `components/cult/services/services-page.tsx`, scoped `composition.css`, shared `services.css`, native controls in `interactions.tsx`, responsive imagery in `primitives.tsx`, scoped motion in `motion.tsx`. The existing three package routes still use `offer-page.tsx` / `offers.css` through `app/services/[offer]/page.tsx`.
- Completed overview: layered WHAT / NEEDS / TO MOVE? hero; white commercial-system section; forensic Audit contact-sheet scene and evidence strip; Build campaign panorama and five output modes; diagonal magenta Partner field / black operational score; hiring sequence / capability disclosures; closing CTA. Shared homepage, all Work pages, header and footer unchanged.
- Visual tokens: black #050505, original action magenta #FF2EB8, paper #ECE9E0; new photographs use pink/black risograph ink. **Anton is now the scoped Services display face**, Figtree remains body/nav and the heavy Partner title, Courier labels. Earlier Figtree-only display constraints are superseded here. No rounded cards, decorative gradients or generic grid redesign.
- Hero uses separate `services/noct-riso` and `services/aer-riso` responsive WebP variants, plus `riso-paper.webp` clipped inside selectable native text. Static low-opacity paper texture behind hero. No animated noise. Forced-colors retains readable native text. Original Work imagery remains intact. NOCT stays NOCT, never NOCTURNE.
- Main Audit now uses a static `services/audit-print` photograph; the homepage and initial Audit landing media are unchanged. Build uses `services/hardline-panorama` in the media output. These are clearly self-initiated studies, never client performance evidence. Controls follow the Build output in DOM. Original pricing, exclusions and enquiry behavior remain.
- Motion unchanged: 140ms micro / 320ms interface / 900ms cinematic, once-only scoped reveals, still hero, optional finite operating score, reduced-motion support. No new motion introduced for the print treatment.
- Build status: **production build passed**, 17 static entries, build ID `Bmu6ao7Jv9dQEr8TCY1Xw`. Lint passed; build TypeScript passed; 5 tests passed. Fresh 7-width overview inspection (1536/1440/1280/1024/768/390/360): zero horizontal overflow, out-of-bounds checked text/control boxes or broken images. Four Services routes at 1536/390: zero axe violations, observed CLS 0, zero overflow. Optional rhythm/reduced-motion and five output states exercised. Saved evidence in `docs/services/qa` and `review`.
- Known limits: browser automation intermittently timed out waiting for hydration on an earlier run; isolated final runs passed, cause not established. Contact opens an email draft, no server-side lead delivery. No deployment or push; hosted site remains older. Keep automated QA serial against a stable export.
- **Unfinished:** full new package redesigns are still pending. Initial routes are functional but do not fulfill the expanded new briefs. Exact briefs are now saved in `docs/services/package-briefs/`. Audit permits 10–14 days; Build typical 4–10 weeks; Partner ongoing. Do not confuse route existence with brief completion.
- Exact next steps: obtain any further visual feedback on this overview without reverting the pink riso direction; implement the three saved package briefs as distinct native compositions (Audit forensic diagnosis, Build missing-system implementation, Partner active operating rhythm); retain package prices/limits and dedicated routes; test responsive layouts, keyboard interaction, reduced motion and enquiry paths; update this handoff and save a new commit. No homepage/Work redesign as collateral work.

---

## Current user correction — visual fidelity is unresolved

The user says the main Services page is only a start and that the rendered page does not look like the image mocks they love. **Do not treat the Services implementation as visually approved.** Earlier fidelity conclusions below are historical agent assessments and are superseded by this feedback. Recompare the actual render to the relevant concept at matching dimensions; preserve the composition, image scale and placement, typography relationships and spatial rhythm instead of treating the mock as loose inspiration. The user confirmed the affected page is the **Services overview**. New supplied brutalist poster references explicitly ask for stronger typography and layering.

Three new package redesign briefs are pending: Attention Audit (attachment 08e36a88-b362-4cfe-84fe-1325d67a17eb), Growth Build (255857cc-636c-4b4d-aa47-a9022c76134d), and Partner (a3ab723c-8a2d-475d-9f72-dab6910e6513). Current offer routes are initial implementations, not fulfillment of those new briefs. Audit now explicitly permits 10–14 days; Build explicitly permits a typical 4–10 weeks. Their full redesign remains unfinished. Save this checkpoint without implying design approval or publication.

---

## Latest checkpoint: Services — original CULT redesign + three offer pages

The user rejected further reliance on the external Services reference and asked for more authorship. The final local page is the original **v2 photographic/typographic composition** described in `docs/services/DESIGN.md` and `FIDELITY.md`. Do not revert to the earlier type-only sidebar-machine concept. They explicitly requested a landing page for each package; all three are now implemented and linked. No push or publication occurred.

### Architecture / routes

Next.js App Router, React/TypeScript, static export. Main `/services/` uses `components/cult/services/services-page.tsx`. New `app/services/[offer]/page.tsx` statically generates `/services/attention-audit/`, `/services/growth-build/`, `/services/partner/` through `offer-page.tsx`. Metadata, Service/Breadcrumb JSON-LD and sitemap entries included. `data.ts` imports existing engagements and adds routing/context only; original `lib/content.ts` and `lib/studies.ts` remain untouched. `interactions.tsx` owns causal selectors, diagnosis, five output states, optional operating score and hiring/execution controls. `primitives.tsx` owns responsive imagery/actions/labels. `motion.tsx` scopes one-time entrances. `services.css` is the common Services system; `composition.css` is main-page-only v2 art direction; `offers.css` owns landing layouts.

### Completed presentation and visual system

Seven main scenes: WHAT / NEEDS / TO MOVE? with NOCT/AER photo apertures; compact white cause/effect system; cinematic forensic Audit and white roadmap interruption; campaign-led Build with five output states; solid-magenta Partner statement + black operational score; compact hiring sequence and seven large capability disclosures; black close with magenta GOOD. Homepage, shared header/footer, founder, original six cinematic worlds, thesis, global motion/media and all five Work pages are unchanged by this checkpoint. Original Audit/Build/Partner homepage implementation stays intact.

Use #050505, #FFFFFF, #FF2EB8, #C8C8C8. Figtree 700 for authored main statements, 600/400 for hierarchy/body; Courier New technical labels. Sharp geometry, open fields, large scale contrast; main gutters 64/40/24/20px with 32/24/20px hero edges. No gradients, rounded cards, icon grids, fake metrics, generic office stock or added services outside the existing data. NOCT is always NOCT, never NOCTURNE. Approved NOCT/AER/HARDLINE/FIELD/SIGNAL images remain self-initiated fictional study evidence, not client results. No INDEX exists.

### Motion, media and conversion

140ms actions/markers; 320ms state changes; 900ms once-only clipped statements. Hero and Partner statement intentionally stay still. Audit diagnosis resolves after 1200ms (immediate reduced motion), can be reversed. Optional seven-beat operating score advances every 950ms and stops on completion, offscreen, tab hidden, or reduced motion. Shared film loading remains poster-first on mobile/reduced/save-data, with offscreen unloading. Main Audit has an explicit accessible film control. Hero images eager; other responsive study assets lazy; only selected Build output mounts.

Audit starts FROM $1,500, Build FROM $4,000, Partner FROM $4,000 / MONTH. Scope/prices come from original engagements. Audit describes an evidence-based prioritized 90-day roadmap, not a promised project duration. Build does not include every capability by default. Partner excludes paid media spend and major production. Each offer routes to `/contact/?engagement=Audit|Build|Partner`; existing form validates, reviews and prepares mail to hello@cultmedia.house. No new backend or email sending.

### Exact build / QA / remaining work

Build ID **IDlTEIqcIOZgYjHErST46**. Production export, lint, typecheck and five tests passed; 17 generated entries. Four Services routes have zero overflow at 1440/1280/1024/768/390/360. 112 selector/disclosure states checked at four widths; all offer-to-contact validation/draft journeys passed. Axe zero (no exclusions) on four routes at 1536/390; measured CLS 0; normal Audit video and reduced-motion unload verified. Thirteen routes and sitemap pass. See `docs/services/QA.md` and its raw reports for exact scope and the earlier intermittent parallel-preview test timeout; final serial suite passed.

No blocking defect reproduced in final tested states. Safari/Firefox/physical-device QA remains. Shared nav retains existing exact-route active markers, so no Services ancestor marker is shown on child offers. This was not redesigned. Canonical base is the existing private Sites domain; production-domain change requires explicit direction. Hosted site still serves the older build, not these local pages.

Exact next steps: inspect `git status`/latest commit, read this checkpoint plus `docs/services/`, open http://127.0.0.1:4179/services/, and preserve the authored v2 direction. Review the three offer pages individually with the user if further content or layout refinement is requested. Any deployment, domain switch or real lead delivery is separate work. For verification, run saved QA scripts serially against a stable export, not during a build. Do not redesign the other case studies or homepage as a side effect. Keep all fictional-study disclosures and original package limits.

---

## Latest checkpoint: SIGNAL. completed

The user explicitly corrected FIELD to **SIGNAL**. Only `/work/signal/` was redesigned. FIELD, NOCT, HARDLINE, AER, the shared CULT shell, homepage, engagements and original strategy data remain unchanged. Original strategy/copy is retained; the generic ten-chapter SIGNAL presentation is replaced with nine authored scenes: **NOISE → COMPRESSION → CONSEQUENCE → DECISION**.

Read `docs/signal/USER_BRIEF.txt`, `DESIGN.md`, `FIDELITY.md`, `IMAGE_DIRECTION.md` and `QA.md`. Nine generated concept references and asset provenance are committed there. Preview: http://127.0.0.1:4179/work/signal/.

### Architecture and completed scenes

`components/cult/signal/signal-study.tsx` is server presentation; `signal.css` is scoped to `.signal-page` / `.si-`; `interactions.tsx` owns filter, response selectors, demonstration review and final sequence; `motion.tsx` supplies once-only entrances; `data.ts` holds deterministic illustrative information; `image.tsx` supplies responsive images. `app/work/[slug]/page.tsx` selects SignalStudy and its CreativeWork hero. Original `lib/studies.ts` is unchanged. Production imagery is in `public/studies/signal/` at 480/960/1536 widths.

Completed: 01 Noise (finite text texture, huge masthead, resolved rail); 02 Filter (72 entries become three priorities, reversible); 03 One Signal (paper −17% evidence and recommendation); 04 Cause (four spatial layers and red consequence); 05 08:00 Brief (printable executive edition); 06 Market (intelligence landscape and synthesis); 07 Campaign (three generated environmental mockups plus native digital executions); 08 Commercial Response (six coordinated roles, nurture, sales evidence, local demonstration brief, trust interruption and measurement); 09 Final Decision (finite metrics-to-action sequence, SIGNAL close and HARDLINE transition).

### Approved SIGNAL visual and motion system

Void #050505; paper #eae7df; graphite #202221; priority red #ef3b31; accessible small red on paper #ba241c; pale red on graphite #ff746c. Figtree display/body, Courier New technical information. Preserve extreme hierarchy, open fields, square controls, asymmetric causal sequence and campaign environments. CULT magenta stays in the shared shell. No dashboard cards, rounded blocks, gradients, stock office people or repetitive centered report sections.

Motion: 140ms micro, 320ms interface, 700–900ms cinematic. Finite noise introduction; restrained horizontal labels and mixed clipping/opacity entries; many statements completely still. Filter dimensions remain stable while information disappears. Final sequence advances at 650/1900/4100ms; replay is explicit, offscreen completion is safe, reduced motion immediately resolves to the final recommendation. No perpetual information churn, scroll hijacking, springs or document-height animation. Shared CULT film buffers/motion are untouched. SIGNAL uses still campaign photographs, not fabricated video.

### Current build, limitations and non-negotiables

Build ID **PhC2A3q9DLgfqVloOWl-z**. Production build, lint, typecheck and five tests passed; 14 static entries. SIGNAL has zero overflow at 1440/1280/1024/768/390/360. Interaction journeys passed at 1440/390/360 with measured CLS 0, zero page errors or mutation requests. Axe reported zero violations excluding only the intentionally dim, aria-hidden `.si-noise` texture. Three campaign assets loaded correctly; none requested on cold opening. Nine protected routes passed status/H1 checks. Visual concept comparisons and body-copy blur checks completed. Full evidence/limits: `docs/signal/QA.md`.

Preserve all nine scenes, supplied copy, functional compression, causal page composition, real print action, generated SIGNAL campaign assets, reduced motion and truthful fictional-study labels. The demonstration form validates and reviews locally, keeps data only in memory and does not schedule/send/store anything. Numbers and examples must never be promoted to actual business results. Index thumbnails remain unchanged. No known blocking defect reproduced in tested Chrome states; Safari/Firefox/physical devices and printed-PDF visual proof remain unverified.

Exact next steps: inspect clean Git state (`git status`, `git log -1`), read SIGNAL docs and review the current local route. Preserve the locked surrounding site. Test additional browsers/devices before broader support claims. Real demo delivery/integrations require separate implementation. Do not redesign FIELD based on the corrected request. No push or publication occurred; the private hosted site still serves the older source listed below. Deploy only on a user request, using the existing private Sites project.

---

## Previous checkpoint: NOCT. completed

NOCT. is now a fifteen-chapter, individually composed case study using the user-approved nocturnal photography. **Name is exactly NOCT., including every product label; never NOCTURNE.** This is a self-initiated fictional brand, not a commissioned client or live fragrance business.

Read `docs/noct/USER_BRIEF.txt`, `REDESIGN_SPEC.md`, `IMAGE_DIRECTION.md`, `FIDELITY.md` and `QA.md` before changing it. Approved concept references and production source mappings are saved there. The route is http://127.0.0.1:4179/work/noct/.

Current files: `components/cult/noct/noct-study.tsx` (server presentation), `noct.css` (scoped design), `experiences.tsx` (client controls), `data.ts` (hours/frames), `image.tsx` (responsive images), `motion.tsx` (once-only entrances). `app/work/[slug]/page.tsx` selects this renderer for NOCT and sets its CreativeWork hero. HARDLINE has its separate renderer; AER/FIELD keep the shared renderer; SIGNAL now has its dedicated renderer and typed study data.

Approved NOCT tokens: void #050505, bone #E8E6DF, smoke #A5A29F, oxblood #781D30, accessible pale wine emphasis #D6A8B2. Figtree display/body, Courier New technical labels; square controls; gutters 56/40/24/20px by breakpoint. Keep the quiet black fields, large sans statements, bone identity/search spreads, oxblood campaign/email moments and asymmetric photographic crops. No serif perfume template, gold, beige, rounded cards, ornamental gradients or HARDLINE industrial styling.

Completed: category critique; after-hours position; four-hour scent interaction; identity/packaging system; three object views; campaign; five-frame film storyboard; format/review/edit/checkout storefront prototype; six search territories; five launch stages; media roles; validated email preview and three lifecycle examples; nine measurement definitions; system synthesis; morning close and AER transition.

Motion: immediate state feedback, small 140ms interface markers/labels, controlled 900ms decoded-photo crossfades, restrained 900ms clipping or opacity-only entries, many still statements. Optional storyboard advances every 3500ms; manual selection, pause, offscreen stop and reduced-motion support. This is photographic storyboard playback with text sound direction, NOT produced video or audio. No scroll hijacking, layout animation or generic fade-up. Shared CULT motion tiers/video buffers are preserved.

All NOCT storefront/email state stays in memory. No payment, pricing, inventory, real delivery, tracking or storage. Required email validation previews the lifecycle message and explicitly says the address was not sent/saved. Preserve self-initiated disclosures and pre-launch measurement semantics.

NOCT checkpoint build: Next production export, lint, typecheck and five tests passed; 14 generated entries; build ID `sLy5x_QPi0c9PZOSQKO80`. NOCT has no overflow at 1440/1280/1024/768/390/360, axe zero in tested desktop/mobile states, all prototype journeys passing at 1440/390/360, measured CLS 0 at desktop/mobile, cold hero photography ~121 KB. Reports/scripts in `docs/noct/`. Final viewport checks confirm packaging and campaign photos render. Safari/Firefox/physical-device testing remains unverified. No known blocking NOCT defect reproduced.

HARDLINE was completed in commit `b0953d2`; its components, orange/bone/Anton visual system and routing prototype are preserved. Portfolio checkpoint `c0ac8ce` and existing shared CULT layouts remain intact. This NOCT commit also removes one unused import from the saved HARDLINE QA script; no HARDLINE runtime design change.

Next steps: inspect clean Git state and current local preview; retain approved NOCT images, naming, chapters and functional controls. Test other browsers/physical devices before cross-platform claims. Any real commerce/email/film production is separate future work. Publication has NOT occurred; only deploy on a user request using the existing private Sites project. Resolve the current saved SHA with `git log -1`.

---

# CULT. / Cult Media House — project handoff

Updated 2026-09-06 after the isolated HARDLINE, NOCT and SIGNAL redesigns. **The authored site, motion pass, restored engagement depth and five completed CULT. Studies are implemented locally and not published.** This handoff supersedes earlier placeholder-only portfolio descriptions. The current user brief explicitly authorized these engagement/Work changes while locking all unrelated sections.

## Start here: repository is the source of truth

The approved working baseline is the current authored site, completed motion pass and portfolio expansion. The portfolio scope is preserved verbatim in `docs/portfolio/USER_BRIEF.txt`; it authorizes engagement depth/pricing and the fictional study system, while preserving hero, stories, thesis, founder, navigation, footer and core motion. Resume from the application files in this repository, not a cached conversation, old screenshot, concept image or the older hosted site.

Read this file, the current SIGNAL, NOCT and HARDLINE documents, `docs/portfolio/ART_DIRECTION.md`, then `docs/motion/ART_DIRECTION.md`. Consult `docs/redesign/AUDIT.md` for the reasoning behind the existing composition. Application source defines exact implementation; this handoff distinguishes current verified behavior from unfinished content and deployment. Old `docs/design/`, `docs/QA.md`, `docs/production-checks.json` and older QA-script copies are historical, not instructions to restore previous behavior. Future explicit user instructions may change the baseline; do not infer a new redesign request from this handoff.

## Location and publication state

- Repository root: `/Users/mandijordan/Documents/Codex/2026-09-06/referenced-chatgpt-conversation-this-is-an/outputs/cult`
- Working/scratch root: `/Users/mandijordan/Documents/Codex/2026-09-06/referenced-chatgpt-conversation-this-is-an/work`
- Private published URL: https://cult-media-house.dark-humanit-8920.chatgpt.site
- Published source: `a9e607bdb82b3b7fb2642910eaa218daafcc2863` (first implementation).
- Current application source: the commit containing this handoff and the SIGNAL redesign. Resolve its exact SHA with `git log -1`; do not treat the older motion SHA as current. Motion baseline: `5595cb582d411cd896e27d672efaeb77e812336c`; pre-portfolio checkpoint: `c2f1d49`.
- Authorship/layout baseline: `dd3dc7c70630775e1052631118f0bbbc27246875`. Do not revert to the published first-version layout.
- Source was clean before the portfolio task. The implementation, assets, QA evidence and handoff are saved together locally. No push/deployment is implied.
- Sites project ID: `appgprj_6a9db6f057248191983751961a155c2f`.
- Last successful published version ID: `appgprj_6a9db6f057248191983751961a155c2f~appgver_62c09323b84c8191bf54f91b73b947b8`.
- Last successful deployment ID: `appgdep_6a9dbe88dc688191848c1515db6fbdc6`.
- Access was rechecked during redesign: owner, custom access, one allowed user, zero external visitors, zero groups. Keep private.
- The app's existing browser tab currently points at `http://127.0.0.1:4179/`, the local exported redesign. Stable browser tab ID: `a5803212-209d-4f86-84eb-8ee03c231b98`.

## Current architecture

Next.js 16.2.10 App Router, React 19.2.6, TypeScript. `next.config.ts` sets static export, trailing slashes and unoptimized Next images; all photographic assets are pre-optimized locally. Production output is `out/`. No database, server API, form service, analytics integration or submission storage. Static hosting configuration lives in `.openai/hosting.json`.

`app/layout.tsx` owns local Figtree fonts, metadata, Organization/WebSite JSON-LD, skip link, Header, MotionProvider and MotionScenes. `lib/content.ts` holds site settings, numbered navigation, six capability worlds, engagements, capabilities and founder copy. `lib/seo.tsx` supplies route metadata and breadcrumbs. `lib/enquiry.ts` handles validation, fixed-recipient email draft encoding and autoplay policy.

The scaffold still contains unused UI components/dependencies and `vite.config.ts`; actual build and development scripts use Next. Application lint excludes unmodified scaffold UI components and its mobile hook. Do not mistake unused scaffold cards for rendered CULT UI. There is no production `start` script: deploy/serve `out/`.

## Routes

- `/`: full homepage.
- `/services/`: service positioning, engagement paths, Audit/Build/Partner, seven capability rows and contact invitation.
- `/work/`: editorial index of five self-initiated CULT. Studies.
- `/work/hardline/`, `/work/noct/`, `/work/aer/`, `/work/field/`, `/work/signal/`: fictional case studies; HARDLINE, NOCT and SIGNAL have dedicated renderers; AER/FIELD retain the original ten-chapter renderer. Typed study data supplies static slugs and metadata; unknown slugs are not generated.
- `/about/`: founder-led positioning, Audience gravity, four supplied principles, founder section and invitation.
- `/contact/`: nine-field enquiry form; supports `?engagement=Audit`, `Build`, or `Partner`.
- Static not-found page, `/robots.txt`, `/sitemap.xml`.

All routes have titles, descriptions, canonicals and relevant schema. Canonicals point to the private Sites origin; update `site.url` and rebuild if moving to a custom domain.

## Completed sections and redesign

- Hero: stronger masthead, bold positioning, sharp portrait aperture, open text actions, numbered role selector.
- Problem: mixed-weight typographic argument and narrower ruled copy column.
- Strategy: large contact-sheet study with headline upper left and lower-left supporting copy.
- Creative: wide fashion sequence comprising two stills and one central film, oversized headline, offset caption.
- Media: broadcast panorama followed by broad headline and separate channel copy.
- Search: index-card drawer film replaces the malformed-text magnifying-glass image; asymmetric square crop.
- Conversion: precise interlocking mechanism replaces abstract laser/hand footage; tall aperture.
- Measurement: gauge film as a narrow instrument column against large three-line headline.
- Thesis: stepped Preference / has to be / built typography.
- Engagements: three open horizontal rows with title, distinct film and decision column; no equal card columns.
- Work: HARDLINE dominant landscape, NOCT portrait and AER offset landscape, with a link to the complete five-study archive. The old empty records are removed.
- Founder: large bold lead, lighter continuation and offset ruled prose.
- Final invitation/footer: stronger weight contrast, open actions, retained contact/navigation copy.
- Services/About/Contact: distinct heading compositions; all supplied copy and form fields retained.

The complete self-audit is `docs/redesign/AUDIT.md`. New concepts are in `docs/redesign/`; first-version concepts/reports remain in `docs/design/` and `docs/QA.md` for history.

## Current Audit / Build / Partner implementation

The `engagements` array in `lib/content.ts` is the content source. `Engagements` in `components/cult/sections.tsx` renders three open editorial rows, each with a number/title, its own film and a decision/call-to-action column. The homepage includes the “Three ways in.” introduction; Services reuses the rows with `heading={false}` and adds three engagement links near its heading.

| Engagement   | Current lead                      | Action              | Destination                    |
| ------------ | --------------------------------- | ------------------- | ------------------------------ |
| Audit / 01   | Find what is stopping growth.     | Start with an audit | `/contact/?engagement=Audit`   |
| Build / 02   | Build what the funnel is missing. | Discuss a build     | `/contact/?engagement=Build`   |
| Partner / 03 | Run the system.                   | Work with CULT.     | `/contact/?engagement=Partner` |

Audit is the full-funnel diagnostic; Build is focused implementation around the constraint; Partner is ongoing senior strategy/execution. Each uses matching `audit`, `build` or `partner` desktop/mobile MP4 and WebP assets through `Media`. Numbers reveal horizontally in 320ms; titles/copy remain still. Preserve the responsive row compositions—do not replace them with pricing cards or equal columns. The latest user-supplied prices are Audit FROM $1,500; Build FROM $4,000; Partner FROM $4,000 / MONTH. Audit includes the full diagnostic scope and practical 90-day roadmap. Build says explicitly that scope depends on the constraint and not every capability is included. Partner lists ongoing scope and separates media spend/major production costs. Prices remain secondary utility text. The contact form shows the selected engagement, permits clearing it and includes it in the reviewed email draft.

## Current Work implementation

`WorkIndex` remains the shared export from `sections.tsx`, now an alias to `Portfolio` in `portfolio.tsx`. Both homepage and archive use “Work built to move something.” The homepage shows three studies; the Work route shows all five with visibly varied scale and rhythm.

The shared data source is `lib/studies.ts`; the expanded HARDLINE, NOCT and SIGNAL route presentations live in their dedicated component folders. Their index thumbnails are unchanged by the isolated case-study redesigns. HARDLINE is industrial freight/B2B demand; NOCT is fragrance/ecommerce/lifecycle; AER is regional aviation/route demand; FIELD is hospitality/direct booking; SIGNAL is B2B intelligence/demo conversion. Each has an individual artwork identity within CULT framing, complete brief/position/system, campaign art, website/mobile/email/paid artwork, category-specific experience details, channel jobs, search intent and defined success criteria. Every project is explicitly self-initiated; the business and brief are fictional. No fabricated outcomes or commissioned-client claims.

New routes are data-driven in `app/work/[slug]/page.tsx` with `generateStaticParams`, route metadata, CreativeWork/breadcrumb schema and a complete five-study next-link cycle. `app/sitemap.ts` includes all five. `StudyImage` uses pre-encoded responsive WebPs and `PortfolioMotion` adds scoped restrained media entrances; see `docs/portfolio/ART_DIRECTION.md`.

## Approved visual system, design tokens and typography

- Background `#050505`; primary `#FFFFFF`; secondary `#C8C8C8`; accent `#FF2EB8`; rules `#333333`.
- Local Figtree weights 400, 600 and 700; Arial/sans-serif fallback. Font files and OFL licence in `public/fonts/`.
- Headline baseline: weight 700, line-height .98, tracking -.06em; selected continuations intentionally weight 400.
- Hero masthead: `clamp(190px,20.5vw,330px)`; desktop hero headline `clamp(48px,4.65vw,78px)`.
- Each capability has its own display scale (approximately 70–172px desktop); mobile usually 14–18vw.
- Body: 18px baseline, 16–17px on small screens; UI/actions generally 14–16px; technical labels 10–12px.
- Gutters: 64px desktop, 40px at <=1280, 24px at <=768, 22px at <=480.
- Zero editorial image/card corner radius; no shadows, glass, gradients, pills or icon grids.
- Original layout and responsive rules remain in `app/globals.css`; scoped portfolio and new engagement detail rules are in `app/portfolio.css`. The Work index heading override fixes the old one-word Proof scale for its new longer heading.

## Approved motion system

Three tiers: `--motion-micro:140ms`, `--motion-interface:320ms`, `--motion-cinematic:900ms`. Existing `--ui` and `--film` alias the micro/cinematic tokens. UI easing cubic-bezier(.2,.7,.2,1); entrance easing cubic-bezier(.22,.78,.2,1).

`MotionScenes` in the root layout uses native Web Animations and IntersectionObserver. Strategy/Search headlines clip; Creative/Conversion use opacity; Media/Measurement headlines remain still. Each media world has its own 800–1100ms exposure rhythm. Labels/counts travel 8px horizontally. Problem, founder and final invitation remain still. The thesis clips its three lines at 0/120/240ms, 700ms each; period arrives last at 940ms for 140ms. Entire statement completes within 1080ms.

Hero active marker changes immediately; active label shifts 3px over 140ms. Existing 160ms pointer-intent guard remains, with immediate click/keyboard selection. Films crossfade over 900ms with an opaque outgoing layer. Navigation rules extend in 140ms; mobile menu opens in 320ms, closes immediately; enquiry review uses a 320ms exposure. No layout animation or blanket fade-up.

Server-rendered content is visible by default. Reduced motion finishes active Web Animations and removes CSS transitions; mobile/save-data/slow connections default to posters. Actual element entry triggers reveals once; large scroll jumps finish in-flight reveals. Full surface audit: `docs/motion/ART_DIRECTION.md`.

Portfolio motion adds a 1000ms featured-image exposure, 800ms media clipping, 900ms tiny hover scale and 140ms arrows. It respects reduced motion and does not change the original motion system.

## Video architecture

`components/cult/media.tsx`:

- MotionProvider tracks user play choice, reduced motion, mobile breakpoint, connection save-data/effective type and document visibility.
- Mobile <=768, reduced-motion and save-data/slow connections default to posters.
- IntersectionObserver attaches video only when visible and enabled; offscreen/hidden films unload.
- HeroFilms keeps six responsive poster layers. While enabled and onscreen it mounts the active film plus two paused adjacent buffers; the outgoing source is retained during the 900ms dissolve (up to four mounted briefly). Only the displayed hero film plays. Decoding a new poster is cancellation-safe, and film failure leaves its poster available. Each layer keeps its own crop. Mobile controls can be below the film aperture: explicit Play enables policy, and playback begins when the aperture returns onscreen.
- Muted, looped, playsInline, no audio, no picture-in-picture, no focusable decorative video.
- Desktop 1440px and mobile 640px silent H.264 MP4s, fast-start, trimmed to 10 seconds. Responsive WebP posters.
- Every capability now has a film. Audit, Build and Partner each have a distinct film.
- Creative story includes `creative-study-a` and `creative-study-b` WebP frames extracted at 0.7 and 5 seconds; the latter includes magenta light from the actual source film.

New source selections: Strategy=`brief.mp4`; Search=`8a86f194-f0af-4428-9828-e654aa91e0b5.mp4`; Conversion=`floor.mp4`; Measurement=`night.mp4`; Audit=`audit.mp4`; Build=`build.mp4`. Creative, Media and Partner retain the initially selected films. See `docs/redesign/media-selection.json`.

Source library: `/Users/mandijordan/Downloads/4cUkfstpxfTGUACc-grok-workspace/public/sakura/` and `artifacts/imagine_videos/`. Representative frames from 61 film files were inspected. Pastel aircraft/blossoms, floating petals, blank pink screens and malformed lettering were rejected. Original source files were not changed.

## Reusable components

- `brand.tsx`: Brand, Period, Arrow, Action.
- `navigation.tsx`: Header, mobile disclosure, Escape/focus handling, active-route state.
- `hero.tsx`: role selection and pointer-intent media switching.
- `media.tsx`: MotionProvider, Media, FilmControl, HeroFilms and internal BufferedFilm.
- `motion-scenes.tsx`: route-aware, once-per-entry typography/media reveal orchestration, reduced-motion cleanup and fast-scroll completion.
- `sections.tsx`: Problem, Stories, Thesis, Engagements, WorkIndex, Founder, FinalCTA, Footer.
- `contact-form.tsx`: accessible fields, errors, review, email draft and copy fallback.
- `portfolio.tsx`: Portfolio/StudyPreview/StudyImage/StudyLabel/NextStudy; server-rendered presentation.
- `portfolio-motion.tsx`: scoped client media entrances.
- `study-experience.tsx` and `study-details.tsx`: finished native HTML concept artwork and category-specific experience examples.
- `lib/studies.ts`: typed case content and disclosure/next-study helpers.
- Installed `components/ui/tabs.tsx` provides the underlying keyboard tabs.

## Exact current build status

Verified against the final SIGNAL application source on 2026-09-06. `pnpm build`, `pnpm lint`, `pnpm typecheck` and `pnpm test` pass (5 tests; 0 failures). Next.js reports 14 generated entries, including all five new study pages. `out/` is regenerated for the local preview. The latest build ID and SIGNAL browser evidence are recorded in `docs/signal/QA.md`; portfolio and HARDLINE reports retain their own earlier checkpoint evidence.

At the portfolio checkpoint, all ten public content routes passed automated WCAG 2 A/AA and 2.1 AA scans, and horizontal-overflow checks at 1440/1280/1024/768/390/360. Five-study navigation, case metadata/schema, engagement prefill links, reduced motion and image loading were tested. Existing hero/film/menu/contact regression passed. Desktop/mobile case scroll runs recorded zero LayoutShift contribution. The dedicated NOCT and SIGNAL checks supersede their original portfolio-route evidence. These are local Chrome checks, not field Core Web Vitals or physical-device guarantees.

Build output (`out/`, `.next/`) is ignored by Git and must be regenerated after checkout. No production secrets or environment variables are required. No deployment was performed; the hosted source remains the older version listed above.

## Historical redesign verification

The authorship pass established the current compositions and inspected desktop/mobile captures. Its earlier interaction timeout and chunk-load failures are superseded by the completed motion-pass checks below. Historical reports are retained as evidence of earlier versions, not as current outstanding failures.

## Motion baseline verification (also regression-tested during portfolio work)

- Production build, TypeScript, lint and three unit tests passed.
- Motion browser run passed: three-video bounded initial buffer, one playing video, outgoing opacity 1 during partial incoming dissolve, rapid selection, stable hero dimensions, measured thesis timings, reduced-motion suppression, mobile opt-in encodes and menu Escape focus.
- All five routes at 1440/1280/1024/768/390/360: no horizontal overflow, single H1. Current screenshots inspected at desktop/mobile; layout and copy remain locked.
- All nine films advanced during desktop (1440px) and mobile (390px) scroll checks; browser LayoutShift entries totaled zero in both runs.
- Full interaction regression passed: six roles, keyboard arrows, global pause, offscreen unload, Audit prefill, required-field focus, email draft encoding, copy fallback, mobile menu, save-data policy and route SEO.
- All five routes passed automated WCAG 2 A/AA and 2.1 AA scans with zero violations; final console/page-error assertion passed.
- Earlier video timeout and failed-chunk errors did not recur in sequential current-build testing. Do not test while rebuilding the served export; the original failure cause was not conclusively established.
- IAB confirmed role changes and clean browser logs. Exact-size automated checks used system Chrome/Playwright because the previously documented IAB viewport/zoom mismatch remains unreliable.
- Executable motion checks: `work/browser-qa/motion.mjs`, `motion-regression.mjs`, `motion-scroll.mjs`, plus `production-accessibility.mjs`. Outputs and screenshots are in workspace `work/`; not deployment assets.

## Known bugs and remaining limitations

- No known blocking bug reproduced in current motion/interaction checks. Safari, Firefox and physical-device smoothness remain untested; headless Chrome does not establish a cross-device frame-rate guarantee.
- The five concept studies are complete. No verified commissioned-client evidence or founder identity/photo has been supplied. Do not relabel fictional work as client work or fabricate founder details.
- Project websites/forms/emails are labelled visual prototypes; they do not book stays, sell fragrance, quote freight, book flights, schedule demos or send campaigns. The actual CULT contact form continues to prepare an email draft.
- No redesign/motion deployment was performed in this pass. The private live URL still serves the first implementation.
- Historical `docs/QA.md` and `docs/production-checks.json` describe version 1. Use this handoff and `docs/motion/ART_DIRECTION.md` for current motion state.

## Decisions that must not be reversed

- Treat current layouts, section ordering, typography hierarchy, supplied copy and chosen imagery as locked. The latest engagement/portfolio implementation is part of that baseline. Do not redesign, simplify, remove or replace them without a new explicit user request.
- Preserve the three motion tiers, distinct story rhythms, still major statements, period-last thesis reveal, bounded adjacent film buffers and stable crop during crossfades. Do not add blanket fade-up, spring/bounce, scroll hijacking or delayed controls. The new portfolio allows only its documented tiny, scoped media scale.
- Preserve CULT. name, Cult Media House, controlled tension, locked palette, Figtree, four numbered nav links and supplied copy.
- Source HTML is reference only; do not revert to its template or fabricated clients/metrics.
- Keep six distinct capability worlds and Audit/Build/Partner; each film must fit its subject.
- Do not reinstate rounded portfolio boxes, equal card-like engagement columns, stock magnifying glass, uniform full-screen world layouts, ornamental gradients, pink washes, fake metrics or fabricated results.
- Respect original copy over generated concept text. Concepts contain altered labels/condensed-looking fonts/lookalike images; use actual Figtree, actual supplied films, correct email and original content.
- Contact explicitly prepares an email to **hello@cultmedia.house**. User approved this. No backend delivery, no “sent” claim. Preserve review and copy fallback.
- Keep accessible keyboard controls, readable text independent of video, reduced-motion/save-data policies and mobile posters.
- Keep the Site owner-private and reuse its existing project ID and browser tab. Never create a second Site or expose source credentials.

## Exact next steps

1. Read this handoff, `docs/signal/DESIGN.md`, `docs/signal/FIDELITY.md`, `docs/signal/QA.md`, `docs/noct/REDESIGN_SPEC.md`, `docs/noct/QA.md` and `docs/motion/ART_DIRECTION.md`; inspect Git status. The current local layout and copy are locked. Do not restart the design.
2. Review the current exported site at `http://127.0.0.1:4179/`. Test Safari/Firefox and a physical mobile device before claiming broad smoothness support. Preserve poster-first mobile behavior, immediate controls and reduced-motion support.
3. Review the completed studies through `/work/`. Keep self-initiated disclosures and success-criteria semantics. Add verified commissioned work only when actual evidence is supplied; founder information remains an input dependency.
4. When continuing the deployment workflow, run the production build/checks before serving/testing it; do not rebuild during an active QA run. Tracked portfolio checks/evidence are under `docs/portfolio/qa-scripts/` and `docs/portfolio/`; older motion scripts remain under workspace `work/browser-qa/`.
5. Only when publication is requested, use the existing owner-private Sites project. Obtain a fresh source credential, push the exact committed source without persisting the token, then read the exact pushed SHA. Package `out/` using the installed Sites package helper, save that SHA/archive and privately deploy the resulting version. Recheck owner-only access; do not create another Site.
6. Verify the deployed URL, record its version/deployment/SHA in this handoff, and only then report publication. Until then, the earlier published identifiers above remain authoritative.

## Runtime / QA recovery

Node: `/Users/mandijordan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`.
Add its directory and `/Users/mandijordan/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback` to PATH for pnpm.
QA dependencies (Playwright and axe) currently live under `work/browser-qa/node_modules`. Current executable motion scripts are scratch assets in that workspace folder, not tracked repository requirements. Copies under `docs/redesign/qa-scripts/` predate the motion buffering architecture and must not be treated as current assertions (the hero now mounts three films initially, only one playing). `motion.mjs` and `motion-scroll.mjs` run from `work/browser-qa/`; `motion-regression.mjs` runs from the workspace root. Recreate these browser checks from the documented acceptance criteria if scratch files are unavailable; the application, content, media and build configuration are all in Git. Full source-frame index and encoding script are in `work/redesign/`; production media is committed in `public/media/`.

Do not store credentials, build output, node_modules or temporary auth data in Git.


Latest Measurement artwork revision: user rejected clock/dial imagery and requested a black-heavy composition. Replaced shared Measurement artwork with a magenta fingerprint emerging through black torn paper, with registration marks and dark space for overlay text. This supersedes all earlier dial approval notes. New artwork is awaiting user review; the default eye hero is unchanged.

Measurement fingerprint is now explicitly USER APPROVED: "PERFECT I LOVE ANATOMICAL THINGS SO IM DOWN WITH THE FINGERPRINT". Preserve this image; anatomical imagery is a preferred direction. Build passed after replacement.

Strategy artwork darkened through a new generated revision after the user authorized the same black-heavy adjustment elsewhere. Preserves hand and optical lens; replaces large cream areas with black/pink halftone and removes competing background eye. Other anatomical artwork retained. Default hero eye unchanged. Strategy revision awaits visual approval.

Continuous-black pass: homepage capability scenes and Thesis now share #050505 ground; static vertical alpha masks dissolve artwork top/bottom edges into the same ground. No source art recoloring, hero alteration or additional motion. Strategy black-heavy revision approved by user ("MUCH BETTER"). User explicitly wants consistent blacks so sections blend. Production build passed; 18 image-fill/overflow checks passed across 1440, 851 and 390px.


## SIGNAL readability revision — September 6, 2026
- Rebuilt SIGNAL typography and layouts around a plain story: what changed, why it matters, what to do next.
- User explicitly likes Block 02 and all interactive material. Preserve the filter, response selector, optional local question preview, print control, and user-paced final reveal.
- Removed the arbitrary 23 dashboards campaign heading and corresponding billboard image; retained the other campaign artwork.
- Replaced SIGNAL Daily with Your daily update and explained each sample change with a possible next step. Removed technical catalogues and repeated sections.
- SIGNAL retains its own red/black/paper identity. Do not alter the approved CULT Services hero.
- Validation: production build, lint, existing five tests passed. In-app browser at 1280px verified filter, response selection, all forward final stages, no horizontal overflow or heading overflow, no console warnings/errors. Daily update visually inspected. Mobile was not freshly verified in this pass.
- Local preview only; no deployment or push.


## AER redesign — September 6, 2026
- Replaced generic AER case-study template with dedicated AerStudy and scoped CSS. Bone, graphite, orange, transport typography, new generated terminal hero saved in public/studies/aer/terminal.jpg.
- Condensed user's 20-section reference into seven chapters plus hero/closing: opportunity, identity/wayfinding, booking, travel/disruption, route launch/search, retention/editorial, measurement. Core position: The world, with less friction.
- Functional examples: three dates and fares with changing totals/inclusions and local review; on-time/delayed boarding pass with explanatory help options; four route-launch stages. No real reservations, payments, availability or results.
- Updated shared AER descriptor and campaign line to premium international aviation. Approved CULT Services hero untouched.
- Verified build, lint, five existing tests. Browser at 1163px: fare/date totals ($1077 Flex on Apr 19), review state, 48-minute delay/new departure, help details, Return stage; hero and booking screenshots; no horizontal or heading/control clipping; no console warnings/errors. Responsive CSS and reduced-motion rules included; mobile viewport not separately verified.
- Local preview only. Generated image source retained under .codex/generated_images.


## CULT poster Work page — September 6, 2026
- User approved the original grindhouse and giallo poster directions and explicitly requested a page using these designs. Replaced /work/ corporate concept index with nine-poster CULT gallery. Other case-study routes remain intact.
- Three series: Giallo, Grindhouse, After hours. Generated source triptychs copied into public/artwork/cult; each individual poster framed via CSS without altering originals.
- Black/bone/hot-pink hero, concise labels, native dialog viewer with previous/next and close controls, visible AI-assisted concept credit.
- Production build and lint pass. Browser 1163px: nine posters rendered; first series visually inspected; dialog opens, next updates title/art, close restores opener focus; no horizontal overflow; no console errors/warnings. Mobile uses one-column gallery; not separately browser-tested.

## 2026-09-06 — Work: giallo replacement and web concepts
- Replaced rejected After Hours set with Watch Closely / Cut Through / Leave a Trace (giallo-new.png).
- Added Look Again collection and three responsive web concepts: cinema, publisher, studio. Desktop/mobile controls and expandable concept panels.
- Fixed stretched triptych images: intrinsic 3:2 source ratio, proportional panel framing. Cinema uses layered hero, publisher cover-first editorial spread, studio oversized type and three-poster row.
- Build and lint pass. Browser measured all triptych source elements at 1.5 ratio, no page overflow; 390px preview toggle had no overflow; no console errors. User actively inspecting/annotating browser made final reveal-click verification inconclusive.

### User review follow-up: stronger differentiation
- Blood Lust beige storefront rejected; replaced with black/yellow condensed masthead, full-width cinematic cover crop, compact CTA row.
- Cinema now uses italic Georgia, dark film-led composition, outlined oval CTA.
- Studio now uses Space Mono, cobalt/ivory grid, three-poster work strip; no shared headline font with other concepts.
- Final build and lint pass.

### Final selection from user feedback
- User rejected concept 3. Cobalt studio index removed from rendered selection.
- Third slot now features user's supplied concrete/cut-paper CULT design unchanged, full-width proportional image with full-size link.
- Two interactive concepts remain (cinema and Blood Lust); third is original supplied artwork. New original asset cult-attention-original.jpg.
- Build and lint pass after final selection change.

### Supplied motion work
- Added user's 10.04-second 1920x1088 MP4 as fourth showcase item under original CULT artwork. Native controls, playsInline, metadata preload, starts muted, proportional video; Quick Look preview frame and visual-description VTT.
- Browser confirmed video readyState 4, original dimensions and duration, no media error. Build and lint pass.

### Remove rejected web concept 1
- User disliked Midnight Club. Removed it from rendered Work selection; renumbered Blood Lust, supplied CULT design and motion to 01–03. Build and lint pass.

### Restore all previous studies to Work
- Added a Case Studies section ahead of posters, sourced from lib/studies; all five HARDLINE, NOCT, AER, FIELD and SIGNAL cards link to existing full studies.
- Added Case Studies anchor navigation; retained poster, web and motion sections. Responsive two-column cards, single column below 650px, proportional image crops.
- Build/lint pass. All five study URLs and artwork URLs returned HTTP 200; served Work HTML contains all five cards. User actively navigating study pages during browser review.

## Site-wide refinement, motion, Contact and footer
- Added app/refinements.css and extended MotionScenes for previously static surfaces without replacing bespoke study motion.
- Contact now full-width poster hero matching Services typography, brief link, desktop two-column form/aside and mobile form-first arrangement.
- Fixed footer logo hitbox intercepting first three navigation links by containing signature and raising directory/colophon. All four destination clicks verified.
- Parent nav active state works for nested routes.
- See REFINEMENT_QA.md for route coverage and boundaries. Build/lint + five tests passed.

## Full-bleed About and original Work hero
- Removed inherited 88px (74px mobile) outer top padding from About so hero artwork starts behind navigation. Browser confirmed hero/image top at document y=0.
- Generated original Work collage art (pink halftone eye, layered print sheets, gloved hand); added as proportional full-bleed hero background with responsive crop/readability gradients. Preserved all portfolio sections.
- Browser verified Work image loaded, hero starts at y=0, no horizontal overflow. Build and lint pass.

## 2026-09-07 — Neutral black artwork refresh
- Regenerated the search pink-face collage and thinking anatomical brain with deep neutral black paper and stronger pink ink; retained their right-aligned composition and torn edges.
- Replaced each asset's 480, 960 and 1536 WebP exports, preserving aspect ratios. Original generated files remain in the Codex generated_images folder.
- Production build passed. Browser verified both updated images load on About, no horizontal overflow, and visually checked the full-bleed brain hero.
