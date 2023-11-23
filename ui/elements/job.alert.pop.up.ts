import {WebElement} from "../web.element";
import {Job} from "../../test.data/job";

export class JobAlertPopUp extends WebElement {
    get searchByRoleTB() {
        return this.getElement('[name="searchString"]')
    }

    get searchByLocationTB() {
        return this.getElement('[name="searchLocation"]')
    }

    get receiveLatestJobsBtn() {
        return this.getElement('[value="Receive The Latest Jobs"]')
    }

    async searchBy(job: Job) {
        await this.searchByRoleTB.fill(job.role);
        await this.searchByLocationTB.fill(job.location)
        await this.receiveLatestJobsBtn.click()
    }
}

