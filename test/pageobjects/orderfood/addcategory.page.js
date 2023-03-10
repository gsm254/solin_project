class AddCategoryPage{
    
    get header_txt(){return $("//h4[.='Add Restaurant Category']")}
    get category_tf(){return $("//input[@name='c_name']")}
    get save_btn(){return $("//input[@name='submit']")}


    async getHeader_txt(){
        return await this.header_txt.getText()
    }

    async create_category(name){
        await this.category_tf.setValue(name)
        await this.save_btn.click()
    }

}

export default new AddCategoryPage()