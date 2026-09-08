import { SpliceStudy } from '@/components/cult/splice/splice-study';
import { SignalStudy } from '@/components/cult/signal/signal-study';
import { NoctStudy } from '@/components/cult/noct/noct-study';
import { HardlineStudy } from '@/components/cult/hardline/hardline-study';
import { LatchStudy } from '@/components/cult/latch/latch-study';
import { VoltStudy } from '@/components/cult/volt/volt-study';
import { VialStudy } from '@/components/cult/vial/vial-study';
import { PortfolioMotion } from '@/components/cult/portfolio-motion';
import { notFound } from 'next/navigation';
import {
  studies,
  getStudy,
  nextStudy,
  studyDisclosure,
  resultsDisclosure,
} from '@/lib/studies';
import { pageMetadata, BreadcrumbSchema } from '@/lib/seo';
import { site } from '@/lib/content';
import { Footer } from '@/components/cult/sections';
import { Action } from '@/components/cult/brand';
import { StudyImage, StudyLabel, NextStudy } from '@/components/cult/portfolio';
import { StudyDetails } from '@/components/cult/study-details';
import { StudyExperience } from '@/components/cult/study-experience';
export const dynamicParams = false;
export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const study = getStudy((await params).slug);
  if (!study) return {};
  return pageMetadata(
    `${study.name} — Self-initiated study`,
    `${study.sentence} A fictional ${study.industry.toLowerCase()} concept study by CULT. No performance results reported.`,
    `/work/${study.slug}/`,
  );
}
export default async function StudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const study = getStudy((await params).slug);
  if (!study) notFound();
  return (
    <>
      {study.slug === 'splice' ? (
        <SpliceStudy study={study} />
      ) : study.slug === 'hardline' ? (
        <HardlineStudy study={study} />
      ) : study.slug === 'noct' ? (
        <NoctStudy study={study} />
      ) : study.slug === 'signal' ? (
        <SignalStudy study={study} />
      ) : study.slug === 'latch' ? (
        <LatchStudy study={study} />
      ) : study.slug === 'volt' ? (
        <VoltStudy study={study} />
      ) : study.slug === 'vial' ? (
        <VialStudy study={study} />
      ) : (
        <main id="main" className={`case-study case-${study.slug}`}>
          <PortfolioMotion />
          <header className="case-heading section">
            <StudyLabel study={study} />
            <h1>{study.name}</h1>
            <div className="case-heading-bottom">
              <p className="case-sentence">{study.sentence}</p>
              <div>
                <p>{study.industry}</p>
                <p className="case-disciplines">
                  {study.disciplines.join(' / ')}
                </p>
              </div>
            </div>
            <p className="case-disclosure">{studyDisclosure}</p>
          </header>
          <figure className="case-key-art">
            <StudyImage study={study} priority />
            <figcaption>Campaign key art / Self-initiated concept</figcaption>
          </figure>
          <section className="case-argument section">
            <div>
              <p className="label">02 / The brief</p>
              <h2>The commercial problem.</h2>
              <p>{study.premise}</p>
              <p>{study.problem}</p>
            </div>
            <div>
              <p className="label">03 / The position</p>
              <h2>{study.position}</h2>
              <p>{study.decision}</p>
            </div>
          </section>
          <section className="case-system section">
            <p className="label">04 / The system</p>
            <h2>What CULT. would build.</h2>
            <div className="system-list">
              {study.system.map((item, i) => (
                <article key={item.name}>
                  <span className="label">0{i + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="case-campaign section">
            <div className="case-section-heading">
              <p className="label">05 / The campaign</p>
              <h2>{study.campaign}</h2>
              <p>{study.campaignIdea}</p>
            </div>
            <figure
              className="campaign-application"
              data-portfolio-reveal="media"
            >
              <StudyImage study={study} application />
              <figcaption>
                {study.slug === 'signal'
                  ? 'Lead-magnet / print concept'
                  : study.slug === 'field'
                    ? 'Seasonal campaign / architectural image concept'
                    : study.slug === 'noct'
                      ? 'Launch print / product photography concept'
                      : 'OOH placement visualization — not an executed campaign'}
              </figcaption>
            </figure>
          </section>
          <section className="case-experience section">
            <div className="case-section-heading">
              <p className="label">06 / The experience</p>
              <h2>{study.experience.title}</h2>
              <p>{study.experience.copy}</p>
            </div>
            <StudyExperience study={study} />
            <StudyDetails study={study} />
            <ol className="conversion-path">
              {study.experience.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section className="case-plan section">
            <p className="label">07 / The media plan</p>
            <h2>Every channel has a job.</h2>
            <p className="planning-note">
              Proposed channel roles. No campaign has run; no media budget or
              performance is claimed.
            </p>
            <dl>
              {study.channels.map((channel) => (
                <div key={channel.name}>
                  <dt>{channel.name}</dt>
                  <dd>{channel.job}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="case-search section">
            <p className="label">08 / Search + content</p>
            <h2>Start with the question.</h2>
            <div className="search-intents">
              {study.search.map((item, i) => (
                <article key={item.intent}>
                  <span className="label">0{i + 1}</span>
                  <h3>{item.intent}</h3>
                  <p>{item.page}</p>
                </article>
              ))}
            </div>
            <p className="planning-note">
              Proposed intent architecture. Keywords, demand and competitive
              difficulty would be validated before launch; no rankings are
              claimed.
            </p>
          </section>
          <section className="case-measurement section">
            <p className="label">09 / Measurement</p>
            <h2>Success criteria.</h2>
            <p className="results-disclosure">{resultsDisclosure}</p>
            <dl>
              {study.criteria.map((item) => (
                <div key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{item.definition}</dd>
                </div>
              ))}
            </dl>
            <p className="planning-note">
              Before launch: agree event definitions, consent requirements,
              qualification rules and reporting ownership. Validate tracking end
              to end before using it to allocate investment.
            </p>
            <Action href="/contact/?engagement=Build" secondary>
              Discuss a brief like this
            </Action>
          </section>
          <NextStudy study={nextStudy(study.slug)} />
        </main>
      )}
      <Footer />
      <BreadcrumbSchema
        name={`${study.name} — Self-initiated study`}
        path={`/work/${study.slug}/`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: `${study.name} — Self-initiated CULT. Study ${study.number}`,
            description: studyDisclosure,
            url: `${site.url}/work/${study.slug}/`,
            creator: { '@id': `${site.url}/#organization` },
            genre: 'Self-initiated fictional commercial concept',
            image:
              study.slug === 'hardline'
                ? `${site.url}/studies/hardline/hero-1536.webp`
                : study.slug === 'noct'
                  ? `${site.url}/studies/noct/hero-1536.webp`
                  : study.slug === 'signal'
                    ? `${site.url}/studies/signal/ooh-1536.webp`
                    : `${site.url}/studies/${study.slug}-1536.webp`,
          }).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
