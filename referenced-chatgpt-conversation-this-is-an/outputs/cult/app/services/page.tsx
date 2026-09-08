import { ServicesPage } from '@/components/cult/services/services-page';
import { capabilities, site } from '@/lib/content';
import { pageMetadata, BreadcrumbSchema } from '@/lib/seo';
export const metadata = pageMetadata(
  'Full-funnel marketing services',
  'Strategy, websites, search, email, paid media, performance creative and measurement. Three ways to work with CULT.: Audit, Build and Partner.',
  '/services/',
);
export default function Services() {
  return (
    <>
      <ServicesPage />
      <BreadcrumbSchema name="Services" path="/services/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: capabilities.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: c.name,
                description: c.copy,
                provider: { '@id': `${site.url}/#organization` },
                url: `${site.url}/services/`,
              },
            })),
          }),
        }}
      />
    </>
  );
}
