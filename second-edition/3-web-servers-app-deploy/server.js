// first we create an express const
const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
// then we create an express 'app' which is the return result of calling express as a function
var app = express();

app.engine('handlebars', exphbs({
    extname: '.hbs',
    defaultLayout: 'main', 
    partialsDir: __dirname + '/views/partials'
}));
app.engine('.hbs', exphbs({ extname: '.hbs' , helpers: require('./static/helpers').helpers}));
app.set('view engine', 'handlebars');

app.use((request, response, next) =>{
    var now = new Date().toString();
    var log = `${now}: ${request.method} ${request.url}`;
    console.log(log);
    
    fs.appendFile('server.log', log + '\n', (err) =>{
        if(err){
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((request, response, next) =>{
//     response.render('maintenance.hbs', {
//         pageTitle: "We'll be right back"
//     });
// });

app.use(express.static(__dirname + '/static'));

// then we can setup the HTTP route handlers
// get takes 2 parameters, the URL and the function to run when on that route
app.get('/', (request, response) => {
    // we respond to the request by sending back some data
    //response.send('<h1>Hello Express!</h1>');

    response.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the Home Page',
    });
    // Express handles objects for you converting it to JSON and sending it back to the browser
    // response.send({
    //     name: 'Dillon',
    //     likes: [
    //         'People',
    //         'Places'
    //     ]
    // });
});

app.get('/about', (request, response) => {
    // renders the templates setup with current view engine
    response.render('about.hbs', {
        pageTitle: 'About Page',
    });
});


app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to handle this request'
    });
});




// deploy the app locally on the port 3000
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});