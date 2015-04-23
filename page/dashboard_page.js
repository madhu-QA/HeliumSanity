var dashboard_page=function(){
	
	this.goToCourses=function(courseNumber){
		browser.waitForAngular();
           element.all(by.buttonText("Start or Resume Exams")).then(function(items){


console.log("total courses  : "+items.length);
items[courseNumber].click();
							//browser.driver.executeScript('arguments[0].click();', items[courseNumber]);
							});
	 };
		 
	
	
};
module.exports=new dashboard_page();
