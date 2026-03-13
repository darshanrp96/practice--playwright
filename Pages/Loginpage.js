export class Loginpage{

    constructor(page)
    {
       this.page = page;
       this.username = 'input[name="email"]';
       this.password = 'input[name="password"]';
       this.loginbtn = "button[type='submit']";
    }
    async navigate()
    {
        await this.page.goto('https://automationexercise.com/login');
    }

    async loginmethod(username,password)
    {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginbtn);
    }
}
