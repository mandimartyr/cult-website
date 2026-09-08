import Image from 'next/image';
import { studies } from '@/lib/studies';
import Link from 'next/link';
import { Footer } from '@/components/cult/sections';
import { PosterGallery } from '@/components/cult/gallery/poster-gallery';
import { pageMetadata, BreadcrumbSchema } from '@/lib/seo';
import { proofLine } from '@/lib/content';
import { ElasticGallery } from '@/components/ui/elastic-gallery';
import '@/components/cult/gallery/gallery.css';
export const metadata = pageMetadata(
  'Selected work',
  'Selected CULT. work—strategy, identity and digital built to get a reaction.',
  '/work/',
);

const studyGalleryItems = studies.map((study) => ({
  id: study.number,
  title: study.name,
  category: study.disciplines[0] ?? study.industry.split('/')[0]?.trim() ?? '',
  src: `/studies/${study.slug}-960.webp`,
  alt: study.artAlt,
  href: `/work/${study.slug}/`,
}));

export default function Work() {
  return (
    <>
      <main id="main" className="cult-gallery cult-gallery--open">
        <header className="cg-hero cg-hero--open">
          <div className="cg-hero-art" aria-hidden="true">
            <Image
              src="/artwork/cult/work-hero.png"
              alt=""
              fill
              priority
              unoptimized
              sizes="100vw"
            />
          </div>
          <div className="cg-hero-layout">
            <h1 className="cult-poster-title">
              <span>Made to</span>
              <em>get a reaction.</em>
            </h1>
          </div>
        </header>
        <div className="cg-strip cg-label">
          <span>STRATEGY / IDENTITY / DIGITAL / MEDIA</span>
          <span>SELF-INITIATED STUDIES</span>
        </div>
        <section
          id="case-studies"
          className="cg-studies cg-studies--gallery"
          aria-labelledby="cg-studies-title"
        >
          <header className="cg-studies-heading">
            <div>
              <p className="cg-label">CULT. / SELF-INITIATED STUDIES</p>
              <h2 id="cg-studies-title">
                The thinking.
                <br />
                The work.
              </h2>
            </div>
            <p>
              Strategy, identity and digital experiences built around one
              commercial problem each.
              <br />
              {proofLine}
            </p>
          </header>
          <ElasticGallery items={studyGalleryItems} className="cg-elastic" />
        </section>
        <section
          id="print-art"
          className="cg-secondary-gallery cg-secondary-gallery--open"
          aria-labelledby="print-art-title"
        >
          <header className="cg-studies-heading cg-secondary-heading">
            <div>
              <p className="cg-label">GALLERY / PRINT &amp; CRAFT</p>
              <h2 id="print-art-title">Print &amp; art direction.</h2>
            </div>
            <p>
              Curated poster explorations—taste and craft on the wall. Hire from
              the commercial studies above.
            </p>
          </header>
          <PosterGallery />
        </section>
        <p className="cg-note">
          Self-initiated CULT. concepts. No campaign results are claimed.{' '}
          {proofLine}
        </p>
        <section className="cg-cta">
          <h2>
            Got something
            <br />
            worth making?
          </h2>
          <Link href="/contact/?engagement=Build">
            Let’s talk <span>↗</span>
          </Link>
        </section>
      </main>
      <Footer />
      <BreadcrumbSchema name="Work" path="/work/" />
    </>
  );
}
