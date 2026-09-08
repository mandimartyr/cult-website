import type { Study } from '@/lib/studies';
import { nextStudy, studyDisclosure } from '@/lib/studies';
import { NextStudy } from '@/components/cult/portfolio';
import { Action } from '@/components/cult/brand';
import { SignalImage } from './image';
import { SignalMotion } from './motion';
import {
  Noise,
  Filter,
  PrintBrief,
  FinalDecision,
  Response,
  DemoBrief,
} from './interactions';
import './signal.css';
function Label({ children }: { children: React.ReactNode }) {
  return <p className="si-mono si-label">{children}</p>;
}
export function SignalStudy({ study }: { study: Study }) {
  return (
    <main id="main" className="signal-page">
      <SignalMotion />
      <header className="si-hero" data-scene="01">
        <Noise />
        <div className="si-hero-title">
          <h1>
            SIGNAL<span>.</span>
          </h1>
          <p>
            KNOW WHAT
            <br />
            MATTERS NEXT.
          </p>
        </div>
        <div className="si-hero-rail si-mono">
          <span>
            <b>14</b> CHANGES SPOTTED
          </span>
          <span>
            <b>03</b> NEED ATTENTION
          </span>
          <span>
            <b>01</b> TOP PRIORITY
          </span>
        </div>
        <p className="si-hero-disclosure si-mono">
          01 / NOISE · ILLUSTRATIVE SCENARIO · SELF-INITIATED
        </p>
      </header>
      <div className="si-context si-pad"><p className="si-explainer">A signal is a change worth paying attention to. It helps you spot a problem or opportunity and decide what to do next.</p><p>SIGNAL is a concept for a tool that finds those changes in business data. Explore the examples below to see how it could work.</p><p>{studyDisclosure}</p></div>
      <Filter />
      <section className="si-one si-pad" data-scene="03" id="si-one">
        <Label>03 / ONE SIGNAL</Label>
        <div className="si-one-layout">
          <div>
            <p className="si-mono">THE CHANGE THAT NEEDS ATTENTION</p>
            <h2>
              SALES PIPELINE
              <br />
              <strong>−17%</strong>
            </h2>
          </div>
          <aside className="si-annotations"><p className="si-mono">COMPARED WITH THE LAST 90 DAYS</p><dl><dt>WHAT IT MEANS</dt><dd>Fewer potential sales are moving forward.</dd><dt>WHAT TO CHECK</dt><dd>Whether the ads are reaching people likely to buy.</dd></dl></aside>
        </div>
        <div className="si-decision-layer"><p>MORE DATA ISN’T THE ANSWER.</p><p>A CLEARER <strong>NEXT MOVE IS.</strong></p></div>
      </section>
      <section className="si-cause" data-scene="04" id="si-cause">
        <Label>04 / FIND THE REASON</Label>
        {[
          ['MORE PEOPLE CLICK THE ADS', 'MORE TRAFFIC'],
          ['FEWER ARE LIKELY TO BUY', 'WEAKER LEADS'],
          ['FEWER SALES MOVE FORWARD', 'PIPELINE ↓'],
        ].map(([label, value], i) => (
          <div className={`si-causal-layer layer-${i}`} key={label}>
            <span className="si-mono">
              0{i + 1}
            </span>
            <h2>{label}</h2>
            <p data-si-reveal="clip">{value}</p>
            <span className="si-cause-arrow" aria-hidden="true">
              ↓
            </span>
          </div>
        ))}
        <div className="si-consequence si-pad">
          <div>
            <Label>CONSEQUENCE</Label>
            <p>
              The ads are bringing more visitors, but too few are becoming serious sales opportunities.
            </p>
          </div>
          <Label>DECISION</Label>
          <p className="si-type">
            REACH THE RIGHT PEOPLE.
            <br />
            THEN SPEND MORE.
          </p>
        </div>
      </section>
      <section className="si-brief si-pad" data-scene="05" id="si-brief">
        <div className="si-brief-masthead si-mono">
          <span>YOUR DAILY UPDATE</span>
          <span>EXAMPLE / SIGNAL</span>
        </div>
        <h2>What needs a closer look today?</h2>
        <p className="si-brief-intro">Three changes to look at today, with a suggested next step for each. This is an example of an update from SIGNAL.</p>
        <div className="si-brief-columns">
          <article>
            <Label>01 / DEMAND</Label>
            <h3>
              SEARCH
              <br />
              DEMAND
            </h3>
            <strong>+31%</strong>
            <p>More people are searching. Check whether your website answers what they need.</p>
          </article>
          <article>
            <Label>02 / PIPELINE</Label>
            <h3>
              SALES
              <br />
              PIPELINE
            </h3>
            <strong>−17%</strong>
            <p>Fewer potential sales are moving forward. Check where people lose interest.</p>
          </article>
          <article>
            <Label>03 / COMPETITION</Label>
            <h3>COMPETITOR PRICE</h3>
            <strong className="si-brief-change">
              CHANGED
            </strong>
            <p>A competitor changed its price. Compare the offer before changing yours.</p>
          </article>
        </div>
        <div className="si-brief-footer si-mono"><PrintBrief /></div>
        <p className="si-note">
          05 / THE MORNING BRIEF · An example of what SIGNAL could send each day.
        </p>
      </section>
      <section className="si-campaign" data-scene="06" id="si-campaign">
        <div className="si-campaign-title si-pad">
          <Label>06 / THE CAMPAIGN</Label>
          <h2>
            PLENTY OF DATA.
            <br />
            <span>WHAT SHOULD YOU DO NEXT?</span>
          </h2>
        </div>
        <div className="si-ad-spread">
          <article className="si-ad-paper">
            <Label>CONTEXTUAL / PREMIUM PUBLICATION</Label>
            <p>
              MORE DATA
              <br />
              <span>≠</span>
              <br />
              MORE CERTAINTY.
            </p>
            <b>SIGNAL.</b>
          </article>
          <article className="si-ad-red">
            <Label>LINKEDIN / PROGRAMMATIC</Label>
            <span>PIPELINE</span>
            <strong>−17%</strong>
            <p>Fewer potential sales are moving forward. Check where people lose interest.</p>
            <p>
              DO YOU
              <br />
              KNOW WHY?
            </p>
            <b>SIGNAL.</b>
          </article>
        </div>
        <figure className="si-station" data-si-reveal="photo">
          <SignalImage
            name="station"
            alt="SIGNAL station takeover: More data does not equal more certainty. Pipeline −17%, do you know why?"
          />
          <figcaption className="si-mono">
            STATION TAKEOVER / CONCEPT APPLICATION
          </figcaption>
        </figure>
        <div className="si-campaign-thinking si-pad"><p>“Know what matters next.” gives SIGNAL a clear job. The campaign turns familiar business frustrations into a reason to look closer.</p><p className="si-mono">SELF-INITIATED CONCEPT / NO CAMPAIGN HAS RUN</p></div>
      </section>
      <section className="si-response si-pad" id="si-response">
        <Label>TURN THE SIGNAL INTO ACTION</Label>
        <h2>What could you do differently?</h2>
        <p className="si-explainer">A signal is useful when it helps you make a decision. Choose an area below to see a possible next step.</p>
        <Response />
        <details className="si-demo-toggle"><summary>Try it with a decision of your own</summary><DemoBrief /></details>
      </section>
      <FinalDecision />
      <div className="si-outro si-pad">
        <p>{study.sentence}</p>
        <Action href="/contact/?engagement=Build">
          Discuss a brief like this
        </Action>
      </div>
      <NextStudy study={nextStudy(study.slug)} />
    </main>
  );
}
