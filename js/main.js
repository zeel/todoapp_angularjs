requirejs.config({
    paths: {
        angular : '../bower_components/angular/angular',
        angularMocks : '../bower_components/angular-mocks/angular-mocks',
        angularLocalStorage : '../bower_components/angular-local-storage/dist/angular-local-storage.min',
    },
    shim: {
    	angular: {exports : 'angular'},
    	angularMocks: { deps: ['angular'] },
        angularLocalStorage : { deps: ['angular'] }
    }
});
require(['app'],
  function(app) {
    angular.bootstrap(document, [app.name]);
  }
);