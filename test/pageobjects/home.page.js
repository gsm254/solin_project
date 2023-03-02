import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get organizationsLink() {
        return $('a=Organizations')
    }

    get contactsLink() {
        return $('a=Contacts')
    }

    get moreLink() {
        return $('a=More')
    }
    get recycleBinLink() {
        return $('a=Recycle Bin')
    }
    get opportunitiesLink() {
        return $('a=Opportunities')
    }
    get productsLink() {
        return $('a=Products')
    }
    get TroubleTicketLink() {
        return $('a=Trouble Tickets')
    }
    get VendorsLink() {
        return $('a=Vendors')
    }
    get InvoiceLink() {
        return $('a=Invoice')
    }
    get userLookUp() {
        return $('//span[@class= "userName"]/../following-sibling::td[1]/img')
    }
    get signout() {
        return $("//a[.='Sign Out']")
    }

    async signout() {
        await this.userLookUp.moveTo()
        await this.signout.click()
    }
    async moreHover(){
        (await this.moreLink).moveTo()
    }

}

export default new HomePage()