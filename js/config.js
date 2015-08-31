define([],function()
{
	'use strict';
	function config($stateProvider){
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
	}
	config.$inject = ["$stateProvider"];
	return config;
});
