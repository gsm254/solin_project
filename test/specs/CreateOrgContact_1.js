import LoginPage from '../pageobjects/login.page.js'
import OrgPage from '../pageobjects/organizations.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('create org, contact', () => {

    it('Login to application', async () => {

        await LoginPage.open()

        await LoginPage.username.toBeDisplayed();
        expect(await browser.getTitle()).toHaveUrlContaining("vtiger")

        await LoginPage.login("admin", "admin")
        expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })
    let orgN;
    let rdn = Math.round(Math.random() * (99 - 5) + 5)

    it('create org', async () => {

        orgN = 'RMon' + rdn

            (await HomePage.organizationsLink).click()
        expect(await browser.getTitle()).toHaveTitleContaining("Organizations")


            (await OrgPage.createOrganization).click()
        expect(await browser.$('.lvtHeaderText')).toBeDisplayed()

        //filling the org details
        await (await OrgPage.orgName).addValue(orgN)
        await (await OrgPage.website).addValue(`https://www.rmon${rdn}.com`)
        await (await OrgPage.phoneNo).addValue(`97689752${rdn}`)
        await (await OrgPage.email).addValue(`rmon${rdn}@gmail.com`)
        await (await OrgPage.employees).addValue(`${rdn}`)
        await (await OrgPage.industry).selectByAttribute('value', 'Banking')
        await (await OrgPage.type).selectByAttribute('value', 'Investor')
        await (await OrgPage.billAddress).addValue(`no 73, whitefield${rdn}`)
        await (await OrgPage.bill_pobox).addValue(`whitefield${rdn}`)
        await (await OrgPage.bill_city).addValue(`Bengaluru${rdn}`)
        await (await OrgPage.bill_state).addValue(`Karnataka${rdn}`)
        await (await OrgPage.bill_code).addValue(`5700${rdn}`)
        await (await OrgPage.bill_country).addValue(`India${rdn}`)
        await (await OrgPage.copyBill).click()




        //await (await OrgPage.saveBtn)[1].scrollIntoView()
        await (await OrgPage.saveBtn)[1].click()

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

