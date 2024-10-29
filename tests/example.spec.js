// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/);

  //Verificar url
  await expect(page).toHaveURL(/.*automationexercise/)



});

test('get started link', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.waitForTimeout(5000);

  await page.getByLabel('Consent', { exact: true }).click();

  await expect(page.getByRole('link', { name: ' Signup / Login' })).toHaveText(/Signup/)

  await page.getByRole('link', { name: ' Signup / Login' }).click()
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('rafael@ferreira.pt')

  // Create a locator.
  const signup = page.getByRole('button', { name: 'Signup' });
  const name = page.getByPlaceholder('Name')

  // Click it.
  await name.fill("something")
  //await page.pause()

  await signup.click({timeout: 10000})

// Wait for the .d-block element to be available
  const welcomeMessage = await page.waitForSelector("//b[normalize-space()='Enter Account Information']", { timeout: 15000 });
  // Get the inner text of the element
  const messageText = await welcomeMessage.innerText();
  // Assertions
  expect(messageText).toContain("ENTER ACCOUNT INFORMATION");



});
