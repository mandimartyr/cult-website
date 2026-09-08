import { engagements } from '@/lib/content';

export const offers = engagements.map((offer, i) => ({
  ...offer,
  slug: ['attention-audit', 'growth-build', 'partner'][i],
  title: ['The Attention Audit', 'The Growth Build', 'CULT. Partner'][i],
  verb: ['Find it.', 'Build it.', 'Run it.'][i],
}));
export const causeExamples = [
  {
    name: 'Creative',
    cause: 'CREATIVE ↓',
    effect: 'PAID EFFICIENCY ↓',
    consequence: 'CAC ↑',
    meaning:
      'Creative weakens. Paid efficiency falls. Customer acquisition costs rise.',
  },
  {
    name: 'Search',
    cause: 'SEARCH VISIBILITY ↓',
    effect: 'PAID DEPENDENCE ↑',
    consequence: 'THE CHANNEL BECOMES THE CRUTCH.',
    meaning: 'Weak search visibility increases dependence on paid acquisition.',
  },
  {
    name: 'Conversion',
    cause: 'LANDING PAGE CONVERSION ↓',
    effect: 'MEDIA WASTE ↑',
    consequence: 'ATTENTION CANNOT LAND.',
    meaning: 'A weak landing page wastes the attention paid media acquires.',
  },
  {
    name: 'Lifecycle',
    cause: 'NO LIFECYCLE',
    effect: 'ACQUIRED ATTENTION',
    consequence: 'LOST.',
    meaning:
      'Without a lifecycle system, acquired attention is lost after the first click.',
  },
];
export const rhythm = [
  [
    'MONDAY',
    'SIGNAL',
    'What changed?',
    'Read the signals across acquisition, conversion, retention and measurement.',
  ],
  [
    'TUESDAY',
    'DECISION',
    'What matters?',
    'Prioritize the constraint that matters to the commercial goal.',
  ],
  [
    '',
    'BUILD',
    'What changes?',
    'Put the required strategy, creative and channels to work.',
  ],
  [
    '',
    'LAUNCH',
    'Put it to work.',
    'Release the agreed work with the measurement needed to understand it.',
  ],
  [
    '',
    'MEASURE',
    'What moved?',
    'Read performance against the agreed baseline and outcome.',
  ],
  [
    '',
    'LEARN',
    'What did it tell us?',
    'Turn the evidence into the next decision.',
  ],
  [
    '',
    'REPEAT',
    'What needs to move next?',
    'Keep the strategy close to execution.',
  ],
];
export const hiring = [
  [
    'YOU WRITE',
    'Tell us about the business, desired change, current activity and approximate investment.',
  ],
  ['WE TALK', 'We talk if CULT can materially affect the problem.'],
  ['WE IDENTIFY', 'Name the commercial problem and what needs to change.'],
  ['WE RECOMMEND', 'We recommend Audit, Build or Partner.'],
  [
    'WE SCOPE',
    'The proposal defines the problem, outcome, scope, measurement, timeline and investment.',
  ],
  [
    'WE BUILD',
    'Onboarding covers access, assets, analytics, stakeholders, baseline and launch plan. Then execution begins.',
  ],
  ['WE MEASURE', 'Build. Launch. Measure. Learn. Improve.'],
];
export const capabilityContext = [
  {
    study: 'signal',
    name: 'SIGNAL.',
    image: 'signal/ooh',
    alt: 'SIGNAL campaign applied to a financial district billboard',
  },
  {
    study: 'vial',
    name: 'VIAL.',
    image: 'vial',
    alt: 'VIAL. forensic fragrance study — glove, vial, brutalist type',
  },
  {
    study: 'field',
    name: 'FIELD.',
    image: 'field-application',
    alt: 'FIELD architectural stay overlooking a remote landscape',
  },
  {
    study: 'noct',
    name: 'NOCT.',
    image: 'noct/object',
    alt: 'NOCT fragrance object from the lifecycle and commerce study',
  },
  {
    study: 'hardline',
    name: 'HARDLINE.',
    image: 'hardline/billboard',
    alt: 'HARDLINE Failure Is Expensive industrial campaign',
  },
  {
    study: 'noct',
    name: 'NOCT.',
    image: 'noct/posting',
    alt: 'NOCT street campaign with fragrance and skin photography',
  },
  {
    study: 'signal',
    name: 'SIGNAL.',
    image: 'signal/station',
    alt: 'SIGNAL intelligence campaign in a station environment',
  },
];
