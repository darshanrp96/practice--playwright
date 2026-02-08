import {test,expect} from "@playwright/test"
import path from "path";
//test.use({viewport : {width: 1440, height: 900}})

test('Login test', async ({page}) => {

//login page

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveTitle('OrangeHRM');

//logout 

await page.getByAltText("profile picture").click();
await page.getByText("Logout").click();

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

