import {WebElement} from "../web.element";
import {User} from "../../types/user";
import {expect} from "@playwright/test";

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

    async open() {
        await this.hamburger.click();
    }

    async signIn() {
        await this.signInLink.click();
    }

    async checkUserIs(user: User) {
        await expect(this.username).toHaveText(user.email);
    }
}