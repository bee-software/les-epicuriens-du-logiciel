(function() {
    "use strict";

    var DigitalOceanAPI = require('digitalocean-api');
    var Droplet = require('./droplet-command.js');

    var apiKey = process.env.DIGITAL_OCEAN_APIKEY;
    var clientId = process.env.DIGITAL_OCEAN_CLIENTID;
    var api = new DigitalOceanAPI(clientId, apiKey);

    var droplet = new Droplet(api);
    droplet.getAll();

    //droplet.create('bee.software');
}());

