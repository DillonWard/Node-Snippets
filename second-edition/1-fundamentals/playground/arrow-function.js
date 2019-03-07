/*
    Normal way of doing the square function:
    var square = (x) =>{
        var result = x*x;
        return result;
    }
    With ES6 it can be all done on one line and if there is only 1 argument you don't need parentheses:
    var square = x => x*x;
*/
var square = x => x*x;
console.log(square(9));

/*
    Usually if we want to refer to something we can say this.param, but arrow functions do not bind 'this' keyword
    Regular functions can have arguments arrays that are accessable inside the function, arrow functions do not
    have access to those arguments. Instead we have access to the GLOBAL arguments variable.

    Main differences:
    #1. You do not have access to 'this' binding
    #2. You do not have access to the 'arguments' keyword

    Errors normally occur when you try to create methods on an object and use arrow functions.
    Do not use arrow functions in those cases.
*/
var user = {
    name: 'Dillon',
    sayHi: () => {
        console.log(arguments);
        console.log(`${user.name} says hi`);
        //console.log(`${this.name} says hi`); does not work
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`${this.name} says hi`); // will work
    }
};
user.sayHiAlt(1,2,3);
// user.sayHi(1,2,3);