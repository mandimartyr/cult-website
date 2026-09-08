import './contact-form.css';
import { PrintArt } from '@/components/cult/print-art';
import { ContactForm } from '@/components/cult/contact-form';
import { Footer } from '@/components/cult/sections';
import { pageMetadata, BreadcrumbSchema } from '@/lib/seo';
export const metadata = pageMetadata(
  'Start a project',
  'Bring the ambition. Tell CULT. what needs to move. Start a project brief or get in touch directly.',
  '/contact/',
);
export default function Contact() {
  return (
    <>
      <main id="main" className="inner-page contact-page contact-rebuilt">
        <section className="section page-hero contact-hero cult-hero">
          <div className="route-print-art">
            <PrintArt name="media" priority />
          </div>
          <p className="contact-register">CULT. / OPEN A CONVERSATION</p>
          <h1 className="cult-poster-title">
            <span>MAKE</span>
            <span>
              CONTACT<span className="contact-dot">.</span>
            </span>
          </h1>
          <div className="contact-hero-baseline">
            <p>
              Big ambition. Messy problem.
              <br />
              <strong>Start with what you know.</strong>
            </p>
            <a href="#project-brief">
              Build your brief <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="contact-hero-foot">
            <span>STRATEGY / CREATIVE / PERFORMANCE</span>
            <span>INDEPENDENT / EVERYWHERE</span>
          </div>
        </section>
        <div className="contact-direct">
          <span>NO FORM PERSON?</span>
          <a href="mailto:hello@cultmedia.house">hello@cultmedia.house ↗</a>
        </div>
        <section
          className="section contact-layout"
          id="project-brief"
          aria-labelledby="contact-brief-title"
        >
          <aside className="contact-aside">
            <p className="contact-section-label">01 / THE STARTING POINT</p>
            <h2 id="contact-brief-title">
              GIVE US
              <br />
              THE{' '}
              <em>
                SHORT
                <br />
                VERSION.
              </em>
            </h2>
            <p>A polished pitch is optional. A real commercial problem is enough.</p>
            <ol className="contact-prompts">
              <li>
                <span>01</span>
                <div>
                  <strong>The ambition</strong>
                  <p>What would you like to change?</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>The friction</strong>
                  <p>What is getting in the way?</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>The timing</strong>
                  <p>What is coming up?</p>
                </div>
              </li>
            </ol>
            <p className="contact-small-note">
              Only the starred fields are required. Share what you know. We can
              work through the rest.
            </p>
          </aside>
          <ContactForm />
        </section>
        <section className="contact-next" aria-labelledby="contact-next-title">
          <div>
            <p className="contact-section-label">02 / NO MYSTERY</p>
            <h2 id="contact-next-title">
              WHAT
              <br />
              HAPPENS <em>NEXT?</em>
            </h2>
          </div>
          <div className="contact-answers">
            <details open>
              <summary>Send your brief. We take it from there.</summary>
              <p>
                Your enquiry goes directly to CULT. Once it is submitted, you’ll
                see a confirmation here. We’ll review your brief and reply to
                the email address you provide.
              </p>
            </details>
            <details>
              <summary>Not sure which service fits?</summary>
              <p>
                Choose “Not sure yet” and describe the problem. We will recommend
                Audit, Build, or Partner—you do not need to diagnose it first.
              </p>
            </details>
            <details>
              <summary>What should I include?</summary>
              <p>
                Your goal, the obstacle and any deadline. A website or reference
                link helps. All investment figures shown here are in CAD.
              </p>
            </details>
          </div>
        </section>
        <div className="contact-signoff">
          <span>GOOD WORK STARTS WITH A CONVERSATION.</span>
          <a href="mailto:hello@cultmedia.house">LET’S HAVE ONE ↗</a>
        </div>
      </main>
      <Footer />
      <BreadcrumbSchema name="Contact" path="/contact/" />
    </>
  );
}
