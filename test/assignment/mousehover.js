import { default as homePage } from "../pageobjects/home.page.js"
import { default as loginPage } from "../pageobjects/login.page.js"

describe("mousehover", () => {
    it('login', async () => {
        await loginPage.open()
        await loginPage.login('admin', 'admin')
        expect(browser).toHaveTitleContaining('vtiger')
    })
    it('mouseHover action', async () => {
        ; (await homePage.moreLink).moveTo()
            ; (await homePage.recycleBinLink).waitForDisplayed()
        expect(homePage.recycleBinLink).toBeDisplayed()
    })
})