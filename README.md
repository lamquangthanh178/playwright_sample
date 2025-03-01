# Playwright Sample.
This is the sample project with Playwright using Javascript as the programming language. Report with https://allurereport.org/docs/playwright/.

# Required software

- Node js -> v.16 or above
- VS Code

# Setup 
Clone this repo and execute the next commands

Navigate to the folder and install the NPM packages

```console
npm install
```
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

