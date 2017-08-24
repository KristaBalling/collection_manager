const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/books');
const Book = require('./models/books');


//must comment some code out and run one at a time

let book = new Book({name: "The Fountainhead"});
books.genres.push({authorName: 'Ayn Rand', genre: 'fiction'});
console.log(books.toObject());


const book = new Book({name: "Cavalier and Klay", authorName: 'Michael Chabon'})({name: "Oryx and Crake", authorName: 'Margaret Atwood'});
book.save()
  .then(function () {

  })
  .catch(function () {

  });

  book.updateOne(),
  {$push: {steps: "read cover to cover"}}

  book.deleteOne({name: "Oryx and Crake"})


  book.findOne({name: "Oryx and Crake"})
    .then(handleSuccess)
    .catch(handleError);
