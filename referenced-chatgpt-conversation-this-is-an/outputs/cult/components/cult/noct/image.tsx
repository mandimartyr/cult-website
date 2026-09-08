/* eslint-disable next/no-img-element -- Static export uses pre-encoded responsive WebP assets with explicit sizes. */
export function NoctImage({
  name,
  alt,
  priority = false,
  className = '',
  sizes = '100vw',
}: {
  name: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const portrait = ['object', 'skin'].includes(name);
  return (
    <img
      className={className}
      src={`/studies/noct/${name}-960.webp`}
      srcSet={[480, 960, 1536]
        .map((w) => `/studies/noct/${name}-${w}.webp ${w}w`)
        .join(', ')}
      sizes={sizes}
      width={portrait ? 1024 : 1536}
      height={portrait ? 1536 : 1024}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
