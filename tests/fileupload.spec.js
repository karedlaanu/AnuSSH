const { test, expect } = require('@playwright/test')

test("Select values from dropdown", async function({ page })
 {
  // 1. Navigate to the website
  await page.goto("https://the-internet.herokuapp.com/upload")
  await page.locator("#file-upload").setInputFiles(".uploads/RAM08314.JPG")
  await page.locator("#file-submit").click()
  await page.waitForTimeout(5000)
  expect (await page.locator("//h3")).toHaveText("File Uploaded!")

 })