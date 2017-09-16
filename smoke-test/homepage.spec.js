(function () {
    "use strict";

    var Browser = require('zombie');

    describe('The home page', function () {

        var browser = new Browser();
        var homePage = process.env.URL;

        beforeAll(function (done) {
            browser.visit(homePage, done);
        });

        it('Has the jumbotron section', function () {
            browser.assert.element('section.jumbotron');
        });

        it('Has the client section', function () {
            browser.assert.element('section.client');
        });

        it('Has the valeur section', function () {
            browser.assert.element('section.valeur');
        });
    });
}());
