import {chromium} from 'playwright';import fs from 'node:fs';import assert from 'node:assert/strict';process.chdir(import.meta.dirname);
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const report=[];
for(const width of [1440,1280,1024,768,390,360]){
 const context=await browser.newContext({viewport:{width,height:960},reducedMotion:'reduce'});const page=await context.newPage();
 for(const route of ['services','services/attention-audit','services/growth-build','services/partner']){
 await page.goto('http://127.0.0.1:4179/'+route+'/');await page.waitForSelector('.sv-page[data-ready=true]',{timeout:15000}).catch(async()=>{await page.reload();await page.waitForSelector('.sv-page[data-ready=true]');});await page.evaluate(()=>document.fonts.ready);
 const key=route.replaceAll('/','-');if([1440,390].includes(width)){await page.screenshot({path:`../sv-${key}-opening-${width}.png`});}
 if(route==='services'){
  for(const section of await page.locator('[data-scene]').all()){await section.scrollIntoViewIfNeeded();await page.waitForTimeout(200);if([1440,390].includes(width))await section.screenshot({path:`../sv-scene-${await section.getAttribute('data-scene')}-${width}.png`});}
 }else{if([1440,390].includes(width)){await page.locator('.sv-offer-close').scrollIntoViewIfNeeded();await page.screenshot({path:`../sv-${key}-full-${width}.png`,fullPage:true});}}
 const data=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelector('h1')?.innerText,scenes:document.querySelectorAll('[data-scene]').length,canonical:document.querySelector('link[rel=canonical]')?.href,overflow:[...document.querySelectorAll('.sv-page *')].filter(e=>{const r=e.getBoundingClientRect();return r.left < -1 || r.right>innerWidth+1}).slice(0,8).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,55)}))}));report.push({route,...data});console.log(JSON.stringify({route,width,overflow:data.scrollWidth-width,details:data.overflow}));
 }
 await context.close();
}
await browser.close();fs.writeFileSync('../services-layout.json',JSON.stringify(report,null,2));for(const r of report)assert.equal(r.scrollWidth,r.width);
