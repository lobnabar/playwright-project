import { Locator, Page } from "@playwright/test";
export default class Actions {
    private readonly page: Page;
    constructor(page: Page) {
        this.page = page
    
    }
    async enterTextElement(elementLocator: Locator, text: string) {
        await elementLocator.clear();
        await elementLocator.fill(text);
        console.log(`Entering ${text} to element`);
    }
    async clickElement(elementLocator: Locator, elementName?: string) {
        await elementLocator.click();
        if (elementName) {
            console.log(`Clicking on ${elementName}`);
        } else{
        console.log(`Clicking on element`);
              }

        }
    async getElementTextContent(elementLocator: Locator): Promise<string | null> { 
     const textContent = await elementLocator.textContent();
     console.log(`Getting text content of element: ${textContent}`);   
     return textContent;   


    }
    async refreshPage(){
        await this.page.reload();
    }
}