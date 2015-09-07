var appService = angular.module('app.services', []);

appService.factory('version', ['$rootScope', function ($rootScope) {
    var version = {phone: 'iphone', version: 'v2.1'};
    return version;
}]);