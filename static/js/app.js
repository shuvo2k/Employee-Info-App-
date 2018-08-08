var app = angular.module('toDo', []);
app.controller('toDoController', function ($scope, $http) {
    // $scope.todoList = [{todoText: 'Finish this app', done: false}];
    $http.get('/todo/api/').then(function (response) {
        $scope.todoList = [];
        for (var i = 0; i < response.data.length; i++) {

            var todo = {};
            todo.fname = response.data[i].fname

            todo.lname = response.data[i].lname
            todo.id = response.data[i].id
            todo.position = response.data[i].position
            todo.sallery = response.data[i].sallery
            todo.office = response.data[i].office
            $scope.todoList.push(todo);
        }
    });
    
//save the data
    $scope.saveData = function () {
        var data = {
            fname: $scope.fname,
            lname: $scope.lname,
            position: $scope.position,
            sallery: $scope.sallery,
            office: $scope.office
        };
        $http.put('/todo/api/', data)

    };

    $scope.todoAdd = function () {
        $scope.todoList.push({
            fname: $scope.fname,
            lname: $scope.lname,
            position: $scope.position,
            sallery: $scope.sallery,
            office: $scope.office
        });
        $scope.fname = "";
        $scope.lname = "";
        $scope.position = "";
        $scope.sallery = "";
        $scope.office = "";
    };
    
//update the data
    $scope.editData = function (e) {
        var loc = $scope.todoList.indexOf(e);
        $scope.eid = $scope.todoList[loc].id;
        $scope.efname = $scope.todoList[loc].fname;
        $scope.elname = $scope.todoList[loc].lname;
        $scope.eposition = $scope.todoList[loc].position;
        $scope.esallery = $scope.todoList[loc].sallery;
        $scope.eoffice = $scope.todoList[loc].office;
    };

    $scope.updateData = function () {
        var newData = {
            id: $scope.eid,
            fname: $scope.efname,
            lname: $scope.elname,
            position: $scope.eposition,
            sallery: $scope.esallery,
            office: $scope.eoffice
        };

        for (var i = 0; i < $scope.todoList.length; i++) {
            if ($scope.eid == $scope.todoList[i].id) {
                //console.log($scope.todoList[i]);
                $scope.todoList[i] = newData;
                break;
            }
        }

        var editItem = 'todo/api/' + $scope.eid + '/';
        $http.put(editItem, newData);
    };

    $scope.updateTable = function () {

        $scope.efname = "";
        $scope.elname = "";
        $scope.eposition = "";
        $scope.esallery = "";
        $scope.eoffice = "";
    };



//remove data
    $scope.removeData = function (e) {
        var remove = $scope.todoList.indexOf(e);

        var deleteItem = '/todo/api/' + $scope.todoList[remove].id + '/';
        $scope.todoList.splice(remove, 1);
        $http.delete(deleteItem);
    };
})
