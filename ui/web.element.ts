import {Locator, Page} from "@playwright/test";

export class WebElement {
    constructor(protected page: Page) {
        this.page = page;
    }
    getElement(locator: string): Locator {
        return this.page.locator(locator);
    }
}