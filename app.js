const express = require('express');
const app = express();
const port = '8000';
const mongoose = require('mongoose');
const bodyP = require('body-parser');
const methodOver = require('method-override');

const authorRoutes = require('./routes/authors');
const booksRoutes = require('./routes/books');
const combRoutes = require('./routes/combine');

mongoose.connect('mongodb://localhost/knjige', {
    useMongoClient:true
});

app.use(bodyP.urlencoded({extended: true}));
app.use(methodOver("_method"));
app.set(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.send("Zdravo praktikantkinje!!!"));

app.use(authorRoutes);
app.use(booksRoutes);
app.use(combRoutes);

app.get('*', (req, res) => {
    res.status(404);
    res.send("404 page not found");
});

app.listen(port, () => console.log("Server is runing"));