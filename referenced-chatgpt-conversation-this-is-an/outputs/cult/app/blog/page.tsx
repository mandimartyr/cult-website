/* Images use Sanity CDN sizing and preserve their intrinsic aspect ratio. */
/* oxlint-disable next/no-img-element */
import Link from 'next/link';
import { PrintArt } from '@/components/cult/print-art';
import { Footer } from '@/components/cult/sections';
import { sanityClient, POSTS_QUERY } from '@/lib/sanity/client';
import { pageMetadata } from '@/lib/seo';
import { imageUrl } from '@/lib/sanity/images';
import './blog.css';
export const metadata = pageMetadata(
  'Journal',
  'Notes on strategy, creative and performance from CULT.',
  '/blog/',
);
export default async function Blog() {
  const posts = await sanityClient.fetch(POSTS_QUERY);
  return (
    <>
      <main id="main" className="journal journal-index">
        <header className="journal-hero">
          <div className="journal-art">
            <PrintArt name="creative" priority />
          </div>
          <div className="journal-hero-content">
            <h1 className="cult-poster-title">
              <span>Ideas with</span>
              <em>an edge.</em>
            </h1>
          </div>
        </header>
        <section
          id="journal-posts"
          className="journal-posts"
          aria-labelledby="journal-latest"
        >
          <div className="journal-section-label">
            <h2 id="journal-latest">Latest thinking</h2>
            <span>{String(posts.length).padStart(2, '0')} articles</span>
          </div>
          {posts.length ? (
            <div className="journal-grid">
              {posts.map((post) => (
                <article className="journal-card" key={post._id}>
                  <Link href={`/blog/${post.slug}/`}>
                    {post.coverImage?.asset && (
                      <img
                        src={imageUrl(post.coverImage)}
                        alt={post.coverImage.alt || ''}
                      />
                    )}
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}/`}>Read article ↗</Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="journal-empty">
              <h2>The first cut is coming.</h2>
              <p>New writing will appear here soon.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
