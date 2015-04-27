(function () {
    "use strict";

    var size521MB = 66;
    var imageUbuntu1404x64 = 9801950;
    var regionNewYork3 = 8;
    var francoisSshKey = {ssh_key_ids: [64035]};

    var DropletCommand = function (api) {
        this.api = api;
    };
    module.exports = DropletCommand;

    DropletCommand.prototype.getAll = function () {
        this.api.dropletGetAll(function (error, droplets) {
            console.log(droplets);
        });
    };

    DropletCommand.prototype.create = function(dropletName){
        this.api.dropletNew(dropletName, size521MB, imageUbuntu1404x64, regionNewYork3, francoisSshKey, function (error, message) {
            console.log(message);
        });
    };

    DropletCommand.prototype.destroy = function(dropletId){
        this.api.dropletDestroy(dropletId, function(error, message){
            console.log(message);
        });
    };
}());



