export const site = {
  name: 'CULT.',
  legalName: 'Cult Media House',
  url: 'https://cultmedia.house',
  email: 'hello@cultmedia.house',
  description:
    'Full-funnel marketing for brands worth following—everywhere. Strategy, creative, search, paid media, web, email, conversion and measurement—connected to one commercial goal.',
};
export const whoItsFor =
  'For edgy operators building new brands—loud, weird, and worth following. Anywhere.';
export const proofLine =
  'Self-initiated studies that show how we think. Client work replaces them as it ships.';
export const navigation = [
  { name: 'Work', href: '/work/', number: '01' },
  { name: 'Services', href: '/services/', number: '02' },
  { name: 'About', href: '/about/', number: '03' },
  { name: 'Journal', href: '/blog/', number: '04' },
  { name: 'Contact', href: '/contact/', number: '05' },
];
export type World = {
  id: string;
  number: string;
  name: string;
  headline: string;
  paragraphs: string[];
  poster: string;
  film?: string;
  position?: string;
};
export const worlds: World[] = [
  {
    id: 'strategy',
    number: '01',
    name: 'Strategy',
    headline: 'Find the signal.',
    paragraphs: [
      'Before another dollar moves, name what actually needs to change.',
      'Positioning, audiences, funnels, campaigns, offers and growth roadmaps built around one commercial outcome.',
    ],
    poster: 'strategy',
    film: 'strategy',
    position: '70% center',
  },
  {
    id: 'creative',
    number: '02',
    name: 'Creative',
    headline: 'Earn the attention.',
    paragraphs: [
      'Paid media cannot save creative nobody notices.',
      'Campaign concepts, hooks, video, static, copy and testing systems—built for the feeds and surfaces where people actually see it.',
    ],
    poster: 'creative',
    film: 'creative',
    position: 'center',
  },
  {
    id: 'media',
    number: '03',
    name: 'Media',
    headline: 'Put it in front of the right people.',
    paragraphs: [
      'Meta. Google. TikTok. LinkedIn. Reddit. Programmatic. Retargeting.',
      'Every dollar gets a job—and a way to prove it.',
    ],
    poster: 'media',
    film: 'media',
    position: 'center',
  },
  {
    id: 'search',
    number: '04',
    name: 'Search',
    headline: 'Capture the demand already there.',
    paragraphs: [
      'SEO, answer-engine visibility, service pages, content systems and local search—built around what buyers are already trying to find.',
    ],
    poster: 'search',
    film: 'search',
    position: 'center',
  },
  {
    id: 'conversion',
    number: '05',
    name: 'Conversion',
    headline: 'Make the attention worth something.',
    paragraphs: [
      'Websites, landing pages, email, lifecycle and lead capture—systems that move people past the first click.',
    ],
    poster: 'conversion',
    film: 'conversion',
    position: 'center',
  },
  {
    id: 'measurement',
    number: '06',
    name: 'Measurement',
    headline: 'Know what moved.',
    paragraphs: [
      'Tracking, dashboards, attribution, testing, CRO and reporting built to improve the next decision—not just file the last one.',
    ],
    poster: 'measurement',
    film: 'measurement',
    position: '15% center',
  },
];
export const engagements = [
  {
    name: 'Audit',
    number: '01',
    lead: 'Find what is stopping growth.',
    audience:
      'For teams that see symptoms—traffic, cost, leads, creative—but cannot yet name the constraint.',
    price: 'FROM $1,500 CAD',
    copy: 'A focused full-funnel diagnostic that names where attention, demand, conversion, retention or measurement is breaking down.',
    scopeLabel: 'Across the funnel',
    scope:
      'Strategy / Website / Search / Creative / Paid media / Email / Conversion / Measurement',
    deliverable:
      'A prioritized diagnosis and practical 90-day roadmap: what to change first, what can wait, and where more investment is most likely to matter.',
    note: '',
    cta: 'Start with an audit',
    image: 'audit',
    example: 'Full-funnel diagnostic and a practical 90-day roadmap.',
  },
  {
    name: 'Build',
    number: '02',
    lead: 'Build what the funnel is missing.',
    audience:
      'For businesses that already know the constraint and need the fix built, launched and measured.',
    price: 'FROM $4,000 CAD',
    copy: 'Focused implementation around one named growth constraint—not every channel on the menu.',
    scopeLabel: 'A Build may include',
    scope:
      'Websites / Landing pages / SEO / AEO / Content systems / Email / Paid campaigns / Programmatic / Creative / Analytics / CRO',
    deliverable: 'Fix the constraint. Ship the next stage of growth.',
    note: 'Scope follows the constraint. Every Build is defined around what is needed—not every capability listed here.',
    cta: 'Discuss a build',
    image: 'build',
    example: 'Website, landing page, tracking stack, or campaign launch.',
  },
  {
    name: 'Partner',
    number: '03',
    lead: 'Run the system.',
    audience:
      'For active marketing systems that need senior strategy and execution in one weekly operating rhythm.',
    price: 'FROM $4,000 CAD / MONTH',
    copy: 'Ongoing senior strategy and execution across the channels that actually move growth.',
    scopeLabel: 'The ongoing relationship',
    scope:
      'Strategy / Campaign planning / Creative direction / Paid media / Search / Conversion / Lifecycle / Measurement / Optimization',
    deliverable:
      'One growth strategy. One operating rhythm. No stack of disconnected vendors.',
    note: 'Paid media spend and major production costs are separate.',
    cta: 'Work with CULT.',
    image: 'partner',
    example: 'Ongoing strategy, creative, media, email and measurement.',
  },
];
export type CapabilityPackage = { name: string; price: string };
export type Capability = {
  name: string;
  copy: string;
  tags: string[];
  packages?: CapabilityPackage[];
  outcome: string;
  terms: string;
  /** Indices into engagements / offers: 0 Audit, 1 Build, 2 Partner */
  bestFit: number[];
};
export const capabilities: Capability[] = [
  {
    name: 'Strategy',
    outcome: 'DECIDE WHAT MATTERS.',
    copy: 'Audits, growth roadmaps, brand messaging, offer strategy, funnel and campaign strategy—plus fractional senior support when you do not need a full in-house team.',
    tags: [
      'Audits',
      'Growth roadmaps',
      'Brand messaging',
      'Offer strategy',
      'Funnel / campaign strategy',
      'Fractional support',
      'Reputation / reviews',
    ],
    terms:
      'Audits / Growth roadmaps / Brand messaging / Offer strategy / Funnel planning / Campaign strategy / Fractional support / Reputation',
    packages: [
      { name: 'Attention Audit', price: 'FROM $1,500 CAD' },
      { name: 'Brand Blueprint', price: 'FROM $1,500 CAD' },
    ],
    bestFit: [0, 2],
  },
  {
    name: 'Websites + Conversion',
    outcome: 'TURN ATTENTION INTO ACTION.',
    copy: 'Websites, landing pages, refreshes, CRO, lead capture and tracking-ready structure—including social proof where it helps conversion.',
    tags: [
      'Websites',
      'Landing pages',
      'Refreshes',
      'CRO',
      'Lead capture',
      'Tracking-ready structure',
      'Social proof',
    ],
    terms:
      'Websites / Landing pages / Website refreshes / CRO / Lead capture / Tracking-ready structure',
    packages: [
      { name: 'Campaign Landing Page', price: 'FROM $2,000 CAD' },
      { name: 'Website Build', price: 'FROM $5,000 CAD' },
      { name: 'Website Refresh', price: 'FROM $2,000 CAD' },
    ],
    bestFit: [1, 2],
  },
  {
    name: 'Search + Content',
    outcome: 'GET FOUND WHEN INTENT EXISTS.',
    copy: 'SEO, AEO, service pages, blog, FAQ, topic clusters, local SEO and content calendars built around what buyers are actually trying to find.',
    tags: [
      'SEO',
      'AEO',
      'Service pages',
      'Blog',
      'FAQ',
      'Topic clusters',
      'Local SEO',
      'Content calendars',
    ],
    terms:
      'SEO / AEO / Service pages / Blog / FAQ strategy / Topic clusters / Local SEO / Content calendars',
    packages: [
      { name: 'Search Signal Kit', price: 'FROM $2,000 CAD / MONTH' },
      { name: 'Search + Answer Audit', price: 'FROM $1,000 CAD' },
    ],
    bestFit: [1, 2],
  },
  {
    name: 'Email + Newsletters',
    outcome: 'KEEP THE RELATIONSHIP.',
    copy: 'Newsletters, welcome and nurture sequences, promo and retention campaigns, templates, list growth and CRM systems connected to the wider funnel.',
    tags: [
      'Newsletters',
      'Welcome',
      'Nurture',
      'Promo',
      'Retention',
      'Templates',
      'List growth',
      'CRM / Lead nurture',
    ],
    terms:
      'Newsletters / Welcome sequences / Lead nurture / Promo / Retention / Templates / List growth / CRM',
    packages: [
      { name: 'Newsletter Package', price: 'FROM $1,500 CAD / MONTH' },
      { name: 'Lead Nurture System', price: 'FROM $2,000 CAD' },
    ],
    bestFit: [1, 2],
  },
  {
    name: 'Paid Media + Programmatic',
    outcome: 'BUY ATTENTION WITH A JOB.',
    copy: 'Meta, Google, TikTok, LinkedIn, Reddit, Amazon DSP, StackAdapt, display, retargeting, buying and reporting—every dollar with a job.',
    tags: [
      'Meta',
      'Google',
      'TikTok',
      'LinkedIn',
      'Reddit',
      'Amazon DSP',
      'StackAdapt',
      'Display',
      'Retargeting',
      'Buying',
      'Reporting',
    ],
    terms:
      'Meta / Google / TikTok / LinkedIn / Reddit / Amazon DSP / StackAdapt / Display / Retargeting / Media buying / Reporting',
    packages: [
      { name: 'Paid Media Launch', price: 'FROM $2,000 CAD' },
      { name: 'Paid Media Retainer', price: 'FROM $2,000 CAD / MONTH' },
    ],
    bestFit: [2, 1],
  },
  {
    name: 'Creative Assets',
    outcome: 'GIVE PEOPLE A REASON TO CARE.',
    copy: 'Static, video, carousel, landing-page creative, copy variations, hooks, concepts, testing systems and monthly refreshes—built for the channels that carry them.',
    tags: [
      'Static',
      'Video',
      'Carousel',
      'LP creative',
      'Copy variations',
      'Hooks',
      'Concepts',
      'Testing',
      'Monthly refreshes',
    ],
    terms:
      'Static / Video / Carousel / LP creative / Ad copy variations / Hooks / Campaign concepts / Creative testing / Monthly refreshes',
    packages: [
      { name: 'Creative Lab', price: 'FROM $1,000 CAD' },
      { name: 'Creative Lab Monthly', price: 'FROM $2,000 CAD / MONTH' },
    ],
    bestFit: [1, 2],
  },
  {
    name: 'Measurement + Optimization',
    outcome: 'KNOW WHAT CHANGED.',
    copy: 'GA4, GTM, pixels, key events, UTMs, dashboards, reporting, CRO and performance analysis—so the next decision is better than the last.',
    tags: [
      'GA4',
      'GTM',
      'Pixels',
      'Key events',
      'UTMs',
      'Dashboards',
      'Reporting',
      'CRO',
      'Analysis',
    ],
    terms:
      'GA4 / GTM / Pixels / Key events / UTMs / Dashboards / Reporting / CRO / Performance analysis',
    packages: [
      { name: 'Tracking Stack', price: 'FROM $2,000 CAD' },
      { name: 'Conversion Audit', price: 'FROM $1,500 CAD' },
    ],
    bestFit: [0, 2],
  },
];
export const founderCopy = [
  'Cult Media House works everywhere. No local lock. No borders on the brief.',
  'We build the signal people join—creative, media, search, conversion and measurement locked to one commercial goal. Not another polite marketing deck.',
  'No big-agency relay race. No strategy vanishing into another department. A small, sharp team built to make brands worth following.',
];
