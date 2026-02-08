console.log("login test");
const {test,expect} = require("@playwright/test")

test("Login Check", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

   await page.locator("//input[@id='name']").fill("darshan");
   await page.getByPlaceholder("Enter EMail").fill("abc@gmail.com");
   await page.getByPlaceholder("Enter Phone").fill("1234");
   await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
   await page.waitForTimeout(3000);

});