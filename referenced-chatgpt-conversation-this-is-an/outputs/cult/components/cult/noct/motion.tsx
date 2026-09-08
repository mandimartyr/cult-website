'use client';
import { useEffect } from 'react';
export function NoctMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.noct-page');
    if (root) root.dataset.noctReady = 'true';
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const active = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (media.matches) continue;
          const frames =
            entry.target.getAttribute('data-nt-reveal') === 'clip'
              ? [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)' }]
              : [{ opacity: 0.12 }, { opacity: 1 }];
          const a = entry.target.animate(frames, {
            duration: 900,
            easing: 'cubic-bezier(.22,.78,.2,1)',
            fill: 'backwards',
          });
          active.add(a);
          void a.finished.then(() => active.delete(a)).catch(() => {});
        }
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll('.noct-page [data-nt-reveal]')
      .forEach((e) => observer.observe(e));
    const reduce = () => {
      if (media.matches) active.forEach((a) => a.finish());
    };
    media.addEventListener('change', reduce);
    return () => {
      observer.disconnect();
      if (root) delete root.dataset.noctReady;
      active.forEach((a) => a.cancel());
      media.removeEventListener('change', reduce);
    };
  }, []);
  return null;
}
