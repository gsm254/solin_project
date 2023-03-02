

import credentials from '../testData/loginCred.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get username () {
        return $('[name="user_name"]');
    }

    get password () {
        return $('[name="user_password"]');
    }

    get btnSubmit () {
        return $('input[id="submitButton"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        // expect(await browser.getTitle()).toHaveUrlContaining("vtiger")
        expect(await browser.getTitle()).to.contain("vtiger")
        await browser.maximizeWindow();
        await this.username.setValue(credentials.username);
        await this.password.setValue(credentials.password);
        await this.btnSubmit.click();
        // expect(await browser.getTitle()).toHaveTitleContaining("Home")
        expect(await browser.getTitle()).to.contain("Home")
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open(credentials.url);
    }
}

export default new LoginPage();
