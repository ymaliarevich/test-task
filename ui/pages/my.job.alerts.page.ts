import {BasePage} from "./base.page";
import {expect} from "@playwright/test";
import {JobAlertPopUp} from "../elements/job.alert.pop.up";
import {Job} from "../../test.data/job";

export class MyJobAlertsPage extends BasePage {
    get title() {
        return this.getElement('//h3[text()="My Job Alerts"]')
    }

    get createJobAlertBtn() {
        return this.getElement('[value="Create job alert"]')
    }

    get jobAlertPopUp() {
        return new JobAlertPopUp(this.page);
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(new RegExp('.*/member/jbe$'));
    }

    async createJobAlert() {
        await this.createJobAlertBtn.click();
    }

    async checkJobAlertVisible(jobAlertData: Job) {
        await expect(this.getJobAlertContainer(jobAlertData)).toBeVisible();
    }

    async checkJobAlertHidden(jobAlertData: Job) {
        await expect(this.getJobAlertContainer(jobAlertData)).toBeHidden();
    }

    async deleteJobAlert(jobAlertData:Job) {
        await this.getJobAlertContainer(jobAlertData).locator('//a[@title="Delete"]').click();
    }

    private getJobAlertContainer(jobAlertData: Job) {
        return this.getElement(`//span[.="${jobAlertData.role} Jobs in ${jobAlertData.location}"]//ancestor::div[contains(@class, "panel-body")]`);
    }
}

