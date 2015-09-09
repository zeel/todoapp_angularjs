exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '*.js'
  ],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  chromeOnly: true,
  baseUrl: 'http://localhost/todos/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};