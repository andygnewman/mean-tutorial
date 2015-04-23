'use strict';

describe('AndyNews Controllers', function() {

  describe('MainCtrl', function() {
    var scope;

    beforeEach(angular.mock.module('andyNews'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('MainCtrl', {$scope: scope});
    }));

    it('should create "test" with text "Hello Andy!"', function() {
      expect(scope.test).toBe('Hello Andy!');
    });

    it('should create "posts" with 5 posts in it', function() {
      expect(scope.posts.length).toBe(5);
    });

  });

});
