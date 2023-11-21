import {BasePage} from "./base.page";
import {User} from "../../types/user";
import {expect} from "@playwright/test";

export class LoginPage extends BasePage {
    get email() {
        return this.getElement('[name="email"]');
    }

    get password() {
        return this.getElement('[name="password"]');
    }

    get submit() {
        return this.getElement('[type="submit"]');
    }

    get wrongPasswordError() {
        return this.getElement('//div[.="Wrong password"]');
    }

    async login(user: User) {
        await this.email.fill(user.email);
        await this.password.fill(user.password);
        await this.submit.click();
    }

    async checkWrongPasswordErrorPresent() {
        await expect(this.wrongPasswordError).toBeVisible();
    }
}