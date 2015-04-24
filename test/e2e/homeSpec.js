describe("Andy's first angular app", function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should have "Hello Andy!" on the page', function() {
    expect(element(by.binding('test')).getText()).toBe('Hello Andy!');
  });

  it('should have posts 1 to 5 on the page', function() {
    var postsTitle = element.all(by.repeater('post in posts').column('post.title'));

    function postsTitleText() {
      return postsTitle.map(function(elm) {
        return elm.getText();
      }).
        then(function(items) {
          return items.sort();
        });
    }

    expect(postsTitleText()).toEqual(['post1', 'post2', 'post3', 'post4', 'post5']);
  });

  it('should order the posts by number of upvotes', function() {
    var postsUpvotes = element.all(by.repeater('post in posts').column('upvote'));

    function getUpvoteValues() {
      return postsUpvotes.map(function(elm) {
        return elm.getText();
      });
    }

    function sortedUpvoteValues() {
      return getUpvoteValues().
        then(function(items) {
          return items.sort(function(a, b){return b-a;});
        });
    }

    expect(getUpvoteValues()).toEqual(sortedUpvoteValues());
  });

});
