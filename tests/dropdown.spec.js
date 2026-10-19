
const { test, expect } = require('@playwright/test')

test("Select values from dropdown", async function({ page })
 {
  // 1. Navigate to the website
  await page.goto("https://freelance-learn-automation.vercel.app/signup")
  //await page.locator("//select[@name='state']").click();
  //first approach
  /*await page.locator("#state").selectOption({label:"Goa"})
  await page.waitForTimeout(1000)
  await page.locator("#state").select
  await page.locator("#state").selectOption({index:1})
  await page.waitForTimeout(3000)
  const value=await page.locator("#state").textContent()
  console.log("All drop down values are :" +value)
  await expect(value.includes("Kerala")).toBeTruthy()*/
  //second approach
 // 1. Locate all options inside the dropdown
//Multi select
await page.locator("#hobbies").selectOption(['Dancing','Swimming'])
await page.waitForTimeout(3000)

})
