import { expect, type Locator, type Page } from '@playwright/test';

export class ConnectPage {
  readonly page: Page;
  readonly getsolutionsLink: Locator;
  readonly getAccountsLink: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getsolutionsLink = page.locator('#menu-item-562').getByRole('link', { name: 'Solutions' });
    this.getAccountsLink = page.getByRole('link', { name: 'Accounts Accès simplifié et s' })
  }

  async checkPage() {
    await expect(this.page.url()).toBe("https://linxoconnect.com/");
  }

  async gotoAccounts(){
        await this.getsolutionsLink.hover();
        await this.getAccountsLink.click();
        await expect(this.page.url()).toBe("https://linxoconnect.com/produits/accounts/");
    }
}