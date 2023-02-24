import { default as homePage } from "../pageobjects/home.page.js"
import { default as loginPage } from "../pageobjects/login.page.js"
import { default as productPage } from "../pageobjects/product.page.js"
import { default as troubleTicketPage } from "../pageobjects/troubleTicket.page.js"

describe('create proudct and create trouble ticket for it', () => {

    it('login to application', async () => {

        //await loginPage.open()
        await browser.url("http://localhost:8888")
        expect(browser).toHaveTitleContaining("vtiger")
        await loginPage.username.waitForDisplayed()
        await browser.maximizeWindow()
        await loginPage.login("admin", "admin")

        expect(browser.getTitle).toHaveTitleContaining("Home")
    })

    let rdn = Math.round(Math.random() * (250 - 10) + 10)

    it.skip('create prodcut', async () => {
        let pen = "classmate"
        await homePage.productsLink.click()
        await productPage.createProduct.click()
        await productPage.productName.setValue(pen + rdn)
        await productPage.unit_price.setValue(rdn)
        await productPage.stock.setValue(1000)
        await productPage.saveBtn.click()

        expect(await productPage.productInfo).toBeDisplayed
    })

    it('create trouble ticket', async () => {
        await homePage.TroubleTicketLink.click()

        await troubleTicketPage.createTrouble.click()
            ; (await troubleTicketPage.troubleTitle).setValue("t1 " + rdn)
            ; (await troubleTicketPage.priorities).selectByAttribute('value', 'Normal')
            ; (await troubleTicketPage.severities).selectByAttribute('value', 'Major')
            ; (await troubleTicketPage.categories).selectByAttribute('value', 'Small Problem')
            ; (await troubleTicketPage.parentType).selectByAttribute('value', 'Organizations')
            ; (await troubleTicketPage.parentName).click()
        const parentUrl = await browser.getUrl();
        await browser.waitUntil(async ()=> (await browser.getWindowHandles()).length>1)
        //  await browser.switchWindow('testingserver:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=HelpDeskEditView&fromlink=')
        await browser.waitUntil(async () =>
            await browser.switchWindow('localhost:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=HelpDeskEditView&fromlink=')
        )

            ; (await browser.$('//a[@id="1"]')).click()
        await browser.switchWindow(parentUrl)

            ; (await troubleTicketPage.productName).click()
        // await browser.switchWindow('testingserver:8888/index.php?module=Products&action=Popup&html=Popup_picker&form=HelpDeskEditView&popuptype=specific&fromlink=')
        await browser.waitUntil(async () =>
            await browser.switchWindow('localhost:8888/index.php?module=Products&action=Popup&html=Popup_picker&form=HelpDeskEditView&popuptype=specific&fromlink=')
        )

            ; (await browser.$('//a[@id="1"]')).click()
        await browser.switchWindow(parentUrl)
            ; (await troubleTicketPage.status).selectByAttribute('value', 'Open')
            ; (await troubleTicketPage.description).addValue("troublesome")
            ; (await troubleTicketPage.saveBtn).click()

    })
})
