import { test, expect } from '@playwright/test'; 
import { Loginpage} from '../Pages/Loginpage.js';

test('Verify Login', async ({page}) => {

const login = new Loginpage(page)
await login.navigate();
await login.loginmethod('Darshan','Pardeshi@12345');

});
