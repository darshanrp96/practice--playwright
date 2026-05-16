import { test,expect,chromium } from"@playwright/test";

test('Browser launch test', async ({playwright}) =>{

    const browser = await playwright.chromium.launch({ headless: false , viewport: null});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    const title = await page.title();
    console.log(title);
    expect(title).toBe('Google');
});