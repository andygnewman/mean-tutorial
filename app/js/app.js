var app = angular.module('andyNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = "Hello Andy!";
}]);
