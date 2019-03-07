const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var titleOptions = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of a note',
    demand: true,
     alias: 'b'
};


const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,

    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleOptions

})
.command('remove', 'Remove a note',{
    title: titleOptions
})
.help()
.argv; //#7

var command = argv._[0]; //#6

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
    if(note){ 
            console.log(`Note successfully created`);
            notes.logNote(note);
    }else{
        console.log(`Note ${argv.title} already in use`);
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log(`Note found!`);
        notes.logNote(note);
    }else{
        console.log(`No such note "${argv.title}" exists`);
    }
}else if(command === 'remove'){

    var noteRemoved = notes.deleteNote(argv.title);
    var message = noteRemoved ? `Note ${argv.title} was deleted` : `Note ${argv.title} does not exist`;
    console.log(message);
}else{
    console.log('Command not recognized!');
}




/*
    #1.Require allows you to:
        1. Load modules that come with Node.js i.e. http module
        2. Load in third party libraries i.e. Express
        3. To Require our own files so you can fragment apps

    #2.Template Strings can be used in print statements i.e. user.username
    #3.Can refer to other properties & functions in other files that have an export module
    #4.Can pass variables into other files and use their functions
    #5.After using npm install <package-name> we can use any external packages
    #6.Arguments can be passed into through the command line with 'process.argv'
    #7.yargs.argv is yarg's version of argv that allows for better handling of input in different formats
console.log("Starting app.js");

const fs = require('fs'); // #1
// const os = require('os');
const _ = require('lodash'); // #5

const notes = require('./notes'); // #3
var res = notes.addNote();
console.log(res);
console.log('Result: ', notes.add(9, -2));// #4

var user = os.userInfo();
// #2
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
    if(err){
        console.log("Unable to write to file");
    }
});
// fs.appendFileSync('greetings.txt', 'Hello World!');

console.log(_.isString(true));
console.log(_.isString('Hello'));

var filteredArray = _.uniq([2, 2, 1, 3]);
console.log(filteredArray);
*/