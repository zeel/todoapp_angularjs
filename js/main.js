requirejs.config({
    paths: {
        angular : '../bower_components/angular/angular',
        angularMocks : '../bower_components/angular-mocks/angular-mocks',
    },
    shim: {
    	angular: {exports : 'angular'},
    	angularMocks: { deps: ['angular'] },
    }
});
require(['app'],
  function(app) {
    angular.bootstrap(document, [app.name]);
  }
);