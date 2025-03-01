import BasePage from './BasePage.js';

class SignUpPage extends BasePage {
    constructor(page) {
        super(page);
        this.fullNameInput = { xpath: '//input[@name="fullName"]' };  
        this.emailInput = { xpath: '//input[@name="email"]' };  
        this.passwordInput = { xpath: '//input[@name="password"]' }; 
        this.signUpButton = { xpath: '//span[text()="Create an account"]' };
        this.letCreateAnAccountButton = {xpath: '//span[text()="No, let’s create an account"]'}
        this.fullNameValidationMessage = {xpath: '//input[@name="fullName"]/..//div[@class="form__validation-message"]'}
        this.emailValidationMessage = {xpath: '//input[@name="email"]/..//div[@class="form__validation-message"]'}
        this.passwordValidationMessage = {xpath: '//input[@name="password"]/..//div[@class="form__validation-message"]'}
    }

    async inputFullName(fullName) {
        await this.fill(this.fullNameInput, fullName);
    }

    async inputEmail(email) {
        await this.fill(this.emailInput, email);
    }

    async inputPassword(password) {
        await this.fill(this.passwordInput, password);
    }

    async clickSignUp() {
        await this.click(this.signUpButton);
    }

    async clickLetCreateAccountButton() {
        await this.click(this.letCreateAnAccountButton);
    }

    async verifyFullNameValidationMessage(expectedResult) {
        await this.verifyElementContainsText(this.fullNameValidationMessage, expectedResult);
    }

    async verifyEmailValidationMessage(expectedResult) {
        await this.verifyElementContainsText(this.emailValidationMessage, expectedResult);
    }

    async verifyPasswordValidationMessage(expectedResult) {
        await this.verifyElementContainsText(this.passwordValidationMessage, expectedResult);
    }


}
export default SignUpPage;
