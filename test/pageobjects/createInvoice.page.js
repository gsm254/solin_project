import organizationsPage from "./organizations.page.js"
import productPage from "./product.page.js"


class CreateInvoicePage {
    get subject() {
        return $('[name="subject"]')
    }
    get selecrOrganization() {
        return $('//input[@name="account_name"]/following-sibling::img')
    }

    get billAddress() {
        return $('[name="bill_street"]')
    }
    get bill_pobox() {
        return $('[name="bill_pobox"]')
    }
    get bill_city() {
        return $('[name="bill_city"]')
    }
    get bill_state() {
        return $('[name="bill_state"]')
    }
    get bill_code() {
        return $('[name="bill_code"]')
    }
    get bill_country() {
        return $('[name="bill_country"]')
    }
    get shipping_Address() {
        return $('[name="ship_street"]')
    }

    get copyBill() {
        return $$('[name="cpy"]')[1]
    }
    get copyShip() {
        return $$('[name="cpy"]')[0]
    }
    get quantity() {
        return $('[name="qty1"]')
    }
    get saveBtn() {
        return $('aria/Save [Alt+S]')
    }
    get product() {
        return $('//input[@name="productName1"]/following-sibling::img')
    }

    /*************************************************** */
    async createInvoice(rdn) {
        await this.subject.setValue("sample" + rdn)
            ; await (await this.selecrOrganization).click()
        let win = await browser.getWindowHandles()
            ; await browser.switchToWindow(win[1])
            // browser.switchWindow("localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_account_address&form=TasksEditView&form_submit=false&fromlink=")
            ; await (await organizationsPage.searchTextField).setValue("rmon64")
            ; await (await organizationsPage.searchBtn).click()
            ; await (await browser.$('a=rmon64')).click()
        if (await browser.isAlertOpen())
            await browser.acceptAlert()
        await browser.switchToWindow(win[0])
        // await browser.switchWindow("http://localhost:8888/index.php?module=Invoice&action=EditView&return_action=DetailView&parenttab=Sales")
        await (await this.billAddress).addValue(`no 73, whitefield${rdn}`)
        await (await this.bill_pobox).addValue(`whitefield${rdn}`)
        await (await this.bill_city).addValue(`Bengaluru${rdn}`)
        await (await this.bill_state).addValue(`Karnataka${rdn}`)
        await (await this.bill_code).addValue(`5700${rdn}`)
        await (await this.bill_country).addValue(`India${rdn}`)
        await (await this.copyBill).click()
            ; await (await this.product).click()
        let w = await browser.getWindowHandles()
            ; await browser.switchToWindow(w[1])
            // ; await browser.switchWindow("localhost:8888/index.php?module=Products&action=Popup&html=Popup_picker&select=enable&form=HelpDeskEditView&popuptype=inventory_prod&curr_row=1&return_module=Invoice&currencyid=1")
            ; await productPage.searchProduct('classmate184', 'Product Name')
            // ; (await organizationsPage.searchBtn).call(invoicePage).click()
            ; await (await browser.$('a=classmate184')).click()
            ; await browser.switchToWindow(w[0])
            ; await (await this.quantity).setValue(30)
            ; await (await this.saveBtn).click()

    }
}
export default new CreateInvoicePage()