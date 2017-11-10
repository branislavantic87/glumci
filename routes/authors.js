const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/authors', (req, res) => {
    Author.find({}, (err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

router.post('/authors', (req, res) => {
    var author = {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    };
    Author.create(author, (err, result) => {
        if (err) throw err;
        console.log("SNIMIO!");
        res.redirect("/authors");
    });
});

// SHOW
router.get('/authors/:id', (req, res) => {
    var id = req.params.id;
    Author.findById(id).populate("books.data").exec( (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
 // UPDATE
router.put('/authors/:id', (req, res) => {
    var updateAuthor = {
        $set: {
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age
        }
    }
    Author.findByIdAndUpdate(req.params.id, updateAuthor, (err, res) => {
        if (err) throw err;
        console.log("Promenjeno!!");
        res.json(res);
    })
})

module.exports = router;