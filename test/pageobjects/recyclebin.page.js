class RecycleBinPage{
    get restore(){
        return $(`//tbody//td/a[.="Organization Name"]/ancestor::tbody[1]/tr/td/a[@title="Organizations" and .="${this.orgName}"]/../following-sibling::td/a[contains(.,"restore")]`)
    }
    set orgName(value){
        this.orgName=value
    }
    get locate(){
        return $(`a=${this.orgName}`)
    }
    async restoreAction(){
      await  (await this.restore).click()
       await browser.acceptAlert()

    }
    
}
export default new RecycleBinPage()