const Page = require('./page');

class Cart extends Page {

    get page() {
        return "cart.html"
    }

    get url() {
        return super.url + this.page
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get continueButton() {
        return $('#continue');
    }

    get finishButton() {
        return $('#finish');
    }

    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get checkoutHeader() {
        return $('.complete-header');
    }

    get checkoutBody() {
        return $('.complete-text');
    }

    open() {
        return super.open(this.page);
    }

    defaultFirstName = 'Karen';
    defaultLastName = 'Tenenbaum';
    defaultPostalCode = '2000';
}

module.exports = new Cart();