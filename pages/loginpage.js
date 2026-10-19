const{expect}=require("@playwright/test")


class LoginPage
{

constructor(page)
{
  this.page=page
  this.username="#email1"
  this.password="#password1"
  this.login="//button[@type='submit']"

}
async loginToAppliction()
{
  await this.page.fill(this.username,"admin@email.com")
  await this.page.fill(this.password,"admin@123")
  await this.page.click(this.login)
  
}
async verifyLogoutOption()
{
    await expect( this.page.locator(this.login)).toBeVisible()
}
}
module.exports=LoginPage