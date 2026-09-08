import Link from 'next/link';
import type { ReactNode } from 'react';
export function Period({ text }: { text: string }) {
  return (
    <>
      {text.endsWith('.') ? text.slice(0, -1) : text}
      <span className="accent">.</span>
    </>
  );
}
export function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={large ? 'brand brand-large' : 'brand'}>
      CULT<span className="accent">.</span>
    </span>
  );
}
export function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={secondary ? 'action action-secondary' : 'action'}
      href={href}
    >
      {children}
      <Arrow />
    </Link>
  );
}
