angular.module('todoApp', ["ui.router"])
.config(["$stateProvider", function($stateProvider)
{
	$stateProvider.state('all',{
		url : "/",
		todoState : "all",
		controller : 'todoController'
	})
	.state('all.active',{
		url : "active",
		todoState : "active",
		controller : 'todoController'
	})
	.state('all.completed',{
		url : "completed",
		todoState : "completed",
		controller : 'todoController'
	});
}])