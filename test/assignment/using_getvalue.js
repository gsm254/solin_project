describe('Add item to cart and verify the added item, quantity, price and total price', () => {

    it('open application', async () => {
        await browser.url('http://testingserver/domain/Online_Food_Ordering_System/');
        const rest = await browser.$('//a[contains(.,"Restaurants ")]')
        await rest.waitForDisplayed();
        expect(browser).toHaveTitleContaining('Home')
        await rest.click()
    })
    it('fetching the price and quantity', async () => {
        expect(await browser.getTitle()).toHaveTitleContaining('Restaurants')
        await (await browser.$('//a[contains(.,"Choose Restaurant")]')).waitForDisplayed()

        let rname = "North Street Tavern"

        const rlink = await browser.$(`//a[contains(.,'${rname}')]`)
        await rlink.click()

        expect(await browser.getTitle()).toHaveTitleContaining('Dishes')
        let item_name = "Lobster"
        let q;
        let AddToCart = await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[contains(@value,"Add To Cart")]`);
        await AddToCart.click()
        let item_price = (await (await browser.$('//input[@id="exampleSelect1"]')).getValue()).slice(1)
        let cqty = (await browser.$('//input[@id="example-number-input"]')).getValue().then((msg) => q = msg);
        await browser.waitUntil(async () => cqty)
        console.log(`*****************${item_name} ${item_price} ${q}********************`);

    })
})
