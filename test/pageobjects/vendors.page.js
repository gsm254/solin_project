class VendorsPage {
    get createVendor() {
        return $('[title="Create Vendor..."]')
    }
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
}
export default new VendorsPage()