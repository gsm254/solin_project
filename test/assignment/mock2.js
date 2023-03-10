class Organization{
	orgname = "TYSS"
        website = "www.tyss.in"
    details(){
     console.log(`${this.orgname} \t ${this.website}`)
 }
}

class Contact extends Organization{
    contactNum = "456866"
    
    
}
let contact1 = new Contact()
contact1.details()
console.log(contact1.contactNum)