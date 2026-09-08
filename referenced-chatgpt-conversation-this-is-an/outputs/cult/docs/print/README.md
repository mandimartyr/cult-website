# CULT print direction — current working implementation

The user requested risograph brutalism on all pages, stronger copy and animation, while explicitly retaining each case study's own brand. The first shared-CSS homepage attempt was rejected. **Do not restore that attempt.** The user then explicitly approved `concepts/approved-home.webp`: MAKE / ATTENTION / MATTER beside a torn-paper pink halftone eye.

## Image decisions

- Hero: approved torn-paper eye. Keep it as the default opening. Never mistake another generated section asset for a replacement hero.
- Conversion: the user explicitly likes the original finger image. The folded bridge was rejected and is not used.
- Search: maze/thread image rejected; replaced by torn-paper pink profile. Replacement has not received separate explicit approval.
- Measurement: simple gauge criticized; recreated as layered instrument collage. Latest version has not received separate explicit approval.
- Strategy: lens/hand. Media: ear/sound paper collage. No separate explicit approval recorded.
- Sources and responsive output paths: `assets.json`. Artistic work used imagegen; Pillow only resized/encoded. Originals remain in generated-images storage.

## Implementation

`hero.tsx` now uses separate `PrintArt` image layers and native textured Anton type. Active selector updates immediately; artwork waits for decode and crossfades over 900ms; adjacent full-size images are prefetched. Removed pointer-hover selection after user concern about losing the eye. Explicit tab activation remains keyboard-accessible. Reduced motion removes the crossfade. Initial creative/eye is server-rendered. No screenshot is used as UI.

`print-home.css` independently owns the approved homepage composition. `riso.css` is excluded from Home via `.home-page`; its other-route material/typography treatment is still a draft. Case-study wordmarks, artwork, colors, commercial copy and fictional-study disclosures remain their own. Existing AER/FIELD brand headings are not replaced by Anton. NOCT retains wine, HARDLINE orange, SIGNAL red. Homepage section artwork is new; Work thumbnails retain their own brands.

The homepage six capability sections and engagement imagery now use the new print assets. Old source videos remain on disk and shared playback system remains for other routes, but these new homepage artworks are animated still compositions, not newly generated video. New video production is unfinished. Original thesis reveal and varied section rhythms remain.

## Verification and limits

Production build / TypeScript passed on intermediate and final iterations; 13 page routes at desktop1440/mobile390 checked: zero axe violations, no page errors or horizontal overflow. Hero six selectors tested at1440/768/390/360, reduced motion0s versus900ms normal. Reports in `qa`. Full image/layout acceptance is NOT established by automated checks. New artwork for every other page and the expanded package briefs remain unfinished; the current global treatment is not a substitute for individual art direction.

Next: review this native homepage against approved concept; refine new section image crops and compositions; create brand-specific artwork/concepts for the remaining pages; implement the three saved expanded package briefs; preserve native controls and measured motion; update handoff with final QA and save. No deployment or push requested.


## Full-bleed capability pass
Six capability sections now fill their entire canvas with existing approved-direction artwork. Typography and support copy overlay it; old image columns are removed. Thesis uses a native layered finger/eye collage with paper-strip text. Existing reduced-motion and reveal systems retained. Hero unchanged. Only hero has user approval; all other homepage design remains draft. Build and 18 responsive image-fill/overflow checks passed.


Latest Measurement artwork revision: user rejected clock/dial imagery and requested a black-heavy composition. Replaced shared Measurement artwork with a magenta fingerprint emerging through black torn paper, with registration marks and dark space for overlay text. This supersedes all earlier dial approval notes. New artwork is awaiting user review; the default eye hero is unchanged.

Measurement fingerprint is now explicitly USER APPROVED: "PERFECT I LOVE ANATOMICAL THINGS SO IM DOWN WITH THE FINGERPRINT". Preserve this image; anatomical imagery is a preferred direction. Build passed after replacement.

Strategy artwork darkened through a new generated revision after the user authorized the same black-heavy adjustment elsewhere. Preserves hand and optical lens; replaces large cream areas with black/pink halftone and removes competing background eye. Other anatomical artwork retained. Default hero eye unchanged. Strategy revision awaits visual approval.

Continuous-black pass: homepage capability scenes and Thesis now share #050505 ground; static vertical alpha masks dissolve artwork top/bottom edges into the same ground. No source art recoloring, hero alteration or additional motion. Strategy black-heavy revision approved by user ("MUCH BETTER"). User explicitly wants consistent blacks so sections blend. Production build passed; 18 image-fill/overflow checks passed across 1440, 851 and 390px.

## Route rollout and exact magenta
CULT CSS accent is #ef1472 via --accent. Route compositions are in app/route-print.css; rebuilt package experiences are in package-print.css, offer-page.tsx and package-interactions.tsx. About gains thinking artwork. Work archive is full-bleed. Brand-specific case art retained. 26 route checks and both desktop/mobile package interaction checks pass. See latest PROJECT_HANDOFF checkpoint for scope and review status.
