import Page from "./page.js"
        
class TroubleTicketsPage extends Page {
   
    get createTrouble() {
        return $('aria/Create Ticket...')
    }
    get troubleTitle() {
        return $('[name="ticket_title"]')
    }
    get parentType() {
        return $('[name="parent_type"]')
    }
    get parentType() {
        return $('[name="parent_type"]')
    }
    get parentName() {
        return $('//input[@name="parent_name"]/following-sibling::img')
    }
    get priorities() {
        return $('[name="ticketpriorities"]')
    }
    get severities() {
        return $('[name="ticketpriorities"]')
    }
    get categories() {
        return $('[name="ticketcategories"]')
    }
    get categories() {
        return $('[name="ticketcategories"]')
    }
    get productName() {
        return $('//input[@name="product_name"]/following-sibling::img')
    }
    get status() {
        return $('[name="ticketstatus"]')
    }
    get description() {
        return $('[name="description"]')
    }
    get saveBtn() {
        return $('aria/Save [Alt+S]')
    }
}

export default new TroubleTicketsPage()