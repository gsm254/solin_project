class OrganizationDetailView{
    get orgInfoHeader() {
        return $('//span[@class="dvHeaderText"]')
    }
    get delete() {
        return $('[title="Delete [Alt+D]"')
    }

    /*************************************************************************************** */
    async getOrgInfoHeader(){
        return (await this.orgInfoHeader).getText();
    }
    async deleteOrg(){
        await (await this.delete).click()
        await browser.acceptAlert()
    }
}

export default new OrganizationDetailView()