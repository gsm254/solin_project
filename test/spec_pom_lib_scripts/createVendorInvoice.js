import {expect} from "chai";
import createInvoicePage from "../pageobjects/createInvoice.page.js";
import createVendorPage from "../pageobjects/createVendor.page.js";
import homePage from "../pageobjects/home.page.js";
import invoicePage from "../pageobjects/invoice.page.js";
import invoiceInfoPage from "../pageobjects/invoiceInfo.page.js";
import { default as loginPage } from "../pageobjects/login.page.js"
import vendorInfoPage from "../pageobjects/vendorInfo.page.js";
import vendorsPage from "../pageobjects/vendors.page.js";

describe("create vendor , invoice", () => {
    it('login', async () => {
        await loginPage.open()
        await loginPage.login()
    })
    let rdn = Math.round(Math.random() * (500 - 100) + 100)
    it("creating vendor", async () => {
        let vdrName = "nithish" + rdn
        await homePage.moreHover();
        await (await homePage.VendorsLink).click()
        //expect(browser).toHaveTitleContaining("Vendors")
        expect(await browser.getTitle()).to.contain("Vendors")
        await (await vendorsPage.createVendor).click()
        // expect(await browser.getUrl()).toHaveUrlContaining("action=EditView")
        expect(await browser.getUrl()).to.contain("action=EditView")
        await createVendorPage.createVendor(rdn);
        //expect(await browser.getUrl()).toHaveUrlContaining("action=DetailView")
        expect(await browser.getUrl()).to.contain("action=DetailView")

        // expect(await vendorInfoPage.getVendorInfoHeader()).toContain(vdrName)
        expect(await vendorInfoPage.getVendorInfoHeader()).to.contain(vdrName)

    })
    it("creating invoice", async () => {
        await homePage.moreHover()
        await (await homePage.InvoiceLink).click()
        //expect(browser).toHaveTitleContaining("Invoice")
        expect(await browser.getTitle()).to.contain("Invoice")
            ; await (await invoicePage.createInvoice).click()
        // expect(await browser.getUrl()).toHaveUrlContaining("action=EditView")
        expect(await browser.getUrl()).to.contain("action=EditView")
       
        await createInvoicePage.createInvoice(rdn)
        // expect(await browser.getUrl()).toHaveUrlContaining("action=DetailView")
        expect(await browser.getUrl()).to.contain("action=DetailView")
        // expect(await invoiceInfoPage.getInvoiceInfoHeader()).toContain("sample" + rdn)
        expect(await invoiceInfoPage.getInvoiceInfoHeader()).to.contain("sample" + rdn)

    })
})