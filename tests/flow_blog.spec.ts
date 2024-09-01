import { test, expect, type Page } from '@playwright/test';
import { AcceuilPage } from '../page-objects/Acceuil';
import { BlogPage } from '../page-objects/Blog';

const SEARCH = "Voyager";
const ITEM = "Voyager malin : les astuces pour réduire les coûts sur mon budget";

test('Validations du flow Blog', async ({ page }) => {
    await page.goto("https://www.linxo.com");
    let testpage = new AcceuilPage(page);
    await testpage.checkPage();

    await testpage.getBlogLink.click();
    let blogpage = new BlogPage(page);
    await blogpage.searchItem(SEARCH);
    await page.waitForTimeout(3000); //voir pour remplacer le timeout ? 
    await blogpage.checkNbItem(4);
    await blogpage.checkItem(ITEM);
    await blogpage.supprimerRecherche();
 });