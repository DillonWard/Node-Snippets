/*
    Promises have 2 states: resolve and reject. Resolve means that the promise has been fulfilled for example a HTTP request was successful,
    whereas reject means that the promise could not be fulfilled so the promise was rejected i.e. HTTP request was tried but was unsuccessful

    When we use a promise, it takes 2 functions for if it passed or if it failed:

    somePromise.then((passMessage) =>{ after passing do this}, 
    (failMessage) => { after failing do this})
*/

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) =>{
    console.log('Should be 45: ', res);
}).catch((errorMessage) =>{
    console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => { // create variable to store a promise object
//     setTimeout(() => {
//         resolve('It worked!');
//         //reject('Unable to fulfill promise')
//     }, 2500)
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });