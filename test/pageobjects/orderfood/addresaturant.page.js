class AddRestaurant{
    get header_txt(){return $("//h4[.='Add Restaurant']")}
    get selectCategory(){return $("//select[@name='c_name']")}
    get categoryOPtions(){return $$("//select[@name='c_name']/option")}

    
    async getHeader_txt(){
        return await this.header_txt.getText()
    }
}
export default new AddRestaurant()