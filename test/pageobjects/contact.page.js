class ContactPage{
    get createContact(){
        return $('[title="Create Contact..."]')
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

    async search(searchText,searchBy){
        (await this.searchTextField).setValue(searchText)
        ;(await this.searchByDropDown).selectByVisibleText(searchBy)
        ;(await this.searchBtn).click()
    } 
}
export default new ContactPage()