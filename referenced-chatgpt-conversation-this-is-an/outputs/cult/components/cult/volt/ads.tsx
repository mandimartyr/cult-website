import Image from 'next/image';
import Link from 'next/link';
import type { Study } from '@/lib/studies';
import { StudyImage } from '@/components/cult/portfolio';

const frames = [
  {
    src: '/studies/volt-keepalive-1536.webp',
    alt: 'VØLT keep-alive campaign frame.',
    caption: '01 / KEEP ALIVE · FEED FRAME',
    kind: 'feed' as const,
  },
  {
    src: '/studies/volt-festivals-1536.webp',
    alt: 'VØLT festivals temporary power frame.',
    caption: '02 / FESTIVALS · FEED FRAME',
    kind: 'feed' as const,
  },
];

/** Vølt ads gallery — contact sheet + named frames + application. */
export function VoltAds({ study }: { study: Study }) {
  return (
    <section id="volt-ads" className="vo-ads vo-pad">
      <div className="vo-section-heading">
        <div>
          <p className="vo-mono">05B / MADE FOR THE FEED</p>
          <h2>
            KEEP THE SET
            <br />
            <em>IN FRAME.</em>
          </h2>
        </div>
        <p>
          Contact sheet, keep-alive and festival frames plus application art —
          wired as feed, story and board concepts. No live spend claimed.
        </p>
      </div>

      <div className="vo-ad-grid">
        <figure className="vo-contact">
          <div className="vo-contact-frame">
            <Image
              src="/studies/volt-contact-sheet.png"
              alt="VØLT campaign contact sheet of temporary-power concepts."
              width={1920}
              height={1080}
              sizes="100vw"
              unoptimized
            />
          </div>
          <figcaption>00 / CONTACT SHEET · FULL CAMPAIGN BOARD</figcaption>
        </figure>

        {frames.map((frame) => (
          <figure className="vo-feed" key={frame.src}>
            <div className="vo-feed-chrome">
              <b>V/</b>
              <span>
                volt.power
                <small>Campaign concept</small>
              </span>
              <span aria-hidden="true">•••</span>
            </div>
            <div className="vo-feed-frame">
              <Image
                src={frame.src}
                alt={frame.alt}
                width={1536}
                height={1024}
                sizes="(max-width:960px) 100vw, 33vw"
              />
            </div>
            <figcaption>{frame.caption}</figcaption>
          </figure>
        ))}

        <figure className="vo-feed">
          <div className="vo-feed-chrome">
            <b>V/</b>
            <span>
              volt.power
              <small>Application</small>
            </span>
            <span aria-hidden="true">•••</span>
          </div>
          <div className="vo-feed-frame">
            <StudyImage study={study} application sizes="(max-width:960px) 100vw, 33vw" />
          </div>
          <figcaption>03 / APPLICATION · FEED STILL</figcaption>
        </figure>

        <figure className="vo-story">
          <div className="vo-story-frame">
            <div className="vo-story-progress" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="vo-type-ad" style={{ height: '100%', minHeight: 0 }}>
              <p className="vo-mono">VØLT. / STORY</p>
              <h3>
                SILENT
                <br />
                WHERE IT
                <br />
                <em>MATTERS.</em>
              </h3>
              <span className="cta">{study.adCTA}</span>
            </div>
          </div>
          <figcaption>04 / SILENT RUNNING · STORY CONCEPT</figcaption>
        </figure>

        <figure className="vo-ooh">
          <div className="vo-ooh-frame">
            <StudyImage study={study} sizes="(max-width:960px) 100vw, 50vw" />
          </div>
          <figcaption>05 / KEY ART · OOH / BOARD CONCEPT</figcaption>
        </figure>

        <figure className="vo-feed">
          <div className="vo-type-ad">
            <p className="vo-mono">06 / TYPE AD — 3AM TRIP</p>
            <h3>
              WHEN IT
              <br />
              TRIPS AT
              <br />
              <em>3AM.</em>
            </h3>
            <p>{study.emailSubject}</p>
            <Link className="cta" href="/contact/?engagement=Build">
              {study.adCTA} ↗
            </Link>
          </div>
          <figcaption>06 / SET LETTER · TYPE / FEED CONCEPT</figcaption>
        </figure>
      </div>

      <p className="vo-note vo-mono" style={{ marginTop: 28 }}>
        DESIGN MOCKUPS / NOT LIVE POSTS OR REPORTED CAMPAIGN RESULTS
      </p>
    </section>
  );
}
