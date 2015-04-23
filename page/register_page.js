var register_page=function(){
	
	this.doRegister=function(){
		browser.waitForAngular();
       browser.driver.ignoreSynchronization = true;
	   var date = new Date();
       time = date.getTime();
       email = 'testmckqa2+'+time+'@gmail.com';
       password = 'tester_123'
       console.log('email: ' + email );
    element(by.model("account.email")).sendKeys(email);
    element(by.model("account.password")).sendKeys(password);
    element(by.model("account.confirmPassword")).sendKeys(password);
    element(by.model("account.firstName")).sendKeys(email);
    element(by.model("account.lastName")).sendKeys(email);
    element(by.model("account.address")).sendKeys(email);
    element(by.model("account.city")).sendKeys(email);
    element(by.model("account.state")).sendKeys("California");
    element(by.model("account.zip")).sendKeys("94501");
    element(by.model("account.telephone")).sendKeys("1234567890");
    element(by.model("account.prelicenseSchool")).sendKeys(email);
    element(by.buttonText("Register")).click();
	};
	
	
	
	
	
};
module.exports=new register_page();