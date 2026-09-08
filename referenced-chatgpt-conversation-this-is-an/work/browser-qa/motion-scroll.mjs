import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const results=[];
for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:900}});await page.addInitScript(()=>{window.motionShifts=[];new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.motionShifts.push(e.value)}).observe({type:'layout-shift',buffered:true})});await page.goto('http://127.0.0.1:4179/');await page.waitForTimeout(500);
 if(width===390)await page.getByRole('button',{name:'Play films',exact:true}).first().click();
 await page.evaluate(()=>document.documentElement.style.scrollBehavior='auto');
 for(const selector of ['#strategy','#creative','#media','#search','#conversion','#measurement','.engagement-audit','.engagement-build','.engagement-partner']){
  const target=page.locator(selector+' .media').filter({has:page.locator('picture')}); const el=selector==='#creative'?target.nth(1):target.first();await el.scrollIntoViewIfNeeded();await el.locator('video').waitFor();await el.locator('video').evaluate(v=>new Promise((resolve,reject)=>{let n=0;const timer=setInterval(()=>{if(v.currentTime>.1){clearInterval(timer);resolve(true)}else if(++n>100){clearInterval(timer);reject(new Error('film not advancing '+v.src))}},50)}));
 }
 await page.locator('.thesis h2').scrollIntoViewIfNeeded();await page.waitForTimeout(1200);await page.locator('.thesis').screenshot({path:`../motion-thesis-${width}.png`});
 const shifts=await page.evaluate(()=>window.motionShifts);results.push({width,films:9,layoutShift:shifts.reduce((a,b)=>a+b,0)});assert.equal(results.at(-1).layoutShift,0);
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.thesis').evaluate(el=>el.getAnimations({subtree:true}).length),0);await page.close();
}
await fs.writeFile('../motion-scroll-qa.json',JSON.stringify(results,null,2));console.log(results);await browser.close();
