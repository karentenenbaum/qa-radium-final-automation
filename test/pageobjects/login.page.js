const Page = require('./page');

class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnSubmit() {
        return $('#login-button')
    }

    get menuButton() {
        return $('#react-burger-menu-btn')
    }

    get logoutButton() {
        return $('#logout_sidebar_link')
    }

    get loginErrorMessage() {
        return $("h3[data-test='error']")
    }


    correctUsername = 'standard_user'
    correctPassword = 'secret_sauce'


    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    open() {
        return super.open('https://www.saucedemo.com/');
    }
}

module.exports = new LoginPage();
