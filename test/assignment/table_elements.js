//import OrgPage from '../pageobjects/organizations.page.js'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js';
import organizationsPage from '../pageobjects/organizations.page.js';

describe('create org, contact', () => {

    it('Login to application', async () => {

        await loginPage.open()
     // await browser.url('http://localhost:8888')

        //await loginPage.username.toBeDisplayed();
        expect(await browser.getTitle()).toHaveUrlContaining("vtiger")

        await loginPage.login("admin", "admin")
        expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })
    // let orgN;
    // let rdn = Math.round(Math.random() * (99 - 5) + 5)

    it('create org', async () => {

        // orgN = 'RMon' + rdn
        let orglist;

        let orgNameList = []
            ; (await homePage.organizationsLink).click()
            ; await browser.waitUntil(async () => await (await organizationsPage.searchTextField).isDisplayed())
        expect(await browser.getTitle()).toHaveTitleContaining("Organizations")
        
 orglist =  await browser.$$('//tbody//td/a[.="Organization Name"]/ancestor::tbody[1]/tr/td/a[@title="Organizations"]')
            // orglist.forEach(async og => { orgNameList.push(await og.getText()) })
            
        

        /* async function pass(){
            ol= orgNameList.length
            let na=text(orglist[orgNameList.length])
           let nl=orgNameList.push(na)
           if(nl>ol){
            pass();
           }
        } */
        
       orgNameList=await Promise.all(orglist.map(async element => 
           await element.getText()
            
        ));
       /*  orglist.forEach(async element => {

            await browser.waitUntil(async () => {
                 for( const key in element) {
                    if (Object.hasOwnProperty.call(element, key)) {
                      let txt =  await element[key].getText();
                        orgNameList.push(txt)
                    }
                }

               // orgNameList.push(txt)
               // console.log(await txt.getText());
                return orgNameList.length=orglist.length
            })

        }) */
        console.log(orglist);

        console.log(orgNameList);
    });


    // let orglist = await browser.$$('//table//tr//td[@class="lvtCol"]/a/../../..//tr[@class="lvtColData"]//a[@title="Organizations"]')

    /*  async function text(ele) {
         let n =await ele.getText(); 
         return n;
     } */
    // orglist.forEach(async og => { orgNameList.push(await og.getText()) })



})