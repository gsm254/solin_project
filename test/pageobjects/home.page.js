import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get organizationsLink () {
        return $('a=Organizations')
    }

    get contactsLink () {
        return $('a=Contacts')
    }

    get moreLink () {
        return $('a=More')
    }
    get recycleBinLink () {
        return $('a=Recycle Bin')
    }
    get opportunitiesLink () {
        return $('a=Opportunities')
    }
    get productsLink () {
        return $('a=Products')
    }
    get TroubleTicketLink () {
        return $('a=Trouble Tickets')
    }
    get VendorsLink () {
        return $('a=Vendors')
    }
    get InvoiceLink () {
        return $('a=Invoice')
    }
   
}

export default new HomePage()