import { expect, type Locator, type Page } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly recherche : Locator;
  firstitem : Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.recherche = this.page.getByPlaceholder('Recherche');
  }

  async goto() {
    await this.page.goto("https://www.linxo.com/blog");
  }

  async checkPage() {
    await expect(this.page.url).toBe("https://www.linxo.com/blog");
  }

  async searchItem(item : string){
    await this.recherche.click();
    await this.recherche.fill(item);
    await this.page.locator('i').click();
    this.firstitem = await this.page.locator("div.card-body.h-100").nth(0);
  }

  async supprimerRecherche (){
    await this.page.getByText('Supprimer la recherche').click();
    await expect(this.page.locator('#cat-35')).toContainText('Actualité Linxo');
  }

  async checkNbItem(nbitemsvoulus : number){

    await expect(this.page.getByText('4 résultats pour la recherche')).toBe;

    const items = await this.page.$$("div.card-body.h-100");
    await expect(items.length).toEqual(nbitemsvoulus);
  }

  async checkItem(item : string){
    await expect(this.firstitem.locator('h2.card-title')).toContainText(item);
    }
}