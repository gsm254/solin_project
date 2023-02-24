import { default as homePage } from "../pageobjects/home.page.js";
import { default as loginPage } from "../pageobjects/login.page.js";
import { default as organizationsPage } from "../pageobjects/organizations.page.js";

describe('dropdown handling', () => {
    it('login', async () => {
        loginPage.open();
        loginPage.login('admin','admin')
    })
    it('dropdown', async () => {
        (await homePage.organizationsLink).click();
        (await organizationsPage.searchTextField).waitForDisplayed()
        const drop = await browser.$('[name="search_field"]')
        await drop.selectByAttribute('value', 'accountname');
        //   await drop.selectByVisibleText('Organization Name');
        //   await drop.selectByIndex(2);
        (await organizationsPage.searchTextField).setValue("org65");
        (await organizationsPage.searchBtn).click();
        await browser.waitUntil(async () => await (await browser.$('a=org65')).isDisplayed())


    })

})