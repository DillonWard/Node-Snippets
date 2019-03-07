/*
    A callback is a function that gets passed as an argument to another function and is executed after an event. We have an arrow function
    that is passed into the setTimeout function, and after an event (2 seconds) it is executed.
    
    setTimeout(()=> {
        console.log('Inside of callback');
    }, 2000);

*/

// we get the user id and use the callback function with the user data we get
var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Dillon'
    };

    setTimeout(() => {
        // this callback passes back the user
        callback(user);
    }, 3000);
};

// we get the user data and expect back a user object, after which we print it
getUser(10, (user) => {

    console.log(user);
});