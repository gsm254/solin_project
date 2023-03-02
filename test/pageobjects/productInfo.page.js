class ProductDetailView {
    get productInfoHeader() {
        return $('.lvtHeaderText')
    }

    async getProductInfoHeader() {
        return await (await this.productInfoHeader).getText()
    }
}
export default new ProductDetailView()