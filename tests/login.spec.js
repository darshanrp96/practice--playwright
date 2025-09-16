console.log("login test");
const {test, expect} = require("@playwright/test");

test("Validate login", async function({page}){

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.fill("//input[@name='username']","Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.click("//button[@type='submit']");
await page.waitForLoadState('networkidle');
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

await page.click("//img[@class='oxd-userdropdown-img']");
await page.click("//a[text()='Logout']");

await page.waitForTimeout(3000);
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})



