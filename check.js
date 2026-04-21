import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG (' + msg.type() + '):', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  await page.goto('http://localhost:5173', {waitUntil: 'networkidle0'});
  const root = await page.$eval('#root', el => el.innerHTML);
  console.log('ROOT HTML:', root);
  await browser.close();
})();
