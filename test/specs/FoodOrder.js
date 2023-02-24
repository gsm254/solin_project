

describe('add item', () => {

    it('try once', async () => {
        await browser.url('http://testingserver/domain/Online_Food_Ordering_System/');
        const rest = await browser.$('//a[contains(.,"Restaurants ")]')
        await rest.waitForDisplayed();
        await rest.click()
        expect(await browser.getTitle()).toHaveTitleContaining('Restaurants')
        await (await browser.$('//a[contains(.,"Choose Restaurant")]')).waitForDisplayed()

        let rname = "North Street Tavern"

        const rlink = await browser.$(`//a[contains(.,'${rname}')]`)
        await rlink.click()

        expect(await browser.getTitle()).toHaveTitleContaining('Dishes')

        let beforeCount = (await (await browser.$('//p[.="TOTAL"]/..//strong')).getText()).slice(1)

        let item_name = "Lamb Patties"
        let i1 = await additem(item_name, 2);
        let i2 = await additem('Lobster', 3);

        let AfterCount = (await (await browser.$('//p[.="TOTAL"]/..//strong')).getText()).slice(1);
        console.log(beforeCount);
        console.log(i1);
        console.log(i2);
        console.log(AfterCount);
        if (AfterCount == (Number(beforeCount) + Number(i1) + Number(i2))) {
            console.log("total amount is mathcing with sum of (item_price*qty)");
        } else {
            console.log("it is not matching");
        }

        async function additem(item_name, qty) {
            var item_price = (await (await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//span`)).getText()).slice(1)
            var item_qty = await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[@name="quantity"]`);
            await item_qty.clearValue();
            await item_qty.setValue(qty);


            let AddToCart = await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[contains(@value,"Add To Cart")]`);
            await AddToCart.click();
            return item_price * qty;
        }
    })
})