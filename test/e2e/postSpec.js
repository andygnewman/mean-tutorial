describe("Andy's first angular app - Posts Page", function() {

  describe("navigating to the post page", function() {

    it('should navigate to a specific post page when click comments', function() {
      browser.get('app/index.html');
      var firstPost = element.all(by.repeater('post in posts')).first();
      var firstPostLink = firstPost.element(by.css('.link-to-post'));
      var firstPostTitle = firstPost.element(by.binding('post.title')).getText();

      firstPostLink.click()
        .then(function() {
          expect(element(by.binding('post.title')).getText()).toEqual(firstPostTitle);
      });

    });

  });

  describe("posts page", function() {

    beforeEach(function() {
      browser.get('app/index.html#/posts/0');
    });

    it('should allow a new comment to be added', function() {
      var comments = element.all(by.repeater('comment in post.comments'));

      element(by.model('body')).sendKeys('great post');
      element(by.id('post-comment-button')).click();

      expect(comments.count()).toBe(1);
    });

  });

});
