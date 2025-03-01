import BasePage from './BasePage.js';

class WelcomePage extends BasePage {
    constructor(page) {
        super(page);
        this.btn_getStarted = { xpath: '//div[@class="welcome-screen__wrap-btn"]//span[text()="Get Started"]' }; 
        this.btn_logout = {xpath: '//span[text()="Log out"]'}
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded'); 
        await this.page.waitForSelector(this.btn_getStarted.xpath, { state: 'visible' }); 
    }

    async verifyButtonGetStartedVisible() {
        await this.waitForPageLoad(); 
        const element = this.getElement(this.btn_getStarted);
        return await element.isVisible(); 
    }

    async clickLogoutButton() {
        await this.click(this.btn_logout);
    }


}
export default WelcomePage;
