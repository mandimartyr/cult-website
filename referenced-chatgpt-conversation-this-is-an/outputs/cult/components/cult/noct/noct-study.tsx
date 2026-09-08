import type { Study } from '@/lib/studies';
import { studyDisclosure, nextStudy } from '@/lib/studies';
import { NextStudy } from '@/components/cult/portfolio';
import { Action } from '@/components/cult/brand';
import { NoctImage } from './image';
import {
  ScentTimeline,
  ObjectStudy,
  FilmSequence,
  Storefront,
  NightShift,
} from './experiences';
import { launchStages, mediaChannels, measurement } from './data';
import { NoctMotion } from './motion';
import './noct.css';
function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="nt-mono nt-section-label">
      {n} / {children}
    </p>
  );
}
export function NoctStudy({ study }: { study: Study }) {
  return (
    <main id="main" className="noct-page">
      <NoctMotion />
      <header className="nt-hero" data-nt-hour="02:13">
        <NoctImage
          name="hero"
          sizes="(max-width:768px) 1500px, 100vw"
          priority
          alt="NOCT. black glass fragrance bottle on a taxi seat, rain and red tail lights beyond the window."
        />
        <div className="nt-hero-copy">
          <p className="nt-mono">
            CULT. STUDY 002 / SELF-INITIATED
            <br />
            FRAGRANCE / BEAUTY / CULTURE
          </p>
          <h1>NOCT.</h1>
          <p className="nt-hero-tagline">FRAGRANCE FOR AFTER DARK.</p>
        </div>
        <p className="nt-hero-time nt-mono">
          02:13 / AFTER DARK
          <br />
          CAMPAIGN TIME
        </p>
      </header>
      <div className="nt-disclosure nt-pad">
        <p>{studyDisclosure}</p>
        <span className="nt-mono">POSITION → DESIRE → COMMERCE</span>
      </div>
      <section className="nt-category nt-pad" data-nt-hour="22:41">
        <Label n="01">THE CATEGORY</Label>
        <div className="nt-category-layout">
          <div
            className="nt-category-language"
            aria-label="Interchangeable fragrance language"
          >
            SEDUCTIVE.
            <br />
            MYSTERIOUS.
            <br />
            TIMELESS.
            <br />
            IRRESISTIBLE.
          </div>
          <div>
            <h2 className="nt-display" data-nt-reveal="clip">
              EVERY
              <br />
              FRAGRANCE
              <br />
              SAYS THE
              <br />
              SAME THING.
            </h2>
            <div className="nt-copy">
              <p>
                Luxury fragrance is saturated with abstraction: desire, mystery,
                seduction, confidence. The language changes. The promise rarely
                does.
              </p>
              <p>
                NOCT. needed a more specific territory. Not another fragrance
                about attraction. A fragrance about{' '}
                <em>when attraction changes.</em>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="nt-position nt-pad" data-nt-hour="23:07">
        <Label n="02">THE POSITION</Label>
        <p className="nt-position-lead">
          NOCT. DOESN’T
          <br />
          SELL A SCENT.
        </p>
        <h2 className="nt-display">
          IT SELLS THE HOUR
          <br />
          AFTER THE RULES
          <br />
          <span>CHANGE.</span>
        </h2>
        <div className="nt-position-foot">
          <p>
            Daytime identity is public.
            <br />
            Nighttime identity is chosen.
            <br />
            NOCT. occupies that transition.
          </p>
          <p>
            Anticipation. Anonymity. Heat. The smell of another person on
            clothing the next morning. A specific cultural moment gives the
            brand a reason to exist beyond another promise of seduction.
          </p>
        </div>
        <dl className="nt-strategy-fields">
          {[
            ['Category', 'Fine fragrance'],
            ['Audience', 'Culture-aware adults / 25–44'],
            ['Tension', 'Luxury fragrance feels interchangeable'],
            ['Cultural territory', 'After-hours identity'],
            ['Position', 'Fragrance for after dark'],
            ['Brand behaviour', 'Controlled / intimate / unresolved'],
          ].map(([a, b]) => (
            <div key={a}>
              <dt>{a}</dt>
              <dd>{b}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="nt-scent nt-pad" id="noct-scent" data-nt-hour="00:46">
        <Label n="03">THE SCENT AS STORY</Label>
        <ScentTimeline />
      </section>
      <section className="nt-identity nt-pad" data-nt-hour="02:13">
        <Label n="04">IDENTITY SYSTEM</Label>
        <div className="nt-identity-heading">
          <h2>NOCT.</h2>
          <p className="nt-mono">
            ONE NAME.
            <br />A PRECISE SET OF TRACES.
          </p>
        </div>
        <div className="nt-identity-spread">
          <div className="nt-specimen">
            <div className="nt-identity-marks">
              <span className="nt-abbrev">N.</span>
              <p className="nt-mono">
                WORDMARK / AVATAR
                <br />
                BATCH / TIMESTAMP
                <br />
                SCENT / FORMAT
              </p>
            </div>
            <div className="nt-bottle-label">
              <strong>NOCT.</strong>
              <span>
                EAU DE PARFUM
                <br />
                50 ML
                <br />
                BATCH 0213
                <br />
                TORONTO
              </span>
            </div>
            <div className="nt-palette" aria-label="NOCT palette">
              {['Void', 'Bone', 'Smoke', 'Oxblood'].map((s, i) => (
                <span key={s} className={`nt-swatch-${i}`}>
                  {s}
                </span>
              ))}
            </div>
            <p className="nt-note">
              A consistent grammar across the bottle, carton, sample, tissue and
              shipping insert. The batch is a fictional design identifier, not a
              manufactured run.
            </p>
          </div>
          <figure data-nt-reveal="photo">
            <NoctImage
              name="identity"
              alt="NOCT. black bottle, carton, sample vial, bone sample card and shipping package arranged on scratched silver."
              sizes="(max-width:768px) 100vw, 60vw"
            />
            <figcaption className="nt-mono">
              LABEL / CARTON / DISCOVERY / DISPATCH
            </figcaption>
          </figure>
        </div>
        <div className="nt-paper-trail">
          <div className="nt-sample-card">
            <span className="nt-mono">SAMPLE / 0213</span>
            <strong>NOCT.</strong>
            <p>
              2:13 AM.
              <br />
              STILL ON YOUR SKIN.
            </p>
          </div>
          <div className="nt-receipt">
            <p className="nt-mono">NOCT. / RECEIPT SPECIMEN</p>
            <dl>
              <div>
                <dt>Format</dt>
                <dd>EAU DE PARFUM / 50 ML</dd>
              </div>
              <div>
                <dt>Batch</dt>
                <dd>0213</dd>
              </div>
              <div>
                <dt>Order / price</dt>
                <dd>CONCEPT ONLY / —</dd>
              </div>
            </dl>
            <p className="nt-note">
              The same information hierarchy follows the object all the way to
              the customer.
            </p>
          </div>
          <p className="nt-insert">
            FOR THE HOURS
            <br />
            YOU DON’T
            <br />
            EXPLAIN.
          </p>
        </div>
      </section>
      <section className="nt-object" data-nt-hour="02:00">
        <Label n="05">THE OBJECT</Label>
        <ObjectStudy />
      </section>
      <section className="nt-campaign" data-nt-hour="02:13">
        <div className="nt-pad">
          <Label n="06">CAMPAIGN</Label>
          <h2 className="nt-display" data-nt-reveal="clip">
            THE NIGHT
            <br />
            HAS A SCENT.
          </h2>
        </div>
        <figure className="nt-posting" data-nt-reveal="photo">
          <NoctImage
            name="posting"
            alt="NOCT. night street posters with the campaign line 02:13 / Still on your skin."
          />
          <figcaption className="nt-mono">
            02:13 / STILL ON YOUR SKIN. — WILD POSTING CONCEPT
          </figcaption>
        </figure>
        <div className="nt-campaign-fragments nt-pad">
          <div className="nt-time-poster">
            <span className="nt-mono">22:41 / SOCIAL · DISPLAY</span>
            <p>
              YOU SAID
              <br />
              ONE DRINK.
            </p>
            <strong>NOCT.</strong>
          </div>
          <figure>
            <NoctImage
              name="street"
              alt="Wet city pavement reflecting a passing light late at night."
              sizes="(max-width:768px) 100vw, 55vw"
            />
            <figcaption className="nt-mono">
              08:12 / THE IMAGE LEAVES. THE NAME STAYS.
            </figcaption>
          </figure>
        </div>
        <div className="nt-campaign-rationale nt-pad">
          <p className="nt-mono">TIME IS THE CAMPAIGN DEVICE.</p>
          <p>
            One hour becomes recognisable across a poster, a social crop and a
            short film. The object anchors the image; the time anchors the
            memory. Each execution keeps enough product clarity to lead
            somewhere useful.
          </p>
        </div>
      </section>
      <section className="nt-film-section nt-pad" data-nt-hour="03:44">
        <Label n="07">THE FILM</Label>
        <div className="nt-film-intro">
          <h2 className="nt-display">
            A NIGHT,
            <br />
            RECONSTRUCTED.
          </h2>
          <p>
            No complete narrative.
            <br />
            Fragments. Door close. Traffic.
            <br />
            Fabric. Bass through walls.
          </p>
        </div>
        <FilmSequence />
        <p className="nt-film-end">
          NOCT.<span>FRAGRANCE FOR AFTER DARK.</span>
        </p>
      </section>
      <section className="nt-digital nt-pad" data-nt-hour="02:13">
        <Label n="08">DIGITAL EXPERIENCE</Label>
        <h2 className="nt-display">
          DESIRE FIRST.
          <br />
          COMMERCE SECOND.
          <br />
          <span>FRICTION NEVER.</span>
        </h2>
        <div className="nt-digital-intro">
          <p>{study.experience.copy}</p>
          <p>
            The scent cannot travel through a screen. The experience must
            translate it: character, proposed notes and format, then a
            lower-commitment discovery path. Useful information belongs beside
            the decision.
          </p>
        </div>
        <Storefront />
      </section>
      <section className="nt-search nt-pad">
        <Label n="09">SEARCH + DISCOVERY</Label>
        <div className="nt-search-layout">
          <h2>
            CULTURE
            <br />
            CREATES
            <br />
            DEMAND.
            <br />
            <span>
              SEARCH
              <br />
              CAPTURES IT.
            </span>
          </h2>
          <div>
            <p>
              Desire creates the question. The destination should answer it.
            </p>
            <ol>
              {[
                ['Night fragrance', 'Product story', '#noct-store'],
                ['Evening perfume', 'Occasion / campaign', '#noct-scent'],
                ['Smoky unisex fragrance', 'Character & notes', '#noct-scent'],
                [
                  'Iris incense fragrance',
                  'Olfactory architecture',
                  '#noct-scent',
                ],
                [
                  'Long-lasting evening fragrance',
                  'Evidence-led wearing guide',
                  '#noct-scent',
                ],
                [
                  'Luxury fragrance discovery set',
                  'Sample / first encounter',
                  '#noct-store',
                ],
              ].map(([q, d, h]) => (
                <li key={q}>
                  <a href={h}>
                    <span>{q}</span>
                    <span aria-hidden="true">↗</span>
                    <small>{d}</small>
                  </a>
                </li>
              ))}
            </ol>
            <p className="nt-note">
              Research territories, not verified opportunities. Keyword volumes,
              difficulty and demand would be validated before launch. Longevity
              queries require substantiated product testing; no wear-time,
              ranking or traffic claim is made here.
            </p>
          </div>
        </div>
      </section>
      <section className="nt-launch nt-pad">
        <Label n="10">LAUNCH ARCHITECTURE</Label>
        <div className="nt-launch-heading">
          <h2 className="nt-display">
            FROM A FEELING
            <br />
            TO A FIRST ORDER.
          </h2>
          <p className="nt-note">
            Each stage has a different job.
            <br />
            The handoffs make it one launch.
          </p>
        </div>
        <ol className="nt-launch-map">
          {launchStages.map(([name, channels, purpose], i) => (
            <li key={name}>
              <span className="nt-mono">
                0{i + 1} / <span aria-hidden="true">→</span>
              </span>
              <h3>{name}</h3>
              <p className="nt-mono">{channels}</p>
              <p>{purpose}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="nt-media nt-pad">
        <Label n="11">MEDIA</Label>
        <h2>
          DON’T ADVERTISE PERFUME.
          <br />
          <strong>ENGINEER RECALL.</strong>
        </h2>
        <div className="nt-media-layout">
          <figure>
            <NoctImage
              name="corridor"
              alt="An empty hotel corridor seen through chrome elevator doors."
              sizes="(max-width:768px) 100vw, 35vw"
            />
            <figcaption className="nt-mono">
              CONTEXT IS PART OF THE CREATIVE.
            </figcaption>
          </figure>
          <div className="nt-media-notes">
            {mediaChannels.map(([name, copy], i) => (
              <article key={name}>
                <span className="nt-mono">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="nt-media-principle">
          Separate creative testing from audience expansion. Retarget only
          eligible, consented audiences; exclude purchasers where appropriate
          and control frequency. A beautiful film is a hypothesis, not evidence
          of sales.
        </p>
      </section>
      <section className="nt-email nt-pad">
        <Label n="12">EMAIL / LIFECYCLE</Label>
        <NightShift />
      </section>
      <section className="nt-measurement nt-pad">
        <Label n="13">MEASUREMENT</Label>
        <h2 className="nt-display">
          DESIRE IS SOFT.
          <br />
          ITS EFFECTS
          <br />
          <span>ARE NOT.</span>
        </h2>
        <div className="nt-measurement-intro">
          <p>
            No performance figures are reported. NOCT. is a self-initiated
            concept study; the business and brief are fictional.
          </p>
          <p className="nt-note">
            Establish the baseline, attribution rules and decision thresholds
            before launch. Define success; do not manufacture it.
          </p>
        </div>
        <div className="nt-measure-list">
          {measurement.map(([name, definition], i) => (
            <details key={name}>
              <summary>
                <span className="nt-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{name}</span>
                <span className="nt-metric-dash">—</span>
                <small>DEFINED BEFORE LAUNCH</small>
                <span className="nt-detail-symbol" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{definition}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="nt-system nt-pad">
        <Label n="14">THE SYSTEM</Label>
        <ol>
          {[
            'Brand',
            'Creative',
            'Attention',
            'Discovery',
            'Search',
            'Commerce',
            'CRM',
            'Measurement',
          ].map((n, i) => (
            <li key={n}>
              <span className="nt-mono">0{i + 1}</span>
              <strong>{n}</strong>
              {i < 7 && <span aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
        <p>
          A market position. A cultural territory. A visual world. A demand
          system and a commercial experience. One product, connected from the
          first impression to the next purchase.
        </p>
      </section>
      <section className="nt-closing" data-nt-hour="08:12">
        <NoctImage
          name="morning"
          alt="NOCT. bottle left beside the bed at first light."
        />
        <div className="nt-closing-copy">
          <Label n="15">THE TRACE</Label>
          <p>
            SOME BRANDS
            <br />
            ASK FOR ATTENTION.
            <br />
            <strong>OTHERS LEAVE A TRACE.</strong>
          </p>
          <h2>NOCT.</h2>
          <p className="nt-mono">
            FRAGRANCE FOR AFTER DARK.
            <br />
            CULT. STUDY 002 / SELF-INITIATED CONCEPT
          </p>
        </div>
      </section>
      <div className="nt-cult-actions nt-pad">
        <Action href="/contact/?engagement=Build">
          Build something worth following
        </Action>
        <Action href="/work/" secondary>
          All CULT. studies
        </Action>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
