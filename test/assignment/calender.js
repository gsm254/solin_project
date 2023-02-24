describe('cale', () => {
    it('open', async () => {
        await browser.url("http://testingserver/domain/Online_Tourism_Management_System/index.php")
        await browser.maximizeWindow()
            ; (await browser.$('//a[.="Tour Packages"]')).click()

            ; (await browser.$('//h4[contains(.,"Package Name: Manali Trip ")]/../..//a[contains(.,"Details")]')).click()

            ; (await browser.$('//input[@name="fromdate"]')).click()

        let fdate = 28
        let month = "May"
        let year = 2024

        // ;(await browser.$(`//table//td[@data-handler="selectDay"]/a[.="${fdate}"]`)).click()
        const next = await browser.$('//a[@data-handler="next"]')
        const prev = await browser.$('//a[@data-handler="prev"]')
        let date = null;
        for (; ;) {
            date = await browser.$(`//span[contains(.,"${year}")]/preceding-sibling::span[contains(.,"${month}")]/../../..//td[@data-handler="selectDay"]/a[contains(.,"${fdate}")]`)
            if(await date.isClickable()) {
                break;
            } else {
                await next.click()
            }
        }
        

    })
})