import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const baseUrl = 'http://127.0.0.1:4173';

const routes = [
  '/',
  '/about',
  '/products',
  '/products/1',
  '/products/2',
  '/products/3',
  '/products/4',
  '/products/5',
  '/products/6',
  '/franchise',
  '/certifications',
  '/contact',
  '/terms',
];

const server = spawn(
  process.execPath,
  [
    path.resolve('node_modules/vite/bin/vite.js'),
    'preview',
    '--host',
    '127.0.0.1',
    '--port',
    '4173',
    '--strictPort',
  ],
  { stdio: 'inherit' },
);

let browser;

try {
  // Wait for the production preview server.
  let ready = false;

  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) {
      throw new Error('Vite preview server stopped unexpectedly.');
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      // The server may still be starting.
    }

    await delay(500);
  }

  if (!ready) {
    throw new Error('Vite preview server did not start in time.');
  }

  browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(60000);

  for (const route of routes) {
    console.log(`Prerendering ${route}`);

    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });

    if (!response || !response.ok()) {
      throw new Error(
        `Failed to render ${route}: HTTP ${response?.status() ?? 'unknown'}`,
      );
    }

    // Confirm React rendered the page rather than an empty root.
    await page.waitForSelector('#root > div', { timeout: 20000 });

    // Allow animations and page content a moment to settle.
    await delay(1000);

    const html = await page.content();

    const outputDirectory =
      route === '/'
        ? path.resolve('dist')
        : path.resolve('dist', route.slice(1));

    await mkdir(outputDirectory, { recursive: true });
    await writeFile(
      path.join(outputDirectory, 'index.html'),
      html,
      'utf8',
    );

    console.log(`Saved ${route}`);
  }

  console.log('Prerendering completed successfully.');
} catch (error) {
  console.error('Prerendering failed:', error);
  process.exitCode = 1;
} finally {
  if (browser) {
    await browser.close();
  }

  server.kill();
}
