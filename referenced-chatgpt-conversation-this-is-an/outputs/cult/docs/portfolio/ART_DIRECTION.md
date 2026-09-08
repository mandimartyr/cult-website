# CULT. Studies — implementation direction

This implementation follows `USER_BRIEF.txt`, the user's explicit scope extension. It supersedes the old empty-work placeholders and adds the user-supplied engagement prices; it does not authorize a redesign of the rest of CULT.

## Scope and architecture

Existing `Engagements` is expanded in place. `lib/content.ts` owns pricing, scope, deliverables and caveats. The existing three films, open rows, titles and enquiry routes remain.

`lib/studies.ts` owns five typed fictional commercial studies, visible disclosures and the next-study cycle. `portfolio.tsx` supplies the shared archive, homepage selection, responsive image, label and next-study presentation. `app/work/[slug]/page.tsx` renders ten editorial chapters, metadata and CreativeWork/breadcrumb schema. `study-experience.tsx` provides website, mobile, paid-creative and email artwork as native HTML; `study-details.tsx` adds category-specific service/product/route/stay/decision pages and campaign sequences. These are labelled visual prototypes, not operational products or live forms.

The original `WorkIndex` export is retained as an alias to `Portfolio`, avoiding changes to homepage composition or its unrelated imports. All added CSS is scoped in `app/portfolio.css`; `app/globals.css`, original motion, hero, navigation and film source remain unchanged.

## Composition

- Homepage: HARDLINE dominates. NOCT portrait and AER landscape follow on unequal columns and offset baselines. FIELD/SIGNAL appear on the full Work index.
- Work: 12-column archive; HARDLINE full width, NOCT tall left, AER wide right, FIELD broad left, SIGNAL offset right with separated metadata. On mobile, NOCT occupies five of six columns left; AER occupies five right. Native mockup text recomposes and stays readable.
- Cases share a coherent chapter system, but NOCT uses a narrower campaign plane, AER expands to a cinematic band, FIELD offsets its first image and pairs an interior with stay information, and SIGNAL uses large technical typography and a physical decision record.
- CULT framing remains Figtree / #050505 / white / #FF2EB8 / hard rules. Project artwork has its own palette and wordmark: HARDLINE industrial condensed, NOCT severe serif and oxblood, AER cool blue and geometric lowercase, FIELD timber/stone/italic serif, SIGNAL paper/chrome/monospace.
- `COMPOSITION.png` and `EXPERIENCE.png` are concept references only. Their incidental generated copy, grey site framing and social reaction counts are not approved content. Application source and the user brief control the final implementation.

## Artwork and loading

Eleven generated original concepts: five landscape key artworks, five campaign/application scenes and a dedicated text-free NOCT portrait. Source paths are recorded in `asset-sources.json`; production WebP variants are committed under `public/studies/`. The landscape variants are 480/960/1536px. NOCT portrait variants are 480/960/1122px.

`StudyImage` provides native srcSet/sizes, intrinsic dimensions and asynchronous decoding. Case opening art loads eagerly at high priority; lower artwork loads lazily. Preview apertures reserve their ratios. The same requested variant is cached across repeated presentation contexts. There is no new video or font download. Existing film policies are unchanged.

## Motion

`PortfolioMotion` adds only local once-per-entry media animation: featured HARDLINE expands from .985 to 1 in 1000ms; other media uses a restrained 6% clipping exposure and opacity in 800ms. Hover scale is 1.018 over 900ms, next-study scale 1.02, arrows move 3px in 140ms. Text and controls are immediately usable; no scroll interception or blanket fade-up. Reduced motion skips entrance effects and finishes active animations. Server-rendered content is visible before JS.

## Integrity

Every index item and case heading says Self-initiated / CULT. Study. Case introductions explicitly identify both business and brief as fictional. Measurement chapters say Success criteria and explicitly state that no performance results are reported. All criteria are definitions for a possible launch. No campaign is represented as having run. Prototype fields and CTA shapes are presentation artwork, not inactive real forms.

The actual CULT enquiry remains functional: choose Audit, Build or Partner, fill required details, review and prepare a mailto draft to hello@cultmedia.house. Nothing is sent automatically.
