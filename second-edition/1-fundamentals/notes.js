/*
    #1.The module object can be used for exporting properties
    #2.The module object is mostly used for exporting functions
    #3.Anonymous functions can be chaged to arrow functions
    #4.When exporting an object where the object name is the same as the function
        you can use leave in the name rather than the traditional key:value way
    #5.Writing to a file but before we do we read the file to check if values are
        already in it. If there are, add those values to the notes array
    #6.Ensuring that the titles in the json are unique. If there are no duplicates add them
    #7.Filtering through all the notes and checking the titles, if the note doesn't have the title
        entered it will be added to an array and saved over the JSON
*/

const fs = require('fs');

var fetchNotes = () =>{
    try {
        // #5
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// #1
// module.exports.age = 22;

// #2 & #3
var addNote =  (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    // #6
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) =>{
    // filtering the note we need into an array and returning the first index
    var notes = fetchNotes();
    var filterdNote = notes.filter((note) => note.title === title);
    return filterdNote[0];
}; 

// #7
var deleteNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) =>{
    console.log('------');
    console.log(`Note Title: ${note.title}`);
    console.log(`Note Text: ${note.body}`);
};

module.exports = {
    // addNote: addNote
    addNote, // #4
    getAll,
    getNote,
    deleteNote,
    logNote
};