import Link from 'next/link';
import { engagements, proofLine, worlds } from '@/lib/content';
import { studies } from '@/lib/studies';
import { Arrow } from './brand';
import { ElasticGallery } from '@/components/ui/elastic-gallery';

const packages = engagements.map((e, i) => ({
  name: e.name,
  slug: ['attention-audit', 'growth-build', 'partner'][i],
  price: e.price.replace(/^FROM /, 'From '),
  job: e.lead,
  timing: ['10–14 days', 'Typically 4–10 weeks', 'Ongoing'][i],
  example: e.example,
}));

export function HomePackages() {
  return (
    <section
      id="engagements"
      className="home-directory home-packages-early"
      aria-labelledby="home-packages-title"
    >
      <header>
        <p className="label">How to hire CULT.</p>
        <h2 id="home-packages-title">
          Three ways to start<span className="accent">.</span>
        </h2>
        <p>
          Find the constraint. Build the fix. Keep the system moving.
          <br />
          <span className="directory-proof">
            Starting amounts in CAD. Scope sets the quote.
          </span>
        </p>
      </header>
      <div className="home-package-bars">
        {packages.map((p, i) => (
          <Link
            key={p.slug}
            href={`/services/${p.slug}/`}
            className="home-package-bar"
          >
            <span className="directory-number">0{i + 1}</span>
            <h3>
              {p.name}
              <span className="accent">.</span>
            </h3>
            <span className="directory-job">
              {p.job}
              <small className="directory-example">{p.example}</small>
            </span>
            <span className="directory-price">
              {p.price}
              <small>{p.timing}</small>
            </span>
            <Arrow />
          </Link>
        ))}
      </div>
      <Link href="/services/" className="directory-all">
        Full services menu <Arrow />
      </Link>
    </section>
  );
}

export function HomeWorlds() {
  return (
    <section
      className="home-worlds"
      aria-labelledby="home-worlds-title"
    >
      <header>
        <p className="label">Connected capabilities</p>
        <h2 id="home-worlds-title">
          The system behind the work<span className="accent">.</span>
        </h2>
        <p>
          Six disciplines. One commercial job.
          <br />
          <span className="directory-proof">Print studies of how CULT. thinks across the funnel.</span>
        </p>
      </header>
      <div className="home-world-strip">
        {worlds.map((w) => (
          <Link key={w.id} href="/services/" className="home-world-chip">
            <span className="directory-number">{w.number}</span>
            <strong>
              {w.name}
              <span className="accent">.</span>
            </strong>
            <span className="home-world-line">{w.headline.replace(/\.$/, '')}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}


const homeStudyItems = studies.map((study) => ({
  id: study.number,
  title: study.name,
  category: study.disciplines[0] ?? study.industry.split('/')[0]?.trim() ?? '',
  src: `/studies/${study.slug}-960.webp`,
  alt: study.artAlt,
  href: `/work/${study.slug}/`,
}));

export function HomeWork() {
  return (
    <section
      className="home-directory home-work-directory"
      aria-labelledby="home-work-title"
    >
      <header>
        <p className="label">Selected work</p>
        <h2 id="home-work-title">
          Ideas in action<span className="accent">.</span>
        </h2>
        <p>
          Self-initiated studies. Distinct brands. Different commercial problems.
          <br />
          <span className="directory-proof">{proofLine}</span>
        </p>
      </header>
      <ElasticGallery
        items={homeStudyItems}
        className="home-elastic"
        defaultActiveId={homeStudyItems[0]?.id}
      />
      <Link href="/work/" className="directory-all">
        View all studies <Arrow />
      </Link>
    </section>
  );
}
