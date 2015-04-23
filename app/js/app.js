var app = angular.module('andyNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = "Hello Andy!";
    $scope.posts = [
      'post1',
      'post2',
      'post3',
      'post4',
      'post5'
    ];
}]);
