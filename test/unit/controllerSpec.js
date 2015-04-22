'use strict';

describe('AndyNews Controllers', function() {

  describe('MainCtrl', function() {
    var scope

    it('should create "test" with text "Hello Andy"', function() {
      inject(function($rootScope) {
        scope = $rootScope.$new();
      });
      expect($scope.test).toBe('Hello Andy');
    });

  });

});
