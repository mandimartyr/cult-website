import Link from 'next/link';
import { Footer } from '../sections';
import { PrintArt } from '../print-art';
import { offers } from './data';
import { ServiceLink } from './primitives';
import { ServicesMotion } from './motion';
import { Diagnosis, PriorityMix, BuildStates } from './package-interactions';
import './services.css';
import './package-print.css';

const modes = [
  [
    'WEB + CONVERSION',
    'Give attention somewhere to land.',
    'Websites / Landing systems / Lead capture / Conversion paths / CRO',
  ],
  [
    'SEARCH + DISCOVERY',
    'Build the surface demand can find.',
    'SEO / AEO / Service pages / Topic clusters / Editorial systems',
  ],
  [
    'CAMPAIGN + MEDIA',
    'Attention needs a job.',
    'Campaign concepts / Paid search / Social / Programmatic / Retargeting',
  ],
  [
    'EMAIL + LIFECYCLE',
    'The first click is not the end.',
    'Welcome / Nurture / Retention / Reactivation',
  ],
  [
    'PERFORMANCE CREATIVE',
    'Make something worth testing.',
    'Hooks / Copy / Static / Video direction / Testing systems',
  ],
  [
    'MEASUREMENT + CRO',
    'If it ships, it gets measured.',
    'GA4 / GTM / Events / Pixels / UTMs / Testing roadmap',
  ],
];

function Scene({
  title,
  children,
  art,
  tone = '',
}: {
  title: string;
  children?: React.ReactNode;
  art?: string;
  tone?: string;
}) {
  return (
    <section className={`pk-scene ${tone}`}>
      {art && (
        <div className="pk-art">
          <PrintArt name={art} />
        </div>
      )}
      <h2 data-sv-reveal="clip">{title}</h2>
      {children && <div className="pk-body">{children}</div>}
    </section>
  );
}

function Edges({
  includedTitle,
  included,
  excludedTitle,
  excluded,
}: {
  includedTitle: string;
  included: string;
  excludedTitle: string;
  excluded: string;
}) {
  return (
    <div className="pk-edges">
      <div>
        <h3>{includedTitle}</h3>
        <p>{included}</p>
      </div>
      <div>
        <h3>{excludedTitle}</h3>
        <p>{excluded}</p>
      </div>
    </div>
  );
}

