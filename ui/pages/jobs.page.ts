import {BasePage} from "./base.page";
import {expect} from "@playwright/test";

export class JobsPage extends BasePage {
    get searchForJobs() {
        return this.getElement('[name=searchWhat]');
    }

    get searchJobBtn() {
        return this.getElement('//button[.="Search Jobs"]');
    }

    get searchItem() {
        return this.getElement('//div[contains(@class, "searchResultItem")]');
    }

    async searchForJob(job: string) {
        await this.searchForJobs.fill(job);
        await this.searchJobBtn.click();
    }

    async checkSearchItemIs(count: number) {
        await expect(this.searchItem).toHaveCount(count);
    }
}