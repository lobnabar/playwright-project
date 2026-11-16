import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    private readonly baseUrl: string = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    private readonly usernameInputField: Locator = this.page.getByRole('textbox', { name: 'Username' });
    private readonly passwordInputField: Locator = this.page.getByPlaceholder('Password');
    private readonly loginBtn: Locator = this.page.getByRole('button', { name: 'Login' });

    async goToLoginPage() {
        await this.page.goto(this.baseUrl);
        await this.waits.waitForPageToLoad();
    }
    async enterUsername(username: string) {
        await this.actions.enterTextElement(this.usernameInputField, username);
    }
    async enterPassword(password: string) {
        await this.actions.enterTextElement(this.passwordInputField, password);
    }

    async clickLoginButton() {
        await this.loginBtn.click();
        await this.waits.waitForPageToLoad();
        console.log(`Clicking on login button`, this.loginBtn);
    }
}