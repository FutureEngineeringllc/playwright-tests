import { test, expect, Page } from '@playwright/test';

interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

const elements: Elements[] = [
  {
    locator: (page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo link'
  },
  {
    locator: (page) => page.getByRole('heading', { name: 'Playwright enables reliable' }),
    name: 'wtf'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'MCP', exact: true }),
    name: 'MCP link'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'CLI', exact: true }),
    name: 'CLI link'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'API' }),
    name: 'API link'
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Node.js' }),
    name: 'node button'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'git link'
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Discord server' }),
    name: 'discord link'
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'dark/light button'
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Search (Meta+k)' }),
    name: 'search field'
  },
];

test.describe('mainpage tests', () => {
  
  test.beforeEach(async({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('navigation headers check appears', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`check appearence of ${name}`, async() => {
        await expect
        .soft(locator(page))
        .toBeVisible();
      });
    });
    

  
  
});

test('navigation check functional', async ({ page }) => {

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect the page to have a heading with the name Installation.
  await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect.soft(page.getByRole('navigation', { name: 'Main' }).locator('b')).toContainText('Playwright');
  await expect.soft(page.getByRole('navigation', { name: 'Main' })).toContainText('Docs');
});

test('dark/light mode', async ({ page }) => {
  const themeToggle = page.getByRole('button', { name: 'Switch between dark and light' });
  await themeToggle.click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await themeToggle.click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
});

test('header text check', async ({ page }) => {
  await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable web');
});

test('get started button', async ({ page }) => {
  
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
});


});

