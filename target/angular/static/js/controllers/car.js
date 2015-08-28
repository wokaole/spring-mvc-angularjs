'use strict';

var carController = angular.module('carController',[]);

carController.controller('carCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.cars = [];
    $scope.fetchCarsList = function() {
        $http.get('cars/carList.json').success(function(data) {
            $scope.cars = data;
        });
    };
    $scope.addCar = function() {
        $http.post('cars/car', {carName: $scope.carName}).success(function() {
            $scope.fetchCarsList();
        });
        $scope.carName = '';
    };

    $scope.fetchCarsList();
}]);