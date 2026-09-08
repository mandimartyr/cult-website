'use client';
import { useEffect } from 'react';
export function SignalMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.signal-page');
    if (!root) return;
    root.dataset.ready = 'true';
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          observer.unobserve(e.target);
          if (reduced.matches) continue;
          const a = e.target.animate(
            e.target.getAttribute('data-si-reveal') === 'clip'
              ? [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)' }]
              : [{ opacity: 0.25 }, { opacity: 1 }],
            { duration: 900, easing: 'cubic-bezier(.22,.78,.2,1)' },
          );
          animations.add(a);
          void a.finished.then(() => animations.delete(a)).catch(() => {});
        }
      },
      { threshold: 0.12 },
    );
    root
      .querySelectorAll('[data-si-reveal]')
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
