import {WebElement} from "../web.element";
import {JobData} from "../../test.data/job.data";

export class JobAlertPopUp extends WebElement {
    get searchByTitleTB() {
        return this.getElement('[name="searchString"]')
    }

    get searchByLocationTB() {
        return this.getElement('[name="searchLocation"]')
    }

    get receiveLatestJobsBtn() {
        return this.getElement('[value="Receive The Latest Jobs"]')
    }

    async searchBy(jobAlertData: JobData) {
        await this.searchByTitleTB.fill(jobAlertData.role);
        await this.searchByLocationTB.fill(jobAlertData.location)
        await this.receiveLatestJobsBtn.click()
    }
}

