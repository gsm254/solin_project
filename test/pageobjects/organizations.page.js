//import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrganizationsPage {

    get createOrganization() {
        return $('[title="Create Organization..."]')
    }

    get searchTextField() {
        return $('[name="search_text"]')
    }
    get searchBtn() {
        return $('[name="search"]')
    }
    get searchByDropDown() {
        return $('[name="search_field"]')

    }

    /********************************* */
    async search(searchText, searchBy) {
        (await this.searchTextField).setValue(searchText)
            ; (await this.searchByDropDown).selectByVisibleText(searchBy)
            ; (await this.searchBtn).click()
            
    }

}
export default new OrganizationsPage()