const { test, expect } = require('@playwright/test');
test("Working with LoadState ", async function({ page }) {

await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.getByText("New user? Signup").click()
await page.waitForLoadState("networkidle")
const count=await page.locator("//input[@type='checkbox']").count()
console.log("Checkboxes count is:" +count)
expect(count).toBe(10)
})