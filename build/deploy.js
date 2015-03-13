var DigitalOceanAPI = require('digitalocean-api');
const apiKey = '88a6bf392b09d41fdf78c5f6f627a5a9';
const clientId = 'iiTHjmRrCDiKSE9CGVSjC';
var api = new DigitalOceanAPI(clientId, apiKey);


const dropletName = "les-epicuriens-du-logiciel";
const size521MB = 66;
const imageUbuntu1404x64 = 9801950;
const regionNewYork3 = 8;
const francoisSshKey = {ssh_key_ids: [64035]};

api.domainGetAll(function(error, droplets){
    console.log(droplets);
});

//api.dropletNew(dropletName, size521MB, imageUbuntu1404x64, regionNewYork3, francoisSshKey, function (error, droplets) {
//    console.log(droplets);
//});
