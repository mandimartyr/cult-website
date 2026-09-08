import type { Metadata } from 'next';
import { site } from './content';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | CULT.`,
      description,
      url: `${site.url}${path}`,
      type: 'website',
      siteName: 'CULT. / Cult Media House',
    },
    twitter: { card: 'summary', title: `${title} | CULT.`, description },
  };
}
export function BreadcrumbSchema({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'CULT.', item: site.url },
            { '@type': 'ListItem', position: 2, name, item: site.url + path },
          ],
        }).replace(/</g, '\\u003c'),
      }}
    />
  );
}
