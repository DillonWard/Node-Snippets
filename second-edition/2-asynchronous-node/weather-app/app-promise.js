const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Enter the address to fetch weather for',
        string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=M57UBiG89z0lFeGwUnH2rPxHAsTehAco&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) =>{
    if (response.data.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
        throw new Error('Unable to find address.')
    }
    var latitude = response.data.results[0].locations[0].latLng.lat;
    var longitude = response.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/a2bf8241d6918aa72932252a3fc73242/${latitude},${longitude}`;
    return axios.get(weatherURL);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature}, but it feels like ${apparentTemperature}.`);
}).catch((e) =>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    } else{
        console.log(e.message);
    }
});
