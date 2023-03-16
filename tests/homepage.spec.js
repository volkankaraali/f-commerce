const { test, expect } = require('@playwright/test');

test('homepage add to cart of product s button', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const button = page.getByTestId('addCartButton1')
  await expect(button).toBeVisible();
});

test('homepage- click to cart button in header and expect navigate to cart page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId('carticon').click();

  await expect(page).toHaveURL("http://localhost:3000/cart");

})

test('homepage- click to cart button in header and expect badge increase', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const badge = await page.getByTestId('carticonbadge');

  await expect(badge.locator('>span')).toHaveText(/0/);

  await page.getByTestId('addCartButton1').click()

  await expect(badge.locator('>span')).toHaveText(/1/)

})

