import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {JobsPage} from "../ui/pages/jobs.page";

test.describe('Jobs spec', () => {
    const job = 'QA Automation';

    /**
     * Scenario 3:
     * 1. Open https://www.whatjobs.com
     * 2. Open Jobs page
     * 3. Set 'QA Automation' to job text box and click "Search Job"
     * 4. Check that 10 jobs present on the page
     */
    test('Scenario 3: User can see jobs after search', async ({page}) => {
        await page.goto(process.env.BASE_URL);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp();
        await mainPage.topNavigation.openJobsPage();
        const jobsPage = new JobsPage(page);
        await jobsPage.searchForJob(job);
        await jobsPage.checkSearchItemsIs(10);
    });
})


