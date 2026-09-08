import Image from 'next/image';
import type { Study } from '@/lib/studies';
import { StudyImage } from '@/components/cult/portfolio';

type Frame = {
  src: string;
  alt: string;
  caption: string;
  kind: 'feed' | 'story' | 'ooh';
};

const frames: Frame[] = [
  {
    src: '/studies/latch-01-peephole-who-gets-in-1080x1080-1536.webp',
    alt: 'LATCH. peephole eye Meta 1:1 — WHO GETS IN.',
    caption: '01 / PEEPHOLE · WHO GETS IN · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/latch-02-glove-latch-reject-1080x1080-1536.webp',
    alt: 'LATCH. glove on latch with REJECT stamp Meta 1:1.',
    caption: '02 / GLOVE · LATCH · REJECT · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/latch-03-reject-stamped-1080x1080-1536.webp',
    alt: 'LATCH. REJECT stamped frame Meta 1:1.',
    caption: '03 / REJECT STAMPED · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/latch-01-peephole-who-gets-in-1080x1350-1536.webp',
    alt: 'LATCH. peephole eye Meta 4:5 story.',
    caption: '04 / PEEPHOLE · WHO GETS IN · 1080×1350 STORY',
    kind: 'story',
  },
  {
    src: '/studies/latch-02-glove-latch-reject-1080x1350-1536.webp',
    alt: 'LATCH. glove on latch Meta 4:5 story.',
    caption: '05 / GLOVE · LATCH · REJECT · 1080×1350 STORY',
    kind: 'story',
  },
  {
    src: '/studies/latch-03-reject-stamped-1080x1350-1536.webp',
    alt: 'LATCH. REJECT stamped Meta 4:5 story.',
    caption: '06 / REJECT STAMPED · 1080×1350 STORY',
    kind: 'story',
  },
];

/** Latch ads gallery — Master Giallo Meta pack + key art OOH. */
export function LatchAds({ study }: { study: Study }) {
  return (
    <section id="latch-ads" className="la-ads la-pad">
      <div className="la-section-heading">
        <div>
          <p className="la-mono">05B / MADE FOR THE FEED</p>
          <h2>
            WHO GETS IN.
            <br />
            <em>FULL SET.</em>
          </h2>
        </div>
        <p>
          Three WHITEOUT concepts × feed (1080×1080) and story (1080×1350), plus
          key art as OOH. Mockups only; no live results.
        </p>
      </div>

      <div className="la-ad-grid">
        {frames.map((frame) =>
          frame.kind === 'story' ? (
            <figure key={frame.src} className="la-story">
              <div className="la-story-frame">
                <div className="la-story-progress" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={1080}
                  height={1350}
                  unoptimized
                  className="la-ad-img"
                />
              </div>
              <figcaption>{frame.caption}</figcaption>
            </figure>
          ) : (
            <figure key={frame.src} className="la-feed">
              <div className="la-feed-chrome">
                <b>L/</b>
                <span>
                  latch.system
                  <small>Campaign concept</small>
                </span>
                <span aria-hidden="true">•••</span>
              </div>
              <div className="la-feed-frame">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={1080}
                  height={1080}
                  unoptimized
                  className="la-ad-img"
                />
              </div>
              <figcaption>{frame.caption}</figcaption>
            </figure>
          ),
        )}

        <figure className="la-ooh">
          <div className="la-ooh-frame">
            <StudyImage study={study} sizes="(max-width:960px) 100vw, 50vw" />
          </div>
          <figcaption>07 / KEY ART AS OOH · SELF-INITIATED CONCEPT</figcaption>
        </figure>

        <figure className="la-ooh">
          <div className="la-ooh-frame">
            <StudyImage
              study={study}
              application
              sizes="(max-width:960px) 100vw, 50vw"
            />
          </div>
          <figcaption>08 / APPLICATION STILL · SELF-INITIATED CONCEPT</figcaption>
        </figure>
      </div>

      <p className="la-note la-mono" style={{ marginTop: 28 }}>
        DESIGN MOCKUPS / NOT LIVE POSTS OR REPORTED CAMPAIGN RESULTS · {study.adLine}
      </p>
    </section>
  );
}
