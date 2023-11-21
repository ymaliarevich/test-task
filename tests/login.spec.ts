import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {mainUser, User} from "../types/user";
import {LoginPage} from "../ui/pages/login.page";
import {generator} from "../utils/generator";

test.describe('Login spec', () => {

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
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.open();
        await mainPage.rightNavigation.signIn();
        const loginPage = new LoginPage(page)
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
        await page.goto(process.env.BASE_URL);
        const userWithWrongPass: User = {
            email: mainUser.email,
            password: generator.password()
        }
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp()
        await mainPage.rightNavigation.open();
        await mainPage.rightNavigation.signIn();
        const loginPage = new LoginPage(page)
        await loginPage.login(userWithWrongPass);
        await loginPage.checkWrongPasswordErrorPresent()
    });
})


