import {test,expect} from "@playwright/test"

test('Veriy error message', async ({page}) =>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123333");
await page.getByRole('button', { name: 'Login' }).click();

  
})