import {defineConfig} from '@playwright/test';
import * as dotenv from "dotenv";

/**
 * Here, based on the passed variable ENV, we determine where we will run the tests.
 * In case the variable is not passed, it will default to 'dev'.
 */
const environment = process.env.ENV ? process.env.ENV : 'dev';
dotenv.config({path: `./environments/${environment}.env`});

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  timeout: 15 * 1000,
  reporter: 'list',
  use: {
    screenshot: 'only-on-failure',
    locale: 'en-GB',
    headless: false
  },
});
