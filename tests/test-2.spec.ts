import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.linxo.com/');
  await page.getByRole('link', { name: 'Nos solutions B2B' }).click();
  await page.locator('#menu-item-562').getByRole('link', { name: 'Solutions' }).hover();
  await page.getByRole('link', { name: 'Accounts Accès simplifié et s' }).click();
  await page.getByText('1 Sélection de la banque L’').click();
  await page.getByText('2 Authentification App-to-App').click();
});