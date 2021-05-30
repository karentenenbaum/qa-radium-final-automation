
const Page = require('./page');

class Hamburger extends Page {

	get hamburgerCloseButton () { return $('#react-burger-cross-btn') }

	get hamburgerMenuWrapper () { return $('.bm-menu-wrap')}

	get allItemsButton () { return $('#inventory_sidebar_link')}
	get aboutButton () { return $('#about_sidebar_link')}
	get logoutButton () { return $('#logout_sidebar_link')}
	get resetAppButton () { return $('#reset_sidebar_link')}
}

module.exports = new Hamburger();