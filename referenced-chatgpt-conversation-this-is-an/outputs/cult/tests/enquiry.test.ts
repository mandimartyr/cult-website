import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildEnquiry,
  validateEnquiry,
  shouldAutoplay,
} from '../lib/enquiry.ts';

await test('enquiry keeps recipient fixed and preserves reserved characters and multiline prose', () => {
  const result = buildEnquiry({
    name: 'A & B',
    email: 'test@example.com',
    company: 'Brand #1',
    needs: 'More leads & better search\nNo rushed launch',
    now: 'Search + email',
    website: 'https://example.com/?q=a&b=c',
    investment: 'Discuss',
    timing: 'October',
    notes: 'hello? #2',
    engagement: 'Attention Audit',
  });
  assert.ok(result.href.startsWith('mailto:hello@cultmedia.house?'));
  const url = new URL(result.href);
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
  assert.match(
    url.searchParams.get('body')!,
    /More leads & better search\nNo rushed launch/,
  );
  assert.match(url.searchParams.get('body')!, /How do you want to start\?: Attention Audit/);
  assert.match(url.searchParams.get('body')!, /Brand #1/);
});
await test('whitespace names, invalid email, empty objective and missing engagement are rejected', () => {
  const errors = validateEnquiry({ name: '  ', email: 'broken', needs: ' ' });
  assert.ok(errors.name && errors.email && errors.needs && errors.engagement);
  assert.deepEqual(
    validateEnquiry({
      name: 'Alex',
      email: 'alex@example.com',
      needs: 'More leads',
      engagement: 'Attention Audit',
    }),
    {},
  );
});
await test('reduced motion, save data and narrow devices never autoplay', () => {
  assert.equal(
    shouldAutoplay({
      reducedMotion: true,
      saveData: false,
      mobile: false,
      slow: false,
    }),
    false,
  );
  assert.equal(
    shouldAutoplay({
      reducedMotion: false,
      saveData: true,
      mobile: false,
      slow: false,
    }),
    false,
  );
  assert.equal(
    shouldAutoplay({
      reducedMotion: false,
      saveData: false,
      mobile: true,
      slow: false,
    }),
    false,
  );
  assert.equal(
    shouldAutoplay({
      reducedMotion: false,
      saveData: false,
      mobile: false,
      slow: true,
    }),
    false,
  );
  assert.equal(
    shouldAutoplay({
      reducedMotion: false,
      saveData: false,
      mobile: false,
      slow: false,
    }),
    true,
  );
});
