class DashBoardPage{
   
    get header_txt() {return $("//h4[.='Admin Dashboard']")}
    get restaurant_lnk() {return $("//span[contains(.,'Restaurant')]")}
    get addCategory_lnk() {return $("//a[contains(.,'Add Category')]")}
    get addRestaurant_lnk() {return $("//a[contains(.,'Add Restaurant')]")}
    
    async getHeader_txt(){
        return await this.header_txt.getText()
    }
    
}
export default new DashBoardPage()