import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1504,height:1056},reducedMotion:'reduce'});const page=await context.newPage();const results=[];const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:4179/');await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:'work/redesign/hero-native.png'});
for(const width of [1440,1280,1024,768,390,360]){
 await page.setViewportSize({width,height:900});
 for(const route of ['/','/services/','/work/','/about/','/contact/']){
 await page.goto('http://127.0.0.1:4179'+route);await page.evaluate(()=>document.fonts.ready);
 const o=await page.evaluate(()=>({w:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length}));results.push({width,route,...o});
 if([1440,390].includes(width))await page.screenshot({path:`work/redesign/${route==='/'?'home':route.replaceAll('/','')}-${width}.png`});
 if(route==='/'&&[1440,390].includes(width))for(const cls of ['problem','world-strategy','world-creative','world-media','world-search','world-conversion','world-measurement','thesis','engagements','work-section','founder','final-cta']){await page.locator('.'+cls).scrollIntoViewIfNeeded();await page.locator('.'+cls).screenshot({path:`work/redesign/${cls}-${width}.png`});}
 }
}
console.log(JSON.stringify({overflow:results.filter(r=>r.scroll>r.w),errors}));await fs.writeFile('work/redesign/layout.json',JSON.stringify(results,null,2));await browser.close();
