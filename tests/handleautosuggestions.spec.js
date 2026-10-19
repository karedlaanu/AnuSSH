const { test, expect } = require('@playwright/test')

test("Select values from dropdown", async function({ page })
 {
  // 1. Navigate to the website
  await page.goto("https://www.google.com")
  await page.locator("//textarea[@name='q']").pressSequentially('Mukesh Otwani', { delay: 100 });
  //await page.locator("//textarea[@name='q']").type("Muksh Otwani")
  await page.waitForSelector("//li[@role='presentation']")
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("Enter")



  })