/* eslint-disable next/no-img-element -- Pre-encoded responsive print artwork. */
export function PrintArt({name, priority=false}: {name:string;priority?:boolean}) {
  return <img src={`/print/${name}-960.webp`} srcSet={`/print/${name}-480.webp 480w, /print/${name}-960.webp 960w, /print/${name}-1536.webp 1536w`} sizes="100vw" width="1536" height={name==='creative'?1152:1024} alt="" loading={priority?'eager':'lazy'} decoding="async" fetchPriority={priority?'high':'auto'} />;
}
