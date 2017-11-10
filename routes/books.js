const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/books', (req, res) => {
    Book.find({}, (err, data) => {
        if (err) throw err;
        res.json(data)
    });
});

router.post('/books', (req, res) => {
    var book = {
        title: req.body.title,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate
    };
    Book.create(book, (err, result) => {
        if (err) throw err;
        res.redirect('/books');
    });
});
// UPDATE

router.put('/actors/:id', (req, res) => {
    var updateBook = {
        $set: {
            title: req.body.title,
            genre: req.body.genre,
            releaseDate: req.body.releaseDate
        }
    }
    Book.findByIdAndUpdate(req.params.id, updateBook, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;