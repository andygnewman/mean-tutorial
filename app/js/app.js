var app = angular.module('andyNews', ['ui.router']);

app.factory('posts', [function() {
  var o = {
    posts: [
            {title: 'post1', upvotes: 5},
            {title: 'post2', upvotes: 2},
            {title: 'post3', upvotes: 15},
            {title: 'post4', upvotes: 9},
            {title: 'post5', upvotes: 4}
    ]
  };
  return o;
}]);

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.test = "Hello Andy!";
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {return;}
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
}]);
