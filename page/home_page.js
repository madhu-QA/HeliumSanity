var home_page=function(){
	//var state;
	this.getTitle=function(){
    return(browser.getTitle());
	};
	
	this.doLogin=function(){
		browser.driver.findElement(by.xpath("//a[@title='Register or log in here']")).click();
		//$x("//a[@title='Register or log in here']")
	};
	this.selectState=function(stateNumber){
				 var lengthOfItems=38;
			browser.driver.findElements(by.id('letStateSelect option')).then(function(items){
			expect(items.length).toBe(lengthOfItems);
			expect(items[1].getText()).toBe('Alabama');
			items[stateNumber].getText().then(function(text){
				selectedState=text;
				//console.log(selectedState);
				});
		items[stateNumber].click();
						
	
		}, 800000);
				
};
this.clickContinue=function(){
	browser.driver.findElement(by.css('.ubtn')).click();
			return require('./state_page.js');

};
this.getOptionText=function(option){
				var state=browser.driver.findElement(by.css('select option:nth-child('+(option+1)+')')).getText().then(function(text){
				return text;
				});

			return state;
	};
};
	module.exports=new home_page();

	
	
	/*this.getOptionText=function(){
		return element(by.selectedOption('3')).getText();
		
	};
	this.clickContinue=function(){
		element(by.buttonText('Go to exam page')).click();
		return require('./state_page.js');
	};
	this.selectState=function(){
			return element(by.id('letStateSelect')).$("[text='California']").click();
			};
};

/*
element(by.id('letStateSelect')).$("[text='"state"']").click();
*/