/* Responsive WebP variants are pre-encoded for this static export; native srcSet selects them without a runtime image service. */
/* oxlint-disable next/no-img-element */
import { PortfolioMotion } from './portfolio-motion';
import Link from 'next/link';
import { studies, type Study } from '@/lib/studies';
import { Action, Arrow, Period } from './brand';

export function StudyImage({
  study,
  application = false,
  portrait = false,
  priority = false,
  sizes = '(max-width:768px) 100vw, 90vw',
}: {
  study: Study;
  application?: boolean;
  portrait?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const file = `/studies/${study.slug}${portrait ? '-portrait' : application ? '-application' : ''}`;
  const largeWidth = portrait ? 1122 : 1536;
  return (
    <img
      src={`${file}-${largeWidth}.webp`}
      srcSet={`${file}-480.webp 480w, ${file}-960.webp 960w, ${file}-${largeWidth}.webp ${largeWidth}w`}
      sizes={sizes}
      width={largeWidth}
      height={portrait ? 1402 : 1024}
      alt={
        portrait
          ? 'NOCT self-initiated fragrance portrait: black glass bottle against cropped skin and deep oxblood shadows.'
          : application
            ? `${study.name} self-initiated campaign application concept.`
            : study.artAlt
      }
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
export function StudyLabel({ study }: { study: Study }) {
  return (
    <p className="study-classification">
      Self-initiated <span aria-hidden="true">/</span> CULT. Study{' '}
      {study.number}
    </p>
  );
}
export function StudyPreview({
  study,
  featured = false,
  homepage = false,
}: {
  study: Study;
  featured?: boolean;
  homepage?: boolean;
}) {
  const Heading = homepage ? 'h3' : 'h2';
  return (
    <article
      className={`study-preview preview-${study.slug} ${featured ? 'study-featured' : ''}`}
    >
      <Link
        className="study-preview-link"
        href={`/work/${study.slug}/`}
        aria-label={`Explore ${study.name} — self-initiated CULT. Study ${study.number}`}
      >
        <div className="study-preview-media" data-portfolio-reveal="media">
          <StudyImage
            study={study}
            portrait={study.slug === 'noct'}
            sizes={
              featured
                ? '(max-width:768px) 100vw, 90vw'
                : '(max-width:768px) 100vw, 60vw'
            }
          />
        </div>
        <div className="study-preview-info">
          <div className="study-preview-register"><StudyLabel study={study} /><span>Explore study ↗</span></div>
          <div className="study-preview-title">
            <Heading>{study.name}</Heading>
            <Arrow />
          </div>
          <p className="study-industry">{study.industry}</p>
          <p className="study-sentence">{study.sentence}</p>
          <p className="study-disciplines">
            {study.disciplines.slice(0, 4).join(' / ')}
          </p>
        </div>
      </Link>
    </article>
  );
}
export function Portfolio({ homepage = false }: { homepage?: boolean }) {
  return (
    <section
      className={`portfolio ${homepage ? 'section portfolio-home' : 'portfolio-archive'}`}
      aria-label={homepage ? 'Selected CULT. Studies' : 'CULT. Studies archive'}
    >
      <PortfolioMotion />
      {homepage && (
        <div className="portfolio-intro">
          <p className="label">05 / Selected work</p>
          <h2>
            <Period text="Work built to move something." />
          </h2>
          <p>
            Self-initiated studies in strategy, creative, media, search and
            conversion. Built to show the thinking—not invent the results.
          </p>
        </div>
      )}
      <div className="study-index">
        {(homepage ? studies.slice(0, 3) : studies).map((study, i) => (
          <StudyPreview
            key={study.slug}
            study={study}
            featured={i === 0}
            homepage={homepage}
          />
        ))}
      </div>
      {homepage && (
        <div className="portfolio-all">
          <Action href="/work/" secondary>
            View all studies
          </Action>
        </div>
      )}
    </section>
  );
}
export function NextStudy({ study }: { study: Study }) {
  return (
    <section className="next-study section" aria-label="Next study">
      <Link href={`/work/${study.slug}/`} className="next-study-link">
        <div className="next-study-media" data-portfolio-reveal="media">
          <StudyImage study={study} />
        </div>
        <div className="next-study-type">
          <p className="label">10 / Next study</p>
          <StudyLabel study={study} />
          <span className="next-study-name">
            {study.name}
            <Arrow />
          </span>
          <p>{study.sentence}</p>
        </div>
      </Link>
    </section>
  );
}
