const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () { 
        return $('#user-name') }
    get inputPassword () 
        { return $('#password') }
    get btnSubmit () 
        { return $('#login-button') }
    get loginErrorMessage () 
        { return $("h3=Epic sadface: Username and password do not match any user in this service")}
    get loginErrorMessageEmptyUserName () 
        { return $('Epic sadface: Username is required')}
    get loginErrorMessageEmptyPassword () 
        { return $('Epic sadface: Username is required')}

    get correctUserName() 
        { return $(standard_user)}
    
        get correctPassword()
        { return $(secret_sauce)}

open () {
    return super.open("");
    }
}

    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

module.exports = new LoginPage();
