class ContactDetailView{
    get contactInfoHeader(){
        return $('//span[@class="dvHeaderText"]')
    }

    async contactInfoText(){
        return (await this.contactInfoHeader).getText()
    }
}
export default new ContactDetailView()