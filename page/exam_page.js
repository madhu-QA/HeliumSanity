var exam_page=function(){
	
	this.takeSpeedExamAndFinish=function(){
		browser.waitForAngular();
		var gradePercent=0;
			for (var QuestionPages=1;QuestionPages<6;QuestionPages++){
				var Errors=0;
				var errorsOnThePage=0;
				console.log('Page: '+QuestionPages);
					element.all(by.repeater('question in step.questions ')).then(function(questions){
					for (var QuestionNumber=0;QuestionNumber<10;QuestionNumber++){
						questions[QuestionNumber].getText().then(function(text){
						//console.log('Question: '+text);
						});
						//element-chaining element(locator1).element(locator2);
							questions[QuestionNumber].all(by.css('span.label')).then(function(answers){
								answers[4].getText().then(function(text){
								//console.log('clicking the answer: '+text);
								answers[4].click();
													});
									
												});
					};
					element(by.buttonText('Grade')).click();
					browser.waitForAngular();
						element.all(by.css('span.text-danger')).then(function(errors){
						console.log('Errors on the page : '+errors.length);
						element(by.buttonText('Next')).click();	
						errorsOnThePage=errors.length;
						Errors=Errors+ errorsOnThePage;
						console.log('Total errors till current page : '+Errors);
						gradePercent=(50-Errors)*2;
						if (QuestionPages===6){
								console.log('Final Grade of the exam should be : '+(50-Errors)*2);
								};
							//console.log('Grade of the current exam : '+gradePercent);
							//console.log('Final Grade of the current exam : '+gradePercent);
						});	
						
				});
				
			};
					browser.waitForAngular();
	
		};
	this.clickContinue=function(){
		element(by.buttonText('Grade')).click();
		element(by.buttonText('Grade')).click();
	};
				

	this.saveAndExit=function(){
		browser.waitForAngular();
          
browser.driver.findElement(by.css('h3.ng-binding')).getText().then(function(text){
										var mode= text;
										expect(mode).toContain('Speed Mode');
										
									},30000);
	  element(by.buttonText("Save Progress and Exit")).click();


    
	
    
	};
	
	
	
	
	
};
module.exports=new exam_page();