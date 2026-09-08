'use client';
import { useEffect, useRef, useState } from 'react';
import { causeExamples, hiring, rhythm } from './data';
import { ServiceImage, ServiceLink } from './primitives';

export function SystemConsequences() {
  const [active, setActive] = useState(0);
  const current = causeExamples[active];
  return (
    <div className="sv-system-interaction">
      <fieldset
        className="sv-selectors"

        aria-label="Explore a commercial dependency"
      >
        {causeExamples.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={active === i}
            aria-controls="sv-consequence"
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </fieldset>
      <div
        className={`sv-consequence sv-consequence-${active}`}
        id="sv-consequence"
        aria-live="polite"
        aria-atomic="true"
      >
        <div key={active} className="sv-consequence-content">
          <p>{current.cause}</p>
          <span className="sv-cause-label">CAUSES</span>
          <p>{current.effect}</p>
          <span className="sv-cause-label">CONSEQUENCE</span>
          <strong>{current.consequence}</strong>
          <span className="sr-only">{current.meaning}</span>
        </div>
      </div>
      <p className="sv-label">
        ILLUSTRATIVE RELATIONSHIPS / THE CHANNEL IS RARELY THE WHOLE PROBLEM.
      </p>
    </div>
  );
}

export function Diagnostic() {
  const [resolved, setResolved] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => setResolved(true), reduced.matches ? 0 : 1200);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      ref={host}
      className={`sv-diagnostic ${resolved ? 'is-resolved' : ''}`}
    >
      <div className="sv-diagnostic-top">
        <p className="sv-label">ILLUSTRATIVE DIAGNOSIS / NOT A LIVE RESULT</p>
        <button
          className="sv-text-button"
          onClick={() => setResolved((v) => !v)}
        >
          {resolved ? 'Inspect signals' : 'Isolate the constraint'}
        </button>
      </div>
      <div className="sv-signals" aria-hidden={resolved}>
        {[
          'TRAFFIC ↑',
          'LEADS ↔',
          'CPC ↑',
          'CONVERSION ↓',
          'EMAIL REVENUE ↓',
          'BRAND SEARCH ↔',
        ].map((s, i) => (
          <span key={s} style={{ transitionDelay: `${i * 30}ms` }}>
            {s}
          </span>
        ))}
      </div>
      <div className="sv-diagnosis" aria-hidden={!resolved}>
        <p>
          LANDING PAGE
          <br />
          CONVERSION
          <br />
          <strong>IS THE CONSTRAINT.</strong>
        </p>
      </div>
      <output className="sr-only">
        {resolved
          ? 'Illustrative finding: landing page conversion is the constraint.'
          : 'Six illustrative signals are available for inspection.'}
      </output>
    </div>
  );
}

const outputNames = ['WEB', 'SEARCH', 'MEDIA', 'EMAIL', 'MEASUREMENT'];
export function BuildOutputs() {
  const [active, setActive] = useState(2);
  return (
    <div className="sv-outputs">
      <div id="sv-output" className={`sv-output sv-output-${active}`}>
        <div className="sv-output-view" key={active}>
          {active === 0 && (
            <div className="sv-web-proof">
              <div className="sv-proof-intro">
                <p className="sv-label">VIAL. / WEBSITE + CONVERSION CONCEPT</p>
                <h3>
                  WINDOW OPEN.
                  <br />
                  BATCH DROP.
                </h3>
                <p>Worn like a mark.</p>
                <ServiceLink href="/work/vial/">
                  Explore the VIAL. study
                </ServiceLink>
              </div>
              <ServiceImage
                name="vial"
                alt="VIAL. forensic collage: glove holding a vial, peephole eye, brutalist type"
                sizes="(max-width:768px) 100vw, 60vw"
              />
              <div className="sv-route-fields">
                <span>
                  BATCH
                  <br />
                  <b>004A LIVE</b>
                </span>
                <span>
                  WINDOW
                  <br />
                  <b>CLAIM BEFORE CLOSE</b>
                </span>
                <span>
                  THE COMMERCIAL JOB
                  <br />
                  <b>TURN THE DROP INTO A CLAIM.</b>
                </span>
              </div>
            </div>
          )}
          {active === 1 && (
            <div className="sv-search-proof">
              <p className="sv-label">FIELD. / PROPOSED SEARCH ARCHITECTURE</p>
              <h3>
                BE FOUND.
                <br />
                BE BOOKED.
              </h3>
              <div className="sv-search-tree">
                <p>
                  THE STAY<span>Direct booking destination</span>
                </p>
                <p>
                  THE PLACE<span>Location and local intent</span>
                </p>
                <p>
                  THE EXPERIENCE<span>Questions that precede a booking</span>
                </p>
              </div>
              <ServiceLink href="/work/field/">
                Explore the FIELD study
              </ServiceLink>
            </div>
          )}
          {active === 2 && (
            <div className="sv-media-proof">
              <ServiceImage
                name="services/hardline-panorama"
                alt="HARDLINE Failure Is Expensive campaign on an industrial billboard"
              />
              <ServiceLink href="/work/hardline/">
                HARDLINE. / Campaign + media
              </ServiceLink>
            </div>
          )}
          {active === 3 && (
            <div className="sv-email-proof">
              <ServiceImage
                name="noct/object"
                alt="NOCT fragrance packaging"
                sizes="(max-width:768px) 100vw, 45vw"
              />
              <div>
                <p className="sv-label">NOCT. / LIFECYCLE ARCHITECTURE</p>
                <h3>
                  KEEP THE
                  <br />
                  RELATIONSHIP.
                </h3>
                <ol>
                  <li>
                    <span>01 / WELCOME</span>Introduce the world.
                  </li>
                  <li>
                    <span>02 / CONSIDERATION</span>Make the choice clearer.
                  </li>
                  <li>
                    <span>03 / AFTER PURCHASE</span>Give the next message a
                    reason.
                  </li>
                </ol>
                <ServiceLink href="/work/noct/">Explore NOCT.</ServiceLink>
              </div>
            </div>
          )}
          {active === 4 && (
            <div className="sv-measure-proof">
              <p className="sv-label">SIGNAL. / MEASUREMENT ARCHITECTURE</p>
              <h3>
                THE EVENT.
                <br />
                THE EVIDENCE.
                <br />
                THE DECISION.
              </h3>
              <dl>
                <div>
                  <dt>EVENT</dt>
                  <dd>Demonstration enquiry</dd>
                </div>
                <div>
                  <dt>QUALITY</dt>
                  <dd>Sales-qualified opportunity</dd>
                </div>
                <div>
                  <dt>OUTCOME</dt>
                  <dd>Pipeline contribution</dd>
                </div>
              </dl>
              <ServiceLink href="/work/signal/">
                Explore the SIGNAL study
              </ServiceLink>
            </div>
          )}
        </div>
      </div>
      <output className="sv-proof-caption">
        {outputNames[active]} / SELF-INITIATED CULT. STUDY. FICTIONAL BUSINESS.
        DEMONSTRATION WORK, NOT CLIENT RESULTS.
      </output>
      <div className="sv-output-controls">
        <p className="sv-label">BUILT AROUND THE CONSTRAINT</p>
        <fieldset
          className="sv-selectors"

          aria-label="Explore Build outputs"
        >
          {outputNames.map((name, i) => (
            <button
              key={name}
              aria-pressed={i === active}
              aria-controls="sv-output"
              onClick={() => setActive(i)}
            >
              {name}
            </button>
          ))}
        </fieldset>
      </div>
    </div>
  );
}

