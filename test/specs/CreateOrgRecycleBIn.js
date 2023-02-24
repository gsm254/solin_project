//create organization, delete org and check it is present in recycle bin and empty the 
var name;
describe('create, delete organization and check in recycle bin', () => {
    it('Login to application', async () => {

        await browser.url("http://testingserver:8888");
        await browser.maximizeWindow()

        const userName = await browser.$("input[name='user_name']")
        await userName.setValue('admin')

        const passWord = await browser.$("input[name='user_password']")
        await passWord.setValue('admin')
        const loginBtn = await browser.$("input[id='submitButton']")
        await loginBtn.click()
        expect(await browser.getTitle()).toHaveTitleContaining("Home")
    })

    it('create org', async () => {
        const orgLink = await browser.$('a=Organizations')
        await orgLink.click()
        expect(await browser.getTitle()).toHaveTitleContaining("Organizations")
        const createOrg = await browser.$('[title="Create Organization..."]')
        await createOrg.click()
        expect(await browser.$('.lvtHeaderText')).toBeDisplayed()
        const orgName = await browser.$('[name="accountname"]')
        await orgName.setValue("Reckon4")
        const saveBtn = await browser.$('[title="Save [Alt+S]"]')
        await saveBtn.click()

        const orgInfo = await browser.$('.dvHeaderText')
        expect(orgInfo).toBeDisplayed()
    })

    // const headtext = await orgInfo.getText();
    // console.log(headtext)
    it('Delete org', async () => {
        const deleteBtn = await browser.$('[title="Delete [Alt+D]"')
        await deleteBtn.click()

        await browser.acceptAlert()
        await expect($('td*=Showing Records')).toBeDisplayed()
    })

    it('open recycle bin and verify', async () => {
        const moreLink = await browser.$('a=More')
        await moreLink.moveTo();
        const recycleBInLink = await browser.$('a=Recycle Bin')
        await recycleBInLink.click();
        expect(await browser.getTitle()).toHaveTitleContaining("Recycle Bin")

        const deletedOrg = await browser.$('a=Reckon4')

        expect(deletedOrg).toBeDisplayed();
    })

    // it('empty the recycle bin', async () => {
    //     const emptyBin = await browser.$('[value="Empty Recycle Bin"]')
    //     await emptyBin.click()
    //     const emptyBinCfm = await browser.$('[value="Yes"]')
    //     await emptyBinCfm.click()
    //     expect($$('//tr'))
    // })

    // await expect().toBeNull();
    // await browser.acceptAlert();

})