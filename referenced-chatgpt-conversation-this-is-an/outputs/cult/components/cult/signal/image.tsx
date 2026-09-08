/* eslint-disable next/no-img-element -- Static export uses pre-encoded responsive WebP artwork. */
export function SignalImage({ name, alt }: { name: string; alt: string }) {
  return (
    <img
      src={`/studies/signal/${name}-960.webp`}
      srcSet={[480, 960, 1536]
        .map((w) => `/studies/signal/${name}-${w}.webp ${w}w`)
        .join(', ')}
      sizes="100vw"
      width={1536}
      height={1024}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}
