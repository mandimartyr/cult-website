import { PrintArt } from '@/components/cult/print-art';
import { Period } from '@/components/cult/brand';
import { Founder, FinalCTA, Footer } from '@/components/cult/sections';
import { pageMetadata, BreadcrumbSchema } from '@/lib/seo';
import { engagements } from '@/lib/content';
import Link from 'next/link';
import './about-refresh.css';
export const metadata = pageMetadata(
  'Brands worth joining',
  'CULT. builds brands people follow—loud, weird, and worth the devotion. Worldwide. For edgy operators who need new brands.',
  '/about/',
);
const principles = [
  'Attention that sticks.',
  'Weird beats polite.',
  'Devotion over awareness.',
  'The signal is the product.',
];
const pathWays = engagements.map((e, i) => ({
  ...e,
  slug: ['attention-audit', 'growth-build', 'partner'][i],
  title: ['The Attention Audit', 'The Growth Build', 'CULT. Partner'][i],
}));
export default function About() {
  return (
    <>
      <main id="main" className="inner-page about-page">
        <section className="section page-hero cult-hero">
          <div className="route-print-art">
            <PrintArt name="thinking" priority />
          </div>
          <h1 className="cult-poster-title">
            <span>Start a</span>
            <span>cult.</span>
          </h1>
        </section>
        <div className="about-intro-strip">
          <p>
            Built for brands that refuse to look like everyone else. Loud.
            Weird. Worth following.
          </p>
          <p className="who-its-for">
            For edgy operators launching or rebuilding brands that need a cult
            of attention—not another polite marketing deck.
          </p>
        </div>
        <section
          className="section about-path"
          aria-labelledby="about-path-title"
        >
          <p className="label">How to join · Everywhere</p>
          <h2 id="about-path-title">
            Audit<span className="accent">.</span> Build
            <span className="accent">.</span> Partner
            <span className="accent">.</span>
          </h2>
          <p className="about-path-lead">
            Three ways in. Prices in CAD. Pick the entry that fits—then we build
            the signal people actually join.
          </p>
          <ol className="about-path-ways">
            {pathWays.map((d) => (
              <li key={d.slug}>
                <Link href={`/services/${d.slug}/`}>
                  <span className="label">
                    {d.number} / {d.name}
                  </span>
                  <strong>{d.title}</strong>
                  <span className="about-path-price">
                    {d.price.replace(/^FROM /, 'From ')}
                  </span>
                  <span>{d.lead}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
        <section className="about-signal" aria-labelledby="about-signal-title">
          <div className="about-signal-art">
            <PrintArt name="creative" />
          </div>
          <div className="about-signal-copy">
            <p className="label">What we build.</p>
            <h2 id="about-signal-title">
              The signal
              <br />
              <em>people join</em>
              <span className="accent">.</span>
            </h2>
            <p>
              We do not ship another polite marketing deck. Strategy, creative,
              media, search, conversion and measurement lock onto one commercial
              goal—attention that sticks, brands worth the following.
            </p>
          </div>
        </section>
        <section className="about-principles" aria-label="Our principles">
          {principles.map((p, i) => (
            <div className="about-principle" key={p}>
              <span className="label">0{i + 1}</span>
              <h2>
                <Period text={p} />
              </h2>
            </div>
          ))}
        </section>
        <div className="about-agency">
          <div className="about-agency-art">
            <PrintArt name="search" />
          </div>
          <Founder about />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <BreadcrumbSchema name="About" path="/about/" />
    </>
  );
}
