var appDirect = angular.module('app.directives', []);

appDirect.directive('showVersion', ['version', function (version) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                alert(version.phone);
            });
        }
    }
}]);