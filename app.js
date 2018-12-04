console.log('Starting the app ...');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');

const args = yargs.argv;
var command = _.toLower(process.argv[2]);

switch (command) {
    case 'create':
        notes.createNote(args.title, args.body);
        break;
    case 'read':
        notes.readNote(args.title);
        break;
    case 'update':
        notes.updateNote(args.title, args.body);
        break;
    case 'delete':
        notes.deleteNote(args.title);
        break;
    case 'list':
        notes.listNotes();
        break;
    default:
        console.log('Command not found');
}