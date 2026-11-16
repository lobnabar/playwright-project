import Waits  from "../utilities/Waits";
import BasePage from "../pages/BasePage";
export default class SidePanel extends BasePage {
    private sidePanelButtons(btnName: string | RegExp) {
       return this.page.getByRole('link', { name: btnName });
    }

    async clickOnAdminTap() {
        await this.actions.clickElement(this.sidePanelButtons('Admin'));
        await this.waits.waitForPageToLoad();
    }

    async clickOnDashboardTap() {
        await this.actions.clickElement(this.sidePanelButtons('Dashboard'));
        await this.waits.waitForPageToLoad();
    }




}
