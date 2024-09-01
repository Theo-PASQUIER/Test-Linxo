import { expect, type Locator, type Page } from '@playwright/test';

export class AcceuilPage {
  readonly page: Page;
  readonly getBlogLink: Locator;
  readonly getAcceuilLink: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getBlogLink = page.locator('#menu-item-16228').getByRole('link', { name: 'Blog' });
    this.getAcceuilLink = page.getByRole('link', { name: 'Nos solutions B2B' });
  }

  async goto() {
    await this.page.goto("https://www.linxo.com/");
  }

  async checkPage() {
    await expect(this.page.url()).toBe("https://www.linxo.com/");
  }

  async gotoBlog(){
        await this.getBlogLink.click();
        await expect(this.page.url()).toBe("https://www.linxo.com/blog");
    }

  async gotoConnect(){
        await this.getAcceuilLink.click();
        await expect(this.page.url()).toBe("https://linxoconnect.com/");
    }
}