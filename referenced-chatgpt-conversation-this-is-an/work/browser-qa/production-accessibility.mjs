import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
for(const route of ['/','/services/','/work/','/about/','/contact/']){await page.goto('http://127.0.0.1:4179'+route);const a=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();assert.deepEqual(a.violations,[]);console.log(route+' accessibility: zero violations');}
await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Menu',exact:true}).click();await page.keyboard.press('Escape');assert.equal(await page.getByRole('button',{name:'Menu',exact:true}).evaluate(e=>e===document.activeElement),true);assert.deepEqual(errors,[]);console.log('Escape returns focus; no browser console or page errors.');await browser.close();
