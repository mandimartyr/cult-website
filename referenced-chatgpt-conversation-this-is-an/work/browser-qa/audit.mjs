import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const root='/Users/mandijordan/Documents/Codex/2026-09-06/referenced-chatgpt-conversation-this-is-an/work/qa';
const reports=[];
for(const width of [1440,1280,1024,768,390,360]){
 await page.setViewportSize({width,height:width<500?844:900});
 for(const route of ['/','/services/','/work/','/about/','/contact/']){
  await page.goto('http://localhost:3000'+route);await page.evaluate(()=>document.fonts.ready);
  const result=await page.evaluate(()=>({w:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,overflow:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();const s=getComputedStyle(e);return s.position!=='absolute'&&s.position!=='fixed'&&r.width>0&&(r.right>innerWidth+1||r.left< -1)}).slice(0,8).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent?.slice(0,40)}))}));
  reports.push({width,route,...result});
  if(width===1440||width===390){
   await page.screenshot({path:`${root}/${route==='/'?'home':route.replaceAll('/','')}-${width}-view.png`});
   if(route==='/')for(const cls of ['problem','world-strategy','world-creative','world-media','world-search','world-conversion','world-measurement','thesis','engagements','work-section','founder','final-cta']){
    await page.locator('.'+cls).scrollIntoViewIfNeeded();await page.locator('.'+cls).screenshot({path:`${root}/${cls}-${width}.png`});
   }
   if(route==='/contact/')await page.locator('.contact-layout').screenshot({path:`${root}/form-${width}.png`});
  }
 }
}
await page.setViewportSize({width:1440,height:900});
await fs.writeFile(`${root}/layout.json`,JSON.stringify({reports,errors},null,2));
const accessibility=[];
for(const route of ['/','/services/','/work/','/about/','/contact/']){
 await page.goto('http://localhost:3000'+route);
 const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 accessibility.push({route,violations:results.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary})).slice(0,10)}))});
}
await fs.writeFile(`${root}/audit.json`,JSON.stringify({reports,accessibility,errors},null,2));console.log(JSON.stringify({overflow:reports.filter(r=>r.scrollWidth>r.w||r.overflow.length||r.h1!==1),accessibility,errors},null,2));await browser.close();
