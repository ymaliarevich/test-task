import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {JobsPage} from "../ui/pages/jobs.page";

test.describe('Jobs spec', () => {
    const job = 'QA Automation';

    test('User can find job by title', async ({page}) => {
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp();
        await mainPage.topNavigation.openJobsPage();
        const jobsPage = new JobsPage(page);
        await jobsPage.searchForJob(job);
        await jobsPage.checkSearchItemIs(10);
    });
})


