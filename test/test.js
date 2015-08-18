describe("Unit: Testing Controllers", function() {
	beforeEach(module('todoApp'));
	var MainCtrl, scope, App = module('todoApp');
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		MainCtrl = $controller('testingController', {
			$scope : scope
		});
	}));
	it('scope should have val defined', function() {
		console.log(scope.val);
		expect(scope.val).toBe(2);
	});
});
