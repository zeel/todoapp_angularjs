define([],function () {
	describe("Unit: Testing Controllers", function() {
		beforeEach(module('todoApp'));
		var MainCtrl, scope, App = module('todoApp');
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			MainCtrl = $controller('todoController', {
				$scope : scope
			});
		}));
		it('scope should have val defined', function() {
			console.log(scope.todolist);
			expect(scope.todolist).toBe([]);
		});
	});
});
