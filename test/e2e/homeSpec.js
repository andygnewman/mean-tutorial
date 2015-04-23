describe("Andy's first angular app", function() {
  it('should have "Hello Andy!" on the page', function() {
    browser.get('app/index.html');
    expect(element(by.binding('test')).getText()).toBe('Hello Andy!');
  });
});
