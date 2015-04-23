var addToCart_page=function(){
	
	this.doCheckout=function(){
		browser.waitForAngular();
           element(by.buttonText("Checkout")).click();
		 //return require('checkout_page.js');
	};
	this.removeItemFromCart=function(){
		browser.waitForAngular();
           element(by.buttonText("Remove")).click();
    
	};
	
	
	
	
};
module.exports=new addToCart_page();