const { test, expect } = require('@playwright/test');

 /*test("Working with multiple tabs", async function({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // 1. Click the element that opens the new tab
    const pagePromise = context.waitForEvent("page");
    await page.locator("//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click();
    
    // 2. Wait for the new page to load
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await newPage.waitForTimeout(5000)
    // Now you can work with 'newPage'
    await newPage.locator("(//input[@name='email'])[2]").fill("Anusha@gmail.com")
        await newPage.waitForTimeout(3000)

});*/
test("Working with multiple tabs", async function({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // 1. Open the first new tab
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
       await page.locator("//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click()
    ]);

    await newPage.waitForLoadState();
    // Perform any action on the first new tab here (e.g., closing it)
    await newPage.locator("(//input[@name='email'])[2]").fill("Anusha@gmail.com")
    await newPage.waitForTimeout(3000)
    // Now you can work with 'newPage'
    await newPage.close(); 

    // 2. Click another element on the main page to open a second new tab
    const [newPage2] = await Promise.all([
        context.waitForEvent("page"),
         page.locator("//div[@class='container-child']//a[3]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click() // Change locator for the next tab
    ]);

    await newPage2.waitForLoadState();
    // Perform any action on the first new tab here (e.g., closing it)
    await newPage2.locator("(//input[@name='email-or-phone']").fill("Anusha@gmail.com")
    await newPage2.waitForTimeout(3000)
    // Now you can work with 'newPage'
    await newPage2.close(); 
});