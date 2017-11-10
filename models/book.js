const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    genre: String,
    releaseDate: {
        type: Date,
        default: Date.now()
    }
 
});

module.exports = mongoose.model('Book', bookSchema);