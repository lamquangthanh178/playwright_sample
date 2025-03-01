import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.lb_signIn = { xpath: '//div[@class="header__menu-items"]//a[text()="Sign in"]' }; 
        this.btn_createAnAccountFree = {xpath: '//div[@class="header__menu-items"]//span[text()="Create an account for FREE"]'}
    }

    async clickLabelSignIn() {
        await this.click(this.lb_signIn);
    }

    async clickBtnCreateAnAccountFree() {
        await this.click(this.btn_createAnAccountFree);
    }

}
export default LoginPage;
