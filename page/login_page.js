var login_page=function(){
this.doLogin=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
		//element(by.model("login")).sendKeys("testal@gmail.com");
		//element(by.model("password")).sendKeys("tester123");
		element(by.model("login")).sendKeys("testmckqa2+0400@gmail.com");
		element(by.model("password")).sendKeys("password");
		element(by.css('#loginSubmit')).click();
		};
		
		
		this.doLogout=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
	   			element(by.linkText('Logout')).click();

		
		};
		
};



	module.exports=new login_page();

