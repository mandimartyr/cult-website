/* Responsive image variants are pre-encoded for this static export. */
/* oxlint-disable next/no-img-element */
import localFont from 'next/font/local';
import type { Study } from '@/lib/studies';
import { studyDisclosure, resultsDisclosure, nextStudy } from '@/lib/studies';
import { Action } from '../brand';
import { NextStudy, StudyLabel } from '../portfolio';
import { RoutingPrototype } from './routing-prototype';
import { HardlineMotion } from './motion';
import './hardline.css';
const industrial = localFont({
  src: '../../../public/fonts/hardline/Anton-Regular.ttf',
  variable: '--hl-display',
  display: 'swap',
});
function FreightImage({
  name,
  alt,
  priority = false,
  className = '',
}: {
  name: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      className={`hl-image ${className}`}
      src={`/studies/hardline/${name}-1536.webp`}
      srcSet={`/studies/hardline/${name}-480.webp 480w, /studies/hardline/${name}-960.webp 960w, /studies/hardline/${name}-1536.webp 1536w`}
      sizes="(max-width:768px) 100vw, 100vw"
      width={1536}
      height={1024}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
function Scan() {
  return <i className="hl-scan" aria-hidden="true" />;
}
function Barcode() {
  return (
    <svg className="hl-barcode" viewBox="0 0 160 32" aria-hidden="true">
      {[
        0, 5, 9, 17, 21, 29, 32, 38, 43, 51, 56, 60, 68, 73, 81, 84, 89, 95,
        101, 106, 112, 117, 125, 129, 135, 143, 151, 156,
      ].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="0"
          width={i % 3 === 0 ? 4 : 2}
          height="32"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
export function HardlineStudy({ study }: { study: Study }) {
  const stages = ['Constraint', 'Routing decision', 'Qualified conversation'];
  const lanes = ['Search', 'LinkedIn', 'Contextual', 'OOH'];
  const laneLines = [
    'Capture urgent demand.',
    'Put the consequence in front of operations.',
    'Surround the category.',
    'Own the corridor.',
  ];
  const destinations = [
    'Critical freight service page',
    'Sector / load requirement page',
    'Expert guide',
  ];
  return (
    <main id="main" className={`hardline-page ${industrial.variable}`}>
      <HardlineMotion />
      <header className="hl-hero" data-hl-scan>
        <FreightImage
          name="hero"
          priority
          alt="Hard-lit freight trailer hardware and cold corrugated steel at a wet terminal after dark."
        />
        <div className="hl-hero-shade" aria-hidden="true" />
        <div className="hl-hero-top hl-mono">
          <span>CASE / 001</span>
          <span>SHIPMENT CLASS / CRITICAL</span>
          <span>ROUTE / VARIABLE</span>
        </div>
        <div className="hl-hero-title">
          <h1 data-hl-clip>HARDLINE.</h1>
          <p>{study.sentence}</p>
        </div>
        <div className="hl-hero-bottom">
          <StudyLabel study={study} />
          <div className="hl-mono">
            <p>FREIGHT / LOGISTICS / B2B INFRASTRUCTURE</p>
            <p>STRATEGY · WEB · SEARCH · MEDIA · CONVERSION · MEASUREMENT</p>
          </div>
        </div>
        <Scan />
      </header>
      <div className="hl-disclosure hl-pad">
        <p className="case-disclosure">{studyDisclosure}</p>
        <Barcode />
      </div>
      <section className="hl-category hl-pad" data-hl-category>
        <p className="hl-mono hl-section-label">02 / THE CATEGORY</p>
        <div className="hl-category-layout">
          <div
            className="hl-cliches"
            aria-label="Interchangeable category claims"
          >
            {['Reliable.', 'Fast.', 'Trusted.', 'Experienced.'].map((word) => (
              <div key={word} className="hl-cliche-word">
                <span>{word}</span>
                <i aria-hidden="true" />
              </div>
            ))}
          </div>
          <h2>
            NONE OF THAT
            <br />
            EXPLAINS WHAT
            <br />
            HAPPENS WHEN
            <br />
            <em>THE LOAD FAILS.</em>
          </h2>
        </div>
        <div className="hl-comment hl-brief-copy">
          <p>{study.premise}</p>
          <p>{study.problem}</p>
        </div>
      </section>
      <section className="hl-position">
        <div className="hl-position-old">
          <p className="hl-mono">03 / THE POSITION</p>
          <h2>
            HARDLINE
            <br />
            DOES NOT SELL
            <br />
            FREIGHT CAPACITY.
          </h2>
          <p className="hl-comment">{study.decision}</p>
        </div>
        <div className="hl-position-new">
          <p className="hl-mono">THE COMMERCIAL DECISION →</p>
          <p className="hl-position-statement" data-hl-clip>
            IT SELLS
            <br />
            REDUCED
            <br />
            OPERATIONAL
            <br />
            RISK.
          </p>
          <p className="hl-mono">WHEN FAILURE CARRIES A COST.</p>
        </div>
      </section>
      <section className="hl-operating hl-pad" data-hl-flow>
        <div className="hl-operating-heading">
          <p className="hl-mono">04 / THE OPERATING SYSTEM</p>
          <p className="hl-mono">
            CONSTRAINT IN.
            <br />
            CLARITY OUT.
          </p>
        </div>
        <div className="hl-flow">
          <i className="hl-flow-line" aria-hidden="true" />
          {study.system.map((item, i) => (
            <article className="hl-stage" key={item.name}>
              <span className="hl-stage-number">0{i + 1}</span>
              <h2>{stages[i]}</h2>
              <p className="hl-mono">{item.name}</p>
              <p className="hl-comment">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="hl-operating-end hl-mono">
          <span>DEADLINE / FIXED</span>
          <span>CONSEQUENCE / OPERATIONAL</span>
          <span aria-hidden="true">→</span>
        </div>
      </section>
      <section className="hl-campaign" aria-labelledby="hl-campaign-title">
        <div className="hl-campaign-takeover hl-pad" data-hl-scan>
          <p className="hl-mono">05 / THE CAMPAIGN</p>
          <h2 id="hl-campaign-title">
            <span data-hl-clip>FAILURE</span>
            <span className="hl-orange">IS</span>
            <span data-hl-clip>EXPENSIVE.</span>
          </h2>
          <p className="hl-campaign-counter hl-mono">
            THE LOAD IS THE BEGINNING.
            <br />
            THE CONSEQUENCE GOES FURTHER.
          </p>
          <Scan />
        </div>
        <figure className="hl-billboard">
          <FreightImage
            name="billboard"
            alt="Fictional HARDLINE corridor billboard: monumental Failure is expensive lettering in industrial white and safety orange."
          />
          <figcaption className="hl-mono">
            CAMPAIGN APPLICATIONS / PROPOSED, NOT PLACED
          </figcaption>
        </figure>
        <div className="hl-display-ad">
          <span className="hl-display-logo">HARDLINE</span>
          <p>
            THE DEADLINE HAS
            <br />A DOWNSTREAM.
          </p>
          <span className="hl-mono">
            CRITICAL FREIGHT
            <br />
            <b aria-hidden="true">→</b>
          </span>
        </div>
        <div className="hl-campaign-pair">
          <figure>
            <FreightImage
              name="trailer"
              alt="Proposed HARDLINE trailer livery with Move like it matters typography and a single safety-orange route stripe."
            />
          </figure>
          <div className="hl-social">
            <p className="hl-mono">HARDLINE / OPERATIONS</p>
            <p className="hl-social-line">
              A MISSED
              <br />
              DELIVERY IS
              <br />
              RARELY JUST
              <br />A MISSED
              <br />
              <em>DELIVERY.</em>
            </p>
            <div className="hl-social-bottom hl-mono">
              <span>DISCUSS THE SHIPMENT</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </div>
        <div className="hl-campaign-explanation hl-pad">
          <p className="hl-mono">CULT. / CAMPAIGN LOGIC</p>
          <p className="hl-comment">{study.campaignIdea}</p>
        </div>
      </section>
      <section className="hl-experience hl-pad">
        <div className="hl-experience-intro">
          <div>
            <p className="hl-mono">06 / THE EXPERIENCE</p>
            <h2>{study.experience.title}</h2>
          </div>
          <p className="hl-comment">{study.experience.copy}</p>
        </div>
        <div className="hl-website" data-hl-scan>
          <div className="hl-site-nav">
            <span>HARDLINE</span>
            <p className="hl-mono">CRITICAL FREIGHT</p>
            <a href="#routing-prototype" className="hl-mono">
              PLAN THE ROUTE ↗
            </a>
          </div>
          <div className="hl-website-hero">
            <div>
              <p className="hl-mono">THE SHIPMENT SETS THE REQUIREMENT.</p>
              <h3>
                WHEN A DELAY
                <br />
                HAS A<br />
                <em>CONSEQUENCE.</em>
              </h3>
            </div>
            <FreightImage
              name="hero"
              alt="Cold steel door and trailer hardware, the material detail behind a critical freight operation."
            />
          </div>
          <RoutingPrototype />
          <Scan />
        </div>
        <div className="hl-mobile-composition">
          <div>
            <p className="hl-mono">ONE PATH. EVERY SCREEN.</p>
            <h3>
              THE DETAILS
              <br />
              <em>FIRST.</em>
            </h3>
            <p className="hl-mobile-after">A USEFUL CONVERSATION NEXT.</p>
          </div>
          <div className="hl-mobile-screen">
            <div className="hl-mobile-bar" aria-hidden="true" />
            <p className="hl-mini-logo">HARDLINE</p>
            <p className="hl-mono">ROUTE ENQUIRY / 01</p>
            <h4>
              WHERE IT SITS.
              <br />
              WHERE IT
              <br />
              MUST ARRIVE.
            </h4>
            <div className="hl-mobile-field">
              ORIGIN<span>Origin facility</span>
            </div>
            <i className="hl-mobile-route" aria-hidden="true" />
            <div className="hl-mobile-field">
              DESTINATION<span>Receiving facility</span>
            </div>
            <a href="#routing-prototype" className="hl-button">
              TRY THE ROUTE <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <details className="hl-strategy-note">
          <summary>
            THE CONVERSION PATH <span aria-hidden="true">+</span>
          </summary>
          <ol>
            {study.experience.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            {study.emailSubject} {study.emailBody} A follow-up would carry the
            same shipment context into a useful conversation.
          </p>
        </details>
      </section>
      <section className="hl-deployment hl-pad">
        <div className="hl-deployment-header">
          <p className="hl-mono">07 / DEPLOYMENT BOARD</p>
          <h2>
            EVERY CHANNEL
            <br />
            HAS A JOB.
          </h2>
          <p className="hl-comment">
            Proposed channel roles. No campaign has run; no media budget or
            performance is claimed.
          </p>
        </div>
        <div>
          {study.channels.map((channel, i) => (
            <article className="hl-lane" data-hl-lane key={channel.name}>
              <span className="hl-lane-number">0{i + 1}</span>
              <h3>{lanes[i]}</h3>
              <div>
                <p className="hl-lane-position">{laneLines[i]}</p>
                <p className="hl-comment">{channel.job}</p>
              </div>
              <span className="hl-lane-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>
      <section className="hl-query hl-pad">
        <div className="hl-query-header">
          <p className="hl-mono">08 / THE QUERY MANIFEST</p>
          <h2>
            START WITH
            <br />
            THE QUESTION.
          </h2>
          <Barcode />
        </div>
        <div>
          {study.search.map((query, i) => (
            <article className="hl-query-row" key={query.intent}>
              <span className="hl-mono">0{i + 1}</span>
              <h3>{query.intent}</h3>
              <span className="hl-query-arrow" aria-hidden="true">
                →
              </span>
              <div>
                <p className="hl-mono">{destinations[i]}</p>
                <p className="hl-comment">{query.page}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="hl-validation hl-comment">
          Proposed intent architecture. Keywords, demand and competitive
          difficulty would be validated before launch; no rankings are claimed.
        </p>
      </section>
      <section className="hl-measurement hl-pad">
        <div className="hl-measurement-heading">
          <div>
            <p className="hl-mono">09 / MEASUREMENT FRAMEWORK</p>
            <h2>
              SUCCESS
              <br />
              CRITERIA.
            </h2>
          </div>
          <p className="results-disclosure hl-comment">{resultsDisclosure}</p>
        </div>
        <div className="hl-instrument-rule" aria-hidden="true">
          {Array.from({ length: 40 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="hl-measure-register">
          {study.criteria.map((criterion, i) => (
            <details key={criterion.name}>
              <summary>
                <span className="hl-mono">0{i + 1}</span>
                <h3>{criterion.name}</h3>
                <span className="hl-no-value" aria-label="No reported value">
                  —
                </span>
                <span className="hl-mono">
                  DEFINED BEFORE LAUNCH <i aria-hidden="true">+</i>
                </span>
              </summary>
              <p className="hl-comment">{criterion.definition}</p>
            </details>
          ))}
        </div>
        <p className="hl-validation hl-comment">
          Before launch: agree event definitions, consent requirements,
          qualification rules and reporting ownership. Validate tracking end to
          end before using it to allocate investment.
        </p>
        <div className="hl-cult-return">
          <p className="label">CULT. / STRATEGY THROUGH EXECUTION</p>
          <Action href="/contact/?engagement=Build" secondary>
            Discuss a brief like this
          </Action>
        </div>
      </section>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
