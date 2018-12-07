console.log('Starting notes.js ...');

const fs = require('fs');
const _ = require('lodash');

const DATA_FILE = 'notes-data.json';

var loadNotesFile = () => {
	try{
    	return JSON.parse(fs.readFileSync(DATA_FILE));
    }catch(e){
		return [];
    }
};

var saveNotes = (notes)=>{
	fs.writeFileSync(DATA_FILE, JSON.stringify(notes));
};

var getNote = (title)=>{
    var found = loadNotesFile().filter((note)=>note.title === title );
    return found[0];
};
var createNote = (title, body) => {
    var notes = loadNotesFile();

    var dups = notes.filter((note)=>note.title === title );
    if(dups.length===0){
		var note = {title,body};
    	notes.push(note);
    	saveNotes(notes);
    	return note;
    }
};

var readNote = (title) => {
    return getNote(title);
};

// var updateNote = (title, body) => {
//     if(_.isEmpty(title) || _.isEmpty(body)){
//     	console.error('Title and body must be provided');
//     	return;
//     }

// 	var note = getNote(title);
// 	if(note){
// 		note.body = body;

// 		return true;
// 	}

//     return false;
// };

var deleteNote = (title) => {
    var notes = loadNotesFile();
    var notesCount = notes.length;
    notes = notes.filter((note)=> _.toString(note.title)!==_.toString(title));
    if(notesCount === notes.length){
    	return false;
    }else{
		saveNotes(notes);
		return true;
    }
};

var listNotes = () => {
    return loadNotesFile();
};


module.exports = {
    createNote, readNote, deleteNote, listNotes
};