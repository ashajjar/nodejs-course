console.log('Starting the app ...');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');

const args = yargs.argv;
var command = _.toLower(args._[0]);

switch (command) {
    case 'create':
        var note = notes.createNote(args.title, args.body);
        if(_.isUndefined(note)){
            console.error('A note with the same title already exists');
        }else{
            console.info('Note created! Note Title is',note.title);
        }
        break;
    case 'read':
        debugger;
        var note = notes.readNote(args.title);
        if(note){
            console.log(`Title: ${note.title}\nNote Body:\n${note.body}`);
        }else{
            console.log('Note not found!');
        }
        
        break;
    // case 'update':
    //     notes.updateNote(args.title, args.body);
    //     break;
    case 'delete':
        if(notes.deleteNote(args.title)){
            console.info('Note with the given title was deleted!');
        }else{
            console.info('Note with the given title was not found');
        }
        break;
    case 'list':
        notes.listNotes().forEach((note)=>{console.log(`\t\tNote: ${note.title}\n\t\tBody:\n\t\t\t${note.body}`);});
        break;
    default:
        console.log('Command not found');
}