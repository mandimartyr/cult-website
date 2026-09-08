import type { Study } from '@/lib/studies';
import { StudyImage } from './portfolio';

const fieldNames: Record<string, string[]> = {
  hardline: ['Origin', 'Destination', 'Ready date', 'Load requirements'],
  noct: ['Discover the notes', 'Choose your format', 'Delivery & returns'],
  aer: ['From', 'To', 'Travel dates', 'Travellers'],
  signal: ['Work email', 'Company', 'What decision needs to improve?'],
  splice: ['Project type', 'Delivery date', 'Rough cut / references', 'Commercial stake'],
  latch: ['Venue / set type', 'Door count', 'Credential model', 'Go-live date'],
};
export function StudyExperience({ study }: { study: Study }) {
  return (
    <div className={`study-artwork brand-${study.slug}`}>
      <div className="experience-board">
        <figure className="desktop-experience">
          <div className="experience-surface">
            <div className="fictional-nav">
              <span className="fictional-wordmark">
                {study.name.replace('.', '')}
              </span>
              <span>
                {study.slug === 'noct'
                  ? 'Fragrances / The house'
                  : study.slug === 'aer'
                    ? 'Routes / Travel'
                    : study.slug === 'field'
                      ? 'The stays / The place'
                      : study.slug === 'signal'
                        ? 'Product / Intelligence'
                        : 'Critical freight / Routing'}
              </span>
            </div>
            <div className="fictional-hero">
              <div className="fictional-heading">
                <span className="fictional-kicker">
                  {study.slug === 'signal'
                    ? 'Intelligence, prioritized.'
                    : study.slug === 'noct'
                      ? 'AFTERMATH / EAU DE PARFUM'
                      : study.slug === 'field'
                        ? 'Distance, by design.'
                        : study.slug === 'aer'
                          ? 'A different way to connect.'
                          : 'HIGH-CONSEQUENCE FREIGHT'}
                </span>
                <h3>{study.experienceHeadline}</h3>
              </div>
              <StudyImage study={study} sizes="(max-width:768px) 100vw, 65vw" />
            </div>
            <div className="fictional-conversion">
              <p className="fictional-subhead">
                {study.slug === 'noct'
                  ? 'Mineral. Smoke. Skin.'
                  : study.slug === 'aer'
                    ? 'Find your connection.'
                    : study.slug === 'field'
                      ? 'A place to be elsewhere.'
                      : study.slug === 'signal'
                        ? 'From a change in the data to a decision.'
                        : 'Tell us what cannot wait.'}
              </p>
              <div className="mock-fields">
                {(fieldNames[study.slug] ?? ['Project type','Delivery date','References','Stake']).map((field) => (
                  <div className="mock-field" key={field}>
                    <span>{field}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
              <span className="mock-action">
                {study.experienceCTA} <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
          <figcaption>
            Website / landing-page concept — visual prototype
          </figcaption>
        </figure>
        <figure className="mobile-experience">
          <div className="mobile-surface">
            <p className="fictional-wordmark">{study.name.replace('.', '')}</p>
            <p className="mobile-step">
              {study.slug === 'noct'
                ? '01 / DISCOVER'
                : study.slug === 'aer'
                  ? '01 / YOUR JOURNEY'
                  : study.slug === 'field'
                    ? '01 / YOUR STAY'
                    : study.slug === 'signal'
                      ? '01 / YOUR PRIORITY'
                      : '01 / YOUR SHIPMENT'}
            </p>
            <h4>{study.experienceCTA}.</h4>
            <div className="mock-fields">
              {(fieldNames[study.slug] ?? ['Project type','Delivery date','References','Stake']).map((field) => (
                <div className="mock-field" key={field}>
                  {field}
                </div>
              ))}
            </div>
            <span className="mock-action">
              Continue <span aria-hidden="true">→</span>
            </span>
            <p className="mobile-assurance">
              {study.slug === 'noct'
                ? 'Notes, format and delivery details before you decide.'
                : study.slug === 'field'
                  ? 'Stay details and cancellation terms before booking.'
                  : study.slug === 'aer'
                    ? 'Review the route and fare conditions before booking.'
                    : 'The details first. A useful conversation next.'}
            </p>
          </div>
          <figcaption>Mobile conversion concept</figcaption>
        </figure>
      </div>
      <div className="experience-creative">
        <figure className="study-social">
          <div className="social-art">
            <p className="fictional-wordmark">{study.name.replace('.', '')}</p>
            <p className="social-copy">{study.adLine}</p>
            <StudyImage study={study} sizes="(max-width:768px) 100vw, 50vw" />
            <div className="social-cta">
              <span>{study.adCTA}</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
          <figcaption>
            {study.slug === 'noct' || study.slug === 'field'
              ? 'Paid-social / retargeting creative concept'
              : study.slug === 'aer'
                ? 'Route-promotion / display creative concept'
                : 'LinkedIn / display creative concept'}
          </figcaption>
        </figure>
        <figure className="study-email">
          <div className="email-art">
            <p className="email-label">
              {study.slug === 'noct'
                ? 'THE LAUNCH LETTER'
                : study.slug === 'field'
                  ? 'RETURN TO YOUR STAY'
                  : study.slug === 'aer'
                    ? 'YOUR FARE ALERT'
                    : study.slug === 'signal'
                      ? 'THE PRIORITY LETTER'
                      : 'A ROUTING CONVERSATION'}
            </p>
            <p className="fictional-wordmark">{study.name.replace('.', '')}</p>
            <h4>{study.emailSubject}</h4>
            <p>{study.emailBody}</p>
            <span className="mock-action">
              {study.experienceCTA} <span aria-hidden="true">→</span>
            </span>
            <p className="email-footnote">
              {study.slug === 'hardline' || study.slug === 'signal'
                ? 'A useful next step. No generic sales sequence.'
                : 'Sent only to people who chose to hear from us.'}
            </p>
          </div>
          <figcaption>Email concept — proposed copy and layout</figcaption>
        </figure>
      </div>
    </div>
  );
}
