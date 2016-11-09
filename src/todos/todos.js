import _ from 'lodash';

export default function($scope) {
  let params = {
    taskInputField: false
  };

  $scope.todos = [
    {
      task: 'do the dishes',
      isCompleted: false,
      isEditing: false
    },
    {
      task: 'watch football',
      isCompleted: true,
      isEditing: false
    }
  ];

  $scope.completedTaskClick = todos => {
    todos.isCompleted = !todos.isCompleted;
  };

  $scope.addTask = () => {
    params.taskInputField = false;
    $scope.taskInputField = '';
  };

  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

  $scope.updateTask = todo => {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  }

  $scope.onCancelClick = todo => {
    todo.isEditing = false;
  };

  $scope.removeTask = taskToRemove => {
    _.remove($scope.todos, todo => todo.task === taskToRemove.task);
  }

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
