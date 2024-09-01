import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.linxo.com/');
  await page.locator('#menu-item-16228').getByRole('link', { name: 'Blog' }).click();
  await page.getByPlaceholder('Recherche').click();
  await page.getByPlaceholder('Recherche').fill('Voyager');
  await page.locator('i').click();
  await expect(page.locator('#post-222263')).toContainText('Voyager malin : les astuces pour réduire les coûts sur mon budget.');
  await page.getByText('Supprimer la recherche').click();
  await expect(page.locator('#cat-35')).toContainText('Actualité Linxo');
});