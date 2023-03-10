class RecycleBinPage {
   
    /**
     * @param {string} value
     */
    set orgNam(value) {
        this.orgName = value
    }
    get locate() {
        return $(`a=${this.orgName}`)
    }
    get searchTextField() {
        return $('[name="search_text"]')
    }
    get searchBtn() {
        return $('[name="submit"]')
    }
    get restore() {
        return $(`//tbody//td/a[.="Organization Name"]/ancestor::tbody[1]/tr/td/a[@title="Organizations" and .="${this.orgName}"]/../following-sibling::td/a[contains(.,"restore")]`)
    }
    get searchByDropDown() {
        return $('[name="search_field"]')

    }
    async restoreAction() {
        await (await this.restore).click()
        await browser.acceptAlert()

    }

}
export default new RecycleBinPage()