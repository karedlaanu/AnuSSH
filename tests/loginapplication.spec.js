const { test, expect } = require('@playwright/test')
const LoginPage=require("../pages/loginpage")
const HomePage=require("../pages/homepage")


test("Login to Appliction using POM", async function({ page })
 {

await page.goto("https://freelance-learn-automation.vercel.app/login");
  const loginpage=new LoginPage(page)
  await loginpage.loginToAppliction()
  const homepage=new HomePage(page)
  await homepage.logOutFromApplication()
  await homepage.verifyManageOption()
  await loginpage.verifyLogoutOption()

 })