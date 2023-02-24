

describe('Add item to cart and verify the added item, quantity, price and total price', () => {

    it('open application', async () => {
        await browser.url('http://testingserver/domain/Online_Food_Ordering_System/');
        const rest = await browser.$('//a[contains(.,"Restaurants ")]')
        await rest.waitForDisplayed();
        expect(browser).toHaveTitleContaining('Home')
        await rest.click()
    })

    it('select the restaurant', async () => {
        expect(await browser.getTitle()).toHaveTitleContaining('Restaurants')
        await (await browser.$('//a[contains(.,"Choose Restaurant")]')).waitForDisplayed()

        let rname = "North Street Tavern"

        const rlink = await browser.$(`//a[contains(.,'${rname}')]`)
        await rlink.click()

        expect(await browser.getTitle()).toHaveTitleContaining('Dishes')
    })
    let beforeCount;
    let bAdding;
    let q;

    it('Add items to the cart', async () => {

        beforeCount = (await (await browser.$('//p[.="TOTAL"]/..//strong')).getText()).slice(1)

        let item_name = "Lamb Patties"
        let quanti = '1'
        bAdding = await additem(item_name, quanti);
        expect(bAdding[2]).toEqual(quanti)
    })
    let cart;
    it('get info from cart', async () => {
        cart = await cartData();
    })
    it('verification', async () => {

        await browser.waitUntil(async () => bAdding.length == cart.length)
        console.log(bAdding);
        console.log(cart);
       expect(bAdding).toEqual(cart)
        if (bAdding.length == cart.length)
            console.log("-------------------------------------------------------------------");

        //  let item2 = await additem('Lobster', 3);

        //let AfterCount = (await (await browser.$('//p[.="TOTAL"]/..//strong')).getText()).slice(1);
        // console.log(beforeCount);
        // console.log(i1);
        // console.log(i2);
        // console.log(AfterCount);
        /*  if (AfterCount == b) {
             console.log("total amount is mathcing with sum of (item_price*qty)");
         } else {
             console.log("it is not matching");
         } */


    })
    async function additem(item_name, qty) {
        let item_fname
        let item_fullname = (await browser.$('//a[contains(.,"Lamb Patties")]')).getText().then((msg)=>item_fname=msg)
        var item_price = (await (await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//span`)).getText()).slice(1)
       /*  var item_qty = await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[@name="quantity"]`);
        await item_qty.clearValue();
        await item_qty.setValue(qty); */
        let qtyAdding = await (await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[@name="quantity"]`)).getValue();


        let AddToCart = await browser.$(`//a[contains(.,'${item_name}')]/ancestor::div[@class="row"][1]//input[contains(@value,"Add To Cart")]`);
        await AddToCart.click();
        return [item_fname, item_price, qtyAdding]
    }

    async function cartData() {
        let c_name
        let cart_iname = (await browser.$('//div[@class="title-row"]')).getText().then((msg)=>c_name=msg)
        let item_price = (await (await browser.$('//input[@id="exampleSelect1"]')).getValue()).slice(1)
        let cqty = (await browser.$('//input[@id="example-number-input"]')).getValue().then( (msg)=>q=msg);
        await browser.waitUntil(async ()=> cqty)
        return [c_name, item_price, q]
    }
})