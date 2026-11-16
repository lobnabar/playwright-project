import SidePanel from "../componants/SidePanel";
import BasePage from "./BasePage";
export default class DashboardPage extends BasePage {
    public readonly sidePanel: SidePanel=new SidePanel(this.page);
}