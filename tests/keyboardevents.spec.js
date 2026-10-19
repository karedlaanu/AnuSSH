const { test, expect } = require('@playwright/test')

test("Select values from dropdown", async function({ page })
 {
  // 1. Navigate to the website
  await page.goto("https://www.google.com")
  // Type with a delay between each character
  await page.locator("//textarea[@name='q']").pressSequentially('Mukesh Otwani', { delay: 100 });
  //await page.locator("//textarea[@name='q']").type("Muksh Otwani")
  await page.keyboard.press("Control+A")
  await page.keyboard.press("Meta+C")
  await page.keyboard.press("Backspace")
  await page.keyboard.press("Meta+V")
 
 })