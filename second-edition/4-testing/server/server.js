const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.status(404).send({
        error: 'Page not found.',
        name: 'Todo App'
    });
});

app.get('/users', (request, response) => {
    response.send(
        {
            name: 'Dillon',
            age: 23
        }, 
        {
            name: 'Tom',
            age: 33
        }, 
        {
            name: 'Paul',
            age: 12
        });
});
app.listen(3000);

module.exports.app = app;