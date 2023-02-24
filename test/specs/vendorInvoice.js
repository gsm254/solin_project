import homePage from "../pageobjects/home.page.js";
import invoicePage from "../pageobjects/invoice.page.js";
import { default as loginPage } from "../pageobjects/login.page.js"
import organizationsPage from "../pageobjects/organizations.page.js";
import productPage from "../pageobjects/product.page.js";
import vendorsPage from "../pageobjects/vendors.page.js";

describe("tc4", () => {
    it('login', async () => {
       // await loginPage.open()
       await browser.url('http://localhost:8888')
        await browser.maximizeWindow()
        expect(browser).toHaveTitleContaining("vtiger")
            ; (await loginPage.username).waitForDisplayed()
        await loginPage.login("admin", "admin")
        expect(browser).toHaveTitleContaining("Home")
    })
    let rdn = Math.round(Math.random() * (500 - 100) + 100)
    it.skip("vendor", async () => {
        let vdrName = "Nithish" + rdn
            ; (await homePage.moreLink).moveTo()
            ; (await homePage.VendorsLink).click()
        expect(browser).toHaveTitleContaining("Vendors")
            ; (await vendorsPage.createVendor).click()
            ; (await browser.$('//span[contains(.,"New")]')).waitForDisplayed()
        expect(await (await browser.$('//span[contains(.,"New")]')).getText()).toContain("Creating New Vendor")
            ; (await vendorsPage.vendor_name).setValue(vdrName)
            ; (await vendorsPage.vendor_email).setValue(`nithish${rdn}@gmail.com`)
            ; (await vendorsPage.vendor_phone).setValue(`1234561${rdn}`)
            ; (await vendorsPage.saveBtn).click()
        ; (await browser.$('//span[@class="lvtHeaderText"]')).waitForDisplayed()
        expect(await (await browser.$('//span[@class="lvtHeaderText"]')).getText()).toContain(vdrName)

    })
    it("invoice", async () => {
        ; (await homePage.moreLink).moveTo()
            ; (await homePage.InvoiceLink).click()
        expect(browser).toHaveTitleContaining("Invoice")
            ; (await invoicePage.createInvoice).click()
            ;(await browser.$('//span[contains(.,"New Invoice")]')).waitForDisplayed()
        expect(await (await browser.$('//span[contains(.,"New Invoice")]')).getText()).toContain("Creating New Invoice")
            ; (await invoicePage.selecrOrganization).click()

       // browser.switchWindow("testingserver:8888/index.php?module=Accounts&action=Popup&popuptype=specific_account_address&form=TasksEditView&form_submit=false&fromlink=")
        browser.switchWindow("localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_account_address&form=TasksEditView&form_submit=false&fromlink=")
            ; (await organizationsPage.searchTextField).setValue("org65")
            ; (await organizationsPage.searchBtn).click()
            ; (await browser.$('a="org65"')).click

       // await browser.switchWindow("http://testingserver:8888/index.php?module=Invoice&action=EditView&return_action=DetailView&parenttab=Sales")
        await browser.switchWindow("http://localhost:8888/index.php?module=Invoice&action=EditView&return_action=DetailView&parenttab=Sales")
        await (await invoicePage.billAddress).addValue(`no 73, whitefield${rdn}`)
        await (await invoicePage.bill_pobox).addValue(`whitefield${rdn}`)
        await (await invoicePage.bill_city).addValue(`Bengaluru${rdn}`)
        await (await invoicePage.bill_state).addValue(`Karnataka${rdn}`)
        await (await invoicePage.bill_code).addValue(`5700${rdn}`)
        await (await invoicePage.bill_country).addValue(`India${rdn}`)
        await (await invoicePage.copyBill).click()
            ; (await invoicePage.product).click()
           // ; await browser.switchWindow("testingserver:8888/index.php?module=Products&action=Popup&html=Popup_picker&select=enable&form=HelpDeskEditView&popuptype=inventory_prod&curr_row=1&return_module=Invoice&currencyid=1")
            ; await browser.switchWindow("localhost:8888/index.php?module=Products&action=Popup&html=Popup_picker&select=enable&form=HelpDeskEditView&popuptype=inventory_prod&curr_row=1&return_module=Invoice&currencyid=1")
            ; (await organizationsPage.searchTextField).call(productPage).setValue("classmate184")
            ; (await organizationsPage.searchBtn).call(invoicePage).click()
            ; (await browser.$('a=classmate184')).click()
            ; await browser.switchWindow("http://testingserver:8888/index.php?module=Invoice&action=EditView&return_action=DetailView&parenttab=Sales")
            ; await invoicePage.quantity.setValue(20)
            ; invoicePage.saveBtn.click()
    })
})