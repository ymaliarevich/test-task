import {test} from '@playwright/test';
import {MainPage} from "../ui/pages/main.page";
import {JobsPage} from "../ui/pages/jobs.page";
import {steps} from "../steps/steps";
import {qaAutomationNewYork} from "../test.data/job";

test.describe('Jobs spec', () => {

    /**
     * Scenario 3:
     * 1. Open https://www.whatjobs.com
     * 2. Open Jobs page
     * 3. Set 'QA Automation' to job text box and click "Search Job"
     * 4. Check that 10 jobs present on the page
     */
    test('Scenario 3: User can find job by title', async ({page}) => {
        await steps.openApp(page);
        const mainPage = new MainPage(page);
        await mainPage.countyPopUp.closePopUp();
        await mainPage.topNavigation.openJobsPage();
        const jobsPage = new JobsPage(page);
        await jobsPage.checkUrl();
        await jobsPage.searchByRole(qaAutomationNewYork);
        await jobsPage.checkSearchItemIs(10);
    });
})


