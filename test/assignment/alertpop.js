//login as user, click on restaurants, add a dish to cart, purchace via cash on delivery, check whether the order is placed

describe('order dish', async () => {
    
    it('login', async () => {
       await browser.maximizeWindow()
       await browser.url("http://testingserver/domain/Online_Food_Ordering_System")

       const Login = await browser.$('//a[.="Login"]')
        await Login.click()

       await (await browser.$('input[name="username"]')).setValue('gsp254')

       await (await browser.$('input[name="password"]')).setValue('123456')
       
       await (await browser.$('input[name="submit"]')).click()

       browser.waitUntil(async()=>(await browser.getTitle())==="Home")
    
       expect(browser).toHaveTitleContaining("Home")
    
    })
    

    it('add dish to cart', async () => {
        
        await (await browser.$('//a[.="Restaurants "]')).click()
 
        await (await browser.$('//a[.="Jordania"]/../../../following-sibling::div//a')).click()
        

        await (await browser.$('//a[.="Biriyani"]/../../../../..//input[@type="submit"]')).click()
     })

     it('place order', async () => {
        

        const Checkout = await (await browser.$('//a[.="Checkout"]')).click()
 
        await (await browser.$('//span[.="Cash on Delivery"]')).click()
        
        await (await browser.$('input[value="Order Now"]')).click()
        
        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        await browser.acceptAlert()

        await browser.waitUntil(async ()=> await browser.isAlertOpen())
        console.log(await browser.getAlertText())
        await browser.acceptAlert()
     })

})