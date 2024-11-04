import { faker } from '@faker-js/faker';

// @ts-check
const { test, expect } = require('@playwright/test');


test('Login', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/JPetStore/);

  //Verificar url
  await expect(page).toHaveURL(/.*octoperf/)

  await page.getByRole('link', { name: 'Enter the Store' }).click()

  await page.getByRole('link', { name: 'Sign In' }).click()

  await page.locator('input[name="username"]').fill('automation')
  await page.locator('input[name="password"]').fill('password123')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page).toHaveURL(/.*Catalog/)


});


test('Signup', async ({ page }) => {
  let username = faker.internet.userName()
  let pw = faker.internet.password()
  let firstName = faker.internet.userName({ firstName: 'Jeanne' })
  let lastName = faker.internet.userName({ firstName: 'Doen' })




  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/JPetStore/);

  //Verificar url
  await expect(page).toHaveURL(/.*octoperf/)

  await page.getByRole('link', { name: 'Enter the Store' }).click()
  await page.getByRole('link', { name: 'Sign In' }).click()
  await page.getByRole('link', { name: 'Register Now!' }).click()

  await page.locator('input[name="username"]').fill(username)
  await page.locator('input[name="password"]').fill(pw)
  await page.locator('input[name="account.firstName"]').fill(firstName)
  await page.locator('input[name="account.lastName"]').fill(lastName)
  await page.locator('input[name="account.email"]').fill(faker.internet.email())
  await page.locator('input[name="account.phone"]').fill(faker.phone.number())
  await page.locator('input[name="account.address1"]').fill(faker.address.street())
  await page.locator('input[name="account.address2"]').fill(faker.address.street())
  await page.locator('input[name="account.city"]').fill(faker.address.city())
  await page.locator('input[name="account.state"]').fill(faker.address.state())
  await page.locator('input[name="account.zip"]').fill(faker.address.zipCode())
  await page.locator('input[name="account.country"]').fill(faker.address.country())
  await page.locator('input[name="newAccount"]').click()

  await page.getByRole('link', { name: 'Sign In' }).click()
  await page.locator('input[name="username"]').fill(username)
  await page.locator('input[name="password"]').fill(pw)

  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL(/.*Catalog/)


});