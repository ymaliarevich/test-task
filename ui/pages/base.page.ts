import {WebElement} from "../web.element";
import {CountryPopUp} from "../elements/country.pop.up";
import {RightNavigation} from "../elements/right.navigation";
import {TopNavigation} from "../elements/top.navigation";

export class BasePage extends WebElement {
    get countyPopUp() {
        return new CountryPopUp(this.page);
    }

    get rightNavigation() {
        return new RightNavigation(this.page);
    }

    get topNavigation() {
        return new TopNavigation(this.page);
    }
}