import {BasePage} from "./base.page";
import {expect} from "@playwright/test";
import {Job} from "../../test.data/job";

export class JobsPage extends BasePage {
    get searchForJobsTB() {
        return this.getElement('[name=searchWhat]');
    }

    get searchJobBtn() {
        return this.getElement('//button[.="Search Jobs"]');
    }

    get searchItem() {
        return this.getElement('//div[contains(@class, "searchResultItem")]');
    }

    async searchByRole(job: Job) {
        await this.searchForJobsTB.fill(job.role);
        await this.searchJobBtn.click();
    }

    async checkSearchItemIs(count: number) {
        await expect(this.searchItem).toHaveCount(count);
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(new RegExp('.*/jobs$'))
    }
}