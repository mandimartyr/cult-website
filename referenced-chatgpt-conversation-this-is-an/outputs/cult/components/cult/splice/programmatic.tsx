import { SpliceLogo } from './logo';
import Link from 'next/link';
const formats = [
  {
    id: 'billboard',
    name: 'Billboard',
    width: 970,
    height: 250,
    headline: 'CUT UNTIL IT HURTS.',
    sub: 'THE LAST ROOM BEFORE THE WORLD.',
    cta: 'SCOPE THE CUT ↗',
  },
  {
    id: 'leaderboard',
    name: 'Leaderboard',
    width: 728,
    height: 90,
    headline: 'PROTECT THE PULSE.',
    sub: 'SOFT IS A DELIVERY FORMAT.',
    cta: 'SCOPE THE CUT ↗',
  },
  {
    id: 'rectangle',
    name: 'Medium rectangle',
    width: 300,
    height: 250,
    headline: 'WHAT GOT SOFTENED',
    sub: 'WHAT DID THE CLIENT MAKE YOU DULL LAST TIME?',
    cta: 'BRING THE BRIEF ↗',
  },
  {
    id: 'halfpage',
    name: 'Half page',
    width: 300,
    height: 600,
    headline: 'LAST ROOM BEFORE THE WORLD',
    sub: 'COLOUR. EDIT. FINISH. NERVE.',
    cta: 'SCOPE THE CUT ↗',
  },
  {
    id: 'skyscraper',
    name: 'Wide skyscraper',
    width: 160,
    height: 600,
    headline: 'PROTECT THE PULSE',
    sub: 'SOFT IS A DELIVERY FORMAT.',
    cta: 'SCOPE THE CUT ↗',
  },
  {
    id: 'mobile',
    name: 'Large mobile banner',
    width: 320,
    height: 100,
    headline: 'SCOPE THE CUT',
    sub: 'BRING THE ROUGH.',
    cta: 'START HERE ↗',
  },
];
export function SpliceProgrammatic() {
  return (
    <section id="splice-programmatic" className="sp-programmatic sp-pad">
      <div className="sp-section-heading">
        <div>
          <p className="sp-mono">05 / PROGRAMMATIC DISPLAY</p>
          <h2>
            SMALL SPACE.
            <br />
            <em>SHARP IMPACT.</em>
          </h2>
        </div>
        <p>
          Your campaign artwork, built into six display formats. Each placement
          has its own composition, legible headline and direct brief CTA.
        </p>
      </div>
      <div className="sp-display-index sp-mono">
        970 × 250 / 728 × 90 / 300 × 250 / 300 × 600 / 160 × 600 / 320 × 100
      </div>
      <div className="sp-display-grid">
        {formats.map((format) => (
          <figure
            className={`sp-placement sp-placement-${format.id}`}
            key={format.id}
          >
            <figcaption>
              <span>{format.name}</span>
              <span>
                {format.width} × {format.height}
              </span>
            </figcaption>
            <div className="sp-placement-stage">
              <div
                className={`sp-display sp-display-${format.id}`}
                style={{
                  maxWidth: format.width,
                  aspectRatio: `${format.width} / ${format.height}`,
                }}
              >
                <Link
                  href="/contact/?engagement=Build"
                  className="sp-display-link"
                  aria-label={`${format.name} ad: ${format.headline} — discuss a SPLICE-style project`}
                >
                  <span className="sp-display-brand">
                    <SpliceLogo compact />
                  </span>
                  <strong className="sp-display-headline">
                    {format.headline}
                  </strong>
                  <span className="sp-display-sub">{format.sub}</span>
                  <span className="sp-display-cta">{format.cta}</span>
                </Link>
              </div>
            </div>
          </figure>
        ))}
      </div>
      <p className="sp-mono sp-display-note">
        DISPLAY DESIGN CONCEPTS / PROPORTIONS PRESERVED / PREVIEWS SCALE TO FIT
        YOUR SCREEN
      </p>
    </section>
  );
}
