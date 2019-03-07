/*
    #1.JSON.stringift() converts a javascript object into a JSON string
        var obj = {
            name: 'Dillon'
        } => {"name":"Dillon"}

var obj = {
    name: 'Dillon'
};

var stringObj = JSON.stringify(obj); // #1
console.log(typeof stringObj);
console.log(stringObj);
*/
/*
    #2.JSON.parse() converts a JSON string into an object

var personString = '{"name": "Dillon", "age": 23}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/
/*
    #3. Writing to a file a JavaScript object and send it in the form of JSON
    #4. Read in that JSON and store it as a JavaScript object
*/
const fs = require('fs');

// #3
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// #4 
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);