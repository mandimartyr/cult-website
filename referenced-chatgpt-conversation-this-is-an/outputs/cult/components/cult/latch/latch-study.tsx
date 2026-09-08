import Link from 'next/link';
import type { Study } from '@/lib/studies';
import { nextStudy, studyDisclosure, resultsDisclosure } from '@/lib/studies';
import { StudyImage, NextStudy } from '@/components/cult/portfolio';
import { LatchAds } from './ads';
import './latch.css';

export function LatchStudy({ study }: { study: Study }) {
  const ticker =
    'APPROVE / REJECT / ESCALATE / WHO GETS IN / APPROVE / REJECT / ESCALATE / WHO GETS IN / ';
  return (
    <main id="main" className="la-page">
      <header className="la-hero">
        <div className="la-hero-art">
          <StudyImage study={study} priority sizes="100vw" />
        </div>
        <div className="la-hero-register la-mono">
          <span>CULT. STUDY / {study.number}</span>
          <span>{study.industry}</span>
        </div>
        <div>
          <h1>
            LATCH<span>.</span>
          </h1>
          <p className="la-hero-line">
            <span>{study.adLine}</span>
          </p>
        </div>
        <div className="la-hero-bottom">
          <p>{study.sentence}</p>
          <a href="#latch-ads">
            Explore the campaign <span>↘</span>
          </a>
        </div>
      </header>

      <div className="la-ticker" aria-hidden="true">
        <div>
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <section className="la-intro la-pad">
        <div>
          <p className="la-mono">01 / THE PROJECT</p>
          <h2>
            THE DOOR
            <br />
            <em>IS THE BRAND.</em>
          </h2>
        </div>
        <div>
          <p className="la-lead">{study.premise}</p>
          <p>{studyDisclosure}</p>
          <dl className="la-facts">
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

      <section className="la-pad">
        <div className="la-split">
          <div>
            <p className="la-mono">02 / THE BRIEF</p>
            <h2>
              THE COMMERCIAL
              <br />
              <em>PROBLEM.</em>
            </h2>
            <p style={{ marginTop: 24 }}>{study.problem}</p>
          </div>
          <div>
            <p className="la-mono">03 / THE POSITION</p>
            <h2>{study.position}</h2>
            <p style={{ marginTop: 24 }}>{study.decision}</p>
          </div>
        </div>
      </section>

      <section className="la-pad">
        <p className="la-mono">04 / THE SYSTEM</p>
        <h2>
          WHAT CULT.
          <br />
          <em>WOULD BUILD.</em>
        </h2>
        <div className="la-system-grid">
          {study.system.map((item, i) => (
            <article key={item.name}>
              <span className="la-mono">0{i + 1}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="latch-campaign" className="la-campaign">
        <div className="la-campaign-image">
          <StudyImage study={study} application sizes="100vw" />
        </div>
        <div className="la-campaign-type">
          <p className="la-mono">05 / THE CAMPAIGN</p>
          <h2>
            WHO GETS
            <br />
            <em>IN.</em>
          </h2>
          <p>{study.campaignIdea}</p>
          <p className="la-mono">OOH / PRINT CONCEPT — NOT AN EXECUTED CAMPAIGN</p>
        </div>
      </section>

      <LatchAds study={study} />

      <section className="la-pad">
        <div className="la-split">
          <div>
            <p className="la-mono">06 / THE EXPERIENCE</p>
            <h2>{study.experience.title}</h2>
            <p style={{ marginTop: 20 }}>{study.experience.copy}</p>
          </div>
          <ol className="la-steps">
            {study.experience.steps.map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="la-pad">
        <p className="la-mono">07 / THE MEDIA PLAN</p>
        <h2>
          EVERY CHANNEL
          <br />
          <em>HAS A JOB.</em>
        </h2>
        <p className="la-note">
          Proposed channel roles. No campaign has run; no media budget or
          performance is claimed.
        </p>
        <dl className="la-channels">
          {study.channels.map((channel) => (
            <div key={channel.name}>
              <dt>{channel.name}</dt>
              <dd>{channel.job}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="la-pad">
        <p className="la-mono">08 / MEASUREMENT</p>
        <h2>
          SUCCESS
          <br />
          <em>CRITERIA.</em>
        </h2>
        <p className="la-note">{resultsDisclosure}</p>
        <dl className="la-criteria">
          {study.criteria.map((item) => (
            <div key={item.name}>
              <dt>{item.name}</dt>
              <dd>{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="la-outreach la-pad">
        <div className="la-mail">
          <div className="la-mono">DOOR LETTER / EMAIL ART DIRECTION</div>
          <h3>{study.emailSubject}</h3>
          <p>{study.emailBody}</p>
          <span className="la-mono">CONCEPT ONLY — NOT A LIVE SEND</span>
        </div>
        <div>
          <p className="la-mono">09 / NEXT MOVE</p>
          <h2>
            SCOPE THE DOORS.
            <br />
            <em>THEN THE INSTALL.</em>
          </h2>
          <p style={{ marginTop: 20 }}>{study.sentence}</p>
          <Link className="la-link" href="/contact/?engagement=Build">
            Discuss a project like LATCH ↗
          </Link>
        </div>
      </section>

      <div className="la-end la-mono">
        <span>END OF STUDY / {study.number}</span>
        <Link href="/work/#case-studies">BACK TO ALL WORK ↑</Link>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
