var myApp = angular.module("myList",[]);

myApp.controller("myListController",function($scope) {
    $scope.items = ["ElementA", "ElementB", "ElementC"];
    $scope.newItem = "";
    $scope.pushItem = function () {
        if ($scope.newItem !== "") {
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
    $scope.deleteItems = function (index){
        $scope.items.splice(index,1);
    }

});
