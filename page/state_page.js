var state_page=function(){
	var productPlan;
	var productPlanPrice;

	this.select180DayProduct=function(){
		 browser.driver.findElements(by.linkText('Select Plan')).then(function(items){

	              			expect(items.length).toBe(3);	     
		items[0].getText().then(function(text){
		productPlan= ': Guaranteed Plan 180';
		productPlanPrice='$79.00';
		console.log(text+productPlan);
			});
							browser.driver.executeScript('arguments[0].click();', items[0]);
							});
	 };
	 
	 this.select60DayProduct=function(){
		 browser.driver.findElements(by.linkText('Select Plan')).then(function(items){

	              			expect(items.length).toBe(3);	     
items[1].getText().then(function(text){
	productPlan=': Guaranteed Plan 60';
			productPlanPrice='$59.00';

console.log(text+productPlan);
});
							browser.driver.executeScript('arguments[0].click();', items[1]);
							});
	 };
	 this.select30DayProduct=function(){
		 browser.driver.findElements(by.linkText('Select Plan')).then(function(items){

	              			expect(items.length).toBe(3);	     
items[2].getText().then(function(text){
		productPlan=': Cram Plan 30';
		productPlanPrice='$49.00';


console.log(text+ +productPlan);
});
							browser.driver.executeScript('arguments[0].click();', items[2]);
							});
	 };
	 this.getPlan=function(){
	return productPlan;

};
this.getPlanPrice=function(){
	return productPlanPrice;

};
	this.getTitle=function(){
    return(browser.getTitle());
	};
		
	this.getOptionText=function(){
		return element(by.selectedOption('3')).getText();
		
	};
	this.clickContinue=function(){
		element(by.buttonText('Select Plan')).click();
		return require('login_page.js');
	};
	
};
module.exports=new state_page();