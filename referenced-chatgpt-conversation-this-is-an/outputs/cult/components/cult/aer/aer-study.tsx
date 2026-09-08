import type { Study } from '@/lib/studies';
import { nextStudy } from '@/lib/studies';
import { NextStudy } from '@/components/cult/portfolio';
import { Action } from '@/components/cult/brand';
import { FareSelector, TravelCompanion, RouteLaunch } from './interactions';
import './aer.css';
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="ae-label">{children}</p>
);
export function AerStudy({ study }: { study: Study }) {
  return (
    <main id="main" className="aer-page">
      <header className="ae-hero ae-pad">
        <div className="ae-hero-meta">
          <span>CULT. STUDY 003 / SELF-INITIATED</span>
          <span>AVIATION · DIGITAL PRODUCT · GROWTH</span>
        </div>
        <h1>
          AER<span>.</span>
        </h1>
        <div className="ae-hero-bottom">
          <h2>
            The world,
            <br />
            with less friction.
          </h2>
          <a href="#ae-idea">
            EXPLORE THE JOURNEY <span>↓</span>
          </a>
        </div>
        <div className="ae-departure">
          <span>CONCEPT FLIGHT / AE 217</span>
          <b>
            YYZ <span>→</span> CPH
          </b>
          <span>DESIGNED TO KEEP YOU MOVING.</span>
        </div>
      </header>
      <div className="ae-disclosure ae-pad">
        A fictional premium airline. A self-initiated design study by CULT. All
        routes, fares and service examples are illustrative.
      </div>
      <section className="ae-idea ae-pad" id="ae-idea">
        <Label>01 / THE OPPORTUNITY</Label>
        <div className="ae-split">
          <h2>
            The destination
            <br />
            is the easy part<span>.</span>
          </h2>
          <div>
            <p className="ae-lead">
              It’s everything around the flight that makes travel feel like
              work.
            </p>
            <p>
              Comparing fares. Finding the gate. Working out what happens when
              plans change. AER is built around a simple idea: less uncertainty
              at every step.
            </p>
            <p>
              For frequent business and leisure travellers, premium means time
              respected, choices explained and help within reach.
            </p>
          </div>
        </div>
        <div className="ae-friction">
          <div>
            <span>FROM</span>
            <p>“Is my bag included?”</p>
            <p>“Where do I go?”</p>
            <p>“What happens now?”</p>
          </div>
          <span className="ae-friction-arrow">↗</span>
          <div>
            <span>TO</span>
            <p>The full price.</p>
            <p>The right direction.</p>
            <p>A clear next step.</p>
          </div>
        </div>
      </section>
      <section className="ae-identity ae-pad">
        <Label>02 / A LANGUAGE THAT MOVES</Label>
        <div className="ae-split">
          <h2>
            Recognisable.
            <br />
            Even at speed.
          </h2>
          <p className="ae-lead">
            Large type. Useful numbers. One orange marker for the next action.
            The same language travels from the booking screen to the boarding
            gate.
          </p>
        </div>
        <div className="ae-identity-board">
          <div className="ae-wordmark">
            AER<span>↗</span>
            <small>MOVE WELL.</small>
          </div>
          <div className="ae-gate">
            <small>DEPARTURES / AFGANGE</small>
            <b>
              E73 <span>↗</span>
            </b>
            <div>
              <span>
                AE 217
                <br />
                COPENHAGEN
              </span>
              <strong>22:35</strong>
            </div>
          </div>
          <div className="ae-bag-tag">
            <span>AER. / BAGGAGE</span>
            <b>CPH</b>
            <span>VIA YYZ / AE 217</span>
            <div className="ae-barcode" aria-hidden="true" />
            <small>CONCEPT TAG / 003</small>
          </div>
          <div className="ae-zone">
            <small>BOARDING</small>
            <b>02</b>
            <span>
              Your zone. Your turn. <span>→</span>
            </span>
          </div>
        </div>
      </section>
      <section className="ae-product ae-pad" id="ae-book">
        <Label>03 / THE BOOKING EXPERIENCE</Label>
        <div className="ae-split">
          <h2>
            A fare.
            <br />
            Not a guessing game.
          </h2>
          <p className="ae-lead">
            Choose a date and compare three clear fares. The inclusions change
            with your selection, and the total stays visible. Try it below.
          </p>
        </div>
        <FareSelector />
      </section>
      <section className="ae-service ae-pad">
        <Label>04 / THE DAY OF TRAVEL</Label>
        <h2>
          The brand matters
          <br />
          when plans change<span>.</span>
        </h2>
        <TravelCompanion />
      </section>
      <section className="ae-launch" id="ae-launch">
        <div className="ae-route-poster ae-pad">
          <Label>05 / MAKING A ROUTE MATTER</Label>
          <div className="ae-route-code">
            <span>YYZ</span>
            <span className="ae-route-arrow">↗</span>
            <span>CPH</span>
          </div>
          <div className="ae-poster-bottom">
            <h2>
              Copenhagen.
              <br />
              No detour required.
            </h2>
            <div>
              <b>AER.</b>
              <p>
                PROPOSED ROUTE CAMPAIGN
                <br />
                TORONTO → COPENHAGEN
              </p>
            </div>
          </div>
          <p className="ae-caption">
            CAMPAIGN CONCEPT / NO LIVE SERVICE OR SCHEDULE CLAIMED
          </p>
        </div>
        <div className="ae-pad ae-launch-plan">
          <div className="ae-split">
            <h2>
              One promise.
              <br />
              Every touchpoint.
            </h2>
            <p className="ae-lead">
              The campaign earns attention. Search answers the practical
              questions. Booking delivers the clarity. Explore how the pieces
              connect.
            </p>
          </div>
          <RouteLaunch />
          <div className="ae-search-example">
            <div>
              <Label>SEARCH AD / COPY CONCEPT</Label>
              <h3>Toronto to Copenhagen. Direct.</h3>
              <p>
                AER flights · Clear fares. Baggage explained. Find the journey
                that works for you.
              </p>
            </div>
            <div>
              <Label>THE LANDING PAGE’S JOB</Label>
              <p>
                Show the route, schedule, airport guidance and fare search
                together. Useful answers first; no hunt through a generic
                homepage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ae-retention ae-pad">
        <Label>06 / USEFUL BEYOND THE TICKET</Label>
        <div className="ae-split">
          <h2>
            Keep the passenger.
            <br />
            Lose the noise.
          </h2>
          <p className="ae-lead">
            AER Member remembers preferences. Travel messages answer the next
            question. Editorial gives people a reason to return.
          </p>
        </div>
        <div className="ae-retention-grid">
          <article className="ae-email">
            <div>
              AER. <span>YOUR JOURNEY</span>
            </div>
            <small>BEFORE YOU LEAVE</small>
            <h3>
              A little less
              <br />
              to think about.
            </h3>
            <p>
              Your flight leaves tomorrow. Check in, confirm your bag allowance
              and see when to arrive—all in one place.
            </p>
            <span className="ae-email-action">Open your journey ↗</span>
            <small>EMAIL DESIGN CONCEPT</small>
          </article>
          <article className="ae-member">
            <Label>AER MEMBER</Label>
            <h3>
              Familiar.
              <br />
              Every time.
            </h3>
            <ul>
              <li>Saved seat preferences</li>
              <li>Trips and receipts together</li>
              <li>A simpler path to support</li>
              <li>Relevant offers, by choice</li>
            </ul>
            <p>
              Recognition through usefulness. No complicated ladder of status
              names.
            </p>
          </article>
          <article className="ae-field-notes">
            <Label>EDITORIAL / FIELD NOTES</Label>
            <h3>
              Copenhagen,
              <br />
              at your pace.
            </h3>
            <ol>
              <li>
                <span>09:00</span> A slower start.
              </li>
              <li>
                <span>13:00</span> A city on two wheels.
              </li>
              <li>
                <span>19:00</span> A table worth finding.
              </li>
            </ol>
            <p>
              A proposed city-guide format for search, email and social. Give
              the journey a purpose before asking for a booking.
            </p>
          </article>
        </div>
      </section>
      <section className="ae-measure ae-pad">
        <Label>07 / WHAT WE WOULD MEASURE</Label>
        <div className="ae-split">
          <h2>
            Less friction.
            <br />
            Measured.
          </h2>
          <p className="ae-lead">
            The test is whether more people find the right journey, complete it
            confidently and choose to return.
          </p>
        </div>
        <div className="ae-measures">
          {[
            [
              'Find',
              'Route search → fare search',
              'Can people find a relevant flight?',
            ],
            [
              'Book',
              'Fare search → completed booking',
              'Where do people abandon the process?',
            ],
            [
              'Travel',
              'Help requests + recovery feedback',
              'Does useful information reduce confusion?',
            ],
            [
              'Return',
              'Repeat bookings + opted-in email response',
              'Does the experience earn another journey?',
            ],
          ].map(([name, metric, copy], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <strong>{metric}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="ae-caption">
          PROPOSED MEASUREMENT FRAMEWORK · NO LIVE CAMPAIGN RESULTS REPORTED
        </p>
      </section>
      <section className="ae-close ae-pad">
        <Label>BRAND → DISCOVERY → BOOKING → SERVICE → RETURN</Label>
        <h2>
          Move
          <br />
          <span>well.</span>↗
        </h2>
        <div>
          <p>
            A considered journey is a reason to choose.
            <br />
            And a reason to choose again.
          </p>
          <Action href="/contact/?engagement=Build">
            Build a better experience
          </Action>
        </div>
      </section>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
