import {test} from '@playwright/test';
import {steps} from "../steps/steps";
import {MyJobAlertsPage} from "../ui/pages/my.job.alerts.page";
import {JobData} from "../test.data/job.data";
import {mainUser} from "../types/user";

test.describe('Jobs spec', () => {
    const jobData: JobData = {
        role: 'QA Automation',
        location: 'New York'
    }

    test('User can create and delete alert', async ({page}) => {
        await steps.openApp(page);
        const mainPage = await steps.login(page, mainUser);
        await mainPage.rightNavigation.openMyJobAlertsPage();
        const myJobAlertsPage = new MyJobAlertsPage(page);
        await myJobAlertsPage.checkUrl();
        await myJobAlertsPage.createJobAlert();
        await myJobAlertsPage.jobAlertPopUp.searchBy(jobData);
        await myJobAlertsPage.checkJobAlertVisible(jobData);
        await myJobAlertsPage.deleteJobAlert(jobData);
        await myJobAlertsPage.checkJobAlertHidden(jobData);
    });
})


