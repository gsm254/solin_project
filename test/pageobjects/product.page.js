import Page from "./page.js"

class ProductPage extends Page{
    get createProduct(){
        return $('aria/Create Product...')
    }
    
    
   
    get searchTextField(){
        return $('//input[@name="search_text"]')
    }
    get searchBy(){
        return $('//select[@name="search_field"]')
    }
    get searchBtn(){
        return $('//input[@name="search"]')
    }

    //************************************************************************************************************** */

    
    
    async searchProduct(name,select){
        await (await this.searchTextField).setValue(name);
        await (await this.searchBy).selectByVisibleText(select);
        await(await this.searchBtn).click()
    }
    
}
export default new ProductPage()