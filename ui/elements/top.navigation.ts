import {WebElement} from "../web.element";

export class TopNavigation extends WebElement {
    get jobs() {
        return this.getElement('//a[text()="Jobs"]');
    }

    async openJobsPage() {
        await this.jobs.click();
    }
}