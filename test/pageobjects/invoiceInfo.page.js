class InvoiceDetailedView{
    get invoiceInfoHeader(){
        return $('//span[@class="lvtHeaderText"]')
    }
    async getInvoiceInfoHeader(){
        return await (await this.invoiceInfoHeader).getText()

    }
}
export default new InvoiceDetailedView()