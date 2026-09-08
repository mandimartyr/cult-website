# CULT. motion direction

Motion-only pass, 2026-09-06. The authored layout, typography, content, imagery and routes from checkpoint dd3dc7c are locked. No animation library was added.

## Timing and character

| Tier | Token | Use |
| --- | --- | --- |
| MICRO | `--motion-micro: 140ms` | Links, label offsets, rules, press feedback, focus-border transitions. Active role marker changes immediately, without a transition. |
| INTERFACE | `--motion-interface: 320ms` | Mobile navigation opening and enquiry-review exposure. Story labels use 300–320ms; quiet thesis introduction uses 400ms. |
| CINEMATIC | `--motion-cinematic: 900ms` | Film crossfades. Story exposure varies 800–1100ms; typography clipping takes 700–760ms. |

UI easing: cubic-bezier(.2,.7,.2,1). Entrances: cubic-bezier(.22,.78,.2,1). No spring, overshoot, parallax, scroll capture, animated layout properties or blanket fade-up treatment.

## Surface-by-surface audit and resolution

| Surface | Motion decision |
| --- | --- |
| Hero masthead, headline, description and actions | Remain visible and still. Usability does not wait for an intro. |
| Hero role selection | Immediate magenta state; 3px horizontal active-label shift over 140ms. Keyboard/click activation remains immediate. Existing 160ms pointer-intent guard prevents incidental hover switches. |
| Hero films | Persistent poster layers. Decode incoming poster before changing visual layer; keep outgoing film/frame opaque below a 900ms incoming dissolve. Keep the selected film and its two neighbours buffered while the film aperture is onscreen. Only selected film plays. Retain outgoing source during dissolve; release after 950ms. Measurement crop is bound to its own layer, preventing crop jumps. |
| Rapid role changes | Cancel stale image decode completions. Outgoing layer is forced fully opaque to prevent an interrupted dissolve exposing the background. No usability lock while film changes. |
| Film controls | 140ms colour/press feedback. Pause is immediate; offscreen, hidden-page and global-pause states release video elements. Posters remain. |
| Strategy | Label translates 8px into position; headline clips into view over 760ms; contact-sheet exposure is 900ms. |
| Creative | Headline opacity only, 700ms with 80ms offset; triptych exposure 1100ms with 100ms offset. No travel/zoom. |
| Media | Headline remains still. Panorama exposure 800ms; small count and label provide mechanical accents. |
| Search | 760ms headline clipping; 950ms drawer exposure. No animated crop or magnification. |
| Conversion | 700ms opacity-only headline with 80ms offset; 850ms mechanism exposure. |
| Measurement | Headline stays still; narrow instrument exposure 1000ms. Label/count travel only horizontally. |
| Thesis | “Attention can be bought.” exposes quietly in 400ms. When the statement enters the viewport, three lines clip for 700ms with 0/120/240ms offsets. The period exposes last at 940ms for 140ms. Total sequence 1080ms. |
| Problem, founder and final invitation | Completely still major statements create contrast and retain immediate legibility. |
| Audit / Build / Partner | Small numbers enter horizontally in 320ms; images use the film system. Titles and decision text stay still. |
| Primary navigation | Colour changes and magenta rule extends from left in 140ms. Current route remains marked. Mobile disclosure clips open in 320ms; closing and Escape are immediate to restore access/focus. |
| Text actions | Colour/border response 140ms, arrow advances only 3px; press retracts it to 1px. No whole-object lift or scale. |
| Footer and email links | Restrained colour feedback, no positional movement. |
| Services / About internal headings and body | Still. Route navigation does not delay content behind an exit animation. |
| Work placeholders | Still, intentionally not hover-animated or presented as clickable projects. Real case studies have not been supplied. |
| Contact fields | 140ms border feedback. Validation/focus immediate, without shaking. Review exposes from .6 opacity over 320ms while remaining focusable. Clear/review-text controls get colour feedback; native disclosure remains immediate. Copy status is not delayed. |

## Accessibility and performance

- Reduced motion removes CSS transitions/animations and cancels active entrance animations. The server renders all content visible; enhancement failure cannot leave hidden text.
- Entrances observe the actual text/media, not the top of an oversized section. Each runs once per route visit. Fast scroll jumps finish in-flight entrances.
- Mobile, Save-Data and slow connections start on posters. Explicit Play enables films, with mobile encodes at <=768px. Films only load/play while their aperture is onscreen; no forced scrolling to show a selected film.
- No permanent will-change, no frame-by-frame scroll calculations, no new wrappers affecting grid layout. Changes animate opacity, clip-path or small transforms.
- Focus outlines and required validation remain immediate. Hidden media is decorative and outside keyboard order.

## Scope boundaries

No copy or layout redesign. No new clients, case studies, metrics, imagery or video sources. No public deployment in this pass. Current private published version remains the earlier implementation until a separate deployment is completed.
