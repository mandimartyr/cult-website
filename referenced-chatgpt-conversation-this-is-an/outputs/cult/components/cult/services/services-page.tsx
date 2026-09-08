import { PrintArt } from '../print-art';
import localFont from 'next/font/local';
import { capabilities } from '@/lib/content';
import { Footer } from '../sections';
import { offers } from './data';
import { BuildOutputs, SystemConsequences } from './interactions';
import { ServiceLabel, ServiceLink } from './primitives';
import { ServicesMotion } from './motion';
import './services.css';
import './composition.css';
import './services-redesign.css';
import './package-refresh.css';

const servicesDisplay = localFont({
  src: '../../../public/fonts/hardline/Anton-Regular.ttf',
  variable: '--font-services-display',
  display: 'swap',
});

export function ServicesPage() {
  return (
    <>
      <main id="main" className={`sv-page sv-main ${servicesDisplay.variable}`}>
        <ServicesMotion />
        <section
          className="sv-hero sv-pad cult-hero"
          data-scene="01"
          aria-labelledby="sv-question"
        >
          <div className="route-print-art">
            <PrintArt name="strategy" priority />
          </div>
          <h1 id="sv-question">
            <span>WHAT</span>
            <span>NEEDS</span>
            <span>TO MOVE?</span>
          </h1>
          <div className="sv-hero-baseline">
            <p className="sv-hero-outcomes">
              Revenue. Demand. Conversion. Visibility. Retention.
            </p>
            <p className="sv-starts">
              CULT. <strong>STARTS THERE.</strong>
            </p>
          </div>
          <p className="sv-hero-credit sv-label">
            STRATEGY / CREATIVE / PERFORMANCE
          </p>
        </section>
        <div className="sv-channel-rail" aria-label="Connected capabilities">
          {[
            'STRATEGY',
            'CREATIVE',
            'SEARCH',
            'MEDIA',
            'SITE',
            'EMAIL',
            'CRM',
            'CONVERSION',
            'DATA',
          ].map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <section
          className="service-manifesto sv-pad"
          aria-labelledby="service-principle"
        >
          <ServiceLabel>01 / Start with the problem</ServiceLabel>
          <div>
            <h2 id="service-principle">
              Commercial problem.
              <br />
              <em>Connected answer.</em>
            </h2>
            <div>
              <p>
                We start with what needs to change. Then we put the right
                systems to work.
              </p>
              <p>
                Strategy, websites, search, email, paid media, creative and
                measurement—chosen around your commercial goal.
              </p>
              <a href="#attention-audit">Find your starting point ↓</a>
            </div>
          </div>
        </section>
        <section
          className="sv-system sv-pad sr-system"
          data-scene="02"
          aria-labelledby="sv-system-heading"
        >
          <ServiceLabel>02 / THE CONNECTIVE TISSUE</ServiceLabel>
          <h2 id="sv-system-heading" data-sv-reveal="clip">
            One weak link.
            <br />
            <em>Every channel feels it.</em>
          </h2>
          <p className="sr-intro">
            The ad, the landing page, the follow-up. They share the same
            customer. They need to share <strong>the same thinking.</strong>
          </p>
          <SystemConsequences />
          <div className="sv-ways">
            <h3>THREE WAYS TO START.</h3>
            <nav aria-label="Three ways to start with CULT">
              {offers.map((o) => (
                <a key={o.slug} href={`#${o.slug}`}>
                  <span>{o.verb}</span>
                  <small>
                    {o.title} / {o.price}
                  </small>
                </a>
              ))}
            </nav>
          </div>
        </section>
        {[
          {
            offer: offers[0],
            title: (
              <>
                Find the
                <br />
                constraint.
              </>
            ),
            decision: 'Know what to change first.',
            copy: 'Choose Audit when you cannot name what is holding growth back. We connect the evidence and set priorities before more budget moves.',
            scope: [
              'A prioritized diagnosis',
              'A practical 90-day roadmap',
              '10–14 days',
            ],
            cta: 'Explore the Attention Audit',
          },
          {
            offer: offers[1],
            title: (
              <>
                Build
                <br />
                the fix.
              </>
            ),
            decision: 'A known gap. A working answer.',
            copy: 'Choose Build when the problem is clear and you need it made. Strategy, creative and production lock onto one agreed outcome.',
            scope: [
              'A defined project and handover',
              'Scope follows the constraint',
              'Typically 4–10 weeks',
            ],
            cta: 'Explore the Growth Build',
          },
          {
            offer: offers[2],
            title: (
              <>
                Run the
                <br />
                system.
              </>
            ),
            decision: 'Strategy with its sleeves up.',
            copy: 'Choose Partner for ongoing senior thinking and execution. We read the signal, make the call, ship the work, and use the evidence for the next move.',
            scope: [
              'One growth strategy',
              'An ongoing operating rhythm',
              'Media spend and major production separate',
            ],
            cta: 'Explore CULT. Partner',
          },
        ].map(({ offer, title, decision, copy, scope, cta }, i) => (
          <section
            key={offer.slug}
            id={offer.slug}
            className={`service-package service-package-${i}`}
            aria-labelledby={`edition-${offer.slug}`}
          >
            <header className="edition-register">
              <ServiceLabel>
                0{i + 1} / {offer.name}
              </ServiceLabel>
              <span>{offer.price}</span>
            </header>
            <div className="package-body">
              <div className="package-art">
                <PrintArt name={['search', 'conversion', 'thinking'][i]} />
                <span aria-hidden="true">0{i + 1}</span>
              </div>
              <div className="package-copy">
                <h2 id={`edition-${offer.slug}`}>{title}</h2>
                <h3>{decision}</h3>
                <p>{copy}</p>
              </div>
            </div>
            <div className="edition-bottom">
              <ul>
                {scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ServiceLink href={`/services/${offer.slug}/`}>{cta}</ServiceLink>
            </div>
            {i === 1 && (
              <details className="edition-examples">
                <summary>
                  See what a Build can include <span aria-hidden="true">+</span>
                </summary>
                <BuildOutputs />
              </details>
            )}
          </section>
        ))}
        <section
          className="sv-operating"
          data-scene="06"
          aria-labelledby="sv-operating-heading"
        >
          <div className="sv-pad sr-process">
            <ServiceLabel>06 / From conversation to consequence</ServiceLabel>
            <h2 id="sv-operating-heading">
              Bring the problem.
              <br />
              <em>We’ll bring a way through.</em>
            </h2>
            <div className="sr-process-steps">
              <article>
                <span>01 / Get specific</span>
                <h3>
                  Put it on
                  <br />
                  the table.
                </h3>
                <p>
                  Tell us where the business is, what needs to change and what
                  you can invest. We talk through the constraint and whether
                  CULT. is the right fit.
                </p>
              </article>
              <article>
                <span>02 / Make the call</span>
                <h3>
                  Agree the
                  <br />
                  next move.
                </h3>
                <p>
                  Audit, Build or Partner. Your proposal sets the outcome,
                  scope, measurement, timeline and investment before work
                  starts.
                </p>
              </article>
              <article>
                <span>03 / Put it to work</span>
                <h3>
                  Build. Launch.
                  <br />
                  Learn.
                </h3>
                <p>
                  Align access, assets and the baseline. Make the work, release
                  it, measure what changed and use the evidence to decide what
                  comes next.
                </p>
              </article>
            </div>
          </div>
          <div className="sv-capabilities sv-pad">
            <h3 className="sv-display">
              WHAT WE CAN
              <br />
              PUT TO WORK<span className="sv-pink">.</span>
            </h3>
            <p className="sv-cap-instruction">
              Open a category to see what we build—and which way to start:
              Audit, Build, or Partner.
            </p>
            {capabilities.map((c, i) => (
              <details
                className="sv-capability"
                name="service-capability"
                key={c.name}
              >
                <summary>
                  <span className="sv-label">0{i + 1}</span>
                  <span>{c.name}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M2 12h20" />
                    <path className="sv-plus" d="M12 2v20" />
                  </svg>
                </summary>
                <div className="sv-capability-detail">
                  <div>
                    <h4>{c.outcome}</h4>
                    <p>{c.copy}</p>
                    <p className="sv-cap-tags">{c.tags.join(' · ')}</p>
                  </div>
                  <div className="sr-package-fit">
                    <p className="sv-label">Ways to start</p>
                    {c.bestFit.map((offerIndex) => {
                      const offer = offers[offerIndex];
                      const hint =
                        offerIndex === 0
                          ? 'Constraint unclear.'
                          : offerIndex === 1
                            ? 'Defined project.'
                            : 'Ongoing system.';
                      return (
                        <div key={offer.slug} className="sr-fit-way">
                          <ServiceLink href={`/services/${offer.slug}/`}>
                            {offer.title}
                          </ServiceLink>
                          <p>
                            {hint}{' '}
                            <span className="sv-label">{offer.price}</span>
                          </p>
                        </div>
                      );
                    })}
                    <p className="sr-fit-note">
                      Scope follows the problem. We confirm the engagement
                      together.
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <div className="sv-named-packages sv-pad" id="named-packages">
            <h3 className="sv-display">
              THE PACKAGE
              <br />
              DIRECTORY<span className="sv-pink">.</span>
            </h3>
            <p className="sv-proof-line">
              Prices in CAD. Starting amounts only—scope sets the quote.
            </p>
            <p className="sv-cap-instruction">
              Choose a package to explore its capability and where to start.
            </p>
            <ul className="package-accordion">
              {(() => {
                const seen = new Set<string>();
                return capabilities.flatMap((c) =>
                  (c.packages ?? []).flatMap((pkg) => {
                    if (seen.has(pkg.name)) return [];
                    seen.add(pkg.name);
                    const offer = offers[c.bestFit[0]];
                    const via =
                      c.bestFit[0] === 0
                        ? 'Usually starts as an Audit'
                        : c.bestFit[0] === 1
                          ? 'Usually starts as a Build'
                          : 'Usually starts as Partner';
                    return [
                      <li key={pkg.name}>
                        <details
                          name="package-directory"
                          className="package-panel"
                        >
                          <summary>
                            <span className="package-index">
                              {String(seen.size).padStart(2, '0')}
                            </span>
                            <strong>{pkg.name}</strong>
                            <span className="package-price">{pkg.price}</span>
                            <span className="package-toggle" aria-hidden="true">
                              +
                            </span>
                          </summary>
                          <div className="package-panel-content">
                            <div>
                              <span className="package-caption">
                                Capability / {c.name}
                              </span>
                              <h4>{c.outcome}</h4>
                              <p>{c.copy}</p>
                              <p className="package-tags">
                                {c.tags.join(' / ')}
                              </p>
                            </div>
                            <div className="package-next">
                              <span className="package-caption">
                                Your starting point
                              </span>
                              <strong>{offer.title}</strong>
                              <p>
                                {via}. We confirm the scope and final quote
                                together.
                              </p>
                              <ServiceLink href={`/services/${offer.slug}/`}>
                                Explore {offer.name}
                              </ServiceLink>
                            </div>
                          </div>
                        </details>
                      </li>,
                    ];
                  }),
                );
              })()}
            </ul>
          </div>
        </section>
        <section
          className="service-contact sv-pad"
          data-scene="07"
          aria-labelledby="sv-start-heading"
        >
          <div className="service-contact-art">
            <PrintArt name="media" />
          </div>
          <ServiceLabel>Less guessing. A better next move.</ServiceLabel>
          <h2 id="sv-start-heading">
            What’s keeping
            <br />
            <em>you stuck?</em>
          </h2>
          <div className="sr-note">
            <p>
              The lead that never lands. The growth that stalled. The launch
              that has to count. Start there.
            </p>
            <ServiceLink href="/contact/">Let’s get into it</ServiceLink>
            <a className="sr-email" href="mailto:hello@cultmedia.house">
              hello@cultmedia.house
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
