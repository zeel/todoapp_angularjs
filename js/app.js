define(['config', 'todoController'],function(config, todoController)
{
	var app = angular.module('todoApp', ['ui.router']);
	app.config(config);
	app.controller('todoController', todoController);
})