import { Locator } from "@playwright/test";
import BasePage from "../../BasePage";
export default class AddUserPage extends BasePage {
    private readonly ueserRoleDropdown: Locator=this.page.locator('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').first();
    private dropdownOption(optionText: string | RegExp){
        return this.page.getByRole('option', { name: optionText });
    }
    private readonly employeeNameInputField: Locator=this.page.locator('//label[text()="Employee Name"]/../..//input');
    private readonly statusDropdown: Locator=this.page.locator('//label[text()="Status"]/../..//div[contains(@class, "oxd-select-text")]').first();
    private readonly userNameInputField: Locator=this.page.locator('//label[text()="Username"]/../..//input');
    private readonly passwordInputField: Locator=this.page.locator('input[type="password"]').first();
    private readonly confirmPasswordInputField: Locator=this.page.locator('input[type="password"]').last();
    private readonly saveButton: Locator=this.page.getByRole('button', { name: 'Save' });
    private async clickOnUserRoleDropdown() {
        await this.actions.clickElement(this.ueserRoleDropdown);
    }
    async chooseUserRole(optionName: string ) {
        await this.clickOnUserRoleDropdown();
        await this.actions.clickElement(this.dropdownOption(optionName));
    }

    async enterEmployeeName(employeeName: string) {
        await this.actions.enterTextElement(this.employeeNameInputField, employeeName);
        const firstOption :Locator=this.dropdownOption(/.*/).filter({ hasNotText: /searching/i }).first();
        await this.actions.clickElement(firstOption);
    }
    private async clickOnStatusDropdown() {
        await this.actions.clickElement(this.statusDropdown);
    }
    
    async chooseUserStatus(optionName: string ) {
        await this.clickOnStatusDropdown();
        await this.actions.clickElement(this.dropdownOption(optionName));
    }
    async enterUserName(userName: string) {
        await this.actions.enterTextElement(this.userNameInputField, userName);
    }
    async enterPassword(password: string) {
        await this.actions.enterTextElement(this.passwordInputField, password);
    }
    async confirmPassword(confirmPassword: string) {
        await this.actions.enterTextElement(this.confirmPasswordInputField, confirmPassword);
    }
    async clickOnSaveButton() {
        await this.actions.clickElement(this.saveButton);
        await this.page.waitForURL(/viewSystemUsers/);
        await this.waits.waitForPageToLoad();
    }
}