const fs = require('fs');

var raw = {
	title:'My First Note',
	body:'This is a note about nodejs'
};

fs.writeFileSync('notes.json', JSON.stringify(raw));

var note = JSON.parse(fs.readFileSync('notes.json'));

console.log(note.title);
console.log(typeof note);
