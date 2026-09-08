import { worlds, engagements, founderCopy, navigation } from '@/lib/content';
import { Action, Brand, Period } from './brand';
import { FilmControl } from './media';
import Link from 'next/link';
import { PrintArt } from './print-art';
export function Problem() {
  return (
    <section className="section problem print-opener home-problem" aria-labelledby="problem-title">
      <div className="opener-art" aria-hidden="true"><PrintArt name="connect-thinking-hero" priority /></div>
      <p className="label">01 / Connect the thinking</p>
      <p className="opener-prelude">Your marketing has a pulse.</p>
      <h2 id="problem-title">Give it<br /><em>a brain.</em></h2>
      <div className="opener-message">
        <p>Ads running. Content shipping. Budget moving.<br />But is any of it working together?</p>
        <p>CULT. connects strategy, creative and performance around one commercial goal. Preference is built—not bought.</p>
      </div>
      <div className="opener-system" aria-label="One connected marketing system">
        <span>One strategy</span><span aria-hidden="true">↗</span><span>Every channel</span><span aria-hidden="true">↗</span><strong>Actual direction.</strong>
      </div>
    </section>
  );
}
export function Stories() {
  return (
    <div className="stories">
      {worlds.map((w) => (
        <section
          key={w.id}
          id={w.id}
          className={`story world-${w.id}`}
          aria-labelledby={`${w.id}-title`}
        >
          <div className="story-media"><PrintArt name={w.id} /></div>
          <p className="label story-label">
            <span>{w.number}</span> / {w.name}
          </p>
          <div className="story-content">
            <h2 id={`${w.id}-title`}>
              <Period text={w.headline} />
            </h2>
            <div className="story-copy">
              {w.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="story-bottom">
            <span className="still-caption">{w.name} / CULT. Print study</span>
            <span className="story-count">
              <span className="accent">{w.number}</span> — 06
            </span>
          </div>
        </section>
      ))}
    </div>
  );
}
export function Thesis() {
  return (
    <section className="section thesis thesis-bridge" aria-labelledby="thesis-title">
      <div className="thesis-art" aria-hidden="true"><PrintArt name="conversion" /><div className="thesis-eye"><PrintArt name="creative" /></div></div>
      <p className="label">Attention can be bought.</p>
      <h2 id="thesis-title">
        <span>Preference</span>
        <span>has to be</span>
        <span>
          built<span className="accent">.</span>
        </span>
      </h2>
      <p className="thesis-bridge-note">
        That is the commercial job. Audit finds the break. Build fixes it. Partner keeps the system moving.
      </p>
      <a className="thesis-bridge-link" href="#engagements">
        How to hire CULT. →
      </a>
    </section>
  );
}
export function Engagements({ heading = true }: { heading?: boolean }) {
  return (
    <section
      id="engagements"
      className="section engagements"
      aria-label="How to hire CULT."
    >
      {heading && (
        <div className="engagement-intro">
          <p className="label">04 / How to hire CULT.</p>
          <h2>
            <Period text="Three ways to start." />
          </h2>
          <p>
            You do not need to know which channel is broken before you call us.
            <br />
            You need to know what you want to change.
          </p>
        </div>
      )}
      <div className="engagement-ways">
        {engagements.map((e) => (
          <article className={`engagement engagement-${e.image}`} key={e.name}>
            <div className="engagement-media">
              <PrintArt name={e.image === 'audit' ? 'strategy' : e.image === 'build' ? 'conversion' : 'measurement'} />
            </div>
            <div className="engagement-title">
              <p className="engagement-number">{e.number}</p>
              <h3>
                <Period text={`${e.name}.`} />
              </h3>
            </div>
            <div className="engagement-decision">
              <p className="engagement-lead">{e.lead}</p>
              <p className="engagement-price">{e.price}</p>
              <p className="engagement-copy">{e.copy}</p>
              <div className="engagement-scope">
                <p className="label">{e.scopeLabel}</p>
                <p>{e.scope}</p>
              </div>
              <p className="engagement-deliverable">{e.deliverable}</p>
              {e.note && <p className="engagement-note">{e.note}</p>}
              <Action href={`/contact/?engagement=${e.name}`} secondary>
                {e.cta}
              </Action>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export { Portfolio as WorkIndex } from './portfolio';
export function Founder({ about = false }: { about?: boolean }) {
  return (
    <section className="section founder" aria-labelledby="agency-close-title">
      <div>
        <p className="label">06 / Cult Media House</p>
        <h2 id="agency-close-title">
          <strong>Loud. Weird.</strong>{' '}
          <span>
            <Period text="Worth following." />
          </span>
        </h2>
      </div>
      <div className="founder-copy">
        {founderCopy.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="actions">
          {!about && (
            <Action href="/about/" secondary>
              About CULT.
            </Action>
          )}
          <Action href="/contact/">Start a project</Action>
        </div>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="section final-cta print-close" aria-labelledby="contact-invitation">
      <div className="close-art" aria-hidden="true"><PrintArt name="measurement" /></div>
      <p className="label">Your next move / Starts here</p>
      <h2 id="contact-invitation">Make your<br />next move<br /><em>count.</em></h2>
      <div className="close-invitation">
        <p>Bring the ambition. Bring the sticking point.<br />We’ll help you name the move that matters.</p>
        <Action href="/contact/">Start a project</Action>
        <span className="close-note">Clear problem. Honest conversation. Prices in CAD.</span>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer print-footer">
      <div className="footer-register"><span>Independent thinking. Connected execution.</span><span>Independent / Everywhere</span></div>
      <div className="footer-signature">
        <Link href="/" aria-label="CULT. home"><Brand large /></Link>
        <p>Built to be<br /><em>worth following.</em></p>
      </div>
      <nav className="footer-directory" aria-label="Footer">
        {navigation.map((n, i) => <Link key={n.href} href={n.href}><span>0{i + 1}</span>{n.name}<span aria-hidden="true">↗</span></Link>)}
      </nav>
      <div className="footer-colophon">
        <a href="mailto:hello@cultmedia.house">hello@cultmedia.house <span aria-hidden="true">↗</span></a>
        <FilmControl />
        <p>© 2026 Cult Media House</p>
        <p>Attention with somewhere to go.</p>
      </div>
    </footer>
  );
}
