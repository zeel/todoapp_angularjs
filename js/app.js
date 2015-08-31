define(['angular','angularUIRouter', 'config', 'todoController'],function(angular,angularUIRouter, config, todoController)
{
	var app = angular.module('todoApp', ['ui.router']);
	app.config(config);
	app.controller('todoController', todoController);
})