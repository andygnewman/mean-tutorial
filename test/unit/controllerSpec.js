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

    it('should allow a new post to be created', function() {
      scope.title = 'new post';
      scope.addPost();
      expect(scope.posts.length).toBe(6);
    });

    it('should not create a new post if no post text', function() {
      scope.addPost();
      expect(scope.posts.length).toBe(5);
    });

    it('should allow upvotes to be incremented', function() {
      scope.title = 'new post';
      scope.addPost();

      expect(newPost(scope).upvotes).toBe(0);
      scope.incrementUpvotes(newPost(scope));
      expect(newPost(scope).upvotes).toBe(1);
    });

    it('should allow a link to be added for a new post', function() {
      scope.title = 'new post';
      scope.link = 'http://initialdigital.com';
      scope.addPost();

      expect(newPost(scope).link).toBe('http://initialdigital.com');

    });

    it('should not have a link element if no link text entered', function() {
      scope.title = 'new post';
      scope.addPost();

      expect(newPost(scope).link).toBe(undefined);
    });

  });

});

var newPost = function(scope) {
  for (var i = 0; i < scope.posts.length; i++) {
    if (scope.posts[i].title === 'new post') {
      return scope.posts[i];
    }
  }
};
