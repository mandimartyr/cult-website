/* eslint-disable next/no-img-element -- Static homepage hero; single frame with black left for type. */
import { whoItsFor } from '@/lib/content';
import { Action } from './brand';

/** Locked hero from Master Giallo Art — black left, no type in the plate. */
const HERO_SRC = '/print/home-hero-1536.webp';
const HERO_SRCSET =
  '/print/home-hero-480.webp 480w, /print/home-hero-960.webp 960w, /print/home-hero-1536.webp 1536w';

export function Hero() {
  return (
    <>
    <section className="hero print-hero hero-locked cult-hero">
      <div className="print-hero-art" aria-hidden="true">
        <div className="print-art-layer is-active">
          <img
            src={HERO_SRC}
            srcSet={HERO_SRCSET}
            sizes="100vw"
            width={1536}
            height={1024}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="print-hero-veil" />
      </div>
      <div className="hero-content">
        <h1 aria-label="Make attention matter.">
          <span aria-hidden="true">MAKE</span>
          <span aria-hidden="true">ATTENTION</span>
          <span aria-hidden="true">MATTER.</span>
        </h1>
      </div>
    </section>
      <div className="cult-hero-below">
        <p className="hero-description">
          {whoItsFor}
          <br />
          <span className="hero-cad">
            Strategy, creative and performance—priced in CAD.
          </span>
        </p>
        <div className="actions">
          <Action href="/contact/">Start a project</Action>
          <Action href="/#engagements" secondary>
            Three ways to start
          </Action>
        </div>
      </div>
    </>
  );
}
