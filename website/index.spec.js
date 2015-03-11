"use strict";

var Browser = require('zombie');
var Server = require('http-server');

describe('The home page', function () {

    var browser = new Browser();
    var homePage = 'http://localhost:5001';
    var server;

    beforeEach(function() {
        server = Server.createServer({root: "website"});
        server.listen(5001);
    });

    afterEach(function() {
       server.close();
    });

    it('displays Hello World', function (done) {
        browser.visit(homePage).then(function () {
            expect(browser.text('#hello')).toEqual('Hello World');
            done();
        });
    });
});
