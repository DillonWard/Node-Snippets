const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Dillon'}).then((res) =>{
        console.log('Deleted Many');
        console.log(res);
    });

    db.collection('Users').findOneAndDelete(
        {_id: new ObjectID("5c741a2c05aebd329c99aa40")}
        ).then((res)=>{
            console.log('Deleted one');
            console.log(JSON.stringify(res, undefined, 2));
        });
});