'use strict';

var trainController = angular.module('trainController', []);

trainController.controller('trainCtrl', ['$scope', '$http', '$httpParamSerializer', function($scope, $http, $httpParamSerializer) {
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    //$http.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.trains = [];
    $scope.editMode = false;
    $scope.train = {};

    $scope.fetchTrainsList = function () {
        $http.get('trains/trainList.json')
            .success(function (data) {
                $scope.trains = data;
            });
    };

    $scope.addTrain = function () {
        //$httpParamSerializer({name: $scope.train.name, speed: $scope.train.speed, diesel: $scope.train.diesel});
        //var postData = $httpParamSerializer($scope.train);
        $http.post('trains/train', $scope.train)
            .success(function() {
                $scope.resetForm();
                $scope.fetchTrainsList();
            });
    };

    $scope.editTrain = function (train) {
        $scope.train = train;
        $scope.editMode = true;
    };

    $scope.updateTrain = function () {
        //var putData = $httpParamSerializer($scope.train);
        $http.put('trains/train', $scope.train)
            .success(function() {
                $scope.resetForm();
                $scope.editMode = false;
                $scope.fetchTrainsList();
            });
    };

    $scope.removeTrain = function (id) {
        $http.delete('trains/train/' + id)
            .success(function() {
                $scope.fetchTrainsList();
            });
    };


    $scope.removeAll = function () {
        $http.delete('trains/removeAll')
            .success(function() {
                $scope.fetchTrainsList();
            });
    };

    $scope.resetForm = function () {
        $scope.editMode = false;
        $scope.train = {};
    };

    $scope.fetchTrainsList();
}]);