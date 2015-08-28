'use strict';

var app = angular.module('AngularSpringApp', ['ngRoute', 'carController', 'trainController', 'railwayStationController']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/cars', {
        templateUrl: 'cars/layout',
        controller: 'carCtrl'
        }).
        when('/trains', {
            templateUrl: 'trains/layout',
            controller: 'trainCtrl'
        }).
        when('/railwaystations', {
            templateUrl: 'railwaystations/layout',
            controller: 'railwayStationCtrl'
        }).
        otherwise({
            redirectTo: '/cars'
        });
}]);