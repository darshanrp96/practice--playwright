import { test, expect } from '@playwright/test'; 

test.describe('Smoke Testing', () => {

  test('Test 1', async ({ page }) => {
    // Test code for Test 1
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('Test 2', async ({ page }) => {
    // Test code for Test 2
    await page.goto('https://example.com');
    const heading = await page.locator('h1').textContent();
    expect(heading).toBe('Example Domain');
  });

  });

  test.describe('Sanity testing', () => {

    test('Test 3', async ({ page }) => {
      // Test code for Test 3
      await page.goto('https://example.com');
      const link = await page.locator('a').textContent();
      expect(link).toBe('More information...');
    });

  });
