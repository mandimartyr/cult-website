# Portfolio and engagement verification

Verified 2026-09-06 20:56 UTC on the final local production export. Build ID: `DU2OE7kMAkmEwntpTYOWd`.

## Build and functional checks

- Production build, lint, TypeScript and all five unit tests pass. Static export generated 14 entries, including all five study routes.
- Ten content routes × 1440/1280/1024/768/390/360: no horizontal overflow. Automated WCAG 2 A/AA and 2.1 AA: zero violations on all ten routes.
- Five-study next-link cycle works on desktop and mobile. Every study has one H1, correct canonical, description, valid JSON-LD and visible fictional/self-initiated disclosure. Success criteria explicitly report no results.
- Audit, Build and Partner links correctly prefill the existing reviewed email enquiry. Six hero roles, keyboard selection, three-film buffering, pause, offscreen unload, mobile poster policy, reduced motion, menu navigation, validation, draft encoding and copy fallback pass the existing interaction regression. No email was sent.
- Case navigation run recorded no page errors or failed HTTP responses. Reduced-motion portfolio run has no running animations.
- Desktop/mobile case scroll runs recorded zero layout-shift contribution. Fresh 390px/DPR1 context requests 480px case art; fresh 1440px context requests 1536px art. Opening art is eager/high-priority; lower art is lazy. No portfolio videos were added.
- 33 responsive WebP files total 1,864,366 bytes on disk, across eleven originals; this is the complete asset set, not initial-page transfer. Largest file: 138,838 bytes. Existing Figtree and film architecture are unchanged.

## Visual review and corrections

Reviewed the Work archive and engagement rows at desktop/mobile; all five experience sections at desktop and representative mobile views; all generated campaign assets; homepage work hierarchy. HARDLINE's initial narrow-screen next-arrow overflow and image stretching were corrected. The Work index inherited the previous one-word heading scale; its scoped type/layout override now fits the new heading at all six widths. NOCT has a dedicated portrait so the tall index crop does not truncate campaign lettering.

The archive full-page captures can omit decoded offscreen images in Chrome screenshots. Individual visible-region captures and actual scroll/navigation were used to distinguish capture omissions from missing media. All study artwork loads on entry.

## Final brief questions, answered from the rendered site

- How to hire CULT. is clear: three distinct open engagement rows, supplied starting prices, diagnostic/build/ongoing scope, caveats and working enquiry actions.
- Range is demonstrated through freight qualification, fragrance purchase/lifecycle, aviation route discovery, hospitality direct booking and intelligence/demo conversion. Each includes specific channel jobs, search intent and a measurement definition.
- All five fictional brands are classified as self-initiated on index and detail pages. No client commissions, campaign results, customers, awards or testimonials are fabricated.
- HARDLINE's industrial condensed identity differs from NOCT's black-glass serif direction; AER's cold sky/geometric identity differs from both. FIELD's dark-timber physical place and SIGNAL's paper/chrome intelligence system extend the range. CULT's black/Figtree/magenta presentation remains common.
- The archive uses unequal columns, different image ratios, offset baselines and varied scale. HARDLINE is the homepage feature; FIELD/SIGNAL remain primarily in the full archive.
- The combination of finished visual proposals and commercially specific reasoning provides evidence of thinking without claiming prior client experience. Both capability and the hiring path are visible.

## Scope preservation and limits

Source comparison against `c2f1d49` confirms original globals, hero, film, navigation, motion and contact components unchanged. Problem, Stories, Thesis, Founder, FinalCTA and Footer are byte-identical. Only the authorized engagement content and Work system changed, plus their metadata/assets/styles.

Chrome automation is not field Core Web Vitals, a physical-device frame-rate guarantee or a full manual accessibility certification. Safari/Firefox and physical devices remain untested. Project product/forms are labelled visual prototypes. No real booking, checkout, freight quote or demo service was launched. The actual CULT enquiry prepares an email draft. Nothing was published or pushed to the hosted site.

Machine-readable evidence is adjacent. Recoverable browser scripts and isolated dependency instructions are in `qa-scripts/`. `PROJECT_HANDOFF.md` remains the entry point for the next conversation.
