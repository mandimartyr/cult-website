import { notFound } from 'next/navigation';
import { offers } from '@/components/cult/services/data';
import { OfferPage } from '@/components/cult/services/offer-page';
import { site } from '@/lib/content';
import { BreadcrumbSchema, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return offers.map((o) => ({ offer: o.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ offer: string }>;
}) {
  const { offer: slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) return {};
  return pageMetadata(
    offer.title,
    `${offer.copy} ${offer.price}.`,
    `/services/${slug}/`,
  );
}
export default async function ServiceOffer({
  params,
}: {
  params: Promise<{ offer: string }>;
}) {
  const { offer: slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) notFound();
  return (
    <>
      <OfferPage slug={slug} />
      <BreadcrumbSchema name={offer.title} path={`/services/${slug}/`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: offer.title,
            description: offer.copy,
            url: `${site.url}/services/${slug}/`,
            provider: { '@id': `${site.url}/#organization` },
            serviceType: offer.scope,
          }).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
