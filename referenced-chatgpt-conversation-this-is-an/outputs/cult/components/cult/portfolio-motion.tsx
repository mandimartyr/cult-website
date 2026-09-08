'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export function PortfolioMotion() {
  const path = usePathname();
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const featured = entry.target.closest('.study-featured');
          const frames = featured
            ? [{ transform: 'scale(.985)' }, { transform: 'scale(1)' }]
            : [
                { clipPath: 'inset(0 0 6% 0)', opacity: 0.65 },
                { clipPath: 'inset(0)', opacity: 1 },
              ];
          const animation = entry.target.animate(frames, {
            duration: featured ? 1000 : 800,
            easing: 'cubic-bezier(.2,.7,.2,1)',
            fill: 'backwards',
          });
          animations.add(animation);
          animation.finished
            .then(() => animations.delete(animation))
            .catch(() => {});
        }
      },
      { rootMargin: '0px 0px -5% 0px' },
    );
    document
      .querySelectorAll('[data-portfolio-reveal]')
      .forEach((el) => observer.observe(el));
    const finish = () => {
      if (preference.matches) animations.forEach((a) => a.finish());
    };
    preference.addEventListener('change', finish);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', finish);
      animations.forEach((a) => a.cancel());
    };
  }, [path]);
  return null;
}
