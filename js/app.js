define(['angular', 'todoController'],function(angular, todoController)
{
	var app = angular.module('todoApp', []);
	app.controller('todoController', todoController);
	return app;
})