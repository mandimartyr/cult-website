import Image from 'next/image';
import type { Study } from '@/lib/studies';
import { StudyImage } from '@/components/cult/portfolio';

type Frame = {
  src: string;
  alt: string;
  caption: string;
  kind: 'feed' | 'story' | 'ooh';
  width?: number;
  height?: number;
};

const frames: Frame[] = [
  {
    src: '/studies/vial-01-hero-glovevial-1536.webp',
    alt: 'VIAL hero glove holding sealed vial.',
    caption: '01 / HERO GLOVE · FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-02-stamped-label-batch004a-1536.webp',
    alt: 'VIAL stamped label batch 004A.',
    caption: '02 / STAMP 004A · FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-03-batchdrop-launch-960.webp',
    alt: 'VIAL Batch Drop launch frame.',
    caption: '03 / BATCH DROP LAUNCH · FEED',
    kind: 'feed',
    width: 960,
    height: 640,
  },
  {
    src: '/studies/vial-04-evidence-teaser-007c-1536.webp',
    alt: 'VIAL evidence teaser 007C.',
    caption: '04 / EVIDENCE 007C · FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-05-stockist-press-1536.webp',
    alt: 'VIAL stockist and press kit.',
    caption: '05 / STOCKIST PRESS · FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-hero-glove-1080x1080-1536.webp',
    alt: 'VIAL hero glove Meta 1:1.',
    caption: '06 / HERO GLOVE · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-stamp-004a-1080x1080-1536.webp',
    alt: 'VIAL stamp 004A Meta 1:1.',
    caption: '07 / STAMP 004A · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-batchdrop-window-1080x1080-1536.webp',
    alt: 'VIAL batch drop window Meta 1:1.',
    caption: '08 / BATCH DROP WINDOW · 1080×1080 FEED',
    kind: 'feed',
  },
  {
    src: '/studies/vial-hero-glove-1080x1350-1536.webp',
    alt: 'VIAL hero glove Meta 4:5 story.',
    caption: '09 / HERO GLOVE · 1080×1350 STORY',
    kind: 'story',
  },
  {
    src: '/studies/vial-stamp-004a-1080x1350-1536.webp',
    alt: 'VIAL stamp 004A Meta 4:5 story.',
    caption: '10 / STAMP 004A · 1080×1350 STORY',
    kind: 'story',
  },
  {
    src: '/studies/vial-batchdrop-window-1080x1350-1536.webp',
    alt: 'VIAL batch drop window Meta 4:5 story.',
    caption: '11 / BATCH DROP WINDOW · 1080×1350 STORY',
    kind: 'story',
  },
];

/** Vial ads gallery — every numbered frame + Meta 1:1 / 4:5 exports. */
export function VialAds({ study }: { study: Study }) {
  return (
    <section id="vial-ads" className="vi-ads vi-pad">
      <div className="vi-section-heading">
        <div>
          <p className="vi-mono">05B / MADE FOR THE FEED</p>
          <h2>
            BATCH DROP.
            <br />
            <em>FULL SET.</em>
          </h2>
        </div>
        <p>
          All on-disk VIAL. creatives — 01–05 board frames plus 1080×1080 feed
          and 1080×1350 story exports. Mockups only; no live results.
        </p>
      </div>

      <div className="vi-ad-grid">
        <figure className="vi-ooh">
          <div className="vi-ooh-frame">
            <StudyImage study={study} application sizes="(max-width:960px) 100vw, 50vw" />
          </div>
          <figcaption>00 / APPLICATION · CAMPAIGN KEY</figcaption>
        </figure>

        {frames.map((frame) => {
          const isStory = frame.kind === 'story';
          return (
            <figure
              className={isStory ? 'vi-story' : 'vi-feed'}
              key={frame.src}
            >
              {!isStory && (
                <div className="vi-feed-chrome">
                  <b>V/</b>
                  <span>
                    vial.batch
                    <small>Campaign concept</small>
                  </span>
                  <span aria-hidden="true">•••</span>
                </div>
              )}
              <div className={isStory ? 'vi-story-frame' : 'vi-feed-frame'}>
                {isStory && (
                  <div className="vi-story-progress" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={frame.width ?? 1536}
                  height={frame.height ?? (isStory ? 1920 : 1024)}
                  sizes={
                    isStory
                      ? '(max-width:960px) 80vw, 25vw'
                      : '(max-width:960px) 100vw, 33vw'
                  }
                />
              </div>
              <figcaption>{frame.caption}</figcaption>
            </figure>
          );
        })}
      </div>

      <p className="vi-note vi-mono" style={{ marginTop: 28 }}>
        DESIGN MOCKUPS / NOT LIVE POSTS OR REPORTED CAMPAIGN RESULTS
      </p>
    </section>
  );
}
