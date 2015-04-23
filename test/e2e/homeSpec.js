describe("Andy's first angular app", function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should have "Hello Andy!" on the page', function() {
    expect(element(by.binding('test')).getText()).toBe('Hello Andy!');
  });

  it('should have posts 1 to 5 on the page', function() {
    var posts = element.all(by.repeater('post in posts'));

    function getPostsText() {
      return posts.map(function(elm) {
        return elm.getText();
      });
    }

    expect(getPostsText()).toEqual(['post1', 'post2', 'post3', 'post4', 'post5']);
  });

});
