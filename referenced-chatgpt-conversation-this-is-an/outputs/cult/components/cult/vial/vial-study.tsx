import Link from 'next/link';
import type { Study } from '@/lib/studies';
import { nextStudy, studyDisclosure, resultsDisclosure } from '@/lib/studies';
import { StudyImage, NextStudy } from '@/components/cult/portfolio';
import { VialAds } from './ads';
import './vial.css';

export function VialStudy({ study }: { study: Study }) {
  const ticker =
    'BATCH DROP / STAMP / CLAIM / WINDOW CLOSES / BATCH DROP / STAMP / CLAIM / WINDOW CLOSES / ';
  return (
    <main id="main" className="vi-page">
      <header className="vi-hero">
        <div className="vi-hero-art">
          <StudyImage study={study} priority sizes="100vw" />
        </div>
        <div className="vi-hero-register vi-mono">
          <span>CULT. STUDY / {study.number}</span>
          <span>{study.industry}</span>
        </div>
        <div>
          <h1>
            VIAL<span>.</span>
          </h1>
          <p className="vi-hero-line">
            <span>{study.adLine}</span>
          </p>
        </div>
        <div className="vi-hero-bottom">
          <p>{study.sentence}</p>
          <a href="#vial-ads">
            Explore the drop <span>↘</span>
          </a>
        </div>
      </header>

      <div className="vi-ticker" aria-hidden="true">
        <div>
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <section className="vi-intro vi-pad">
        <div>
          <p className="vi-mono">01 / THE PROJECT</p>
          <h2>
            WORN LIKE
            <br />
            <em>A MARK.</em>
          </h2>
        </div>
        <div>
          <p className="vi-lead">{study.premise}</p>
          <p>{studyDisclosure}</p>
          <dl className="vi-facts">
            <div>
              <dt>SECTOR</dt>
              <dd>{study.industry}</dd>
            </div>
            <div>
              <dt>SCOPE</dt>
              <dd>{study.disciplines.join(' / ')}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>Self-initiated concept. No client results claimed.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="vi-pad">
        <div className="vi-split">
          <div>
            <p className="vi-mono">02 / THE BRIEF</p>
            <h2>
              THE COMMERCIAL
              <br />
              <em>PROBLEM.</em>
            </h2>
            <p style={{ marginTop: 24 }}>{study.problem}</p>
          </div>
          <div>
            <p className="vi-mono">03 / THE POSITION</p>
            <h2>{study.position}</h2>
            <p style={{ marginTop: 24 }}>{study.decision}</p>
          </div>
        </div>
      </section>

      <section className="vi-pad">
        <p className="vi-mono">04 / THE SYSTEM</p>
        <h2>
          WHAT CULT.
          <br />
          <em>WOULD BUILD.</em>
        </h2>
        <div className="vi-system-grid">
          {study.system.map((item, i) => (
            <article key={item.name}>
              <span className="vi-mono">0{i + 1}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vial-campaign" className="vi-campaign">
        <div className="vi-campaign-image">
          <StudyImage study={study} application sizes="100vw" />
        </div>
        <div className="vi-campaign-type">
          <p className="vi-mono">05 / THE CAMPAIGN</p>
          <h2>
            BATCH
            <br />
            <em>DROP.</em>
          </h2>
          <p>{study.campaignIdea}</p>
          <p className="vi-mono">DROP CREATIVE — NOT AN EXECUTED CAMPAIGN</p>
        </div>
      </section>

      <VialAds study={study} />

      <section className="vi-pad">
        <div className="vi-split">
          <div>
            <p className="vi-mono">06 / THE EXPERIENCE</p>
            <h2>{study.experience.title}</h2>
            <p style={{ marginTop: 20 }}>{study.experience.copy}</p>
          </div>
          <ol className="vi-steps">
            {study.experience.steps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vi-pad">
        <p className="vi-mono">07 / THE MEDIA PLAN</p>
        <h2>
          EVERY CHANNEL
          <br />
          <em>HAS A JOB.</em>
        </h2>
        <p className="vi-note">
          Proposed channel roles. No campaign has run; no media budget or
          performance is claimed.
        </p>
        <dl className="vi-channels">
          {study.channels.map((channel) => (
            <div key={channel.name}>
              <dt>{channel.name}</dt>
              <dd>{channel.job}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="vi-pad">
        <p className="vi-mono">08 / MEASUREMENT</p>
        <h2>
          SUCCESS
          <br />
          <em>CRITERIA.</em>
        </h2>
        <p className="vi-note">{resultsDisclosure}</p>
        <dl className="vi-criteria">
          {study.criteria.map((item) => (
            <div key={item.name}>
              <dt>{item.name}</dt>
              <dd>{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="vi-outreach vi-pad">
        <div className="vi-mail">
          <div className="vi-mono">CUSTODY LETTER / EMAIL ART DIRECTION</div>
          <h3>{study.emailSubject}</h3>
          <p>{study.emailBody}</p>
          <span className="vi-mono">CONCEPT ONLY — NOT A LIVE SEND</span>
        </div>
        <div>
          <p className="vi-mono">09 / NEXT MOVE</p>
          <h2>
            OPEN THE WINDOW.
            <br />
            <em>THEN CLAIM.</em>
          </h2>
          <p style={{ marginTop: 20 }}>{study.sentence}</p>
          <Link className="vi-link" href="/contact/?engagement=Build">
            Discuss a project like VIAL ↗
          </Link>
        </div>
      </section>

      <div className="vi-end vi-mono">
        <span>END OF STUDY / {study.number}</span>
        <Link href="/work/#case-studies">BACK TO ALL WORK ↑</Link>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
