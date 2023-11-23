import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {LoginPage} from "../ui/pages/login.page";
import {steps} from "../steps/steps";
import {generator} from "../utils/generator";
import {mainUser, User} from "../test.data/user";

test.describe('Login spec', () => {
    const userWithWrongPassword: User = {
        email: mainUser.email,
        password: generator.password()
    }

    /**
     * Scenario 1:
     * 1. Open https://www.whatjobs.com
     * 2. Close country pop up
     * 3. Open right navigation
     * 4. Click Sign In
     * 5. Set correct credentials and click Login
     * 6. Open right navigation
     * 7. Check that user email present
     */
    test('Scenario 1: User can login with correct credentials', async ({page}) => {
        await steps.openApp(page);
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.openSignInPage();
        const loginPage = new LoginPage(page)
        await loginPage.checkUrl();
        await loginPage.login(mainUser);
        await mainPage.rightNavigation.checkUserIs(mainUser)
    });

    /**
     * Scenario 2:
     * 1. Open https://www.whatjobs.com
     * 2. Close country pop up
     * 3. Open right navigation
     * 4. Click Sign In
     * 5. Set correct email and incorrect password and click Login
     * 6. Check that 'Wrong password' error present
     */
    test('Scenario 2: User can not login with wrong password', async ({page}) => {
        await steps.openApp(page);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.openSignInPage();
        const loginPage = new LoginPage(page)
        await loginPage.login(userWithWrongPassword);
        await loginPage.checkWrongPasswordErrorVisible()
    });
})


