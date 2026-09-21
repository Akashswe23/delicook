// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test.describe('DeliCook Sign In', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://delicook.quickiz.com/manager/login'); // replace with actual URL
  });

  test('should display sign in form', async ({ page }) => {
    await expect(page.getByText('SIGN IN')).toBeVisible();
    await expect(page.getByPlaceholder('Enter registered email address')).toBeVisible();
    await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('should show validation error for empty fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    // Adjust based on actual validation message shown by your app
    // await expect(page.getByText('Email is required')).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Enter registered email address').fill('delicookadmin@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('manager@Delicook');
    await page.getByRole('button', { name: 'Login' }).click();

    // Adjust based on what happens after successful login (e.g. redirect, dashboard text)
    // await expect(page).toHaveURL(/dashboard/);
  });

  // test('should show error for invalid credentials', async ({ page }) => {
  //   await page.getByPlaceholder('Enter registered email address').fill('wrong@example.com');
  //   await page.getByPlaceholder('Enter your password').fill('wrongpassword');
  //   await page.getByRole('button', { name: 'Login' }).click();

  //   // Adjust based on your app's actual error message
  //   // await expect(page.getByText('Invalid email or password')).toBeVisible();
  // });

  // test('should toggle password visibility', async ({ page }) => {
  //   const passwordField = page.getByPlaceholder('Enter your password');
  //   await passwordField.fill('mypassword');
  //   await expect(passwordField).toHaveAttribute('type', 'password');

    // // Click the eye icon to toggle visibility (adjust selector as needed)
    // await page.locator('button[aria-label="toggle password visibility"]').click();
    // await expect(passwordField).toHaveAttribute('type', 'text');
  // });

  // test('should navigate to forgot password page', async ({ page }) => {
  //   await page.getByText('Forgot Password?').click();
  //   // Adjust based on actual navigation behavior
  //   // await expect(page).toHaveURL(/forgot-password/);
    
  // });
  
});