const loginPage = require("../pageobjects/login.page.js");
const Inventory = require("../pageobjects/inventory.page.js");

describe("inventory tests", () => {
    beforeAll("Open browser",() => {
    loginPage.open();
    browser.pause(1000);
})

    it('should login with valid credentials', async () => {
        await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
        await expect(await browser.getUrl()).toBe("https://www.saucedemo.com/inventory.html");
        browser.pause(1000);
    });

    it('add an item to cart'), async () => {
        await (await Inventory.addToCartButton).click();
        browser.pause(500);
        await expect(await Inventory.cartNumber).getText()).toBe("1");
        browser.pause(1000);
    }); 

    it ('remove an item to cart'), async () => {  
        await (await Inventory.removeButton).click();
        browser.pause(1000);
    });