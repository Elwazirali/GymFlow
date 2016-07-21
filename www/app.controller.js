app.controller('appCtrl', function ($scope, $ionicModal, localStorageService) {
    var vm = this;
    var taskData = 'task';
    vm.tasks = [];

    vm.task = {};

    $ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope, // vm used instead of $scope flakily
        animation: 'slide-in-up'
    }).then(function (modal) {
        vm.newTaskModal = modal;
    });

    vm.openTaskModal = function () {
        vm.newTaskModal.show();
    };

    vm.closeTaskModal = function () {
        vm.newTaskModal.hide();
    };

    vm.getTasks = function () {
        //fetches task from local storage
        if (localStorageService.get(taskData)) {
            vm.tasks = localStorageService.get(taskData);
        } else {
            vm.tasks = [];
        }
    };
    vm.createTask = function () {
        //creates a new task
        vm.tasks.push(vm.task);
        localStorageService.set(taskData, vm.tasks);
        vm.task = {};
        //close new task modal
        vm.newTaskModal.hide();
    };
    vm.removeTask = function (index) {
        //removes a task
        vm.tasks.splice(index, 1);
        localStorageService.set(taskData, vm.tasks);
    };
    vm.completeTask = function (index) {
        //updates a task as completed
        if (index !== -1) {
            vm.tasks[index].completed = true;
        }

        localStorageService.set(taskData, vm.tasks);
    }
});
