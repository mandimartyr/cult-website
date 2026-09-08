'use client';
import { useRef, useState } from 'react';
import type { SubmitEvent, ChangeEvent } from 'react';

type RouteDraft = {
  origin: string;
  destination: string;
  date: string;
  load: string;
  consequence: string;
};
const blank: RouteDraft = {
  origin: '',
  destination: '',
  date: '',
  load: '',
  consequence: '',
};
export function RoutingPrototype() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<RouteDraft>(blank);
  const heading = useRef<HTMLHeadingElement>(null);
  const form = useRef<HTMLFormElement>(null);
  function change(next: number) {
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus());
  }
  function advance(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = [
      ...event.currentTarget.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >('input, textarea'),
    ];
    const empty = fields.find((input) => !input.value.trim());
    if (empty) {
      empty.setCustomValidity(
        'Enter a detail or use the illustrative example.',
      );
      empty.reportValidity();
      return;
    }
    change(step + 1);
  }
  function example() {
    form.current
      ?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input, textarea',
      )
      .forEach((input) => input.setCustomValidity(''));
    setDraft({
      origin: 'Origin facility',
      destination: 'Receiving facility',
      date: '2027-01-15',
      load: 'Time-sensitive industrial component',
      consequence:
        'The receiving line cannot restart until this component arrives.',
    });
  }
  const field = (key: keyof RouteDraft) => ({
    value: draft[key],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.setCustomValidity('');
      setDraft({ ...draft, [key]: e.target.value });
    },
  });
  return (
    <div className="hl-routing" id="routing-prototype">
      <div className="hl-routing-top">
        <p className="hl-mono">ROUTING ENQUIRY / INTERACTIVE PROTOTYPE</p>
        <span className="hl-mono">
          {step === 3 ? 'REVIEW' : `0${step + 1} / 03`}
        </span>
      </div>
      <ol className="hl-route-steps" aria-label="Routing enquiry progress">
        {['Route', 'Deadline + load', 'Consequence'].map((name, i) => (
          <li
            key={name}
            data-active={step >= i}
            aria-current={step === i ? 'step' : undefined}
          >
            <span>0{i + 1}</span>
            {name}
          </li>
        ))}
      </ol>
      <div className="hl-route-progress" aria-hidden="true">
        <i style={{ transform: `scaleX(${(step + 1) / 4})` }} />
      </div>
      <div className="hl-route-panel" key={step}>
        <h3 ref={heading} tabIndex={-1}>
          {
            [
              'Where it sits.\nWhere it must arrive.',
              'The deadline\nsets the requirement.',
              'What happens\nif it misses?',
              'Routing review.',
            ][step]
          }
        </h3>
        {step < 3 ? (
          <form ref={form} onSubmit={advance}>
            {step === 0 && (
              <div className="hl-form-fields">
                <label htmlFor="hl-origin">
                  Origin
                  <input
                    id="hl-origin"
                    autoComplete="off"
                    required
                    maxLength={100}
                    {...field('origin')}
                    placeholder="Origin facility"
                  />
                </label>
                <span className="hl-field-arrow" aria-hidden="true">
                  →
                </span>
                <label htmlFor="hl-destination">
                  Destination
                  <input
                    id="hl-destination"
                    autoComplete="off"
                    required
                    maxLength={100}
                    {...field('destination')}
                    placeholder="Receiving facility"
                  />
                </label>
              </div>
            )}
            {step === 1 && (
              <div className="hl-form-fields hl-two-fields">
                <label htmlFor="hl-date">
                  Ready date
                  <input id="hl-date" type="date" required {...field('date')} />
                </label>
                <label htmlFor="hl-load">
                  Load requirement
                  <input
                    id="hl-load"
                    required
                    maxLength={200}
                    {...field('load')}
                    placeholder="Load, handling or access requirement"
                  />
                </label>
              </div>
            )}
            {step === 2 && (
              <label htmlFor="hl-consequence" className="hl-consequence-label">
                Operational consequence
                <textarea
                  id="hl-consequence"
                  required
                  maxLength={500}
                  rows={3}
                  {...field('consequence')}
                  placeholder="What depends on this shipment arriving?"
                />
              </label>
            )}
            <div className="hl-form-actions">
              {step > 0 ? (
                <button
                  className="hl-text-button"
                  type="button"
                  onClick={() => change(step - 1)}
                >
                  ← Back
                </button>
              ) : (
                <button
                  className="hl-text-button"
                  type="button"
                  onClick={example}
                >
                  Use an illustrative example
                </button>
              )}
              <button className="hl-button" type="submit">
                {step === 2 ? 'Routing review' : 'Continue'}{' '}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        ) : (
          <div>
            <dl className="hl-review-manifest">
              {[
                ['Origin', draft.origin],
                ['Destination', draft.destination],
                ['Ready date', draft.date],
                ['Load requirement', draft.load],
                ['Operational consequence', draft.consequence],
              ].map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <output className="hl-review-notice">
              Prototype review only. Nothing has been submitted, booked or sent.
            </output>
            <div className="hl-form-actions">
              <button
                className="hl-text-button"
                type="button"
                onClick={() => change(0)}
              >
                ← Edit route
              </button>
              <button
                className="hl-button"
                type="button"
                onClick={() => {
                  setDraft(blank);
                  change(0);
                }}
              >
                Reset prototype <span aria-hidden="true">↺</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="hl-prototype-note">
        Explore with an illustrative example. Details stay in this page and
        clear when you leave or reset.
      </p>
    </div>
  );
}
