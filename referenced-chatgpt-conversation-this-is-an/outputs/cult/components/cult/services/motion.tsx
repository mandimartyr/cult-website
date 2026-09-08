'use client';
import { useEffect } from 'react';
export function ServicesMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.sv-page');
    if (!root) return;
    root.dataset.ready = 'true';
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (reduced.matches) continue;
          const mode = entry.target.getAttribute('data-sv-reveal');
          const frames =
            mode === 'clip'
              ? [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)' }]
              : mode === 'rule'
                ? [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }]
                : [{ opacity: 0.25 }, { opacity: 1 }];
          const a = entry.target.animate(frames, {
            duration: mode === 'rule' ? 320 : 900,
            easing: 'cubic-bezier(.22,.78,.2,1)',
          });
          animations.add(a);
          void a.finished.then(() => animations.delete(a)).catch(() => {});
        }
      },
      { threshold: 0.12 },
    );
    root
      .querySelectorAll('[data-sv-reveal]')
      .forEach((e) => observer.observe(e));
    const stop = () => {
      if (reduced.matches) animations.forEach((a) => a.finish());
    };
    reduced.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener('change', stop);
      delete root.dataset.ready;
    };
  }, []);
  return null;
}
