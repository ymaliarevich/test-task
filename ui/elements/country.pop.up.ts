import {WebElement} from "../web.element";

export class CountryPopUp extends WebElement {

    get title() {
        return this.getElement('//div[text()="Jobs By Country"]');
    }

    get closeAlertBtn() {
        return this.getElement('//div[contains(@class, "popUpCloseImage")]');
    }

    async closePopUp() {
        await this.closeAlertBtn.click();
        await this.title.waitFor({state: 'detached'});
    }
}