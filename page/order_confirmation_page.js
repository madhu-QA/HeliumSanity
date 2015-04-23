var order_confirmation_page=function(){
	
	this.clickContinue=function(){
		browser.waitForAngular();
		
	  element(by.linkText('Continue')).click();


    
	};
	
	
	
	
	
	
	
};
module.exports=new order_confirmation_page();