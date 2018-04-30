var assert = require('assert');

describe('Ridecell Homepage', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('https://ridecell.com/');
        var title = browser.getTitle();
        assert.equal(title, 'The World\'s Most Intelligent Mobility Platform | Ridecell');
    });
});