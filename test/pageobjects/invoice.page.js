class InvoicePage{
    get createInvoice(){
        return $('aria/Create Invoice...')
    }
    get subject(){
        return $('[name="subject"]')
    }
    get selecrOrganization(){
        return $('//input[@name="account_name"]/following-sibling::img')
    }

    get billAddress(){
        return $('[name="bill_street"]')
    }
    get bill_pobox(){
        return $('[name="bill_pobox"]')
    }
    get bill_city(){
        return $('[name="bill_city"]')
    }
    get bill_state(){
        return $('[name="bill_state"]')
    }
    get bill_code(){
        return $('[name="bill_code"]')
    }
    get bill_country(){
        return $('[name="bill_country"]')
    }
    get shipping_Address(){
        return $('[name="ship_street"]')
    }
    
    get copyBill(){
        return $$('[name="cpy"]')[1]
    }
    get copyShip(){
        return $$('[name="cpy"]')[0]
    }
    get quantity(){
        return $$('[name="qty1"]')
    }
    get saveBtn(){
        return $$('aria/Save [Alt+S]')
    }
    get product(){
        return $('//input[@name="productName1"]/following-sibling::img')
    }
}
export default new InvoicePage()