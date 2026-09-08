import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1586,height:992},reducedMotion:'reduce'});const page=await context.newPage();
await page.goto('http://localhost:3000/');await page.evaluate(()=>document.fonts.ready);
await page.screenshot({path:'work/qa/final-home-native.png'});
const copy=await page.locator('.hero').innerText();await fs.writeFile('work/qa/hero-copy.txt',copy);
for(const width of [1440,390,360]){
 await page.setViewportSize({width,height:width===1440?900:844});await page.goto('http://localhost:3000/');await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:`work/qa/final-home-${width}.png`});
 for(const cls of ['problem','world-media','world-conversion','thesis','engagements','founder','final-cta']){await page.locator('.'+cls).scrollIntoViewIfNeeded();await page.locator('.'+cls).screenshot({path:`work/qa/final-${cls}-${width}.png`});}
 for(const route of ['work','services','about','contact']){await page.goto('http://localhost:3000/'+route+'/');await page.screenshot({path:`work/qa/final-${route}-${width}.png`});if(width===390&&route==='contact'){const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();console.log('Mobile contact accessibility',a.violations.map(v=>v.id));}}
}
console.log('Native 1586×992 and final desktop/mobile captures complete.');await browser.close();
