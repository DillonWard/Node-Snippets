const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a2bf8241d6918aa72932252a3fc73242/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to fetch weather')
        }else{
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;