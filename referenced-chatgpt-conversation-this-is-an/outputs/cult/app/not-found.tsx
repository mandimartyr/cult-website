import { Action, Period } from '@/components/cult/brand';
import { Footer } from '@/components/cult/sections';
export default function NotFound() {
  return (
    <>
      <main id="main" className="inner-page">
        <section className="section page-hero">
          <p className="label">404</p>
          <h1>
            <Period text="Out of frame." />
          </h1>
          <p className="page-intro">That page could not be found.</p>
          <div className="actions">
            <Action href="/">Back to CULT.</Action>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