export function OperatingRhythm() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!playing) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => setPlaying(false);
    if (reduced.matches) {
      const id = setTimeout(stop, 0);
      return () => clearTimeout(id);
    }
    const timer = setTimeout(() => {
      if (active === rhythm.length - 1) setPlaying(false);
      else setActive(active + 1);
    }, 950);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) stop();
    });
    if (host.current) observer.observe(host.current);
    const visibility = () => {
      if (document.hidden) stop();
    };
    document.addEventListener('visibilitychange', visibility);
    reduced.addEventListener('change', stop);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      reduced.removeEventListener('change', stop);
    };
  }, [playing, active]);
  return (
    <div className="sv-rhythm" ref={host}>
      <div className="sv-rhythm-head">
        <p className="sv-label">AN ILLUSTRATIVE OPERATING RHYTHM</p>
        <button
          className="sv-text-button"
          onClick={() => {
            if (!playing) setActive(0);
            setPlaying((v) => !v);
          }}
        >
          {playing ? 'Pause rhythm' : 'Play rhythm'}
        </button>
      </div>
      <ol>
        {rhythm.map(([day, name, question], i) => (
          <li key={name} className={active === i ? 'is-active' : ''}>
            <button
              aria-pressed={active === i}
              aria-controls="sv-rhythm-detail"
              onClick={() => {
                setPlaying(false);
                setActive(i);
              }}
            >
              <span className="sv-label">{day || `0${i + 1}`}</span>
              <strong>{name}</strong>
              {question && <span>{question}</span>}
            </button>
          </li>
        ))}
      </ol>
      <p
        id="sv-rhythm-detail"
        className="sv-rhythm-detail"
        aria-live={playing ? 'off' : 'polite'}
      >
        {rhythm[active][3]}
      </p>
    </div>
  );
}

export function HiringSequence() {
  const [active, setActive] = useState(0);
  const [word, setWord] = useState(0);
  const verbs = ['BUILD.', 'LAUNCH.', 'MEASURE.', 'LEARN.', 'IMPROVE.'];
  return (
    <div className="sv-hiring">
      <fieldset
        className="sv-hiring-sequence"

        aria-label="How hiring works"
      >
        {hiring.map(([name], i) => (
          <button
            key={name}
            aria-pressed={active === i}
            aria-controls="sv-hiring-detail"
            onClick={() => setActive(i)}
          >
            <span className="sv-label">0{i + 1}</span>
            {name}
            <span aria-hidden="true">→</span>
          </button>
        ))}
      </fieldset>
      <div
        className="sv-hiring-detail"
        id="sv-hiring-detail"
        aria-live="polite"
      >
        <p className="sv-label">{hiring[active][0]}</p>
        <p>{hiring[active][1]}</p>
      </div>
      <div className="sv-execution">
        <p key={word} className="sv-execution-word" aria-live="polite">
          {verbs[word]}
        </p>
        <fieldset aria-label="Execution rhythm">
          {verbs.map((v, i) => (
            <button
              key={v}
              aria-pressed={i === word}
              onClick={() => setWord(i)}
            >
              {v}
            </button>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
