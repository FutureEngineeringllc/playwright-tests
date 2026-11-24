import { test, expect } from '@playwright/test';

test('navigation headers check appears', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Search (Meta+k)' })).toBeVisible();
});

test('navigation check functional', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect the page to have a heading with the name Installation.
  await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect.soft(page.getByRole('navigation', { name: 'Main' }).locator('b')).toContainText('Playwright');
  await expect.soft(page.getByRole('navigation', { name: 'Main' })).toContainText('Docs');
});

test('dark/light mode', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const themeToggle = page.getByRole('button', { name: 'Switch between dark and light' });
  await themeToggle.click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await themeToggle.click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  
});

test('header text check', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable web');
});

test('get started button', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
});