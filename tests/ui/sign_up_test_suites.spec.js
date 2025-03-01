import {
  test,
  expect
} from '@playwright/test';
import Homepage from '../../pageObject/HomePage.js';
import fs from 'fs';
import SignUpPage from '../../pageObject/SignUpPage.js';
import { generateRandomEmail } from '../../Utils/utils_functions.js';
import { faker } from '@faker-js/faker';
import WelcomePage from '../../pageObject/WelcomePage.js';


test.describe('Sign Up Test Suite', () => {
  let dataSignUp;
  let randomEmail;
  let fullName
  test.beforeAll(() => {
    dataSignUp = JSON.parse(fs.readFileSync('./data/sign_up.json', 'utf8'));
    randomEmail = generateRandomEmail();
    fullName = faker.person.fullName();
  });

  test('User can sign up account successfully', async ({page}) => {
    const welcomePage = new WelcomePage(page);
    const homePage = new Homepage(page);
    const signUpPage = new SignUpPage(page);

    await homePage.navigate('/sign-up');
    await signUpPage.clickLetCreateAccountButton();
    await signUpPage.inputFullName(fullName);
    await signUpPage.inputEmail(randomEmail);
    await signUpPage.inputPassword(dataSignUp.password);
    await signUpPage.clickSignUp();
    const isButtonGetStartedExist = await welcomePage.verifyButtonGetStartedVisible();
    expect(isButtonGetStartedExist).toBe(true);
    await welcomePage.clickLogoutButton();
  });

  test('Verify the validation message when user input an empty fields', async ({page}) => {
    const homePage = new Homepage(page);
    const signUpPage = new SignUpPage(page);

    await homePage.navigate('/sign-up');
    await signUpPage.clickLetCreateAccountButton();
    await signUpPage.clickSignUp();
    await signUpPage.verifyFullNameValidationMessage(dataSignUp.blankFullnameValidationMessage);
    await signUpPage.verifyEmailValidationMessage(dataSignUp.blankEmailValidationMessage);
    await signUpPage.verifyPasswordValidationMessage(dataSignUp.blankPasswordValidationMessage);
  });

  test('Verify the validation message when user input invalid email format', async ({page}) => {
    const homePage = new Homepage(page);
    const signUpPage = new SignUpPage(page);

    await homePage.navigate('/sign-up');
    await signUpPage.clickLetCreateAccountButton();
    await signUpPage.inputFullName(fullName);
    await signUpPage.inputEmail(dataSignUp.invalidEmailFormat);
    await signUpPage.inputPassword(dataSignUp.password);
    await signUpPage.clickSignUp();
    await signUpPage.verifyEmailValidationMessage(dataSignUp.invalidEmailFormatMessage);
  }); 
});