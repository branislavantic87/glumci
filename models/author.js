const mongoose = require('mongoose');


var authorSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    books: [
        {
            data: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            },
            earnings : String,
            _id : false
        }
    ]

});


module.exports = mongoose.model('Author', authorSchema);