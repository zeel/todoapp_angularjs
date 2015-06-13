angular.module('todoApp', ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider)
{
	$urlRouterProvider.otherwise("/");
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