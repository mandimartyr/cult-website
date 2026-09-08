'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { Brand } from './brand';
import { navigation } from '@/lib/content';
import { cn } from '@/lib/utils';

function isCurrent(path: string, href: string) {
  const p = path.replace(/\/$/, '') || '/';
  const h = href.replace(/\/$/, '') || '/';
  if (h === '/') return p === '/';
  return p === h || p.startsWith(`${h}/`);
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const links = navigation.filter((item) => item.href !== '/contact/');
  const contact = navigation.find((item) => item.href === '/contact/');

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('cult-nav-locked', open);
    return () => document.body.classList.remove('cult-nav-locked');
  }, [open]);

  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);

  return (
    <header
      className={cn(
        'cult-header',
        scrolled && 'is-scrolled',
        open && 'is-open',
      )}
    >
      <div className="cult-header__bar">
        <Link className="cult-header__brand" href="/" aria-label="CULT. home">
          <Brand />
        </Link>

        <nav className="cult-header__desktop" aria-label="Primary">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cult-header__link"
              aria-current={isCurrent(path, item.href) ? 'page' : undefined}
            >
              <span className="cult-header__num">{item.number}</span>
              {item.name}
            </Link>
          ))}
          {contact && (
            <Link href={contact.href} className="cult-header__cta">
              {contact.name}
              <span aria-hidden="true">↗</span>
            </Link>
          )}
        </nav>

        <button
          ref={button}
          type="button"
          className="cult-header__burger"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="cult-header__burger-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="cult-header__burger-label">
            {open ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className={cn('cult-header__panel', open && 'is-open')}
        hidden={!open}
      >
        <nav className="cult-header__mobile" aria-label="Mobile primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cult-header__mobile-link"
              aria-current={isCurrent(path, item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="cult-header__num">{item.number}</span>
              <span className="cult-header__mobile-name">{item.name}</span>
              <span className="cult-header__mobile-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
        <p className="cult-header__panel-foot">
          CULT. / Cult Media House
          <br />
          Full-funnel. Preference built—not bought.
        </p>
      </div>
    </header>
  );
}
