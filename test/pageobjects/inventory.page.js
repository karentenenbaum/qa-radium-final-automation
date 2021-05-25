const Page = require('./page');

class Inventory extends Page {

    get page() {
        return "inventory.html"
    }

    get url() {
        return super.url + this.page
    }

    get addFirstProductButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get removeFirstProductButton() {
        return $('#remove-sauce-labs-backpack');
    }

    get shoppingCart() {
        return $('.shopping_cart_badge');
    }

    get twitterLink() {
        return $('.social_twitter a');
    }

    get facebookLink() {
        return $('.social_facebook a');
    }

    get linkedinLink() {
        return $('.social_linkedin a');
    }

    open() {
        return super.open(this.page);
    }
}

module.exports = new Inventory();