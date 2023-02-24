describe('igp.com', () => {
    let price1 = ""
    let order_price = ""
    it('open application', async () => {
        await browser.maximizeWindow()
        // await browser.url("https://www.igp.com/")
        await browser.url("https://www.igp.com/p-chocolate-delight-cake-half-kg--190812")
        let pageTitle = await browser.getTitle()
        console.log("Tile of the psge is : " + pageTitle);
        expect(browser).toHaveTitleContaining("IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online")
    })
    it('select cakes', async () => {
        await (await browser.$('(//span[.="Cakes"])[1]')).click()
        let pageTitle = await browser.getTitle()
     console.log("Tile of the psge is : " + pageTitle);
        expect(browser).toHaveTitleContaining("Online Cake Delivery | Order & Send Best Cakes Online - IGP Cakes")
    })
    it('place order', async () => {

        await browser.$('//span[.="Birthday Cakes"]').click()
        await browser.scroll(500, 500)

        await (await browser.$('//p[contains(.,"Chocolate Delight Cake (Half Kg)")]/../../../following-sibling::div[1]/div/div/p/span')).waitForDisplayed()
        price1 = await browser.$('//p[contains(.,"Chocolate Delight Cake (Half Kg)")]/../../../following-sibling::div[1]/div/div/p/span').getText()
        await browser.$('//p[contains(.,"Chocolate Delight Cake (Half Kg)")]').click()
        let orderTitle = await browser.getTitle()
        console.log( orderTitle);
        expect(browser).toHaveTitleContaining("Order Chocolate Delight Cake Half Kg Online at Best Price, Free Delivery|IGP Cakes")


    })
    it('verify the prices', async () => {
        await browser.$('//span[@ class="number prod-price  "]').waitForDisplayed()
        order_price = await browser.$('//span[@ class="number prod-price  "]').getText()
        expect((Number)(price1.slice(1))).toEqual((Number)(order_price.slice(1)))
        console.log(price1 + " " + order_price);


    })
    it('verify with cart price', async () => {
        await browser.scroll(500, 500)
        await browser.$('//input[@ placeholder="Pincode/Location"]').setValue("560018")
        await browser.$('//button[@ id="show-Select_Date"]').click()
        try {
            await browser.$('//td[@ data-month="2" and @ data-year="2023"]/a[.="1"]').click()
        } catch (error) {
            await browser.$('//span[.="Next"]').click()
            await browser.$('//td[@ data-month="2" and @ data-year="2023"]/a[.="1"]').click()
        }
        await browser.$('//select[@ id="timepicker"]').selectByVisibleText("13:00 hrs - 17:00 hrs")
        await browser.$('//select[@ class="pdpdd select-cattype"]').selectByVisibleText("Truffle")
        await browser.$('//span[.="ADD TO CART"]').click()
        await browser.$('//span[.="CONTINUE WITHOUT ADDONS"]').click()

    })
    it('Selecting the time', async () => {

        let productCount = await browser.$('//p[contains(.,"Total Products :")]/span').getText()
        let productCost = await browser.$('//p[contains(.,"Total Amount :")]/span').getText()
        console.log("Product Count is: " + productCount + " " + "Product Price is: " + productCost);
        await expect((Number)(order_price.slice(1))).toEqual((Number)(productCost.slice(1)))
        await browser.$('//a[contains(.," Proceed To Checkout")]').click()
        await browser.debug()

    })
})