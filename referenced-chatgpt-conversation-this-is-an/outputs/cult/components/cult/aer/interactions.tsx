'use client';
import { useState } from 'react';

const fares = [
  {
    name: 'Light',
    price: 842,
    detail: 'Travel with less.',
    bag: 'Carry-on included',
    seat: 'Seat assigned at check-in',
    change: 'Changes for a fee',
  },
  {
    name: 'Standard',
    price: 912,
    detail: 'The everyday essentials.',
    bag: 'Carry-on + one checked bag',
    seat: 'Standard seat selection included',
    change: 'Changes for a fee',
  },
  {
    name: 'Flex',
    price: 1042,
    detail: 'Room to change your mind.',
    bag: 'Carry-on + one checked bag',
    seat: 'Preferred seat selection included',
    change: 'No change fee; fare difference applies',
  },
];
export function FareSelector() {
  const [fare, setFare] = useState(1);
  const [date, setDate] = useState(0);
  const [review, setReview] = useState(false);
  const selected = fares[fare];
  const dates = ['18 APR', '19 APR', '20 APR'];
  const total = selected.price + [0, 35, -20][date];
  return (
    <div className="ae-booking">
      <div className="ae-booking-head">
        <strong>AER.</strong>
        <span>01 SELECT / 02 REVIEW</span>
      </div>
      <div className="ae-flight-route">
        <div>
          <small>TORONTO</small>
          <b>YYZ</b>
        </div>
        <span aria-hidden="true">↗</span>
        <div>
          <small>COPENHAGEN</small>
          <b>CPH</b>
        </div>
      </div>
      <div className="ae-dates" aria-label="Example departure dates">
        {dates.map((d, i) => (
          <button
            key={d}
            aria-pressed={i === date}
            onClick={() => {
              setDate(i);
              setReview(false);
            }}
          >
            {d} <span>2027</span>
          </button>
        ))}
      </div>
      <div className="ae-flight-facts">
        <span>AE 217 · DIRECT</span>
        <span>22:35 → 12:05 +1 DAY</span>
        <span>7H 30M · LOCAL TIMES</span>
      </div>
      <div className="ae-fares" aria-label="Choose an example fare">
        {fares.map((f, i) => (
          <button
            key={f.name}
            aria-pressed={fare === i}
            onClick={() => {
              setFare(i);
              setReview(false);
            }}
          >
            <span>AER {f.name}</span>
            <small>{f.detail}</small>
            <strong>${f.price + [0, 35, -20][date]}</strong>
            <small>CAD / ONE WAY</small>
            <span className="ae-select-mark">
              {fare === i ? 'Selected ✓' : 'Select +'}
            </span>
          </button>
        ))}
      </div>
      <div className="ae-fare-detail" aria-live="polite">
        <div>
          <small>INCLUDED & CLEAR</small>
          <p>
            {selected.bag}
            <br />
            {selected.seat}
            <br />
            {selected.change}
          </p>
        </div>
        <div>
          <small>1 ADULT · TAXES INCLUDED</small>
          <strong>
            ${total} <small>CAD</small>
          </strong>
          <button className="ae-button" onClick={() => setReview(!review)}>
            {review ? 'Back to fares' : 'Review this journey'} <span>↗</span>
          </button>
        </div>
      </div>
      {review && (
        <output className="ae-review">
          <strong>Your journey, in one place.</strong>
          <p>
            Toronto → Copenhagen · {dates[date]} 2027 · AER {selected.name} · $
            {total} CAD. {selected.bag}. {selected.change}.
          </p>
          <p>
            This is a design demonstration. No flight is reserved and no payment
            is taken.
          </p>
        </output>
      )}
      <p className="ae-caption">
        INTERACTIVE CONCEPT · FICTIONAL FLIGHT, FARES & INCLUSIONS
      </p>
    </div>
  );
}
export function TravelCompanion() {
  const [delayed, setDelayed] = useState(false);
  const [option, setOption] = useState('');
  return (
    <div className="ae-travel-demo">
      <div className="ae-travel-control">
        <span className="ae-label">TRY A DIFFERENT MOMENT</span>
        <div className="ae-toggle">
          <button
            aria-pressed={!delayed}
            onClick={() => {
              setDelayed(false);
              setOption('');
            }}
          >
            On time
          </button>
          <button
            aria-pressed={delayed}
            onClick={() => {
              setDelayed(true);
              setOption('');
            }}
          >
            Flight delayed
          </button>
        </div>
        <h3>
          {delayed
            ? 'Plans change.\nClarity stays.'
            : 'Everything you need.\nRight when you need it.'}
        </h3>
        <p>
          {delayed
            ? 'Explain what changed, what it means for the passenger, and what they can do. A calm message is only useful when it leads to help.'
            : 'One flight. One clear view. Gate, boarding time and baggage stay together, without a feed of things to scroll past.'}
        </p>
      </div>
      <div className="ae-pass" aria-live="polite">
        <div className="ae-pass-top">
          <strong>AER.</strong>
          <span>YOUR NEXT FLIGHT</span>
        </div>
        <div className={'ae-status ' + (delayed ? 'is-delayed' : '')}>
          {delayed ? 'DELAYED · 48 MINUTES' : 'ON TIME · READY WHEN YOU ARE'}
        </div>
        <div className="ae-pass-route">
          YYZ <span>↗</span> CPH
        </div>
        <p>AE 217 · TORONTO → COPENHAGEN</p>
        <div className="ae-pass-grid">
          <div>
            <small>DEPARTURE</small>
            <b>{delayed ? '23:23' : '22:35'}</b>
          </div>
          <div>
            <small>GATE</small>
            <b>E73</b>
          </div>
          <div>
            <small>BOARDING ZONE</small>
            <b>02</b>
          </div>
          <div>
            <small>SEAT</small>
            <b>14A</b>
          </div>
        </div>
        {delayed ? (
          <>
            <p className="ae-service-note">
              Your incoming aircraft is late. Your gate is unchanged. We’ll
              update you here if anything else changes.
            </p>
            <div className="ae-pass-actions">
              {['Other flights', 'Get help'].map((x) => (
                <button
                  key={x}
                  aria-pressed={option === x}
                  onClick={() => setOption(x)}
                >
                  {x} ↗
                </button>
              ))}
            </div>
            {option && (
              <p className="ae-service-note">
                {option === 'Other flights'
                  ? 'In the live product, this would show available alternatives and any fare difference before you choose.'
                  : 'In the live product, support would receive your flight details so you would not have to explain them again.'}
              </p>
            )}
          </>
        ) : (
          <>
            <div className="ae-barcode" aria-hidden="true" />
            <p className="ae-caption">
              BOARDING PASS DESIGN · NOT VALID FOR TRAVEL
            </p>
          </>
        )}
      </div>
    </div>
  );
}
const launchSteps = [
  [
    'Discover',
    'Make the route worth considering.',
    'Airport posters and travel-publication placements introduce the direct connection. Destination stories give people a reason to go.',
  ],
  [
    'Search',
    'Answer the journey people have in mind.',
    'A Toronto–Copenhagen page brings the schedule, airport details and fare search together. Search ads lead to that same page.',
  ],
  [
    'Book',
    'Keep the promise at checkout.',
    'Carry the chosen route into a clear fare comparison. Show baggage, seat rules and the total before asking for a commitment.',
  ],
  [
    'Return',
    'Be useful after the booking.',
    'Stop acquisition ads once someone books. Send timely travel updates, then offer relevant return journeys to passengers who opt in.',
  ],
];
export function RouteLaunch() {
  const [active, setActive] = useState(0);
  return (
    <div className="ae-launch-interactive">
      <div className="ae-launch-tabs">
        {launchSteps.map(([name], i) => (
          <button
            key={name}
            aria-pressed={active === i}
            aria-controls="ae-launch-detail"
            onClick={() => setActive(i)}
          >
            <small>0{i + 1}</small>
            {name}
            <span>↗</span>
          </button>
        ))}
      </div>
      <div id="ae-launch-detail" aria-live="polite">
        <span className="ae-label">ONE ROUTE / ONE CONNECTED JOURNEY</span>
        <h3>{launchSteps[active][1]}</h3>
        <p>{launchSteps[active][2]}</p>
      </div>
    </div>
  );
}
