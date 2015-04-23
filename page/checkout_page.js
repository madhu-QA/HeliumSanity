var checkout_page=function(){
	
	this.processOrder=function(){
		browser.waitForAngular();
           element(by.id("card_name")).clear();
		            element(by.id("card_name")).sendKeys('Madhu');
					element(by.id("billing_address")).clear();
					element(by.id("billing_address")).sendKeys('3475 granada');
		            element(by.id("zipcode")).clear();
		            element(by.id("zipcode")).sendKeys('95050');
		            element(by.id("card_number")).sendKeys('4111111111111111');
		            element(by.id("card_cvc")).sendKeys('123');
					  //element.all(by.css('.ng-pristine option')).then(function(items))
		element(by.model('card.month')).$("[value='12']").click();
				element(by.id('card_year')).$("[label='2018']").click();
				browser.waitForAngular();
		            element(by.buttonText("Process Order")).click();


    
	};
	
	this.getProduct=function(){
				browser.waitForAngular();
		element(by.repeater('in cart.skus')).all(by.css('td.ng-binding')).then(function(items){
	    items[0].getText().then(function(text){
			 console.log('Product name: '+text);
			 return text;
		});
	});
	};
	this.getProductPrice=function(){
				browser.waitForAngular();
		element(by.repeater('in cart.skus')).all(by.css('td.ng-binding')).then(function(items){
		items[1].getText().then(function(text){
			 console.log('Product Price :'+text);
			 return text;
		});
	});
	};
	
	
	
};
module.exports=new checkout_page();