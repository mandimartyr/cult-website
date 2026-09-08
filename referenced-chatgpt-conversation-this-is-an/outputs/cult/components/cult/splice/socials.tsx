import { SpliceLogo } from './logo';
import Image from 'next/image';
import Link from 'next/link';
import { SpliceCarousel } from './interactions';
export function SpliceSocials() {
  return (
    <>
      <div className="sp-ad-grid">
        <figure className="sp-feed">
          <div className="sp-feed-top">
            <b>S/</b>
            <span>
              splice.studio<small>Campaign concept</small>
            </span>
            <span>•••</span>
          </div>
          <div className="sp-feed-art sp-softened">
            <span className="sp-mono">THE CLIENT NOTES ARE IN.</span>
            <h3>
              WHAT
              <br />
              GOT
              <br />
              <em>SOFTENED</em>
            </h3>
            <strong className="sp-social-logo">
              <SpliceLogo compact />
            </strong>
          </div>
          <div className="sp-feed-caption">
            <span aria-hidden="true">♡ &nbsp; ◯ &nbsp; ↗</span>
            <p>
              <b>splice.studio</b> What did the client make you dull last time?
            </p>
          </div>
          <figcaption>01 / WHAT GOT SOFTENED · FEED AD</figcaption>
        </figure>
        <figure className="sp-pulse">
          <div className="sp-pulse-art">
            <span className="sp-mono">SPLICE. / SIGNAL STILL LIVE</span>
            <h3>
              PROTECT
              <br />
              THE <em>PULSE</em>
            </h3>
            <div className="sp-crt" aria-hidden="true">
              <div>●</div>
              <span>SPLICE / MONITOR 01</span>
            </div>
            <p>
              SOFT IS A<br />
              DELIVERY FORMAT.
            </p>
            <strong className="sp-social-logo">
              <SpliceLogo compact />
            </strong>
          </div>
          <figcaption>02 / PROTECT THE PULSE · CAMPAIGN TILE</figcaption>
        </figure>
        <figure className="sp-story">
          <div className="sp-story-art sp-last-room">
            <div className="sp-story-progress" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <p className="sp-mono">SPLICE. / FINAL PASS</p>
            <h3>
              LAST ROOM
              <br />
              BEFORE
              <br />
              <em>THE WORLD</em>
            </h3>
            <div className="sp-story-end">
              <span>COLOUR / EDIT / FINISH</span>
              <strong>PROTECT WHAT MAKES IT YOURS.</strong>
            </div>
          </div>
          <figcaption>03 / LAST ROOM BEFORE THE WORLD · STORY</figcaption>
        </figure>
        <figure className="sp-scope">
          <div className="sp-scope-art">
            <span className="sp-mono">PROJECT INTAKE / OPEN THE SUITE</span>
            <h3>
              <span>SCOPE</span>
              <br />
              <span>THE CUT</span>
            </h3>
            <div className="sp-scope-fields">
              <span>01 / THE FORMAT</span>
              <span>02 / THE DEADLINE</span>
              <span>03 / THE ROUGH CUT</span>
            </div>
            <Link href="/contact/?engagement=Build">BRING THE BRIEF ↗</Link>
            <strong className="sp-social-logo">
              <SpliceLogo compact />
            </strong>
          </div>
          <figcaption>04 / SCOPE THE CUT · INTAKE AD</figcaption>
        </figure>
        <figure className="sp-choice">
          <div className="sp-choice-art">
            <span className="sp-mono">TWO FRAMES. ONE CHOICE.</span>
            <h3>
              BEFORE /<br />
              AFTER
              <br />
              <em>IS A LIE</em>
            </h3>
            <div className="sp-two-frames" aria-hidden="true">
              <div>
                <span>FRAME 01</span>
              </div>
              <div>
                <span>FRAME 02</span>
              </div>
            </div>
            <p>PACE IS THE PRODUCT.</p>
            <strong className="sp-social-logo">
              <SpliceLogo compact />
            </strong>
          </div>
          <figcaption>
            05 / BEFORE / AFTER IS A LIE · PAIRED FRAME AD
          </figcaption>
        </figure>
        <figure className="sp-letter">
          <SpliceCarousel />
          <figcaption>06 / CUT LETTER №01 · ZINE CAROUSEL</figcaption>
          <p className="sp-social-note">
            An editorial series for the email list. Explore the cover, the cut
            and the invitation with the arrows.
          </p>
        </figure>
      </div>
      <figure className="sp-contact-sheet">
        <div>
          <p className="sp-mono">CAMPAIGN SOURCE / YOUR SUPPLIED ARTWORK</p>
          <h3>THE CONTACT SHEET.</h3>
          <a
            href="/studies/splice-contact-sheet.png"
            target="_blank"
            rel="noreferrer"
          >
            View full-size artwork ↗
          </a>
        </div>
        <Image
          src="/studies/splice-contact-sheet.png"
          alt="SPLICE supplied campaign artwork with halftone eye, razor, celluloid and spiral CRT in yellow, black and magenta."
          width={1536}
          height={1024}
          unoptimized
          sizes="(max-width: 600px) 100vw, 60vw"
        />
      </figure>
    </>
  );
}
