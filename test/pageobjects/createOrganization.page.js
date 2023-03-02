class CreateOrganization{
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
        return $('[title="Save [Alt+S]"]')
    }

    //*************************************************************************************** */

    async createOrg(name,rdn){

        await (await this.orgName).addValue(name+rdn)
        await (await this.website).addValue(`https://www.rmon${rdn}.com`)
        await (await this.phoneNo).addValue(`97689752${rdn}`)
        await (await this.email).addValue(`rmon${rdn}@gmail.com`)
        await (await this.employees).addValue(`${rdn}`)
        await (await this.industry).selectByAttribute('value', 'Banking')
        await (await this.type).selectByAttribute('value', 'Investor')
        await (await this.billAddress).addValue(`no 73, whitefield${rdn}`)
        await (await this.bill_pobox).addValue(`whitefield${rdn}`)
        await (await this.bill_city).addValue(`Bengaluru${rdn}`)
        await (await this.bill_state).addValue(`Karnataka${rdn}`)
        await (await this.bill_code).addValue(`5700${rdn}`)
        await (await this.bill_country).addValue(`India${rdn}`)
        await (await this.copyBill).click()
        await (await this.saveBtn).click()

    }
}

export default new CreateOrganization()