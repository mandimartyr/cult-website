import { createClient, defineQuery } from 'next-sanity';

// Published content only. Static exports refresh this content at build time.
export const sanityClient = createClient({
  projectId: 'wmzu9qlt',
  dataset: 'production',
  apiVersion: '2026-09-07',
  useCdn: false,
  perspective: 'published',
});

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){_id, title, "slug": slug.current, excerpt, publishedAt, coverImage, author->{name}, categories[]->{title}}`,
);
export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{_id, title, excerpt, publishedAt, coverImage, body, seo, author->{name,bio}, categories[]->{title}}`,
);
export const CASE_STUDIES_QUERY = defineQuery(
  `*[_type == "caseStudy" && defined(slug.current)] | order(_createdAt desc){_id, title, "slug": slug.current, excerpt, coverImage, projectType, disciplines, body, gallery, videoUrl, seo}`,
);
