# CULT. implementation plan

Goal: a complete, source-faithful five-page CULT. site with accessible cinematic media and an honest email enquiry flow.

Architecture: Next.js App Router static export, React/TypeScript. Server-rendered page content and metadata, small client components for media preferences, role selection, navigation and the enquiry form. The existing Sites scaffold provides reusable tabs; actual Next.js replaces the scaffold's Vinext scripts to satisfy the explicit stack request. No server or database is needed for the user-selected email handoff.

Spec: `system.md`. User brief overrides generated concept copy, font and navigation artifacts.

1. Create shared content/media manifests, local Figtree loading, exact palette and type tokens; compose the hero with the installed tabs primitive, supplied media, and native links. Show the first coherent local preview.
2. Build six story sections and their exact copy, problem and preference moments, engagement doors, selected-work placeholders, founder text, final CTA and full footer. Use the same section families across services/work/about pages.
3. Implement labelled form fields, validation, engagement prefill, review state, encoded mailto URI and copy fallback. Test special characters so prose cannot become extra mail headers; keep the recipient fixed.
4. Complete responsive CSS at 1440/1280/1024/768/390/360. Controls remain at least 44px. Text separates from mobile film. Implement reduced-motion/save-data defaults, pause/resume, offscreen suspension and error posters.
5. Add route-specific metadata, canonicals, Organization/WebSite/Service/BreadcrumbList schema, robots and sitemap; remove starter content. Verify actual production export, types and meaningful interaction tests.
6. Browser QA all page families and requested widths, tab selection with keyboard/touch, menu and form review, actual video frame advancement and pause. Capture and inspect accepted concepts and browser renders; document any source-driven differences and fix layout/contrast/overflow problems.
7. Save exact validated source, publish to the newly registered private Sites preview, verify deployment status, and hand off the URL and source with known content/media limitations.
