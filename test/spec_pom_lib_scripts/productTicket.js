import createProductPage from "../pageobjects/createProduct.page.js"
import { default as homePage } from "../pageobjects/home.page.js"
import { default as loginPage } from "../pageobjects/login.page.js"
import { default as productPage } from "../pageobjects/product.page.js"
import productInfoPage from "../pageobjects/productInfo.page.js"
import { default as troubleTicketPage } from "../pageobjects/troubleTicket.page.js"
import TroubleTicketInfoPage from "../pageobjects/TroubleTicketInfo.page.js"

describe('create proudct and create trouble ticket for it', () => {

    it('login to application', async () => {

        await loginPage.open()
        await loginPage.login()

    })

    let rdn = Math.round(Math.random() * (250 - 10) + 10)

    it('create prodcut', async () => {
        let pen = "classmate"
        await homePage.productsLink.click()
        expect(browser).toHaveTitleContaining("Products")
        await (await productPage.createProduct).click()
        expect(await browser.getUrl()).toHaveUrlContaining('action=EditView')
        await createProductPage.createProducts(pen, 20, 2000, rdn)
        expect(await productInfoPage.getProductInfoHeader()).toContain(pen+rdn)

    })
    // it('verify created product', async () => {
    //    expect(await productInfoPage.productInfo()).toContain("classmate"+rdn)
    // })

    it('create trouble ticket', async () => {
        await homePage.TroubleTicketLink.click()
        expect(browser).toHaveTitleContaining("Tickets")
        await troubleTicketPage.createTroubleTicket(rdn)
        expect(await TroubleTicketInfoPage.getTicketInfoHeader()).toContain("t1"+rdn)

    })
})
