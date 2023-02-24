import Page from "./page.js"

class ProductPage extends Page{
    get createProduct(){
        return $('aria/Create Product...')
    }
    get productName(){
        return $('[name="productname"]')
    }
    get unit_price(){
        return $('[name="unit_price"]')
    }
    get unit_price(){
        return $('[name="unit_price"]')
    }
    get stock(){
        return $('[name="qtyinstock"]')
    }
    get saveBtn(){
        return $('aria/Save [Alt+S]')
    }
    
    get productInfo(){
        return $('.lvtHeaderText')
    }
}
export default new ProductPage()