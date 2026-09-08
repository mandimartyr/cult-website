import {chromium} from 'playwright';
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const p=await b.newPage({viewport:{width:1536,height:1024},reducedMotion:'reduce'});
await p.goto('http://127.0.0.1:4179/services/');await p.evaluate(()=>document.fonts.ready);await p.locator('.sv-aperture img').first().waitFor();await p.waitForTimeout(400);
await p.screenshot({path:'../services-latest-hero.png'});
console.log(await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,fonts:[...document.querySelectorAll('.sv-hero h1,.sv-headline-row,.sv-headline-last')].map(e=>({text:e.innerText,font:getComputedStyle(e).fontFamily,size:getComputedStyle(e).fontSize,rect:{w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height}}))})));
await b.close();
