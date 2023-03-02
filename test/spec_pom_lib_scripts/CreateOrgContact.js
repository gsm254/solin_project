import loginPage from '../pageobjects/login.page.js'
import organizationsPage from '../pageobjects/organizations.page.js'
import homePage from '../pageobjects/home.page.js'
import createOrganizationPage from '../pageobjects/createOrganization.page.js'
import organizationInfoPage from '../pageobjects/organizationInfo.page.js'
import createContactPage from '../pageobjects/createContact.page.js'
import contactPage from '../pageobjects/contact.page.js'
import contactInfoPage from '../pageobjects/contactInfo.page.js'
import {expect } from 'chai'


describe('create org, contact', () => {

    it('Login to application', async () => {
        await loginPage.open()
        //expect(await browser.getTitle()).toHaveUrlContaining("vtiger")
        await loginPage.login()
        // expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })


    let rdn = Math.round(Math.random() * (99 - 5) + 5)
    let orgN = 'rmon' + rdn;
    it('create org', async () => {

        ; await (await homePage.organizationsLink).click()
        //expect(browser).toHaveTitleContaining("Organizations")
        expect(await browser.getTitle()).to.contain("Organizations")
            ; await (await organizationsPage.createOrganization).click()
       // expect(await browser.getUrl()).toHaveUrlContaining("action=EditView")
       expect(await browser.getUrl()).to.contain('action=EditView')
        await createOrganizationPage.createOrg('rmon', rdn)
        //expect(await browser.getUrl()).toHaveUrlContaining("action=DetailView")
        expect(await browser.getUrl()).to.contain('action=DetailView')
       // expect(await organizationInfoPage.getOrgInfoHeader()).toContain(orgN)

expect(await organizationInfoPage.getOrgInfoHeader()).to.contain(orgN)
    })


    it('create contact', async () => {

        await (await homePage.contactsLink).click()
       // expect(browser).toHaveTitleContaining("Contacts");
        expect(await browser.getTitle()).to.contain("Contacts");
       await (await contactPage.createContact).click()
       // expect(await browser.getUrl()).toHaveUrlContaining("action=EditView")
       expect(await browser.getUrl()).to.contain("action=EditView")
        await createContactPage.createContact(rdn)
        // expect(await browser.getUrl()).toHaveUrlContaining("action=DetailView")
        expect(await browser.getUrl()).to.contain("action=DetailView")

        //createContactPage.createContact();
        // const contactInfo = await browser.$('.dvHeaderText')
        // await contactInfo.waitForDisplayed()
        // expect(contactInfo).toBeDisplayed;
        expect(await contactInfoPage.contactInfoText()).to.contain('Raj' + rdn)
        // expect(await contactInfoPage.contactInfoText()).toContain('Raj' + rdn)
    })
})

