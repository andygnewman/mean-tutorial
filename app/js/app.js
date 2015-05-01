var andyNewsApp = angular.module('andyNews', [
  'ui.router',
  'andyNewsAppControllers',
  'andyNewsAppFilters',
  'andyNewsAppServices'
  ]);

andyNewsApp.config(['$stateProvider', '$urlRouterProvider',
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
