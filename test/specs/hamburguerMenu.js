const loginPage = require("../pageobjects/login.page.js");
const inventory = require("../pageobjects/inventory.page.js");
const HamburgerMenu = require("../pageobjects/hamburgerMenu.js");


describe('Hamburguer Menu Tests', () => {

    beforeAll("Open browser", async () => {
        await loginPage.open();
        await loginPage.login(loginPage.correctUsername, loginPage.correctPassword);
        await browser.pause(2000);
    })

    // it("The hamburger menu should appear hidden", async () => {
    //     await expect(await HamburgerMenu.hamburgerMenuWrapper).toHaveAttr("hidden")
    //     await browser.pause(5000);
    // });

    // it("The hamburger icon should open the hamburger menu", async () => {
    //     await (await loginPage.menuButton).click();
    //     await browser.pause(3000);
    //     console.log(await HamburgerMenu.hamburgerMenuWrapper);
    //     await browser.pause(1000);
    // });

    // 	it("The hamburger menu button should close the hamburger menu", async() => {
    // 	await (await HamburgerMenu.hamburgerCloseButton).click();
    // 	await expect( await HamburgerMenu.hamburgerMenuWrapper).toHaveAttr("hidden")
    //  await browser.pause(1000);
    // });

    // it('"All items" link should go to the inventory', async () => {
    //     await (await loginPage.menuButton).click();
    //     await (await HamburgerMenu.allItemsButton).click();
    //     await expect(await browser.getUrl()).toBe('https://www.saucedemo.com/inventory.html')
    //     await browser.pause(1000);
    // });

    it("'About' link should take you to the developer's site", async () => {
        await (await loginPage.menuButton).click();
        await browser.pause(2000);
        const aboutButton = await HamburgerMenu.aboutButton
        await expect(await aboutButton.getAttribute('href')).toEqual('https://saucelabs.com/')
        await browser.pause(1000);
    });
})


// it("'About' link should take you to the developer's site", () => {
//     await expect(HamburgerMenu.aboutButton).toHaveHref("https://saucelabs.com/")
//     await browser.pause(1000);
// });

// 	it('"Reset app state" button should remove everything from the cart', () => {
// 		await (await inventory.addItem(0));
// 		await (await inventory.addItem(1));
// 		await (await HamburgerMenu.resetAppButton).click();
// 		await expect(await inventory.cartButton).not.toHaveChildren();
//         browser.pause(1000);
// 	});

// 	it('"Logout" link should go to the inventory', () => {
// 		await (await HamburgerMenu.logoutButton).click();
// 		await expect( await browser).toHaveUrl(loginPage.url)
// 	});

// });