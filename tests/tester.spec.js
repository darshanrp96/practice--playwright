//const {test,expect}=require("@playwright/test")

import{test,expect} from "@playwright/test"
test('my test', async ({page}) =>{

    //Navigatation
    await page.goto("https://testautomationpractice.blogspot.com/");

    //filling form
    await page.getByPlaceholder('Enter Name').fill('darshan pardeshi');
    await page.getByPlaceholder('Enter EMail').fill('darshan@gmail.com');
    await page.locator("//input[@id='phone']").fill('12345');
    await page.locator("//textarea[@id='textarea']").fill('pune MH');
    await page.locator("//input[@id='male']").click();
    await page.locator('#sunday').click();
    await page.getByLabel('Thursday').click();

    //dropdown box
    await page.locator("(//select[@class='form-control'])[1]").selectOption('india');
    await page.locator("//option[@value='white']").click();



   // await page.screenshot({path: './screenshots/screenshot.png', fullPage: true});
   await page.waitForTimeout(3000);


})