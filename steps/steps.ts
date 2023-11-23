import {Page} from "@playwright/test";
import {MainPage} from "../ui/pages/main.page";
import {LoginPage} from "../ui/pages/login.page";
import {User} from "../types/user";

export const steps = {
    login: async (page: Page, user: User): Promise<MainPage> => {
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.openSignInPage();
        const loginPage = new LoginPage(page)
        await loginPage.login(user);
        return new MainPage(page);
    },

    openApp: async (page: Page) => {
        await page.goto(process.env.BASE_URL);
    }
}