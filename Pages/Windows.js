export class Windows{

constructor(page){

    this.page=page;
    this.newtabbtn = page.locator('#Wikipedia1 a');
    this.newtabtitle = 'Wikipedia';
}

async navigate(){

    await this.page.goto('https://testautomationpractice.blogspot.com/')
}

async clicknewtab(){
const [newtab] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.page.click('#Wikipedia1 > a')
])

await newtab.waitForLoadState();
console.log(await newtab.title());

}
}           

