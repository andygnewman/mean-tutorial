var app = angular.module('andyNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouteProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: '/posts.html',
          controller: 'PostsCtrl'
        });

      $urlRouteProvider.otherwise('home');
}]);


app.factory('postsFactory', [function() {
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

app.controller('MainCtrl',
  ['$scope', 'postsFactory',
    function($scope, postsFactory) {
      $scope.test = "Hello Andy!";
      $scope.posts = postsFactory.posts;
      $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {return;}
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });
        $scope.title = '';
        $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
}]);

app.controller('PostsCtrl',
  ['$scope', '$stateParams', 'postsFactory',
    function($scope, $stateParams, postsFactory) {
      $scope.post = postsFactory.posts[$stateParams.id];
}]);

app.filter('index', function() {
  return function(array, index) {
    if (!index) {
      index = 'index';
    }
    for (var i = 0; i < array.length; i++) {
      array[i][index] = i;
    }
    return array;
  };
});
