import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    getElement(locator) {
        if (!locator) {
            throw new Error("Locator is undefined. Make sure you defined it in your Page Object.");
        }
        if (locator.xpath) {
            return this.page.locator(`xpath=${locator.xpath}`);
        }
        if (locator.css) {
            return this.page.locator(`css=${locator.css}`);
        }
        throw new Error("Invalid locator format. Must be an object with 'xpath' or 'css'.");
    }

    async click(selectorObject) {
        const element = await this.getElement(selectorObject);
        await element.click();
    }

    async fill(selectorObject, value) {
        const element = await this.getElement(selectorObject);
        await element.fill(value);
    }

    async navigate(path = '/') {
        await this.page.goto(path, {
            waitUntil: 'domcontentloaded'
        });
    }

    async verifyElementContainsText(selectorObject, expectedText) {
        const element = await this.getElement(selectorObject);
        await expect(element).toContainText(expectedText);
    }
}
export default BasePage;