// An example configuration LET file.

exports.config = {
	
	sauceUser:'mckissock',
    sauceKey:'7c93eae4-5425-4c07-8f89-0e528f26ef59',
	// "C:\Users\MadhuBindu\Downloads\download\sc-4.3.7-win32\sc-4.3.7-win32\bin"
	//SAUCE_USERNAME:'Madbee',
 //SAUCE_ACCESS_KEY:'264e55a0-1ded-48fb-87c3-0fda46b89831', */
 //seleniumAddress: 'http://ondemand.saucelabs.com:443/wd/hub',
//seleniumAddress:'ondemand.saucelabs.com:443', 
seleniumAddress: 'http://localhost:4444/wd/hub/',
//seleniumAddress: 'http://mckissock:7c93eae4-5425-4c07-8f89-0e528f26ef59@ondemand.saucelabs.com:443/wd/hub',
//directConnect:true,
baseUrl:'http://www.staging.licensetutor.com',
 capabilities: {
	 /* username:'mckissock',
	 accessKey:'7c93eae4-5425-4c07-8f89-0e528f26ef59',
	 platform:'Windows 8.1', */
    browserName: 'firefox'
	//platform:'OS X 10.9'
	
  },
	//directConnect:true,
//seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
*/
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/homePage_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
	isVerbose:true,
    defaultTimeoutInterval: 800000
  }
};
