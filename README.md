# Playwright Sample.
This Playwright framework follows the Page Object Model (POM) for both UI and API testing. It integrates Allure Report for detailed test reporting and supports CI/CD with GitHub Actions, triggering tests automatically on code push to the main branch. Additionally, it sends Slack notifications upon test completion.
## Key Features
✅ POM Design – Reusable page objects for UI & API tests

✅ Allure Reporting – Generates test reports with screenshots & logs

✅ CI/CD Integration – Runs tests on GitHub Actions when pushing code

✅ Slack Notifications – Alerts team on test run completion

# Required software

- Node js -> v.16 or above
- VS Code

# Setup 
Clone this repo and execute the next commands

Navigate to the folder and install the NPM packages

```console
npm install
```
# Project Structure

Playwright_Sample

│-- 📂 tests/                  # Test cases  
│   ├── 📂 api/                 # API test cases  
│   ├── 📂 ui/                  # UI test cases  
│-- 📂 pages/                  # Page Object Model (POM) files  
│-- 📂 utils/                  # Utility functions  
│   ├── 📂 API/                # API request functions  
│   ├── 📂 helpers/            # Helper functions (random data, etc.)  
│-- 📂 data/                   # Test data (JSON files)  
│-- 📂 allure-results/         # Raw Allure results  
│-- 📜 playwright.config.js    # Playwright test configuration  
│-- 📜 package.json            # Dependencies and scripts  
│-- 📜 README.md               # Project documentation  
│-- 📜 playwright.yml          # Config CI/CD  



# Run tests

Execute the following command to run your tests:

```console
npx playwright test
```

Run the test with UI mode.

```console
npx playwright test --ui
```

Run the test and generate + open Allure report.

```console
npm run allure:clear && npm run test && npm run allure:generate && npm run allure:open
```
<img width="1792" alt="image" src="https://github.com/user-attachments/assets/ae04600c-c16d-44c2-9ccc-b3d7fa6d52f8" />

Look on this video for more details to run test
https://drive.google.com/file/d/1WsvYWCGo2TUF-sx9WM_u2pLwR6OopZ0I/view?usp=sharing

