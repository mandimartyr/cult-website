'use client';
import { useEffect } from 'react';
export function HardlineMotion() {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const running = new Set<Animation>();
    const animate = (
      el: Element,
      frames: Keyframe[],
      duration: number,
      delay = 0,
    ) => {
      if (reduced.matches) return;
      const animation = el.animate(frames, {
        duration,
        delay,
        easing: 'cubic-bezier(.22,.78,.2,1)',
        fill: 'backwards',
      });
      running.add(animation);
      void animation.finished
        .then(() => running.delete(animation))
        .catch(() => {});
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const el = entry.target;
          if (el.hasAttribute('data-hl-scan')) {
            const line = el.querySelector('.hl-scan');
            if (line)
              animate(
                line,
                [
                  { transform: 'scaleX(1) translateX(-100%)', opacity: 1 },
                  { transform: 'scaleX(1) translateX(100%)', opacity: 1 },
                ],
                1000,
              );
          }
          if (el.hasAttribute('data-hl-clip'))
            animate(
              el,
              [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0)' }],
              900,
            );
          if (el.hasAttribute('data-hl-category'))
            el.querySelectorAll('.hl-cliche-word').forEach((word, i) => {
              const rule = word.querySelector('i');
              if (rule)
                animate(
                  rule,
                  [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
                  500,
                  i * 100,
                );
              animate(
                word,
                [{ color: '#e8e6df' }, { color: '#777a79' }],
                700,
                i * 100,
              );
            });
          if (el.hasAttribute('data-hl-flow')) {
            const route = el.querySelector('.hl-flow-line');
            if (route)
              animate(
                route,
                [
                  { clipPath: 'inset(0 100% 100% 0)' },
                  { clipPath: 'inset(0)' },
                ],
                1100,
              );
            el.querySelectorAll('.hl-stage-number').forEach((stage, i) =>
              animate(
                stage,
                [
                  { opacity: 0.3, transform: 'translateX(-6px)' },
                  { opacity: 1, transform: 'translateX(0)' },
                ],
                320,
                i * 220,
              ),
            );
          }
          if (el.hasAttribute('data-hl-lane'))
            animate(
              el.querySelector('.hl-lane-number') ?? el,
              [
                { transform: 'translateX(-8px)', opacity: 0.5 },
                { transform: 'translateX(0)', opacity: 1 },
              ],
              320,
            );
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        '.hardline-page [data-hl-scan],.hardline-page [data-hl-clip],.hardline-page [data-hl-category],.hardline-page [data-hl-flow],.hardline-page [data-hl-lane]',
      )
      .forEach((el) => observer.observe(el));
    const finish = () => {
      if (reduced.matches) running.forEach((a) => a.finish());
    };
    reduced.addEventListener('change', finish);
    return () => {
      observer.disconnect();
      reduced.removeEventListener('change', finish);
      running.forEach((a) => a.cancel());
    };
  }, []);
  return null;
}
