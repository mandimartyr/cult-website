'use client';
import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { useForm } from '@formspree/react';
import {
  engagementOptions,
  normalizeEngagement,
  validateEnquiry,
  type Enquiry,
} from '@/lib/enquiry';
import { Arrow } from './brand';
const fields = [
  { id: 'name', label: 'Name', required: true, autoComplete: 'name' },
  {
    id: 'email',
    label: 'Email',
    required: true,
    type: 'email',
    autoComplete: 'email',
  },
  { id: 'company', label: 'Company / Brand', autoComplete: 'organization' },
  { id: 'website', label: 'Website', autoComplete: 'url' },
  {
    id: 'needs',
    label: 'What needs to move?',
    required: true,
    multiline: true,
  },
  { id: 'now', label: 'What are you doing now?', multiline: true },
  { id: 'investment', label: 'Approximate investment (CAD)' },
  { id: 'timing', label: 'Ideal timing' },
  { id: 'notes', label: 'Anything else we should know?', multiline: true },
] as const;
export function ContactForm() {
  const [engagement, setEngagement] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, sendToFormspree] = useForm('meaqrrdr');
  const [networkError, setNetworkError] = useState('');
  const sending = useRef(false);
  const review = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const value = new URLSearchParams(location.search).get('engagement');
    const normalized = normalizeEngagement(value);
    if (normalized)
      // Browser query initializes this static-export form after hydration.
      // oxlint-disable-next-line react/react-compiler
      setEngagement(normalized);
  }, []);
  useEffect(() => {
    if (state.succeeded) review.current?.focus();
  }, [state.succeeded]);
  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || state.succeeded) return;
    setNetworkError('');
    const raw = new FormData(event.currentTarget);
    const data = Object.fromEntries(raw) as Enquiry;
    data.engagement = engagement;
    const found = validateEnquiry(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      if (first === 'engagement') {
        form.current?.querySelector<HTMLElement>('#engagement-start')?.focus();
      } else {
        form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      }
      return;
    }
    sending.current = true;
    try {
      await sendToFormspree(raw);
    } catch {
      setNetworkError(
        'We could not send your enquiry. Please try again, or email hello@cultmedia.house.',
      );
    } finally {
      sending.current = false;
    }
  }
  if (state.succeeded)
    return (
      <div
        className="contact-form-wrap enquiry-success"
        ref={review}
        tabIndex={-1}
        aria-live="polite"
      >
        <p className="label">Enquiry sent</p>
        <h2>
          YOU’RE ON OUR RADAR<span className="accent">.</span>
        </h2>
        <p>
          Thanks for getting in touch. We’ll review your brief and reply to the
          email address you provided.
        </p>
      </div>
    );
  return (
    <div className="contact-form-wrap">
      <form
        ref={form}
        className="contact-form"
        action="https://formspree.io/f/meaqrrdr"
        method="POST"
        onSubmit={submit}
        aria-busy={state.submitting}
        noValidate
      >
        <input type="hidden" name="subject" value="New CULT. project enquiry" />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          hidden
          aria-hidden="true"
        />
        <p className="form-note">
          Tell us what needs to move. Your brief goes straight to CULT.
        </p>
        <fieldset className="engagement-fieldset">
          <legend id="engagement-legend">
            How do you want to start?<span aria-hidden="true"> *</span>
          </legend>
          <div
            className="engagement-choices"
            role="radiogroup"
            aria-labelledby="engagement-legend"
            aria-invalid={!!errors.engagement}
            aria-describedby={
              errors.engagement ? 'engagement-error' : undefined
            }
          >
            {engagementOptions.map((option, index) => {
              const hint =
                option === 'Attention Audit'
                  ? 'Find the constraint · from $1,500 CAD'
                  : option === 'Growth Build'
                    ? 'Build the fix · from $4,000 CAD'
                    : option === 'CULT. Partner'
                      ? 'Run the system · from $4,000 CAD / month'
                      : 'Tell us the problem—we’ll recommend Audit, Build, or Partner';
              return (
                <label
                  key={option}
                  className="engagement-choice"
                  aria-label={option}
                >
                  <input
                    id={index === 0 ? 'engagement-start' : undefined}
                    type="radio"
                    name="engagement"
                    value={option}
                    checked={engagement === option}
                    required
                    onChange={() => {
                      setEngagement(option);

                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.engagement;
                        return next;
                      });
                    }}
                  />
                  <span className="engagement-choice-copy">
                    <span className="engagement-choice-name">{option}</span>
                    <small>{hint}</small>
                  </span>
                </label>
              );
            })}
          </div>
          {errors.engagement && (
            <p className="field-error" id="engagement-error">
              {errors.engagement}
            </p>
          )}
        </fieldset>
        <p className="required-note">* Required fields</p>
        <div className="form-grid">
          {fields.map((field) => {
            const error =
              errors[field.id] ||
              state.errors
                ?.getFieldErrors(field.id)
                .map((error) => error.message)
                .join(' ');
            return (
              <div
                className={`field ${'multiline' in field ? 'field-wide' : ''}`}
                key={field.id}
              >
                <label htmlFor={field.id}>
                  {field.label}
                  {'required' in field && <span aria-hidden="true"> *</span>}
                </label>
                {'multiline' in field ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    required={'required' in field}
                    maxLength={field.id === 'needs' ? 1000 : 1500}
                    rows={3}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${field.id}-error` : undefined}
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={'type' in field ? field.type : 'text'}
                    autoComplete={
                      'autoComplete' in field ? field.autoComplete : undefined
                    }
                    maxLength={field.id === 'website' ? 300 : 180}
                    required={'required' in field}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${field.id}-error` : undefined}
                  />
                )}{' '}
                {error && (
                  <p className="field-error" id={`${field.id}-error`}>
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="submission-status" role="alert">
          {(state.errors || networkError) && (
            <p className="field-error">
              {networkError ||
                'Your enquiry could not be sent. Check the fields and try again. Your answers are still here.'}
            </p>
          )}
          {state.errors?.getFormErrors().map((error, index) => (
            <p className="field-error" key={index}>
              {error.message}
            </p>
          ))}
        </div>
        <button type="submit" className="action" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Send enquiry'}
          <Arrow />
        </button>
      </form>
    </div>
  );
}
