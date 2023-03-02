class VendorDetailView{
    get vendorInfoHeader(){
        return $('//span[@class="lvtHeaderText"]')
    }
    async getVendorInfoHeader(){
        return await (await this.vendorInfoHeader).getText()
    }
}
export default new VendorDetailView()