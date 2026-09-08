import Image from 'next/image';
import { SpliceLogo } from './logo';
import { SpliceProgrammatic } from './programmatic';
import Link from 'next/link';
import type { Study } from '@/lib/studies';
import { nextStudy } from '@/lib/studies';
import { StudyImage, NextStudy } from '@/components/cult/portfolio';
import { SpliceDesk } from './interactions';
import { SpliceSocials } from './socials';
import './splice.css';
export function SpliceStudy({ study }: { study: Study }) {
  return (
    <main id="main" className="splice-page">
      <header className="sp-hero">
        <div className="sp-hero-art">
          <StudyImage study={study} priority sizes="100vw" />
        </div>
        <div className="sp-hero-register sp-mono">
          <span>CULT. STUDY / 006</span>
          <span>POST-PRODUCTION WITH TEETH</span>
        </div>
        <h1 className="sp-hero-logo">
          <SpliceLogo />
        </h1>
        <p className="sp-hero-line">
          <span>CUT UNTIL</span>
          <br />
          <em>IT HURTS.</em>
        </p>
        <div className="sp-hero-bottom">
          <p>
            A finishing house for work
            <br />
            that should never play safe.
          </p>
          <a href="#splice-social">
            Explore the campaign <span>↘</span>
          </a>
        </div>
      </header>
      <div className="sp-ticker" aria-hidden="true">
        <div>
          COLOUR / CUT / SOUND / NERVE / COLOUR / CUT / SOUND / NERVE / COLOUR /
          CUT / SOUND / NERVE /{' '}
        </div>
      </div>
      <section className="sp-intro sp-pad">
        <div>
          <p className="sp-mono">01 / THE PROJECT</p>
          <h2>
            THE LAST ROOM.
            <br />
            <em>THE FIRST IMPRESSION.</em>
          </h2>
        </div>
        <div>
          <p className="sp-lead">
            A boutique post-production concept with the attitude of a midnight
            screening.
          </p>
          <p>
            SPLICE brings colour, editorial and finishing into one sharp
            identity. CULT built the idea around a simple belief: the final pass
            should make the work more itself.
          </p>
          <dl className="sp-facts">
            <div>
              <dt>SECTOR</dt>
              <dd>Commercials / trailers / music videos</dd>
            </div>
            <div>
              <dt>SCOPE</dt>
              <dd>Identity / digital / campaign / social</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>Self-initiated concept. No client results claimed.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="sp-identity sp-pad">
        <p className="sp-mono">02 / THE IDENTITY</p>
        <div className="sp-identity-top">
          <h2>
            NOT POLISHED.
            <br />
            <em>PRECISE.</em>
          </h2>
          <p>
            Your elongated SPLICE wordmark, with yellow, cream and pink-dot
            variations. Hard cuts through the grid. Print grain, film fragments
            and a palette borrowed from the midnight movies.
          </p>
        </div>
        <div className="sp-system">
          <div className="sp-logo-board">
            <Image
              src="/studies/splice-logo-sheet.png"
              alt="SPLICE original logo system: yellow, cream, and cream with a magenta dot, plus the compact italic wordmark."
              width={1536}
              height={1024}
              unoptimized
              sizes="(max-width: 600px) 100vw, 60vw"
            />
          </div>
          <div className="sp-swatches">
            <span>01 / VOID BLACK</span>
            <span>02 / ACID YELLOW</span>
            <span>03 / HOT PINK</span>
            <span>04 / PRINT STOCK</span>
          </div>
        </div>
      </section>
      <section className="sp-campaign">
        <div className="sp-campaign-image">
          <StudyImage study={study} application sizes="100vw" />
        </div>
        <div className="sp-campaign-type">
          <p className="sp-mono">03 / CAMPAIGN KEY VISUAL</p>
          <h2>
            GOOD ENOUGH
            <br />
            IS WHERE
            <br />
            <em>WE START.</em>
          </h2>
          <p>SPLICE. / THE FINAL CUT HAS A POINT OF VIEW.</p>
        </div>
      </section>
      <section id="splice-social" className="sp-social sp-pad">
        <div className="sp-section-heading">
          <div>
            <p className="sp-mono">04 / MADE FOR THE FEED</p>
            <h2>
              STOP THE SCROLL.
              <br />
              <em>HOLD THE FRAME.</em>
            </h2>
          </div>
          <p>
            Six campaign ideas. Built for the feed, the story, the brief and the
            list.
          </p>
        </div>
        <a className="sp-programmatic-jump" href="#splice-programmatic">
          See the programmatic ad set ↓
        </a>
        <SpliceSocials />
        <p className="sp-mono sp-concept-note">
          DESIGN MOCKUPS / NOT LIVE POSTS OR REPORTED CAMPAIGN RESULTS
        </p>
      </section>
      <SpliceProgrammatic />
      <section className="sp-digital sp-pad">
        <div className="sp-section-heading">
          <div>
            <p className="sp-mono">06 / DIGITAL DIRECTION</p>
            <h2>
              STEP INTO
              <br />
              <em>THE SUITE.</em>
            </h2>
          </div>
          <p>
            A working visual study of the finishing desk. Choose a pass to
            change the frame and explore the thinking behind it.
          </p>
        </div>
        <SpliceDesk />
      </section>
      <section className="sp-outreach sp-pad">
        <div className="sp-mail">
          <div className="sp-mono">
            CUT LETTER №01 / FROM THE FINISHING ROOM
          </div>
          <h3>
            THE CUT THAT
            <br />
            <em>STAYED SHARP.</em>
          </h3>
          <p>
            One decision from the finishing room. What changed. What stayed. Why
            it mattered.
          </p>
          <span className="sp-mail-signature">
            <SpliceLogo compact />
          </span>
          <span className="sp-mono">EMAIL ART DIRECTION / CONCEPT</span>
        </div>
        <div className="sp-outreach-copy">
          <p className="sp-mono">07 / BEYOND THE FIRST LOOK</p>
          <h2>
            MAKE THE NEXT
            <br />
            <em>MOVE OBVIOUS.</em>
          </h2>
          <p>
            Campaigns point to the work. The work explains the approach. The
            brief captures the format, deadline and references needed for a
            useful conversation.
          </p>
          <ol>
            <li>
              <span>01</span>See the point of view.
            </li>
            <li>
              <span>02</span>Choose a finishing lane.
            </li>
            <li>
              <span>03</span>Bring a brief worth cutting.
            </li>
          </ol>
          <Link className="sp-link" href="/contact/?engagement=Build">
            Discuss a project like SPLICE ↗
          </Link>
        </div>
      </section>
      <div className="sp-end sp-mono">
        <span>END OF STUDY / 006</span>
        <Link href="/work/#case-studies">BACK TO ALL WORK ↑</Link>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
