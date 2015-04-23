var courses_page=function(){
	
	this.startExam=function(examNumber){
	  browser.waitForAngular();
           
		element.all(by.css('button.btn-default:not(.ng-hide)')).then(function(items){

			console.log("total exams to start : "+items.length);
			//items[examNumber].click();
		  
items[examNumber].click();		
   
			//browser.executeScript('arguments[0].click();', items[examNumber]);			
		//return require('./examMode_page.js');
			
		});
	  };
    	
	this.resumeExam=function(examNumber){
		browser.waitForAngular();
		element.all(by.css('.btn-primary:not(.ng-hide)')).then(function(items){
		  console.log("total exams to finish : "+items.length);
			//browser.executeScript('arguments[0].click();', items[examNumber]);			
							items[examNumber].click();
	
		});
	};
	
	this.retakeExam=function(examNumber){
		browser.waitForAngular();
		element.all(by.css('.btn-warning:not(.ng-hide)')).then(function(items){
	//var el = ($('button.btn:not(.ng-hide)'));
		

			console.log("total exams to retake   : "+items.length);
			items[examNumber].click();
							//browser.driver.executeScript('arguments[0].click();', items[examNumber]);
							});
		/* element(by.buttonText('Retake')).isDisplayed().then(function (isVisible) {
    if (isVisible) {
        // element is visible
		element(by.buttonText('Retake')).click();
    } else {
        // element is not visible
		console.log("El not visible");
    }
		});
			element(by.buttonText('Retake')).isPresent().then(function (isPresent) { */
    
	
		//el.click();
		//browser.driver.executeScript('arguments[0].click();', el);		
        //  element.all(by.css(el)).then(function(items){
		// items[examNumber].click();
		//	browser.driver.executeScript('arguments[0].click();', items[examNumber]);			
					//return require('./examMode_page.js');

		//});
	};
	
	
	
	
};
module.exports=new courses_page();