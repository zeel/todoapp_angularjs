define(['angular', 'angularMocks','todoController'],function (angular,mocks, todoController) {
	'use strict';
	describe("Testing todoController", function() {
		var scope;
		beforeEach(mocks.inject(function($controller, $rootScope, $filter, $state){
			scope = $rootScope.$new();
			$controller(todoController, {
				$scope : scope,
				$filter : $filter,
				$state : $state
			});
			
		}));
		it('scope should have todolist defined', function() {
			console.log(scope.todolist);
			expect(scope.todolist.length).toBe(2);
		});
	});
});
