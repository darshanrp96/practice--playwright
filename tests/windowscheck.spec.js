import {test,expect} from '@playwright/test';
import { Windows } from '../Pages/Windows.js';  


test('windows check', async ({page})=>{

    const win = new Windows(page);
    await win.navigate();
    await win.clicknewtab();

})


