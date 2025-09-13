console.log("second test");

const {test,expect} = require('@playwright/test')

test("Verify title", async ({page}) => {
      await page.goto("https://www.google.com/")

      const url = await page.url()
        console.log("url is "+url);
      const title= await page.title()
       console.log("url is "+title);

      await expect(page).toHaveTitle("Google")}

)
