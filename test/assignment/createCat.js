import credentials from "../pageobjects/orderfood/cred.js"
import { default as loginPage } from "../pageobjects/orderfood/login.page.js"
import { expect } from "chai"
import homePage from "../pageobjects/orderfood/home.page.js"
import dashboardPage from "../pageobjects/orderfood/dashboard.page.js"
import addcategoryPage from "../pageobjects/orderfood/addcategory.page.js"
import addresaturantPage from "../pageobjects/orderfood/addresaturant.page.js"
describe('create category',()=>{
    it('login to application',async ()=>{
        await loginPage.open(credentials.url)
        expect(await loginPage.getHeader_txt()).to.be.equal("Admin Panel")
       // expect(await browser.getUrl()).to.be.equal("http://testingserver/domain/Online_Food_Ordering_System/")
        await loginPage.login(credentials.user,credentials.password)
        expect(await dashboardPage.getHeader_txt() ).to.be.equal("Admin Dashboard")
    })


    it('create',async ()=>{
       
        await dashboardPage.restaurant_lnk.click();
        await dashboardPage.addCategory_lnk.click();
        expect(await addcategoryPage.getHeader_txt()).to.be.equal("Add Restaurant Category")
        await addcategoryPage.create_category("desss")
        await dashboardPage.addRestaurant_lnk.click()
        expect(await addresaturantPage.getHeader_txt()).to.be.equal('Add Restaurant')
        let op = await addresaturantPage.categoryOPtions
        let optionss = Promise.all( op.map(async (opt)=>await opt.getText()))
        expect(await optionss.then((cat)=>cat)).to.include("desss")


    })
})