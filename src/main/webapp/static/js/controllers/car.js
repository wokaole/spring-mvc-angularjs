'use strict';

var carController = angular.module('carController',[]);

carController.controller('carCtrl', ['$scope', '$http', '$httpParamSerializer', function($scope, $http, $httpParamSerializer) {

    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    //$http.defaults.headers.delete["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.cars = [];
    $scope.fetchCarsList = function() {
        $http.get('cars/carList.json').success(function(data) {
            $scope.cars = data;
        });
    };
    $scope.addCar = function() {
        //$http.post('cars/car', {carName: $scope.carName})
        $http({
            url: 'cars/car',
            method: "POST",
            data: $httpParamSerializer({carName: $scope.carName})
        }).success(function() {
            $scope.fetchCarsList();
        });
        $scope.carName = '';
    };
    $scope.removeCar = function (car) {
        $http.delete('cars/car/' + car)
            .success(function () {
                $scope.fetchCarsList();
            });
    };
    $scope.removeAll = function () {
        $http.delete('cars/removeAll')
            .success(function () {
                $scope.fetchCarsList();
        });
    };

    $scope.fetchCarsList();
}]);