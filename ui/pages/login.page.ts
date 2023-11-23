import {BasePage} from "./base.page";
import {expect} from "@playwright/test";
import {User} from "../../test.data/user";

export class LoginPage extends BasePage {
    get emailTB() {
        return this.getElement('[name="email"]');
    }

    get passwordTB() {
        return this.getElement('[name="password"]');
    }

    get submitBtn() {
        return this.getElement('[type="submit"]');
    }

    get wrongPasswordError() {
        return this.getElement('//div[.="Wrong password"]');
    }

    async login(user: User) {
        await this.emailTB.fill(user.email);
        await this.passwordTB.fill(user.password);
        await this.submitBtn.click();
    }

    async checkWrongPasswordErrorVisible() {
        await expect(this.wrongPasswordError).toBeVisible();
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(new RegExp('.*/nav/login-for-members$'))
    }
}