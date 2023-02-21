import LoginPage from '../pageobjects/loginpage.js'
import OrgPage from '../pageobjects/organizations.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('create org, contact', () => {
    it('Login to application', async () => {

        // await browser.url("http://testingserver:8888");
        await LoginPage.open()
        await LoginPage.username.toBeDisplayed;
        expect(await browser.getTitle()).toHaveUrlContaining("vtiger")

        await LoginPage.login("admin", "admin")

        // await LoginPage.username.setValue('admin')

        // const passWord = await browser.$("input[name='user_password']")
        // await passWord.setValue('admin')
        // const loginBtn = await browser.$("input[id='submitButton']")
        // await loginBtn.click()
        expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })
    var orgN;

    it('create org', async () => {
        orgN = 'RMon' + Math.round(Math.random() * (30 - 5) + 5)

        await (await HomePage.organizationsLink).click()
        expect(await browser.getTitle()).toHaveTitleContaining("Organizations")

        await (await OrgPage.createOrganization).click()
        expect(await browser.$('.lvtHeaderText')).toBeDisplayed()
       
        await (await OrgPage.orgNameTextField).addValue(orgN)
        await (await OrgPage.saveBtn).click()
        
        await (await browser.$('span=' + orgN)).waitForDisplayed()
        expect(await OrgPage.orgInfo).toBeDisplayed()
    })

    it('create contact', async () => {
        const contactLink = await browser.$('a=Contacts')
        await contactLink.click()
        expect(await browser.getTitle()).toHaveTitleContaining("Contacts")
        await (await browser.$('a=Contacts')).waitForDisplayed();
        const createContact = await browser.$('[title="Create Contact..."]')
        await createContact.click()
        expect(await browser.$('.lvtHeaderText')).toBeDisplayed()

        const salute = await browser.$('[name="salutationtype"]')
        await salute.selectByAttribute('value', 'Mr.')

        const firstName = await browser.$('[name="firstname"]')
        await firstName.setValue("Anup")
        const lastName = await browser.$('[name="lastname"]')
        await lastName.setValue("Raj" + Math.round(Math.random() * (30 - 5) + 5))
        const orgSelect = await browser.$('//input[@name="account_name"]/following-sibling::img')
        await orgSelect.click()
        //await browser.waitUntil({timeout:5000})

        await browser.switchWindow("testingserver:8888/index.php?module=Accounts&action=Popup&popuptype=specific_contact_account_address&form=TasksEditView&form_submit=false&fromlink=&recordid=")
        await (await browser.$('td=Organizations')).waitForDisplayed()
        const search = await browser.$('[name="search_text"]')
        await search.setValue(orgN)
        const searchBtn = await browser.$('[name="search"]')
        await searchBtn.click()
        const sOrg = await browser.$('a=' + orgN)
        await sOrg.waitForDisplayed()
        await sOrg.click()
        await browser.switchWindow("http://testingserver:8888/index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing")


        const saveBtn = await browser.$('//input[@value="  Save  "]')
        await saveBtn.waitForDisplayed()
        await saveBtn.click()

        const contactInfo = await browser.$('.dvHeaderText')
        await contactInfo.waitForDisplayed()
        expect(contactInfo).toBeDisplayed;
    })
})
