let lead1 = {
   lname:"Raman",
   source:"campaign",
    details: function (){console.log(`${this.lname} source is ${this.source}`) }
}
let lead2 = {
   lname:"Vaman",
   source:"Banking"
}

lead1.details();
lead1.details.call(lead2) 
lead1.details.apply(lead2)
let lead2details = lead1.details.bind(lead2)
lead2details() 