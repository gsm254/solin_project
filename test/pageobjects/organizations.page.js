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
        return $('//input[@name="search" or @name ="submit"]')
    }
    get searchByDropDown() {
        return $('[name="search_field"]')

    }

    /********************************* */
    async search(searchText, searchBy) {
       await (await this.searchTextField).setValue(searchText)
            ;await (await this.searchByDropDown).selectByVisibleText(searchBy)
            ; await(await this.searchBtn).click()
            
    }

}
export default new OrganizationsPage()