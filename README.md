# Test task

## Getting started

This project based in [Playwright framework](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/)

## Description 
This project contains 3 tests for https://www.whatjobs.com

## Structure 
This project contains several layers
- tests - test layer 
- utils - utils layer. There is an object here for generating random data, specifically passwords.
- types - Here are descriptions of types needed for tests.
- ui - Here are classes of pages and elements present on those pages. WebElement is a parent class where a function for locating elements is defined.

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