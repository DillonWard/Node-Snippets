// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c753e8f2a0c19c01d38139f")
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Dillon'}).toArray().then((docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Users').find({name: 'dillon'}).toArray().then((docs) =>{
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log(err);
    // });

    // db.close();
});