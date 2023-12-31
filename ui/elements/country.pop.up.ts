import {WebElement} from "../web.element";

export class CountryPopUp extends WebElement {

    get title() {
        return this.getElement('//div[text()="Jobs By Country"]');
    }

    get closeAlertBtn() {
        return this.getElement('//div[contains(@class, "popUpCloseImage")]');
    }

    async closePopUp() {
        //There is small defect on application. If we quickly close pop up - it appears again
        await this.page.waitForTimeout(500);
        if (await this.closeAlertBtn.isVisible()) {
            await this.closeAlertBtn.click();
            await this.title.waitFor({state: 'detached'});
        }
    }
}