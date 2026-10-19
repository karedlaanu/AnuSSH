const { test, expect } = require('@playwright/test')
//Alert1
/*
test("Handle Alert1", async function({ page })
 {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  page.on('dialog',async(d)=>{
  expect(d.type()).toContain("alert")
  expect(d.message()).toContain("I am a JS Alert")
  await d.accept()
  })
  await page.locator("//button[text()='Click for JS Alert']").click()*/
  //Alert2
 /* test.skip("Handle Alert2", async function({ page })
 {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  page.on('dialog',async(d)=>{
  expect(d.type()).toContain("confirm")
  expect(d.message()).toContain("I am a JS Confirm")
  console.log(d.message())
  await d.accept()
  })
  await page.locator("//button[text()='Click for JS Confirm']").click()*/
//Alert3
  test("Handle Alert3", async function({ page })
 {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  page.on('dialog',async(d)=>{
  expect(d.type()).toContain("prompt")
  expect(d.message()).toContain("I am a JS prompt")
 await d.accept("Anusha") 
  })
  await page.locator("//button[text()='Click for JS Prompt']").click()
  await page.waitForTimeout(5000)
 })