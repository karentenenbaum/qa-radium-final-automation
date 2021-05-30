// const loginPage = require("../pageobjects/login.page.js");
// const inventory = require("../pageobjects/inventory.page.js");

// describe('inventory tests', () => {
//     beforeAll('Open browser', async () => {

//     })

//     beforeEach('Open Browser', async () => {
//         loginPage.open();
//         await browser.execute(() => this.localStorage.clear());
//         await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
//     })

//     it('should add first product and change button to remove', async () => {
//         await (await inventory.addFirstProductButton).click();
//         const remove = await inventory.removeFirstProductButton;
//         await expect(await remove.isExisting()).toEqual(true);
//         await browser.pause(1000);
//     });

//     it('should add first product and change cart number to one', async () => {
//         await (await inventory.addFirstProductButton).click();
//         const value = await (await inventory.shoppingCart).getText();
//         await expect(value).toEqual('1');
//         await browser.pause(1000);
//     });

//     it('should open twitter and check title', async () => {
//         await (await inventory.twitterLink).click();
//         await browser.switchWindow('Twitter');
//         await expect(await browser.getTitle()).toMatch('Twitter');
//     })

//     it('should open facebook and check title', async () => {
//         await (await inventory.facebookLink).click();
//         await browser.switchWindow('Facebook');
//         await expect(await browser.getTitle()).toMatch('Sauce Labs - Inicio | Facebook');
//     })

//     it('should open linkedin and check title', async () => {
//         await (await inventory.linkedinLink).click();
//         await browser.switchWindow('LinkedIn');
//         await expect(await browser.getTitle()).toMatch('LinkedIn');
//     })
// });

