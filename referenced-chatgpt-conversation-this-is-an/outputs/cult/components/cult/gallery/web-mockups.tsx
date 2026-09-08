/* oxlint-disable next/no-img-element -- Static artwork inside responsive design previews. */
'use client';
import { useState } from 'react';
const projects = [
  {
    name: 'MIDNIGHT CLUB',
    type: 'Independent cinema / Programme discovery',
    theme: 'cinema',
    label: '01 / FILM & CULTURE',
    title: 'GOOD FILMS.\nBAD DREAMS.',
    description:
      'A film programme with the impact of a theatrical poster. Loud type, clear dates and a direct route into the lineup.',
    action: 'View the programme',
    nav: 'SCREENINGS / THE CLUB / JOURNAL',
    detail: 'A programme you can scan.',
    items: [
      'FRI / 22:00 — The midnight selection',
      'SAT / 20:30 — Italian suspense',
      'SUN / 19:00 — The cult double bill',
    ],
  },
  {
    name: 'BLOOD LUST',
    type: 'Independent publishing / Book discovery',
    theme: 'publisher',
    label: '01 / BOOKS & EDITORIAL',
    title: 'BLOOD LUST.',
    description:
      'An uncompromising editorial launch: oversized type, a cinematic image strip and a direct route into the book.',
    action: 'Explore the edition',
    nav: 'THE BOOK / THE AUTHOR / EDITIONS',
    detail: 'One edition. A clear reading path.',
    items: [
      '01 / A cover-led introduction',
      '02 / A concise book description',
      '03 / Formats and availability together',
    ],
  },
  {
    name: 'CULT. STUDIO',
    type: 'Creative portfolio / Project discovery',
    theme: 'studio',
    label: '03 / DESIGN & DIGITAL',
    title: 'Independent.\nBy design.',
    description:
      'A portfolio that feels like the work it presents. Oversized headlines meet expressive collage and an easy-to-scan project index.',
    action: 'Explore the work',
    nav: 'WORK / APPROACH / CONTACT',
    detail: 'Independent thinking, on display.',
    items: [
      '01 / Look Again — Print & art direction',
      '02 / Break the Pattern — Campaign concept',
      '03 / Stay Strange — Visual identity exploration',
    ],
  },
];
export function WebMockups() {
  const [modes, setModes] = useState([false, false, false]);
  const [expanded, setExpanded] = useState([false, false, false]);
  return (
    <section className="cw-section cw-secondary" id="web-design" aria-labelledby="web-design-title">
      <div className="cw-heading cw-secondary-heading">
        <div>
          <p className="cg-label">SECONDARY / CRAFT · BRUTALIST WEB</p>
          <h2 id="web-design-title">
            Screen studies.
          </h2>
        </div>
        <p>
          Design demos—attitude on a screen. Secondary to the commercial
          studies above; not client results.
        </p>
      </div>
      {projects.slice(0, 2).map(
        (project, i) =>
          project.theme === 'publisher' && (
            <article
              className={'cw-project cw-' + project.theme}
              key={project.name}
            >
              <div className="cw-project-top">
                <div>
                  <p className="cg-label">{project.label}</p>
                  <h3>{project.name}</h3>
                </div>
                <div
                  className="cw-mode"
                  aria-label={`${project.name} preview size`}
                >
                  <button
                    aria-pressed={!modes[i]}
                    onClick={() =>
                      setModes(
                        modes.map((value, index) =>
                          index === i ? false : value,
                        ),
                      )
                    }
                  >
                    Desktop
                  </button>
                  <button
                    aria-pressed={modes[i]}
                    onClick={() =>
                      setModes(
                        modes.map((value, index) =>
                          index === i ? true : value,
                        ),
                      )
                    }
                  >
                    Mobile
                  </button>
                </div>
              </div>
              <div className="cw-stage">
                <div className={'cw-browser ' + (modes[i] ? 'is-mobile' : '')}>
                  <div className="cw-browser-bar">
                    <span aria-hidden="true">● ● ●</span>
                    <span>
                      {project.name.toLowerCase().replaceAll(' ', '-')} /
                      concept preview
                    </span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="cw-screen">
                    <div className="cw-nav">
                      <strong>{project.name}</strong>
                      <span>{project.nav}</span>
                    </div>
                    {i === 2 ? (
                      <div className="cw-studio-index">
                        <aside>
                          <b>C / 26</b>
                          <span>
                            ART DIRECTION
                            <br />
                            IDENTITY
                            <br />
                            DIGITAL
                          </span>
                          <span>
                            INDEPENDENT
                            <br />
                            DESIGN PRACTICE
                          </span>
                        </aside>
                        <div className="cw-index-body">
                          <div className="cw-index-intro">
                            <span>SELECTED OUTPUT / 001—003</span>
                            <h4>
                              Ideas into
                              <br />
                              <em>things.</em>
                            </h4>
                            <p>
                              Identity. Print. Digital.
                              <br />
                              Designed to be unmistakable.
                            </p>
                          </div>
                          {[
                            'Look Again',
                            'Break the Pattern',
                            'Stay Strange',
                          ].map((name, panel) => (
                            <div className="cw-index-row" key={name}>
                              <span className="cw-index-number">
                                0{panel + 1}
                              </span>
                              <div>
                                <h5>{name}</h5>
                                <p>
                                  {
                                    [
                                      'Art direction / Editorial',
                                      'Campaign / Print',
                                      'Identity / Digital',
                                    ][panel]
                                  }
                                </p>
                              </div>
                              <span
                                className="cg-art"
                                style={
                                  { '--panel': panel } as React.CSSProperties
                                }
                              >
                                <img
                                  src="/artwork/cult/look-again.png"
                                  alt={name + ' poster'}
                                  width={1536}
                                  height={1024}
                                  loading="lazy"
                                />
                              </span>
                              <span aria-hidden="true">↗</span>
                            </div>
                          ))}
                          <button
                            className="cw-index-button"
                            aria-expanded={expanded[i]}
                            aria-controls={`cw-detail-${i}`}
                            onClick={() =>
                              setExpanded(
                                expanded.map((value, index) =>
                                  index === i ? !value : value,
                                ),
                              )
                            }
                          >
                            The thinking behind the work <span>+</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="cw-layout">
                        <div className="cw-copy">
                          <span className="cw-eyebrow">
                            {i === 0
                              ? 'AFTER DARK / ON SCREEN'
                              : i === 1
                                ? 'MANDI MARTYR / BLOOD LUST'
                                : 'INDEPENDENT THINKING / IN FULL COLOUR'}
                          </span>
                          <h4>{project.title}</h4>
                          <p>
                            {i === 0
                              ? 'For the films you think about on the way home.'
                              : i === 1
                                ? 'By Mandi Martyr. Enter the world of Blood Lust.'
                                : 'Art direction, identity and digital experiences with something to say.'}
                          </p>
                          <button
                            className="cw-demo-button"
                            aria-expanded={expanded[i]}
                            aria-controls={`cw-detail-${i}`}
                            onClick={() =>
                              setExpanded(
                                expanded.map((value, index) =>
                                  index === i ? !value : value,
                                ),
                              )
                            }
                          >
                            {expanded[i]
                              ? 'Back to the introduction'
                              : project.action}
                            <span>↗</span>
                          </button>
                        </div>
                        <div className="cw-visual">
                          {i === 2 ? (
                            [0, 1, 2].map((panel) => (
                              <span
                                className="cg-art"
                                key={panel}
                                style={
                                  { '--panel': panel } as React.CSSProperties
                                }
                              >
                                <img
                                  src="/artwork/cult/look-again.png"
                                  alt={
                                    [
                                      'Look Again',
                                      'Break the Pattern',
                                      'Stay Strange',
                                    ][panel] + ' poster'
                                  }
                                  width={1536}
                                  height={1024}
                                  loading="lazy"
                                />
                              </span>
                            ))
                          ) : i === 1 ? (
                            <img
                              src="/artwork/cult/blood-lust-cover.jpg"
                              alt="User-supplied Blood Lust cover artwork"
                              width={784}
                              height={1168}
                              loading="lazy"
                            />
                          ) : (
                            <span
                              className="cg-art"
                              style={
                                {
                                  '--panel': i === 0 ? 0 : 2,
                                } as React.CSSProperties
                              }
                            >
                              <img
                                src="/artwork/cult/look-again.png"
                                alt={
                                  i === 0
                                    ? 'Look Again poster detail'
                                    : 'Stay Strange poster detail'
                                }
                                width={1536}
                                height={1024}
                                loading="lazy"
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <div
                      className="cw-demo-detail"
                      id={`cw-detail-${i}`}
                      hidden={!expanded[i]}
                    >
                      <h5>{project.detail}</h5>
                      {project.items.map((item) => (
                        <p key={item}>
                          {item}
                          <span>↗</span>
                        </p>
                      ))}
                      <small>
                        DESIGN DEMONSTRATION / NO LIVE SALES OR EVENTS
                      </small>
                    </div>
                    <div className="cw-screen-bottom">
                      <span>
                        {i === 0
                          ? 'CULT CINEMA. ALL NIGHT.'
                          : i === 1
                            ? 'INDEPENDENT WORDS. UNMISTAKABLE DESIGN.'
                            : 'MADE TO GET A REACTION.'}
                      </span>
                      <span>DESIGNED BY CULT. ↗</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cw-project-caption">
                <strong>{project.type}</strong>
                <p>{project.description}</p>
              </div>
            </article>
          ),
      )}
      <figure className="cw-original">
        <figcaption>
          <span className="cg-label">02 / CULT. ORIGINAL WEB DESIGN</span>
          <strong>Attention. By design.</strong>
          <p>Art direction / Web design</p>
        </figcaption>
        <a
          href="/artwork/cult/cult-attention-original.jpg"
          target="_blank"
          rel="noreferrer"
          aria-label="Open original CULT Attention design at full size"
        >
          <img
            src="/artwork/cult/cult-attention-original.jpg"
            alt="Original CULT website design with cut-paper lettering, concrete texture, acid yellow and lime, red marks and monochrome chain photography"
            width={1600}
            height={1200}
            loading="lazy"
          />
        </a>
      </figure>
      <figure className="cw-original cw-motion">
        <figcaption>
          <span className="cg-label">03 / CULT. IN MOTION</span>
          <strong>Made to move.</strong>
          <p>Motion design / Film</p>
        </figcaption>
        <video
          muted
          controls
          playsInline
          preload="metadata"
          width={1920}
          height={1088}
          aria-label="CULT motion design showcase"
          poster="/artwork/cult/cult-motion-poster.png"
        >
          <source src="/artwork/cult/cult-motion.mp4" type="video/mp4" />
          <track
            kind="descriptions"
            src="/artwork/cult/cult-motion.vtt"
            srcLang="en"
            label="Visual description"
          />
          Your browser does not support embedded video.{' '}
          <a href="/artwork/cult/cult-motion.mp4" download>
            Open the video
          </a>
          .
        </video>
      </figure>
    </section>
  );
}
