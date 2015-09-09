exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.js'
  ],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  chromeOnly: true,
  baseUrl: 'http://localhost:8000',
  // seleniumServerJar:'/usr/lib/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  // chromeDriver : '/usr/lib/node_modules/protractor/selenium/chromedriver',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};