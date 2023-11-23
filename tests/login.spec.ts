import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {LoginPage} from "../ui/pages/login.page";
import {steps} from "../steps/steps";
import {generator} from "../utils/generator";
import {mainUser, User} from "../types/user";

test.describe('Login spec', () => {
    const userWithWrongPassword: User = {
        email: mainUser.email,
        password: generator.password()
    }

    test('User can login with correct credentials', async ({page}) => {
        await steps.openApp(page);
        const mainPage = await steps.login(page, mainUser);
        await mainPage.rightNavigation.checkUserIs(mainUser)
    });

    test('User can not login with wrong password', async ({page}) => {
        await steps.openApp(page);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.openSignInPage();
        const loginPage = new LoginPage(page)
        await loginPage.login(userWithWrongPassword);
        await loginPage.checkWrongPasswordErrorVisible()
    });
})


