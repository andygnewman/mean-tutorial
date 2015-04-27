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

});
