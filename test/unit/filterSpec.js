describe('AndyNews Filters', function() {

  beforeEach(angular.mock.module('andyNewsAppFilters'));

  describe('index', function() {

    it('should create an index for an array passed to it',
      inject(function(index) {
        expect(index(['a', 'b', 'c'])).toBe([0,1,2]);
      }));
  });

});
