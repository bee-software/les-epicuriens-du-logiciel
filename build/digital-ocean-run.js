(function() {
    "use strict";

    var DigitalOceanAPI = require('digitalocean-api');
    var Droplet = require('./droplet-command.js');

    var apiKey = '88a6bf392b09d41fdf78c5f6f627a5a9';
    var clientId = 'iiTHjmRrCDiKSE9CGVSjC';
    var api = new DigitalOceanAPI(clientId, apiKey);

    var droplet = new Droplet(api);
    droplet.getAll();

    //droplet.create('les-epicuriens-du-logiciel');
}());

