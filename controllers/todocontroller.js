angular.module('todoApp')
.controller('todoController', ["$scope", "$filter", "$state", function todoController($scope, $filter, $state) 
{
  $scope.todolist = []
  $scope.countActive = 0;
  $scope.statusFilter = null;
  // Monitor the current route for changes and adjust the filter accordingly.
    $scope.$on('$stateChangeSuccess', function () 
    {
      var todostate = $state.current.todoState;
      if(todostate == "completed")
      {
        $scope.statusFilter = {inactive : true};
      }
      else if(todostate == "active")
      {
        $scope.statusFilter = {inactive : false};
      }
      else if(todostate == "all")
      {
        $scope.statusFilter = null;
      }
    });
  $scope.$watch("todolist", function(newValue, oldValue)
  	{
  		$scope.countActive = $filter('filter')($scope.todolist, { inactive: false }).length;
  	}, true);
  $scope.addToDo = function(todoString)
  {
  	$scope.todolist.push({name: todoString, inactive : false});
  	//remove the previously entered text
  	$scope.todo = "";
  }
  $scope.toggleDisplayAll = function(selectAll)
  {
  	$scope.todolist.forEach(function(item){
  		item.inactive = !selectAll;
  	})
  }
  $scope.clearCompleted = function()
  {
  	$scope.todolist = $scope.todolist.filter(function(item)
    {
      return !item.inactive;
    })
  }
}])