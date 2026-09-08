import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const browser = await chromium.launch({
  headless: true,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});
const report = [];
for (const width of [1440, 1280, 390, 360]) {
  const context = await browser.newContext({
    viewport: { width, height: 960 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  const errors = [],
    mutations = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('request', (r) => {
    if (!['GET', 'HEAD'].includes(r.method())) mutations.push(r.url());
  });
  await page.goto('http://127.0.0.1:4179/services/');
  await page
    .waitForSelector('.sv-main[data-ready=true]', { timeout: 15000 })
    .catch(async () => {
      console.log('RETRY', width, errors);
      await page.reload();
      await page.waitForSelector('.sv-main[data-ready=true]');
    });
  await page.evaluate(() => document.fonts.ready);
  const cases = [];
  const check = async (name) => {
    await page.waitForTimeout(80);
    cases.push({
      name,
      ...(await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - innerWidth,
        excess: [...document.querySelectorAll('.sv-page *')]
          .filter((e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + 3)
          .map((e) => ({
            class: e.className,
            text: e.textContent.slice(0, 60),
            diff: e.scrollWidth - e.clientWidth,
          }))
          .slice(0, 15),
      }))),
    });
  };
  for (const label of [
    'Explore a commercial dependency',
    'Explore Build outputs',
    'How hiring works',
    'Execution rhythm',
  ]) {
    const group = page.getByRole('group', { name: label });
    for (const btn of await group.getByRole('button').all()) {
      const text = await btn.innerText();
      await btn.click();
      assert.equal(await btn.getAttribute('aria-pressed'), 'true');
      await check(label + ': ' + text);
    }
  }
  for (const detail of await page.locator('.sv-capability').all()) {
    await detail.locator('summary').click();
    await check('capability ' + (await detail.locator('summary').innerText()));
    await detail.locator('summary').click();
  }
  await page.locator('.sv-diagnostic').scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);
  await page
    .getByRole('button', { name: 'Inspect signals', exact: true })
    .click();
  await page
    .getByRole('button', { name: 'Isolate the constraint', exact: true })
    .click();
  for (const button of await page.locator('.sv-rhythm li button').all()) {
    await button.click();
    assert.equal(await button.getAttribute('aria-pressed'), 'true');
  }
  for (const [slug, offer] of [
    ['attention-audit', 'Audit'],
    ['growth-build', 'Build'],
    ['partner', 'Partner'],
  ]) {
    await page.goto('http://127.0.0.1:4179/services/');
    await page
      .waitForSelector('.sv-main[data-ready=true]', { timeout: 15000 })
      .catch(async () => {
        console.log('RETRY', width, errors);
        await page.reload();
        await page.waitForSelector('.sv-main[data-ready=true]');
      });
    await page
      .locator('a[href="/services/' + slug + '/"]')
      .first()
      .click();
    await page.waitForURL('**/services/' + slug + '/');
    await page.waitForSelector('.sv-offer-page[data-ready=true]');
    assert.ok(await page.locator('h1').innerText());
    await page
      .locator('a[href="/contact/?engagement=' + offer + '"]')
      .first()
      .click();
    await page.waitForURL('**/contact/?engagement=' + offer);
    await page.waitForSelector('.engagement-selected');
    assert.match(
      await page.locator('.engagement-selected').innerText(),
      new RegExp(offer),
    );
    await page.getByRole('button', { name: 'Start the conversation' }).click();
    assert.ok(await page.locator('.field-error').count());
    await page.locator('#name').fill('CULT QA');
    await page.locator('#email').fill('qa@example.com');
    await page
      .locator('#needs')
      .fill('Test local package enquiry without sending.');
    await page.getByRole('button', { name: 'Start the conversation' }).click();
    await page.locator('.enquiry-review').waitFor();
    assert.ok(
      (
        await page
          .getByRole('link', { name: 'Open email draft' })
          .getAttribute('href')
      ).startsWith('mailto:hello@cultmedia.house'),
    );
  }
  report.push({ width, cases, errors, mutations });
  console.log(
    JSON.stringify({
      width,
      cases: cases.length,
      overflows: cases.filter((c) => c.overflow),
      errors,
      mutations,
    }),
  );
  await context.close();
}
await browser.close();
fs.writeFileSync(
  '../services-interactions.json',
  JSON.stringify(report, null, 2),
);
for (const r of report) {
  assert.equal(r.errors.length, 0);
  assert.equal(r.mutations.length, 0);
  for (const c of r.cases) assert.equal(c.overflow, 0, c.name);
}
