import {WebElement} from "../web.element";
import {expect} from "@playwright/test";
import {User} from "../../types/user";

export class RightNavigation extends WebElement {
    get hamburger() {
        return this.getElement('//span[contains(@class, "menuHamburger")]');
    }

    get username() {
        return this.getElement('//li[contains(@class, "loggedInInfo")]');
    }

    get signInLink() {
        return this.getElement('//a[text()="Sign In"]');
    }

    get myJobAlertsLink() {
        return this.getElement('//a[text()="My Job Alerts"]')
    }

    async open() {
        await this.page.waitForTimeout(1000);
        await this.hamburger.click();
    }

    async openSignInPage() {
        await this.open();
        await this.signInLink.click();
    }

    async openMyJobAlertsPage() {
        await this.open();
        await this.myJobAlertsLink.click()
    }

    async checkUserIs(user: User) {
        await expect(this.username).toHaveText(user.email);
    }
}