const request = require('request');

var geocodeAddress = (address) =>{

    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) =>{
        request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=M57UBiG89z0lFeGwUnH2rPxHAsTehAco&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            reject('Unable to connect to server.')
        } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
            reject('Cannot find that address.')
        } else if (body.results[0].locations[0].geocodeQualityCode !== 'A1XAX') {
            resolve({
                address: body.results[0].providedLocation.location,
                latitude:body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }

        //console.log(JSON.stringify(body, undefined, 2)); // stringify and specify indentation to show the full object
        // console.log(JSON.stringify(response, undefined, 2));    
    });
    })
    

};

geocodeAddress('19146').then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (error) =>{
    console.log(error);
})