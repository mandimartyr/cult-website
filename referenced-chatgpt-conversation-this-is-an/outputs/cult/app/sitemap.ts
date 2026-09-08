import type { MetadataRoute } from 'next';
import { sanityClient, POSTS_QUERY } from '@/lib/sanity/client';
import { studies } from '@/lib/studies';
import { site } from '@/lib/content';
export const dynamic = 'force-static';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityClient.fetch(POSTS_QUERY);
  return [
    '/',
    '/work/',
    '/services/',
    '/services/attention-audit/',
    '/services/growth-build/',
    '/services/partner/',
    '/about/',
    '/blog/',
    ...posts.map((post) => `/blog/${post.slug}/`),
    '/contact/',
    ...studies.map((study) => `/work/${study.slug}/`),
  ].map((path) => ({
    url: site.url + path,
  }));
}
