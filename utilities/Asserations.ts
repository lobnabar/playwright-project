import { Page, expect } from "@playwright/test";
export default class Asserations {
  private readonly page: Page;
     constructor(page: Page) {
      this.page = page;

    }
    async assertValueToBeGreaterThan(firstValue: number, secondValue: number) {

        expect(firstValue).toBeGreaterThan(secondValue);


    }

}  