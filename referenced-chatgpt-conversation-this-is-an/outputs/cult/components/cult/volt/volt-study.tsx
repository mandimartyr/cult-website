import Link from 'next/link';
import type { Study } from '@/lib/studies';
import { nextStudy, studyDisclosure, resultsDisclosure } from '@/lib/studies';
import { StudyImage, NextStudy } from '@/components/cult/portfolio';
import { VoltAds } from './ads';
import './volt.css';

export function VoltStudy({ study }: { study: Study }) {
  const ticker =
    'SILENT / 480V / 24·7 / KEEP THE SET ALIVE / SILENT / 480V / 24·7 / KEEP THE SET ALIVE / ';
  return (
    <main id="main" className="vo-page">
      <header className="vo-hero">
        <div className="vo-hero-art">
          <StudyImage study={study} priority sizes="100vw" />
        </div>
        <div className="vo-hero-register vo-mono">
          <span>CULT. STUDY / {study.number}</span>
          <span>{study.industry}</span>
        </div>
        <div>
          <h1>
            VØLT<span>.</span>
          </h1>
          <p className="vo-hero-line">
            <span>{study.adLine}</span>
          </p>
        </div>
        <div className="vo-hero-bottom">
          <p>{study.sentence}</p>
          <a href="#volt-ads">
            Explore the campaign <span>↘</span>
          </a>
        </div>
      </header>

      <div className="vo-ticker" aria-hidden="true">
        <div>
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <section className="vo-intro vo-pad">
        <div>
          <p className="vo-mono">01 / THE PROJECT</p>
          <h2>
            POWER THAT
            <br />
            <em>STAYS ON.</em>
          </h2>
        </div>
        <div>
          <p className="vo-lead">{study.premise}</p>
          <p>{studyDisclosure}</p>
          <dl className="vo-facts">
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

      <section className="vo-pad">
        <div className="vo-split">
          <div>
            <p className="vo-mono">02 / THE BRIEF</p>
            <h2>
              THE COMMERCIAL
              <br />
              <em>PROBLEM.</em>
            </h2>
            <p style={{ marginTop: 24 }}>{study.problem}</p>
          </div>
          <div>
            <p className="vo-mono">03 / THE POSITION</p>
            <h2>{study.position}</h2>
            <p style={{ marginTop: 24 }}>{study.decision}</p>
          </div>
        </div>
      </section>

      <section className="vo-pad">
        <p className="vo-mono">04 / THE SYSTEM</p>
        <h2>
          WHAT CULT.
          <br />
          <em>WOULD BUILD.</em>
        </h2>
        <div className="vo-system-grid">
          {study.system.map((item, i) => (
            <article key={item.name}>
              <span className="vo-mono">0{i + 1}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="volt-campaign" className="vo-campaign">
        <div className="vo-campaign-image">
          <StudyImage study={study} application sizes="100vw" />
        </div>
        <div className="vo-campaign-type">
          <p className="vo-mono">05 / THE CAMPAIGN</p>
          <h2>
            KEEP THE SET
            <br />
            <em>ALIVE.</em>
          </h2>
          <p>{study.campaignIdea}</p>
          <p className="vo-mono">APPLICATION CONCEPT — NOT AN EXECUTED CAMPAIGN</p>
        </div>
      </section>

      <VoltAds study={study} />

      <section className="vo-pad">
        <div className="vo-split">
          <div>
            <p className="vo-mono">06 / THE EXPERIENCE</p>
            <h2>{study.experience.title}</h2>
            <p style={{ marginTop: 20 }}>{study.experience.copy}</p>
          </div>
          <ol className="vo-steps">
            {study.experience.steps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vo-pad">
        <p className="vo-mono">07 / THE MEDIA PLAN</p>
        <h2>
          EVERY CHANNEL
          <br />
          <em>HAS A JOB.</em>
        </h2>
        <p className="vo-note">
          Proposed channel roles. No campaign has run; no media budget or
          performance is claimed.
        </p>
        <dl className="vo-channels">
          {study.channels.map((channel) => (
            <div key={channel.name}>
              <dt>{channel.name}</dt>
              <dd>{channel.job}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="vo-pad">
        <p className="vo-mono">08 / MEASUREMENT</p>
        <h2>
          SUCCESS
          <br />
          <em>CRITERIA.</em>
        </h2>
        <p className="vo-note">{resultsDisclosure}</p>
        <dl className="vo-criteria">
          {study.criteria.map((item) => (
            <div key={item.name}>
              <dt>{item.name}</dt>
              <dd>{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="vo-outreach vo-pad">
        <div className="vo-mail">
          <div className="vo-mono">SET LETTER / EMAIL ART DIRECTION</div>
          <h3>{study.emailSubject}</h3>
          <p>{study.emailBody}</p>
          <span className="vo-mono">CONCEPT ONLY — NOT A LIVE SEND</span>
        </div>
        <div>
          <p className="vo-mono">09 / NEXT MOVE</p>
          <h2>
            SCOPE THE LOAD.
            <br />
            <em>THEN THE QUOTE.</em>
          </h2>
          <p style={{ marginTop: 20 }}>{study.sentence}</p>
          <Link className="vo-link" href="/contact/?engagement=Build">
            Discuss a project like VØLT ↗
          </Link>
        </div>
      </section>

      <div className="vo-end vo-mono">
        <span>END OF STUDY / {study.number}</span>
        <Link href="/work/#case-studies">BACK TO ALL WORK ↑</Link>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
