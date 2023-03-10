import { expect } from "chai";
import createOrganizationPage from "../pageobjects/createOrganization.page.js";
import { default as homePage } from "../pageobjects/home.page.js";
import { default as loginPage } from "../pageobjects/login.page.js";
import { default as organizationInfoPage } from "../pageobjects/organizationInfo.page.js";
import { default as organizationsPage } from "../pageobjects/organizations.page.js";
import { default as recyclebinPage } from "../pageobjects/recyclebin.page.js";

//create organization, delete org and check it is present in recycle bin and restore it and verify it
var name;
describe('create, delete organization and check in recycle bin', () => {
    it('Login to application', async () => {

        await loginPage.open()
        await loginPage.login()

        // expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })

    let rdn = Math.round(Math.random() * (99 - 5) + 5)
    let orgN = 'rmon' + rdn
    it('create org', async () => {



        await (await homePage.organizationsLink).click()
        // expect(browser).toHaveTitleContaining("Organizations")
        expect(await browser.getTitle()).to.contain("Organizations")
            ; await (await organizationsPage.createOrganization).click()
            ; await createOrganizationPage.createOrg('rmon', rdn)
        // await browser.waitUntil(async () => await (await organizationInfoPage.orgInfoHeader).isDisplayed())
        // expect(await organizationInfoPage.orgInfoHeader).toBeDisplayed()
        expect(await organizationInfoPage.getOrgInfoHeader()).to.contain('rmon' + rdn)

    })

    it('Delete org', async () => {
        await organizationInfoPage.deleteOrg()

        //await browser.acceptAlert()
        // expect(await browser.getUrl()).toHaveUrlContaining("Accounts&action")
        expect(await browser.getUrl()).to.contain("Accounts&action")
    })
    recyclebinPage.orgNam = orgN
    it('open recycle bin and check deleted org', async () => {

        await homePage.moreHover()
        await (await homePage.recycleBinLink).click()
        // expect(await browser.getTitle()).toHaveTitleContaining("Recycle Bin")
        expect(await browser.getTitle()).to.contain("Recycle Bin")
        await organizationsPage.search.call(recyclebinPage, orgN, "Organization Name")
        //const deletedOrg = await browser.$(`a=${orgN}`)

        // expect(await recyclebinPage.locate).toBeDisplayed();
        // expect(await recyclebinPage.locate).toBeDisplayed();

        expect(await browser.$(`//a[.="${orgN}"]`).waitForDisplayed()).to.be.true;

    })
    it('Restore', async () => {


        //const deletedOrg = await browser.$(`a=${orgN}`)

        // expect(deletedOrg).toBeDisplayed();

        await organizationsPage.search.call(recyclebinPage, orgN, "Organization Name")
            // const re = await browser.$('//tbody//td/a[.="Organization Name"]/ancestor::tbody[1]/tr/td/a[@title="Organizations" and .="RMon16"]/../following-sibling::td/a[contains(.,"restore")]')
            // await re.click()
            expect(await (await recyclebinPage.restore).isClickable()).to.be.true
            if(await (await recyclebinPage.restore).isClickable())
             await recyclebinPage.restoreAction()
          //  await browser.waitUntil(async()=>await browser.$(`//a[.="${orgN}"]`).waitForDisplayed())
            //await browser.waitUntil(async()=>await browser.is)
            await browser.refresh()
        await organizationsPage.search.call(recyclebinPage, orgN, "Organization Name")
        expect(await browser.$(`//a[.="${orgN}"]`).isDisplayed()).to.not.be.true


    })
    it('verify restored org', async () => {
        await (await homePage.organizationsLink).click()
        await organizationsPage.search(orgN, "Organization Name")
        // expect(await browser.$(`a=${orgN}`)).toBeDisplayed()
        expect(await (await browser.$(`//a[.="${orgN}"]`)).waitForDisplayed()).to.be.true
    })


    // it('empty the recycle bin', async () => {
    //     const emptyBin = await browser.$('[value="Empty Recycle Bin"]')
    //     await emptyBin.click()
    //     const emptyBinCfm = await browser.$('[value="Yes"]')
    //     await emptyBinCfm.click()
    //     expect($$('//tr'))
    // })

    // await expect().toBeNull();
    // await browser.acceptAlert();

})