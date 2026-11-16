
import { Locator } from "@playwright/test";
import BasePage from "../../BasePage";
export default class ViewSystemUserPage extends BasePage {
   private readonly recordsNumber: Locator=this.page.getByText(/Records Found/i);
   private readonly addBtn: Locator=this.page.getByRole('button', { name: 'Add' });
   private readonly usernameSearchField: Locator=this.page.locator('//label[text()="Username"]/../..//input');
   private readonly searchBtn: Locator=this.page.getByRole('button', { name: 'Search' });
   private deleteBtn(username: string): Locator {
      return this.page.getByRole('row').filter({ hasText: username }).getByRole('button').first();
   }
   private readonly confirmDeleteBtn :Locator= this.page.getByRole('button',{name:/Yes, Delete/i});
   async getRecordsCount() {
       const recordsText = await this.actions.getElementTextContent(this.recordsNumber);
       const recordsCount = Number(recordsText?.match(/\d+/)?.[0] ?? 0);
       return recordsCount;
   
    }
   async clickOnAddBtn() {
      await this.actions.clickElement(this.addBtn);
    }
   async enterUsernameToSearchField(searchUsername: string) {
      await this.actions.enterTextElement(this.usernameSearchField, searchUsername);
    }
    async clickOnSearchBtn() {
       await this.actions.clickElement(this.searchBtn);
       await this.waits.waitForPageToLoad();
    }

    async deleteUserUsingItsUsername(username: string) {
       await this.actions.clickElement(this.deleteBtn(username));
       await this.clickOnConfirmDeleteBtn();
       await this.waits.waitForPageToLoad();
    }
    private async clickOnConfirmDeleteBtn(){
      await this.actions.clickElement(this.confirmDeleteBtn);
    }

   }
   