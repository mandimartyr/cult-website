'use client';
import { SpliceLogo } from './logo';
import { useState } from 'react';
const lanes = [
  {
    name: 'Colour',
    title: 'SET THE TEMPERATURE.',
    copy: 'Acid yellow. Deep shadows. A pink that refuses to disappear. The grade makes every frame belong to the same world.',
    treatment: 'colour',
  },
  {
    name: 'Edit',
    title: 'FIND THE NERVE.',
    copy: 'Build the tension. Hold the look. Cut before comfort settles in. A clear editorial rhythm gives the idea its shape.',
    treatment: 'edit',
  },
  {
    name: 'Finish',
    title: 'KEEP THE EDGE.',
    copy: 'Typography, sound direction and delivery work together. The last pass protects the character of the first idea.',
    treatment: 'finish',
  },
];
export function SpliceDesk() {
  const [active, setActive] = useState(0);
  const lane = lanes[active];
  return (
    <div className="sp-desk">
      <div className="sp-desk-toolbar">
        <span>SP / FINISHING DESK</span>
        <span>VISUAL CONCEPT · 24 FPS</span>
      </div>
      <div className="sp-desk-layout">
        <div className={`sp-monitor sp-monitor-${lane.treatment}`}>
          <div className="sp-monitor-art" />
          <span className="sp-frame-code">00:00:0{active + 1}:00</span>
          <p key={lane.name}>{lane.title}</p>
        </div>
        <div className="sp-desk-controls">
          <p className="sp-mono">CHOOSE A PASS</p>
          <div className="sp-tabs" role="tablist" aria-label="Finishing passes">
            {lanes.map((item, i) => (
              <button
                key={item.name}
                id={`sp-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="sp-pass"
                onClick={() => setActive(i)}
              >
                {String(i + 1).padStart(2, '0')} / {item.name}
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div
            id="sp-pass"
            role="tabpanel"
            aria-labelledby={`sp-tab-${active}`}
          >
            <h3>{lane.title}</h3>
            <p>{lane.copy}</p>
          </div>
        </div>
      </div>
      <div className="sp-timeline" aria-hidden="true">
        <span>V1 / PICTURE</span>
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <span>A1 / SOUND</span>
        <b />
        <b />
        <b />
      </div>
    </div>
  );
}
const slides = [
  {
    title: 'CUT LETTER №01',
    label: 'SPLICE. / NOTES FROM THE LAST ROOM',
    copy: 'An independent dispatch on colour, cuts and keeping the nerve.',
  },
  {
    title: 'WHAT GOT SOFTENED',
    label: '01 / THE CUT',
    copy: 'What did the client make you dull last time? The frame, the silence, the part you knew was right.',
  },
  {
    title: 'PROTECT THE PULSE',
    label: '02 / THE LETTER',
    copy: 'One issue. One decision worth keeping. Get the next Cut Letter.',
  },
];
export function SpliceCarousel() {
  const [index, setIndex] = useState(0);
  return (
    <div className="sp-carousel">
      <div className={`sp-carousel-slide sp-slide-${index}`} aria-live="polite">
        <span className="sp-mono">{slides[index].label}</span>
        <h3>{slides[index].title}</h3>
        <p>{slides[index].copy}</p>
        <strong className="sp-social-logo">
          <SpliceLogo compact />
        </strong>
      </div>
      <div className="sp-carousel-controls">
        <button
          aria-label="Previous carousel slide"
          onClick={() => setIndex((index + 2) % 3)}
        >
          ←
        </button>
        <span className="sp-mono">{index + 1} / 3 · CAROUSEL CONCEPT</span>
        <button
          aria-label="Next carousel slide"
          onClick={() => setIndex((index + 1) % 3)}
        >
          →
        </button>
      </div>
    </div>
  );
}
