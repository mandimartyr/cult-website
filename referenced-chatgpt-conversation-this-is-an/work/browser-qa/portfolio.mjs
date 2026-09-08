import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await b.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});const p=await context.newPage();
const errors=[],results=[];p.on('pageerror',e=>errors.push(e.message));
const routes=['/','/services/','/work/','/about/','/contact/',...['hardline','noct','aer','field','signal'].map(s=>`/work/${s}/`)];
for(const route of routes){
 for(const width of [1440,1280,1024,768,390,360]){
  await p.setViewportSize({width,height:1000});await p.goto('http://127.0.0.1:4179'+route);await p.evaluate(()=>document.fonts.ready);
  const overflow=await p.evaluate(()=>[...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1||e.getBoundingClientRect().left< -1).filter(e=>getComputedStyle(e).position!=='absolute').map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right})).slice(0,8));
  const ok=await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth);results.push({route,width,overflow:ok?[]:overflow});
  if(!ok)console.log('OVERFLOW',route,width,JSON.stringify(overflow));
  if(width===1440||width===390){
   if(route==='/work/')await p.screenshot({path:`../portfolio-index-${width}.png`,fullPage:true});
   if(route.split('/').filter(Boolean).length===2){await p.locator('.case-experience').scrollIntoViewIfNeeded();await p.locator('.case-experience').screenshot({path:`../portfolio-${route.split('/')[2]}-${width}.png`});}
  }
 }
 await p.setViewportSize({width:1440,height:1000});await p.goto('http://127.0.0.1:4179'+route);
 const violations=(await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}));
 results.push({route,axe:violations});console.log(route,'axe',JSON.stringify(violations));
}
fs.writeFileSync('../portfolio-qa.json',JSON.stringify({results,errors},null,2));await b.close();if(errors.length||results.some(r=>r.overflow?.length||r.axe?.length))process.exitCode=1;
