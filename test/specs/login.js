const loginPage = require('../pageobjects/login.page');

describe('Login test', () => {
    beforeAll("Open browser",() => {
        loginPage.open();
    })

    it('should login with valid credentials', async () => {
        await loginPage.login('problem_user', 'secret_sauce');
        await expect(await browser.getUrl()).toBe("https://www.saucedemo.com/inventory.html");
        browser.pause(1000);
    });

    it('should not login with invalid credentials: Wrong username and wrong password', async () => {
        await loginPage.login('user_invalid', 'secret_couce');
        await expect(loginPage.loginErrorMessage);
        browser.pause(1000);
    });

    it('Should not login with invalid credentials: Right username and wrong password', async () => {
		await loginPage.login('standard_user', 'invalid_password');
	    await expect(loginPage.loginErrorMessage);
        browser.pause(1000);
    });
    
    it('Should not login with invalid credentials: Wrong username and right password', async () => {
        await loginPage.login('invalid_user', 'secret_souce');
        await expect(loginPage.loginErrorMessage);
        browser.pause(1000);
    
    });


    it('Should not login with invalid credentials: Empty username and right password', async () => {
        await (await loginPage.inputUsername).clearValue();
        await (await loginPage.inputPassword).setValue('secret_souce');
        await expect(loginPage.loginErrorMessageEmptyUserName);
        browser.pause(1000);
        
    });

    it('Should not login with invalid credentials: Right username and empty password', async () => {
		await (await loginPage.inputUsername).setValue("performance_glitch_user");
		await (await loginPage.inputPassword).clearValue();
	    await expect (loginPage.loginErrorMessageEmptyPassword)
        browser.pause(1000);
	});

});
