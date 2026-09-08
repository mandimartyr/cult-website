import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const b = await chromium.launch({
  headless: true,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const report = [];
const axe = fs.readFileSync(
  'node_modules/.pnpm/axe-core@4.13.0/node_modules/axe-core/axe.min.js',
  'utf8',
);
for (const width of [1536, 390]) {
  const c = await b.newContext({
    viewport: { width, height: 1024 },
    reducedMotion: 'reduce',
  });
  const p = await c.newPage();
  await p.addInitScript(() => {
    window.__cls = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries())
        if (!e.hadRecentInput) window.__cls += e.value;
    }).observe({ type: 'layout-shift', buffered: true });
  });
  for (const route of [
    'services',
    'services/attention-audit',
    'services/growth-build',
    'services/partner',
  ]) {
    await p.goto('http://127.0.0.1:4179/' + route + '/');
    await p.waitForSelector('.sv-page[data-ready=true]');
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(150);
    if (route === 'services') {
      await p.screenshot({ path: `../sv-native-${width}.png` });
      for (const section of await p.locator('[data-scene]').all()) {
        await section.scrollIntoViewIfNeeded();
        await p.waitForTimeout(100);
        await section.screenshot({
          path: `../sv-final-scene-${await section.getAttribute('data-scene')}-${width}.png`,
        });
      }
      await p.locator('.sv-capability summary').first().click();
      await p
        .locator('.sv-capability[open]')
        .screenshot({ path: `../sv-cap-open-${width}.png` });
      for (const [i, name] of [
        'WEB',
        'SEARCH',
        'MEDIA',
        'EMAIL',
        'MEASUREMENT',
      ].entries()) {
        await p
          .getByRole('group', { name: 'Explore Build outputs' })
          .getByRole('button', { name, exact: true })
          .click();
        await p
          .locator('.sv-output')
          .screenshot({ path: `../sv-output-${i}-${width}.png` });
      }
    }
    await p.addScriptTag({ content: axe });
    const a = await p.evaluate(() =>
      axe.run(document.querySelector('.sv-page')),
    );
    const data = await p.evaluate(() => ({
      cls: window.__cls,
      overflow: document.documentElement.scrollWidth - innerWidth,
      brokenImages: [...document.querySelectorAll('.sv-page img')]
        .filter(
          (i) =>
            i.getBoundingClientRect().top < innerHeight &&
            i.getBoundingClientRect().bottom > 0 &&
            (!i.complete || !i.naturalWidth),
        )
        .map((i) => i.src),
      videoSources: [...document.querySelectorAll('video')].map((v) =>
        v.getAttribute('src'),
      ),
      schemas: [
        ...document.querySelectorAll('script[type="application/ld+json"]'),
      ].map((s) => JSON.parse(s.textContent)),
      canonical: document.querySelector('link[rel="canonical"]')?.href,
    }));
    report.push({
      width,
      route,
      ...data,
      axe: a.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    console.log(
      JSON.stringify({
        width,
        route,
        axe: report.at(-1).axe,
        cls: data.cls,
        overflow: data.overflow,
      }),
    );
    if (route === 'services') {
      await p.addStyleTag({
        content:
          '.sv-page p:not(.sv-good):not(.sv-execution-word),.sv-page .sv-label,.sv-page .sv-offer-copy{filter:blur(5px)}',
      });
      for (const section of await p.locator('[data-scene]').all()) {
        await section.scrollIntoViewIfNeeded();
        await section.screenshot({
          path: `../sv-blur-${await section.getAttribute('data-scene')}-${width}.png`,
        });
      }
    }
  }
  await c.close();
}
// Optional finite playback and reduced-motion change.
const c = await b.newContext({
  viewport: { width: 1440, height: 960 },
  reducedMotion: 'no-preference',
});
const p = await c.newPage();
await p.goto('http://127.0.0.1:4179/services/');
await p.waitForSelector('.sv-main[data-ready=true]');
await p.locator('.sv-audit-media').scrollIntoViewIfNeeded();
await p.waitForTimeout(2000);
const film = await p
  .locator('.sv-audit-media video')
  .evaluate((v) => ({
    src: v.currentSrc,
    ready: v.readyState,
    time: v.currentTime,
    paused: v.paused,
  }));
await p.getByRole('button', { name: 'Play rhythm', exact: true }).click();
await p.waitForTimeout(1100);
const active = await p.locator('.sv-rhythm li.is-active').innerText();
await p.emulateMedia({ reducedMotion: 'reduce' });
await p.getByRole('button', { name: 'Play rhythm', exact: true }).waitFor();
await p.waitForTimeout(100);
const stopped = await p
  .locator('.sv-audit-media video')
  .evaluateAll((videos) =>
    videos.map((v) => ({ src: v.getAttribute('src'), paused: v.paused })),
  );
report.push({ motion: { film, active, stopped } });
await c.close();
await b.close();
fs.writeFileSync('../services-quality.json', JSON.stringify(report, null, 2));
for (const r of report.filter((r) => r.route)) {
  assert.equal(r.overflow, 0);
  assert.equal(r.axe.length, 0, JSON.stringify(r.axe));
  assert.equal(r.brokenImages.length, 0);
}
