console.log('Starting app');

/*
    Asynchronous code:
    setTimeout is an example of non-blocking coding where other things may happen together rather than the application waiting to continue
    The first 2 console.logs are going to execute (starting/finishing), and since it's non-blocking the timeout will be called in parallel
    The first 2 consolg.logs are instant (starting/finishing), and then after 2 seconds the setTimeout executes. This is non-blocking, it
    didn't have to wait for other code to execute, nor did the final console.log.
    
*/

setTimeout(()=> {
    console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
    console.log('Inside the second callback');
}, 0);

console.log('Finishing up');