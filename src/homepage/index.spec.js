(function () {
    "use strict";

    var Browser = require('zombie');
    var Server = require('http-server');

    describe('The home page', function () {

        var browser = new Browser();
        var homePage = 'http://localhost:5001';
        var server;

        beforeAll(function (done) {
            server = Server.createServer({root: "dist"});
            server.listen(5001);
            browser.visit(homePage, done);
        });

        afterAll(function () {
            server.close();
        });

        it('Title is Les Épicuriens du logiciel', function () {
            browser.assert.text('title', 'Les Épicuriens du logiciel');
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
        it('Has a footer', function () {
            browser.assert.element('footer');
        });
    });
}());
