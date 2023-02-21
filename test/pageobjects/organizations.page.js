import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrganizationsPage extends Page {

    get createOrganization() {
        return $('[title="Create Organization..."]')
    }

    get orgNameTextField() {
        return $('[name="accountname"]')
    }

    get saveBtn() {
        return $('[title="Save [Alt+S]"]')
    }
    get orgInfo() {
        return $('.dvHeaderText')
    }
    get searchTextField() {
        return $('[name="search_text"]')
    }
    get searchBtn() {
        return $('[name="search"]')
    }
    get searchByDropDown() {
        return $('[name="search"]')
    }

}
export default new OrganizationsPage()