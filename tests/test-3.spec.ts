import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://linxoconnect.com/produits/accounts/');
  await page.getByRole('heading', { name: 'Authentification App-to-App' }).click();
  await page.getByRole('heading', { name: 'Choix des comptes à' }).click();
  await page.getByRole('heading', { name: 'Récupération de données multi' }).click();
  await page.getByRole('heading', { name: 'Sélection de la banque' }).click();
  await page.getByLabel('Continuer sans accepter').click();
  await page.getByRole('img', { name: 'Écran animé parcours de sé' }).click();
  await page.getByText('Authentification App-to-App Il s’authentifie sur son espace bancaire pour').click();
  await page.getByRole('img', { name: 'Écran animé authentification' }).click();
  await page.getByRole('heading', { name: 'Choix des comptes à' }).click();
  await page.getByRole('img', { name: 'Écran animé parcours de choix' }).click();
  await page.getByRole('heading', { name: 'Récupération de données multi' }).click();
  await page.getByRole('img', { name: 'Écran animé validation de' }).click();
});