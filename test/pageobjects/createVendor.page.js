class CreateVendorPage {
    get vendor_name() {
        return $('[name="vendorname"]')
    }
    get vendor_email() {
        return $('[name="email"]')
    }
    get vendor_phone() {
        return $('[name="phone"]')
    }
    get saveBtn() {
        return $('aria/Save [Alt+S]')
    }

    /*********************** ************/
    async createVendor(rdn) {
        //expect(await (await browser.$('//span[contains(.,"New")]')).getText()).toContain("Creating New Vendor")
            ; (await this.vendor_name).setValue('nithish'+rdn)
            ; (await this.vendor_email).setValue(`nithish${rdn}@gmail.com`)
            ; (await this.vendor_phone).setValue(`1234561${rdn}`)
            ; (await this.saveBtn).click()
    }

}
export default new CreateVendorPage()