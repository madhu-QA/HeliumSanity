var examMode_page=function(){
	
	this.selectMode=function(modeNumber){
		browser.waitForAngular();
          element.all(by.tagName('h4')).then(function(items){
			  console.log('items length is: '+items.length);
			  items[modeNumber].click();
			  			//browser.executeScript('arguments[0].click();', items[modeNumber]);			
			  	//	return require('./exam_page.js');

          });

    
	};
	
	
	
	
	
};
module.exports=new examMode_page();