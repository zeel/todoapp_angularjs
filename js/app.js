define(['angular', 'angularLocalStorage', 'todoController'],function(angular, angularLocalStorage, todoController)
{
	var app = angular.module('todoApp', ['LocalStorageModule']);
	app.controller('todoController', todoController);
	return app;
})