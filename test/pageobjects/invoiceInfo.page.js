class InvoiceDetailedView{
    get invoiceInfoHeader(){
        return $('span[@class="dvHeaderText"]')
    }
    async getInvoiceInfoHeader(){
        return await (await this.invoiceInfoHeader).getText()

    }
}
export default new InvoiceDetailedView()