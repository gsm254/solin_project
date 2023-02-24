/* describe("handling popup", () => {

    it('open application', async () => {
        await browser.url('http://testingserver/domain/Online_Food_Ordering_System/');
        await browser.maximizeWindow()
        const rest = await browser.$('//a[contains(.,"Restaurants ")]')
        await rest.waitForDisplayed();
        expect(browser).toHaveTitleContaining("Home");
    })
    it('error msg for invalid cred', async () => {
        (await browser.$('//input[@name="username"]')).waitForDisplayed()

            ; (await browser.$('//input[@name="username"]')).setValue("gsp251")
            ; (await browser.$('//input[@name="password"]')).setValue("gsp251")
            
            ; (await browser.$('//input[@name="submit"]')).click()
            ; (await browser.$('//h2[contains(.,"Login")]/following-sibling::span[1]')).waitForDisplayed()

        let err = (await browser.$('//h2[contains(.,"Login")]/following-sibling::span[1]')).getText()
        console.log(err);
    })
}) */

describe('create org, contact', () => {
    it('Login to application', async () => {

        await browser.url("http://testingserver:8888")

        const userName = await browser.$("input[name='user_name']")
        await userName.setValue('admin')

        const passWord = await browser.$("input[name='user_password']")
        await passWord.setValue('admi')
        const loginBtn = await browser.$("input[id='submitButton']")
        await loginBtn.click()
        await browser.waitUntil(async () => {
            let err = (await browser.$('//div[@class="errorMessage"]')).getText();
            let res = (await err).includes("You must specify a valid username and password.")
            return res;
        }, { timeout: 5000 })
        let err = await (await browser.$('//div[@class="errorMessage"]')).getText();

        console.log(err + "------------------------------------------------------------------------------------");

        // expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })
})