export function OfferPage({ slug }: { slug: string }) {
  const offer = offers.find((o) => o.slug === slug)!;
  const audit = offer.name === 'Audit';
  const build = offer.name === 'Build';
  const art = audit ? 'strategy' : build ? 'conversion' : 'measurement';
  const duration = audit
    ? '10–14 DAYS'
    : build
      ? '4–10 WEEKS / TYPICAL'
      : 'ONGOING / MONTHLY';
  const contactHref = `/contact/?engagement=${encodeURIComponent(offer.name)}`;
  const poster = audit
    ? (['Find', 'the', 'break.'] as const)
    : build
      ? (['Build', 'the', 'fix.'] as const)
      : (['Run', 'the', 'system.'] as const);
  const intro = audit
    ? 'Ten visible problems are usually one constraint. Diagnose it before you spend more.'
    : build
      ? 'The constraint is named. Scope the build around it, put it live, and measure what moved.'
      : 'Strategy, creative, distribution and measurement stay in one weekly operating conversation—not three vendor threads.';

  return (
    <>
      <main
        id="main"
        className={`sv-page pk-page pk-${offer.name.toLowerCase()}`}
      >
        <ServicesMotion />
        <section className="pk-hero cult-hero">
          <div className="pk-art">
            <PrintArt name={art} priority />
          </div>
          <ServiceLink href="/services/">Services / {offer.name}</ServiceLink>
          <p className="pk-meta">
            {audit ? '01' : build ? '02' : '03'} / {offer.name}
          </p>
          <h1 className="cult-poster-title">
            {poster.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <h2>{offer.title}</h2>
          <dl className="pk-facts">
            <div>
              <dt>Who it’s for</dt>
              <dd>{offer.audience}</dd>
            </div>
            <div>
              <dt>Investment</dt>
              <dd className="pk-price">{offer.price}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{duration}</dd>
            </div>
          </dl>
          <p className="pk-intro">{intro}</p>
          <ServiceLink href={contactHref}>{offer.cta}</ServiceLink>
        </section>

        {audit ? (
          <>
            <section className="pk-noise">
              <p className="pk-meta">Observations / not diagnoses</p>
              <div>
                {[
                  'TRAFFIC IS DOWN.',
                  'CPC IS UP.',
                  'WE NEED A NEW SITE.',
                  'LEADS ARE FLAT.',
                  'TRY TIKTOK.',
                  'SEO IS SLOW.',
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <h2 data-sv-reveal="clip">Symptoms are not strategy.</h2>
              <p className="pk-noise-note">
                We follow how a customer finds you, considers you and decides—
                then name where attention stops becoming revenue.
              </p>
            </section>

            <Scene title="What leaves the room with you.">
              <ol className="pk-deliverables">
                {[
                  [
                    'The diagnosis',
                    'The primary commercial constraint and the evidence behind it.',
                  ],
                  [
                    'The priority map',
                    'What to fix, stop, test and wait on.',
                  ],
                  [
                    'The 90-day sequence',
                    'What happens first, what depends on what, and where investment can matter.',
                  ],
                  [
                    'The working session',
                    'A focused walkthrough of findings, trade-offs and next moves.',
                  ],
                ].map(([a, b]) => (
                  <li key={a}>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </li>
                ))}
              </ol>
            </Scene>

            <section className="pk-scene">
              <h2>What to fix, stop, test and wait on.</h2>
              <Diagnosis />
            </section>

            <section className="pk-scene pk-intake">
              <p className="pk-meta">The investigation / 10–14 days</p>
              <div className="pk-split">
                <h2>
                  Open the books.
                  <br />
                  <em>We’ll connect the dots.</em>
                </h2>
                <p>
                  Bring the ambition, current activity and the numbers that are
                  not adding up. Ten days later you leave with a diagnosis and a
                  sequence—not another vague deck.
                </p>
              </div>
              <ol className="pk-trace-grid pk-three">
                {[
                  [
                    'Access',
                    'You bring the evidence.',
                    'Commercial objective, analytics, current work and known problems.',
                  ],
                  [
                    'Trace',
                    'We follow the breaks.',
                    'Journey review, diagnosis tests and dependency mapping.',
                  ],
                  [
                    'Sequence',
                    'You get a way forward.',
                    'Prioritized diagnosis, 90-day roadmap and a working session.',
                  ],
                ].map(([a, b, c], i) => (
                  <li key={a}>
                    <span className="pk-index">0{i + 1}</span>
                    <h3>{a}</h3>
                    <strong>{b}</strong>
                    <p>{c}</p>
                  </li>
                ))}
              </ol>
            </section>

            <Scene title="The audit has edges." tone="pk-paper">
              <Edges
                includedTitle="Included."
                included="Full-funnel diagnosis, priority map, practical 90-day roadmap and a working session. The roadmap is yours to keep."
                excludedTitle="Not included."
                excluded="Implementation, campaign management, creative production or an ongoing retainer. Those are scoped separately as Build or Partner."
              />
            </Scene>

            <section className="pk-scene pk-handoff">
              <p className="pk-meta">The roadmap is yours</p>
              <h2>
                Clarity first.
                <br />
                <em>Your move next.</em>
              </h2>
              <p>
                No obligation to continue. Take the sequence in-house, hold your
                ground, or scope the next engagement with CULT.
              </p>
              <div className="pk-handoff-options">
                <div>
                  <span className="pk-index">01</span>
                  <h3>Take it in-house.</h3>
                  <p>Give your team a clear sequence to work from.</p>
                </div>
                <Link href="/services/growth-build/">
                  <span className="pk-index">02 ↗</span>
                  <h3>Build with CULT.</h3>
                  <p>Turn the priority into a defined implementation — from $4,000 CAD.</p>
                </Link>
                <div>
                  <span className="pk-index">03</span>
                  <h3>Hold your ground.</h3>
                  <p>Keep what works. Wait where the evidence says wait.</p>
                </div>
              </div>
            </section>
          </>
        ) : build ? (
          <>
            <section className="pk-scene">
              <h2>This is the response.</h2>
              <BuildStates />
            </section>

            <Scene title="The job defines the scope." tone="pk-paper">
              <p className="pk-meta">
                Illustrative growth build / not a client result
              </p>
              <h3>Qualified traffic. Weak landing experience.</h3>
              <p>
                Build: landing architecture, messaging, proof, lead capture,
                conversion tracking, campaign alignment and a testing plan.
              </p>
              <p>
                Not required for this example: a full site redesign, newsletter,
                new social channels or brand replatform.
              </p>
              <p>
                One named constraint. Strategy, creative and production locked
                onto it—not every channel on the menu.
              </p>
            </Scene>

            <section className="pk-modes">
              <p className="pk-meta">Possible build modes / not automatic inclusions</p>
              {modes.map(([a, b, c], i) => (
                <details name="build-modes" key={a} open={i === 0}>
                  <summary>
                    <span>
                      0{i + 1} / {a}
                    </span>
                    <strong>{b}</strong>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{c}</p>
                </details>
              ))}
            </section>

            <Scene title="From brief to live.">
              <ol className="pk-production">
                {[
                  [
                    'DEFINE',
                    'Outcome, constraint, success condition, dependencies and scope.',
                  ],
                  [
                    'DESIGN',
                    'Architecture, experience, creative direction and measurement plan.',
                  ],
                  [
                    'BUILD',
                    'Pages, campaigns, systems, creative and tracking.',
                  ],
                  ['LAUNCH', 'The work goes into market.'],
                  ['READ', 'What moved? What changes next?'],
                ].map(([a, b]) => (
                  <li key={a} data-sv-reveal="rule">
                    <strong>{a}.</strong>
                    <p>{b}</p>
                  </li>
                ))}
              </ol>
            </Scene>

            <Scene title="We put the thing live." art="conversion">
              <p>
                A live, connected, measurable piece of the marketing system—not
                a pile of files waiting for another vendor.
              </p>
            </Scene>

            <Scene title="The build has edges.">
              <Edges
                includedTitle="In the scope."
                included="One commercial job. The required connected assets. Instrumentation. Launch. A short post-launch operating window."
                excludedTitle="Not automatic."
                excluded="Every channel. Ongoing management. Permanent retainer access. Production without a named commercial job. Media spend."
              />
            </Scene>

            <Scene title="Define the number before we build." art="measurement">
              <p>
                Agree on the evidence before production: qualified leads,
                conversion, visibility, activation, booking or another meaningful
                commercial measure. No invented performance promises.
              </p>
            </Scene>

            <Scene title="The next engagement should be earned.">
              <div className="pk-path">
                <span>YOU RUN IT.</span>
                <span>WE ITERATE.</span>
                <span>WE RUN IT.</span>
              </div>
              <p>
                Take the working system in-house. Scope a follow-up Build. Or
                move into Partner when ongoing operation is needed — from $4,000
                CAD / month. Still unsure of the constraint? Start with an{' '}
                <Link href="/services/attention-audit/">Attention Audit</Link>{' '}
                from $1,500 CAD.
              </p>
            </Scene>
          </>
        ) : (
          <>
            <Scene title="Marketing does not stay fixed." art="media">
              <p>
                Search demand changes. Creative fatigues. Audiences shift. The
                plan has to move with the evidence—not with a fixed channel menu.
              </p>
            </Scene>

            <Scene title="One system. Not a stack of vendors.">
              <p>
                CULT. operates across the disciplines the strategy requires and
                coordinates with people already inside your business. The value
                is making the work move in the same direction.
              </p>
            </Scene>

            <section className="pk-scene pk-rhythm">
              <p className="pk-meta">Every week has a job</p>
              {['READ', 'DECIDE', 'MAKE', 'LAUNCH', 'MEASURE', 'REFINE'].map(
                (x, i) => (
                  <div key={x} data-sv-reveal={i % 2 ? 'rule' : 'clip'}>
                    <span>0{i + 1}</span>
                    <h2>{x}.</h2>
                  </div>
                ),
              )}
            </section>

            <Scene title="Do not increase media yet." tone="pk-paper">
              <p className="pk-meta">
                Illustrative weekly read / not a client result
              </p>
              <p>
                Paid traffic is stable. Creative is generating qualified clicks.
                Landing-page completion has weakened.
              </p>
              <h3>Next move: fix the landing experience first.</h3>
              <p>Activity is not the job. The next right move is.</p>
            </Scene>

            <section className="pk-scene">
              <h2>No fixed channel mix.</h2>
              <p>
                Each week’s priorities follow the evidence—not a standing list of
                channels you are stuck paying for.
              </p>
              <PriorityMix />
            </section>

            <Scene title="Back what works. Change what doesn’t." art="creative">
              <p>
                Pause low-value activity. Replace tired creative. Expand work
                the evidence supports. Sometimes the right move is less.
              </p>
            </Scene>

            <Scene title="Fewer layers between evidence and action.">
              <p>
                Senior strategic ownership with coordinated specialist execution.
                The people directing the work understand the business, objective,
                evidence and trade-offs.
              </p>
              <h3>Plan in 90 days. Operate every week.</h3>
              <div className="pk-path">
                <span>NOW / PRIORITIES</span>
                <span>30 / LAUNCH</span>
                <span>60 / LEARN</span>
                <span>90 / NEXT</span>
              </div>
              <p className="pk-meta">
                Planning horizon—not a minimum contract term.
              </p>
            </Scene>

            <Scene title="Reporting ends in a decision." tone="pk-paper">
              <ol className="pk-sequence">
                {[
                  'What changed?',
                  'Why?',
                  'What did we do?',
                  'What happened?',
                  'What changes next?',
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ol>
            </Scene>

            <Scene title="Partner has edges.">
              <Edges
                includedTitle="One operating relationship."
                included="Senior strategy, campaign planning, creative direction, coordinated execution, optimization and measurement across the agreed mix—in a weekly rhythm."
                excludedTitle="Separate / not default."
                excluded="Paid media spend. Major production. Material projects beyond the agreed scope. Every channel is not included by default. Partner is not a way to try everything."
              />
              <p>
                Start here when marketing is already active and there is enough
                evidence to learn from. Still diagnosing?{' '}
                <Link href="/services/attention-audit/">Attention Audit</Link>{' '}
                from $1,500 CAD. Need one defined fix first?{' '}
                <Link href="/services/growth-build/">Growth Build</Link> from
                $4,000 CAD.
              </p>
            </Scene>
          </>
        )}

        <Scene
          title={
            audit
              ? 'Stop guessing what’s broken.'
              : build
                ? 'You know what needs to change. Build it.'
                : 'The system is moving. Run it better.'
          }
          art={art}
        >
          <p className="pk-meta">
            {offer.price} / {duration}
          </p>
          <p className="pk-close-note">{offer.lead}</p>
          <ServiceLink href={contactHref}>{offer.cta}</ServiceLink>
        </Scene>

        <nav className="pk-other" aria-label="Other packages">
          {offers
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <ServiceLink key={x.slug} href={`/services/${x.slug}/`}>
                <span className="pk-other-title">{x.title}</span>
                <span className="pk-other-price">{x.price}</span>
              </ServiceLink>
            ))}
        </nav>

        <aside className="pk-sticky-cta" aria-label="Package summary">
          <div>
            <strong>{offer.title}</strong>
            <span>
              {offer.price} · {duration}
            </span>
          </div>
          <ServiceLink href={contactHref}>{offer.cta}</ServiceLink>
        </aside>
      </main>
      <Footer />
    </>
  );
}
