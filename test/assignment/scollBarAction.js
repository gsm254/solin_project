describe('Handling the ScrollBar',()=>{
    it('Navigate to the Apllication',async ()=>{
        await browser.maximizeWindow()
        await browser.url("https://www.flipkart.com/")
        await browser.$(`//button[.='✕']`).waitForDisplayed()
        await browser.$(`//button[.='✕']`).click()
    })
    it('scrollingAction', async ()=>{
        await browser.$(`//span[.='Mail Us:']`).scrollIntoView()
        await browser.debug()
    })
})