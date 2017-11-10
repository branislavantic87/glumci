const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/book');

router.put('/authors/:idA/add/:idB', (req, res) => {
    Author.findById(req.params.idA, (err, foundAuthor) => {
        if (err) throw err;
        Book.findById(req.params.idB, (err, foundBook) => {
            if (err) throw err;
            /*var isBooked = false;
            for (i = 0; i < foundAuthor.books.length; i++) {
                if(foundAuthor.books[i].data == foundBook._id.toString()) {
                    isBooked = true;
                    break;
                }
            }
            if(!isBooked) {*/
                foundAuthor.books.push({
                    data: foundBook._id,
                    earnings: req.body.earnings
                });
                foundAuthor.save();
                res.send("Snimio!!");
            //} else {
              //  res.send("Ta knjiga vec postoji!");
            //}

        })



    })
})

module.exports = router;