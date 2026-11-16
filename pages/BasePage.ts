import { Page } from "@playwright/test";
import Actions from "../utilities/Actions";
import Waits from "../utilities/Waits";
import Asserations from "../utilities/Asserations";
export default class BasePage {
    protected readonly page: Page;
    public readonly actions: Actions;
    public readonly waits: Waits;
    public readonly asserations: Asserations;
    constructor(pageFromTestCase: Page) {
        this.page = pageFromTestCase;
        this.actions = new Actions(this.page);
        this.waits = new Waits(this.page);
        this.asserations = new Asserations(this.page);
    }
}