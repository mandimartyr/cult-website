import type { Study } from '@/lib/studies';
import { StudyImage } from './portfolio';

// These are finished, non-interactive presentation artworks. They deliberately
// contain no fake controls, customer quotes, performance data or live offers.
export function StudyDetails({ study }: { study: Study }) {
  return (
    <div className={`study-artwork brand-${study.slug} study-details-art`}>
      {study.slug === 'hardline' && (
        <>
          <figure className="service-art">
            <div className="service-art-surface">
              <div className="fictional-nav">
                <span className="fictional-wordmark">HARDLINE</span>
                <span>CRITICAL FREIGHT / SERVICE PAGE</span>
              </div>
              <div className="service-art-columns">
                <div>
                  <p className="fictional-kicker">
                    THE SHIPMENT SETS THE REQUIREMENT.
                  </p>
                  <h3>When a delay has a consequence.</h3>
                  <p>
                    Time-sensitive freight starts with the details that ordinary
                    transport enquiries miss.
                  </p>
                  <div className="service-principles">
                    <p>
                      <b>01 / The constraint</b>
                      <br />
                      Ready date. Delivery requirement. Handling conditions.
                    </p>
                    <p>
                      <b>02 / The routing decision</b>
                      <br />
                      What can move, through which path, with which
                      contingencies.
                    </p>
                    <p>
                      <b>03 / The handover</b>
                      <br />
                      Clear information for the people responsible for the
                      shipment.
                    </p>
                  </div>
                </div>
                <div className="service-enquiry">
                  <h4>Describe the consequence.</h4>
                  <p>
                    What happens if this shipment does not arrive when required?
                  </p>
                  <div className="mock-field">Operational requirement ↗</div>
                  <div className="mock-field">Business email ↗</div>
                  <span className="mock-action">
                    Request a routing review →
                  </span>
                </div>
              </div>
            </div>
            <figcaption>
              Service landing page / critical freight concept
            </figcaption>
          </figure>
          <figure className="search-ad-art">
            <div className="search-ad-surface">
              <span>PAID SEARCH / PROPOSED AD + LANDING MESSAGE</span>
              <p className="search-ad-domain">
                hardline.example / critical-freight
              </p>
              <h4>Critical Freight | When the Shipment Matters</h4>
              <p>
                Tell us the route, load and deadline. Start a focused
                conversation about a high-consequence shipment.
              </p>
              <div className="search-ad-destination">
                <b>The load. The deadline. The consequence.</b>
                <p>
                  One service. One quote pathway. No unrelated navigation
                  between the query and the enquiry.
                </p>
                <span className="mock-action">Plan a critical shipment →</span>
              </div>
            </div>
            <figcaption>
              Paid-search execution — reserved example domain, not a live
              advertiser
            </figcaption>
          </figure>
        </>
      )}
      {study.slug === 'noct' && (
        <>
          <figure className="product-art">
            <div className="product-art-surface">
              <StudyImage
                study={study}
                application
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div>
                <p className="fictional-wordmark">NOCT</p>
                <p className="fictional-kicker">AFTERMATH / EAU DE PARFUM</p>
                <h3>What remains.</h3>
                <p>Mineral clarity. A trace of smoke. Warmth close to skin.</p>
                <dl>
                  <div>
                    <dt>Character</dt>
                    <dd>Dark / mineral / intimate</dd>
                  </div>
                  <div>
                    <dt>First encounter</dt>
                    <dd>Explore a discovery format</dd>
                  </div>
                  <div>
                    <dt>Before checkout</dt>
                    <dd>Size, delivery cost and returns in view</dd>
                  </div>
                </dl>
                <span className="mock-action">Choose your format →</span>
              </div>
            </div>
            <figcaption>
              Product-page / first-purchase concept. Proposed product character,
              not a tested fragrance claim.
            </figcaption>
          </figure>
          <div className="sequence-study">
            <p className="label">Proposed launch email sequence</p>
            <ol>
              <li>
                <strong>The house</strong>
                <span>
                  “The night has a signature.” Introduce NOCT and invite
                  discovery.
                </span>
              </li>
              <li>
                <strong>The fragrance</strong>
                <span>
                  “Know what stays.” Explain notes, character and format without
                  a discount.
                </span>
              </li>
              <li>
                <strong>The first encounter</strong>
                <span>
                  “Choose how you meet it.” Return to the relevant product
                  decision; suppress after purchase.
                </span>
              </li>
            </ol>
            <p className="label">Vertical film / three-shot concept</p>
            <p>
              Hard flash on skin → chrome reflection → bottle and discovery
              action. Test the opening frame and product reveal as separate
              hypotheses.
            </p>
          </div>
        </>
      )}
      {study.slug === 'aer' && (
        <>
          <figure className="route-art">
            <div className="route-art-surface">
              <div className="fictional-nav">
                <span className="fictional-wordmark">aer</span>
                <span>THE ROUTE EDITION</span>
              </div>
              <h3>A connection should make sense before it makes a booking.</h3>
              <div className="route-line">
                <span>YOUR ORIGIN</span>
                <span aria-hidden="true">→</span>
                <span>YOUR DESTINATION</span>
              </div>
              <div className="route-art-copy">
                <p>
                  <b>Why this journey</b>
                  <br />A route page would explain the practical reason for the
                  connection: access, work, family or onward travel.
                </p>
                <p>
                  <b>Before choosing a fare</b>
                  <br />
                  Departure airport, journey information, baggage and fare
                  conditions would be visible here.
                </p>
              </div>
              <span className="mock-action">Explore route details →</span>
            </div>
            <figcaption>
              Route landing-page concept. No operating routes, schedules or
              fares are claimed.
            </figcaption>
          </figure>
          <div className="sequence-study">
            <p className="label">Destination creative system</p>
            <ol>
              <li>
                <strong>The connection</strong>
                <span>Aircraft crop + one reason to make the journey.</span>
              </li>
              <li>
                <strong>The place</strong>
                <span>
                  Destination-led creative linked to useful route information.
                </span>
              </li>
              <li>
                <strong>The next step</strong>
                <span>
                  Search a route or subscribe to a relevant fare alert.
                </span>
              </li>
            </ol>
            <p className="label">Proposed search ad</p>
            <p>
              “AER Regional Connections | Find a Better Way There” — match the
              route query to its own landing page when a validated network
              exists.
            </p>
          </div>
        </>
      )}
      {study.slug === 'field' && (
        <>
          <figure className="stay-art">
            <div className="stay-art-surface">
              <div>
                <p className="fictional-wordmark">FIELD</p>
                <p className="fictional-kicker">THE DARK TIMBER STAY</p>
                <h3>
                  Weather outside.
                  <br />
                  Warmth within.
                </h3>
                <p>
                  A place for the landscape to set the pace. Explore the space
                  and what a stay requires before choosing dates.
                </p>
                <div className="stay-facts">
                  <p>
                    The arrival
                    <br />
                    <b>Access & seasonal conditions</b>
                  </p>
                  <p>
                    The stay
                    <br />
                    <b>Space, facilities & surroundings</b>
                  </p>
                  <p>
                    The decision
                    <br />
                    <b>Booking & cancellation terms</b>
                  </p>
                </div>
                <span className="mock-action">Plan a stay →</span>
              </div>
              <StudyImage
                study={study}
                application
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <figcaption>
              Stay-detail / winter landing-page concept. Operational details
              would require validation before launch.
            </figcaption>
          </figure>
          <div className="sequence-study">
            <p className="label">Search content + booking recovery</p>
            <ol>
              <li>
                <strong>Before you leave</strong>
                <span>
                  A useful arrival guide: how access and packing change by
                  season.
                </span>
              </li>
              <li>
                <strong>Before you book</strong>
                <span>
                  Stay-specific answers about the space, facilities and terms.
                </span>
              </li>
              <li>
                <strong>When you return</strong>
                <span>
                  An opted-in email preserves the stay and dates being
                  considered; no false scarcity.
                </span>
              </li>
            </ol>
          </div>
        </>
      )}
      {study.slug === 'signal' && (
        <>
          <figure className="intelligence-art">
            <div className="intelligence-surface">
              <div className="fictional-nav">
                <span className="fictional-wordmark">SIGNAL</span>
                <span>PRODUCT CONCEPT / ILLUSTRATIVE CONTENT</span>
              </div>
              <div className="intelligence-columns">
                <div>
                  <p className="fictional-kicker">THE DECISION VIEW</p>
                  <h3>
                    Evidence.
                    <br />
                    Context.
                    <br />
                    Action.
                  </h3>
                  <p>
                    A prioritized view should make its reasoning inspectable.
                  </p>
                </div>
                <div className="signal-record">
                  <p>01 / REVIEW REQUIRED</p>
                  <h4>A commercial priority has changed.</h4>
                  <dl>
                    <div>
                      <dt>Source</dt>
                      <dd>Connected operational evidence</dd>
                    </div>
                    <div>
                      <dt>Context</dt>
                      <dd>What changed and why it could matter</dd>
                    </div>
                    <div>
                      <dt>Confidence</dt>
                      <dd>Limits, missing information and review needs</dd>
                    </div>
                    <div>
                      <dt>Next step</dt>
                      <dd>Assign an owner to investigate</dd>
                    </div>
                  </dl>
                  <span className="mock-action">Review the evidence →</span>
                </div>
              </div>
            </div>
            <figcaption>
              Product-page / decision-view concept. Illustrative interface, not
              a working analytics product.
            </figcaption>
          </figure>
          <div className="sequence-study">
            <p className="label">Comparison + nurture architecture</p>
            <ol>
              <li>
                <strong>A dashboard shows</strong>
                <span>
                  What has been recorded. A comparison page would explain the
                  role and limits of reporting.
                </span>
              </li>
              <li>
                <strong>Intelligence prioritizes</strong>
                <span>
                  What deserves review, with the evidence and uncertainty
                  attached.
                </span>
              </li>
              <li>
                <strong>A relevant demo follows</strong>
                <span>
                  Brief → decision pattern → context question → demonstration.
                  Qualify the problem before booking time.
                </span>
              </li>
            </ol>
          </div>
        </>
      )}
    </div>
  );
}
