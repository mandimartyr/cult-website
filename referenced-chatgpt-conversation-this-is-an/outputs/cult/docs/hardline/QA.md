# HARDLINE verification — 2026-09-06

Production static export, lint, TypeScript and all five repository tests pass. Browser QA used installed Google Chrome via Playwright because IAB viewport emulation was unreliable in this workspace. IAB was also visually inspected. No deployment.

- 1440/1280/1024/768/390/360: zero horizontal overflow; zero axe WCAG A/AA violations and page errors.
- Routing at 1440/390/360: required and whitespace validation, illustrative example, heading focus, review, back, edit, reset pass; zero storage and no mutating requests. GET/HEAD prefetch is expected.
- Reduced motion: zero running animations after preference change and scrolling. Next study opens NOCT.
- Cold hero: 1536 variant desktop / 480 mobile, loaded; measured CLS 0 on both.
- Full-page desktop/mobile and individual category, position, campaign, experience, deployment, search, measurement views visually reviewed. Enlarged wordmark; changed trailer crop to preserve lettering; readable white-form controls.
- Form repair: illustrative example clears native custom validity previously set by whitespace input.
- Protected source comparison against c0ac8ce: globals, portfolio CSS, shared components and lib data unchanged. Only HARDLINE branch and schema image added to dynamic route.

Reference HTML supplied by user inspected as visual data. Original full strategy retained from lib/studies.ts. Generated assets use orange freight identity, not publisher magenta. No fake results. Safari, Firefox and physical-device smoothness have not been verified.

QA scripts are source evidence; install Playwright and @axe-core/playwright and run with a scratch working directory against :4179. Screenshots remain scratch, not production assets.
