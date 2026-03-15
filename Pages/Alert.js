class Alert{

constructor(page){
this.page=page;
this.alertbtn = '#alertBtn';
this.confirmbtn = '#confirmBtn';
this.promptbtn = '#promptBtn';

}

async navigate()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

async clickalert(){
    await this.page.on('dialog', async dialog =>
        {
            console.log(dialog.message());
            await dialog.accept();
        })

        await this.page.click(this.alertbtn);

    await this.page.waitForTimeout(2000);
}

async clickconfirm()
{
  await this.page.on('dialog', async dialog =>{

    console.log(dialog.message());
    await dialog.dismiss();
  })
   await this.page.click(this.alertbtn);

    await this.page.waitForTimeout(3000); 
}

async clcickprompt(){

    await this.page.on('dialog',async dialog =>{

        console.log(dialog.message());
        await dialog.accept('darhsan alert handling')
    })

    await this.page.click(this.promptbtn);

    await this.page.waitForTimeout(3000);

}
}

module.exports={Alert};