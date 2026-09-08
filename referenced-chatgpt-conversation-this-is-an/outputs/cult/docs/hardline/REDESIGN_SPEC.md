# HARDLINE / Consequence — targeted redesign specification

Scope: `/work/hardline/` only. Portfolio baseline commit `c0ac8ce`. Keep the other four study layouts, index, home, engagement system, CULT header/footer/navigation, globals, Figtree and original motion untouched. Use a HARDLINE-specific renderer inside the existing dynamic study route. Keep metadata/schema and next-study navigation.

## Existing implementation audit

`lib/studies.ts` holds the complete commercial narrative; preserve its HARDLINE values. `app/work/[slug]/page.tsx` currently gives all studies the same ten-chapter scaffold. `StudyExperience` and `StudyDetails` show many equally weighted, noninteractive desktop/mobile/social/email/service/search mockups. The strategic content is strong, but the repeated framed artwork and captions create a deliverables gallery. Existing HARDLINE key art and OOH contain CULT-adjacent magenta; retain them for historical portfolio/index use but replace them within this route. Existing shared `PortfolioMotion` clips media on entry. HARDLINE needs its own scoped scan/route rhythm without altering that shared component.

Preserve visible self-initiated classification, full fictional-business disclosure, all original premise/problem/position/decision/system/campaign/experience/channel/search/criteria content, success criteria/no-results statement and the transition into NOCT. Reorganize rather than delete.

## Design decisions

1. Hero: almost full-viewport night freight photograph, enormous locked HARDLINE wordmark near edges, dirty white typography, compact classification and metadata. Hard-light close freight detail, one subject and dark negative space. Full disclosure readable in a quiet caption band beneath the opening.
2. Brand system: #050505 black, #E8E6DF industrial white, #A9AFB1 steel, #FF5A1F safety orange. Orange is the sole HARDLINE signal color. Anton condensed display; Courier New technical mono; Figtree only for CULT commentary. Hard rules, route arrows, manifest notation, no gradient/glow/card system.
3. Rhythm: cinematic hero → crossed-out category clichés → white/orange typographic position reset → connected operational flow → massive campaign takeover/applications → interactive website → deliberate mobile composition → deployment rails → quiet query manifest → measurement instrument → NOCT. Commentary is grouped and restrained rather than captioning every deliverable.
4. Imagery: new unbranded night dock hero; large orange/white FAILURE IS EXPENSIVE billboard; trailer-side MOVE LIKE IT MATTERS application. Images have hard light, severe crop and physical materials. Responsive WebP variants; no added autoplay film.
5. Signature motion: one orange scan traverses hero/campaign/prototype at meaningful entry or state change. Clipping moves left to right; flow route activates stages sequentially. 140ms UI / 320ms interface / 800–1100ms media. Once-per-entry, native scrolling, no continual decoration. Reduced motion leaves all content visible and actions instant.
6. Campaign: giant three-line FAILURE / IS / EXPENSIVE; IS orange. Full-width billboard, narrow graphic display banner, trailer application paired with one large typographic social execution. Supporting lines limited to A missed delivery is rarely just a missed delivery; The deadline has a downstream; Move like it matters.
7. Conversion: one dominant near-full-width HARDLINE service experience with real local-only three-step form: route, date/load, consequence, then editable routing-review manifest. Optional sample controls make the prototype usable without actual information. Nothing submitted or stored; no fake quote, live shipment or send claim. Labels, keyboard focus, validation, back/edit and reset all work. A separate mobile composition pairs THE DETAILS FIRST with a large route-first device view.
8. Deployment board: four open rails, Search / LinkedIn / Contextual / OOH, each with directional proposition and existing channel explanation. No fake spend or performance.
9. Query manifest: three large intents route to their service/sector/guide destinations; retain full original explanations and prelaunch-validation note. No ranking claims.
10. Measurement: industrial ruled register with six criteria, a dash in place of actual values and defined-before-launch status. Original metric definitions and no-results statement remain readable. Existing CULT enquiry action stays magenta outside artwork.
11. Mobile: huge but fitting wordmark, intentionally positioned hero image, vertical flow line/stages, stacked deployment rails, working form at 360px, campaign type scaled to available width. No empty viewport sections, horizontal scrolling or microscopic mockup text.

## Implementation and verification

Add isolated `components/cult/hardline/` renderer, motion and routing-prototype components plus scoped stylesheet. Branch only for `study.slug === 'hardline'` in the existing dynamic route; share footer/schema/metadata. Keep `lib/studies.ts` unchanged. Snapshot protected file hashes before/after. Build/lint/typecheck/test, 1440/1280/1024/768/390/360, keyboard validation/back/reset, reduced motion, no storage/network submission, media loading, browser errors, axe, layout-shift recording. Review whole-page desktop/mobile and individual campaign/interactive sections. Update handoff and save a separate commit.
