import {test} from '@playwright/test';
import {steps} from "../steps/steps";
import {MyJobAlertsPage} from "../ui/pages/my.job.alerts.page";
import {qaAutomationNewYork} from "../test.data/job";
import {mainUser} from "../test.data/user";

test.describe('Jobs spec', () => {

    /**
     * Scenario 4:
     * 1. Open https://www.whatjobs.com
     * 2. Login
     * 3. Open job alerts page
     * 4. Create job alert
     * 5. Check job alert present on the page
     * 6. Remove job alert
     * 7. Check job alert absent on the page
     */
    test('Scenario 4: User can create and delete alert', async ({page}) => {
        await steps.openApp(page);
        const mainPage = await steps.login(page, mainUser);
        await mainPage.rightNavigation.openMyJobAlertsPage();
        const myJobAlertsPage = new MyJobAlertsPage(page);
        await myJobAlertsPage.checkUrl();
        await myJobAlertsPage.createJobAlert();
        await myJobAlertsPage.jobAlertPopUp.searchBy(qaAutomationNewYork);
        await myJobAlertsPage.checkJobAlertVisible(qaAutomationNewYork);
        await myJobAlertsPage.deleteJobAlert(qaAutomationNewYork);
        await myJobAlertsPage.checkJobAlertHidden(qaAutomationNewYork);
    });
})


