

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
    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
