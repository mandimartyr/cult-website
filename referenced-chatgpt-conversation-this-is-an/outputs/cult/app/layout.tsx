import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './portfolio.css';
import './riso.css';
import './print-home.css';
import './route-print.css';
import './print-bookends.css';
import './refinements.css';
import './typography.css';
import './cult-nav.css';
import { MotionScenes } from '@/components/cult/motion-scenes';
import { Header } from '@/components/cult/navigation';
import { MotionProvider } from '@/components/cult/media';
import { site } from '@/lib/content';
const figtree = localFont({
  src: [
    {
      path: '../public/fonts/figtree-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/figtree-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/figtree-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-figtree',
  display: 'swap',
});
const cultDisplay = localFont({
  src: '../public/fonts/hardline/Anton-Regular.ttf',
  variable: '--font-cult-display',
  display: 'swap',
});
const cultBody = localFont({
  src: '../public/fonts/cult/spacegrotesk-SpaceGrotesk[wght].ttf',
  variable: '--font-cult-body',
  weight: '300 700',
  display: 'swap',
});
const cultHeading = localFont({
  src: '../public/fonts/cult/barlowcondensed-BarlowCondensed-Black.ttf',
  variable: '--font-cult-heading',
  weight: '400',
  display: 'swap',
});
const cultMono = localFont({
  src: [
    {
      path: '../public/fonts/cult/spacemono-SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/cult/spacemono-SpaceMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/cult/spacemono-SpaceMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/cult/spacemono-SpaceMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-cult-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'CULT. — Full-funnel marketing for brands worth following',
    template: '%s | CULT.',
  },
  description: site.description,
  applicationName: 'CULT.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'CULT. / Cult Media House',
    locale: 'en_CA',
    title: 'CULT. — Full-funnel marketing for brands worth following',
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary',
    title: 'CULT. — Cult Media House',
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en-CA"
      className={`riso ${figtree.variable} ${cultDisplay.variable} ${cultBody.variable} ${cultHeading.variable} ${cultMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <MotionScenes />
          {children}
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${site.url}/#organization`,
                  name: site.name,
                  legalName: site.legalName,
                  url: site.url,
                  email: site.email,
                  description: site.description,
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Everywhere',
                    addressRegion: 'ON',
                    addressCountry: 'CA',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${site.url}/#website`,
                  name: 'CULT. / Cult Media House',
                  url: site.url,
                  publisher: { '@id': `${site.url}/#organization` },
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
