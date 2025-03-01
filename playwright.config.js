import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'], // Shows real-time results in the terminal
    ['allure-playwright'], // Generates Allure report
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    baseURL: 'https://speechanalyzer.elsaspeak.com',
    apiBaseURL:'https://reqres.in',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'API-Tests-Chrome',
      use: { browserName: 'chromium' },
      testMatch: ['tests/api/*.spec.js'], // Only run API tests in Chrome
    },
    {
      name: 'UI-Tests-Chrome',
      use: { browserName: 'chromium' },
      testMatch: ['tests/ui/*.spec.js'], // UI tests in Chrome
    },
    {
      name: 'UI-Tests-Firefox',
      use: { browserName: 'firefox' },
      testMatch: ['tests/ui/*.spec.js'], // UI tests in Firefox
    },
  ],
});