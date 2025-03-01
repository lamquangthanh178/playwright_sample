import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.tb_email = { css: '[name="email"]' }; 
        this.tb_password = { css: '[name="password"]' }; 
        this.btn_signIn = { xpath: '//span[text()="Sign in"]' }; 
        this.lb_errorBlankEmail = {xpath: '//span[text()="Email is required"]'}
        this.lb_errorBlankPassword = {xpath: '//span[text()="Password is required"]'}
        this.lb_errorInvalidEmailFormat = {xpath: '//span[text()="Email is invalid"]'}
    }

    async inputEmail(email) {
        await this.fill(this.tb_email, email);
    }

    async inputPassword(password) {
        await this.fill(this.tb_password, password);
    }

    async clickSignIn() {
        await this.click(this.btn_signIn);
    }

    async verifyErrorMessageWithBlankEmailVisible() {
        const element = this.getElement(this.lb_errorBlankEmail);
        return await element.isVisible(); 
    }

    async verifyErrorMessageWithBlankPasswordVisible() {
        const element = this.getElement(this.lb_errorBlankPassword);
        return await element.isVisible(); 
    }

    async verifyErrorMessageWithInvalidEmailFormat() {
        const element = this.getElement(this.lb_errorInvalidEmailFormat);
        return await element.isVisible(); 
    }
}
export default LoginPage;
