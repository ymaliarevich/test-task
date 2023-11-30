# Test task

## Getting started

This project based in [Playwright framework](https://playwright.dev/), [TypeScript](https://www.typescriptlang.org/) and page object model

## Description 
This project contains 4 tests for https://www.whatjobs.com

Scenario 1:
* Open https://www.whatjobs.com
* Close country pop up
* Open right navigation
* Click Sign In
* Set correct credentials and click Login
* Open right navigation
* Check that user email present


Scenario 2:
* Open https://www.whatjobs.com
* Close country pop up
* Open right navigation
* Click Sign In
* Set correct email and incorrect password and click Login
* Check that 'Wrong password' error present


Scenario 3:
* Open https://www.whatjobs.com
* Open Jobs page
* Set 'QA Automation' to job text box and click "Search Job"
* Check that 10 jobs present on the page


Scenario 4:
* Open https://www.whatjobs.com
* Login
* Open job alerts page
* Create job alert
* Check job alert present on the page
* Remove job alert
* Check job alert absent on the page
         

## Structure 
This project contains several layers
- tests - test layer 
- utils - utils layer. There is an object here for generating random data, specifically passwords.
- test.data - Here are descriptions of test data needed for tests.
- ui - Here are classes of pages and elements present on those pages. WebElement is a parent class where a function for locating elements is defined.
- steps - Here are steps for complex actions (like login and so on)

## Preparation

- Install last NodeJS LTS version - https://nodejs.org/en/download
- Install git
- Clone project.

## Installation

- Install dependency on root project folder
```
npm install
```

- Install browsers
```
npx playwright install
```

## Run tests

For run tests in headed mode:
```
npm run tests-headed
```

For run tests in headless mode (for example for CI):
```
npm run tests
```