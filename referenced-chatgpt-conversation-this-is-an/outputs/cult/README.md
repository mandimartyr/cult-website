# CULT. / Cult Media House

**Current checkpoint:** read [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md) first. The local authorship redesign and dedicated motion pass are verified locally and not yet published. Current motion details are in `docs/motion/ART_DIRECTION.md`.

A custom Next.js App Router / React / TypeScript website, built from the supplied brief and audited source material. Five routes: homepage, services, work, about and contact. The production artifact is a static export with no database or server dependency.

## Develop and build

Use Node 22.13+ and pnpm. Run `pnpm install`, then `pnpm dev`. Run `pnpm build` to produce `out/`, which can be served by a static host with directory-index routing. There is intentionally no development server used as a production start command.

Validation: `pnpm typecheck`, `pnpm test`, `pnpm lint`, `pnpm build`. Lint covers authored application code; unmodified scaffold UI components are excluded. Current browser checks are documented in `PROJECT_HANDOFF.md`; `docs/QA.md` is historical version-1 evidence.

## Content and media

Edit supplied copy, worlds, engagements and site URL in `lib/content.ts`. Route metadata is in each page; shared metadata/schema is in `app/layout.tsx` and `lib/seo.tsx`. Update the site URL before moving to a custom domain; rebuild to regenerate canonicals and sitemap.

Films and WebP posters live in `public/media/`. Desktop and mobile versions are selected by the media component. All six capability worlds and Audit/Build/Partner use selected supplied films. The hero buffers its active film and two paused neighbours while onscreen, with an opaque outgoing layer during crossfades. Story media loads only when visible and enabled. Source reference HTML was not used as a template.

Real client names, case-study narratives, years and outcomes were not supplied. All three work entries are explicit placeholders. Replace them with verified work before presenting a finished portfolio. No invented results, clients or testimonials are included.

## Enquiries

The contact form validates and prepares an email to **hello@cultmedia.house**, as requested. Visitors review the draft and send it from their email app. A copy fallback is available. The site never reports that it has sent an enquiry and does not store submissions.

## Accessibility and loading

Numbered navigation, keyboard-operated role tabs, visible focus, labelled fields, accessible validation and a skip link. Mobile, reduced-motion and save-data preferences default to still posters. Visitors can explicitly play films. Offscreen and hidden-tab films unload; pause applies globally. All text remains available independently of video.

Design concepts, source audit, visual decisions and fidelity notes are in `docs/design/` and `docs/QA.md`. Figtree is locally served with its OFL licence in `public/fonts/`.
