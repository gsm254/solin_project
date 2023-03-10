import Page from "./page.js"

class TroubleTicketsPage extends Page {

    get createTrouble() {
        return $('aria/Create Ticket...')
    }
    get troubleTitle() {
        return $('[name="ticket_title"]')
    }
    get parentType() {
        return $('[name="parent_type"]')
    }
    get parentType() {
        return $('[name="parent_type"]')
    }
    get parentName() {
        return $('//input[@name="parent_name"]/following-sibling::img')
    }
    get priorities() {
        return $('[name="ticketpriorities"]')
    }
    get severities() {
        return $('[name="ticketpriorities"]')
    }
    get categories() {
        return $('[name="ticketcategories"]')
    }
    get categories() {
        return $('[name="ticketcategories"]')
    }
    get productName() {
        return $('//input[@name="product_name"]/following-sibling::img')
    }
    get status() {
        return $('[name="ticketstatus"]')
    }
    get description() {
        return $('[name="description"]')
    }
    get saveBtn() {
        return $('aria/Save [Alt+S]')
    }

    async createTroubleTicket(rdn) {
        await this.createTrouble.click()

            ; (await this.troubleTitle).setValue("t1" + rdn)
            ; (await this.priorities).selectByAttribute('value', 'Normal')
            ; (await this.severities).selectByAttribute('value', 'Major')
            ; (await this.categories).selectByAttribute('value', 'Small Problem')
            ; (await this.parentType).selectByAttribute('value', 'Organizations')
            ; (await this.parentName).click()

        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1)
        /* let pwin;
       browser.getWindowHandle().then(values=>pwin=values)
        let cwin;
      browser.getWindowHandles().then(values=>cwin=values)
        let cwi = cwin.filter(ele=>ele!==pwin) */
        const windows = await browser.getWindowHandles()
        await browser.switchToWindow(windows[1])
            /* await browser.waitUntil(async () =>
                await browser.switchWindow('localhost:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=HelpDeskEditView&fromlink=')
            ) */

            ; await (await browser.$('//a[@id="1"]')).click()
        await browser.switchToWindow(windows[0])

            ; await(await this.productName).click()
        let win = await browser.getWindowHandles()
        await browser.switchToWindow(win[1])
            /*  await browser.waitUntil(async () =>
                 await browser.switchWindow('localhost:8888/index.php?module=Products&action=Popup&html=Popup_picker&form=HelpDeskEditView&popuptype=specific&fromlink=')
             ) */

            ;await (await browser.$('//a[@id="1"]')).click()
        await browser.switchToWindow(win[0])
            ; (await this.status).selectByAttribute('value', 'Open')
            ; (await this.description).addValue("troublesome")
            ; (await this.saveBtn).click()


    }
}

export default new TroubleTicketsPage()