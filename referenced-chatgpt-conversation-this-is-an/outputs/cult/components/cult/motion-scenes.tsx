'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Progressive enhancement: the server renders every word visible. No scroll
// hijacking, wrapper geometry, persistent will-change, or hidden focus targets.
export function MotionScenes() {
  const path = usePathname();
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const ease = 'cubic-bezier(.22,.78,.2,1)';
    const reveal = (
      element: Element | null,
      kind: string,
      duration = 800,
      delay = 0,
    ) => {
      if (!element || preference.matches) return;
      const frames: Keyframe[] =
        kind === 'rise'
          ? [
              { opacity: 0.3, translate: '0 22px' },
              { opacity: 1, translate: '0 0' },
            ]
          : kind === 'image'
            ? [
                { opacity: 0.55, clipPath: 'inset(0 0 8% 0)' },
                { opacity: 1, clipPath: 'inset(0)' },
              ]
            : kind === 'clip'
              ? [
                  { clipPath: 'inset(0 0 100% 0)' },
                  { clipPath: 'inset(0 0 -12% 0)' },
                ]
              : kind === 'label'
                ? [
                    { opacity: 0, transform: 'translateX(-8px)' },
                    { opacity: 1, transform: 'translateX(0)' },
                  ]
                : [{ opacity: 0 }, { opacity: 1 }];
      const animation = element.animate(frames, {
        duration,
        delay,
        easing: ease,
        fill: 'backwards',
      });
      animations.add(animation);
      animation.finished
        .then(() => animations.delete(animation))
        .catch(() => {});
    };
    const treatments = new Map<
      Element,
      { kind: string; duration: number; delay: number }
    >();
    const assign = (
      el: Element | null,
      kind: string,
      duration: number,
      delay = 0,
    ) => {
      if (el) treatments.set(el, { kind, duration, delay });
    };
    document.querySelectorAll('.story').forEach((story, index) => {
      assign(story.querySelector('.story-label'), 'label', 320);
      if (index === 0 || index === 3)
        assign(story.querySelector('h2'), 'clip', 760);
      if (index === 1 || index === 4)
        assign(story.querySelector('h2'), 'opacity', 700, 80);
      assign(
        story.querySelector('.story-media'),
        'opacity',
        [900, 1100, 800, 950, 850, 1000][index],
        index === 1 ? 100 : 0,
      );
      assign(story.querySelector('.story-count'), 'label', 300);
    });
    document
      .querySelectorAll('.engagement-number')
      .forEach((el) => assign(el, 'label', 320));
    assign(document.querySelector('.thesis .label'), 'opacity', 400);
    // Print-language additions for previously static inner pages.
    assign(document.querySelector('.page-hero h1'), 'clip', 760);
    assign(document.querySelector('.page-intro'), 'opacity', 500);
    document.querySelectorAll('.principle').forEach((el, i) => {
      if (i % 2 === 0) assign(el.querySelector('h2'), 'clip', 740);
      assign(el.querySelector('.label'), 'label', 320);
    });
    assign(document.querySelector('.contact-aside'), 'opacity', 450);
    assign(document.querySelector('.opener-art'), 'opacity', 950);
    assign(document.querySelector('.print-opener h2 em'), 'clip', 740, 100);
    assign(document.querySelector('.opener-system'), 'label', 400);
    assign(document.querySelector('.print-close h2 em'), 'clip', 800);
    assign(document.querySelector('.footer-register'), 'label', 320);
    // Fill the gaps without duplicating the bespoke Services, NOCT,
    // HARDLINE and SIGNAL reveal systems.
    const groups: [string, string, number][] = [
      ['.cg-hero h1, .pk-hero h1', 'clip', 680],
      [
        '.cg-studies-heading h2, .cw-heading h2, .ae-split h2, .ae-service h2, .ae-close h2',
        'rise',
        620,
      ],
      ['.cg-study-card, .cg-poster', 'rise', 600],
      [
        '.cw-project-top, .cw-original figcaption, .cg-collection-head',
        'label',
        400,
      ],
      ['.cw-stage, .cw-original > a, .cw-motion video', 'image', 700],
      ['.ae-hero h1, .case-field .case-heading h1', 'opacity', 800],
      [
        '.ae-identity-board, .ae-route-poster, .ae-retention-grid > article',
        'rise',
        650,
      ],
      [
        '.case-field .case-section-heading h2, .case-field .case-argument h2, .case-field .case-system h2, .case-field .case-plan h2, .case-field .case-search h2, .case-field .case-measurement h2',
        'rise',
        600,
      ],
      ['.gravity h2, .founder-copy h2, .cg-cta h2', 'rise', 650],
      [
        '.pk-hero .pk-intro, .pk-other, .case-field .system-list article',
        'opacity',
        500,
      ],
    ];
    groups.forEach(([selector, kind, duration]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        assign(element, kind, duration, Math.min(index % 3, 2) * 65);
      });
    });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          observer.unobserve(entry.target);
          const treatment = treatments.get(entry.target)!;
          reveal(
            entry.target,
            treatment.kind,
            treatment.duration,
            treatment.delay,
          );
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );
    treatments.forEach((_, el) => observer.observe(el));
    const thesisObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          thesisObserver.unobserve(entry.target);
          entry.target
            .querySelectorAll(':scope > span')
            .forEach((line, i) => reveal(line, 'clip', 700, i * 120));
          reveal(entry.target.querySelector('.accent'), 'opacity', 140, 940);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40% 0px' },
    );
    const thesis = document.querySelector('.thesis h2');
    if (thesis) thesisObserver.observe(thesis);
    const finish = () => animations.forEach((animation) => animation.finish());
    const reduced = () => {
      if (preference.matches) finish();
    };
    // Fast scrolling must never leave a delayed reveal behind the reader.
    let previousY = scrollY;
    const scroll = () => {
      if (Math.abs(scrollY - previousY) > innerHeight * 0.55) finish();
      previousY = scrollY;
    };
    preference.addEventListener('change', reduced);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      observer.disconnect();
      thesisObserver.disconnect();
      preference.removeEventListener('change', reduced);
      window.removeEventListener('scroll', scroll);
      animations.forEach((animation) => animation.cancel());
    };
  }, [path]);
  return null;
}
