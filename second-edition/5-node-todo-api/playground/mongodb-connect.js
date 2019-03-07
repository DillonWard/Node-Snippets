// const MongoClient = require('mongodb').MongoClient;
// object destructuring allows us here to create a variable from the 'MongoClient' when we require 'mongodb'
const {MongoClient, ObjectID} = require('mongodb'); 

// Object destructuring is when you pull out values from an object to create variables
// var user = {name: 'dillon', age: 23};
// var {name} = user; // from the user object we create a name variable
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text:' Something to do',
    //     completed: false

    // }, (err, res) => {

    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name:' Dillon',
    //     age: 23,
    //     location: 'Galway, Ireland'

    // }, (err, res) => {

    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    db.close();
});