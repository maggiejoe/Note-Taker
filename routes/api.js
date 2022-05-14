const router = require('express').Router();
const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

function readNotes() {
    return readFile('db/db.json', 'utf-8');
}

function parseNotes() {
    return readNotes().then(rawNotes => { 
        let notesArray = JSON.parse(rawNotes);
        return notesArray;
    })
}

router.get('/notes', (req, res) => {
    parseNotes().then(notesRes => res.json(notesRes));
});

module.exports = router;