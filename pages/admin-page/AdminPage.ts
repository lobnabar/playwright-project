import AddUserPage from "./sub-pages/AddUserPage";
import { Locator } from "@playwright/test";
import BasePage from "../BasePage";
import ViewSystemUserPage from "./sub-pages/ViewSystemUserPage";
export default class AdminPage extends BasePage {
   public readonly viewSystemUserPage: ViewSystemUserPage = new ViewSystemUserPage(this.page);
   public readonly addUserPage: AddUserPage = new AddUserPage(this.page);




}