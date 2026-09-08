'use client';
import {
  useRef,
  useState,
  type CSSProperties,
  type SubmitEvent,
} from 'react';
import { Arrow } from '@/components/cult/brand';
import { fragments, priorities, marketMetrics, responseSteps } from './data';
export function Noise({
  count = 160,
  className = '',
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`si-noise ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={
            {
              '--n': i,
              '--x': `${(i * 47) % 97}%`,
              '--y': `${(i * 31) % 94}%`,
              '--delay': `${(i % 8) * 70}ms`,
            } as CSSProperties
          }
        >
          {fragments[i % fragments.length]}
        </span>
      ))}
    </div>
  );
}
export function Filter() {
  const [filtered, setFiltered] = useState(false);
  return (
    <section
      className={`si-filter si-pad ${filtered ? 'is-filtered' : ''}`}
      data-scene="02"
      id="si-filter"
    >
      <div className="si-rail">
        <p className="si-mono">02 / FILTER</p>
        <span className="si-mono">72 CHANGES / ILLUSTRATIVE</span>
      </div>
      <h2 className="si-type">
        MOST CHANGES
        <br />
        DON’T MATTER.
      </h2>
      <div className="si-filter-control">
        <button
          className="si-button"
          onClick={() => setFiltered((v) => !v)}
          aria-pressed={filtered}
        >
          {filtered ? 'Restore noise' : 'Prioritize'}
          <Arrow />
        </button>
        <output className="si-mono">
          {filtered
            ? '69 SET ASIDE / 03 WORTH A CLOSER LOOK'
            : 'ALL CHANGES / UNFILTERED'}
        </output>
      </div>
      <div className="si-filter-stage">
        <div className="si-change-wall" aria-hidden={filtered}>
          {Array.from({ length: 72 }, (_, i) => (
            <span
              key={i}
              style={{ '--delay': `${(i % 12) * 35}ms` } as CSSProperties}
            >
              <small>{String(i + 1).padStart(2, '0')}</small>
              {fragments[i % fragments.length]}
            </span>
          ))}
        </div>
        <div className="si-priorities" aria-hidden={!filtered}>
          <p className="si-mono">THREE CHANGES WORTH UNDERSTANDING</p>
          {priorities.map(([label, value], i) => (
            <div className="si-priority" key={label}>
              <span className="si-mono">0{i + 1}</span>
              <h3>{label}</h3>
              <strong>{value}</strong>
            </div>
          ))}
          <p className="si-these">THESE DO.</p>
        </div>
      </div>
      <noscript>
        Illustrative priorities: pipeline velocity −17%; category search demand
        +31%; enterprise account activity +240%.
      </noscript>
    </section>
  );
}
export function PrintBrief() {
  return (
    <button className="si-button si-print" onClick={() => window.print()}>
      Print brief
      <Arrow />
    </button>
  );
}
export function Response() {
  const [selected, setSelected] = useState(0);
  const descriptions = [
    'If more people are searching for something you sell, make sure they can find a page that answers their question.',
    'If people keep asking the same question before buying, create a useful answer they can read before speaking to you.',
    'If a company you want to work with starts showing interest, share an example that is relevant to its needs.',
    'If ads bring visitors who rarely buy, review who sees the ads before increasing the budget.',
    'If interested people stop replying, follow up with something useful that helps them take the next step.',
    'If a potential customer is ready to talk, give the sales team the context so the conversation starts in the right place.',
  ];
  return (
    <div className="si-response-system">
      <div
        className="si-response-steps"
        aria-label="Explore possible next steps"
      >
        {responseSteps.map(([name, copy], i) => (
          <button
            key={name}
            aria-pressed={selected === i}
            aria-controls="si-response-detail"
            onClick={() => setSelected(i)}
          >
            <span className="si-mono">0{i + 1}</span>
            <strong>{name}</strong>
            <span>{copy}</span>
            <Arrow />
          </button>
        ))}
      </div>
      <div
        className="si-response-detail"
        id="si-response-detail"
        aria-live="polite"
      >
        <p className="si-mono">
          {responseSteps[selected][0]} / POSSIBLE NEXT STEP
        </p>
        <p>{descriptions[selected]}</p>
      </div>
    </div>
  );
}
export function DemoBrief() {
  const [review, setReview] = useState<{
    email: string;
    company: string;
    decision: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  function submit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => {
      const entry = data.get(key);
      return typeof entry === 'string' ? entry.trim() : '';
    };
    const decisionInput = e.currentTarget.elements.namedItem(
      'decision',
    ) as HTMLTextAreaElement;
    if (value('decision').length < 10) {
      decisionInput.setCustomValidity(
        'Describe the decision in at least 10 characters.',
      );
      decisionInput.reportValidity();
      return;
    }
    setReview({
      email: value('email'),
      company: value('company'),
      decision: value('decision'),
    });
    requestAnimationFrame(() => heading.current?.focus());
  }
  return (
    <div className="si-demo">
      <div>
        <p className="si-mono">TRY THE CONCEPT / NOTHING IS SENT</p>
        <h3>
          WHAT WOULD YOU
          <br />
          <span>LIKE TO UNDERSTAND?</span>
        </h3>
      </div>
      <div>
        <form ref={formRef} onSubmit={submit} hidden={!!review}>
          <label>
            Work email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={180}
            />
          </label>
          <label>
            Company
            <input
              name="company"
              autoComplete="organization"
              required
              maxLength={120}
              pattern=".*\S.*"
            />
          </label>
          <label>
            What decision needs to improve?
            <textarea
              name="decision"
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              required
              rows={3}
              maxLength={800}
              minLength={10}
            />
          </label>
          <button className="si-button" type="submit">
            Preview your question
            <Arrow />
          </button>
          <p className="si-note">
            A local concept preview. Nothing is sent or saved.
          </p>
        </form>
        {review && (
          <div className="si-demo-review">
            <h4 tabIndex={-1} ref={heading}>
              Your question.
            </h4>
            <dl>
              <dt>Work email</dt>
              <dd>{review.email}</dd>
              <dt>Company</dt>
              <dd>{review.company}</dd>
              <dt>Decision to examine</dt>
              <dd>{review.decision}</dd>
            </dl>
            <p className="si-note">
              Preview ready. No demonstration has been booked. Nothing was sent
              or saved.
            </p>
            <button
              className="si-button"
              onClick={() => {
                setReview(null);
                requestAnimationFrame(() =>
                  formRef.current?.querySelector('input')?.focus(),
                );
              }}
            >
              Edit brief
              <Arrow />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export function FinalDecision() {
  const [stage, setStage] = useState(0);
  return (
    <section
      className={`si-final si-pad stage-${stage}`}
      data-scene="07"
      id="si-final"
    >
      <div className="si-rail">
        <p className="si-mono">07 / THE NEXT MOVE</p>
        <button className="si-button" onClick={() => setStage((v) => (v + 1) % 4)}>
          {stage === 3 ? 'Start again' : stage === 0 ? 'Find the important changes' : stage === 1 ? 'What does this mean?' : 'What should we do?'}
          <Arrow />
        </button>
      </div>
      <div className="si-final-stage">
        <div
          className="si-final-frame si-final-noise"
          aria-hidden={stage !== 0}
        >
          <Noise count={96} />
          <p>
            COMMERCIAL
            <br />
            CHANGES.
          </p>
        </div>
        <div
          className="si-final-frame si-final-metrics"
          aria-hidden={stage !== 1}
        >
          {marketMetrics.map(([label, value]) => (
            <p key={label}>
              <span className="si-mono">{label}</span>
              <strong>{value}</strong>
            </p>
          ))}
        </div>
        <div
          className="si-final-frame si-final-synthesis"
          aria-hidden={stage !== 2}
        >
          <p>
            MORE VISITORS.
            <br />
            FEWER SERIOUS BUYERS.
          </p>
        </div>
        <div
          className="si-final-frame si-final-action"
          aria-hidden={stage !== 3}
        >
          <span className="si-mono">NEXT ACTION</span>
          <h2>
            REACH THE
            <br />
            RIGHT PEOPLE.
            <br />
            THEN
            <br />
            SPEND MORE.
          </h2>
        </div>
      </div>
      <div className="si-final-brand">
        <p>
          SIGNAL<span>.</span>
        </p>
        <div className="si-mono">
          <span>KNOW WHAT MATTERS NEXT.</span>
          <span>CULT. STUDY 005 / SELF-INITIATED</span>
        </div>
      </div>
      <noscript>More site visits, fewer serious buyers, sales pipeline down 17%. Reach the right people before spending more.</noscript>
    </section>
  );
}
