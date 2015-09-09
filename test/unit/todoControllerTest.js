define(['angular', 'angularMocks','todoController'],function (angular,mocks, todoController) {
	'use strict';
	describe("Testing todoController", function() {
		var scope,location;
		beforeEach(mocks.inject(function($controller, $rootScope, $filter,$location){
			scope = $rootScope.$new();
			location = $location;
			$controller(todoController, {
				$scope : scope,
				$filter : $filter,
				$location : $location
			});
			
		}));
		it('scope should have todolist defined', function() {
			expect(scope.todolist).toBeDefined();
		});
		it('adding todo should populate the todolist variable', function() {
			scope.addToDo('testing');
			expect(scope.todolist.length).toBe(1);
		});
		it('adding todo should populate the todolist variable and active todo count should be incremented by 1', function() {
			scope.addToDo('testing');
			scope.$digest();
			expect(scope.countActive).toBe(1);
		});
		it('checking todo should also decrement countActive by 1', function() {
			scope.addToDo('testing');
			scope.todolist[0].inactive = true;
			scope.$digest();
			expect(scope.countActive).toBe(0);
		});
		it('checking all todos should check selectall', function() {
			scope.addToDo('testing');
			scope.todolist[0].inactive = true;
			scope.$digest();
			expect(scope.selectAll).toBe(true);
		});
		it('checking all todos should check selectall and unchecking should make it false', function() {
			scope.addToDo('testing');
			scope.todolist[0].inactive = true;
			scope.$digest();
			expect(scope.selectAll).toBe(true);
			scope.todolist[0].inactive = false;
			scope.$digest();
			expect(scope.selectAll).toBe(false);
		});
		it('removing todo should remove it from array', function() {
			scope.addToDo('testing');
			expect(scope.todolist.length).toBe(1);
			scope.removeToDo(0);
			expect(scope.todolist.length).toBe(0);
		});
		it('should change location parameter when changed showtype', function(){
			spyOn(location, 'search');
			scope.changeShowType('all');
			expect(location.search).toHaveBeenCalledWith('showType', 'all');
		});
		it('should change location parameter as well as watcher should be triggered when changed showtype to all', function(){
			spyOn(location, 'search').and.returnValue({'showType': 'all'});
			scope.changeShowType('all');
			expect(location.search).toHaveBeenCalledWith('showType', 'all');
			scope.$digest();
			expect(scope.statusFilter).toBeUndefined();
		});
		it('should change location parameter as well as watcher should be triggered when changed showtype to completed', function(){
			spyOn(location, 'search').and.returnValue({'showType': 'completed'});
			scope.changeShowType('completed');
			expect(location.search).toHaveBeenCalledWith('showType', 'completed');
			scope.$digest();
			expect(scope.statusFilter).toEqual({inactive : true});
		});
		it('should remove completed todos when clicked on clear completed', function(){
			scope.addToDo('asdf');
			scope.addToDo('fdsa');
			scope.todolist[0].inactive = true;
			scope.clearCompleted();
			expect(scope.todolist.length).toBe(1);
		});
		it('should check all the todos when called toggleDisplayAll method', function(){
			scope.addToDo('asdf');
			scope.addToDo('fdsa');
			scope.toggleDisplayAll(true);
			expect(scope.todolist[0].inactive).toBe(true);
			expect(scope.todolist[1].inactive).toBe(true);
			scope.toggleDisplayAll(false);
			expect(scope.todolist[0].inactive).toBe(false);
			expect(scope.todolist[1].inactive).toBe(false);
		});
	});
});
