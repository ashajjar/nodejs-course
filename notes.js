console.log('Starting notes.js ...');

var createNote = (title, body) => {
    console.log(`Adding a not with the title "${title}" ... the note says : \n\t\t ${body}`);
};

var readNote = (title) => {
    console.log("Reading note with title:", title);
};

var updateNote = (title, body) => {
    console.log("Updating note with title:", title);
    console.log("Setting body to :", body);
};

var deleteNote = (title) => {
    console.log("Deleting note with title:", title);
};

var listNotes = () => {
    console.log("Listing all notes");
};


module.exports = {
    createNote, readNote, updateNote, deleteNote, listNotes
};