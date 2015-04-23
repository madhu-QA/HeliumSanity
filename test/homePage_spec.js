//FOR SAUCE TESTS USE 'browser.' instead of 'browser.driver.' timeout 800000 for sauce test since they run very slow!!!!
var util = require('util');
var home_page=require('../page/home_page.js');
var state_page=require('../page/state_page.js');
var login_page=require('../page/login_page.js'); 
var checkout_page= require('../page/checkout_page.js');
var order_confirmation_page= require('../page/order_confirmation_page.js');
var dashboard_page=require('../page/dashboard_page.js');
var courses_page=require('../page/courses_page.js');
var examMode_page=require('../page/examMode_page.js');
var exam_page=require('../page/exam_page.js');



describe('Test LET e2e', function(){
	
	
	var selectedProductName;
	var selectedProductPrice;
	var product;
	var productPrice;
	
		xit ('should be able to purchase a stateproduct with login',function(){
			browser.driver.get('http://www.staging.licensetutor.com', 800000);	
			//expect(browser.driver.getTitle()).toBe('License Exam Tutor');
				expect(browser.driver.getCurrentUrl()).toBe('http://www.staging.licensetutor.com/');
							browser.driver.manage().window().maximize();
var selectedStateName;
			
						home_page.getOptionText(5).then(function(text){
							console.log(text);
							selectedStateName=text;
							home_page.selectState(5);

							
						var state_page=home_page.clickContinue();
						expect(browser.driver.getTitle()).toContain(selectedStateName);
							});
									
		
				
				
			state_page.select60DayProduct();
			selectedProductName=state_page.getPlan();
			selectedProductPrice=state_page.getPlanPrice();


							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
				expect(browser.driver.getCurrentUrl()).toContain('register');
			login_page.doLogin();
										//register_page.doRegister();
										
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
			//browser.navigate().back();										
			//expect(browser.driver.getCurrentUrl()).toContain('addtocart');			
			//var addtocart_page=require('../page/addtocart_page.js');
			//addtocart_page.doCheckout();
			//addtocart_page.removeItemFromCart();

							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
				//expect(browser.driver.getCurrentUrl()).toContain('thankyou');
				product=checkout_page.getProduct();
				productPrice=checkout_page.getProductPrice();
				expect(product).toBe(selectedProductName);
				expect(productPrice).toBe(selectedProductPrice);
			checkout_page.processOrder();
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
			//expect(browser.driver.getCurrentUrl()).toContain('thankyou');

			order_confirmation_page.clickContinue();
			
				expect(browser.driver.getCurrentUrl()).toContain('dashboard');
			
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
									
			dashboard_page.goToCourses(4);
				expect(browser.driver.getCurrentUrl()).toContain('course');
			courses_page.startExam(0);
			examMode_page.selectMode(1); 
							browser.driver.getCurrentUrl().then(function(url){
								console.log(url);
							},30000);
						
					//exam_page.saveAndExit();
			exam_page.takeSpeedExamAndFinish();
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 50000, 'page not ready after 10 seconds.');
				expect(browser.driver.getCurrentUrl()).toContain('course');

			login_page.doLogout();
			expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																			
	});		

	it ('should be able to login and take a test',function(){
			browser.driver.get('http://www.staging.licensetutor.com', 800000);	
			//expect(browser.driver.getTitle()).toBe('License Exam Tutor');
				expect(browser.driver.getCurrentUrl()).toBe('http://www.staging.licensetutor.com/');
							browser.driver.manage().window().maximize();
							home_page.doLogin();
										//register_page.doRegister();
										
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							expect(browser.driver.getCurrentUrl()).toContain('register');

							login_page.doLogin();
			

							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
				expect(browser.driver.getCurrentUrl()).toContain('dashboard');
			
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
									
			dashboard_page.goToCourses(1);
				expect(browser.driver.getCurrentUrl()).toContain('course');
			courses_page.startExam(0);
			examMode_page.selectMode(1); 
							browser.driver.getCurrentUrl().then(function(url){
								console.log(url);
							},30000);
						
					//exam_page.saveAndExit();
			exam_page.takeSpeedExamAndFinish();
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 50000, 'page not ready after 10 seconds.');
				expect(browser.driver.getCurrentUrl()).toContain('course');

			login_page.doLogout();
			expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																			
	});																					
							
	xit ('should be able to register and purchase a stateproduct',function(){
	browser.driver.get('http://www.staging.licensetutor.com', 800000);	
		//expect(browser.driver.getTitle()).toBe('License Exam Tutor');
		expect(browser.driver.getCurrentUrl()).toBe('http://www.staging.licensetutor.com/');
		browser.driver.manage().window().maximize();
		var home_page=require('../page/home_page.js');

	home_page.selectState(2);
	var state_page=home_page.clickContinue();
	expect(browser.driver.getCurrentUrl()).toContain('plan-comparison');
	state_page.selectProduct(2);
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
										//var login_page=require('../page/login_page.js'); 
										var register_page=require('../page/register_page.js');
										expect(browser.driver.getCurrentUrl()).toContain('register');
										//login_page.doLogin();
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
							register_page.doRegister();
										
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
			//browser.navigate().back();										
			//expect(browser.driver.getCurrentUrl()).toContain('checkout');			
			//var addtocart_page=require('../page/addtocart_page.js');
			//addtocart_page.doCheckout();
			//addtocart_page.removeItemFromCart();
			checkout_page.processOrder();
						
						//expect(browser.driver.getCurrentUrl()).toContain('thankyou');

			order_confirmation_page.clickContinue();

			//

							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// wait` a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
							
			//expect(browser.driver.getCurrentUrl()).toContain('checkout');
			
		   // browser.driver.findElement(by.css('a[href*="/dashboard"]')).click();
								
			expect(browser.driver.getCurrentUrl()).toContain('dashboard');
			
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 30000, 'page not ready after 10 seconds.');
									
				dashboard_page.goToCourses(0);
				expect(browser.driver.getCurrentUrl()).toContain('course');
			courses_page.retakeExam(0);
			examMode_page.selectMode(1); 
							browser.driver.getCurrentUrl().then(function(url){
								console.log(url);
							},30000);
						
					//exam_page.saveAndExit();
			exam_page.takeSpeedExamAndFinish();
							browser.driver.wait(function () {
							return browser.waitForAngular().then(function () {
							// everything is ok
							return true;
							}, function () {
							// a false result to trigger a retry
							return false;
							});
							}, 50000, 'page not ready after 10 seconds.');
				expect(browser.driver.getCurrentUrl()).toContain('course');
			//dashboard_page.goToCourses();
			//expect(browser.driver.getCurrentUrl()).toContain('course');

				login_page.doLogout();
				expect(element(by.buttonText('Login')).isPresent()).toBe(true);
																				
							
});
});
