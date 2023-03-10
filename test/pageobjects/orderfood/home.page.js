class HomePage{

    get login_lnk() { return $("//a[contains(.,'Login')]")}
    get logout_lnk() { return $("//a[contains(.,'Logout')]")}

}
export default new HomePage()