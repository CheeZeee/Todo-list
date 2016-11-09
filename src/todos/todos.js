export default function($scope) {
  let params = {
    taskInputField: false
  };

  $scope.todos = [
    {
      task: 'do the dishes',
      isCompleted: false
    },
    {
      task: 'watch football',
      isCompleted: true
    }
  ];

  $scope.completedTaskClick = todos => {
    todos.isCompleted = !todos.isCompleted;
  };

  $scope.createTask = () => {
    params.taskInputField = false;
    $scope.taskInputField = '';
  };

  $scope.$watch('taskInputField', val => {
    if (!val && params.taskInputField) {
      $scope.todos.pop();
    } else if (val && !params.taskInputField) {
      $scope.todos.push({ task: val, isCompleted: false });
      params.taskInputField = true;
    } else if (val && params.taskInputField){
      $scope.todos[$scope.todos.length - 1].task = val;
    }
  });
}
