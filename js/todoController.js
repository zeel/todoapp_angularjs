define([],function()
{
  'use strict';
  function todoController($scope, $filter,$location,localStorageService){
    $scope.todolist = []
    $scope.countActive = 0;
    $scope.statusFilter = undefined;
    $scope.showType = "all";
    if(localStorageService.get('todolist'))
    {
      $scope.todolist = localStorageService.get('todolist');
    }
    else
    {
      localStorageService.set('todolist', $scope.todolist);
    }
    localStorageService.bind($scope, 'todolist');
    $scope.$watch("todolist", function(newValue, oldValue)
    	{
    		$scope.countActive = $filter('filter')($scope.todolist, { inactive: false }).length;
        //if all todos are checked make selectAll true
        if($scope.todolist.length && $scope.countActive == 0)
        {
          $scope.selectAll = true;
        }
        else
        {
          $scope.selectAll = false;
        }
    	}, true);
    $scope.addToDo = function(todoString)
    {
    	$scope.todolist.push({name: todoString, inactive : false});
    	//remove the previously entered text
    	$scope.todo = "";
    }
    $scope.removeToDo = function(index){
      $scope.todolist.splice(index,1);
    }
    $scope.changeShowType = function(showType)
    {
      $location.search('showType',showType);
    }
    $scope.toggleDisplayAll = function(selectAll)
    {
    	$scope.todolist.forEach(function(item){
    		item.inactive = selectAll;
    	})
    }
    $scope.clearCompleted = function()
    {
    	$scope.todolist = $scope.todolist.filter(function(item)
      {
        return !item.inactive;
      })
    }
    //Monitor the current route for changes and adjust the filter accordingly.
    $scope.$watch(function() {
     return $location.search();
   }, 
    function(newValue)
    {
      $scope.showType = newValue.showType;
      if(newValue.showType == "completed")
      {
        $scope.statusFilter = {inactive : true};
      }
      else if(newValue.showType == "active")
      {
        $scope.statusFilter = {inactive : false};
      }
      else if(newValue.showType == "all")
      {
        $scope.statusFilter = undefined;
      }
    },true);
  };
  todoController.$inject = ["$scope", "$filter", "$location", "localStorageService"];
  return todoController;
});