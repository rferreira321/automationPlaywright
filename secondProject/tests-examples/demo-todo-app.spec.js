// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('New Todo', () => {
  test('firstTest', async ({page}) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');


}