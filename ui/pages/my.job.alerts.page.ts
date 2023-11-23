import {BasePage} from "./base.page";
import {expect} from "@playwright/test";
import {JobAlertPopUp} from "../elements/job.alert.pop.up";
import {JobData} from "../../test.data/job.data";

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

    get jobAlertPanel() {
        return this.getElement('//div[contains(@class, "panel-body")]')
    }

    async checkUrl() {
        await expect(this.page).toHaveURL(new RegExp('.*/member/jbe$'));
    }

    async createJobAlert() {
        await this.createJobAlertBtn.click();
    }

    async checkJobAlertVisible(jobAlertData: JobData) {
        await expect(this.getJobAlertContainer(jobAlertData)).toBeVisible();
    }

    async checkJobAlertHidden(jobAlertData: JobData) {
        await expect(this.getJobAlertContainer(jobAlertData)).toBeHidden();
    }

    async deleteJobAlert(jobAlertData:JobData) {
        await this.getJobAlertContainer(jobAlertData).locator('//a[@title="Delete"]').click();
    }

    private getJobAlertContainer(jobAlertData: JobData) {
        return this.getElement(`//span[.="${jobAlertData.role} Jobs in ${jobAlertData.location}"]//ancestor::div[contains(@class, "panel-body")]`);
    }
}

