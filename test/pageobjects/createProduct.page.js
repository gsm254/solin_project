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

        //await (await this.createProduct).click()
        await (await this.productName).setValue(name + rdn)
        await (await this.unit_price).setValue(unit_price)
        await (await this.stock).setValue(stock)
        await (await this.saveBtn).click()
    }
}
export default new CreateProduct()