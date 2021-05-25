// const loginPage = require("../pageobjects/login.page.js");
// const inventory = require("../pageobjects/inventory.page.js");
// const cart = require("../pageobjects/cart.page.js");
//
// describe('checkout tests', () => {
//     beforeAll('Open browser', async () => {
//         loginPage.open();
//         await browser.execute(() => this.localStorage.clear());
//         await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
//     })
//
//     it('should checkout valid purchase', async () => {
//         await (await inventory.addFirstProductButton).click();
//         await (await inventory.addSecondProductButton).click();
//         await (await inventory.addThirdProductButton).click();
//         await (await inventory.shoppingCart).click();
//
//         await browser.pause(3000);
//         await (await cart.checkoutButton).click();
//         await (await cart.firstNameInput).setValue(cart.defaultFirstName);
//         await (await cart.lastNameInput).setValue(cart.defaultLastName);
//         await (await cart.postalCodeInput).setValue(cart.defaultPostalCode);
//         await (await cart.continueButton).click();
//         await (await cart.finishButton).click();
//
//         await expect(await (await cart.checkoutHeader).getText()).toMatch('THANK YOU FOR YOUR ORDER');
//         await expect(await (await cart.checkoutBody).getText()).toMatch('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
//
//     });
// });