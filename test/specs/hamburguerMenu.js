const loginPage = require("../pageobjects/login.page.js");
const inventory = require("../pageobjects/inventory.page.js");
const HamburgerMenu = require("../pageobjects/hamburgerMenu.js");


describe('Hamburguer Menu Tests', () => {
    beforeAll("Open browser", async () => {

    });

    beforeEach('Open Browser', async () => {
    loginPage.open();
    await browser.execute(() => this.localStorage.clear());
    await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
    });

    it('"The hamburger menu must be opened when you click on the hamburger icon', async () => {
        await (await loginPage.menuButton).click();
        await browser.pause(3000);
        console.log(await HamburgerMenu.hamburgerMenuWrapper);
        await browser.pause(1000);
    });


    it('"It should direct to the inventory when you click on all items', async () => {
        const allItemsButton = await HamburgerMenu.allItemsButton
        await expect(await allItemsButton.getAttribute('href')).toEqual('https://www.saucedemo.com/inventory.html#')
        await browser.pause(1000);
    });

    it("'About' option should take you to the developer's site", async () => {
        const aboutButton = await HamburgerMenu.aboutButton
        await expect(await aboutButton.getAttribute('href')).toEqual('https://saucelabs.com/')
        await browser.pause(1000);
    });

    it("'should remove everything from the cart, when you click on Reset App State", async () => {
        await (await inventory.addFirstProductButton).click();
        const value = await (await inventory.shoppingCart).getText();
        await expect(value).toEqual('1');
        await (await loginPage.menuButton).click();
        await browser.pause(1000);
        await (await HamburgerMenu.resetAppButton).click();
        const second_value = await (await inventory.shoppingCart).getText();
        await expect(second_value).toEqual('0');
        await browser.pause(1000);

    });


	it('"Logout" link should go to the inventory',async  () => {
		await (await HamburgerMenu.logoutButton).click();
		await expect( await browser).toHaveUrl(loginPage.url)
	});

})