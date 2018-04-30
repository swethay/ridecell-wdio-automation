var assert = require('assert');

describe('Scheduled Rentals Homepage', function() {
    it('should have the right title', function () {
        browser.url('https://scheduledrentals.ridecell.us/dispatch/login');
        var title = browser.getTitle();
        assert.equal(title, 'Login');
    });
});