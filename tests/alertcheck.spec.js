import {test,expect} from '@playwright/test';
import { Alert } from '../Pages/Alert.js';


test('Alert check', async ({page}) =>{

    const at = new Alert(page);
    await at.navigate();
    //await at.clickalert();
   // await at.clickconfirm();

    await at.clcickprompt();
})