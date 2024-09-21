const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const description = req.body.description;

    const newNote = new Note({
        title,
        imgUrl,
        description,
    });

    newNote.save()
        .then(() => res.json('Note added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
