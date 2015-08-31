requirejs.config({
	baseUrl: 'js',
    paths: {
        angular : '../bower_components/angular/angular',
        angularMocks : '../bower_components/angular-mocks/angular-mocks',
        angularUIRouter : '../bower_components/ui-router/release/angular-ui-router',
    },
    shim: {
    	angular: {exports : 'angular'},
    	angularMocks: { deps: ['angular'] },
    	angularUIRouter: { deps: ['angular'] }
    }
});
require(['app'],
  function() {
    angular.bootstrap(document, ['todoApp']);
  }
);