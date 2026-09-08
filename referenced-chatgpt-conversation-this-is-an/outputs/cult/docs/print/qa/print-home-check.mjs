import {chromium} from 'playwright';import assert from 'node:assert/strict';import fs from 'node:fs';
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const report=[];
for(const width of [1440,768,390,360]){
 const p=await b.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});await p.goto('http://127.0.0.1:4179/');await p.evaluate(()=>document.fonts.ready);await p.locator('.print-art-layer.is-active img').evaluate(i=>i.decode());
 for(const id of ['strategy','creative','media','search','conversion','measurement']){
 await p.getByRole('tab',{name:new RegExp(id,'i')}).click();await p.locator(`.print-art-layer[data-art="${id}"].is-active`).waitFor();await p.locator('.print-art-layer.is-active img').evaluate(i=>i.decode());assert.equal(await p.getByRole('tab',{name:new RegExp(id,'i')}).getAttribute('aria-selected'),'true');
 }
 const overflow=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth);assert.equal(overflow,0);await p.getByRole('tab',{name:/creative/i}).click();await p.locator('[data-art="creative"].is-active').waitFor();await p.screenshot({path:`../print-home-final-${width}.png`});report.push({width,overflow,sixStates:true});await p.close();
}
const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('http://127.0.0.1:4179/');const normal=await p.locator('.print-art-layer').first().evaluate(e=>getComputedStyle(e).transitionDuration);await p.emulateMedia({reducedMotion:'reduce'});const reduced=await p.locator('.print-art-layer').first().evaluate(e=>getComputedStyle(e).transitionDuration);assert.equal(normal,'0.9s');assert.equal(reduced,'0s');report.push({normal,reduced});fs.writeFileSync('../print-home-check.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));await b.close();
