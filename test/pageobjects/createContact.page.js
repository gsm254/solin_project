import organizationsPage from "./organizations.page.js"


class CreateContactPage {
    get salute() {
        return $('[name="salutationtype"]')
    }
    get firstname() {
        return $('[name="firstname"]')
    }
    get lastname() {
        return $('[name="lastname"]')
    }
    get orgSelect() {
        return $('//input[@name="account_name"]/following-sibling::img')
    }
    get saveBtn() {
        return $('//input[@value="  Save  "]')
    }

    /******************************************************************** */
    async createContact(rdn) {
       await this.salute.selectByAttribute('value', 'Mr.')
            ; await (await this.firstname).setValue("Anup")
            ;await (await this.lastname).setValue("Raj"+rdn)
            ; await (await this.orgSelect).click()
        let winds = await browser.getWindowHandles()
        await browser.switchToWindow(winds[1])
       await  organizationsPage.search("Anup Raj","Orgnaization Name")
        ;await  (await browser.$('//a[@id="1"]')).click()
       await  browser.switchToWindow(winds[0])
        ;await (await this.saveBtn).click()
    }
}
export default new CreateContactPage()