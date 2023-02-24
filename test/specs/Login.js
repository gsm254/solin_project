import LoginPage from '../pageobjects/login.page.js'

describe('create org, contact,oppurtunity', () => {
    it('Login to application', async () => {

       // await browser.url("http://testingserver:8888");
        await LoginPage.open()
        await LoginPage.username.toBeDisplayed;
        expect(await browser.getTitle()).toHaveUrlContaining("vtiger")
        
        await LoginPage.username.addValue('admin')

        const passWord = await browser.$("input[name='user_password']")
        await passWord.setValue('admin')
        const loginBtn = await browser.$("input[id='submitButton']")
        await loginBtn.click()
        expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })
})