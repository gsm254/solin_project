import { default as Page } from "./page.js";

class LoginPage extends Page{
   
    get username_tf() {return $("//input[@name='username']")}
    get password_tf() {return $("//input[@name='password']")}
    get login_btn() {return $("//input[@name='submit']")}
    get header_txt() {return $("//h1[.='Admin Panel ']")}

    async login(username,password)
    {
        await browser.maximizeWindow()
        await this.username_tf.setValue(username)
        await this.password_tf.setValue(password)
        await this.login_btn.click()

    }

    async getHeader_txt(){
        return await this.header_txt.getText()
    }
    
    
}
export default new LoginPage()