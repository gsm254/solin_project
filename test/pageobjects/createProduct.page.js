class CreateProduct {
    get productName() {
        return $('[name="productname"]')
    }
    get unit_price() {
        return $('[name="unit_price"]')
    }
    get unit_price() {
        return $('[name="unit_price"]')
    }
    get stock() {
        return $('[name="qtyinstock"]')
    }
    get saveBtn() {
        return $('aria/Save [Alt+S]')
    }

    async createProducts(name, unit_price, stock, rdn) {

        await this.createProduct.click()
        await this.productName.setValue(name + rdn)
        await this.unit_price.setValue(unit_price)
        await this.stock.setValue(stock)
        await this.saveBtn.click()
    }
}
export default new CreateProduct()