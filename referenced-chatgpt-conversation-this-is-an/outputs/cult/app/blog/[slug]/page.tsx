/* Images use Sanity CDN sizing and preserve their intrinsic aspect ratio. */
/* oxlint-disable next/no-img-element */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import { Footer } from '@/components/cult/sections';
import { sanityClient, POSTS_QUERY, POST_QUERY } from '@/lib/sanity/client';
import { imageUrl } from '@/lib/sanity/images';
import { pageMetadata } from '@/lib/seo';
import '../blog.css';
export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await sanityClient.fetch(POSTS_QUERY);
  return posts.length
    ? posts.map((p) => ({ slug: p.slug! }))
    : [{ slug: '__empty' }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityClient.fetch(POST_QUERY, { slug });
  if (!post) return { robots: { index: false } };
  return {
    ...pageMetadata(
      post.seo?.title || post.title || 'Journal',
      post.seo?.description || post.excerpt || '',
      `/blog/${slug}/`,
    ),
    ...(post.seo?.image?.asset
      ? {
          openGraph: {
            title: post.title || 'Journal',
            images: [imageUrl(post.seo.image)],
          },
        }
      : {}),
  };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityClient.fetch(POST_QUERY, { slug });
  if (!post) notFound();
  return (
    <>
      <main id="main" className="journal">
        <Link href="/blog/">← Journal</Link>
        <header>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <p className="journal-meta">
            {post.author?.name}
            {post.publishedAt && (
              <>
                {' '}
                /{' '}
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </time>
              </>
            )}
          </p>
        </header>
        {post.coverImage?.asset && (
          <img
            src={imageUrl(post.coverImage)}
            alt={post.coverImage.alt || ''}
          />
        )}
        <div className="journal-body">
          {post.body && (
            <PortableText
              value={post.body}
              components={{
                types: {
                  editorialImage: ({ value }) => (
                    <figure>
                      <img src={imageUrl(value)} alt={value.alt || ''} />
                      {(value.caption || value.credit) && (
                        <figcaption>
                          {value.caption} {value.credit}
                        </figcaption>
                      )}
                    </figure>
                  ),
                },
              }}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
