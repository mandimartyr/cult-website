'use client';
import { useEffect, useRef, useState } from 'react';
import type { SubmitEvent } from 'react';
import { NoctImage } from './image';
import { scentHours, filmFrames } from './data';

function PhotoStack({
  items,
  active,
}: {
  items: { image: string; alt: string }[];
  active: number;
}) {
  const [visible, setVisible] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    const img = root.current?.querySelectorAll('img')[active];
    if (img)
      void img
        .decode()
        .then(() => {
          if (!cancelled) setVisible(active);
        })
        .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [active]);
  return (
    <div className="nt-photo-stack" ref={root}>
      {items.map((item, i) => (
        <NoctImage
          key={`${item.image}-${i}`}
          name={item.image}
          sizes="(max-width:480px) 800px, 100vw"
          alt={visible === i ? item.alt : ''}
          className={visible === i ? 'is-visible' : ''}
        />
      ))}
    </div>
  );
}
export function ScentTimeline() {
  const [active, setActive] = useState(0);
  const item = scentHours[active];
  return (
    <div className="nt-scent-layout">
      <div className="nt-scent-copy">
        <h2 className="nt-display">
          THE NIGHT,
          <br />
          IN FOUR HOURS.
        </h2>
        <p className="nt-note">
          An olfactory sketch. Narrative hours, not a claim of tested longevity.
        </p>
        <div className="nt-scent-active" aria-live="polite">
          <span className="nt-mono">
            {item.time} / {item.name}
          </span>
          <h3>{item.notes}</h3>
          <p>{item.copy}</p>
        </div>
        <div className="nt-hour-select" aria-label="Explore the scent story">
          {scentHours.map((hour, i) => (
            <button
              key={hour.time}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              <span>{hour.time}</span>
              <strong>{hour.name}</strong>
            </button>
          ))}
        </div>
      </div>
      <PhotoStack items={scentHours} active={active} />
    </div>
  );
}
export function ObjectStudy() {
  const [active, setActive] = useState(0);
  const items = [
    {
      image: 'object',
      alt: 'NOCT. black glass bottle with precise white batch label.',
    },
    {
      image: 'identity',
      alt: 'NOCT. bottle, carton, sample vial and shipping materials.',
    },
    { image: 'morning', alt: 'NOCT. bottle beside a bed in first light.' },
  ];
  return (
    <div className="nt-object-view">
      <PhotoStack items={items} active={active} />
      <div className="nt-object-control">
        <p className="nt-mono">OBJECT / 0213</p>
        <h2>
          AN OBJECT THAT
          <br />
          LOOKS BETTER
          <br />
          AT 2 AM.
        </h2>
        <div className="nt-object-buttons" aria-label="Object views">
          {['The bottle', 'The system', 'The aftermath'].map((v, i) => (
            <button
              key={v}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              {v}
              <span>0{i + 1}</span>
            </button>
          ))}
        </div>
        <p className="nt-note">
          Proposed materials: thick smoky glass, a severe black cap, a matte
          label and uncoated carton. Weight and finish would be resolved through
          physical sampling.
        </p>
      </div>
    </div>
  );
}
export function FilmSequence() {
  const [active, setActive] = useState(0),
    [playing, setPlaying] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const m = matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => {
      if (m.matches) setPlaying(false);
    };
    m.addEventListener('change', stop);
    const o = new IntersectionObserver(
      (es) => {
        if (!es[0].isIntersecting) setPlaying(false);
      },
      { threshold: 0.15 },
    );
    if (root.current) o.observe(root.current);
    return () => {
      o.disconnect();
      m.removeEventListener('change', stop);
    };
  }, []);
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % filmFrames.length),
      3500,
    );
    return () => clearInterval(t);
  }, [playing]);
  const frame = filmFrames[active];
  return (
    <div className="nt-film" ref={root}>
      <div className="nt-film-stage">
        <PhotoStack items={filmFrames} active={active} />
        <div className="nt-film-caption">
          <span className="nt-mono">
            {frame.time} / {frame.place}
          </span>
          <span className="nt-mono">
            {String(active + 1).padStart(2, '0')} / 05
          </span>
        </div>
      </div>
      <div className="nt-film-controls">
        <button
          className="nt-line-button"
          onClick={() => setPlaying(!playing)}
          aria-pressed={playing}
        >
          {playing ? 'Pause sequence' : 'Play storyboard'}
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>
        </button>
        <div className="nt-film-times" aria-label="Storyboard frames">
          {filmFrames.map((f, i) => (
            <button
              key={f.time}
              aria-pressed={i === active}
              onClick={() => {
                setPlaying(false);
                setActive(i);
              }}
            >
              {f.time}
            </button>
          ))}
        </div>
      </div>
      <div className="nt-film-direction">
        <p aria-live="polite">{frame.sound}</p>
        <p className="nt-note">
          Visual storyboard / Sound direction shown as text.
          <br />
          Campaign film concept; no finished film or audio is presented.
        </p>
      </div>
    </div>
  );
}
export function Storefront() {
  const [format, setFormat] = useState('50 ML'),
    [step, setStep] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  function go(n: number) {
    setStep(n);
    requestAnimationFrame(() => heading.current?.focus());
  }
  return (
    <div className="nt-store" id="noct-store">
      <div className="nt-store-nav">
        <strong>NOCT.</strong>
        <a href="#noct-scent">Discover the scent ↗</a>
        <span className="nt-mono">STOREFRONT PROTOTYPE</span>
      </div>
      <div className="nt-store-layout">
        <div className="nt-store-art">
          <NoctImage
            name={format === '50 ML' ? 'object' : 'identity'}
            alt={
              format === '50 ML'
                ? 'NOCT. 50 ML bottle concept.'
                : 'NOCT. discovery vial and packaging concept.'
            }
          />
          <p>
            FRAGRANCE
            <br />
            FOR AFTER DARK.
          </p>
        </div>
        <div className="nt-product-panel">
          <p className="nt-mono">EAU DE PARFUM / CONCEPT 0213</p>
          <h3 ref={heading} tabIndex={-1}>
            {step === 0
              ? 'The night, bottled.'
              : step === 1
                ? 'Your selection.'
                : 'Checkout preview.'}
          </h3>
          {step === 0 ? (
            <>
              <p>
                Iris. Black tea. Incense. An intimate, smoky fragrance imagined
                for the hours after dark.
              </p>
              <fieldset>
                <legend>Choose your first encounter</legend>
                {['50 ML', 'DISCOVERY'].map((v) => (
                  <label key={v}>
                    <input
                      type="radio"
                      name="noct-format"
                      value={v}
                      checked={format === v}
                      onChange={() => setFormat(v)}
                    />
                    <span>{v}</span>
                    <small>
                      {v === '50 ML'
                        ? 'Full-size eau de parfum'
                        : '2 ML sample / proposed format'}
                    </small>
                  </label>
                ))}
              </fieldset>
              <p className="nt-note">
                Fictional product. Pricing and availability would be confirmed
                before launch.
              </p>
              <details>
                <summary>Character & composition</summary>
                <p>
                  Bright pepper and bergamot; a heart of iris, black tea and
                  skin musk; incense, cedar and amber beneath. This is an
                  olfactory direction, not a final ingredient declaration.
                </p>
              </details>
              <details>
                <summary>Delivery & returns</summary>
                <p>
                  Destination, delivery charge, timing and product-specific
                  return conditions would be shown before payment. No shipping
                  promise is made by this concept.
                </p>
              </details>
              <details>
                <summary>Start with a sample?</summary>
                <p>
                  The proposed 2 ML discovery format makes an unfamiliar
                  fragrance easier to explore. No sample-credit scheme, reviews
                  or stock urgency are invented.
                </p>
              </details>
              <div className="nt-purchase-bar">
                <span>
                  {format}
                  <small>PRICE TO BE CONFIRMED</small>
                </span>
                <button className="nt-button" onClick={() => go(1)}>
                  Review selection <span aria-hidden="true">↗</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <dl className="nt-basket">
                <div>
                  <dt>Fragrance</dt>
                  <dd>NOCT / 02:13</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>
                    {format === '50 ML'
                      ? '50 ML eau de parfum'
                      : '2 ML discovery sample'}
                  </dd>
                </div>
                <div>
                  <dt>Quantity</dt>
                  <dd>1</dd>
                </div>
                <div>
                  <dt>Price / delivery / total</dt>
                  <dd>To be confirmed before launch</dd>
                </div>
              </dl>
              {step === 1 ? (
                <>
                  <p>
                    A clear review before checkout. No forced account, surprise
                    delivery fee or invented scarcity.
                  </p>
                  <button className="nt-button" onClick={() => go(2)}>
                    Preview checkout <span aria-hidden="true">↗</span>
                  </button>
                </>
              ) : (
                <>
                  <ol className="nt-checkout-steps">
                    <li>Guest contact and delivery details</li>
                    <li>Delivery method and complete cost</li>
                    <li>Payment after the total is accepted</li>
                  </ol>
                  <output>
                    No order placed. This is a local interaction prototype; no
                    payment or personal details are collected.
                  </output>
                </>
              )}
              <button className="nt-line-button" onClick={() => go(0)}>
                ← Edit selection
              </button>
            </>
          )}
          <p className="nt-note nt-prototype-disclosure">
            Interactive concept only. Nothing is purchased, sent or saved.
          </p>
        </div>
      </div>
    </div>
  );
}
const letters = [
  {
    name: 'Welcome',
    title: 'YOU’RE IN.',
    subject: 'The night has a scent.',
    copy: 'Meet NOCT. A fragrance imagined for after dark. Start with the notes, then decide how close you want to get.',
  },
  {
    name: 'Discovery',
    title: 'CLOSER, FIRST.',
    subject: 'Get to know the hours.',
    copy: 'A sample offers a smaller first encounter. Follow delivery with product education, then a relevant invitation to explore full size.',
  },
  {
    name: 'Return',
    title: 'AFTER THE NIGHT.',
    subject: 'A reason to return.',
    copy: 'Replenishment follows the product lifecycle. New editions and editorial dispatches follow interest. Every message keeps an easy way out.',
  },
];
export function NightShift() {
  const [email, setEmail] = useState(''),
    [preview, setPreview] = useState(false),
    [letter, setLetter] = useState(0);
  function submit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setPreview(true);
    setLetter(0);
  }
  return (
    <div className="nt-email-layout">
      <div>
        <h2 className="nt-display">
          THE
          <br />
          NIGHT
          <br />
          SHIFT.
        </h2>
        <p>
          Launch, education, consideration, replenishment.
          <br />A relationship beyond the first impression.
        </p>
        <p className="nt-note">
          Local email preview. No subscription is created.
        </p>
        <form className="nt-capture" onSubmit={submit}>
          <label htmlFor="noct-email">
            EMAIL
            <input
              id="noct-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setPreview(false);
              }}
              autoComplete="off"
              placeholder="you@example.com"
            />
          </label>
          <button type="submit">Enter ↗</button>
        </form>
        {preview && (
          <output>
            Welcome preview ready. Your address has not been sent or saved.
          </output>
        )}
      </div>
      <div className="nt-email-specimen">
        <div className="nt-email-tabs" aria-label="Lifecycle email examples">
          {letters.map((l, i) => (
            <button
              key={l.name}
              aria-pressed={letter === i}
              onClick={() => setLetter(i)}
            >
              {l.name}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          <p className="nt-mono">
            FROM / NOCT.
            <br />
            SUBJECT / {letters[letter].subject}
          </p>
          <p className="nt-email-title">{letters[letter].title}</p>
          <p>{letters[letter].copy}</p>
          <a href="#noct-store">Discover the fragrance ↗</a>
          <p className="nt-mono nt-email-signature">
            NOCT.
            <br />
            FRAGRANCE FOR AFTER DARK.
          </p>
        </div>
      </div>
    </div>
  );
}
