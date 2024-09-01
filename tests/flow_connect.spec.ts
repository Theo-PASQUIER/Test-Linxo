import { test, expect } from '@playwright/test';
import { AcceuilPage } from '../page-objects/Acceuil';
import { ConnectPage } from '../page-objects/connect/acceuil';
import { AccountsPage } from '../page-objects/connect/accounts';

test('Validation du flow vers Linxo Connect', async ({ page }) => {
    await page.goto("https://www.linxo.com");
    let testpage = new AcceuilPage(page);
    await testpage.checkPage();
    await testpage.gotoConnect();

    let connectpage = new ConnectPage(page);
    await connectpage.checkPage();
    await connectpage.gotoAccounts();
    


    let accountspage = new AccountsPage(page);
    await accountspage.checkPage();
    for(let i=0; i<4;i++){

       
        await accountspage.chooseItem(i);
        await accountspage.checkItem() //verifie la couleur de l'item en cours
        await accountspage.checkOtherItem(); //verifie la couleur des autres items
        await accountspage.CheckGif();  //Vérifie que les gifs correspondent à la catégorie selectionné  

    }
});