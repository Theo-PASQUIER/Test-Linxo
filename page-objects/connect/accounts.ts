import { expect, type Locator, type Page } from '@playwright/test';


export class AccountsPage {
  readonly page: Page;
  readonly ITEMS: Locator[];
  readonly GIFS : Locator[];
  numItem : number; //stock le numéro de l'item en cours 

  constructor(page: Page) {
    this.page = page;

    this.ITEMS = []; 
    this.ITEMS[0] = page.getByRole('heading', { name: 'Sélection de la banque' });
    this.ITEMS[1] = page.getByRole('heading', { name: 'Authentification App-to-App' });
    this.ITEMS[2] = page.getByRole('heading', { name: 'Choix des comptes à' });
    this.ITEMS[3] = page.getByRole('heading', { name: 'Récupération de données multi' });

    this.GIFS = []; 
    this.GIFS[0] = page.getByRole('img', { name: 'Écran animé parcours de sé' }); 
    this.GIFS[1] = page.getByRole('img', { name: 'Écran animé authentification' });
    this.GIFS[2] = page.getByRole('img', { name: 'Écran animé parcours de choix' });
    this.GIFS[3] = page.getByRole('img', { name: 'Écran animé validation de' });
  }

  async checkPage() {
    await expect(this.page.url()).toBe("https://linxoconnect.com/produits/accounts/");
  }

  async chooseItem(item : number){
       //aller sur l'item choisi
       await this.ITEMS[item].click();
       //stocker l'item choisi
       this.numItem = item; 
    }

 async checkItem(){
    let itemcolor = await this.ITEMS[this.numItem].evaluate(element =>  {return window.getComputedStyle(element).color;});
    expect(itemcolor).toBe('rgb(5, 46, 80)');
 }

 async checkOtherItem(){
    //Verifier que les autres items sont grisés 
    for(let i=0; i<4;i++){
        if (i!=this.numItem){
            let itemcolor = await this.ITEMS[i].evaluate(element =>  {return window.getComputedStyle(element).color;});
            expect(itemcolor).toBe('rgb(159, 159, 179)'); //'#9f9fb3' = rgb(159, 159, 179)
        }
    }
 }

 async CheckGif(){
    expect(await this.GIFS[this.numItem].isVisible()).toBe(true);

    for(let i=0; i<4;i++){
        if (i!=this.numItem){
            expect(await this.GIFS[i].isVisible()).toBe(false);
        }
    }
 } 
}