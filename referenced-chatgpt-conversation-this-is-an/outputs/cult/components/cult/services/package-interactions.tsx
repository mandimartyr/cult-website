'use client';
import { useState } from 'react';
const decisions = {
 FIX: ['Landing experience', 'What is materially suppressing growth now.'],
 STOP: ['Low-intent paid expansion', 'Activity consuming resources without a clear commercial job.'],
 TEST: ['Category-page positioning', 'A meaningful hypothesis that needs evidence.'],
 WAIT: ['New channel expansion', 'Useful later. Not the next priority.'],
};
export function Diagnosis() {
 const [active,setActive]=useState<keyof typeof decisions>('FIX');
 return <div className="pk-diagnosis"><p className="pk-meta">Illustrative priority map / not a client result</p><div className="pk-controls">{Object.keys(decisions).map(k=><button key={k} aria-pressed={active===k} onClick={()=>setActive(k as keyof typeof decisions)}>{k}.</button>)}</div><div className="pk-decision" key={active}><strong>{decisions[active][0]}</strong><p>{decisions[active][1]}</p></div></div>;
}
const mixes={Launch:['CREATIVE','MEDIA','LANDING'],Recovery:['SEARCH','CONTENT','WEB'],Retention:['EMAIL','CONVERSION','MEASUREMENT']};
export function PriorityMix(){const [phase,setPhase]=useState<keyof typeof mixes>('Launch');return <div className="pk-mix"><p className="pk-meta">Illustrative priorities / not spending or hours</p><div className="pk-controls">{Object.keys(mixes).map(k=><button key={k} aria-pressed={phase===k} onClick={()=>setPhase(k as keyof typeof mixes)}>{k}</button>)}</div><div className="pk-mix-rows">{['SEARCH','CONTENT','CREATIVE','MEDIA','LANDING','WEB','EMAIL','CONVERSION','MEASUREMENT'].map(k=><div key={k} data-active={mixes[phase].includes(k)}><span>{k}</span><span>{mixes[phase].includes(k)?'PRIORITY ↗':'WATCH —'}</span></div>)}</div></div>}
export function BuildStates(){const [live,setLive]=useState(false);return <div className="pk-build-demo"><p className="pk-meta">Illustrative system</p><span>QUALIFIED DEMAND</span><span aria-hidden="true">↓</span><button aria-pressed={live} onClick={()=>setLive(!live)}>{live?'LANDING EXPERIENCE / BUILT':'LANDING EXPERIENCE / MISSING'} <span>↗</span></button><span aria-hidden="true">↓</span><span>{live?'CONVERSION / READY TO MEASURE':'CONVERSION / PATH INCOMPLETE'}</span><p>Select the missing piece to see the system connect.</p></div>}
