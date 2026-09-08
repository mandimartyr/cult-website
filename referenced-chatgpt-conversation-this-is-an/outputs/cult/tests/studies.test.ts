import test from 'node:test';
import assert from 'node:assert/strict';
import {
  studies,
  nextStudy,
  studyDisclosure,
  resultsDisclosure,
} from '../lib/studies.ts';
void test('the self-initiated archive has six unique routes and a complete next-study cycle', () => {
  assert.equal(studies.length, 6);
  assert.equal(new Set(studies.map((s) => s.slug)).size, 6);
  let current = studies[0];
  const visited = new Set<string>();
  for (let i = 0; i < 6; i++) {
    visited.add(current.slug);
    current = nextStudy(current.slug);
  }
  assert.equal(visited.size, 6);
  assert.equal(current.slug, 'hardline');
});
void test('each study has strategy, a conversion path and defined success criteria without fabricated outcomes', () => {
  assert.match(studyDisclosure, /business and brief are fictional/);
  assert.match(resultsDisclosure, /No performance results are reported/);
  for (const study of studies) {
    assert.ok(
      study.system.length >= 3 &&
        study.channels.length >= 3 &&
        study.search.length >= 3,
    );
    assert.ok(study.experience.steps.length >= 4 && study.criteria.length >= 6);
    assert.doesNotMatch(
      JSON.stringify(study),
      /we increased|we achieved|we delivered a|conversion rose|revenue increased|\d+x ROAS/i,
    );
    study.criteria.forEach((c) => assert.ok(c.name && c.definition));
  }
});
