//import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrganizationsPage  {

    get createOrganization() {
        return $('[title="Create Organization..."]')
    }

    //form details
    get orgName() {
        return $('[name="accountname"]')
    }
    get website() {
        return $('[name="website"]')
    }
    get phoneNo() {
        return $('[name="phone"]')
    }
    get employees() {
        return $('[name="employees"]')
    }
    get otherEmail() {
        return $('[name="email2"]')
    }
    get otherEmail() {
        return $('[name="email2"]')
    }
    get industry(){
        return $('[name="industry"]')
  
    }
    get type(){
        return $('[name="accounttype"]')
    }
    get email(){
        return $('[name="email1"]')
    }

    get billAddress(){
        return $('[name="bill_street"]')
    }
    get bill_pobox(){
        return $('[name="bill_pobox"]')
    }
    get bill_city(){
        return $('[name="bill_city"]')
    }
    get bill_state(){
        return $('[name="bill_state"]')
    }
    get bill_code(){
        return $('[name="bill_code"]')
    }
    get bill_country(){
        return $('[name="bill_country"]')
    }
    get shipping_Address(){
        return $('[name="ship_street"]')
    }
    
    get copyBill(){
        return $$('[name="cpy"]')[1]
    }
    get copyShip(){
        return $$('[name="cpy"]')[0]
    }
   

    get saveBtn() {
        return $$('[title="Save [Alt+S]"]')
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