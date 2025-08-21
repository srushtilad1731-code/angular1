//Define AngualarJS app
var app = angular.module("studentApp", []);

    //define controller
    app.controller("StudentController",function ($scope) {
        $scope.student = {
            name:"john Doe",
            roll:"101",
            course:"computer science"
        };
    });

    
