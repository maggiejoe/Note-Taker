const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');
var Notes = require('../db/db.json');
const path = require('path');

// get placeholder notes from db.json file
router.get('/notes', (req, res) => {
    let notes = Notes;
    res.json(notes);
});

// post new notes
router.post('/notes/', (req, res) => {
    req.body.id = uniqid();
    Notes.push(req.body);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(Notes));
    res.json(Notes);
});

// delete a note
// router.delete('/notes/:id', (req, res) => {
//     // console.log(req.params.id);
//     // console.log(`Your Note ${req.params.id} has now been deleted`);

//     let newArr = Notes.filter(note => note.id !== parseInt(req.params.id));
//     fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newArr));

//     res.json(Notes);
// });

module.exports = router;