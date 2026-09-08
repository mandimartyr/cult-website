import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1440,height:900}});
const page=await context.newPage();const log=[];const failures=[];const requests=[];
page.on('request',r=>{if(r.url().endsWith('.mp4'))requests.push(r.url())});
await page.goto('http://localhost:3000/');
await page.waitForFunction(()=>{const v=document.querySelector('video');return v&&v.currentTime>.1&&v.readyState===4});
assert.equal(await page.locator('video').count(),1);log.push('Only active hero video loaded; playback advances.');
for(const [i,name] of ['Strategy','Creative','Media','Search','Conversion','Measurement'].entries()){
 const tab=page.getByRole('tab',{name:`0${i+1} ${name}`,exact:true});await tab.click();assert.equal(await tab.getAttribute('aria-selected'),'true');
}
await page.getByRole('tab',{name:'02 Creative',exact:true}).click();await page.getByRole('tab',{name:'02 Creative',exact:true}).press('ArrowRight');assert.equal(await page.getByRole('tab',{name:'03 Media',exact:true}).getAttribute('aria-selected'),'true');log.push('Six worlds select correctly; arrow keys activate the next world.');
await page.getByRole('button',{name:'Pause all films',exact:true}).first().click();assert.equal(await page.locator('video').count(),0);log.push('Global pause unloads every film.');
await page.getByRole('button',{name:'Play films',exact:true}).first().click();await page.waitForFunction(()=>document.querySelector('video')?.currentTime>.1);
await page.locator('.thesis').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelectorAll('video').length===0);log.push('Offscreen hero suspends and unloads.');
await page.getByRole('link',{name:'Start with an audit',exact:true}).click();await page.waitForURL('**/contact/?engagement=Audit');assert.match(await page.locator('.engagement-selected').innerText(),/Audit/);
await page.getByRole('button',{name:'Start the conversation',exact:true}).click();assert.equal(await page.locator('[aria-invalid=true]').count(),3);assert.equal(await page.locator('#name').evaluate(e=>e===document.activeElement),true);
await page.getByLabel('Name',{exact:false}).fill('QA Example');await page.getByLabel('Email',{exact:false}).fill('qa@example.com');await page.getByLabel('Company / Brand').fill('Test & Brand');await page.getByLabel('What needs to move?').fill('More qualified leads & better search.');
await page.getByRole('button',{name:'Start the conversation',exact:true}).click();await page.getByRole('heading',{name:'Ready for your email app.'}).waitFor();
const href=await page.getByRole('link',{name:'Open email draft'}).getAttribute('href');assert.ok(href.startsWith('mailto:hello@cultmedia.house?'));const url=new URL(href);assert.match(url.searchParams.get('body'),/Engagement: Audit/);assert.match(url.searchParams.get('body'),/More qualified leads & better search./);assert.match(await page.locator('.enquiry-review').innerText(),/Nothing has been sent/);log.push('Audit prefill, validation, focus, review and correctly encoded email draft verified without sending.');
await page.getByRole('button',{name:'Copy enquiry',exact:true}).click();await page.getByRole('status').filter({hasText:'Enquiry copied.'}).waitFor();log.push('Copy enquiry fallback works.');
await page.screenshot({path:'work/qa/contact-review.png'});
await page.setViewportSize({width:390,height:844});await page.goto('http://localhost:3000/');assert.equal(await page.locator('video').count(),0);await page.getByRole('button',{name:'Menu',exact:true}).click();assert.equal(await page.getByRole('button',{name:'Close',exact:true}).getAttribute('aria-expanded'),'true');await page.getByRole('link',{name:'02 Services',exact:true}).click();await page.waitForURL('**/services/');assert.equal(await page.getByRole('button',{name:'Menu',exact:true}).getAttribute('aria-expanded'),'false');log.push('Mobile starts with posters; menu opens, navigates, and closes.');
await page.goto('http://localhost:3000/');await page.getByRole('button',{name:'Play films',exact:true}).first().click();await page.waitForFunction(()=>document.querySelector('video')?.currentTime>.1);assert.match(await page.locator('video').first().getAttribute('src'),/-mobile.mp4$/);log.push('Explicit mobile playback uses the mobile video file.');
await page.emulateMedia({reducedMotion:'reduce'});await page.setViewportSize({width:1440,height:900});await page.goto('http://localhost:3000/');assert.equal(await page.locator('video').count(),0);assert.equal(await page.locator('.hero-film').evaluate(e=>getComputedStyle(e).animationName),'none');log.push('Reduced motion disables autoplay and transitions.');
const saveContext=await browser.newContext({viewport:{width:1440,height:900}});await saveContext.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true,effectiveType:'4g'}}));const savePage=await saveContext.newPage();await savePage.goto('http://localhost:3000/');assert.equal(await savePage.locator('video').count(),0);log.push('Save-data mode stays on posters.');
for(const width of [1440,1280,1024,768,390,360]){await page.setViewportSize({width,height:844});for(const route of ['/','/work/','/services/','/about/','/contact/']){await page.goto('http://localhost:3000'+route);const w=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));if(w.document>w.viewport)failures.push({width,route,...w});}}
assert.deepEqual(failures,[]);log.push('All five pages have zero horizontal overflow at all six requested widths.');
await fs.writeFile('work/qa/interactions.json',JSON.stringify({log,requests:[...new Set(requests)],failures},null,2));console.log(log.join('\n'));await browser.close();
