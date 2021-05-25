const loginPage = require('../pageobjects/login.page');

describe('Login test', () => {
    beforeEach('Open browser', async () => {
        loginPage.open();
    })

    it('should login with valid credentials', async () => {
        await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
        await expect(await browser.getUrl()).toBe("https://www.saucedemo.com/inventory.html");
        await (await loginPage.menuButton).click();
        await browser.pause(1000);
        await (await loginPage.logoutButton).click();
        await browser.pause(2000);
    });


    it('should not login with invalid credentials: Wrong username and wrong password', async () => {
        await loginPage.login('user_invalid', 'secret_couce');
        const message = await (await loginPage.loginErrorMessage).getText();
        await expect(message).toMatch('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid credentials: Right username and wrong password', async () => {
		await loginPage.login('standard_user', 'invalid_password');
	    await expect(loginPage.loginErrorMessage);
        const message = await (await loginPage.loginErrorMessage).getText();
        await expect(message).toMatch('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid credentials: Wrong username and right password', async () => {
        await loginPage.login('invalid_user', 'secret_sauce');
        const message = await (await loginPage.loginErrorMessage).getText();
        await expect(message).toMatch('Epic sadface: Username and password do not match any user in this service');
        await browser.pause(1000);
    });


    it('should not login with invalid credentials: Empty username and right password', async () => {
        await loginPage.login('', 'secret_sauce');
        const message = await (await loginPage.loginErrorMessage).getText();
        await browser.pause(1000);
        await expect(message).toMatch('Epic sadface: Username is required');
    });


    it('should not login with invalid credentials: Right username and empty password', async () => {
        await loginPage.login('standard_user', '');
        const message = await (await loginPage.loginErrorMessage).getText();
        await browser.pause(1000);
        await expect(message).toMatch('Epic sadface: Password is required');
	});

});
