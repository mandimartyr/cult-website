/* eslint-disable next/no-img-element -- Static export uses pre-encoded responsive WebP imagery. */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow } from '../brand';

export function ServiceLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`sv-link ${className}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function ServiceImage({
  name,
  alt,
  sizes = '100vw',
  priority = false,
}: {
  name: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={`/studies/${name}-960.webp`}
      srcSet={[480, 960, 1536]
        .map((w) => `/studies/${name}-${w}.webp ${w}w`)
        .join(', ')}
      sizes={sizes}
      width={1536}
      height={name === 'services/hardline-panorama' ? 512 : 1024}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
export function ServiceLabel({ children }: { children: ReactNode }) {
  return <p className="sv-label">{children}</p>;
}
