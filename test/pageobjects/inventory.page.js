  
const Page = require('./page' );

class Inventory extends Page {

	get page () 
		{ return "inventory.html"}
	get url () 
		{ return super.url+this.page}

	get addToCartButton() 
		{ return $("#add-to-cart-")}
	get removeButton () 
        { return $("#remove-")}
	get shoppingCartButton ()
		{ return $('.shopping_cart_link')}
	get cartNumber ()
		{ return $('.shopping_cart_badge')}
	
	get twitterHref ()
		{ return $('.social_twitter')}
	get facebookHref ()
		{ return $('.social_facebook')}
	get linkedinHref ()
		{ return $('.social_linkdin')}		

	open () {
		return super.open(this.page);
	}
}

module.exports = new Inventory();