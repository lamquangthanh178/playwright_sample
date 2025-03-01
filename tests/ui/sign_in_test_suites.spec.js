import {
  test,
  expect
} from '@playwright/test';
import LoginPage from '../../pageObject/LoginPage.js';
import Homepage from '../../pageObject/HomePage.js';
import fs from 'fs';
import WelcomePage from '../../pageObject/WelcomePage.js';

test.describe('Sign In Test Suite', () => {
  let dataLogin01;
  test.beforeAll(() => {
    dataLogin01 = JSON.parse(fs.readFileSync('./data/sign_in.json', 'utf8'));
  });

  test('User can log in successfully', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new Homepage(page);
    const welcomePage = new WelcomePage(page);

    await homePage.navigate();
    await homePage.clickLabelSignIn();
    await loginPage.inputEmail(dataLogin01.email);
    await loginPage.inputPassword(dataLogin01.password);
    await loginPage.clickSignIn();
    const isButtonGetStartedExist = await welcomePage.verifyButtonGetStartedVisible();
    expect(isButtonGetStartedExist).toBe(true);
    await welcomePage.clickLogoutButton();
  });

  test('Verify the validation of fields when input empty value', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new Homepage(page);

    await homePage.navigate();
    await homePage.clickLabelSignIn();
    await loginPage.inputEmail("");
    await loginPage.inputPassword("");
    await loginPage.clickSignIn();
    const isErrorMessageWithBlankEmailVisible = await loginPage.verifyErrorMessageWithBlankEmailVisible();
    expect(isErrorMessageWithBlankEmailVisible).toBe(true);
    const isErrorMessageWithBlankPasswordVisible = await loginPage.verifyErrorMessageWithBlankPasswordVisible();
    expect(isErrorMessageWithBlankPasswordVisible).toBe(true);
  });

  test('Verify the validation of email when input invalid format email', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new Homepage(page);

    await homePage.navigate();
    await homePage.clickLabelSignIn();
    await loginPage.inputEmail(dataLogin01.invalidEmail);
    await loginPage.inputPassword(dataLogin01.password);
    await loginPage.clickSignIn();
    const isErrorMessageWithInvalidEmailFormatVisible = await loginPage.verifyErrorMessageWithInvalidEmailFormat();
    expect(isErrorMessageWithInvalidEmailFormatVisible).toBe(true);
  });
});